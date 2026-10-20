"""C06 Word problems with inequalities: answer models (the key, and one per misconception).

Each item names its story in params["t"]:
  avg    marks so far v["known"] (a Tuple), target average v["A"], marks out of v["top"]:
         the marks x the last exam needs, an Interval.
  pairs  consecutive odd (v["par"] = 1) or even (0) positive integers x, x + 2, both smaller
         than v["cap"], with sum at least v["s"]: a FiniteSet of Tuples.
  tri    shortest side x, longest v["k"]x, third side d cm shorter than the longest, perimeter
         at least v["P"]: the possible x, an Interval.
  board  pieces x, x + v["a"], v["m"]x cut from a board v["L"] long; the third at least
         v["g"] longer than the second: the possible x, an Interval.
  temp   F = 9/5 C + 32 and F not more than v["F"]: the possible C, an Interval.
Every key solves the story's conditions with sympy's solveset (or, for pairs, checks each
candidate integer against the conditions), never by the hand steps the concept teaches.
"""
from sympy import FiniteSet, Interval, Rational, S, Symbol, Tuple, oo, solveset

X = Symbol("x", real=True)


def _solve(*conds, domain=S.Reals):
    """The x satisfying every condition (sympy relationals in X)."""
    out = domain
    for c in conds:
        out = out.intersect(solveset(c, X, S.Reals))
    return out


def _pairs(v, ok):
    """The pairs (x, x + 2) of positive integers x with x of the right parity (unless any) and ok(x)."""
    return FiniteSet(*[Tuple(x, x + 2) for x in range(1, 200) if ok(x)])


# ---- the stories, each with a switch for the wrong reading ----

def _avg(v, strict=False, reverse=False, mean_first=False):
    known, A, top = list(v["known"]), v["A"], v["top"]
    if mean_first:  # averages the known marks, then averages that with x
        avg = (sum(known) / len(known) + X) / 2
    else:
        avg = (sum(known) + X) / (len(known) + 1)
    cond = avg <= A if reverse else (avg > A if strict else avg >= A)
    return _solve(cond, domain=Interval(0, top))


def _pair_set(v, strict=False, reverse=False, any_int=False):
    cap, s, par = int(v["cap"]), int(v["s"]), int(v["par"])

    def ok(x):
        if not any_int and x % 2 != par:
            return False
        small = (x + 2 <= cap) if strict else (x + 2 < cap)  # both smaller than cap: the larger one
        if reverse:
            big = 2 * x + 2 <= s
        else:
            big = (2 * x + 2 > s) if strict else (2 * x + 2 >= s)
        return small and big

    return _pairs(v, ok)


def _tri(v, strict=False, reverse=False, wrong_side=False):
    k, d, P = v["k"], v["d"], v["P"]
    third = k * X + d if wrong_side else k * X - d
    per = X + k * X + third
    cond = per <= P if reverse else (per > P if strict else per >= P)
    return _solve(cond, X > 0)


def _board(v, strict=False, reverse=False, wrong_side=False):
    L, a, m, g = v["L"], v["a"], v["m"], v["g"]
    second, third = X + a, m * X
    fits = X + second + third <= L
    if wrong_side:  # "third is at least g longer than second" written third + g >= second
        cond = third + g >= second
    elif reverse:
        cond = third <= second + g
    else:
        cond = third > second + g if strict else third >= second + g
    return _solve(fits, cond, X > 0)


def _temp(v, strict=False, reverse=False, flip_factor=False):
    Fm = v["F"]
    if flip_factor:  # undoes "times 9/5" by multiplying by 9/5 again
        return _solve(X <= Rational(9, 5) * (Fm - 32))
    F = Rational(9, 5) * X + 32
    cond = F > Fm if reverse else (F < Fm if strict else F <= Fm)
    return _solve(cond)


STORIES = {"avg": _avg, "pairs": _pair_set, "tri": _tri, "board": _board, "temp": _temp}


def key(v, p):
    return STORIES[p["t"]](v)


def m1(v, p):
    """Swaps strict and slack: reads "at least" as > (and "more than" as >=)."""
    return STORIES[p["t"]](v, strict=True)


def m2(v, p):
    """Reads "at least" / "not more than" the wrong way round."""
    return STORIES[p["t"]](v, reverse=True)


def m3(v, p):
    """Averages the known marks first, then averages that with the new mark."""
    if p["t"] != "avg":
        raise ValueError("only for averages")
    return _avg(v, mean_first=True)


def m4(v, p):
    """Puts a stated difference on the wrong side ("2 cm shorter than the longest" as 3x + 2)."""
    if p["t"] not in ("tri", "board"):
        raise ValueError("only for lengths")
    return STORIES[p["t"]](v, wrong_side=True)


def m5(v, p):
    """Keeps every integer in the range, not only the odd (or even) ones."""
    if p["t"] != "pairs":
        raise ValueError("only for pairs")
    return _pair_set(v, any_int=True)


def m6(v, p):
    """Undoes the factor 9/5 by multiplying by 9/5 instead of 5/9."""
    if p["t"] != "temp":
        raise ValueError("only for temperatures")
    return _temp(v, flip_factor=True)


MODELS = {"key": key, "C06-M1": m1, "C06-M2": m2, "C06-M3": m3, "C06-M4": m4, "C06-M5": m5, "C06-M6": m6}
