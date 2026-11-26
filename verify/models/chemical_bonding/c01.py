"""C01 Octet rule and Lewis structures: named answers. Atoms reach an octet by transferring electrons (ionic, LiF: Li
gives one electron to F) or sharing them (covalent); in a coordinate bond both shared electrons come from one atom.
Exceptions: incomplete octet (B in BF3 has 6), expanded octet (S in SF6 has 12). CO has a C-O triple bond.
M1 assumes every atom keeps an octet; M2 counts only S's own valence electrons; M3 counts every electron on the F atoms;
M4 confuses expanded and incomplete octets; M5 ignores lone pairs when counting; M6 counts only carbon's own electrons;
M7 describes an ionic bond; M8 describes a normal covalent bond; M9 thinks metals share electrons; M10 thinks LiF is
covalent; M11 reverses the transfer; M12 calls it a coordinate bond; M13 stops at a double bond; M14 draws a single
bond; M15 calls CO ionic."""
from ._mix import mixed_models

TABLE = {
    "sf6": {"key": "twelve", "C01-M1": "eight", "C01-M2": "six", "C01-M3": "forty_eight"},
    "incomplete": {"key": "bf3", "C01-M4": "sf6", "C01-M5": "nh3", "C01-M6": "ch4"},
    "coordinate": {"key": "one_atom_gives_both", "C01-M7": "transfer", "C01-M8": "one_each", "C01-M9": "metals_share"},
    "lif": {"key": "li_to_f", "C01-M10": "shared_pair", "C01-M11": "f_to_li", "C01-M12": "coordinate"},
    "co": {"key": "triple", "C01-M13": "double", "C01-M14": "single", "C01-M15": "ionic"},
}
MODELS = mixed_models("C01", TABLE, 15)
