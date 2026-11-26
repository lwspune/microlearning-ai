"""C08 Point defects in crystals: answer models (the key, and one per misconception).

Schottky: equal numbers of cations and anions missing; density falls; the crystal stays neutral.
Frenkel: a cation leaves its site for an interstitial site; density unchanged; the crystal stays neutral.
Aliovalent impurity: each Sr2+ (Ca2+) in place of Na+ (K+) leaves one cation vacancy.
params["ask"]:
  "frenkel_desc":   what a Frenkel defect is (named);
  "frenkel_effect": its effect on density and neutrality (named);
  "vacancies":      cation vacancies per mole of host doped with v["pct"] mol % of a 2+ chloride;
  "schottky_ions":  ions missing per mole of NaCl with v["pct"] mol % Schottky defects (ion pairs).
"""
from sympy import Symbol

from chemistry import BOOK, sig

NA = BOOK["N_A"]

NAMED = {
    "frenkel_desc": {"key": "cation_to_interstitial", "C08-M1": "ion_pair_missing",
                     "C08-M2": "cation_moved_crystal_charged", "C08-M3": "anion_to_interstitial"},
    "frenkel_effect": {"key": "density_same_neutral", "C08-M1": "density_falls_neutral",
                       "C08-M2": "density_same_charged", "C08-M6": "density_rises_neutral"},
}


def _count(v, p, *, per=1, pct_as_fraction=False, zero=False):
    if zero:
        return sig(0)
    frac = v["pct"] if pct_as_fraction else v["pct"] / 100
    return sig(per * frac * NA)


def key(v, p):
    ask = p["ask"]
    if ask in NAMED:
        return Symbol(NAMED[ask]["key"])
    if ask == "vacancies":
        return _count(v, p)  # one vacancy per 2+ ion
    if ask == "schottky_ions":
        return _count(v, p, per=2)  # a cation and an anion per defect
    raise ValueError(f"unknown ask {ask}")


def _named(mid):
    def model(v, p):
        if p["ask"] not in NAMED or mid not in NAMED[p["ask"]]:
            raise ValueError("does not apply to this item")
        return Symbol(NAMED[p["ask"]][mid])
    return model


def m1(v, p):
    """Swaps Schottky and Frenkel: a Schottky defect only moves ions, so none is missing."""
    if p["ask"] == "schottky_ions":
        return _count(v, p, zero=True)
    return _named("C08-M1")(v, p)


def m2(v, p):
    """Ignores charge balance: no vacancy is needed for Sr2+; a Schottky defect loses cations only."""
    if p["ask"] == "vacancies":
        return _count(v, p, zero=True)
    if p["ask"] == "schottky_ions":
        return _count(v, p, per=1)
    return _named("C08-M2")(v, p)


def m4(v, p):
    """Counts both displaced cation sites as vacancies: two per 2+ ion."""
    if p["ask"] != "vacancies":
        raise ValueError("does not apply to this item")
    return _count(v, p, per=2)


def m5(v, p):
    """Treats mol % as a mole fraction (does not divide by 100)."""
    if p["ask"] == "vacancies":
        return _count(v, p, pct_as_fraction=True)
    if p["ask"] == "schottky_ions":
        return _count(v, p, per=2, pct_as_fraction=True)
    raise ValueError("does not apply to this item")


MODELS = {
    "key": key,
    "C08-M1": m1,
    "C08-M2": m2,
    "C08-M3": _named("C08-M3"),  # the larger anion moves
    "C08-M4": m4,
    "C08-M5": m5,
    "C08-M6": _named("C08-M6"),  # an interstitial ion makes the crystal denser
}
