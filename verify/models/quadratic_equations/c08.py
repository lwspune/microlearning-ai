"""C08 Sign and extreme value of a quadratic: answer models (the key, and one per misconception).

Every item but "graph" prints a quadratic expression v["f"] in x (a > 0 or a < 0); p["ask"] picks the question:
  least     -> the least value of f over real x (needs a > 0)
  greatest  -> the greatest value of f over real x (needs a < 0)
  at        -> the x at which f takes its least or greatest value
  range     -> the set of values f takes over real x (an Interval)
  param     f has an unknown k in it, a > 0 constant -> the set of real k with f > 0 for every real x
  graph     no expression; p["where"] = "above" | "below": the graph of y = ax^2 + bx + c lies entirely on
            that side of the x-axis -> a named condition on a and D (a Symbol)
The key works from the definition: the least/greatest value is found with the derivative (f' = 0),
the range with sympy's function_range, never with -b/2a or -D/4a.
"""
from sympy import Interval, Poly, S, Symbol, diff, oo, solve, solve_univariate_inequality
from sympy.calculus.util import function_range


def _ask(p):
    return p.get("ask", "least")


def _x(e):
    """The symbol named x (the verifier parses it as real, draft_items as plain)."""
    for s in getattr(e, "free_symbols", ()):
        if s.name == "x":
            return s
    return Symbol("x", real=True)


def _k(e):
    for s in e.free_symbols:
        if s.name == "k":
            return Symbol("k", real=True), s
    raise ValueError("no k in the expression")


def _abc(v):
    e = v["f"]
    x = _x(e)
    p = Poly(e, x)
    if p.degree() != 2:
        raise ValueError("not a quadratic")
    a, b, c = p.all_coeffs()
    return e, x, a, b, c


def _turning(e, x):
    """From the definition: the one x where the slope f'(x) is zero."""
    (x0,) = solve(diff(e, x), x)
    return x0


def _check_dir(a, p):
    a_ = a.subs({s: 1 for s in a.free_symbols})
    if _ask(p) == "least" and not a_ > 0:
        raise ValueError("no least value when a < 0")
    if _ask(p) == "greatest" and not a_ < 0:
        raise ValueError("no greatest value when a > 0")


def _interval(m, a):
    """The values from m upward (a > 0) or downward (a < 0)."""
    return Interval(m, oo) if a > 0 else Interval(-oo, m)


def _ks(cond, v):
    """The set of real k satisfying cond (a relational in the item's k)."""
    kr, k = _k(v["f"])
    return solve_univariate_inequality(cond.subs(k, kr), kr, relational=False)


def _side(p):
    """The sign of a for a graph lying entirely above (pos) or below (neg) the x-axis."""
    return {"above": "pos", "below": "neg"}[p["where"]]


def key(v, p):
    a_ = _ask(p)
    if a_ == "graph":
        # Entirely above: opens upward (a > 0) and never meets the x-axis (no real root, D < 0).
        return Symbol(f"a_{_side(p)}_D_neg")
    e, x, a, b, c = _abc(v)
    if a_ in ("least", "greatest"):
        _check_dir(a, p)
        return e.subs(x, _turning(e, x))
    if a_ == "at":
        return _turning(e, x)
    if a_ == "range":
        return function_range(e, x, S.Reals)
    if a_ == "param":
        if not (a.is_number and a > 0):
            raise ValueError("param items keep a positive constant")
        return _ks(e.subs(x, _turning(e, x)) > 0, v)
    raise ValueError(a_)


def m1(v, p):
    """Takes the value at x = 0, the constant term c, as the least (or greatest) value."""
    a_ = _ask(p)
    if a_ == "graph":
        raise ValueError("no expression")
    e, x, a, b, c = _abc(v)
    if a_ in ("least", "greatest"):
        return c
    if a_ == "at":
        return S.Zero
    if a_ == "range":
        return _interval(c, a)
    if a_ == "param":
        return _ks(c > 0, v)
    raise ValueError(a_)


def m2(v, p):
    """Puts the vertex at x = b/(2a), dropping the minus sign."""
    a_ = _ask(p)
    if a_ == "graph":
        raise ValueError("no expression")
    e, x, a, b, c = _abc(v)
    x0 = b / (2 * a)
    if a_ in ("least", "greatest"):
        return e.subs(x, x0)
    if a_ == "at":
        return x0
    if a_ == "range":
        return _interval(e.subs(x, x0), a)
    if a_ == "param":
        return _ks(e.subs(x, x0) > 0, v)
    raise ValueError(a_)


def m3(v, p):
    """Mixes up the vertex's two coordinates: gives -b/(2a) for the value, and the value for 'where'."""
    a_ = _ask(p)
    if a_ in ("graph", "param"):
        raise ValueError("no vertex coordinate asked")
    e, x, a, b, c = _abc(v)
    xv = -b / (2 * a)
    if a_ in ("least", "greatest"):
        return xv
    if a_ == "at":
        return e.subs(x, xv)
    if a_ == "range":
        return _interval(xv, a)
    raise ValueError(a_)


def m4(v, p):
    """Ignores the sign of a: treats every parabola as opening upward (D < 0 alone means always positive)."""
    a_ = _ask(p)
    if a_ == "graph":
        return Symbol("D_neg_any_a")
    if a_ == "range":
        e, x, a, b, c = _abc(v)
        if a > 0:
            raise ValueError("gives the key when a > 0")
        return Interval(e.subs(x, _turning(e, x)), oo)
    raise ValueError(a_)


def m5(v, p):
    """Allows D = 0 for 'always positive': takes D <= 0, though then the expression is 0 at one x."""
    a_ = _ask(p)
    if a_ == "graph":
        return Symbol(f"a_{_side(p)}_D_le0")
    if a_ == "param":
        e, x, a, b, c = _abc(v)
        return _ks(b**2 - 4 * a * c <= 0, v)
    raise ValueError(a_)


def m6(v, p):
    """Thinks 'always positive' needs D > 0, mixing it up with 'two real roots'."""
    a_ = _ask(p)
    if a_ == "graph":
        return Symbol(f"a_{_side(p)}_D_pos")
    if a_ == "param":
        e, x, a, b, c = _abc(v)
        return _ks(b**2 - 4 * a * c > 0, v)
    raise ValueError(a_)


MODELS = {"key": key, "C08-M1": m1, "C08-M2": m2, "C08-M3": m3, "C08-M4": m4, "C08-M5": m5, "C08-M6": m6}
