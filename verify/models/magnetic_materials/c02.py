"""C02 An oscillating magnet: answer models (the key, and one per misconception).

T = 2 pi sqrt(I / (m B)), so m = 4 pi^2 I / (T^2 B) and B = 4 pi^2 I / (T^2 m). params["ask"]:
  "m":      m, in A m^2, for I in g cm^2, N oscillations per minute, field in gauss (inputs I_gcm2, N, G);
  "half":   T'/T when the magnet is cut across into two halves (named);
  "B":      B, in T, for I (kg m^2), m (A m^2), N oscillations in t seconds (inputs I, m, N, t);
  "box":    B, in T, for a bar of mass M_g grams, sides l_mm, b_mm, h_mm (h vertical), period T (s), moment m (inputs);
  "scale":  what making B four times as large does to T (named).
"""
from sympy import Rational, Symbol, pi

from physics import sig

NAMED = {
    "half": {"key": "half", "C02-M4": "one_over_2r2", "C02-M5": "two", "C02-M6": "quarter"},
    "scale": {"key": "halves", "C02-M12": "four_times", "C02-M13": "quarter", "C02-M14": "same"},
}


def _solve(v, p, *, freq_as_t=False, cm2_raw=False, gauss_raw=False, total_t=False, no_4pi2=False, axis_h=False,
           rod=False, mm_raw=False):
    ask, n = p["ask"], p.get("sf", 3)
    k = 1 if no_4pi2 else 4 * pi**2
    if ask == "m":
        I = v["I_gcm2"] * Rational(1, 1000) * (1 if cm2_raw else Rational(1, 10**4))
        f = v["N"] / 60
        T = f if freq_as_t else 1 / f
        B = v["G"] * (1 if gauss_raw else Rational(1, 10**4))
        return sig(k * I / (T**2 * B), n)
    if ask == "B":
        if total_t:
            T = v["t"]
        elif freq_as_t:
            T = v["N"] / v["t"]
        else:
            T = v["t"] / v["N"]
        return sig(k * v["I"] / (T**2 * v["m"]), n)
    if ask == "box":
        s = 1 if mm_raw else Rational(1, 1000)
        M, l, b, h = v["M_g"] / 1000, v["l_mm"] * s, v["b_mm"] * s, v["h_mm"] * s
        if rod:
            I = M * l**2 / 12
        elif axis_h:
            I = M * (l**2 + h**2) / 12
        else:
            I = M * (l**2 + b**2) / 12  # about the vertical axis, parallel to h
        return sig(k * I / (v["T"] ** 2 * v["m"]), n)
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
    "C02-M1": _m("C02-M1", ("m", "B"), freq_as_t=True),  # takes the frequency as the period
    "C02-M2": _m("C02-M2", ("m",), cm2_raw=True),  # leaves cm^2 unconverted
    "C02-M3": _m("C02-M3", ("m",), gauss_raw=True),  # leaves the field in gauss
    "C02-M4": _m("C02-M4"),  # keeps the magnetic moment unchanged when the magnet is halved
    "C02-M5": _m("C02-M5"),  # thinks a smaller magnet swings more slowly
    "C02-M6": _m("C02-M6"),  # drops the square root
    "C02-M7": _m("C02-M7", ("B",), total_t=True),  # uses the total time as the period
    "C02-M8": _m("C02-M8", ("B",), no_4pi2=True),  # forgets the 4 pi^2
    "C02-M9": _m("C02-M9", ("box",), axis_h=True),  # takes I about the wrong axis
    "C02-M10": _m("C02-M10", ("box",), rod=True),  # uses a thin rod's M l^2 / 12
    "C02-M11": _m("C02-M11", ("box",), mm_raw=True),  # leaves the sides in mm
    "C02-M12": _m("C02-M12"),  # takes T as proportional to B
    "C02-M13": _m("C02-M13"),  # takes T as proportional to 1/B
    "C02-M14": _m("C02-M14"),  # thinks T does not depend on B
}
