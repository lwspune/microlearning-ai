"""C02 Preparing alcohols: answer models (the key, and one per misconception).

Named answers. params["q"] picks the question. Acid-catalysed hydration adds OH Markovnikov; hydroboration-oxidation
(B2H6, then H2O2/NaOH) adds it anti-Markovnikov; NaBH4/LiAlH4 reduce aldehydes to primary and ketones to secondary
alcohols; RMgX adds R to the carbonyl carbon: HCHO gives primary, other aldehydes secondary, ketones tertiary.
"""
from sympy import Symbol

ANSWERS = {
    # M1 swaps the regiochemistry of acid hydration and hydroboration; M2 thinks a hydride reducer hydrates an alkene;
    # M3 thinks H2 with a catalyst gives an alcohol; M4 thinks hydroboration-oxidation stops at an aldehyde;
    # M5 puts the new OH at the end of the chain; M6 thinks RMgX only reduces, adding no carbon; M7 thinks every
    # aldehyde gives a secondary alcohol with RMgX; M8 thinks NaBH4 removes the oxygen completely.
    "reagent": {"key": "hydroboration", "C02-M1": "acid_hydration", "C02-M2": "lialh4", "C02-M3": "h2_pd"},
    "propene": {"key": "propan_1_ol", "C02-M1": "propan_2_ol", "C02-M3": "propane", "C02-M4": "propanal"},
    "grig_ald": {"key": "propan_2_ol", "C02-M5": "propan_1_ol", "C02-M6": "ethanol", "C02-M7": "methylpropan_2_ol"},
    "nabh4": {"key": "propan_2_ol", "C02-M5": "propan_1_ol", "C02-M8": "propane", "C02-M9": "unchanged"},
    "grig_hcho": {"key": "propan_1_ol", "C02-M7": "propan_2_ol", "C02-M6": "methanol", "C02-M5": "ethanol_ch"},
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


MODELS = {"key": key, **{f"C02-M{i}": _m(f"C02-M{i}") for i in range(1, 10)}}
