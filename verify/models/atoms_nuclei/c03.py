"""C03 Radius and speed in Bohr orbits: answer models (the key, and one per misconception).

Hydrogen-like (charge Z e): r_n = a0 n^2 / Z with a0 = 0.053 nm; v_n = e^2 / (2 eps0 h n); T = 2 pi r / v;
f_n = v_n / (2 pi r_n) = m e^4 / (4 eps0^2 h^3 n^3). params["ask"]:
  "rn":     r_n, in nm, for orbit n of hydrogen (input n);
  "rZ":     r_1, in nm, for nuclear charge Z (input Z);
  "ratio":  r_n2 / r_n1 (inputs n1, n2);
  "T":      the period, in s, for speed v and radius r_A angstrom (inputs v, r_A);
  "revs":   revolutions in time t, in orbit n of hydrogen (inputs n, t).
"""
from sympy import Rational, pi

from physics import BOOK, sig

h, e, me, eps0 = BOOK["h"], BOOK["e"], BOOK["m_e"], BOOK["eps0"]
a0 = Rational(53, 1000)  # nm


def f1():
    return me * e**4 / (4 * eps0**2 * h**3)


def _solve(v, p, *, lin_n=False, inv_n2=False, a0_053=False, Z2=False, timesZ=False, noZ=False, sq_again=False,
           no_2pi=False, A_as_m=False, invert=False, first=False, n2=False):
    ask, n = p["ask"], p.get("sf", 3)
    a = a0 * 10 if a0_053 else a0
    if ask == "rn":
        m = v["n"]
        if lin_n:
            return sig(a * m, n)
        return sig(a / m**2 if inv_n2 else a * m**2, n)
    if ask == "rZ":
        Z = v["Z"]
        if noZ:
            return sig(a, n)
        if Z2:
            return sig(a / Z**2, n)
        return sig(a * Z if timesZ else a / Z, n)
    if ask == "ratio":
        r = v["n2"] / v["n1"]
        if lin_n:
            return sig(r, n)
        if inv_n2:
            return sig(1 / r**2, n)
        return sig(r**4 if sq_again else r**2, n)
    if ask == "T":
        r = v["r_A"] * (1 if A_as_m else Rational(1, 10**10))
        T = r / v["v"] if no_2pi else 2 * pi * r / v["v"]
        return sig(1 / T if invert else T, n)
    if ask == "revs":
        m = 1 if first else v["n"]
        f = f1() / (m**2 if n2 else m**3)
        if no_2pi:
            f = f * 2 * pi
        return sig(f * v["t"], n)
    raise ValueError(f"unknown ask {ask}")


def key(v, p):
    return _solve(v, p)


def _m(mid, asks=(), **kw):
    def model(v, p):
        if p["ask"] not in asks:
            raise ValueError("does not apply to this item")
        return _solve(v, p, **kw)
    return model


MODELS = {
    "key": key,
    "C03-M1": _m("C03-M1", ("rn", "ratio"), lin_n=True),  # takes r as proportional to n
    "C03-M2": _m("C03-M2", ("rn", "ratio"), inv_n2=True),  # takes r as proportional to 1/n^2
    "C03-M3": _m("C03-M3", ("rn",), a0_053=True),  # takes a0 as 0.53 nm
    "C03-M4": _m("C03-M4", ("rZ",), Z2=True),  # divides by Z^2
    "C03-M5": _m("C03-M5", ("rZ",), timesZ=True),  # multiplies by Z
    "C03-M6": _m("C03-M6", ("rZ",), noZ=True),  # ignores Z
    "C03-M7": _m("C03-M7", ("ratio",), sq_again=True),  # squares the ratio of the squares
    "C03-M8": _m("C03-M8", ("T", "revs"), no_2pi=True),  # forgets the 2 pi
    "C03-M9": _m("C03-M9", ("T",), A_as_m=True),  # leaves angstrom unconverted
    "C03-M10": _m("C03-M10", ("T",), invert=True),  # gives the frequency instead of the period
    "C03-M11": _m("C03-M11", ("revs",), first=True),  # uses the first orbit's frequency
    "C03-M12": _m("C03-M12", ("revs",), n2=True),  # takes f as proportional to 1/n^2
}
