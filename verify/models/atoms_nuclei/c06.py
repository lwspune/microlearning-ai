"""C06 Constituents and size of the nucleus: answer models (the key, and one per misconception).

R = R0 A^(1/3) with R0 = 1.2 fm; density = m / ((4/3) pi R^3), the same for all nuclei; N = A - Z. params["ask"]:
  "R":       the radius, in fm, for mass number A (input A);
  "rho":     the density, in kg/m^3, for mass number A and mass m_u in u (inputs A, m_u);
  "Rratio":  R2 / R1 for mass numbers A1, A2 (inputs A1, A2);
  "abund":   the abundance, in %, of the heaviest of three isotopes (inputs a1, m1, m2, m3, M, A1, A2, A3);
  "neutrons": the number of neutrons (inputs A, Z);
  "indep":   the property that does not depend on A (named).
"""
from sympy import Rational, Symbol, pi, solve, symbols

from physics import BOOK, sig

u = BOOK["u"]
R0 = Rational(12, 10)  # fm
NAMED = {"indep": {"key": "density_n", "C06-M7": "radius_n", "C06-M8": "volume_n", "C06-M9": "mass_n"}}


def _pow(A, *, lin=False, half=False, two3=False):
    if lin:
        return A
    if half:
        return A ** Rational(1, 2)
    return A ** Rational(2, 3) if two3 else A ** Rational(1, 3)


def _solve(v, p, *, lin=False, half=False, two3=False, no_43pi=False, u_raw=False, R0_only=False, mass_numbers=False,
           equal=False, other=False, A_as_N=False, Z_as_N=False, sum_AZ=False):
    ask, n = p["ask"], p.get("sf", 3)
    if ask == "R":
        return sig(R0 * _pow(v["A"], lin=lin, half=half, two3=two3), n)
    if ask == "Rratio":
        return sig(_pow(v["A2"], lin=lin, half=half, two3=two3) / _pow(v["A1"], lin=lin, half=half, two3=two3), n)
    if ask == "rho":
        m = v["m_u"] * (1 if u_raw else u)
        R = R0 * (1 if R0_only else v["A"] ** Rational(1, 3)) * Rational(1, 10**15)
        V = R**3 if no_43pi else Rational(4, 3) * pi * R**3
        return sig(m / V, n)
    if ask == "abund":
        x, y = symbols("x y")
        m1, m2, m3 = (v["A1"], v["A2"], v["A3"]) if mass_numbers else (v["m1"], v["m2"], v["m3"])
        a1 = v["a1"] / 100
        if equal:
            return sig((1 - a1) / 2 * 100, n)
        s = solve([x + y - (1 - a1), a1 * m1 + x * m2 + y * m3 - v["M"]], [x, y], dict=True)[0]
        return sig((s[x] if other else s[y]) * 100, n)
    if ask == "neutrons":
        A, Z = v["A"], v["Z"]
        if A_as_N:
            return A
        if Z_as_N:
            return Z
        return A + Z if sum_AZ else A - Z
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
    "C06-M1": _m("C06-M1", ("R", "Rratio"), lin=True),  # uses A instead of A^(1/3)
    "C06-M2": _m("C06-M2", ("R", "Rratio"), half=True),  # uses sqrt(A)
    "C06-M3": _m("C06-M3", ("R", "Rratio"), two3=True),  # uses A^(2/3)
    "C06-M4": _m("C06-M4", ("rho",), no_43pi=True),  # leaves out the 4/3 pi
    "C06-M5": _m("C06-M5", ("rho",), u_raw=True),  # leaves the mass in u
    "C06-M6": _m("C06-M6", ("rho",), R0_only=True),  # uses R0 for the radius
    "C06-M7": _m("C06-M7"),  # thinks the radius is the same for all nuclei
    "C06-M8": _m("C06-M8"),  # thinks the volume is the same for all nuclei
    "C06-M9": _m("C06-M9"),  # thinks the mass is the same for all nuclei
    "C06-M10": _m("C06-M10", ("abund",), mass_numbers=True),  # uses mass numbers for the masses
    "C06-M11": _m("C06-M11", ("abund",), equal=True),  # splits the rest equally
    "C06-M12": _m("C06-M12", ("abund",), other=True),  # gives the other isotope's abundance
    "C06-M13": _m("C06-M13", ("neutrons",), A_as_N=True),  # takes A as the neutron number
    "C06-M14": _m("C06-M14", ("neutrons",), Z_as_N=True),  # takes Z as the neutron number
    "C06-M15": _m("C06-M15", ("neutrons",), sum_AZ=True),  # adds A and Z
}
