"""C04 Property of an angle bisector: answer models (the key, and one per misconception).

The bisector of the angle at V of triangle VXY meets side XY at F. Inputs (sympy):
  a = VX (the side next to part XF), b = VY, p = XF, q = FY.
params["ask"]:
  find   one of a, b, p, q is unknown (params["find"] names it); the other three are given.
  x      a, b, p, q are expressions in x; find x (only a value that makes every length positive, for the key).
  check  all four are given; is ray VF the bisector? A named answer: yes / no, with the reason the student used.
"""
from sympy import Eq, Symbol, expand, solve, Add

X = Symbol("x", real=True)
YES, NO = Symbol("yes"), Symbol("no")
NO_CROSSED, YES_CROSSED = Symbol("no_crossed"), Symbol("yes_crossed")
NO_MID, YES_MID = Symbol("no_mid"), Symbol("yes_mid")
NO_DIFF, YES_DIFF = Symbol("no_diff"), Symbol("yes_diff")


def _solve_find(v, p, rel):
    """Solve rel(a, b, p, q) = 0 for the unknown named in params["find"]."""
    u = Symbol("u", positive=True)
    vals = {k: v[k] for k in ("a", "b", "p", "q") if k in v}
    vals[p["find"]] = u
    sols = solve(rel(vals["a"], vals["b"], vals["p"], vals["q"]), u)
    if len(sols) != 1:
        raise ValueError(f"no single positive length: {sols}")
    return sols[0]


def _xs(v):
    """a, b, p, q with any plain x replaced by the real x (draft_items parses x as plain)."""
    return [v[k].subs(Symbol("x"), X) for k in ("a", "b", "p", "q")]


def _solve_x(lhs, rhs, positive=None):
    sols = [s for s in solve(Eq(lhs, rhs), X) if s.is_real]
    if positive is not None:
        sols = [s for s in sols if all(e.subs(X, s) > 0 for e in positive)]
    if len(sols) != 1:
        raise ValueError(f"no single solution: {sols}")
    return sols[0]


def key(v, p):
    """The property: XF / FY = VX / VY, i.e. XF * VY = FY * VX."""
    ask = p["ask"]
    if ask == "find":
        return _solve_find(v, p, lambda a, b, pp, q: pp * b - q * a)
    if ask == "x":
        a, b, pp, q = _xs(v)
        return _solve_x(expand(a * q), expand(b * pp), positive=[a, b, pp, q])
    if ask == "check":
        return YES if v["a"] / v["b"] == v["p"] / v["q"] else NO
    raise ValueError(ask)


def m1(v, p):
    """Crossed pairing: XF / FY = VY / VX (a part matched with the side not next to it)."""
    ask = p["ask"]
    if ask == "find":
        return _solve_find(v, p, lambda a, b, pp, q: pp * a - q * b)
    if ask == "x":
        a, b, pp, q = _xs(v)
        return _solve_x(expand(a * pp), expand(b * q))
    if ask == "check":
        return YES_CROSSED if v["a"] / v["b"] == v["q"] / v["p"] else NO_CROSSED
    raise ValueError(ask)


def m2(v, p):
    """The bisector of the angle bisects the opposite side: XF = FY."""
    ask = p["ask"]
    if ask == "find":
        if p["find"] not in ("p", "q"):
            raise ValueError("midpoint idea gives no side")
        return v["q"] if p["find"] == "p" else v["p"]
    if ask == "check":
        return YES_MID if v["p"] == v["q"] else NO_MID
    raise ValueError(ask)


def m3(v, p):
    """Part over the whole side: XF / XY = VX / VY."""
    if p["ask"] != "find":
        raise ValueError("find only")
    return _solve_find(v, p, lambda a, b, pp, q: pp * b - (pp + q) * a)


def m4(v, p):
    """Additive: the parts differ by what the sides differ by, VX - VY = XF - FY."""
    ask = p["ask"]
    if ask == "find":
        return _solve_find(v, p, lambda a, b, pp, q: (a - b) - (pp - q))
    if ask == "check":
        return YES_DIFF if v["a"] - v["b"] == v["p"] - v["q"] else NO_DIFF
    raise ValueError(ask)


def _first_term_only(u, w):
    """u * w with a one-term u multiplied into only the first term of w: x(x + 2) -> x^2 + 2."""
    if isinstance(u, Add) and not isinstance(w, Add):
        u, w = w, u
    if isinstance(u, Add) or not isinstance(w, Add):
        return expand(u * w)
    lead = [t for t in Add.make_args(w) if t.has(X)]
    other = [t for t in Add.make_args(w) if not t.has(X)]
    return expand(u * Add(*lead)) + Add(*other)


def m5(v, p):
    """Expansion slip: multiplies x into only the first term of the bracket."""
    if p["ask"] != "x":
        raise ValueError("x only")
    a, b, pp, q = _xs(v)
    return _solve_x(_first_term_only(a, q), _first_term_only(b, pp))


def _sign_slip(u, w):
    """(x + c1)(x + c2) with the constant term taken as |c1 c2|: (x - 2)(x + 5) -> x^2 + 3x + 10."""
    if not (isinstance(u, Add) and isinstance(w, Add)):
        return expand(u * w)
    e = expand(u * w)
    c = e.subs(X, 0)
    return e - c + abs(c)


def m6(v, p):
    """Expansion slip: the constant term of (x - 2)(x + 5) taken as +10."""
    if p["ask"] != "x":
        raise ValueError("x only")
    a, b, pp, q = _xs(v)
    return _solve_x(_sign_slip(a, q), _sign_slip(b, pp))


MODELS = {"key": key, "C04-M1": m1, "C04-M2": m2, "C04-M3": m3, "C04-M4": m4, "C04-M5": m5, "C04-M6": m6}
