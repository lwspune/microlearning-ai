"""C06 The de Broglie wavelength: answer models (the key, and one per misconception).

lambda = h / p = h / (m v). params["ask"]:
  "lam_e":  lambda, in m, of an electron (mass m) at a fraction k of c (inputs m, k);
  "v_p":    the speed, in m/s, of a proton of wavelength lam_A angstrom (input lam_A);
  "Kratio": K_electron / K_proton at equal wavelengths (no inputs);
  "lam_kmh": lambda, in m, of a body of mass m at v_kmh km/h (inputs m, v_kmh);
  "alpha":  the particle with the same lambda as an alpha moving 4 times as fast (named);
  "rest":   whether an electron at rest has a de Broglie wavelength (named).
"""
from sympy import Rational, Symbol, sqrt

from physics import BOOK, sig

h, c, me, mp = BOOK["h"], BOOK["c"], BOOK["m_e"], BOOK["m_p"]
NAMED = {
    "alpha": {"key": "proton_or_neutron", "C06-M9": "electron_x", "C06-M10": "sixteen_u", "C06-M11": "alpha_again"},
    "rest": {"key": "no_lambda", "C06-M12": "h_over_m", "C06-M13": "zero_lambda", "C06-M14": "fixed_lambda"},
}


def _solve(v, p, *, use_c=False, photon=False, invert=False, A_as_m=False, e_mass=False, equal=False, inv_ratio=False,
           sqrt_ratio=False, kmh=False, h_over_m=False):
    ask, n = p["ask"], p.get("sf", 3)
    if ask == "lam_e":
        m = v["m"]
        vel = c if use_c else v["k"] * c
        if photon:
            return sig(h * c / (m * vel**2 / 2), n)
        return sig(m * vel / h if invert else h / (m * vel), n)
    if ask == "v_p":
        lam = v["lam_A"] * (1 if A_as_m else Rational(1, 10**10))
        m = me if e_mass else mp
        return sig(m * lam / h if invert else h / (m * lam), n)
    if ask == "Kratio":
        if equal:
            return 1
        r = mp / me
        if inv_ratio:
            return sig(1 / r, n)
        return sig(sqrt(r) if sqrt_ratio else r, n)
    if ask == "lam_kmh":
        vel = v["v_kmh"] if kmh else v["v_kmh"] * Rational(1000, 3600)
        if h_over_m:
            return sig(h / v["m"], n)
        pm = v["m"] * vel
        return sig(pm / h if invert else h / pm, n)
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
    "C06-M1": _m("C06-M1", ("lam_e",), use_c=True),  # uses c for the electron's speed
    "C06-M2": _m("C06-M2", ("lam_e",), photon=True),  # treats the electron as a photon: hc / K
    "C06-M3": _m("C06-M3", ("lam_e", "v_p", "lam_kmh"), invert=True),  # turns h / mv upside down
    "C06-M4": _m("C06-M4", ("v_p",), A_as_m=True),  # leaves angstrom unconverted
    "C06-M5": _m("C06-M5", ("v_p",), e_mass=True),  # uses the electron's mass for the proton
    "C06-M6": _m("C06-M6", ("Kratio",), equal=True),  # thinks equal wavelengths mean equal energies
    "C06-M7": _m("C06-M7", ("Kratio",), inv_ratio=True),  # turns the energy ratio upside down
    "C06-M8": _m("C06-M8", ("Kratio",), sqrt_ratio=True),  # takes the square root of the mass ratio
    "C06-M9": _m("C06-M9"),  # thinks it could be any lighter particle, such as an electron
    "C06-M10": _m("C06-M10"),  # multiplies the mass by 4
    "C06-M11": _m("C06-M11"),  # thinks the same wavelength means the same particle
    "C06-M12": _m("C06-M12"),  # thinks lambda = h / m at rest
    "C06-M13": _m("C06-M13"),  # thinks lambda is zero at rest
    "C06-M14": _m("C06-M14"),  # thinks every electron has one fixed wavelength
    "C06-M15": _m("C06-M15", ("lam_kmh",), kmh=True),  # leaves km/h unconverted
    "C06-M16": _m("C06-M16", ("lam_kmh",), h_over_m=True),  # divides h by the mass alone
}
