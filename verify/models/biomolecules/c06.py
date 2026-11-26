"""C06 Enzymes: named answers. Enzymes are globular proteins that catalyse reactions in living cells, each specific to
its substrate (lock and key: the substrate fits the active site), working under mild conditions (about 310 K, near
neutral pH); they lower the activation energy and are not used up. Invertase: sucrose to glucose + fructose; maltase:
maltose to glucose; zymase: glucose to ethanol + CO2. Chymotrypsin cuts amide bonds whose C=O comes from Phe, Tyr or Trp.
M1 thinks enzymes are carbohydrates; M2 lipids; M3 nucleic acids; M4 thinks an enzyme speeds up every reaction; M5
thinks the enzyme is used up; M6 thinks the enzyme shifts the equilibrium; M7 confuses invertase with maltase; M8 with
lactase; M9 with zymase; M10 forgets that heat denatures enzymes; M11 thinks enzymes need very low temperatures; M12
thinks they need strong acid or alkali; M13 cuts the bond where Phe supplies the N; M14 cuts every bond next to Phe;
M15 thinks no bond qualifies."""
from ._table import table_models

ANSWERS = {
    "nature": {"key": "proteins", "C06-M1": "carbohydrates", "C06-M2": "lipids", "C06-M3": "nucleic_acids"},
    "lock": {"key": "specific_fit", "C06-M4": "every_reaction", "C06-M5": "used_up", "C06-M6": "shifts_equilibrium"},
    "invertase": {"key": "glucose_fructose", "C06-M7": "two_glucose", "C06-M8": "glucose_galactose", "C06-M9": "ethanol_co2"},
    "conditions": {"key": "mild", "C06-M10": "hotter_better", "C06-M11": "very_cold", "C06-M12": "strong_acid_alkali"},
    "chymotrypsin": {"key": "phe_gly", "C06-M13": "ala_phe", "C06-M14": "both", "C06-M15": "neither"},
}
MODELS = table_models("C06", ANSWERS, 15)
