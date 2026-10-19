"""C09 Periodic integrands: answer models (the key, and one per misconception).

Every item asks for a number, the definite integral of a periodic f from a to b. Inputs:
- f: the integrand, an expression in x; it may hold Abs(g) (|sin x|, |cos x|) or floor(x) (the [x]
  of x - [x]).
- a, b: the limits, a < b.
- T: the true period of f (checked: f(x + T) = f(x) at sample points).
- s, J (optional): the stem gives the integral over a piece, J = the integral of f from 0 to s.
  J is a number, or the symbol k ("If the integral from 0 to s is k, ...").
Param Tterm (optional): the period of each term of a sum, for C09-M2.

The key integrates f over (a, b) exactly, splitting where a modulus changes sign or [x] jumps,
cross-checked numerically with mpmath.quad; with J = k it is that value over the integral from 0 to
s, times k. It never uses the period. The models apply each wrong way of counting periods.
"""
import math

import mpmath
from sympy import Abs, Interval, Symbol, floor, integrate, pi, simplify, solveset, sympify


def _x(v):
    """The symbol x in the inputs (the verifier parses x as real, draft_items as plain)."""
    for e in v.values():
        for s in getattr(e, "free_symbols", ()):
            if s.name == "x":
                return s
    return Symbol("x", real=True)


def _breaks(f, x, lo, hi):
    """Where f changes formula inside [lo, hi]: zeros of each modulus, integers for [x]."""
    pts = {lo, hi}
    for u in f.atoms(Abs):
        zs = solveset(u.args[0], x, Interval(lo, hi))
        pts |= set(zs)
    if f.has(floor):
        pts |= {sympify(n) for n in range(math.ceil(float(lo)), math.floor(float(hi)) + 1)}
    return sorted(pts, key=float)


def _plain(f, x, m):
    """f on a piece containing m, where every modulus has a fixed sign and [x] a fixed value."""
    f = f.replace(Abs, lambda u: u if float(u.subs(x, m)) >= 0 else -u)
    return f.replace(floor, lambda u: math.floor(float(u.subs(x, m))))


def _integral(f, x, a, b):
    """The exact integral of f over (a, b), checked against a numerical quadrature."""
    pts = _breaks(f, x, a, b)
    exact = 0
    for p, q in zip(pts, pts[1:]):
        if float(q - p) > 0:
            exact += integrate(_plain(f, x, (p + q) / 2), (x, p, q))
    exact = simplify(exact)
    if exact.has(integrate) or not exact.is_number:
        raise ValueError(f"sympy could not integrate {f}")
    nodes = [float(p) for p in pts]
    num = mpmath.quad(lambda t: float(f.subs(x, t)), nodes)
    if abs(float(exact) - float(num)) > 1e-6:
        raise ValueError(f"exact {exact} and numeric {num} disagree for {f}")
    return exact


def _check_period(f, x, T):
    """T really is a period of f (at sample points), so the items say what they mean."""
    for t in (0.137, 0.71, 1.9, 2.63, 4.4):
        if abs(float(f.subs(x, t + T)) - float(f.subs(x, t))) > 1e-9:
            raise ValueError(f"{T} is not a period of {f}")


def _unit(v, x):
    """What the integral of f from 0 to s is worth: 1 when J is its number, k / (that number) when J = k."""
    if "J" not in v:
        return 1
    piece = _integral(v["f"], x, 0, v["s"])
    if v["J"].is_number:
        if simplify(v["J"] - piece) != 0:
            raise ValueError(f"the given integral {v['J']} is wrong: it is {piece}")
        return 1
    return v["J"] / piece


def _one_period(v):
    """The integral over one true period, in the item's units (a number, or a multiple of k)."""
    x, f, T = _x(v), v["f"], v["T"]
    _check_period(f, x, T)
    return simplify(_unit(v, x) * _integral(f, x, 0, T))


def _given(v):
    """The integral the stem gives over its piece; the models below that need one."""
    if "J" not in v:
        raise ValueError("the stem gives no integral over a piece")
    return v["J"]


def key(v, p):
    x = _x(v)
    _check_period(v["f"], x, v["T"])
    return simplify(_unit(v, x) * _integral(v["f"], x, v["a"], v["b"]))


def m1(v, p):
    """Counts periods of 2π, the period of sin x, and multiplies the given piece's integral by that count."""
    if simplify(v["T"] - 2 * pi) == 0:
        raise ValueError("the period really is 2π")
    return simplify((v["b"] - v["a"]) / (2 * pi) * _given(v))


def m2(v, p):
    """Takes the period of each term (π for sin⁴x and cos⁴x) as the period of their sum."""
    if "Tterm" not in p:
        raise ValueError("f is not a sum whose terms repeat more slowly than it")
    return simplify((v["b"] - v["a"]) / sympify(p["Tterm"]) * _given(v))


def m3(v, p):
    """Gives one period's integral as the answer: the integral over many periods taken as over one."""
    return _one_period(v)


def m4(v, p):
    """Counts periods from 0 up to the upper limit: b / T periods, ignoring that the integral starts at a."""
    if v["a"] == 0:
        raise ValueError("the integral starts at 0")
    return simplify(v["b"] / v["T"] * _one_period(v))


def m6(v, p):
    """Multiplies one period's integral by (b - a) / T even when that is not a whole number."""
    n = simplify((v["b"] - v["a"]) / v["T"])
    if n.is_integer:
        raise ValueError("a whole number of periods: the count is right")
    return simplify(n * _one_period(v))


def m5(v, p):
    """Ignores the modulus or the [x]: |sin x| read as sin x, x - [x] read as x."""
    x, f = _x(v), v["f"]
    if not (f.has(Abs) or f.has(floor)):
        raise ValueError("no modulus or [x] in f")
    if "J" in v and not v["J"].is_number:
        raise ValueError("an answer in k has no modulus to drop")
    g = f.replace(Abs, lambda u: u).replace(floor, lambda u: 0)
    return _integral(g, x, v["a"], v["b"])


MODELS = {"key": key, "C09-M1": m1, "C09-M2": m2, "C09-M3": m3, "C09-M4": m4, "C09-M5": m5, "C09-M6": m6}
