"""C01 Elements, compounds and mixtures: named answers. Pure substances are elements (one kind of atom, e.g. O3) or
compounds (elements combined in a fixed ratio by mass, separable only chemically, with new properties); mixtures are
homogeneous (uniform: air, salt solution, brass) or heterogeneous (oil and water, sand in water).
M1 calls a compound a mixture because it has two elements; M2 thinks a solid in a liquid is always uniform; M3 calls a
pure gas a mixture; M4 thinks any two-substance solution is heterogeneous; M5 thinks an alloy has visible parts; M6
calls a compound heterogeneous; M7 thinks a small molecule must be an element; M8 thinks any gas is an element; M9 calls
a mixture of gases an element; M10 reverses compound and mixture; M11 thinks a compound's composition can vary; M12
thinks a compound keeps its elements' properties; M13 classifies by physical state; M14 by metal and non-metal; M15 by
organic and inorganic."""
from ._mix import mixed_models

TABLE = {
    "homogeneous": {"key": "air", "C01-M1": "water", "C01-M2": "sand_in_water", "C01-M3": "oxygen"},
    "heterogeneous": {"key": "oil_and_water", "C01-M4": "salt_solution", "C01-M5": "brass", "C01-M6": "sugar"},
    "element": {"key": "ozone", "C01-M7": "water", "C01-M8": "carbon_dioxide", "C01-M9": "air"},
    "compound": {"key": "fixed_ratio", "C01-M10": "physical_separation", "C01-M11": "variable", "C01-M12": "keeps_properties"},
    "types": {"key": "pure_and_mixtures", "C01-M13": "states", "C01-M14": "metals", "C01-M15": "organic"},
}
MODELS = mixed_models("C01", TABLE, 15)
