"""C02 Why oxygen and fluorine differ: answer models (the key, and one per misconception).

Two kinds of item, chosen by params["q"]:
  "bde"   -- order X2 by bond dissociation enthalpy, strongest first (params["set"] lists the molecules);
  "bp"    -- order hydrides by boiling point, lowest first (params["set"]);
  "fluorine", "oxygen", "atomicity" -- named statements; each model gives the statement its rule leads to.
Data are the book's (Solved Ex.7.5, Table 7.8, board #18): bond enthalpies in kJ/mol, boiling points in K.
"""
from sympy import Symbol

MOL = {
    # bde: X-X bond enthalpy; mass: molar mass; radius of the halogen atom (pm)
    "F2": dict(bde=158.8, mass=38, radius=64),
    "Cl2": dict(bde=242.6, mass=71, radius=99),
    "Br2": dict(bde=192.8, mass=160, radius=114),
    "I2": dict(bde=151.1, mass=254, radius=133),
    # bp (K), molar mass, H-E bond enthalpy, H-bonding, EN of E
    "H2O": dict(bp=373, mass=18, he=463, hbond=True, en=3.50),
    "HF": dict(bp=293, mass=20, he=574, hbond=True, en=4.0),
    "H2S": dict(bp=213, mass=34, he=347, hbond=False, en=2.44),
    "HCl": dict(bp=189, mass=36.5, he=432, hbond=False, en=3.2),
}

# Named statements: key and the statement each misconception leads to.
STATEMENTS = {
    "fluorine": {"key": "f_minus1_no_polyhalide", "C02-M6": "f3_minus_like_iodine",
                 "C02-M1": "ff_strongest_bond", "C02-M4": "hf_boils_below_hcl"},
    "oxygen": {"key": "o_states_no_d", "C02-M6": "o_plus6_like_s",
               "C02-M2": "o2_gas_weak_bond", "C02-M5": "h2o_boils_below_hf"},
    "atomicity": {"key": "o_double_bonds", "C02-M1": "o_single_bonds_strong",
                  "C02-M2": "o2_gas_so_small", "C02-M6": "s_d_orbitals"},
}


def order_symbol(names):
    return Symbol("ord_" + "_".join(n.lower() for n in names))


def _set(p):
    return p["set"].split(",")


def _named(p, mid):
    table = STATEMENTS.get(p["q"])
    if table is None or mid not in table:
        raise ValueError("does not apply to this item")
    return Symbol(table[mid])


def key(v, p):
    q = p["q"]
    if q == "bde":
        return order_symbol(sorted(_set(p), key=lambda m: -MOL[m]["bde"]))
    if q == "bp":
        return order_symbol(sorted(_set(p), key=lambda m: MOL[m]["bp"]))
    return _named(p, "key")


def m1(v, p):
    """Smaller atoms always form stronger bonds: X-X strength follows atomic size alone."""
    if p["q"] == "bde":
        return order_symbol(sorted(_set(p), key=lambda m: MOL[m]["radius"]))
    return _named(p, "C02-M1")


def m2(v, p):
    """Mixes the bond inside a molecule with the forces between molecules."""
    q = p["q"]
    if q == "bde":  # bigger, higher-boiling molecule taken to have the stronger bond
        return order_symbol(sorted(_set(p), key=lambda m: -MOL[m]["mass"]))
    if q == "bp":  # boiling point read from the H-E bond enthalpy
        return order_symbol(sorted(_set(p), key=lambda m: MOL[m]["he"]))
    return _named(p, "C02-M2")


def m3(v, p):
    """Over-corrects: F-F is taken as the weakest halogen bond of all."""
    if p["q"] != "bde":
        raise ValueError("bond enthalpy order only")
    rest = [m for m in sorted(_set(p), key=lambda m: -MOL[m]["bde"]) if m != "F2"]
    return order_symbol(rest + ["F2"])


def m4(v, p):
    """Ignores hydrogen bonding: boiling point rises with molar mass."""
    if p["q"] == "bp":
        return order_symbol(sorted(_set(p), key=lambda m: MOL[m]["mass"]))
    return _named(p, "C02-M4")


def m5(v, p):
    """Hydrogen bonding scales with electronegativity alone, so HF boils above water."""
    if p["q"] == "bp":
        plain = sorted([m for m in _set(p) if not MOL[m]["hbond"]], key=lambda m: MOL[m]["bp"])
        hb = sorted([m for m in _set(p) if MOL[m]["hbond"]], key=lambda m: MOL[m]["en"])
        return order_symbol(plain + hb)
    return _named(p, "C02-M5")


def m6(v, p):
    """Gives fluorine and oxygen vacant d orbitals like the heavier members of their groups."""
    return _named(p, "C02-M6")


MODELS = {"key": key, "C02-M1": m1, "C02-M2": m2, "C02-M3": m3, "C02-M4": m4, "C02-M5": m5, "C02-M6": m6}
