"""C06 Change of state and latent heat: answer models (the key, and one per misconception).

params["ask"]:
  "boil":    heat, J, to turn m_g grams of water at 100 deg C into steam (inputs mg, L, s);
  "kettle":  latent heat of vaporisation, cal/g, from t1 minutes to heat water 0 -> 100 deg C and t2 minutes to boil
             it all away at a steady rate (inputs t1, t2, s);
  "fusion":  latent heat of fusion from mi kg of ice at 0 deg C mixed with mw kg of water at Tw, final T (inputs mi, mw, Tw, T, s);
  "ice":     heat to take m kg of ice at Ti (< 0) to water at Tf (inputs m, Ti, Tf, si, sw, L);
  "plateau": where the heat goes while ice melts at 0 deg C (named);
  "sublime": what sublimation is (named).
"""
from sympy import Symbol

from physics import sig

NAMED = {
    "plateau": {"key": "breaks_bonds", "C06-M13": "lost_outside", "C06-M14": "raises_ke", "C06-M15": "no_heat_taken"},
    "sublime": {"key": "solid_to_vapour", "C06-M16": "vapour_to_liquid", "C06-M17": "evaporation", "C06-M18": "solid_to_liquid"},
}


def _solve(v, p, *, grams=False, zero=False, warm_too=False, inverse=False, no_dT=False, total_t=False,
           no_melt_warm=False, full_drop=False, add=False, no_latent=False, same_s=False, no_ice_warm=False):
    ask, n = p["ask"], p.get("sf", 3)
    if ask == "boil":
        m = v["mg"] if grams else v["mg"] / 1000
        if zero:
            return 0
        return sig(m * v["L"] + (m * v["s"] * 100 if warm_too else 0), n)
    if ask == "kettle":
        t1, t2 = v["t1"], v["t2"]
        if inverse:
            return sig(v["s"] * 100 * t1 / t2, n)
        if total_t:
            t2 = t1 + t2
        return sig((1 if no_dT else v["s"] * 100) * t2 / t1, n)
    if ask == "fusion":
        mi, mw, Tw, T, s = v["mi"], v["mw"], v["Tw"], v["T"], v["s"]
        lost = mw * s * (Tw if full_drop else Tw - T)
        warm = 0 if no_melt_warm else mi * s * T
        return sig((lost + warm if add else lost - warm) / mi, n)
    if ask == "ice":
        m, Ti, Tf = v["m"], v["Ti"], v["Tf"]
        si = v["sw"] if same_s else v["si"]
        q = (0 if no_ice_warm else m * si * (0 - Ti)) + (0 if no_latent else m * v["L"]) + m * v["sw"] * Tf
        return sig(q, n)
    raise ValueError(f"unknown ask {ask}")


def key(v, p):
    if p["ask"] in NAMED:
        return Symbol(NAMED[p["ask"]]["key"])
    return _solve(v, p)


def _m(asks, **kw):
    def model(v, p):
        if p["ask"] not in asks:
            raise ValueError("does not apply to this item")
        return _solve(v, p, **kw)
    return model


def _n(mid):
    def model(v, p):
        if mid not in NAMED.get(p["ask"], {}):
            raise ValueError("does not apply to this item")
        return Symbol(NAMED[p["ask"]][mid])
    return model


MODELS = {
    "key": key,
    "C06-M1": _m(("boil",), grams=True),  # leaves the mass in grams
    "C06-M2": _m(("boil",), zero=True),  # no temperature change, so no heat
    "C06-M3": _m(("boil",), warm_too=True),  # adds heat to warm the water from 0 to 100 deg C
    "C06-M4": _m(("kettle",), inverse=True),  # inverts the ratio of times
    "C06-M5": _m(("kettle",), no_dT=True),  # forgets the 100 deg C rise
    "C06-M6": _m(("kettle",), total_t=True),  # uses the total time for boiling
    "C06-M7": _m(("fusion",), no_melt_warm=True),  # forgets the melted ice warms to T
    "C06-M8": _m(("fusion",), full_drop=True),  # takes the water's drop as Tw, not Tw - T
    "C06-M9": _m(("fusion",), add=True),  # adds the melt-water's warming to the heat for melting
    "C06-M10": _m(("ice",), no_latent=True),  # forgets the latent heat of melting
    "C06-M11": _m(("ice",), same_s=True),  # uses water's specific heat for ice
    "C06-M12": _m(("ice",), no_ice_warm=True),  # forgets warming the ice up to 0 deg C
    **{f"C06-M{i}": _n(f"C06-M{i}") for i in range(13, 19)},
}
