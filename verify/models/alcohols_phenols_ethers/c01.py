"""C01 Classes and names: answer models (the key, and one per misconception).

Named answers. params["q"] picks the question. An alcohol is primary, secondary or tertiary by the number of carbons
bonded to the carbon carrying OH; mono-, di-, trihydric by the number of OH groups; a phenol has OH on a benzene ring
itself. IUPAC: longest chain holding the OH carbons, lowest locants for OH, suffix -ol (-diol); an ether is named as
alkoxyalkane, the smaller group being the alkoxy prefix.
"""
from sympy import Symbol

ANSWERS = {
    # M1 takes the degree from the number of OH groups; M2 counts every carbon in the molecule; M3 numbers from the
    # wrong end; M4 takes the larger group as the alkoxy prefix; M5 calls OH on a side chain of a ring a phenol;
    # M6 breaks the suffix rule (drops "di", or uses a hydroxy prefix); M7 gives the common name; M8 takes the
    # hydricity from the carbons on the OH carbon; M9 calls an aryl ether a phenol; M10 thinks any six-membered ring
    # is a benzene ring.
    "iso": {"key": "secondary", "C01-M1": "primary_one_oh", "C01-M2": "tertiary_three_c", "C01-M8": "dihydric_two_c"},
    "phenol": {"key": "cresol", "C01-M5": "benzyl_alcohol", "C01-M10": "cyclohexanol", "C01-M9": "anisole"},
    "diol": {"key": "methylbutane_13_diol", "C01-M3": "methylbutane_24_diol_3", "C01-M6": "methylbutan_13_ol",
             "C01-M2": "pentane_13_diol"},
    "ether": {"key": "methoxypropane_1", "C01-M4": "propoxymethane", "C01-M3": "methoxypropane_3",
              "C01-M7": "methyl_propyl_ether"},
    "butanol": {"key": "butan_2_ol", "C01-M3": "butan_3_ol", "C01-M6": "hydroxybutane_2", "C01-M7": "sec_butyl_alcohol"},
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


MODELS = {"key": key, **{f"C01-M{i}": _m(f"C01-M{i}") for i in range(1, 11)}}
