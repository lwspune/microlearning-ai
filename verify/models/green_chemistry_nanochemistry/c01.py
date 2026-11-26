"""C01 Sustainable development and green chemistry: named answers. Sustainable development meets present needs without
compromising future generations' ability to meet theirs. Green chemistry (coined by Paul T. Anastas) designs chemical
products and processes that reduce or eliminate hazardous substances: preventing waste beats treating it.
M1 takes sustainable to mean continuous; M2 picks a vague label; M3 picks the opposite label; M4 credits Born and Haber;
M5 credits Norio Taniguchi (nanotechnology); M6 credits Richard Feynman (nanoscience); M7 thinks green chemistry means
treating pollution after release; M8 thinks it means using only natural chemicals; M9 thinks it is the chemistry of
plants; M10 thinks dilution solves pollution; M11 thinks safe storage of waste is the green answer; M12 thinks any waste at all is unsustainable; M13 thinks
using any chemical is unsustainable; M14 thinks all industry is unsustainable."""
from ._table import table_models

ANSWERS = {
    "sustainable": {"key": "sustainable", "C01-M1": "continuous", "C01-M2": "true_dev", "C01-M3": "irrational"},
    "anastas": {"key": "anastas", "C01-M4": "born_haber", "C01-M5": "taniguchi", "C01-M6": "feynman"},
    "define": {"key": "reduce_hazard_design", "C01-M7": "clean_up_after", "C01-M8": "natural_only", "C01-M9": "plant_chemistry"},
    "waste": {"key": "redesign", "C01-M7": "treat_waste", "C01-M10": "dilute", "C01-M11": "store_underground"},
    "capacity": {"key": "exceeds_capacity", "C01-M12": "any_waste", "C01-M13": "any_chemical", "C01-M14": "any_industry"},
}
MODELS = table_models("C01", ANSWERS, 14)
