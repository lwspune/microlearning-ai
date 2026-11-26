"""C03 Characteristics of the blocks: named answers. s block: reactive metals with colourless ions; p block: metals,
metalloids and nonmetals (Al metal, Si metalloid, P nonmetal); d block: variable oxidation states and coloured ions with
incomplete d subshells (Cu2+ 3d9 coloured, Zn2+ 3d10 colourless); f block at the bottom.
M1 thinks Zn is not a metal; M2 credits reactivity; M3 gives Zn2+ unpaired electrons; M4 picks d block; M5 picks p block;
M6 picks f block; M7 gives transition metals a fixed +1 state; M8 calls them inert; M9 calls them nonmetals; M10 says
only nonmetals; M11 says only metals; M12 says only noble gases; M13 reverses the change; M14 calls all three metals;
M15 puts the metalloid first."""
from ._mix import mixed_models

TABLE = {
    "cu_zn": {"key": "incomplete_d", "C03-M1": "zn_not_metal", "C03-M2": "cu_more_reactive", "C03-M3": "zn_unpaired"},
    "two_metals": {"key": "s_block", "C03-M4": "d_block", "C03-M5": "p_block", "C03-M6": "f_block"},
    "d_feature": {"key": "variable_coloured", "C03-M7": "fixed_plus1", "C03-M8": "inert", "C03-M9": "nonmetallic"},
    "p_contains": {"key": "all_three", "C03-M10": "only_nonmetals", "C03-M11": "only_metals", "C03-M12": "only_noble"},
    "al_p": {"key": "metal_metalloid_nonmetal", "C03-M13": "nonmetal_to_metal", "C03-M14": "all_metals", "C03-M15": "metalloid_first"},
}
MODELS = mixed_models("C03", TABLE, 15)
