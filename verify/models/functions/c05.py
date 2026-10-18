"""C05 Modulus and signum: answer models (the key, and one per misconception).

Expressions are strings in x (params), parsed with a real x; Abs(u) is |u|.
Params:
  ask: "range"  the range of f over R (param f);
       "solve"  the real solutions of lhs = rhs (params lhs, rhs);
       "sgn"    sgn(u) summed over the points a, b, c given in inputs (param u, the inside).
The key works straight from the definitions: |u| = u for u >= 0 and -u for u < 0
(sympy's Abs), and sgn u = |u|/u for u != 0, sgn 0 = 0.
"""
from sympy import Abs, Add, Complement, Eq, Function, Integer, S, Symbol, solveset, sympify
from sympy.calculus.util import function_range

x = Symbol("x", real=True)
NOT_DEFINED = Symbol("not_defined")
# The bars as written: sympy's Abs would rewrite |x^2 - x - 6| as |-x^2 + x + 6|, and the
# misconception models must see the inside exactly as the student does.
_Bars = Function("Bars")


def _expr(s):
    """The expression as written, bars unevaluated (Bars)."""
    return sympify(s, locals={"x": x, "Abs": _Bars})


def _abs(e):
    """The expression with its bars evaluated by the definition."""
    return e.replace(_Bars, Abs)


def _sgn(u, at_zero=Integer(0)):
    return at_zero if u == 0 else Abs(u) / u


def _points(v):
    return [v[k] for k in ("a", "b", "c") if k in v]


def _answer(p, f=None, lhs=None, domain=S.Reals):
    """The range of f, or the solutions of lhs = rhs, over `domain`."""
    if p["ask"] == "range":
        return function_range(_abs(f if f is not None else _expr(p["f"])), x, domain)
    if p["ask"] == "solve":
        return solveset(Eq(_abs(lhs if lhs is not None else _expr(p["lhs"])), _expr(p["rhs"])), x, domain)
    raise ValueError("ask must be range or solve here")


def _given(p):
    return _expr(p["f"]) if p["ask"] == "range" else _expr(p["lhs"])


def _with(p, e):
    return _answer(p, f=e) if p["ask"] == "range" else _answer(p, lhs=e)


def key(v, p):
    if p["ask"] == "sgn":
        u = _expr(p["u"])
        return Add(*[_sgn(u.subs(x, a)) for a in _points(v)])
    return _answer(p)


def m1(v, p):
    """Drops the bars: |u| = u, forgetting the case u < 0."""
    if p["ask"] == "sgn":
        raise ValueError("M1 is about |u|")
    return _with(p, _given(p).replace(_Bars, lambda u: u))


def _split(u):
    """|a + b| read as |a| + |b|: every term turns positive."""
    return Add(*[Abs(t) for t in Add.make_args(u)])


def m2(v, p):
    """Splits the bars over each term: |a - b| = |a| + |b|."""
    if p["ask"] == "sgn":
        raise ValueError("M2 is about |u|")
    e = _given(p)
    if not any(a.args[0].is_Add for a in e.atoms(_Bars)):
        raise ValueError("no sum inside the bars")
    return _with(p, e.replace(_Bars, _split))


def m3(v, p):
    """Believes a modulus is never 0: drops every x that makes an inside 0."""
    if p["ask"] == "sgn":
        raise ValueError("M3 is about |u|")
    zeros = S.EmptySet
    for a in _given(p).atoms(_Bars):
        zeros = zeros | solveset(a.args[0], x, S.Reals)
    if zeros == S.EmptySet:
        raise ValueError("no inside is ever 0")
    if p["ask"] == "solve":
        return Complement(_answer(p), zeros)
    return _answer(p, domain=Complement(S.Reals, zeros))


def m4(v, p):
    """sgn 0 is not defined, since |0|/0 is 0/0."""
    if p["ask"] != "sgn":
        raise ValueError("M4 is about sgn")
    u = _expr(p["u"])
    if not any(u.subs(x, a) == 0 for a in _points(v)):
        raise ValueError("no point makes the inside 0")
    return NOT_DEFINED


def m5(v, p):
    """sgn 0 = 1: zero counted as positive."""
    if p["ask"] != "sgn":
        raise ValueError("M5 is about sgn")
    u = _expr(p["u"])
    return Add(*[_sgn(u.subs(x, a), at_zero=Integer(1)) for a in _points(v)])


def m6(v, p):
    """Reads the sign of the input x, not of the inside u."""
    if p["ask"] != "sgn":
        raise ValueError("M6 is about sgn")
    return Add(*[_sgn(a) for a in _points(v)])


MODELS = {"key": key, "C05-M1": m1, "C05-M2": m2, "C05-M3": m3, "C05-M4": m4, "C05-M5": m5, "C05-M6": m6}
