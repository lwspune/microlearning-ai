"""C06 Uses of nanomaterials: named answers. Silver nanoparticles disinfect water (remove E. coli); carbon black
nanoparticles lengthen tyre life; ZnO and TiO2 nanoparticles in sunscreens block UV; Pd and Pt nanoparticles catalyse
hydrogenation; the lotus leaf's nanoscale wax bumps make water bead and roll off, carrying dirt (self-cleaning).
Risks: nanoparticles can enter the body through skin and lungs and may be toxic.
M1 confuses the tyre filler with the disinfectant; M2 thinks gold is the disinfectant; M3 thinks copper is; M4 confuses
the disinfectant with the tyre filler; M5 confuses the sunscreen oxide with the tyre filler; M6 thinks a precious metal
strengthens tyres; M7 puts carbon black in sunscreen; M8 puts silver in sunscreen; M9 confuses hydrogenation catalysts
with sunscreen; M10 thinks the leaf secretes detergent; M11 credits static charge; M12 thinks the leaf absorbs dirt;
M13 thinks nanoparticles are too large to enter cells; M14 thinks they are always biodegradable; M15 thinks they are
always inert."""
from ._table import table_models

ANSWERS = {
    "silver": {"key": "silver", "C06-M1": "carbon_black", "C06-M2": "gold", "C06-M3": "copper"},
    "tyres": {"key": "carbon_black", "C06-M4": "silver", "C06-M5": "titanium_dioxide", "C06-M6": "gold"},
    "sunscreen": {"key": "zno_tio2", "C06-M7": "carbon_black", "C06-M8": "silver", "C06-M9": "pd_pt"},
    "lotus": {"key": "wax_bumps", "C06-M10": "detergent", "C06-M11": "static", "C06-M12": "absorbs"},
    "risk": {"key": "toxic_entry", "C06-M13": "too_large", "C06-M14": "biodegradable", "C06-M15": "inert"},
}
MODELS = table_models("C06", ANSWERS, 15)
