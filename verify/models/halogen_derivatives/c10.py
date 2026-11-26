"""C10 Wurtz, Fittig and Grignard: answer models (the key, and one per misconception).

Named answers. params["q"] picks the reaction.
Wurtz: 2R-X + 2Na (dry ether) -> R-R; Fittig: 2Ar-X + 2Na -> Ar-Ar; Grignard: R-X + Mg (dry ether) -> RMgX,
which water turns into the alkane R-H (so the reagent is made and kept anhydrous).
  "wurtz":   2-bromopropane + Na in dry ether;
  "fittig":  chlorobenzene + Na in dry ether;
  "grig":    chlorocyclohexane + Mg in dry ether, then water: product B;
  "dry":     why Grignard reactions must be anhydrous;
  "phmg":    chlorobenzene + Mg in dry ether: product A.
"""
from sympy import Symbol

ANSWERS = {
    # M1 the metal just replaces X by H; M2 stops at the organometallic, as if it were the final product; M3 water turns
    # RMgX into an alcohol; M4 water does not matter; M5 aryl halides do not react with metals; M6 writes the coupled
    # product as a straight chain; M7 the metal or water eliminates HX to an alkene; M8 Mg couples halides like Na.
    "wurtz": {"key": "dimethylbutane_23", "C10-M1": "propane", "C10-M7": "propene", "C10-M6": "hexane"},
    "fittig": {"key": "biphenyl", "C10-M1": "benzene", "C10-M5": "no_reaction", "C10-M2": "phenylsodium"},
    "grig": {"key": "cyclohexane", "C10-M3": "cyclohexanol", "C10-M2": "unchanged_rmgx", "C10-M7": "cyclohexene"},
    "dry": {"key": "water_destroys_alkane", "C10-M4": "water_only_slows", "C10-M3": "water_gives_alcohol",
            "C10-M7": "water_gives_alkene"},
    "phmg": {"key": "phenylmagnesium_chloride", "C10-M1": "benzene", "C10-M5": "no_reaction", "C10-M8": "biphenyl"},
}


def key(v, p):
    return Symbol(ANSWERS[p["q"]]["key"])


def _m(mid):
    def model(v, p):
        table = ANSWERS[p["q"]]
        if mid not in table:
            raise ValueError("does not apply to this item")
        return Symbol(table[mid])
    return model


MODELS = {"key": key, **{f"C10-M{i}": _m(f"C10-M{i}") for i in range(1, 9)}}
