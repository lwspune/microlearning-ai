"""C07 Oxoacids of sulfur and chlorine: answer models (the key, and one per misconception).

params["ask"]:
  "ox_pair":    oxidation state of S, per atom, in the two acids params["acids"] ("H2S2O8,H2S2O4"). Named answer.
  "cl_order":   the four chlorine oxoacids, named, in increasing acid strength. Named answer.
  "stronger":   the stronger acid in each pair (hypochlorous / perchloric; sulfurous / sulfuric). Named answer.
"""
from sympy import Symbol

# formula: (H atoms, S atoms, O atoms, peroxide O atoms, bridging O atoms, name ending)
_S_ACIDS = {
    "H2SO3": (2, 1, 3, 0, 0, "ous"),   # sulfurous acid
    "H2SO4": (2, 1, 4, 0, 0, "ic"),    # sulfuric acid
    "H2SO5": (2, 1, 5, 2, 0, "ic"),    # peroxymonosulfuric acid (Caro's acid)
    "H2S2O4": (2, 2, 4, 0, 0, "ous"),  # dithionous acid
    "H2S2O6": (2, 2, 6, 0, 0, "ic"),   # dithionic acid
    "H2S2O7": (2, 2, 7, 0, 1, "ic"),   # pyrosulfuric (disulfuric) acid
    "H2S2O8": (2, 2, 8, 2, 0, "ic"),   # peroxydisulfuric acid (Marshall's acid)
}

# oxidation state of Cl in each named chlorine oxoacid
_CL = {"hypochlorous": 1, "chlorous": 3, "chloric": 5, "perchloric": 7}
_SWAP_PREFIX = {"hypochlorous": "perchloric", "perchloric": "hypochlorous"}
_S_NAMED = {"sulfurous": 4, "sulfuric": 6}


def _total(h, o, per):
    """Sum of the S oxidation states: H is +1, a peroxide O is -1, every other O is -2."""
    return 2 * (o - per) + per - h


def _ox(formula, rule):
    h, n, o, per, bridge, ending = _S_ACIDS[formula]
    if rule == "ending":            # M6: state read off the name ending
        return 6 if ending == "ic" else 4
    if rule == "swap_links":        # M1: peroxide O taken as ordinary O; a pyro bridge taken as a peroxide
        per = 0 if per else (2 if bridge else 0)
    total = _total(h, o, per)
    if rule == "total":             # M2: total for all the S atoms
        return total
    if total % n:
        raise ValueError("non-integer state")
    return total // n


def _sign(x):
    return f"p{x}" if x >= 0 else f"m{-x}"


def _pair(p, rule):
    acids = p["acids"].split(",")
    return Symbol("s_" + "_".join(_sign(_ox(a, rule)) for a in acids))


def _cl_state(name, rule):
    if rule == "prefix_swap":
        name = _SWAP_PREFIX.get(name, name)
    return _CL[name]


def _answer(p, rule):
    ask = p["ask"]
    if ask == "ox_pair":
        if rule not in ("key", "swap_links", "total", "ending"):
            raise ValueError("does not apply")
        return _pair(p, rule)
    if ask == "cl_order":
        if rule == "equal":
            return Symbol("all_equal")
        if rule not in ("key", "prefix_swap", "reverse"):
            raise ValueError("does not apply")
        names = sorted(_CL, key=lambda n: _cl_state(n, "prefix_swap" if rule == "prefix_swap" else "key"))
        if rule == "reverse":
            names = names[::-1]
        return Symbol("_".join(names))
    if ask == "stronger":
        if rule == "equal":
            return Symbol("equal_both")
        if rule not in ("key", "prefix_swap", "reverse"):
            raise ValueError("does not apply")
        pick = min if rule == "reverse" else max
        cl = pick(["hypochlorous", "perchloric"], key=lambda n: _cl_state(n, rule))
        s = pick(_S_NAMED, key=lambda n: _S_NAMED[n])
        return Symbol(f"{cl}_{s}")
    raise ValueError(ask)


def key(v, p):
    return _answer(p, "key")


def m1(v, p):  # mixes up a peroxide link and a single bridging oxygen
    return _answer(p, "swap_links")


def m2(v, p):  # total for all the central atoms, not per atom
    return _answer(p, "total")


def m3(v, p):  # hypo- read as the most oxygen, per- as the least
    return _answer(p, "prefix_swap")


def m4(v, p):  # acid strength falls as oxygens are added
    return _answer(p, "reverse")


def m5(v, p):  # one ionisable H each, so equally strong
    return _answer(p, "equal")


def m6(v, p):  # state read off the ending: -ic is +6, -ous is +4
    return _answer(p, "ending")


MODELS = {"key": key, "C07-M1": m1, "C07-M2": m2, "C07-M3": m3, "C07-M4": m4, "C07-M5": m5, "C07-M6": m6}
