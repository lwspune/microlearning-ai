"""C02 Physisorption and chemisorption: named answers. Physisorption: van der Waals forces, reversible, not specific,
20-40 kJ/mol, decreases as temperature rises. Chemisorption: chemical bonds (a surface compound), specific, irreversible,
80-240 kJ/mol, needs activation energy.
M1 swaps the two kinds; M2 says absorption; M3 says catalysis; M4 thinks physisorption grows with temperature; M5 thinks
it is unchanged; M6 gives chemisorption's rise-then-fall; M7 gives physisorption's enthalpy; M8 gives zero; M9 calls it
endothermic; M10 gives chemisorption's features; M11 says a compound forms; M12 says it needs activation energy."""
from ._mix import mixed_models

TABLE = {
    "van_der_waals": {"key": "physisorption", "C02-M1": "chemisorption", "C02-M2": "absorption", "C02-M3": "catalysis"},
    "compound": {"key": "chemisorption", "C02-M1": "physisorption", "C02-M2": "absorption", "C02-M3": "catalysis"},
    "temperature": {"key": "decreases", "C02-M4": "increases", "C02-M5": "unchanged", "C02-M6": "rises_falls"},
    "enthalpy": {"key": "kj_80_240", "C02-M7": "kj_20_40", "C02-M8": "zero", "C02-M9": "positive"},
    "physisorption": {"key": "reversible_nonspecific", "C02-M10": "irreversible_specific", "C02-M11": "forms_compound",
                      "C02-M12": "needs_activation"},
}
MODELS = mixed_models("C02", TABLE, 12)
