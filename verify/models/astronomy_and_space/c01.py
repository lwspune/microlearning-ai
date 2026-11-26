"""C01 The solar system and the universe: answer models (the key, and one per misconception).

Units of distance, as the concept states them: 1 AU = 1.5e11 m, 1 ly = 9.46e15 m, 1 pc = 3.26 ly.
params["ask"]:
  "convert": an amount v["n"] of unit p["frm"] in unit p["to"] (units "m", "AU", "ly", "pc");
  "ly_unit", "largest", "black_hole", "sun_energy", "sun_end": named answers.
"""
from sympy import Float, Integer, Symbol

from physics import BOOK, sig

AU = Float("1.5e11")  # m, the mean Earth-Sun distance
LY = Float("9.46e15")  # m, light's distance in a year
PC = Float("3.26") * LY  # m


NAMED = {
    # what a light year measures
    "ly_unit": {"key": "distance_unit", "C01-M1": "time_unit", "C01-M2": "light_amount", "C01-M3": "light_speed"},
    # the largest planet of the solar system
    "largest": {"key": "Jupiter", "C01-M7": "Saturn", "C01-M8": "Neptune", "C01-M9": "Venus"},
    # what a black hole is
    "black_hole": {"key": "collapsed_strong", "C01-M10": "collapsed_empty", "C01-M11": "dark_planet",
                   "C01-M12": "every_star_end"},
    # where the Sun's energy comes from
    "sun_energy": {"key": "fusion_H_He", "C01-M9": "biggest_star", "C01-M13": "chemical_burning",
                   "C01-M14": "fission_U"},
    # what the Sun ends its life as
    "sun_end": {"key": "white_dwarf", "C01-M11": "dark_planet_end", "C01-M12": "black_hole_end",
                "C01-M13": "ash_end"},
}


SWAP = {"AU": "ly", "ly": "AU"}


def _metres(unit, ly_is_pc=False, ly_is_c=False):
    """One of the unit in metres, as the student takes it."""
    ly = BOOK["c"] if ly_is_c else LY  # ly_is_c: a light year taken as light's distance in one second
    return {"m": Integer(1), "AU": AU, "ly": ly, "pc": ly if ly_is_pc else Float("3.26") * ly}[unit]


def _convert(v, p, inverted=False, same_ly_au=False, **kw):
    frm, to = p["frm"], p["to"]
    if same_ly_au:  # mixes up the light year and the AU: recalls the relation for the other one
        frm, to = SWAP.get(frm, frm), SWAP.get(to, to)
    factor = _metres(frm, **kw) / _metres(to, **kw)
    if inverted:  # divides by the conversion factor where it should multiply
        factor = 1 / factor
    return sig(v["n"] * factor)


def key(v, p):
    if p["ask"] in NAMED:
        return Symbol(NAMED[p["ask"]]["key"])
    if p["ask"] == "convert":
        return _convert(v, p)
    raise ValueError(f"unknown ask {p['ask']}")


def _m(mid, **kw):
    def model(v, p):
        if p["ask"] in NAMED:
            if mid not in NAMED[p["ask"]]:
                raise ValueError("does not apply to this item")
            return Symbol(NAMED[p["ask"]][mid])
        if p["ask"] == "convert" and kw:
            out = _convert(v, p, **kw)
            if out == key(v, p):
                raise ValueError("gives the key here")
            return out
        raise ValueError("does not apply to this item")
    return model


MODELS = {
    "key": key,
    "C01-M1": _m("C01-M1"),  # a light year is a unit of time
    "C01-M2": _m("C01-M2"),  # a light year measures an amount of light
    "C01-M3": _m("C01-M3", ly_is_c=True),  # a light year is light's speed: its distance in one second
    "C01-M4": _m("C01-M4", ly_is_pc=True),  # a parsec is the same as a light year
    "C01-M5": _m("C01-M5", inverted=True),  # turns the conversion factor upside down
    "C01-M6": _m("C01-M6", same_ly_au=True),  # a light year is the same as an astronomical unit
    "C01-M7": _m("C01-M7"),  # Saturn, with its rings, is the largest planet
    "C01-M8": _m("C01-M8"),  # planets grow with distance from the Sun
    "C01-M9": _m("C01-M9"),  # judges size by brightness in our sky
    "C01-M10": _m("C01-M10"),  # a black hole is an empty hole, with no gravity
    "C01-M11": _m("C01-M11"),  # a dead star becomes a dark planet
    "C01-M12": _m("C01-M12"),  # every star, the Sun included, ends as a black hole
    "C01-M13": _m("C01-M13"),  # the Sun burns like a fire
    "C01-M14": _m("C01-M14"),  # mixes up fusion with fission
}
