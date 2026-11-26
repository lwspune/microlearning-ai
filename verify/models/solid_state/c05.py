"""C05 Formula from occupied voids: answer models (the key, and one per misconception).

N ions of the close-packed lattice leave 2N tetrahedral and N octahedral voids; an ion filling a fraction f of
one kind numbers f times that. params:
  ask="formula": order (elements in formula order), sphere (the lattice element), fill ("X=tetra:1/3", ...);
  ask="fraction": formula ("Al=2", "O=3"), sphere, void ("tetra" | "octa"): the fraction of those voids filled.
"""
from functools import reduce
from math import gcd

from sympy import Rational, Symbol, ilcm

KEY_VOIDS = {"tetra": 2, "octa": 1}


def formula(order, counts):
    """Smallest whole-number ratio in the given order, as a named answer like X2Y3."""
    den = reduce(ilcm, [Rational(counts[k]).q for k in order], 1)
    whole = [int(Rational(counts[k]) * den) for k in order]
    g = reduce(gcd, whole)
    return Symbol("".join(k + (str(n // g) if n // g != 1 else "") for k, n in zip(order, whole)))


def _fills(p):
    for f in p["fill"]:
        el, rest = f.split("=")
        kind, frac = rest.split(":")
        yield el, kind, Rational(frac)


def _solve(p, voids=KEY_VOIDS, ignore_fraction=False, invert=False):
    if p["ask"] == "formula":
        counts = {p["sphere"]: Rational(1)}
        for el, kind, frac in _fills(p):
            counts[el] = (1 if ignore_fraction else frac) * voids[kind]
        if invert:
            if len(counts) != 2:
                raise ValueError("inversion needs two elements")
            a, b = counts
            counts = {a: counts[b], b: counts[a]}
        return formula(p["order"], counts)
    if ignore_fraction:
        return Rational(1)  # takes every void of that kind as filled
    n = dict(x.split("=") for x in p["formula"])
    filler = next(k for k in n if k != p["sphere"])
    per_sphere = Rational(int(n[filler]), int(n[p["sphere"]]))
    if invert:
        per_sphere = 1 / per_sphere
    return per_sphere / voids[p["void"]]


def key(v, p):
    return _solve(p)


MODELS = {
    "key": key,
    "C05-M1": lambda v, p: _solve(p, voids={"tetra": 1, "octa": 2}),  # swaps the counts: N tetrahedral, 2N octahedral
    "C05-M2": lambda v, p: _solve(p, voids={"tetra": 3, "octa": 3}),  # takes the fraction of all 3N voids
    "C05-M3": lambda v, p: _solve(p, ignore_fraction=True),  # fills every void of that kind
    "C05-M4": lambda v, p: _solve(p, invert=True),  # writes the ratio upside down
}
