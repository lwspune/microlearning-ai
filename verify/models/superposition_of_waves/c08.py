"""C08 Frequency of a stretched string: answer models (the key, and one per misconception).

n_p = (p / 2L) sqrt(T / m), v = sqrt(T / m). params["ask"] picks the quantity:
  "m_load":  linear density, in kg/m, of a wire L m long under a load of M kg, fundamental n (inputs L, M, n, g);
  "T_mass":  tension, in N, of a wire L m long of mass mass_g grams in unison with a fork of n Hz (inputs L, mass_g, n);
  "v_ratio": what multiplying the tension by k does to the wave speed (a named answer);
  "v_over":  wave speed, in m/s, on a string L m long fixed at both ends, sounding its q-th overtone at n Hz (inputs L, q, n);
  "L_succ":  length, in m, of a wire (m kg/m, T N) resonating at n1 and n2 in successive modes (inputs m, T, n1, n2).

The key: v = sqrt(T/m) and the fundamental has L = lambda/2, so n = v/2L; the q-th overtone is the (q+1)-th harmonic;
successive harmonics differ by the fundamental.
"""
from sympy import Symbol, sqrt

from physics import sig

NAMED = {"v_ratio": {"key": "twice", "C08-M3": "four_times", "C08-M5": "half", "C08-M6": "same"}}


def _solve(v, p, *, no_g=False, no_two=False, no_root=False, grams=False, over_as_harm=False, over_as_fund=False,
           low_fund=False):
    ask, n = p["ask"], p.get("sf", 3)
    k2 = 1 if no_two else 2  # n = sqrt(T/m) / (k2 L)
    if ask == "m_load":
        T = v["M"] * (1 if no_g else v["g"])
        f, L = v["n"], v["L"]
        if no_root:
            return sig(T / (k2 * L * f), n)  # n = T / (2 L m)
        return sig(T / (k2 * f * L) ** 2, n)
    if ask == "T_mass":
        m = (v["mass_g"] if grams else v["mass_g"] / 1000) / v["L"]
        f, L = v["n"], v["L"]
        if no_root:
            return sig(k2 * L * f * m, n)
        return sig((k2 * f * L) ** 2 * m, n)
    if ask == "v_over":
        q = v["q"]
        p_h = q if over_as_harm else (1 if over_as_fund else q + 1)  # harmonic number taken
        lam = k2 * v["L"] / p_h
        return sig(v["n"] * lam, n)
    if ask == "L_succ":
        n1, n2 = v["n1"], v["n2"]
        f0 = n1 if low_fund else n2 - n1
        vs = v["T"] / v["m"] if no_root else sqrt(v["T"] / v["m"])
        return sig(vs / (k2 * f0), n)
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
    "C08-M1": _m("C08-M1", ("m_load",), no_g=True),  # takes the load in kg as the tension in N
    "C08-M2": _m("C08-M2", ("m_load", "T_mass", "v_over", "L_succ"), no_two=True),  # forgets the 2 in 1/2L
    "C08-M3": _m("C08-M3", ("m_load", "T_mass", "L_succ"), no_root=True),  # forgets the square root
    "C08-M4": _m("C08-M4", ("T_mass",), grams=True),  # leaves the mass in grams
    "C08-M5": _m("C08-M5"),  # turns T/m upside down
    "C08-M6": _m("C08-M6"),  # thinks the speed depends only on the string, not the tension
    "C08-M7": _m("C08-M7", ("v_over",), over_as_harm=True),  # takes the q-th overtone as the q-th harmonic
    "C08-M8": _m("C08-M8", ("v_over",), over_as_fund=True),  # takes the overtone's frequency as the fundamental's
    "C08-M9": _m("C08-M9", ("L_succ",), low_fund=True),  # takes the lower of two successive modes as the fundamental
}
