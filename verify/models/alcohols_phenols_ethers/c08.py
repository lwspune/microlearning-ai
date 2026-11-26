"""C08 Preparing and cleaving ethers: answer models (the key, and one per misconception).

Named answers. Williamson synthesis: alkoxide + primary alkyl halide (secondary and tertiary halides eliminate);
hot HI cleaves ethers by SN2 at the smaller alkyl group (methyl gets the iodine); anisole gives phenol and iodomethane
(the aryl-O bond does not break); ethers form explosive peroxides in air and light (kept in brown, airtight bottles);
cold conc. H2SO4 protonates the ether oxygen, giving an oxonium salt.
"""
from sympy import Symbol

ANSWERS = {
    # M1 thinks the aryl-O bond breaks; M2 thinks HI only hydrolyses the ether to alcohols; M3 thinks the larger alkyl
    # group takes the iodide; M4 ignores elimination with secondary halides in Williamson synthesis; M5 expects one
    # ether from heating two different alcohols with acid; M6 confuses Williamson with Wurtz; M7 thinks ethers absorb
    # moisture; M8 thinks ethers are inert; M9 thinks cold conc. H2SO4 dehydrates ethers to alkenes; M10 thinks it
    # gives alkoxides.
    "anisole": {"key": "phenol_ch3i", "C08-M1": "iodobenzene_methanol", "C08-M2": "phenol_methanol",
                "C08-M3": "iodobenzene_ch3i"},
    "methoxyethane": {"key": "ch3i_ethanol", "C08-M3": "c2h5i_methanol", "C08-M2": "methanol_ethanol",
                      "C08-M1": "no_reaction"},
    "williamson": {"key": "isopropoxide_ethyl_chloride", "C08-M4": "ethoxide_isopropyl_chloride",
                   "C08-M5": "two_alcohols_acid", "C08-M6": "two_chlorides_sodium"},
    "bottles": {"key": "peroxides", "C08-M7": "moisture", "C08-M8": "inert", "C08-M9": "alkene_light"},
    "h2so4": {"key": "oxonium_salt", "C08-M9": "alkene", "C08-M10": "alkoxide", "C08-M2": "alcohols"},
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


MODELS = {"key": key, **{f"C08-M{i}": _m(f"C08-M{i}") for i in range(1, 11)}}
