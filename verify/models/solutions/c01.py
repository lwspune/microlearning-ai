"""C01 Solubility of solids and gases: answer models (the key, and one per misconception).

params["ask"]:
  "trend":   how the solubilities of two solutes change when the temperature is changed (named, e.g. up_down).
             params: heat1, heat2 ("endo" | "exo": dissolving absorbs or releases heat; a gas is "exo"),
             change ("rise" | "fall").
  "crystal": grams that crystallise when a solution is cooled. inputs: hot, cold (solubility, g per 100 g
             water), water (g); optional dissolved (g of solute in the solution; default: saturated when hot).
"""
from sympy import Symbol

from chemistry import sig

_WORD = {1: "up", -1: "down", 0: "same"}


def _trend(p, rule):
    rise = 1 if p["change"] == "rise" else -1
    dirs = [rule(p[h], rise) for h in ("heat1", "heat2")]
    return Symbol(f"{_WORD[dirs[0]]}_{_WORD[dirs[1]]}")


def _le_chatelier(heat, rise):  # heating favours the direction that absorbs heat
    return rise if heat == "endo" else -rise


def _crystal(v, mode):
    w = v["water"] / 100
    dissolved = v["dissolved"] if "dissolved" in v else v["hot"] * w
    if mode == "key":
        return sig(dissolved - v["cold"] * w)
    if mode == "M3":  # temperature does not change solubility: nothing crystallises
        return sig(0)
    if mode == "M4":  # uses the per-100 g values whatever the water
        return sig((v["dissolved"] / w if "dissolved" in v else v["hot"]) - v["cold"])
    if mode == "M5":  # gives the solute still dissolved
        return sig(v["cold"] * w)
    if mode == "M6":  # takes all the dissolved solute as crystallising
        return sig(dissolved)
    raise ValueError(mode)


def key(v, p):
    if p["ask"] == "trend":
        return _trend(p, _le_chatelier)
    return _crystal(v, "key")


def m1(v, p):  # heating always raises solubility, gases included
    if p["ask"] != "trend":
        raise ValueError("does not apply")
    return _trend(p, lambda heat, rise: rise)


def m2(v, p):  # Le Chatelier backwards: heat favours the side that releases heat
    if p["ask"] != "trend":
        raise ValueError("does not apply")
    return _trend(p, lambda heat, rise: -_le_chatelier(heat, rise))


def m3(v, p):  # temperature changes only how fast a solute dissolves, not how much
    if p["ask"] == "trend":
        return _trend(p, lambda heat, rise: 0)
    return _crystal(v, "M3")


def _only_crystal(mode):
    def model(v, p):
        if p["ask"] != "crystal":
            raise ValueError("does not apply")
        return _crystal(v, mode)
    return model


MODELS = {
    "key": key,
    "C01-M1": m1,
    "C01-M2": m2,
    "C01-M3": m3,
    "C01-M4": _only_crystal("M4"),  # ignores the amount of water: uses the per-100 g figures
    "C01-M5": _only_crystal("M5"),  # gives the solute still dissolved, not the crystals
    "C01-M6": _only_crystal("M6"),  # takes all the dissolved solute as crystallising
}
