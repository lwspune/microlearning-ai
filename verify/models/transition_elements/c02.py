"""C02 Variable oxidation states: answer models (the key, and one per misconception).

params["ask"]:
  "max":    the highest oxidation state of element Z: all its 4s electrons and its unpaired 3d electrons
            (the rule the book's Table 8.3 follows from Sc to Fe);
  "stable": the oxidation state of element Z whose 3d subshell is half-filled or full (extra stable);
  "pair":   which of two ions of element Z is more stable, and why (named answers, ANSWERS below);
  "pool":   which ion of params["ions"] ("Z:q,Z:q,...") has an extra stable 3d subshell (d0, d5 or d10).
"""
from sympy import Integer, Symbol

from .c01 import ATOM, NAME, ion_cfg, unpaired

# The book's highest and most stable states (Table 8.3, Section 8.4).
HIGHEST = {24: 6, 25: 7, 26: 6}
MOST_STABLE = {24: 3, 25: 2, 26: 3}
LOWEST_COMMON = {24: 2, 25: 2, 26: 2}
SPECIAL = (0, 5, 10)

ANSWERS = {
    # Mn2+ (3d5) against Mn3+ (3d4).
    "mn": {"key": "mn2_half_filled", "C02-M1": "mn2_only_4s", "C02-M3": "mn3_higher_state",
           "C02-M4": "mn2_smaller_charge"},
}


def _ions(p):
    out = []
    for part in p["ions"].split(","):
        Z, q = part.split(":")
        out.append((int(Z), int(q)))
    return out


def _sym(Z, q):
    return Symbol(f"{NAME[Z].lower()}_{q}plus")


def _pick(p, test):
    hits = [(Z, q) for Z, q in _ions(p) if test(Z, q)]
    if len(hits) != 1:
        raise ValueError(f"{len(hits)} ions fit")
    return _sym(*hits[0])


def _first_state(Z, first, top):
    for q in range(1, top + 1):
        d, _ = ion_cfg(Z, q, first)
        if d in (5, 10):
            return Integer(q)
    raise ValueError("no half-filled or full state")


def key(v, p):
    Z = int(p.get("Z", 0))
    a = p["ask"]
    if a == "max":
        d, s = ATOM[Z]
        return Integer(s + unpaired(d))
    if a == "stable":
        return _first_state(Z, "4s", HIGHEST[Z])
    if a == "pair":
        return Symbol(ANSWERS[p["q"]]["key"])
    return _pick(p, lambda Z, q: ion_cfg(Z, q)[0] in SPECIAL)


def _pair(mid, p):
    if mid not in ANSWERS[p["q"]]:
        raise ValueError("does not apply")
    return Symbol(ANSWERS[p["q"]][mid])


def m1(v, p):
    """Thinks only the 4s electrons can be lost: the highest state is the 4s count, and an ion keeps the atom's 3d."""
    a = p["ask"]
    if a == "max":
        return Integer(ATOM[int(p["Z"])][1])
    if a == "pair":
        return _pair("C02-M1", p)
    if a == "pool":
        return _pick(p, lambda Z, q: ATOM[Z][0] in SPECIAL)
    raise ValueError("does not apply")


def m2(v, p):
    """Counts every 3d electron, paired or not, as available: the highest state is all 4s and 3d electrons."""
    if p["ask"] != "max":
        raise ValueError("does not apply")
    d, s = ATOM[int(p["Z"])]
    return Integer(s + d)


def m3(v, p):
    """Takes the highest and the most stable oxidation states to be the same (a higher state is more stable)."""
    a = p["ask"]
    if a == "max":
        return Integer(MOST_STABLE[int(p["Z"])])
    if a == "stable":
        return Integer(HIGHEST[int(p["Z"])])
    if a == "pair":
        return _pair("C02-M3", p)
    top = max(q for _, q in _ions(p))
    return _pick(p, lambda Z, q: q == top)


def m4(v, p):
    """Thinks the ion with the smaller charge is always the more stable."""
    a = p["ask"]
    if a == "stable":
        return Integer(LOWEST_COMMON[int(p["Z"])])
    if a == "pair":
        return _pair("C02-M4", p)
    raise ValueError("does not apply")


def m5(v, p):
    """Removes 3d electrons before 4s when judging an ion's 3d subshell."""
    a = p["ask"]
    if a == "stable":
        Z = int(p["Z"])
        return _first_state(Z, "3d", HIGHEST[Z])
    if a == "pool":
        return _pick(p, lambda Z, q: ion_cfg(Z, q, "3d")[0] in SPECIAL)
    raise ValueError("does not apply")


def m6(v, p):
    """Forgets the 4s electrons: only the 3d electrons count towards the highest state."""
    if p["ask"] != "max":
        raise ValueError("does not apply")
    return Integer(ATOM[int(p["Z"])][0])


MODELS = {"key": key, "C02-M1": m1, "C02-M2": m2, "C02-M3": m3, "C02-M4": m4, "C02-M5": m5, "C02-M6": m6}
