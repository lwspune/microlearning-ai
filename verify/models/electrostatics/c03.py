"""C03 Superposition of forces: answer models (the key, and one per misconception).

The force on a charge is the vector sum of the Coulomb forces of the others, each found as if the rest were absent.
Two forces F1, F2 at angle theta add as F = sqrt(F1^2 + F2^2 + 2 F1 F2 cos theta). k = 9e9 (the book's value).
params["ask"]:
  "pair":   resultant on q0 from q1 at r1 cm and q2 at r2 cm, the forces at an angle with cosine c (inputs q0, q1, q2, r1, r2, c);
  "square": resultant on one of four equal charges q at the corners of a square of side a cm (inputs q, a);
  "line":   force on q0 at the midpoint of like charges qa, qb that are d cm apart (inputs q0, qa, qb, d);
  "dir", "pair_force": named answers.
"""
from sympy import Rational, Symbol, sqrt

from physics import BOOK, sig

NAMED = {
    "dir": {"key": "away_bisector", "C03-M6": "toward_bisector", "C03-M11": "zero_force", "C03-M12": "parallel_AB"},
    "pair_force": {"key": "unchanged", "C03-M7": "shielded", "C03-M8": "becomes_net", "C03-M9": "adds_charge"},
}

K = BOOK["k_e"]
CM = Rational(1, 100)


def _f(qa, qb, r, inv1=False):
    return K * qa * qb / (r if inv1 else r**2)


def _solve(v, p, *, add=False, sub=False, perp=False, inv1=False, no_diag=False, diag_a=False, full=False):
    ask = p["ask"]
    if ask == "pair":
        F1 = _f(v["q0"], v["q1"], v["r1"] * CM, inv1)
        F2 = _f(v["q0"], v["q2"], v["r2"] * CM, inv1)
        if add:
            return sig(F1 + F2)
        if sub:
            return sig(abs(F1 - F2))
        c = 0 if perp else v["c"]
        return sig(sqrt(F1**2 + F2**2 + 2 * F1 * F2 * c))
    if ask == "square":
        a = v["a"] * CM
        F1 = _f(v["q"], v["q"], a)
        Fd = 0 if no_diag else _f(v["q"], v["q"], a if diag_a else a * sqrt(2))
        side = 2 * F1 if add else sqrt(2) * F1
        return sig(side + Fd)
    if ask == "line":
        r = v["d"] * CM * (1 if full else Rational(1, 2))
        Fa, Fb = _f(v["q0"], v["qa"], r, inv1), _f(v["q0"], v["qb"], r, inv1)
        return sig(Fa + Fb if add else abs(Fa - Fb))
    raise ValueError("unknown ask")


def key(v, p):
    if p["ask"] in NAMED:
        return Symbol(NAMED[p["ask"]]["key"])
    return _solve(v, p)


def _m(mid, asks=(), **kw):
    def model(v, p):
        if p["ask"] in NAMED:
            if mid not in NAMED[p["ask"]]:
                raise ValueError("does not apply to this item")
            return Symbol(NAMED[p["ask"]][mid])
        if p["ask"] not in asks:
            raise ValueError("does not apply to this item")
        return _solve(v, p, **kw)
    return model


MODELS = {
    "key": key,
    "C03-M1": _m("C03-M1", ("pair", "square", "line"), add=True),  # adds the magnitudes
    "C03-M2": _m("C03-M2", ("pair",), sub=True),  # subtracts the magnitudes
    "C03-M3": _m("C03-M3", ("pair",), perp=True),  # takes the forces as perpendicular
    "C03-M4": _m("C03-M4", ("square",), no_diag=True),  # leaves out the charge at the opposite corner
    "C03-M5": _m("C03-M5", ("square",), diag_a=True),  # puts the opposite corner at distance a
    "C03-M6": _m("C03-M6"),  # thinks like charges pull the test charge towards them
    "C03-M7": _m("C03-M7"),  # thinks a third charge shields the pair
    "C03-M8": _m("C03-M8"),  # confuses the force of one charge with the net force
    "C03-M9": _m("C03-M9"),  # thinks the third charge adds to the second
    "C03-M10": _m("C03-M10", ("pair", "line"), inv1=True),  # uses 1/r for each Coulomb force
    "C03-M11": _m("C03-M11"),  # cancels whole forces by symmetry
    "C03-M12": _m("C03-M12"),  # cancels the wrong components
    "C03-M13": _m("C03-M13", ("line",), full=True),  # uses the whole separation for each distance
}
