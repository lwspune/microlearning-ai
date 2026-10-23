"""C06 Reading a Venn diagram: answer models (the key, and one per misconception).

Inputs: the elements written in each region of a two-set Venn diagram, as sets:
  ao (in A only), ab (in the overlap, A and B), bo (in B only), out (inside U, outside both circles).
Params: ask, the set to write: "U", "A", "B", "union" (A ∪ B), "inter" (A ∩ B),
  "Ac" (A'), "Bc" (B'), "unionc" ((A ∪ B)').
"""
from sympy import FiniteSet, S


def _regions(v):
    def as_set(val):
        if not val:
            return set()
        return set(val)
    return {k: as_set(v[k]) for k in ("ao", "ab", "bo", "out")}


def _fs(elems):
    return FiniteSet(*elems) if elems else S.EmptySet


def _read(U, A, B, ask):
    """The asked set, from U, A and B, straight from the definitions (element by element)."""
    if ask == "U":
        return _fs(U)
    if ask == "A":
        return _fs(A)
    if ask == "B":
        return _fs(B)
    if ask == "union":
        return _fs(x for x in U if x in A or x in B)
    if ask == "inter":
        return _fs(x for x in U if x in A and x in B)
    if ask == "Ac":
        return _fs(x for x in U if x not in A)
    if ask == "Bc":
        return _fs(x for x in U if x not in B)
    if ask == "unionc":
        return _fs(x for x in U if not (x in A or x in B))
    raise ValueError(f"unknown ask {ask}")


def key(v, p):
    """U is the whole rectangle; A is everything inside circle A (A only and the overlap); B likewise."""
    r = _regions(v)
    U = r["ao"] | r["ab"] | r["bo"] | r["out"]
    return _read(U, r["ao"] | r["ab"], r["bo"] | r["ab"], p["ask"])


def m1(v, p):
    """The overlap belongs to neither circle: A is only the A-only part, B only the B-only part."""
    if p["ask"] == "inter":
        raise ValueError("reads the overlap itself as A ∩ B")
    r = _regions(v)
    U = r["ao"] | r["ab"] | r["bo"] | r["out"]
    return _read(U, r["ao"], r["bo"], p["ask"])


def m2(v, p):
    """A complement is only the part outside both circles: A' = B' = (A ∪ B)'."""
    if p["ask"] not in ("Ac", "Bc"):
        raise ValueError("only for A' and B'")
    return _fs(_regions(v)["out"])


def m3(v, p):
    """U holds only the elements inside the circles: the elements outside both circles are left out."""
    r = _regions(v)
    U = r["ao"] | r["ab"] | r["bo"]
    return _read(U, r["ao"] | r["ab"], r["bo"] | r["ab"], p["ask"])


def m4(v, p):
    """Swaps the symbols: reads ∪ as the overlap and ∩ as everything in either circle."""
    swap = {"union": "inter", "inter": "union", "unionc": "interc"}
    ask = p["ask"]
    if ask not in swap:
        raise ValueError("only for ∪ and ∩")
    r = _regions(v)
    U = r["ao"] | r["ab"] | r["bo"] | r["out"]
    A, B = r["ao"] | r["ab"], r["bo"] | r["ab"]
    if swap[ask] == "interc":
        return _fs(x for x in U if not (x in A and x in B))
    return _read(U, A, B, swap[ask])


def m5(v, p):
    """Takes A ∪ B to be everything in the picture, the elements outside both circles too."""
    if p["ask"] != "union":
        raise ValueError("only for A ∪ B")
    r = _regions(v)
    return _fs(r["ao"] | r["ab"] | r["bo"] | r["out"])


MODELS = {"key": key, "C06-M1": m1, "C06-M2": m2, "C06-M3": m3, "C06-M4": m4, "C06-M5": m5}
