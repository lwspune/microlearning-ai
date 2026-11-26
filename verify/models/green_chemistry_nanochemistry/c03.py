"""C03 Atom economy: % atom economy = mass of desired product / total mass of reactants x 100. Additions put every
reactant atom into the product (100 %); substitutions and eliminations release by-products and score less.
Item values are computed below from molar masses (C 12, H 1, O 16, Br 80, K 39) and rounded to one decimal, then
looked up by name, so a wrong option text would fail the check.
M1 confuses atom economy with percentage yield; M2 measures the waste share; M3 inverts the ratio; M4 thinks two
reactants halve it; M5 thinks additions waste the second reactant; M6 thinks every complete reaction scores 100 %;
M7 gives the waste share; M8 thinks substitutions score highest; M9 thinks eliminations score highest; M10 thinks mass
conservation makes all reactions equal; M11 leaves out the second reactant."""
from sympy import Symbol

M = {"C2H5OH": 46, "HBr": 81, "C2H5Br": 109, "KOH": 56, "C2H4": 28}


def pct(x):
    return round(x * 100, 1)


SUB = pct(M["C2H5Br"] / (M["C2H5OH"] + M["HBr"]))          # 85.8
ELIM = pct(M["C2H4"] / (M["C2H5Br"] + M["KOH"]))           # 17.0
assert (SUB, ELIM) == (85.8, 17.0)


def name(x):
    return Symbol("pct_" + str(x).replace(".", "_"))


ANSWERS = {
    "formula": {"key": "product_over_reactants", "C03-M1": "pct_yield", "C03-M2": "byproducts_over_reactants",
                "C03-M3": "reactants_over_product"},
    "addition": {"key": "pct_100", "C03-M4": "pct_50", "C03-M5": "pct_less_than_100", "C03-M7": "pct_0"},
    "substitution": {"key": name(SUB), "C03-M6": "pct_100", "C03-M7": name(round(100 - SUB, 1)),
                     "C03-M3": name(pct((M["C2H5OH"] + M["HBr"]) / M["C2H5Br"]))},
    "best": {"key": "addition_rxn", "C03-M8": "substitution_rxn", "C03-M9": "elimination_rxn", "C03-M10": "all_equal"},
    "elimination": {"key": name(ELIM), "C03-M6": "pct_100", "C03-M7": name(round(100 - ELIM, 1)),
                    "C03-M11": name(pct(M["C2H4"] / M["C2H5Br"]))},
}


def key(v, p):
    return Symbol(str(ANSWERS[p["q"]]["key"]))


def _m(mid):
    def model(v, p):
        row = ANSWERS[p["q"]]
        if mid not in row:
            raise ValueError("does not apply to this item")
        return Symbol(str(row[mid]))
    return model


MODELS = {"key": key, **{f"C03-M{i}": _m(f"C03-M{i}") for i in range(1, 12)}}
