"""C07 Reactions of phenol: answer models (the key, and one per misconception).

Named answers. OH strongly activates the ring and directs ortho and para: bromine water gives 2,4,6-tribromophenol at
once (no catalyst); dilute HNO3 gives o- and p-nitrophenol, conc. HNO3 picric acid; Kolbe (sodium phenoxide + CO2,
398 K, 6 atm, then acid) gives salicylic acid; zinc dust reduces phenol to benzene.
"""
from sympy import Symbol

ANSWERS = {
    # M1 expects one substitution only; M2 thinks OH directs meta; M3 thinks phenol needs a Lewis acid catalyst like
    # benzene; M4 confuses Kolbe with Reimer-Tiemann; M5 thinks CO2 replaces the OH; M6 thinks dilute HNO3 nitrates
    # three times; M7 thinks zinc reduces the ring; M8 thinks zinc dust leaves phenol unchanged; M9 thinks zinc only
    # makes a salt, zinc phenoxide.
    "br2": {"key": "tribromophenol", "C07-M1": "mono_o_p", "C07-M2": "m_bromophenol", "C07-M3": "no_reaction"},
    "kolbe": {"key": "salicylic_acid", "C07-M2": "m_hydroxybenzoic", "C07-M4": "salicylaldehyde", "C07-M5": "benzoic_acid"},
    "dil": {"key": "o_p_nitrophenol", "C07-M2": "m_nitrophenol", "C07-M3": "no_reaction", "C07-M6": "picric_acid"},
    "conc": {"key": "picric_acid", "C07-M1": "o_p_nitrophenol", "C07-M2": "m_nitrophenol", "C07-M3": "no_reaction"},
    "zinc": {"key": "benzene", "C07-M7": "cyclohexane", "C07-M8": "unchanged", "C07-M9": "zinc_phenoxide"},
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


MODELS = {"key": key, **{f"C07-M{i}": _m(f"C07-M{i}") for i in range(1, 10)}}
