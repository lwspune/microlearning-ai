"""C05 Specific heat capacity and calorimetry: answer models (the key, and one per misconception).

params["ask"]:
  "heat":     heat, J, to warm m kg of specific heat s from T1 to T2 (inputs m, s, T1, T2);
  "capacity": thermal capacity, J/deg C, of m kg of specific heat s (inputs m, s);
  "spec":     specific heat from heat Q warming m kg from T1 to T2 (inputs Q, m, T1, T2);
  "fall":     rise in temperature of water falling h metres, all its potential energy turning to heat (inputs h, s);
  "calor":    specific heat of a sphere (m1 at T1) dropped into a calorimeter (m2, s2) holding water (m3, s3) at T2,
              final temperature T (inputs m1, T1, m2, s2, m3, s3, T2, T);
  "mix":      final temperature of m1 kg of water at T1 mixed with m2 kg at T2 (inputs m1, T1, m2, T2).
"""
from physics import BOOK, sig


def _solve(v, p, *, at_T2=False, plus273=False, no_m=False, per_m=False, just_s=False, m_over_s=False, invert=False,
           no_g=False, half=False, no_cal=False, full_drop=False, final_as_rise=False, mean=False, swap=False, rise=False):
    ask, n = p["ask"], p.get("sf", 3)
    if ask in ("heat", "spec"):
        dT = v["T2"] if at_T2 else v["T2"] - v["T1"]
        if plus273:
            dT += 273
        m = 1 if no_m else v["m"]
        if ask == "heat":
            return sig(m * v["s"] * dT, n)
        return sig(m * dT / v["Q"] if invert else v["Q"] / (m * dT), n)
    if ask == "capacity":
        m, s = v["m"], v["s"]
        return sig(s / m if per_m else (s if just_s else (m / s if m_over_s else m * s)), n)
    if ask == "fall":
        gh = v["h"] if no_g else BOOK["g"] * v["h"]
        if half:
            gh = gh / 2
        return sig(v["s"] / gh if invert else gh / v["s"], n)
    if ask == "calor":
        gain = (0 if no_cal else v["m2"] * v["s2"]) + v["m3"] * v["s3"]
        rise_w = v["T"] if final_as_rise else v["T"] - v["T2"]
        drop = v["T1"] - v["T2"] if full_drop else v["T1"] - v["T"]
        return sig(gain * rise_w / (v["m1"] * drop), n)
    if ask == "mix":
        m1, T1, m2, T2 = v["m1"], v["T1"], v["m2"], v["T2"]
        if mean:
            return sig((T1 + T2) / 2, n)
        if swap:
            m1, m2 = m2, m1
        T = (m1 * T1 + m2 * T2) / (m1 + m2)
        return sig(T - T2 if rise else T, n)
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
    "C05-M1": _m(("heat", "spec"), at_T2=True),  # uses the final temperature for the rise
    "C05-M2": _m(("heat",), plus273=True),  # adds 273 to a temperature difference
    "C05-M3": _m(("heat", "spec"), no_m=True),  # leaves out the mass
    "C05-M4": _m(("capacity",), per_m=True),  # divides s by m
    "C05-M5": _m(("capacity",), just_s=True),  # takes thermal capacity to be the specific heat
    "C05-M6": _m(("capacity",), m_over_s=True),  # divides m by s
    "C05-M7": _m(("spec", "fall"), invert=True),  # turns Q = m s dT upside down
    "C05-M8": _m(("fall",), no_g=True),  # takes potential energy per kg as h, not gh
    "C05-M9": _m(("fall",), half=True),  # takes potential energy as mgh/2
    "C05-M10": _m(("calor",), no_cal=True),  # forgets the heat taken by the calorimeter
    "C05-M11": _m(("calor",), full_drop=True),  # takes the sphere's fall in temperature as T1 - T2
    "C05-M12": _m(("calor",), final_as_rise=True),  # uses the final temperature as the water's rise
    "C05-M13": _m(("mix",), mean=True),  # averages the two temperatures
    "C05-M14": _m(("mix",), swap=True),  # weights each temperature by the other mass
    "C05-M15": _m(("mix",), rise=True),  # gives the rise of the cold water
}
