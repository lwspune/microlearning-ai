"""C01 Chemistry of food: named answers. Monounsaturated fats bring health benefits; saturated fats have only C-C single
bonds in their chains. Cooking breaks down starch and proteins (it gelatinises starch), so cooked rice is easier to
digest than rice flour. Carbohydrates are the main source of quick energy.
M1 picks saturated fats; M2 picks trans fats; M3 picks all of them; M4 gives saturated fats double bonds; M5 calls them
liquid oils; M6 denies them carbon chains; M7 thinks cooking adds nutrients; M8 thinks it removes all water; M9 thinks it
turns proteins into fats; M10 thinks cooked rice has no starch; M11 calls rice flour protein; M12 thinks starch becomes
fat; M13 picks vitamins; M14 picks minerals; M15 picks water."""
from ._mix import mixed_models

TABLE = {
    "healthy_fat": {"key": "monounsaturated", "C01-M1": "saturated", "C01-M2": "trans", "C01-M3": "all_of_these"},
    "saturated": {"key": "single_bonds", "C01-M4": "double_bonds", "C01-M5": "liquid_oils", "C01-M6": "no_chains"},
    "cooking": {"key": "breaks_down", "C01-M7": "adds_nutrients", "C01-M8": "removes_water", "C01-M9": "protein_to_fat"},
    "rice": {"key": "gelatinised", "C01-M10": "no_starch", "C01-M11": "flour_protein", "C01-M12": "starch_to_fat"},
    "energy": {"key": "carbohydrates", "C01-M13": "vitamins", "C01-M14": "minerals", "C01-M15": "water"},
}
MODELS = mixed_models("C01", TABLE, 15)
