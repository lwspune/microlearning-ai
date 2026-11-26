"""C02 Reactions of alkanes: named answers. Free-radical halogenation gives one monochloro product per kind of hydrogen:
2-methylpropane 2, 2-methylbutane 4. Alkanes burn to CO2 and water; strong heating without air (pyrolysis) cracks them
into smaller alkanes and alkenes.
M1 treats all hydrogens as alike; M2 counts carbons; M3 counts hydrogens; M4 misses one kind of hydrogen; M5 expects
dehydrogenation; M6 expects CO and H2 only; M7 expects soot and water; M8 says carbocations; M9 says carbanions; M10 says
ionic addition; M11 expects CO2 and water; M12 expects only hydrogen; M13 expects butene only."""
from ._mix import mixed_models

TABLE = {
    "isobutane": {"key": "two", "C02-M1": "one", "C02-M2": "four", "C02-M3": "ten"},
    "isopentane": {"key": "four", "C02-M4": "three", "C02-M2": "five", "C02-M3": "twelve"},
    "combustion": {"key": "co2_water", "C02-M5": "propene_h2", "C02-M6": "co_h2", "C02-M7": "soot_water"},
    "mechanism": {"key": "free_radical", "C02-M8": "carbocation", "C02-M9": "carbanion", "C02-M10": "ionic_addition"},
    "pyrolysis": {"key": "smaller_alkanes_alkenes", "C02-M11": "co2_water", "C02-M12": "hydrogen_only", "C02-M13": "butene_only"},
}
MODELS = mixed_models("C02", TABLE, 13)
