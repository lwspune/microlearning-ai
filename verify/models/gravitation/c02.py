"""C02 Newton's law of gravitation: answer models (the key, and one per misconception).

params["ask"]:
  "force": force, in N, between masses m1 and m2 (inputs G, m1, m2, and either rm, re with r = rm x 10^re,
           or d, R for two spheres of radius R whose surfaces are d apart);
  "pull":  the force the smaller body (m2) exerts on the bigger one (m1), same inputs as "force";
  "net":   k in the net force k G m^2 / l^2 on D (Solved Ex.5.3: A, B, C on a line, AB = BC = l, D at l from B on the
           perpendicular bisector of AC; all masses m);
  "G":     G, in N m^2/kg^2, from a measured force F between M and m at centre distance r (inputs F, M, m, r);
  "dims":  the dimensions of G, as a product of powers of M, L, T.
"""
from sympy import Integer, Rational, Symbol, sqrt

from physics import sig

M, L, T = Symbol("M"), Symbol("L"), Symbol("T")


def _r(v, *, mant=False, surf=False):
    if "rm" in v:
        return v["rm"] ** 2 * 10 ** v["re"] if mant else (v["rm"] * 10 ** v["re"]) ** 2
    d = v["d"] if surf else v["d"] + 2 * v["R"]
    return d**2


def _solve(v, p, *, lin=False, add=False, mant=False, surf=False, ratio=False, scalar=False, cancel=False,
           side_l=False, flip=False, nodim=False):
    ask, n = p["ask"], p.get("sf", 3)
    if ask in ("force", "pull"):
        r2 = _r(v, mant=mant, surf=surf)
        den = sqrt(r2) if lin else r2
        mm = v["m1"] + v["m2"] if add else v["m1"] * v["m2"]
        F = v["G"] * mm / den
        if ratio:
            F = F * v["m2"] / v["m1"]
        return sig(F, n)
    if ask == "net":
        if scalar:
            return sig(1 + Rational(1, 2) + Rational(1, 2), n)
        if cancel:
            return sig(1, n)
        side = 1 if side_l else Rational(1, 2)  # force from A (or C) in units of G m^2 / l^2
        return sig(1 + 2 * side / sqrt(2), n)
    if ask == "G":
        F, Mb, m, r = v["F"], v["M"], v["m"], v["r"]
        if flip:
            return sig(F / (Mb * m * r**2), n)
        if lin:
            return sig(F * r / (Mb * m), n)
        if add:
            return sig(F * r**2 / (Mb + m), n)
        return sig(F * r**2 / (Mb * m), n)
    if ask == "dims":
        force = M * L / T**2
        if nodim:
            return Integer(1)
        if flip:
            return force / (M**2 * L**2)
        return force * (L if lin else L**2) / M**2
    raise ValueError(f"unknown ask {ask}")


def key(v, p):
    return _solve(v, p)


def _m(asks, **kw):
    def model(v, p):
        if p["ask"] not in asks:
            raise ValueError("does not apply to this item")
        return _solve(v, p, **kw)
    return model


MODELS = {
    "key": key,
    "C02-M1": _m(("force", "pull", "G", "dims"), lin=True),  # takes the force as varying as 1/r
    "C02-M2": _m(("pull",), ratio=True),  # thinks the bigger mass pulls harder than it is pulled
    "C02-M3": _m(("force",), surf=True),  # measures r between the surfaces, not the centres
    "C02-M4": _m(("net",), scalar=True),  # adds the sizes of the forces, ignoring their directions
    "C02-M5": _m(("net",), cancel=True),  # thinks the pulls of A and C cancel completely
    "C02-M6": _m(("G", "dims"), flip=True),  # rearranges to G = F / (m1 m2 r^2)
    "C02-M7": _m(("dims",), nodim=True),  # thinks a constant like G has no dimensions
    "C02-M8": _m(("force", "G"), add=True),  # takes the force as proportional to m1 + m2
    "C02-M9": _m(("force", "pull"), mant=True),  # squares the number part of r but not its power of ten
    "C02-M10": _m(("net",), side_l=True),  # takes AD and CD as l, not l times root 2
}
