"""C09 Reactivity of haloarenes: answer models (the key, and one per misconception).

Named answers. params["q"] picks the question.
Aryl halides resist nucleophilic substitution (C-X partial double bond by resonance, sp2 carbon); NO2 groups ortho or
para to X make it easier (p-nitrochlorobenzene: aqueous NaOH at 443 K); the halogen deactivates the ring slightly but
directs electrophiles ortho and para; benzene rings substitute rather than add.
  "why":     why haloarenes are less reactive than haloalkanes towards nucleophiles;
  "nitro":   conditions for p-nitrochlorobenzene -> p-nitrophenol;
  "pnitro":  why 1-chloro-4-nitrobenzene reacts with NaOH more easily than chlorobenzene;
  "chlor":   chlorobenzene + Cl2 with anhydrous FeCl3;
  "nitrate": chlorobenzene + conc. HNO3 and conc. H2SO4.
"""
from sympy import Symbol

ANSWERS = {
    # M1 aryl halides substitute as easily as alkyl halides; M2 NO2 hinders nucleophilic substitution; M3 halogen
    # directs meta; M4 aryl halides never substitute; M5 the ring adds Cl2 like an alkene; M6 Cl deactivates so much
    # that no electrophilic substitution occurs; M7 the electrophile replaces the halogen; M8 NO2 helps from any
    # position, meta included.
    "why": {"key": "partial_double_bond", "C09-M1": "not_less_reactive", "C09-M4": "never_react",
            "C09-M6": "halogen_deactivates"},
    "nitro": {"key": "naoh_443k", "C09-M1": "naoh_room_temp", "C09-M2": "harsher_than_chlorobenzene",
              "C09-M4": "impossible"},
    "pnitro": {"key": "para_no2_withdraws", "C09-M2": "not_easier", "C09-M8": "any_position",
               "C09-M1": "alkyl_like"},
    "chlor": {"key": "ortho_para_dichloro", "C09-M3": "meta_dichloro", "C09-M5": "addition_hexachloro",
              "C09-M6": "no_reaction"},
    "nitrate": {"key": "ortho_para_chloronitro", "C09-M3": "meta_chloronitro", "C09-M6": "no_reaction",
                "C09-M7": "nitrobenzene"},
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


MODELS = {"key": key, **{f"C09-M{i}": _m(f"C09-M{i}") for i in range(1, 9)}}
