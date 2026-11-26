"""C05 Peptides and protein structure: named answers. A peptide bond is the amide -CO-NH- formed from COOH of one amino
acid and NH2 of the next with loss of water. Primary structure: the amino acid sequence; secondary: alpha-helix (H bonds
within one chain) and beta-sheet (H bonds between chains); tertiary: overall folding, held by H bonds, disulfide links,
ionic and van der Waals forces; quaternary: arrangement of several chains. Heat denatures proteins (breaks the H bonds
of 2nd and 3rd structure; peptide bonds stay), as when egg albumin coagulates.
M1 thinks covalent links belong to the primary structure; M2 confuses a disulfide link with the helix; M3 thinks S-S
links make quaternary structure; M4 thinks peptide bonds hold the helix; M5 thinks disulfide bridges hold it; M6 confuses
the helix with the beta-sheet; M7 thinks boiling hydrolyses peptide bonds; M8 thinks the protein burns; M9 thinks water
evaporates; M10 calls the peptide bond an ester; M11 calls it a hydrogen bond; M12 thinks it forms by adding water; M13
confuses primary with secondary structure; M14 with tertiary; M15 with quaternary."""
from ._table import table_models

ANSWERS = {
    "disulfide": {"key": "tertiary", "C05-M1": "primary", "C05-M2": "secondary", "C05-M3": "quaternary"},
    "helix": {"key": "h_bonds_same_chain", "C05-M4": "peptide_bonds", "C05-M5": "disulfide", "C05-M6": "h_bonds_between_chains"},
    "albumin": {"key": "denatured", "C05-M7": "hydrolysed", "C05-M8": "burnt", "C05-M9": "dried"},
    "peptide": {"key": "amide_minus_water", "C05-M10": "ester", "C05-M11": "hydrogen_bond", "C05-M12": "adds_water"},
    "primary": {"key": "aa_sequence", "C05-M13": "helix_sheet", "C05-M14": "folding", "C05-M15": "chains"},
}
MODELS = table_models("C05", ANSWERS, 15)
