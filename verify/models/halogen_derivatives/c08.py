"""C08 Substitution and elimination products: answer models (the key, and one per misconception).

Named answers (products). params["q"] picks the reaction.
Rules: aqueous KOH substitutes (alcohol); alcoholic KOH eliminates HX, giving the more substituted alkene (Saytzeff);
KCN (ionic) attacks through C: nitrile, one carbon more; AgCN (covalent) through N: isocyanide;
KNO2 (ionic) through O: alkyl nitrite; AgNO2 (covalent) through N: nitroalkane.
  "kcn":   bromoethane + alcoholic KCN;       "agcn": bromoethane + AgCN;
  "agno2": bromoethane + AgNO2;               "kno2": bromoethane + KNO2;
  "alc2":  2-bromobutane + alcoholic KOH;     "alc3": 2-bromo-2-methylbutane + alcoholic KOH.
"""
from sympy import Symbol

ANSWERS = {
    # M1 swaps KCN and AgCN; M2 swaps KNO2 and AgNO2; M3 swaps aqueous and alcoholic KOH; M4 reverses Saytzeff;
    # M5 loses count of the carbons; M6 thinks any reagent in alcohol eliminates HX.
    "kcn": {"key": "propanenitrile", "C08-M1": "ethyl_isocyanide", "C08-M5": "ethanenitrile", "C08-M6": "ethene"},
    "agcn": {"key": "ethyl_isocyanide", "C08-M1": "propanenitrile", "C08-M5": "methyl_isocyanide", "C08-M6": "ethene"},
    "agno2": {"key": "nitroethane", "C08-M2": "ethyl_nitrite", "C08-M5": "nitromethane", "C08-M6": "ethene"},
    "kno2": {"key": "ethyl_nitrite", "C08-M2": "nitroethane", "C08-M5": "methyl_nitrite", "C08-M6": "ethene"},
    "alc2": {"key": "but_2_ene", "C08-M4": "but_1_ene", "C08-M3": "butan_2_ol", "C08-M5": "propene"},
    "alc3": {"key": "methylbut_2_ene", "C08-M4": "methylbut_1_ene", "C08-M3": "methylbutan_2_ol",
             "C08-M5": "methylpropene"},
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


MODELS = {"key": key, **{f"C08-M{i}": _m(f"C08-M{i}") for i in range(1, 7)}}
