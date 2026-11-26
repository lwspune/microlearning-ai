"""C05 Bond fission and reactive intermediates: named answers. Homolysis splits a bond's pair equally, giving neutral
free radicals (an unpaired electron each); heterolysis gives a carbocation and a carbanion. A carbocation is sp2 and
planar; stability tertiary > secondary > primary > methyl. Nucleophiles (NH3) donate electron pairs; electrophiles (CH3+)
accept them.
M1 describes heterolysis; M2 gives two anions; M3 thinks a catalyst is needed; M4 calls the carbocation linear; M5
tetrahedral; M6 octahedral; M7 picks methyl; M8 picks ethyl; M9 picks secondary; M10 swaps the roles; M11 calls both
electrophiles; M12 calls both nucleophiles; M13 calls radicals negative; M14 calls them positive; M15 gives them only a
lone pair."""
from ._mix import mixed_models

TABLE = {
    "homolysis": {"key": "equal_radicals", "C05-M1": "unequal_ions", "C05-M2": "two_anions", "C05-M3": "needs_catalyst"},
    "geometry": {"key": "planar", "C05-M4": "linear", "C05-M5": "tetrahedral", "C05-M6": "octahedral"},
    "stable_cation": {"key": "tert_butyl", "C05-M7": "methyl", "C05-M8": "ethyl", "C05-M9": "isopropyl"},
    "nh3_ch3": {"key": "nh3_nucleophile", "C05-M10": "swapped", "C05-M11": "both_electrophiles", "C05-M12": "both_nucleophiles"},
    "radical": {"key": "neutral_unpaired", "C05-M13": "negative", "C05-M14": "positive", "C05-M15": "lone_pair_only"},
}
MODELS = mixed_models("C05", TABLE, 15)
