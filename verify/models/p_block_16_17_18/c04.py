"""C04 Dioxygen and ozone: answer models (the key, and one per misconception).

Named answers. params["q"] picks the question; each model gives the statement its rule leads to.
  "o2_magnetism": the magnetic behaviour of O2 and its reason (board 2023, magnetic property of oxygen);
  "o3_structure": shape, O-O bond lengths and magnetism of O3 (Ex Q.3 (xix));
  "o2_vs_o3":     magnetism of O2 against the shape and magnetism of O3 (Solved Ex.7.8);
  "dry_bleach":   why ozone bleaches without moisture (board 2023, dry bleach);
  "o3_explosive": why concentrated ozone is explosive (Solved Ex.7.9).

Misconception rules:
  M1 an even number of electrons means all are paired, so the molecule is diamagnetic;
  M2 Hund's rule ignored: the two pi* electrons of O2 pair up in one orbital;
  M3 each O atom keeps its own two unpaired 2p electrons in the molecule (O2 four unpaired, O3 a radical);
  M4 resonance ignored: O3 has one O=O and one longer, weaker O-O single bond;
  M5 O3 is linear like CO2 (the lone pair on the central O ignored);
  M6 ozone hands over all three of its O atoms, setting no O2 free (O3 -> O2 + [O] missed);
  M7 every bleach works through water, as chlorine does.
"""
from sympy import Symbol

ANSWERS = {
    "o2_magnetism": {"key": "para_two_pi_star", "C04-M1": "dia_even_count", "C04-M2": "dia_pi_star_paired",
                     "C04-M3": "para_four_from_atoms"},
    "o3_structure": {"key": "bent_equal_dia", "C04-M4": "bent_unequal_dia", "C04-M5": "linear_equal_dia",
                     "C04-M3": "bent_equal_para"},
    "o2_vs_o3": {"key": "o2_para_o3_bent_dia", "C04-M1": "both_dia", "C04-M3": "both_para",
                 "C04-M5": "o2_para_o3_linear"},
    "dry_bleach": {"key": "nascent_o_no_water", "C04-M6": "all_three_o", "C04-M3": "unpaired_attack",
                   "C04-M7": "needs_moisture"},
    "o3_explosive": {"key": "dh_neg_ds_pos", "C04-M6": "three_free_atoms", "C04-M4": "single_bond_snaps",
                     "C04-M3": "radical_chain"},
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


MODELS = {"key": key, **{f"C04-M{i}": _m(f"C04-M{i}") for i in range(1, 8)}}
