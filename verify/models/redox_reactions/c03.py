"""C03 Stock notation: named answers. A Roman numeral gives the metal's oxidation number: MnO2 is Mn(IV)O2; mercury(II)
chloride is HgCl2; thallium(I) sulphate Tl2SO4; Fe2O3 is iron(III) oxide; Au in HAuCl4 is +3.
M1 counts the Mn atoms; M2 counts the O atoms; M3 takes each O as -4; M4 reads II as a subscript of Hg; M5 writes one Cl;
M6 gives mercury(I) chloride; M7 ignores sulphate's 2- charge; M8 swaps the subscripts; M9 uses thallium(III); M10 uses
the Fe subscript; M11 puts both irons' charge on one; M12 confuses Fe2O3 with Fe3O4; M13 leaves out H; M14 flips the
sign; M15 takes gold as +1."""
from ._mix import mixed_models

TABLE = {
    "mno2": {"key": "mn_iv", "C03-M1": "mn_i", "C03-M2": "mn_ii", "C03-M3": "mn_viii"},
    "hgcl2": {"key": "hgcl2", "C03-M4": "hg2cl", "C03-M5": "hgcl", "C03-M6": "hg2cl2"},
    "tl2so4": {"key": "tl2so4", "C03-M7": "tlso4", "C03-M8": "tl_so4_2", "C03-M9": "tl2_so4_3"},
    "fe2o3": {"key": "iron_iii", "C03-M10": "iron_ii", "C03-M11": "iron_vi", "C03-M12": "iron_ii_iii"},
    "haucl4": {"key": "plus_3", "C03-M13": "plus_4", "C03-M14": "minus_3", "C03-M15": "plus_1"},
}
MODELS = mixed_models("C03", TABLE, 15)
