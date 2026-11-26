"""C06 The SN2 mechanism: answer models (the key, and one per misconception).

Named answers. params["q"] picks the question; each model gives the answer its rule leads to.
SN2: one step, backside attack through a pentacoordinate transition state, inversion of configuration,
rate = k[RX][Nu-]; reactivity CH3 > 1 deg > 2 deg > 3 deg (crowding); leaving group I > Br > Cl (weaker C-X bond).
  "chain":   1-chlorobutane or 2-chlorobutane, faster by SN2, and why;
  "leaving": 1-iodopropane or 1-chloropropane, faster by SN2, and why;
  "methyl":  bromomethane or 2-bromo-2-methylpropane, faster by SN2, and why;
  "features": which statement describes the SN2 reaction of CH3Br with OH-;
  "stereo":  what optically active 2-bromooctane gives with OH- by SN2.
"""
from sympy import Symbol

ANSWERS = {
    # M1 runs SN2 through a carbocation (SN1 features); M2 tertiary fastest; M3 front-side attack, retention;
    # M4 rate = k[RX] only; M5 C-Cl faster than C-I (bond polarity); M6 one factor alone decides, so "equal".
    "chain": {"key": "primary_less_crowded", "C06-M2": "secondary_faster", "C06-M1": "secondary_carbocation",
              "C06-M6": "equal_same_bond"},
    "leaving": {"key": "iodide_weaker_bond", "C06-M5": "chloride_more_polar", "C06-M6": "equal_both_primary",
                "C06-M1": "iodide_carbocation"},
    "methyl": {"key": "methyl_least_crowded", "C06-M2": "tertiary_faster", "C06-M1": "tertiary_carbocation",
               "C06-M6": "equal_same_bond"},
    "features": {"key": "one_step_both_inversion", "C06-M1": "two_steps_carbocation", "C06-M4": "one_step_rx_only",
                 "C06-M3": "one_step_retention"},
    "stereo": {"key": "inverted", "C06-M3": "retained", "C06-M1": "racemic", "C06-M4": "inverted_rx_only"},
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


MODELS = {"key": key, **{f"C06-M{i}": _m(f"C06-M{i}") for i in range(1, 7)}}
