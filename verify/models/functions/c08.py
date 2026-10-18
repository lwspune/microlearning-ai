"""C08 Piecewise defined functions: answer models (the key, and one per misconception).

Params describe f, piece by piece, left to right:
  pieces: the formulas (strings in x), one more than the cuts;
  cuts:   the boundary numbers, increasing;
  own:    for each cut, "L" if the piece on its left includes it (x <= c), "R" if the one on its right does (x >= c);
  ask:    "eval"  f(a) (+ f(b)) for the inputs a, b;
          "solve" the real solutions of f(x) = k (input k), as a set.
The key reads each condition with the ordinary order of the reals and the boundary owners as given.
"""
from itertools import product

from sympy import Abs, Eq, FiniteSet, S, Symbol, solveset, sympify

x = Symbol("x", real=True)
NOT_DEFINED = Symbol("not_defined")


def _pieces(p):
    return [sympify(s, locals={"x": x}) for s in p["pieces"]], [sympify(c) for c in p["cuts"]], list(p["own"])


def _less(a, c):
    return a < c


def _less_by_size(a, c):
    """M3: two negatives compared by size, so -4 counts as bigger than -3."""
    if a < 0 and c < 0:
        return Abs(a) < Abs(c)
    return a < c


def _owners(a, cuts, own, less=_less, boundary="own"):
    """The indices of the pieces a student puts a in.

    boundary: "own" (the stated owner), "flip" (the other side), "both" (each side), "neither".
    """
    for i, c in enumerate(cuts):
        if a == c:
            left = own[i] == "L"
            if boundary == "flip":
                left = not left
            if boundary == "both":
                return [i, i + 1]
            if boundary == "neither":
                return []
            return [i] if left else [i + 1]
        if less(a, c):
            return [i]
    return [len(cuts)]


def _points(v):
    return [v[k] for k in ("a", "b") if k in v]


def _eval(v, p, **how):
    fs, cuts, own = _pieces(p)
    per_point = []
    for a in _points(v):
        idx = _owners(a, cuts, own, **how)
        if not idx:
            return NOT_DEFINED
        per_point.append([fs[i].subs(x, a) for i in idx])
    sums = {sum(choice) for choice in product(*per_point)}
    return sums.pop() if len(sums) == 1 else FiniteSet(*sums)


def _roots(e, k):
    r = solveset(Eq(e, k), x, S.Reals)
    if not isinstance(r, FiniteSet):
        raise ValueError(f"{e} = {k} does not have finitely many roots")
    return list(r)


def _solve(v, p, check=True, only_first=False, **how):
    fs, cuts, own = _pieces(p)
    keep = []
    for i, e in enumerate(fs[:1] if only_first else fs):
        for r in _roots(e, v["k"]):
            if not check or i in _owners(r, cuts, own, **how):
                keep.append(r)
    return FiniteSet(*keep)


def _answer(v, p, **how):
    if p["ask"] == "eval":
        return _eval(v, p, **how)
    return _solve(v, p, **how)


def key(v, p):
    return _answer(v, p)


def m1(v, p):
    """The boundary goes to the wrong piece (<= read as <, or < as <=)."""
    return _answer(v, p, boundary="flip")


def m2(v, p):
    """A boundary belongs to both pieces: two values there."""
    return _answer(v, p, boundary="both")


def m3(v, p):
    """Negatives ordered by size: -4 taken as bigger than -3."""
    return _answer(v, p, less=_less_by_size)


def m4(v, p):
    """Solving f(x) = k: every root of every piece kept, no condition checked."""
    if p["ask"] != "solve":
        raise ValueError("M4 is about solving f(x) = k")
    return _solve(v, p, check=False)


def m5(v, p):
    """The first formula used for every input, the conditions ignored."""
    if p["ask"] == "eval":
        f0 = _pieces(p)[0][0]
        return sum(f0.subs(x, a) for a in _points(v))
    return _solve(v, p, check=False, only_first=True)


def m6(v, p):
    """A boundary belongs to neither piece: f is not defined there."""
    return _answer(v, p, boundary="neither")


MODELS = {"key": key, "C08-M1": m1, "C08-M2": m2, "C08-M3": m3, "C08-M4": m4, "C08-M5": m5, "C08-M6": m6}
