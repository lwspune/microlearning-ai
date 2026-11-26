"""C04 Identifying redox reactions: named answers. A reaction is redox when oxidation numbers change; the species whose
number rises is oxidised and is the reducing agent. 2K + F2 -> 2KF is redox (K 0 -> +1, F 0 -> -1); precipitation,
neutralisation and CaCO3 decomposition are not. In 2Cu2O + Cu2S -> 6Cu + SO2, S rises -2 -> +4, so Cu2S is the reducing
agent. In Zn + Cu2+ -> Zn2+ + Cu, Zn is oxidised. CH4 + 2O2 -> CO2 + 2H2O takes C from -4 to +4.
M1 thinks a precipitate means redox; M2 thinks neutralisation is redox; M3 thinks decomposition always is; M4 picks the
oxide as the reductant; M5 picks a product metal; M6 picks a product oxide; M7 reverses which is oxidised; M8 thinks the
spectator ion changes; M9 picks a product; M10 swaps both; M11 swaps the agent; M12 swaps the process; M13 starts carbon
at 0 and stops at +2; M14 picks a +4 to +2 change; M15 starts carbon at 0."""
from ._mix import mixed_models

TABLE = {
    "is_redox": {"key": "k_f2", "C04-M1": "bacl2_h2so4", "C04-M2": "naoh_hcl", "C04-M3": "caco3"},
    "copper": {"key": "cu2s", "C04-M4": "cu2o", "C04-M5": "cu", "C04-M6": "so2"},
    "zinc": {"key": "zn", "C04-M7": "cu2_ion", "C04-M8": "sulfate", "C04-M9": "cu_metal"},
    "rise": {"key": "oxidised_reductant", "C04-M10": "reduced_oxidant", "C04-M11": "oxidised_oxidant", "C04-M12": "reduced_reductant"},
    "carbon": {"key": "methane_burns", "C04-M13": "c_to_co", "C04-M14": "co2_c", "C04-M15": "c_o2"},
}
MODELS = mixed_models("C04", TABLE, 15)
