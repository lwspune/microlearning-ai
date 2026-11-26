"""C09 Types of chemical reactions: named answers. Combination (A + B -> AB); decomposition by heat (CaCO3 -> CaO +
CO2), light (2AgBr -> 2Ag + Br2) or electricity; displacement, where a more reactive element pushes a less reactive one
out of its compound (Fe + CuSO4 -> FeSO4 + Cu; Cu + 2AgNO3 -> Cu(NO3)2 + 2Ag); double displacement, where two
compounds swap ions, often giving a precipitate (BaCl2 + Na2SO4 -> BaSO4 + 2NaCl).
M1 calls it combination; M2 displacement; M3 double displacement; M4 double displacement; M5 combination;
M6 decomposition; M7 displacement; M8 combination; M9 decomposition; M10 thermal; M11 electrolytic; M12 combination;
M13 expects no reaction; M14 reverses it; M15 calls it double displacement."""
from ._mix import mixed_models

TABLE = {
    "caco3": {"key": "thermal_decomposition", "C09-M1": "combination", "C09-M2": "displacement", "C09-M3": "double_displacement"},
    "fe": {"key": "displacement", "C09-M4": "double_displacement", "C09-M5": "combination", "C09-M6": "decomposition"},
    "ba": {"key": "double_displacement", "C09-M7": "displacement", "C09-M8": "combination", "C09-M9": "decomposition"},
    "agbr": {"key": "photochemical", "C09-M10": "thermal_decomposition", "C09-M11": "electrolytic", "C09-M12": "combination"},
    "cu_ag": {"key": "copper_displaces_silver", "C09-M13": "no_reaction", "C09-M14": "silver_displaces_copper",
              "C09-M15": "double_displacement"},
}
MODELS = mixed_models("C09", TABLE, 15)
