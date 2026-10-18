"""C14 Properties of inverse functions: answer models (the key, and one per misconception).

Inputs: a, b (and the item's kind in params["kind"]):
  sum        tan^-1 a + tan^-1 b
  diff       tan^-1 a - tan^-1 b
  double     2 tan^-1 a
  double_sum 2 tan^-1 a + tan^-1 b
  sc_tan     tan^-1 a + sin^-1 b + cos^-1 b
Every answer is an angle in radians, except the M6 slip (a tangent).
"""
from sympy import Integer, Rational, asin, acos, atan, expand_trig, nsimplify, pi, simplify, tan

KINDS = ("sum", "diff", "double", "double_sum", "sc_tan")


def _args(v, p):
    kind = p.get("kind")
    if kind not in KINDS:
        raise ValueError(f"unknown kind {kind}")
    return kind, v["a"], v.get("b", Integer(0))


def _angle(kind, a, b):
    """The item's angle, as a sympy expression in atan/asin/acos (unevaluated sums)."""
    return {
        "sum": atan(a) + atan(b),
        "diff": atan(a) - atan(b),
        "double": 2 * atan(a),
        "double_sum": 2 * atan(a) + atan(b),
        "sc_tan": atan(a) + asin(b) + acos(b),
    }[kind]


def _identify(expr):
    """The exact value of an angle expression, from its numerical value: a rational multiple of
    pi with a small denominator, else tan^-1 T + k pi where T is the exact tangent (compound-angle
    expansion) and k is fixed by the numerical value."""
    s = expr.evalf(60)
    r = nsimplify(s / pi.evalf(60), rational=True, tolerance=1e-40)
    if r.q <= 24 and abs((r * pi - expr).evalf(60)) < 1e-40:
        return r * pi
    T = simplify(expand_trig(tan(expr)))
    k = Integer(round(float((s - atan(T)).evalf(30) / pi.evalf(30))))
    out = atan(T) + k * pi
    assert abs((out - expr).evalf(60)) < 1e-40, f"can't identify {expr}"
    return out


def key(v, p):
    kind, a, b = _args(v, p)
    return _identify(_angle(kind, a, b))


def m1(v, p):
    """Treats tan^-1 as linear: tan^-1 a + tan^-1 b = tan^-1(a + b), 2 tan^-1 a = tan^-1 2a."""
    kind, a, b = _args(v, p)
    if kind == "sc_tan":
        raise ValueError("no tan^-1 sum")
    return atan({"sum": a + b, "diff": a - b, "double": 2 * a, "double_sum": 2 * a + b}[kind])


def _plus(x, y, sign):
    """(x + y) / (1 - sign xy): sign 1 is the right sum formula, -1 the swapped one."""
    return (x + y) / (1 - sign * x * y)


def m2(v, p):
    """Swaps the sign in the denominator: (a + b)/(1 + ab) for a sum, (a - b)/(1 - ab) for a difference."""
    kind, a, b = _args(v, p)
    if kind == "sc_tan":
        raise ValueError("no tan^-1 sum")
    if kind == "sum":
        return atan(_plus(a, b, -1))
    if kind == "diff":
        return atan(_plus(a, -b, -1))
    t = _plus(a, a, -1)
    return atan(t if kind == "double" else _plus(t, b, -1))


def m3(v, p):
    """Uses tan^-1 a + tan^-1 b = tan^-1((a + b)/(1 - ab)) even when ab > 1 (drops the + pi)."""
    kind, a, b = _args(v, p)
    if kind != "sum" or not a * b > 1:
        raise ValueError("only for a sum with ab > 1")
    return atan(_plus(a, b, 1))


def m4(v, p):
    """Takes sin^-1 x + cos^-1 x = pi."""
    kind, a, b = _args(v, p)
    if kind != "sc_tan":
        raise ValueError("only with sin^-1 x + cos^-1 x")
    return atan(a) + pi


def m5(v, p):
    """Takes sin^-1 x + cos^-1 x = 1, from sin^2 + cos^2 = 1."""
    kind, a, b = _args(v, p)
    if kind != "sc_tan":
        raise ValueError("only with sin^-1 x + cos^-1 x")
    return atan(a) + 1


def m6(v, p):
    """Stops at the tangent: gives the value of (a + b)/(1 - ab), not the angle tan^-1 of it."""
    kind, a, b = _args(v, p)
    if kind == "sc_tan":
        return a + pi / 2
    if kind == "sum":
        return _plus(a, b, 1)
    if kind == "diff":
        return _plus(a, -b, 1)
    t = _plus(a, a, 1)
    return t if kind == "double" else _plus(t, b, 1)


MODELS = {"key": key, "C14-M1": m1, "C14-M2": m2, "C14-M3": m3, "C14-M4": m4, "C14-M5": m5, "C14-M6": m6}
