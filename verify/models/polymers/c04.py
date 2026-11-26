"""C04 Polythene and Teflon: named answers. LDP: free-radical polymerization of ethene at high pressure (1000-2000 atm)
and 350-570 K, branched chains; HDP: Ziegler-Natta catalyst at low pressure, linear chains packed closely. Teflon from
tetrafluoroethene, CF2=CF2; inert because of strong C-F bonds. PVC from vinyl chloride; PAN (Orlon) from acrylonitrile,
CH2=CH-CN.
M1 confuses the Teflon monomer with caprolactam; M2 with vinyl chloride; M3 with styrene; M4 thinks Teflon has C-H
bonds; M5 credits hydrogen bonds; M6 thinks the polymer keeps C=C bonds; M7 swaps LDP and HDP; M8 thinks HDP is
cross-linked; M9 thinks HDP has a different monomer; M10 thinks a saturated nitrile can add; M11 confuses acrylonitrile
with acrylic acid; M12 thinks polythene forms by condensation of ethanol; M13 thinks it is made from ethyne."""
from ._table import table_models

ANSWERS = {
    "teflon": {"key": "tetrafluoroethene", "C04-M1": "caprolactam", "C04-M2": "vinyl_chloride", "C04-M3": "styrene"},
    "inert": {"key": "c_f", "C04-M4": "c_h", "C04-M5": "h_bond", "C04-M6": "c_c_double"},
    "hdp": {"key": "linear_ziegler", "C04-M7": "branched_high_p", "C04-M8": "cross_linked", "C04-M9": "other_monomer"},
    "pan": {"key": "acrylonitrile", "C04-M2": "vinyl_chloride", "C04-M10": "acetonitrile", "C04-M11": "acrylic_acid"},
    "ldp": {"key": "radical_high_p", "C04-M7": "ziegler_low_p", "C04-M12": "ethanol_condensation", "C04-M13": "ethyne"},
}
MODELS = table_models("C04", ANSWERS, 13)
