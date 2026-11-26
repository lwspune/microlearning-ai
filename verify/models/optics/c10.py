"""C10 Scattering and atmospheric refraction: answer models (the key, and one per misconception).

Rayleigh scattering by particles much smaller than the wavelength (air molecules): I is proportional to 1/lambda^4.
params["ask"]:
  "ratio": how many times as strongly light of wavelength b is scattered as light of wavelength r (inputs b, r,
           in nm, b < r);
  "sun_air", "red_sun", "twinkle", "day", "danger", "rose", "cloth": named answers.
"""
from sympy import Integer, Symbol

from physics import sig

NAMED = {
    # what happens to sunlight crossing the air
    "sun_air": {"key": "blue_more", "C10-M1": "red_more", "C10-M3": "all_equal", "C10-M4": "dispersed"},
    # why the Sun looks red at sunrise and sunset
    "red_sun": {"key": "long_path", "C10-M1": "red_scattered", "C10-M4": "prism_split", "C10-M5": "refraction_red"},
    # what makes a star twinkle
    "twinkle": {"key": "atm_refraction", "C10-M4": "dispersion", "C10-M5": "scattering", "C10-M6": "own_flicker"},
    # how atmospheric refraction changes the length of the day we see
    "day": {"key": "longer_four", "C10-M7": "shorter_four", "C10-M5": "unchanged", "C10-M8": "longer_two"},
    # why danger signals are red
    "danger": {"key": "least_scattered", "C10-M1": "most_scattered", "C10-M3": "custom_only",
               "C10-M4": "bent_least"},
    # a red rose lit only by green light looks
    "rose": {"key": "black_rose", "C10-M9": "red_rose", "C10-M10": "green_rose", "C10-M11": "yellow_rose"},
    # a blue cloth lit only by red light looks
    "cloth": {"key": "black_cloth", "C10-M9": "blue_cloth", "C10-M10": "red_cloth", "C10-M11": "magenta_cloth"},
}


def _ratio(v, power=4, inverted=False, equal=False):
    if equal:  # every colour scattered alike
        return Integer(1)
    q = v["r"] / v["b"]  # longer over shorter wavelength
    if inverted:  # scattering grows with the wavelength
        q = 1 / q
    return sig(q**power)


def key(v, p):
    if p["ask"] in NAMED:
        return Symbol(NAMED[p["ask"]]["key"])
    if p["ask"] == "ratio":
        return _ratio(v)
    raise ValueError(f"unknown ask {p['ask']}")


def _m(mid, **kw):
    def model(v, p):
        if p["ask"] in NAMED:
            if mid not in NAMED[p["ask"]]:
                raise ValueError("does not apply to this item")
            return Symbol(NAMED[p["ask"]][mid])
        if p["ask"] == "ratio" and kw:
            return _ratio(v, **kw)
        raise ValueError("does not apply to this item")
    return model


MODELS = {
    "key": key,
    "C10-M1": _m("C10-M1", inverted=True),  # longer wavelengths scatter more: red most
    "C10-M2": _m("C10-M2", power=1),  # drops the fourth power: the plain wavelength ratio
    "C10-M3": _m("C10-M3", equal=True),  # air scatters every colour equally
    "C10-M4": _m("C10-M4"),  # puts the sky's colours down to dispersion, as in a prism
    "C10-M5": _m("C10-M5"),  # mixes up atmospheric refraction with scattering
    "C10-M6": _m("C10-M6"),  # thinks a star's own light flickers
    "C10-M7": _m("C10-M7"),  # bending backwards: light bends away from the normal into denser air
    "C10-M8": _m("C10-M8"),  # counts the 2-minute shift at only one end of the day
    "C10-M9": _m("C10-M9"),  # an object's colour is its own, whatever the light
    "C10-M10": _m("C10-M10"),  # an object takes the colour of the light on it
    "C10-M11": _m("C10-M11"),  # adds the object's colour to the light's, as two lights add
}
