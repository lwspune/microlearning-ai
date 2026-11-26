"""C07 The SN1 mechanism: answer models (the key, and one per misconception).

Named answers. params["q"] picks the question. SN1: slow ionisation to a planar carbocation, then fast attack from
either face; rate = k[RX]; racemisation; fastest for tertiary, allylic and benzylic halides (stable carbocations);
vinylic and aryl halides do not react by SN1.
  "tert":     2-bromo-2-methylpropane or 1-bromopropane, faster by SN1, and why;
  "allyl":    3-chloropropene or 1-chloropropane, faster by SN1, and why;
  "stereo":   what optically active 3-bromo-3-methylhexane gives on SN1 hydrolysis;
  "features": which statement about the SN1 mechanism is correct;
  "vinyl":    can chloroethene react by SN1, and why.
"""
from sympy import Symbol

ANSWERS = {
    # M1 SN2 crowding logic: less substituted is faster, tertiary barely reacts; M2 the nucleophile controls the
    # SN1 rate; M3 inversion only; M4 ignores resonance in allylic/benzylic carbocations; M5 vinylic and aryl
    # halides ionise easily; M6 judges by the C-X bond alone; M7 front-side substitution, configuration retained.
    "tert": {"key": "tertiary_stable_cation", "C07-M1": "primary_less_crowded", "C07-M2": "primary_nu_reaches",
             "C07-M6": "equal_same_bond"},
    "allyl": {"key": "allyl_resonance_cation", "C07-M4": "equal_both_primary", "C07-M2": "allyl_pi_attracts_nu",
              "C07-M1": "propyl_less_crowded"},
    "stereo": {"key": "racemic", "C07-M3": "inverted_only", "C07-M7": "retained_only", "C07-M1": "no_reaction"},
    "features": {"key": "two_steps_rx_racemic", "C07-M2": "two_steps_rx_nu", "C07-M3": "two_steps_inversion",
                 "C07-M1": "fastest_methyl_primary"},
    "vinyl": {"key": "no_partial_double_bond", "C07-M5": "yes_pi_stabilises", "C07-M1": "yes_uncrowded",
              "C07-M6": "yes_has_c_cl"},
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


MODELS = {"key": key, **{f"C07-M{i}": _m(f"C07-M{i}") for i in range(1, 8)}}
