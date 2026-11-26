"""C09 Torque on a coil and the moving coil galvanometer: answer models (the key, and one per misconception).

tau = N I A B sin(theta), theta between the coil's normal (m) and B; tau = m x B. In a moving coil galvanometer's radial
field the coil's plane is always along B, so N I A B = k phi, with k the twist constant per degree. params["ask"]:
  "I":     current, in A, for a deflection of deg degrees (inputs N, l_cm, b_cm, B, k, deg);
  "theta": deflection, in degrees, for a current I_uA microamperes (inputs N, l_cm, b_cm, I_uA, B, k);
  "S":     current sensitivity phi / I, in degree/A (inputs N, A_cm2, B, k);
  "tau":   torque, in N m, on N turns l_cm x b_cm carrying I in a uniform B, the coil's PLANE at plane_deg to B
           (inputs N, l_cm, b_cm, I, B, plane_deg);
  "vec", "radial": named answers (the torque in vector form; why the field is radial).
"""
from sympy import Rational, Symbol, cos, pi, sin

from physics import sig

cm = Rational(1, 100)
micro = Rational(1, 10**6)
NAMED = {
    "vec": {"key": "m_cross_B", "C09-M7": "m_dot_B", "C09-M8": "B_cross_m", "C09-M2": "IA_cross_B"},
    "radial": {"key": "plane_along_B", "C09-M5": "uniform", "C09-M6": "restoring", "C09-M1": "plane_perp_B"},
}


def _area(v, in_cm):
    if "A_cm2" in v:
        return v["A_cm2"] * (1 if in_cm else cm**2)
    return v["l_cm"] * v["b_cm"] * (1 if in_cm else cm**2)


def _solve(v, p, *, no_n=False, rad=False, in_cm=False, invert=False, plane_sin=False):
    ask, n = p["ask"], p.get("sf", 3)
    N = 1 if no_n else v["N"]
    A = _area(v, in_cm)
    if ask == "I":
        phi = v["deg"] * pi / 180 if rad else v["deg"]  # rad: puts the angle in radians though k is per degree
        return sig(v["k"] * phi / (N * A * v["B"]), n)
    if ask == "theta":
        phi = N * v["I_uA"] * micro * A * v["B"] / v["k"]
        return sig(phi * 180 / pi if rad else phi, n)  # rad: reads the result as radians and converts
    if ask == "S":
        S = N * A * v["B"] / v["k"]
        return sig(1 / S if invert else S, n)
    if ask == "tau":
        a = v["plane_deg"] * pi / 180
        return sig(N * v["I"] * A * v["B"] * (sin(a) if plane_sin else cos(a)), n)
    raise ValueError(f"unknown ask {ask}")


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
    "C09-M1": _m("C09-M1", ("tau",), plane_sin=True),  # takes theta from the coil's plane, not its normal
    "C09-M2": _m("C09-M2", ("I", "theta", "S", "tau"), no_n=True),  # forgets the number of turns
    "C09-M3": _m("C09-M3", ("I", "theta"), rad=True),  # treats a twist constant per degree as per radian
    "C09-M4": _m("C09-M4", ("I", "theta", "S", "tau"), in_cm=True),  # leaves the area in cm^2
    "C09-M5": _m("C09-M5"),  # thinks a uniform field would do
    "C09-M6": _m("C09-M6"),  # thinks the radial field gives the restoring torque
    "C09-M7": _m("C09-M7"),  # writes the torque as a dot product
    "C09-M8": _m("C09-M8"),  # reverses the cross product
    "C09-M9": _m("C09-M9", ("S",), invert=True),  # inverts the sensitivity: k / NAB
}
