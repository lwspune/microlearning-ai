"""C02 Principles of green chemistry: named answers. Use safer solvents (water, supercritical CO2) in place of volatile
halogenated or aromatic ones; prefer catalysts, which are not used up and cut waste, energy and time; design safer
chemicals (lindane, the gamma isomer of BHC, is a persistent insecticide); avoid unnecessary steps such as protecting
groups, which need extra reagents and make waste; use renewable feedstocks (e.g. ethanol by fermenting molasses).
M1 thinks a nonflammable halogenated solvent is green; M2 thinks a common lab solvent is safe; M3 thinks a fuel from
nature is a green solvent; M4 thinks catalysts shift the equilibrium; M5 thinks catalysts are always nontoxic; M6 thinks
catalysts are used up; M7 confuses BHC with DDT; M8 takes BHC for a simple chloro-solvent; M9 confuses BHC with
chlorobenzene; M10 thinks protecting groups make reactions too fast; M11 thinks fewer steps change the product; M12
thinks a rule demands one step; M13 thinks petroleum is renewable; M14 thinks coal is renewable; M15 thinks natural gas
is renewable."""
from ._table import table_models

ANSWERS = {
    "solvent": {"key": "supercritical_co2", "C02-M1": "ccl4", "C02-M2": "benzene", "C02-M3": "petrol"},
    "catalyst": {"key": "not_used_up", "C02-M4": "shift_equilibrium", "C02-M5": "nontoxic", "C02-M6": "consumed"},
    "bhc": {"key": "lindane", "C02-M7": "ddt", "C02-M8": "chloroform", "C02-M9": "chlorobenzene"},
    "steps": {"key": "extra_waste", "C02-M10": "too_fast", "C02-M11": "different_product", "C02-M12": "rule"},
    "renewable": {"key": "fermentation", "C02-M13": "cracking", "C02-M14": "coal", "C02-M15": "natural_gas"},
}
MODELS = table_models("C02", ANSWERS, 15)
