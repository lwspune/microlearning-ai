"""C01 Classes of carbohydrates: named answers. Monosaccharides cannot be hydrolysed further; oligosaccharides give 2-10
units; polysaccharides many. Monosaccharides are aldoses (CHO) or ketoses (C=O inside the chain), named by total carbon
count: glucose is an aldohexose, fructose a ketohexose. Sugars with a free (or ring-openable) carbonyl reduce Tollens'
reagent; sucrose does not.
M1 misses a terminal CH2OH when counting carbons; M2 thinks every sugar C=O is an aldehyde; M3 counts only the CHOH
groups; M4 does not count the C=O carbon; M5 thinks sugars with many OH groups are oligosaccharides; M6 thinks the
ring form of glucose cannot reduce; M7 thinks ketoses never reduce Tollens' reagent; M8 thinks all disaccharides are
nonreducing; M9 thinks oligo means many; M10 thinks starch is a disaccharide; M11 thinks starch cannot be hydrolysed;
M12 thinks mono refers to one OH group; M13 thinks mono refers to one carbon atom; M14 defines monosaccharides by
taste."""
from ._table import table_models

ANSWERS = {
    "heptose": {"key": "ketoheptose", "C01-M1": "ketohexose", "C01-M2": "aldoheptose", "C01-M3": "ketotetrose"},
    "fructose": {"key": "ketohexose", "C01-M2": "aldohexose", "C01-M4": "ketopentose", "C01-M5": "oligosaccharide"},
    "nonreducing": {"key": "sucrose", "C01-M6": "glucose", "C01-M7": "fructose", "C01-M8": "maltose"},
    "starch": {"key": "polysaccharide", "C01-M9": "oligosaccharide", "C01-M10": "disaccharide", "C01-M11": "monosaccharide"},
    "mono": {"key": "not_hydrolysable", "C01-M12": "one_oh", "C01-M13": "one_carbon", "C01-M14": "sweet"},
}
MODELS = table_models("C01", ANSWERS, 14)
