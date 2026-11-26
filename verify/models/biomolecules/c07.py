"""C07 Nucleic acids: named answers. A nucleoside is base + pentose; a nucleotide adds a phosphate. DNA: deoxyribose,
bases A, G, C, T, double helix with A-T and G-C pairs, so A = T and G = C in amount. RNA: ribose, U in place of T, single
strand; both have a sugar-phosphate (P-S-P-S) backbone. A complementary strand pairs A-T and G-C and runs antiparallel.
M1 thinks adenine is found only in RNA; M2 thinks guanine is found only in RNA; M3 confuses cytosine with uracil; M4
thinks A-U pairs join two RNA strands; M5 thinks RNA is a double helix; M6 thinks RNA pairs G-C across two strands; M7
writes U for T in DNA; M8 copies the strand; M9 reverses instead of pairing; M10 thinks A and T interconvert on
hydrolysis; M11 thinks every nucleotide holds one A and one T; M12 credits equal molar masses; M13 describes a
nucleoside; M14 leaves out the sugar; M15 confuses nucleotides with amino acids."""
from ._table import table_models

ANSWERS = {
    "dna_base": {"key": "uracil", "C07-M1": "adenine", "C07-M2": "guanine", "C07-M3": "cytosine"},
    "rna": {"key": "psps_backbone", "C07-M4": "a_u_pairs", "C07-M5": "double_helix", "C07-M6": "g_c_pairs"},
    "complement": {"key": "tgcatg", "C07-M7": "ugcaug", "C07-M8": "acgtac", "C07-M9": "catgca"},
    "chargaff": {"key": "a_pairs_t", "C07-M10": "interconvert", "C07-M11": "one_each", "C07-M12": "same_mass"},
    "nucleotide": {"key": "base_sugar_phosphate", "C07-M13": "base_sugar", "C07-M14": "base_phosphate", "C07-M15": "amino_acid"},
}
MODELS = table_models("C07", ANSWERS, 15)
