"""C06 Structures of boron and other compounds: named answers. Al in (monomeric) AlCl3 and B in BCl3 are sp2: trigonal
planar. Diborane has four terminal B-H bonds and two three-centre two-electron (banana) B-H-B bridges. H3PO4 has one
P=O and three P-OH groups. In HNO3 the two N-O bonds not bearing H are equal through resonance.
M1 picks sp3; M2 picks sp; M3 picks sp3d; M4 gives a B=B bond; M5 calls the B-H bonds ionic; M6 counts six ordinary
B-H bonds; M7 calls BCl3 angular; M8 linear; M9 tetrahedral; M10 gives four P-OH groups; M11 gives P-H bonds; M12 gives a
P-P bond; M13 calls both single; M14 gives N five bonds; M15 calls both double."""
from ._mix import mixed_models

TABLE = {
    "alcl3": {"key": "sp2", "C06-M1": "sp3", "C06-M2": "sp", "C06-M3": "sp3d"},
    "diborane": {"key": "three_centre", "C06-M4": "b_b_double", "C06-M5": "ionic", "C06-M6": "six_ordinary"},
    "bcl3": {"key": "trigonal_planar", "C06-M7": "angular", "C06-M8": "linear", "C06-M9": "tetrahedral"},
    "h3po4": {"key": "one_po_three_oh", "C06-M10": "four_oh", "C06-M11": "p_h_bonds", "C06-M12": "p_p_bond"},
    "hno3": {"key": "resonance", "C06-M13": "both_single", "C06-M14": "five_bonds", "C06-M15": "both_double"},
}
MODELS = mixed_models("C06", TABLE, 15)
