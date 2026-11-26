"""C08 Lanthanoids: answer models (the key, and one per misconception).

params["ask"]:
  "unpaired": unpaired 4f electrons in the ion params["Z"]^q+ (q = params["q"]);
  otherwise:  a named answer for item params["ask"] from ANSWERS (statements about the lanthanoids,
              Eu2+ and Ce4+); a model raises ValueError where its rule says nothing.
"""
from sympy import Integer, Symbol

# Ground-state configurations beyond [Xe] (Table 8.11): Z -> (4f, 5d); every one ends 6s2.
ATOM = {57: (0, 1), 58: (1, 1), 59: (3, 0), 60: (4, 0), 61: (5, 0), 62: (6, 0), 63: (7, 0), 64: (7, 1),
        65: (9, 0), 66: (10, 0), 67: (11, 0), 68: (12, 0), 69: (13, 0), 70: (14, 0), 71: (14, 1)}

ANSWERS = {
    "facts": {"key": "zr_hf_alike", "C08-M3": "radii_grow", "C08-M5": "ce4_loses", "C08-M6": "only_plus3"},
    "eu2": {"key": "eu2_f7_gives", "C08-M5": "eu2_f7_takes", "C08-M1": "eu2_f5s2_gives", "C08-M4": "eu2_f7s2_gives"},
    "ce4": {"key": "ce4_f0_gains", "C08-M5": "ce4_f0_loses", "C08-M6": "ce4_none", "C08-M4": "ce4_atom_gains"},
}


def unpaired(f):
    return f if f <= 7 else 14 - f


def ion_f(Z, q, first="6s"):
    """4f electrons left in Ln^q+: 6s first, then 5d, then 4f (or, wrongly, 4f before 6s)."""
    f, d = ATOM[Z]
    if first == "4f":
        return max(f - q, 0)
    lost = q - 2 - d
    return f - max(lost, 0)


def _named(mid, p):
    table = ANSWERS[p["ask"]]
    if mid not in table:
        raise ValueError("does not apply")
    return Symbol(table[mid])


def key(v, p):
    if p["ask"] == "unpaired":
        return Integer(unpaired(ion_f(int(p["Z"]), int(p["q"]))))
    return _named("key", p)


def m1(v, p):
    """Removes 4f electrons before the 6s pair when forming the ion."""
    if p["ask"] == "unpaired":
        return Integer(unpaired(ion_f(int(p["Z"]), int(p["q"]), "4f")))
    return _named("C08-M1", p)


def m2(v, p):
    """Counts every 4f electron as unpaired, even beyond f7."""
    if p["ask"] != "unpaired":
        raise ValueError("does not apply")
    return Integer(ion_f(int(p["Z"]), int(p["q"])))


def m3(v, p):
    """Thinks atomic and ionic radii grow from La to Lu as electrons are added."""
    return _named("C08-M3", p)


def m4(v, p):
    """Writes the ion with the neutral atom's configuration (forgets to remove the electrons)."""
    if p["ask"] == "unpaired":
        return Integer(unpaired(ATOM[int(p["Z"])][0]))
    return _named("C08-M4", p)


def m5(v, p):
    """Reverses the electron direction: thinks an oxidising agent loses electrons and a reducing agent gains them."""
    return _named("C08-M5", p)


def m6(v, p):
    """Thinks lanthanoids show only the +3 state, missing the +2 and +4 states that reach f0, f7 or f14."""
    return _named("C08-M6", p)


MODELS = {"key": key, "C08-M1": m1, "C08-M2": m2, "C08-M3": m3, "C08-M4": m4, "C08-M5": m5, "C08-M6": m6}
