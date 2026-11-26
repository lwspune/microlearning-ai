"""C06 Curie's law: answer models (the key, and one per misconception).

For a paramagnet chi = C mu0 / T, so chi T is constant (T absolute). params["ask"]:
  "third":  the Celsius temperature at which chi falls to chi / f, from t1 degrees C (inputs t1, f);
  "fall":   the temperature, in K, at which chi1 at T1 falls by d (inputs chi1, T1, d);
  "chi2":   chi at T2, given chi1 at T1 (inputs chi1, T1, T2);
  "ratio":  thermal energy (3/2) k T over the largest magnetic energy m B, at t degrees C (inputs m, B, t, kB);
  "curie":  what a ferromagnet becomes above its Curie temperature (named).
"""
from sympy import Rational, Symbol

from physics import sig

NAMED = {"curie": {"key": "para", "C06-M10": "dia", "C06-M11": "weaker_ferro", "C06-M12": "no_moments"}}


def _solve(v, p, *, celsius=False, kelvin_out=False, prop_T=False, no_T=False, dT=False, d_as_chi=False, add=False,
           no_32=False, invert=False):
    ask, n = p["ask"], p.get("sf", 3)
    if ask == "third":
        T1 = v["t1"] if celsius else v["t1"] + 273
        T2 = T1 / v["f"] if prop_T else T1 * v["f"]
        if celsius or kelvin_out:
            return sig(T2, n)
        return sig(T2 - 273, n)
    if ask == "fall":
        chi2 = v["d"] if d_as_chi else (v["chi1"] + v["d"] if add else v["chi1"] - v["d"])
        if prop_T:
            return sig(v["T1"] * chi2 / v["chi1"], n)
        return sig(v["T1"] * v["chi1"] / chi2, n)
    if ask == "chi2":
        T1, T2 = v["T1"], v["T2"]
        if no_T:
            return sig(v["chi1"], n)
        if prop_T:
            return sig(v["chi1"] * T2 / T1, n)
        if dT:
            return sig(v["chi1"] * T1 / (T1 - T2), n)
        return sig(v["chi1"] * T1 / T2, n)
    if ask == "ratio":
        T = v["t"] if celsius else v["t"] + 273
        E = (1 if no_32 else Rational(3, 2)) * v["kB"] * T
        mB = v["m"] * v["B"]
        return sig(mB / E if invert else E / mB, n)
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
    "C06-M1": _m("C06-M1", ("third", "ratio"), celsius=True),  # uses the Celsius temperature
    "C06-M2": _m("C06-M2", ("third",), kelvin_out=True),  # gives the kelvin value as Celsius
    "C06-M3": _m("C06-M3", ("third", "fall", "chi2"), prop_T=True),  # takes chi as proportional to T
    "C06-M4": _m("C06-M4", ("chi2",), no_T=True),  # thinks chi does not depend on T
    "C06-M5": _m("C06-M5", ("chi2",), dT=True),  # uses the change in temperature as the new temperature
    "C06-M6": _m("C06-M6", ("fall",), d_as_chi=True),  # takes the fall as the new chi
    "C06-M7": _m("C06-M7", ("fall",), add=True),  # adds the change instead of subtracting it
    "C06-M8": _m("C06-M8", ("ratio",), no_32=True),  # forgets the 3/2
    "C06-M9": _m("C06-M9", ("ratio",), invert=True),  # turns the ratio upside down
    "C06-M10": _m("C06-M10"),  # thinks it becomes diamagnetic
    "C06-M11": _m("C06-M11"),  # thinks it stays ferromagnetic, only weaker
    "C06-M12": _m("C06-M12"),  # thinks its atoms lose their moments
}
