"""C09 Conductors, semiconductors and insulators: answer models (the key, and one per misconception).

Band theory: overlapping (or partly filled) bands make a metal, whose conductivity falls on heating; a small gap
makes a semiconductor, whose conductivity rises on heating; a large gap makes an insulator. A group 15 dopant
(5 valence electrons) in Si or Ge gives n-type, a group 13 dopant (3) p-type; the crystal stays neutral and
conducts better than the pure semiconductor. All answers are named; params["ask"] picks the item.
"""
from sympy import Symbol

NAMED = {
    "p_doped_ge": {"key": "p_type_neutral_better", "C09-M1": "n_type_neutral_better",
                   "C09-M2": "p_type_charged_better", "C09-M3": "p_type_neutral_worse"},
    "n_dopant": {"key": "five_neutral_better", "C09-M1": "three_neutral_better",
                 "C09-M2": "five_charged_better", "C09-M3": "five_neutral_worse"},
    "p_in_si": {"key": "electrons_from_p", "C09-M1": "holes_at_p",
                "C09-M2": "electrons_crystal_negative", "C09-M3": "fewer_carriers"},
    "na_si_cool": {"key": "na_rises_si_falls", "C09-M4": "both_rise",
                   "C09-M5": "na_rises_si_stays_low", "C09-M6": "both_fall"},
    "cu_si_heat": {"key": "cu_falls_si_rises", "C09-M4": "both_fall",
                   "C09-M5": "cu_falls_si_stays_low", "C09-M6": "both_rise"},
}


def _model(mid):
    def model(v, p):
        table = NAMED[p["ask"]]
        if mid not in table:
            raise ValueError("does not apply to this item")
        return Symbol(table[mid])
    return model


MODELS = {mid: _model(mid) for mid in ["key"] + [f"C09-M{i}" for i in range(1, 7)]}
# C09-M1 swaps n- and p-type dopants; M2 thinks a doped crystal carries a net charge; M3 thinks an impurity
# lowers conductivity; M4 thinks a semiconductor, like a metal, conducts less when hot; M5 swaps the gaps of
# semiconductors and insulators (a small gap insulates); M6 thinks a metal, like a semiconductor, conducts
# better when hot.
