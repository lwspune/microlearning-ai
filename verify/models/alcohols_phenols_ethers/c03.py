"""C03 Preparing phenol: answer models (the key, and one per misconception).

Named answers. Phenol from chlorobenzene (NaOH, 623 K, 300 atm, then acid: Dow), from sodium benzenesulfonate (fused
with NaOH, then acid), from benzenediazonium chloride (warmed with water), and from cumene (air oxidation to the
hydroperoxide, then dilute acid: phenol and acetone).
"""
from sympy import Symbol

ANSWERS = {
    # M1 treats chlorobenzene like an alkyl halide (mild NaOH); M2 thinks cumene's side chain oxidises to benzoic acid;
    # M3 gets the cumene by-product wrong (propan-2-ol); M4 thinks fusion with NaOH removes the whole group, giving
    # benzene; M5 stops at sodium phenoxide, forgetting the acid; M6 thinks warming a diazonium salt in water gives
    # aniline back; M7 thinks cumene oxidation stops at an aldehyde; M8 thinks warming in water swaps N2 for Cl.
    "cumene": {"key": "phenol_acetone", "C03-M2": "benzoic_acid", "C03-M3": "phenol_propanol", "C03-M7": "benzaldehyde"},
    "dow": {"key": "naoh_623_300_acid", "C03-M1": "warm_naoh", "C03-M5": "naoh_623_no_acid", "C03-M4": "fuse_benzene"},
    "sulfonate": {"key": "phenol", "C03-M4": "benzene", "C03-M5": "sodium_phenoxide", "C03-M1": "no_reaction"},
    "diazo": {"key": "phenol_n2", "C03-M6": "aniline", "C03-M8": "chlorobenzene", "C03-M5": "sodium_phenoxide"},
    "byproduct": {"key": "acetone", "C03-M3": "propan_2_ol", "C03-M2": "co2_water", "C03-M7": "propanal"},
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


MODELS = {"key": key, **{f"C03-M{i}": _m(f"C03-M{i}") for i in range(1, 9)}}
