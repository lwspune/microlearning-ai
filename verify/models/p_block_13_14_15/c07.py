"""C07 Notable compounds: named answers. Boron nitride, (BN)x, is 'inorganic graphite'. Haber's process makes NH3.
Borate is detected by the green-edged flame of volatile ethyl borate (with ethanol and conc. H2SO4). Silicones are
polymers with -Si-O-Si- chains carrying organic groups: water-repellent, heat-stable. Ammonia's N lone pair makes it a
complexing agent, e.g. [Cu(NH3)4]2+.
M1 picks borax; M2 picks diborane; M3 picks colemanite; M4 confuses Haber with Ostwald; M5 picks urea; M6 picks NH4OH; M7
gives calcium's flame; M8 gives sodium's flame; M9 gives the nitrate test; M10 calls silicones pure silicon; M11 calls
them sand; M12 thinks they contain no silicon; M13 calls ammonia an acid; M14 credits hydrogen bonds; M15 denies its lone
pair."""
from ._mix import mixed_models

TABLE = {
    "inorganic_graphite": {"key": "boron_nitride", "C07-M1": "borax", "C07-M2": "diborane", "C07-M3": "colemanite"},
    "haber": {"key": "ammonia", "C07-M4": "nitric_acid", "C07-M5": "urea", "C07-M6": "ammonium_hydroxide"},
    "borate": {"key": "green_flame", "C07-M7": "brick_red", "C07-M8": "golden_yellow", "C07-M9": "brown_ring"},
    "silicones": {"key": "si_o_polymers", "C07-M10": "pure_silicon", "C07-M11": "sand", "C07-M12": "no_silicon"},
    "complexing": {"key": "lone_pair_donor", "C07-M13": "acid", "C07-M14": "hydrogen_bonds", "C07-M15": "no_lone_pair"},
}
MODELS = mixed_models("C07", TABLE, 15)
