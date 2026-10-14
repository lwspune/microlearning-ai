"""C05 De Morgan's laws: answer models (the key, and one per misconception).

Inputs (sets, as `{1, 2}`): U, A, B, and C for the distributive laws.
params["ask"], the set asked for:
  cu = (A ∪ B)'   ci = (A ∩ B)'   icomp = A' ∩ B'   iu = A ∩ (B ∪ C)   ui = A ∪ (B ∩ C)
  iux = (A ∩ B) ∪ (A ∩ C) and uix = (A ∪ B) ∩ (A ∪ C): the expanded forms, whose shortcut is the
  bracket form; a misconception rewrites them into its own (wrong) bracket form, as for iu and ui.
"Which expression equals ...?" items use a witness: one element in each Venn cell, so two
expressions give the same set exactly when they are the same region.
"""
from sympy import FiniteSet


def _sets(v):
    return {k: FiniteSet(*v[k]) for k in v}


def _ask(p):
    return {"iux": "iu", "uix": "ui"}.get(p["ask"], p["ask"])


def key(v, p):
    """Element by element, from the definitions of ∪, ∩ and complement (no law used)."""
    s = _sets(v)
    U, A, B, C = s["U"], s["A"], s["B"], s.get("C", FiniteSet())
    test = {
        "cu": lambda x: not (x in A or x in B),
        "ci": lambda x: not (x in A and x in B),
        "icomp": lambda x: (x not in A) and (x not in B),
        "iu": lambda x: x in A and (x in B or x in C),
        "ui": lambda x: x in A or (x in B and x in C),
    }[_ask(p)]
    return FiniteSet(*[x for x in U if test(x)])


def m1(v, p):
    """Mixes up which law swaps ∪ and ∩: keeps the operation when a complement goes inside,
    swaps it when distributing."""
    s = _sets(v)
    U, A, B = s["U"], s["A"], s["B"]
    ask = _ask(p)
    if ask == "cu":
        return (U - A) | (U - B)
    if ask == "ci":
        return (U - A) & (U - B)
    if ask == "icomp":  # pulls the complement out without swapping: (A ∩ B)'
        return U - (A & B)
    C = s["C"]
    if ask == "iu":  # uses the other distributive law: (A ∪ B) ∩ (A ∪ C)
        return (A | B) & (A | C)
    if ask == "ui":  # (A ∩ B) ∪ (A ∩ C)
        return (A & B) | (A & C)
    raise ValueError("no such ask")


def m2(v, p):
    """Thinks the law is only 'swap ∪ and ∩': swaps the operation and drops the complement."""
    s = _sets(v)
    A, B = s["A"], s["B"]
    ask = _ask(p)
    if ask == "cu":
        return A & B
    if ask in ("ci", "icomp"):  # (A ∩ B)' -> A ∪ B;  A' ∩ B' -> A ∪ B
        return A | B
    C = s["C"]
    if ask == "iu":  # A ∩ (B ∪ C) -> A ∩ (B ∩ C)
        return A & B & C
    if ask == "ui":  # A ∪ (B ∩ C) -> A ∪ (B ∪ C)
        return A | B | C
    raise ValueError("no such ask")


def m3(v, p):
    """Takes the complement inside the circles drawn (A ∪ B) instead of U, so the region
    outside both circles is left out."""
    s = _sets(v)
    A, B = s["A"], s["B"]
    W = A | B
    ask = _ask(p)
    if ask == "cu":
        return W - (A | B)
    if ask == "ci":
        return W - (A & B)
    if ask == "icomp":
        return (W - A) & (W - B)
    raise ValueError("no complement to take")


def m4(v, p):
    """Ignores the bracket: the operation outside reaches only the set next to it."""
    s = _sets(v)
    U, A, B = s["U"], s["A"], s["B"]
    ask = _ask(p)
    if ask == "cu":  # (A ∪ B)' read as A ∪ B'
        return A | (U - B)
    if ask == "ci":  # (A ∩ B)' read as A ∩ B'
        return A & (U - B)
    if ask in ("iu", "ui"):
        C = s["C"]
        return (A & B) | C if ask == "iu" else (A | B) & C  # left to right
    raise ValueError("no bracket to ignore")


MODELS = {"key": key, "C05-M1": m1, "C05-M2": m2, "C05-M3": m3, "C05-M4": m4}
