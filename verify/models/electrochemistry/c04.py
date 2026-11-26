"""C04 Electrolytic cells: answer models (the key, and one per misconception). Every answer is named.

params["ask"]:
  "neg_molten_NaCl":  the electrode joined to the battery's negative terminal, molten NaCl, and its reaction;
  "aq_NaCl":          the products at the cathode and the anode, aqueous NaCl;
  "anode_molten_KCl": the anode reaction and the anode's sign, molten KCl;
  "statement":        a true statement about an electrolytic cell;
  "cathode_aq_NaCl":  the cathode product and the cathode's sign, aqueous NaCl.
"""
from sympy import Symbol

NAMED = {
    "neg_molten_NaCl": {"key": "cathode_Na_reduced", "C04-M1": "cathode_Cl_oxidised",
                        "C04-M2": "anode_Cl_oxidised", "C04-M5": "cathode_water_reduced"},
    "aq_NaCl": {"key": "H2_cathode_Cl2_anode", "C04-M1": "Cl2_cathode_H2_anode",
                "C04-M3": "Na_cathode_Cl2_anode", "C04-M4": "H2_cathode_O2_anode"},
    "anode_molten_KCl": {"key": "Cl_oxidised_positive", "C04-M1": "K_reduced_positive",
                         "C04-M2": "Cl_oxidised_negative", "C04-M5": "water_oxidised_positive"},
    "statement": {"key": "electricity_drives_nonspontaneous", "C04-M1": "oxidation_at_cathode",
                  "C04-M2": "cathode_positive", "C04-M6": "spontaneous_makes_electricity"},
    "cathode_aq_NaCl": {"key": "H2_negative_cathode", "C04-M1": "Cl2_negative_cathode",
                        "C04-M2": "H2_positive_cathode", "C04-M3": "Na_negative_cathode"},
}


def key(v, p):
    return Symbol(NAMED[p["ask"]]["key"])


def _m(mid):
    def model(v, p):
        if mid not in NAMED[p["ask"]]:
            raise ValueError("does not apply to this item")
        return Symbol(NAMED[p["ask"]][mid])
    return model


MODELS = {
    "key": key,
    "C04-M1": _m("C04-M1"),  # swaps the processes: oxidation at the cathode, reduction at the anode
    "C04-M2": _m("C04-M2"),  # carries over the galvanic cell's signs: cathode positive, anode negative
    "C04-M3": _m("C04-M3"),  # thinks Na+ is reduced in aqueous NaCl too (ignores water's reduction)
    "C04-M4": _m("C04-M4"),  # goes by standard potentials alone at the anode: O2 from water (ignores overvoltage)
    "C04-M5": _m("C04-M5"),  # treats a melt as if it held water
    "C04-M6": _m("C04-M6"),  # thinks an electrolytic cell turns a spontaneous reaction into electricity
}
