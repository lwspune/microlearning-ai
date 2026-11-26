"""C09 Actinoids: answer models (the key, and one per misconception).

Every item has a named answer. params["q"] picks the item; ANSWERS gives, for that item, the
answer each model leads to (the key from the book, Section 8.13 and its comparison with the
lanthanoids; each misconception's answer from the wrong rule it states). A model raises
ValueError where its rule says nothing.

  "radio":   the series in which every element is radioactive (Ex Q.1 (ix));
  "th":      the configuration and magnetism of thorium, Z = 90 ([Rn] 5f0 6d2 7s2, two unpaired 6d);
  "compare": a correct comparison of lanthanoids and actinoids;
  "no":      nobelium's +2 state (No2+ = [Rn] 5f14);
  "u":       uranium, Z = 92 ([Rn] 5f3 6d1 7s2: states +3 to +6, four unpaired electrons).
"""
from sympy import Symbol

ANSWERS = {
    "radio": {"key": "actinoids", "C09-M2": "lanthanoids", "C09-M1": "both_series", "C09-M5": "after_uranium"},
    "th": {"key": "th_para_6d", "C09-M6": "th_dia_no_5f", "C09-M3": "th_para_5f2", "C09-M1": "th_para_like_ce"},
    "compare": {"key": "act_more_states", "C09-M2": "lan_more_states", "C09-M1": "both_plus3",
                "C09-M5": "th_u_stable"},
    "no": {"key": "no2_f14", "C09-M4": "no2_f12s2", "C09-M1": "no_only_plus3", "C09-M6": "no2_14_unpaired"},
    "u": {"key": "u_up_to_6", "C09-M1": "u_only_3", "C09-M6": "u_3_unpaired", "C09-M5": "u_not_radioactive"},
}


def _answer(mid, p):
    table = ANSWERS[p["q"]]
    if mid not in table:
        raise ValueError("does not apply")
    return Symbol(table[mid])


def key(v, p):
    return _answer("key", p)


def m1(v, p):
    """Thinks actinoids behave just like the lanthanoids: mostly +3 only, the same configurations pattern."""
    return _answer("C09-M1", p)


def m2(v, p):
    """Swaps lanthanoid and actinoid facts (which series is radioactive, which shows more states)."""
    return _answer("C09-M2", p)


def m3(v, p):
    """Fills 5f before 6d in the aufbau order, so expects thorium to be [Rn] 5f2 7s2."""
    return _answer("C09-M3", p)


def m4(v, p):
    """Removes 5f electrons before the 7s pair when forming an actinoid ion."""
    return _answer("C09-M4", p)


def m5(v, p):
    """Thinks only the man-made actinoids (after uranium) are radioactive."""
    return _answer("C09-M5", p)


def m6(v, p):
    """Judges magnetism by the 5f subshell alone: each 5f electron counted unpaired, no 5f means diamagnetic."""
    return _answer("C09-M6", p)


MODELS = {"key": key, "C09-M1": m1, "C09-M2": m2, "C09-M3": m3, "C09-M4": m4, "C09-M5": m5, "C09-M6": m6}
