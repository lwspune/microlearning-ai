"""C03 Preparing alkyl and aryl halides: answer models (the key, and one per misconception).

Two kinds of item (params["kind"]):
  "hx"     an alkene with HX (params["hx"]: HCl, HBr or HI) and params["peroxide"] ("yes"/"no").
           The answer names where the halogen goes, as a Symbol:
             markovnikov  X on the C=C carbon with fewer H (H to the carbon with more H),
             anti         X on the C=C carbon with more H (the peroxide effect),
             allylic      an H on the carbon next to the C=C replaced by X, the C=C kept,
             halohydrin   X by Markovnikov's rule and an OH from the peroxide on the other carbon.
           The item's text names the actual product for each.
  "method" which named method makes an alkyl halide (params["want"]: "fluoride" or "iodide"):
             swarts, finkelstein, free_radical, sandmeyer.
"""
from sympy import Symbol


def _hx(p):
    if p["kind"] != "hx":
        raise ValueError("not an HX addition")
    return p["hx"], p["peroxide"] == "yes"


def key(v, p):
    if p["kind"] == "hx":
        hx, perox = _hx(p)
        # Only HBr shows the peroxide (Kharasch) effect; HCl and HI add by Markovnikov's rule.
        return Symbol("anti" if perox and hx == "HBr" else "markovnikov")
    return Symbol({"fluoride": "swarts", "iodide": "finkelstein"}[p["want"]])


def m1(v, p):
    """Thinks the peroxide effect works for every HX, so HCl and HI also add anti-Markovnikov with peroxide."""
    hx, perox = _hx(p)
    if not perox or hx == "HBr":
        raise ValueError("same as the key")
    return Symbol("anti")


def m2(v, p):
    """Ignores the peroxide: adds HBr by Markovnikov's rule even when peroxide is present."""
    hx, perox = _hx(p)
    if not (perox and hx == "HBr"):
        raise ValueError("same as the key")
    return Symbol("markovnikov")


def m3(v, p):
    """Treats every halogenation as free-radical substitution of an H, as for alkanes in light:
    an alkene loses an H next to its C=C, and alkyl halides are made by direct halogenation."""
    if p["kind"] == "hx":
        return Symbol("allylic")
    return Symbol("free_radical")


def m4(v, p):
    """Takes the peroxide as a reagent that adds an OH group, so X adds by Markovnikov's rule and OH
    goes to the other C=C carbon."""
    hx, perox = _hx(p)
    if not perox:
        raise ValueError("no peroxide")
    return Symbol("halohydrin")


def m5(v, p):
    """Mixes up the Finkelstein reaction (NaI in dry acetone) and the Swarts reaction (a metallic fluoride)."""
    if p["kind"] != "method":
        raise ValueError("not a method item")
    return Symbol({"fluoride": "finkelstein", "iodide": "swarts"}[p["want"]])


def m6(v, p):
    """Uses an aryl-halide route (a diazonium salt with a copper(I) halide: Sandmeyer) for an alkyl halide."""
    if p["kind"] != "method":
        raise ValueError("not a method item")
    return Symbol("sandmeyer")


MODELS = {"key": key, "C03-M1": m1, "C03-M2": m2, "C03-M3": m3, "C03-M4": m4, "C03-M5": m5, "C03-M6": m6}
