"""C03 Field of a line of charge: answer models (the key, and one per misconception).

A long wire or cylinder with charge lambda per metre: E = lambda / (2 pi eps0 K r). params["ask"]:
  "medium": E, in N/C, at r m from a line of lam_uC microcoulombs per metre in a medium K (inputs lam_uC, r, K);
  "formula": the field outside a charged cylinder (a named answer);
  "lam":    lambda, in C/m, from E at r (inputs E, r);
  "wire":   E, in N/C, at r m from a wire L m long carrying q_uC (inputs q_uC, L, r);
  "surface": the Gaussian surface for a line charge (a named answer).
"""
from sympy import Rational, Symbol, pi

from physics import BOOK, sig

NAMED = {
    "formula": {"key": "std", "C03-M3": "r2", "C03-M4": "four_pi", "C03-M5": "eps_top"},
    "surface": {"key": "cylinder", "C03-M7": "sphere", "C03-M8": "ends_count", "C03-M9": "cube"},
}
k, eps0 = BOOK["k_e"], BOOK["eps0"]
uC = Rational(1, 10**6)


def _E(lam, r, K=1, *, r2=False, four=False, eps_top=False, times_K=False):
    Kf = 1 / K if times_K else K
    rr = r**2 if r2 else r
    if eps_top:
        return 2 * pi * eps0 * lam / (Kf * rr)
    return lam / ((4 if four else 2) * pi * eps0 * Kf * rr)


def _solve(v, p, *, total=False, point=False, r2=False, four=False, eps_top=False, times_K=False):
    ask, n = p["ask"], p.get("sf", 3)
    if ask == "medium":
        return sig(_E(v["lam_uC"] * uC, v["r"], v["K"], r2=r2, four=four, times_K=times_K), n)
    if ask == "lam":
        E, r = v["E"], v["r"]
        if eps_top:
            return sig(E * r / (2 * pi * eps0), n)
        return sig(E * (4 if four else 2) * pi * eps0 * (r**2 if r2 else r), n)
    if ask == "wire":
        q, L, r = v["q_uC"] * uC, v["L"], v["r"]
        if point:
            return sig(k * q / r**2, n)
        return sig(_E(q if total else q / L, r, r2=r2), n)
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
    "C03-M1": _m("C03-M1", ("wire",), total=True),  # uses the total charge as lambda
    "C03-M2": _m("C03-M2", ("wire",), point=True),  # uses the point-charge formula
    "C03-M3": _m("C03-M3", ("medium", "lam", "wire"), r2=True),  # uses 1/r^2 for a line
    "C03-M4": _m("C03-M4", ("medium", "lam"), four=True),  # uses 4 pi instead of 2 pi
    "C03-M5": _m("C03-M5", ("lam",), eps_top=True),  # puts eps0 on top
    "C03-M6": _m("C03-M6", ("medium",), times_K=True),  # multiplies by the dielectric constant
    "C03-M7": _m("C03-M7"),  # takes a sphere as the Gaussian surface
    "C03-M8": _m("C03-M8"),  # counts flux through the cylinder's flat ends
    "C03-M9": _m("C03-M9"),  # takes a cube as the Gaussian surface
}
