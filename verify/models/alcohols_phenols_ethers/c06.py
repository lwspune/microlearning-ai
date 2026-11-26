"""C06 Reactions of alcohols: answer models (the key, and one per misconception).

Named answers. Dehydration with conc. H2SO4 gives the more substituted alkene (Saytzeff); oxidation needs an H on the
OH carbon: primary -> aldehyde (PCC) -> acid, secondary -> ketone, tertiary resists; HX, PCl5 and SOCl2 give alkyl
halides; propan-1-ol -> propan-2-ol by dehydration then Markovnikov hydration.
"""
from sympy import Symbol

ANSWERS = {
    # M1 reverses the Saytzeff rule; M2 thinks dehydration gives an ether or keeps the OH; M3 thinks tertiary alcohols
    # oxidise most easily; M4 thinks PCC oxidises a primary alcohol all the way to the acid; M5 thinks oxidation
    # burns the alcohol completely; M6 thinks only PCl5 makes chlorides; M7 hydrates anti-Markovnikov; M8 thinks SOCl2
    # dehydrates; M9 thinks secondary alcohols resist oxidation; M10 thinks larger alcohols resist more; M11 thinks
    # reducing the aldehyde from a primary alcohol gives the secondary alcohol.
    "dehyd": {"key": "but_2_ene_major", "C06-M1": "but_1_ene_major", "C06-M2": "ether", "C06-M7": "butan_1_ol"},
    "resist": {"key": "tert_butyl", "C06-M3": "ethanol", "C06-M9": "propan_2_ol", "C06-M10": "butan_2_ol"},
    "pcc": {"key": "ethanal", "C06-M4": "ethanoic_acid", "C06-M5": "co2_water", "C06-M2": "unchanged"},
    "convert": {"key": "dehydrate_then_hydrate", "C06-M7": "dehydrate_then_hydroborate", "C06-M2": "heat_alone",
                "C06-M11": "oxidise_then_reduce"},
    "socl2": {"key": "chloroethane_gases", "C06-M6": "ethanol_unchanged", "C06-M2": "ether", "C06-M8": "ethene"},
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


MODELS = {"key": key, **{f"C06-M{i}": _m(f"C06-M{i}") for i in range(1, 12)}}
