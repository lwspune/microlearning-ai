"""C05 Allotropes of sulfur: answer models (the key, and one per misconception).

Named answers. params["q"] picks the question; each model gives the statement its rule leads to.
  "molecules":  what rhombic and monoclinic sulfur are built of (Ex Q.4 (i));
  "stable":     which form is stable at room temperature, and what happens at 369 K (Ex Q.4 (i));
  "magnetic":   which form of sulfur is paramagnetic (Solved Ex.7.7);
  "data":       how rhombic compares with monoclinic in density and melting point (Ex Q.4 (i));
  "standing":   what monoclinic sulfur kept at room temperature turns into (Ex Q.4 (i)).

Book data: rhombic (alpha) pale yellow, m.p. 385.8 K, density 2.069 g/cm3, stable below 369 K;
monoclinic (beta) needles, m.p. 393 K, density 1.989 g/cm3, stable above 369 K; both S8 rings.

Misconception rules:
  M1 a new crystal form means a new molecule: rhombic is S8 but monoclinic is S6;
  M2 the higher-melting form (monoclinic) is the stable one at room temperature (369 K change reversed);
  M3 an even number of electrons means all are paired, so no form of sulfur is paramagnetic;
  M4 allotropes are the same molecule, so they share every physical property (no change between them);
  M5 sulfur copies the element above it: its molecules are S2, like O2, in the solid too;
  M6 paramagnetism is one of oxygen's anomalies, so no sulfur species shows it.
"""
from sympy import Symbol

ANSWERS = {
    "molecules": {"key": "s8_both_packing", "C05-M1": "s8_and_s6", "C05-M5": "s2_both",
                  "C05-M4": "identical_all"},
    "stable": {"key": "rhombic_to_monoclinic", "C05-M2": "monoclinic_to_rhombic", "C05-M1": "rhombic_s8_to_s6",
               "C05-M4": "both_no_change"},
    "magnetic": {"key": "s2_vapour", "C05-M3": "none_even", "C05-M6": "none_oxygen_only",
                 "C05-M5": "solids_s2"},
    "data": {"key": "rhombic_denser_lower_mp", "C05-M2": "rhombic_higher_mp", "C05-M4": "same_data",
             "C05-M1": "rhombic_denser_heavier_s8"},
    "standing": {"key": "to_rhombic_s8", "C05-M2": "stays_stable", "C05-M1": "s6_join_s8",
                 "C05-M4": "nothing_same"},
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
