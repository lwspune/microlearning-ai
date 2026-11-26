"""C08 Oxoacids of phosphorus: named answers. Only H bonded to O (P-OH) ionises. H3PO2 (hypophosphorous acid, P +1):
one P-OH, two P-H, monobasic. H3PO3 (phosphorous acid, P +3): two P-OH, one P-H, dibasic. H3PO4 (P +5): tribasic.
H4P2O7 (pyrophosphoric acid): four P-OH, tetrabasic. P-H bonds make H3PO2 and H3PO3 reducing agents; on heating,
4H3PO3 -> 3H3PO4 + PH3 (disproportionation).
M1 counts every H; M2 takes it as dibasic; M3 thinks P-H acids aren't acids; M4 credits the oxidation state; M5 credits
the OH groups; M6 calls them ionic; M7 copies H3PO4's +5; M8 gives +1; M9 forgets H; M10 halves it per P; M11 takes
it as tribasic; M12 counts the O atoms; M13 expects plain dehydration; M14 expects H3PO2 and oxygen; M15 expects
phosphorus and water."""
from ._mix import mixed_models

TABLE = {
    "h3po2": {"key": "monobasic", "C08-M1": "tribasic", "C08-M2": "dibasic", "C08-M3": "not_acidic"},
    "reducing": {"key": "p_h_bonds", "C08-M4": "high_state", "C08-M5": "many_oh", "C08-M6": "ionic_bonds"},
    "ox": {"key": "ox_plus_three", "C08-M7": "ox_plus_five", "C08-M8": "ox_plus_one", "C08-M9": "ox_plus_six"},
    "pyro": {"key": "basicity_four", "C08-M10": "basicity_two", "C08-M11": "basicity_three", "C08-M12": "basicity_seven"},
    "heat": {"key": "h3po4_and_ph3", "C08-M13": "p4o6_and_water", "C08-M14": "h3po2_and_oxygen", "C08-M15": "p4_and_water"},
}
MODELS = mixed_models("C08", TABLE, 15)
