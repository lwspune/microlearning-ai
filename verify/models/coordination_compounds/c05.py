"""C05 Naming coordination compounds: answer models (the key, and one per misconception).

Complexes use the C01 params: lig (in formula order), out or charge, and metal. Every item asks for the
IUPAC name, as the book writes it (ammine, chloro, cyano, nitro; bis(ethylenediamine)). Models return a
named answer, the name with its brackets and spaces as underscores; name(p, model_id) gives the text.
"""
import re

from sympy import Symbol

from .c01 import ION, LIG, counters, ligands, ox_state, sphere_charge

METAL = {
    "Co": ("cobalt", "cobaltate"), "Pt": ("platinum", "platinate"), "Fe": ("iron", "ferrate"),
    "Cr": ("chromium", "chromate"), "Ni": ("nickel", "nickelate"), "Cu": ("copper", "cuprate"),
    "Zn": ("zinc", "zincate"), "Au": ("gold", "aurate"), "Ag": ("silver", "argentate"),
}
SIMPLE = {1: "", 2: "di", 3: "tri", 4: "tetra", 5: "penta", 6: "hexa"}
COMPLEX = {2: "bis", 3: "tris", 4: "tetrakis"}
ROMAN = {0: "0", 1: "I", 2: "II", 3: "III", 4: "IV", 5: "V", 6: "VI"}


def _term(k, n):
    lig = LIG[k]
    if lig.get("paren") and n > 1:
        return f"{COMPLEX[n]}({lig['name']})"
    return SIMPLE[n] + lig["name"]


def build(p, order="alpha", ate="anionic", ox=None, counter_prefix=False):
    """The name of the compound. order: alpha (by ligand name), prefixed (by name with its prefix) or formula;
    ate: when the metal takes -ate (anionic, never, always); ox: the oxidation state to print."""
    lig = ligands(p)
    if order == "alpha":
        lig = sorted(lig, key=lambda t: LIG[t[0]]["name"])
    elif order == "prefixed":
        lig = sorted(lig, key=lambda t: _term(*t).replace("(", ""))
    q = sphere_charge(p)
    use_ate = {"anionic": q < 0, "never": False, "always": True}[ate]
    metal = METAL[p["metal"]][1 if use_ate else 0]
    core = "".join(_term(k, n) for k, n in lig) + f"{metal}({ROMAN[ox_state(p) if ox is None else ox]})"
    outs = counters(p)
    if not outs:
        return core + (" ion" if q else "")
    (k, n), = outs
    ion = (SIMPLE[n] if counter_prefix else "") + ION[k][1]
    return f"{ion} {core}" if q < 0 else f"{core} {ion}"


def _sym(name):
    return Symbol(re.sub(r"_+", "_", re.sub(r"[() ]", "_", name)).strip("_"))


def name(p, mid):
    """The display name a model gives (for option text)."""
    return NAMERS[mid](p)


def _key(p):
    return build(p)


def _m1(p):
    return build(p, order="formula")


def _m2(p):
    return build(p, order="prefixed")


def _m3(p):
    if sphere_charge(p) >= 0:
        raise ValueError("not an anionic complex")
    return build(p, ate="never")


def _m4(p):
    return build(p, ox=abs(sphere_charge(p)))


def _m5(p):
    if sphere_charge(p) < 0:
        raise ValueError("an anionic complex")
    return build(p, ate="always")


def _m6(p):
    if not any(n > 1 for _, n in counters(p)):
        raise ValueError("no counter ion with a count above 1")
    return build(p, counter_prefix=True)


NAMERS = {"key": _key, "C05-M1": _m1, "C05-M2": _m2, "C05-M3": _m3, "C05-M4": _m4, "C05-M5": _m5, "C05-M6": _m6}

_DOC = {
    "C05-M1": "Lists the ligands in the order the formula writes them, not alphabetically.",
    "C05-M2": "Alphabetises the ligands with their number prefixes (di-, tetra-) included.",
    "C05-M3": "Keeps the plain metal name in an anionic complex (no -ate ending).",
    "C05-M4": "Writes the charge on the coordination sphere as the metal's oxidation state.",
    "C05-M5": "Gives the metal an -ate ending in a cationic or neutral complex.",
    "C05-M6": "Puts a number prefix on the counter ion (tetrapotassium, dichloride).",
}


def _model(mid):
    def f(v, p):
        return _sym(NAMERS[mid](p))

    f.__doc__ = _DOC.get(mid, "The IUPAC name.")
    return f


MODELS = {mid: _model(mid) for mid in NAMERS}
