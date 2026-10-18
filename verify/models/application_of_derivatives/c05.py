"""C05 Approximations: answer models (the key, and one per misconception).

Inputs: f (an expression in x), a (the nearby point, radians for trig), h (the step;
in degrees when params["unit"] == "deg", else in x's units), and for degree steps
rad (the book's radian value of 1 degree, e.g. 0.0175).
params["subs"]: the book's given constants, "lhs=rhs" (e.g. "sqrt(3)=1.732", "exp(2)=7.389"),
substituted into f(a) and f'(a).
The key is the linear approximation f(a) + h f'(a) with f'(a) from sympy's diff, as the book
asks; models change one piece of it.
"""
from sympy import Rational, diff, floor, sympify


def _x(f):
    for s in f.free_symbols:
        if s.name == "x":
            return s
    raise ValueError("no x in f")


def _consts(e, p):
    for pair in p.get("subs", []):
        lhs, rhs = pair.split("=")
        e = e.subs(sympify(lhs), Rational(rhs))
    return e


def _parts(v, p, h_deg=None):
    """f(a), f'(a) with the book's constants, and h in radians (or x's units)."""
    f, a = v["f"], v["a"]
    x = _x(f)
    fa = _consts(f.subs(x, a), p)
    dfa = _consts(diff(f, x).subs(x, a), p)
    hd = v["h"] if h_deg is None else h_deg
    h = hd * v["rad"] if p.get("unit") == "deg" else hd
    if not (fa.is_Rational and dfa.is_Rational):
        raise ValueError(f"f(a) = {fa}, f'(a) = {dfa}: give the book's constants in params.subs")
    return fa, dfa, h


def key(v, p):
    fa, dfa, h = _parts(v, p)
    return fa + h * dfa


def m1(v, p):
    """h taken as a - x: the step's sign reversed."""
    fa, dfa, h = _parts(v, p)
    return fa - h * dfa


def m2(v, p):
    """The change h f'(a) given as the value: f(a) left out."""
    fa, dfa, h = _parts(v, p)
    return h * dfa


def m3(v, p):
    """The change in x passed straight to y: f(a) + h, slope taken as 1."""
    fa, dfa, h = _parts(v, p)
    if dfa == 1:
        raise ValueError("f'(a) = 1: same as the key")
    return fa + h


def m4(v, p):
    """A degree step used as if it were radians."""
    if p.get("unit") != "deg":
        raise ValueError("needs a step in degrees")
    fa, dfa, _ = _parts(v, p)
    return fa + v["h"] * dfa


def m5(v, p):
    """f(a) used in place of f'(a): f(a + h) = f(a)(1 + h), copied from e^x."""
    fa, dfa, h = _parts(v, p)
    if fa == dfa:
        raise ValueError("f(a) = f'(a): same as the key")
    return fa + h * fa


def m6(v, p):
    """Minutes read as a decimal of a degree: 30' taken as 0.30 degree."""
    if p.get("unit") != "deg":
        raise ValueError("needs a step in degrees")
    hd = v["h"]
    sign = 1 if hd >= 0 else -1
    whole = floor(abs(hd))
    minutes = (abs(hd) - whole) * 60
    if minutes == 0:
        raise ValueError("no minutes in the step")
    fa, dfa, h = _parts(v, p, h_deg=sign * (whole + minutes / 100))
    return fa + h * dfa


MODELS = {"key": key, "C05-M1": m1, "C05-M2": m2, "C05-M3": m3, "C05-M4": m4, "C05-M5": m5, "C05-M6": m6}
