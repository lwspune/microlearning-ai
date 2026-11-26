"""C05 Hydrolysis of salts: answer models (the key, and one per misconception).

Named answers. params["q"] picks the salt question; each model gives the answer its rule leads to.
Rule: the ion from the weak parent reacts with water; the stronger parent decides the nature
(strong acid + weak base: acidic; weak acid + strong base: basic; both strong: neutral;
both weak: compare Ka and Kb).
  "na2co3":  the nature of aqueous Na2CO3, and why;
  "nh4cl":   the nature of aqueous NH4Cl, and why;
  "kcl":     what aqueous KCl does to litmus, and why;
  "ch3coonh4": the nature of aqueous CH3COONH4 (Ka = Kb), and why;
  "nh4cn":   the nature of aqueous NH4CN (Ka of HCN < Kb of NH4OH), and why;
  "cuso4":   why H2SO4 is added when making up a CuSO4 solution.
"""
from sympy import Symbol

ANSWERS = {
    # M1 every salt is neutral; M2 the weaker parent decides; M3 the base alone decides; M4 the strong parent's
    # ion hydrolyses; M5 every weak acid-weak base salt is neutral; M6 a neutral salt solution means no hydrolysis.
    "na2co3": {"key": "basic_carbonate", "C05-M2": "acidic_weak_acid", "C05-M1": "neutral_all_salts",
               "C05-M4": "basic_sodium_ion"},
    "nh4cl": {"key": "acidic_ammonium", "C05-M2": "basic_weak_base", "C05-M1": "neutral_all_salts",
              "C05-M4": "acidic_chloride_ion"},
    "kcl": {"key": "no_change_no_hydrolysis", "C05-M3": "blue_strong_base", "C05-M4": "no_change_both_hydrolyse",
            "C05-M1": "no_change_all_salts"},
    "ch3coonh4": {"key": "neutral_equal_hydrolysis", "C05-M6": "neutral_no_hydrolysis",
                  "C05-M3": "acidic_weak_base", "C05-M1": "neutral_all_salts"},
    "nh4cn": {"key": "basic_kb_larger", "C05-M5": "neutral_weak_weak", "C05-M2": "acidic_weaker_parent",
              "C05-M1": "neutral_all_salts"},
    "cuso4": {"key": "suppress_cu_hydrolysis", "C05-M2": "neutralise_basic", "C05-M1": "dissolve_faster",
              "C05-M4": "stop_sulphate_hydrolysis"},
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


MODELS = {"key": key, **{f"C05-M{i}": _m(f"C05-M{i}") for i in range(1, 7)}}
