"""C02 Continuity from the left and right: answer models (the key, and one per misconception).

Inputs: a, the point tested; b, a second point (for the set questions).
Params:
  f    the function, a sympy expression in x (Piecewise for a function given in pieces,
       floor(x) for the greatest integer [x]);
  fb   optional: a second function, tested at b (default f);
  ask  "class"  what f is at a: Symbol continuous | left_only | right_only | neither;
       "L", "R", "C"  the set of the points a, b where f is continuous from the left,
       from the right, or continuous (EmptySet when none).
The key works from the definition: f is continuous from the left at a when the left-hand
limit equals f(a), from the right when the right-hand limit does, and continuous when both
hold. Each one-sided limit is taken on the piece of f that holds just to that side of a.
"""
from sympy import EmptySet, FiniteSet, Piecewise, Rational, Symbol, floor, limit, nan, oo, simplify, sympify, zoo

x = Symbol("x", real=True)
_EPS = Rational(1, 10**6)
_NAMES = {(True, True): "continuous", (True, False): "left_only", (False, True): "right_only", (False, False): "neither"}


def _fn(p, which):
    s = p["fb"] if which == "b" and "fb" in p else p["f"]
    return sympify(s, locals={"x": x, "floor": floor})


def _piece(f, at):
    """The index of the piece of a Piecewise f that holds at x = at."""
    return next(i for i, (_, c) in enumerate(f.args) if c.subs(x, at) == True)  # noqa: E712 (sympy truth)


def _side(f, a, d):
    """The one-sided limit of f at a from the side d ("-" left, "+" right)."""
    if isinstance(f, Piecewise):
        f = f.args[_piece(f, a - _EPS if d == "-" else a + _EPS)][0]
    return limit(f, x, a, d)


def _facts(v, p, which):
    """(f, a, left-hand limit, right-hand limit, f(a)) at the point named `which`."""
    f, a = _fn(p, which), v[which]
    val = f.subs(x, a)
    fa = None if val.has(nan, zoo) else val
    return f, a, _side(f, a, "-"), _side(f, a, "+"), fa


def _eq(u, w):
    return w is not None and u not in (oo, -oo, zoo, nan) and simplify(u - w) == 0


def _answer(v, p, judge):
    """judge(which) -> (continuous from the left?, from the right?), shaped as p["ask"] wants."""
    if p["ask"] == "class":
        return Symbol(_NAMES[tuple(bool(s) for s in judge("a"))])
    pick = {"L": lambda lr: lr[0], "R": lambda lr: lr[1], "C": lambda lr: lr[0] and lr[1]}[p["ask"]]
    pts = [v[w] for w in ("a", "b") if w in v and pick(judge(w))]
    return FiniteSet(*pts) if pts else EmptySet


def _key_sides(v, p, w):
    _, _, lhl, rhl, fa = _facts(v, p, w)
    return _eq(lhl, fa), _eq(rhl, fa)


def key(v, p):
    return _answer(v, p, lambda w: _key_sides(v, p, w))


def m1(v, p):
    """Swaps the sides: tests 'from the left' with the right-hand limit, and the reverse."""
    return _answer(v, p, lambda w: _key_sides(v, p, w)[::-1])


def m2(v, p):
    """Ignores f(a): calls f continuous (from both sides) when the two one-sided limits agree."""
    def judge(w):
        _, _, lhl, rhl, _ = _facts(v, p, w)
        same = _eq(lhl, rhl)
        return same, same
    return _answer(v, p, judge)


def m3(v, p):
    """One side is enough: continuous from either side means continuous at a."""
    def judge(w):
        c = any(_key_sides(v, p, w))
        return c, c
    return _answer(v, p, judge)


def m4(v, p):
    """A piece with a strict inequality never reaches a, so that side can't be continuous:
    a side counts only when its limit equals f(a) and its own piece includes x = a."""
    def judge(w):
        f, a, _, _, _ = _facts(v, p, w)
        if not isinstance(f, Piecewise):
            raise ValueError("needs a function given in pieces")
        here = _piece(f, a)
        lc, rc = _key_sides(v, p, w)
        return lc and _piece(f, a - _EPS) == here, rc and _piece(f, a + _EPS) == here
    return _answer(v, p, judge)


def m5(v, p):
    """A change of formula at a is a break: f is continuous from neither side there."""
    def judge(w):
        f, a, _, _, _ = _facts(v, p, w)
        if not isinstance(f, Piecewise):
            raise ValueError("needs a function given in pieces")
        if len({_piece(f, a - _EPS), _piece(f, a), _piece(f, a + _EPS)}) == 1:
            return _key_sides(v, p, w)
        return False, False
    return _answer(v, p, judge)


def m6(v, p):
    """Defined means continuous: f(a) exists, so f is continuous at a."""
    def judge(w):
        if _facts(v, p, w)[4] is None:
            raise ValueError("f(a) is not defined")
        return True, True
    return _answer(v, p, judge)


MODELS = {"key": key, "C02-M1": m1, "C02-M2": m2, "C02-M3": m3, "C02-M4": m4, "C02-M5": m5, "C02-M6": m6}
