"""C08 Magnetic dipole moment of a loop: answer models (the key, and one per misconception).

m = NIA, along the normal by the right-hand rule; U = -m B cos(theta); one turn of radius R has B = mu0 m / (2 pi R^3)
at its centre. params["ask"]:
  "coil":   m, in A m^2, of N turns of diameter D_cm carrying I (inputs N, D_cm, I);
  "fromB":  m, in A m^2, of one loop of radius R_cm with field B at its centre (inputs R_cm, B);
  "U":      potential energy, in J, of N turns of area A_cm2 carrying I in a field B, m at deg degrees to B
            (inputs N, A_cm2, I, B, deg);
  "centre", "square": named answers (B at the centre in terms of m; the moment of a square loop).
"""
from sympy import Rational, Symbol, cos, pi, sin

from physics import BOOK, sig

mu0 = BOOK["mu0"]
cm = Rational(1, 100)
NAMED = {
    "centre": {"key": "mu0m_2piR3", "C08-M6": "mu0m_piR3", "C08-M5": "mu0m_2pi2R3", "C08-M4": "mu0m_4piR2"},
    "square": {"key": "Ia2_out", "C08-M8": "Ia2_in", "C08-M7": "Ia2_plane", "C08-M4": "perim_Ia_out"},
}


def _solve(v, p, *, diameter=False, no_n=False, in_cm=False, circumference=False, straight=False, no_two=False,
           plus=False, use_sin=False):
    ask, n = p["ask"], p.get("sf", 3)
    if ask == "coil":
        R = v["D_cm"] * (1 if in_cm else cm) / (1 if diameter else 2)
        A = 2 * pi * R if circumference else pi * R**2
        return sig((1 if no_n else v["N"]) * v["I"] * A, n)
    if ask == "fromB":
        R = v["R_cm"] * (1 if in_cm else cm)
        if straight:
            I = 2 * pi * R * v["B"] / mu0  # from the straight wire's mu0 I / (2 pi R)
        else:
            I = (1 if no_two else 2) * R * v["B"] / mu0
        return sig(I * pi * R**2, n)
    if ask == "U":
        A = v["A_cm2"] * (1 if in_cm else cm**2)
        m = (1 if no_n else v["N"]) * v["I"] * A
        th = v["deg"] * pi / 180
        U = -m * v["B"] * (sin(th) if use_sin else cos(th))
        return sig(-U if plus else U, n)
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
    "C08-M1": _m("C08-M1", ("coil",), diameter=True),  # takes the diameter as the radius
    "C08-M2": _m("C08-M2", ("coil", "U"), no_n=True),  # forgets the number of turns
    "C08-M3": _m("C08-M3", ("coil", "fromB", "U"), in_cm=True),  # leaves lengths or areas in cm
    "C08-M4": _m("C08-M4", ("coil",), circumference=True),  # uses the circumference (perimeter) for the area
    "C08-M5": _m("C08-M5", ("fromB",), straight=True),  # finds I from the straight wire's formula
    "C08-M6": _m("C08-M6", ("fromB",), no_two=True),  # drops the 2 of mu0 I / 2R
    "C08-M7": _m("C08-M7"),  # m in the plane of the loop
    "C08-M8": _m("C08-M8"),  # m the wrong way along the normal
    "C08-M9": _m("C08-M9", ("U",), plus=True),  # U = +m B cos(theta)
    "C08-M10": _m("C08-M10", ("U",), use_sin=True),  # U = -m B sin(theta), as for the torque
}
