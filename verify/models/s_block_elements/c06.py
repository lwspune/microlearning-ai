"""C06 Important compounds: named answers. Solvay: CO2 into ammoniated brine precipitates NaHCO3 (heated to Na2CO3).
Washing soda crystals, Na2CO3.10H2O, lose water on heating. Temporary hardness, from Ca(HCO3)2 and Mg(HCO3)2, is removed
by boiling. LiAlH4 is a reducing agent. K+ is the main cation in cell sap.
M1 skips to Na2CO3; M2 gives only NH4Cl; M3 gives NaOH; M4 confuses Na2CO3 with NaHCO3; M5 thinks it turns into NaHCO3;
M6 expects a colour change; M7 adds salt; M8 filters; M9 adds more soap; M10 calls LiAlH4 an oxidant; M11 a drying
agent; M12 a fertiliser; M13 picks Na+; M14 picks Ca2+; M15 picks Mg2+."""
from ._mix import mixed_models

TABLE = {
    "solvay": {"key": "nahco3", "C06-M1": "na2co3", "C06-M2": "nh4cl_only", "C06-M3": "naoh"},
    "heat_soda": {"key": "loses_water", "C06-M4": "releases_co2", "C06-M5": "forms_nahco3", "C06-M6": "colour_change"},
    "hardness": {"key": "boiling", "C06-M7": "common_salt", "C06-M8": "filtering", "C06-M9": "more_soap"},
    "lialh4": {"key": "reducing_agent", "C06-M10": "oxidising_agent", "C06-M11": "drying_agent", "C06-M12": "fertiliser"},
    "cell_sap": {"key": "k_ion", "C06-M13": "na_ion", "C06-M14": "ca_ion", "C06-M15": "mg_ion"},
}
MODELS = mixed_models("C06", TABLE, 15)
