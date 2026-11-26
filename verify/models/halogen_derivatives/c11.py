"""C11 Polyhalogen compounds: answer models (the key, and one per misconception).

Named answers. params["q"] picks the question.
CHCl3 with a strong base gives dichlorocarbene; freons (CFCs) are refrigerants and propellants that release Cl in the
stratosphere and destroy ozone; DDT is an insecticide that does not break down and builds up in food chains;
chloroform is kept in dark, full, closed bottles as light and air oxidise it to poisonous phosgene; dichloromethane is
a solvent and paint remover that harms the nervous system.
"""
from sympy import Symbol

ANSWERS = {
    # M1 thinks the compound is harmless; M2 gives it DDT's use (insecticide); M3 thinks DDT breaks down quickly;
    # M4 thinks CFCs do their harm in the lower atmosphere; M5 thinks chloroform is stable in light and air;
    # M6 takes CCl4 as the dichlorocarbene source; M7 goes by the name "dichloro"; M8 gives it the freons' use.
    "carbene": {"key": "chloroform", "C11-M6": "carbon_tetrachloride", "C11-M7": "dichloromethane",
                "C11-M8": "freon_12"},
    "freon": {"key": "refrigerant_stratosphere_ozone", "C11-M1": "refrigerant_harmless",
              "C11-M2": "insecticide_food_chain", "C11-M4": "refrigerant_ground_level"},
    "ddt": {"key": "insecticide_persistent", "C11-M3": "insecticide_breaks_down", "C11-M1": "insecticide_harmless",
            "C11-M8": "refrigerant_ozone"},
    "store": {"key": "dark_bottles_phosgene", "C11-M5": "clear_bottles_stable", "C11-M1": "no_care_harmless",
              "C11-M7": "dark_bottles_dichloromethane"},
    "dcm": {"key": "solvent_nervous_system", "C11-M1": "solvent_harmless", "C11-M2": "insecticide",
            "C11-M8": "refrigerant"},
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


MODELS = {"key": key, **{f"C11-M{i}": _m(f"C11-M{i}") for i in range(1, 9)}}
