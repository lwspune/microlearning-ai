"""C02 The speed of travelling waves: answer models (the key, and one per misconception).

params["ask"]:
  "fastest": the medium in which sound is fastest (a named answer);
  "same":    what stays the same when sound passes from air into water (a named answer);
  "string":  wave speed, in m/s, on a string of tension T (N) and linear density m_g (g/m) (inputs T, m_g);
  "wire":    wave speed, in m/s, on a wire of length L (m), mass M_g (g) and tension T (N) (inputs L, M_g, T);
  "rod":     speed of a longitudinal wave, in m/s, in a rod of Young's modulus Y (N/m^2) and density rho_gcc (g/cm^3)
             (inputs Y, rho_gcc);
  "radio":   how much earlier, in s, a listener d2_km away by radio (speed c) hears a concert than one d1 m away
             by sound (speed vs) (inputs d1, vs, d2_km, c).

The key: v = sqrt(T/m) on a string, sqrt(Y/rho) in a rod, in SI units; sound is fastest in solids; the frequency is
the source's and does not change from medium to medium.
"""
from sympy import Symbol, sqrt

from physics import sig

NAMED = {
    "fastest": {"key": "solid_medium", "C02-M1": "vacuum_medium", "C02-M2": "air_medium", "C02-M3": "water_medium"},
    "same": {"key": "freq_same", "C02-M4": "speed_same", "C02-M5": "wavelength_same", "C02-M6": "all_same"},
}


def _speed(top, bottom, *, no_root=False, flip=False):
    if flip:
        top, bottom = bottom, top
    return top / bottom if no_root else sqrt(top / bottom)


def _solve(v, p, *, grams=False, no_root=False, flip=False, total=False, gcc=False, km=False, add=False,
           radio_sound=False):
    ask, n = p["ask"], p.get("sf", 3)
    if ask == "string":
        m = v["m_g"] if grams else v["m_g"] / 1000
        return sig(_speed(v["T"], m, no_root=no_root, flip=flip), n)
    if ask == "wire":
        M = v["M_g"] if grams else v["M_g"] / 1000
        m = M if total else M / v["L"]
        return sig(_speed(v["T"], m, no_root=no_root, flip=flip), n)
    if ask == "rod":
        rho = v["rho_gcc"] if gcc else v["rho_gcc"] * 1000
        return sig(_speed(v["Y"], rho, no_root=no_root, flip=flip), n)
    if ask == "radio":
        t1 = v["d1"] / v["vs"]
        d2 = v["d2_km"] if km else v["d2_km"] * 1000
        t2 = d2 / (v["vs"] if radio_sound else v["c"])
        return sig(t1 + t2 if add else abs(t1 - t2), n)
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
    "C02-M1": _m("C02-M1"),  # sound is fastest in a vacuum, where nothing is in its way
    "C02-M2": _m("C02-M2"),  # a lighter, less dense medium carries sound faster
    "C02-M3": _m("C02-M3"),  # a liquid, being dense yet free to flow, carries sound fastest
    "C02-M4": _m("C02-M4"),  # the speed is set by the source and keeps its value
    "C02-M5": _m("C02-M5"),  # the wavelength keeps its value
    "C02-M6": _m("C02-M6"),  # nothing about the wave changes
    "C02-M7": _m("C02-M7", ("string", "wire"), grams=True),  # leaves the mass in grams
    "C02-M8": _m("C02-M8", ("string", "wire", "rod"), no_root=True),  # forgets the square root
    "C02-M9": _m("C02-M9", ("string", "rod"), flip=True),  # turns the ratio upside down
    "C02-M10": _m("C02-M10", ("wire",), total=True),  # uses the whole mass, not the mass per unit length
    "C02-M11": _m("C02-M11", ("rod",), gcc=True),  # leaves the density in g/cm^3
    "C02-M12": _m("C02-M12", ("radio",), km=True),  # leaves the radio distance in km
    "C02-M13": _m("C02-M13", ("radio",), add=True),  # adds the two times
    "C02-M14": _m("C02-M14", ("radio",), radio_sound=True),  # takes the radio signal to travel at the speed of sound
}
