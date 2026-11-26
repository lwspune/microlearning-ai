"""C01 Arrhenius, Brønsted and Lewis: answer models (the key, and one per misconception).

Named answers. params["q"] picks the question; each model gives the answer its rule leads to.
  "zn_conj_base":   the conjugate base of [Zn(H2O)4]2+;
  "co3_conj_base":  in CO3^2- + H2O <=> OH- + HCO3-, the conjugate base of H2O;
  "water_role":     in HCl + H2O -> H3O+ + Cl-, what water acts as;
  "cations":        why cations are acids;
  "nh3_alcl3":      in H3N + AlCl3 -> H3N-AlCl3, which is the acid and why.
"""
from sympy import Symbol

ANSWERS = {
    # key: remove one H+ (charge drops by one). M1 adds H+ (conjugate acid); M2 removes an H atom (charge kept);
    # M6 removes a whole H2O ligand.
    "zn_conj_base": {"key": "zn_h2o3_oh_plus", "C01-M1": "zn_h2o4_h_3plus", "C01-M2": "zn_h2o3_oh_2plus",
                     "C01-M6": "zn_h2o3_2plus"},
    # key: H2O loses H+ -> OH-. M1 adds H+ -> H3O+; M2 removes an H atom -> OH (no charge); M3 pairs H2O with the
    # other reactant, CO3^2-.
    "co3_conj_base": {"key": "hydroxide_ion", "C01-M1": "hydronium_ion", "C01-M2": "hydroxyl_neutral",
                      "C01-M3": "carbonate_ion"},
    # key: water accepts H+ from HCl, a Brønsted base. M7 takes any species with H as the acid; M4 (Arrhenius only)
    # says no OH- forms so water is not a base; M5 swaps the Lewis roles (donor called acid).
    "water_role": {"key": "base_accepts_proton", "C01-M7": "acid_has_h", "C01-M4": "neither_no_oh",
                   "C01-M5": "lewis_acid_donates"},
    "cations": {"key": "accept_pair", "C01-M5": "donate_pair", "C01-M4": "only_if_give_h",
                "C01-M7": "only_if_contain_h"},
    "nh3_alcl3": {"key": "alcl3_accepts", "C01-M5": "nh3_donates_acid", "C01-M7": "nh3_has_h",
                  "C01-M4": "neither_no_h"},
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


MODELS = {"key": key, **{f"C01-M{i}": _m(f"C01-M{i}") for i in range(1, 8)}}
