"""C09 Intersecting chords: answer models (the key, and one per misconception).

Two chords of a circle cut each other at a point inside it. params["parts"] lists the four
parts in the stem's order, each a sympy expression in the inputs and the unknown x: the two
parts of the first chord, then the two parts of the second. The theorem of intersecting chords
says part0 * part1 = part2 * part3.
  params["ask"]    what the item asks for, an expression in x (default "x"), e.g. "2*x" for
                   a whole chord cut in half by a diameter at right angles.
  params["pick"]   "min" or "max": the root wanted when the equation has two (a part found
                   from the whole chord; the stem says which part is shorter).
  params["whole"]  [index, expression]: the whole chord that C09-M4 puts in place of that part.
  params["kind"]   "proof": a named answer, the result that follows from the similar
                   triangles of the proof (AE/DE = CE/BE).
"""
from sympy import Symbol, solve, sympify

_X = Symbol("x", positive=True)

PRODUCT = Symbol("product_rule")      # AE x EB = CE x ED
RATIO = Symbol("same_ratio")          # AE / EB = CE / ED
CROSS = Symbol("cross_product")       # AE x CE = EB x ED
SUM = Symbol("equal_sums")            # AE + EB = CE + ED


def _parts(v, p, parts=None):
    loc = dict(v)
    loc["x"] = _X
    return [sympify(s, locals=loc) for s in (parts or p["parts"])]


def _root(eq, ps, p, check_parts=True):
    """The positive root of eq = 0 (the one params["pick"] names when there are two)."""
    roots = [r for r in solve(eq, _X) if r.is_positive]
    if check_parts:
        roots = [r for r in roots if all(q.subs(_X, r).is_positive for q in ps)]
    if not roots:
        raise ValueError("no positive length")
    roots = sorted(set(roots))
    if len(roots) > 1:
        pick = p.get("pick")
        if pick not in ("min", "max"):
            raise ValueError("two roots and no pick")
        return roots[0] if pick == "min" else roots[-1]
    return roots[0]


def _answer(root, p):
    ans = sympify(p.get("ask", "x"), locals={"x": _X}).subs(_X, root)
    if not ans.is_positive:
        raise ValueError("not a length")
    return ans


def _proof(p, name):
    if p.get("kind") != "proof":
        raise ValueError("lengths item")
    return name


def key(v, p):
    """The two parts of one chord multiply to the same product as the two parts of the other."""
    if p.get("kind") == "proof":
        return PRODUCT
    ps = _parts(v, p)
    return _answer(_root(ps[0] * ps[1] - ps[2] * ps[3], ps, p), p)


def m1(v, p):
    """Thinks P cuts both chords in the same ratio: part0 / part1 = part2 / part3."""
    if p.get("kind") == "proof":
        return RATIO
    ps = _parts(v, p)
    return _answer(_root(ps[0] * ps[3] - ps[1] * ps[2], ps, p, False), p)


def m2(v, p):
    """Multiplies a part of one chord by a part of the other: part0 * part2 = part1 * part3."""
    if p.get("kind") == "proof":
        return CROSS
    ps = _parts(v, p)
    return _answer(_root(ps[0] * ps[2] - ps[1] * ps[3], ps, p, False), p)


def m3(v, p):
    """Adds the parts instead of multiplying them (takes the two chords as equal):
    part0 + part1 = part2 + part3."""
    if p.get("kind") == "proof":
        return SUM
    ps = _parts(v, p)
    return _answer(_root(ps[0] + ps[1] - ps[2] - ps[3], ps, p, False), p)


def m4(v, p):
    """Uses the whole chord in place of one of its parts."""
    if "whole" not in p:
        raise ValueError("no whole chord in play")
    parts = list(p["parts"])
    i, w = p["whole"]
    parts[int(i)] = w
    ps = _parts(v, p, parts)
    return _answer(_root(ps[0] * ps[1] - ps[2] * ps[3], ps, p, False), p)


def m5(v, p):
    """Stops at the half chord: gives the part found, not the whole chord asked for."""
    if p.get("ask", "x") == "x":
        raise ValueError("the unknown is what is asked")
    ps = _parts(v, p)
    return _root(ps[0] * ps[1] - ps[2] * ps[3], ps, p)


MODELS = {"key": key, "C09-M1": m1, "C09-M2": m2, "C09-M3": m3, "C09-M4": m4, "C09-M5": m5}
