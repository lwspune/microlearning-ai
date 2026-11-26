"""C06 Metallurgy and iron: answer models (the key, and one per misconception).

Every item has a named answer. params["q"] picks the item; ANSWERS gives, for that item,
the answer each model leads to (the key from the book, Section 8.9; each misconception's
answer from the wrong rule it states). A model raises ValueError where its rule says nothing.

  "flux":   the flux added when haematite (silica gangue) is smelted, and what it does;
  "reduce": the chief reducing agent of Fe2O3 in the zone of reduction, and where/how hot;
  "zone":   the main reaction of the zone of reduction, near the top of the furnace;
  "pig":    what pig iron (molten iron cast from the furnace) is like;
  "steps":  the order of the steps of metallurgy.
"""
from sympy import Symbol

ANSWERS = {
    "flux": {"key": "limestone_flux", "C06-M6": "silica_flux", "C06-M1": "no_flux_heat",
             "C06-M2": "coke_flux"},
    "reduce": {"key": "co_top_900", "C06-M2": "coke_top_900", "C06-M3": "co_top_2000",
               "C06-M1": "heat_alone_2000"},
    "zone": {"key": "eq_co", "C06-M2": "eq_coke", "C06-M1": "eq_heat", "C06-M3": "eq_burn"},
    "pig": {"key": "pig_4c_hard", "C06-M5": "pig_pure_steel_most", "C06-M4": "pig_4c_soft",
            "C06-M1": "pig_pure_heat"},
    "steps": {"key": "conc_roast_red_ref", "C06-M1": "conc_roast_ref", "C06-M6": "roast_red_conc_ref",
              "C06-M5": "conc_roast_red"},
}


def _answer(mid, p):
    table = ANSWERS[p["q"]]
    if mid not in table:
        raise ValueError("does not apply")
    return Symbol(table[mid])


def key(v, p):
    return _answer("key", p)


def m1(v, p):
    """Thinks heat alone does the work: heating the ore gives the metal, melts the gangue away, purifies it."""
    return _answer("C06-M1", p)


def m2(v, p):
    """Thinks solid coke does the furnace's chemistry itself (reduces the ore, clears the gangue);
    doesn't know coke mainly burns to give heat and carbon monoxide, the chief reducing agent."""
    return _answer("C06-M2", p)


def m3(v, p):
    """Thinks the blast furnace is hottest at the top, where the charge goes in."""
    return _answer("C06-M3", p)


def m4(v, p):
    """Thinks more carbon makes iron softer and more malleable."""
    return _answer("C06-M4", p)


def m5(v, p):
    """Thinks the blast furnace gives pure iron, and carbon is added only later to make steel."""
    return _answer("C06-M5", p)


def m6(v, p):
    """Confuses the flux with the gangue: thinks the silica is what is added, and the gangue is
    removed only at the end by the flux."""
    return _answer("C06-M6", p)


MODELS = {"key": key, "C06-M1": m1, "C06-M2": m2, "C06-M3": m3, "C06-M4": m4, "C06-M5": m5, "C06-M6": m6}
