"""C04 Hydrogen bonding and boiling points: answer models (the key, and one per misconception).

Named answers. Alcohols and phenols hydrogen bond to each other, so they boil far above ethers and alkanes of similar
mass; branching lowers boiling points; ethers cannot hydrogen bond to each other but accept H-bonds from water;
o-nitrophenol's OH bonds inside the molecule (intramolecular), so it is more volatile and less soluble than
p-nitrophenol.
"""
from sympy import Symbol

ANSWERS = {
    # M1 ranks by molar mass alone, ignoring hydrogen bonding; M2 thinks branching raises the boiling point; M3 thinks
    # ethers hydrogen bond to each other like alcohols; M4 thinks an intramolecular H-bond helps with water;
    # M5 reverses the whole order; M6 thinks ethers cannot H-bond with water at all; M7 thinks a benzene ring stops
    # phenol hydrogen bonding with water; M8 thinks only dipole-dipole forces act; M9 thinks every compound
    # listed can hydrogen bond with water; M10 thinks a secondary alcohol hydrogen bonds most weakly.
    "order": {"key": "ether_tert_n", "C04-M2": "ether_n_tert", "C04-M3": "tert_ether_n", "C04-M5": "n_tert_ether"},
    "butyl": {"key": "tert_butyl", "C04-M2": "n_butyl", "C04-M1": "all_equal", "C04-M10": "sec_butyl"},
    "nitro": {"key": "para_more", "C04-M4": "ortho_more", "C04-M1": "equal", "C04-M7": "neither"},
    "ethanol": {"key": "h_bonding", "C04-M1": "mass_only", "C04-M8": "dipole_only", "C04-M5": "lower"},
    "noh": {"key": "butane", "C04-M6": "methoxyethane", "C04-M7": "phenol", "C04-M9": "none_all_bond"},
}


def key(v, p):
    return Symbol(ANSWERS[p["q"]]["key"])


def _m(mid):
    def model(v, p):
        table = ANSWERS[p["q"]]
        if mid not in table:
            raise ValueError("does not apply to this item")
        return Symbol(table[mid])
    return model


MODELS = {"key": key, **{f"C04-M{i}": _m(f"C04-M{i}") for i in range(1, 11)}}
