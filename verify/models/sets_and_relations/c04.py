"""C04 Difference and complement: answer models (the key, and one per misconception).

Inputs (Python sets from sympify, turned into FiniteSet here): A, B, optionally C and U.
params["ask"] names the set asked for, over the two sets params["x"], params["y"] (default "A", "B"):
  diff:      X − Y
  comp_diff: (X − Y)'   (needs U)
  comp_sym:  (X Δ Y)'   (needs U)
"""
from sympy import FiniteSet, Union


def _sets(v):
    return {k: FiniteSet(*s) for k, s in v.items()}


def _xy(v, p):
    s = _sets(v)
    return s, s[p.get("x", "A")], s[p.get("y", "B")]


def _minus(x, y):
    """X − Y straight from the definition: the elements of X that are not in Y."""
    return FiniteSet(*[e for e in x if e not in y])


def _sym(x, y):
    """X Δ Y = (X − Y) ∪ (Y − X): in exactly one of the two."""
    return _minus(x, y) | _minus(y, x)


def _comp(s, x):
    """X' = U − X."""
    if "U" not in s:
        raise ValueError("a complement needs U")
    return _minus(s["U"], x)


def key(v, p):
    s, x, y = _xy(v, p)
    ask = p["ask"]
    if ask == "diff":
        return _minus(x, y)
    if ask == "comp_diff":
        return _comp(s, _minus(x, y))
    if ask == "comp_sym":
        return _comp(s, _sym(x, y))
    raise ValueError(f"no ask {ask}")


def m1(v, p):
    """Reverses a difference: X − Y read as Y − X."""
    s, x, y = _xy(v, p)
    ask = p["ask"]
    if ask == "diff":
        return _minus(y, x)
    if ask == "comp_diff":
        return _comp(s, _minus(y, x))
    raise ValueError("X Δ Y is the same both ways round")


def m2(v, p):
    """Swaps difference and symmetric difference: X − Y read as X Δ Y, and X Δ Y as X − Y."""
    s, x, y = _xy(v, p)
    ask = p["ask"]
    if ask == "diff":
        return _sym(x, y)
    if ask == "comp_diff":
        return _comp(s, _sym(x, y))
    if ask == "comp_sym":
        return _comp(s, _minus(x, y))
    raise ValueError(f"no ask {ask}")


def m3(v, p):
    """Takes the complement inside the sets listed (their union), not U: drops U's elements outside them all."""
    s, x, y = _xy(v, p)
    listed = Union(*[t for k, t in s.items() if k != "U"])
    ask = p["ask"]
    if ask == "comp_diff":
        return _minus(listed, _minus(x, y))
    if ask == "comp_sym":
        return _minus(listed, _sym(x, y))
    raise ValueError("no complement asked")


def m4(v, p):
    """Writes the elements taken away instead of those left: X − Y read as X ∩ Y (so X Δ Y as X ∩ Y too)."""
    s, x, y = _xy(v, p)
    ask = p["ask"]
    if ask == "diff":
        return x & y
    if ask in ("comp_diff", "comp_sym"):
        return _comp(s, x & y)
    raise ValueError(f"no ask {ask}")


MODELS = {"key": key, "C04-M1": m1, "C04-M2": m2, "C04-M3": m3, "C04-M4": m4}
