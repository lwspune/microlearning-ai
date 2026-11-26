"""C04 Amino acids: named answers. Glycine (H2N-CH2-COOH) is achiral, so neither D nor L; it is neutral, natural and
exists as a zwitterion. Essential amino acids cannot be made by the body. The dipolar zwitterion H3N+-CHR-COO- makes
amino acids high-melting, water-soluble and amphoteric: in acid the cation H3N+-CHR-COOH, in base the anion
H2N-CHR-COO-.
M1 thinks glycine is acidic; M2 thinks only amino acids with extra charged groups form zwitterions; M3 thinks natural
amino acids must be chiral; M4 ties essential to an aromatic ring; M5 thinks essential means present in every protein;
M6 thinks essential means needed for enzymes; M7 thinks COOH dimers explain it; M8 credits molar mass; M9 thinks amino
acids are covalent network solids; M10 writes the un-ionised form; M11 writes the cation; M12 writes the anion; M13
thinks the zwitterion persists at any pH; M14 thinks a base adds a proton."""
from ._table import table_models

ANSWERS = {
    "glycine": {"key": "l_amino_acid", "C04-M1": "neutral", "C04-M2": "zwitterion", "C04-M3": "natural"},
    "essential": {"key": "not_synthesised", "C04-M4": "aromatic", "C04-M5": "in_all_proteins", "C04-M6": "for_enzymes"},
    "melting": {"key": "zwitterion_ionic", "C04-M7": "acid_dimers", "C04-M8": "high_mass", "C04-M9": "network"},
    "solid": {"key": "zwitterion", "C04-M10": "neutral_form", "C04-M11": "cation", "C04-M12": "anion"},
    "base": {"key": "anion", "C04-M13": "zwitterion", "C04-M14": "cation", "C04-M10": "neutral_form"},
}
MODELS = table_models("C04", ANSWERS, 14)
