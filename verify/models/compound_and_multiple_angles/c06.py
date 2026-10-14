"""C06 Triple angles: answer models (the key, and one per misconception).

params["form"] says what the item asks:
  value    params f (sin, cos or tan); input r is f(A) for an acute angle A. Asks f(3A).
  expr     params expr (a name in EXPRS): an expression in sin x, cos x, sin 3x, cos 3x. Asks what it equals.
  product  params f (cos or sin): f(x) f(60 deg - x) f(60 deg + x). Asks what it equals.

The key never uses the triple-angle formulas: it cubes cos A + i sin A (or 1 + i tan A), whose
argument is 3A, and reads sin, cos or tan of 3A off the parts; expressions use sympy's own sin(3x).
Each misconception is the student's own formula for sin 3A, cos 3A or tan 3A, fed the same ratios.
"""
from sympy import I, Symbol, cos, expand, im, pi, re, simplify, sin, sqrt

x = Symbol("x", real=True)  # the verifier reads option values with a real x


def _ratios(v, p):
    """sin A, cos A, tan A for the acute angle A the item gives."""
    f, r = p["f"], v["r"]
    if f == "sin":
        s, c = r, sqrt(1 - r**2)
    elif f == "cos":
        s, c = sqrt(1 - r**2), r
    else:
        s, c = r / sqrt(1 + r**2), 1 / sqrt(1 + r**2)
    return s, c, s / c


# Each rule maps (sin A, cos A, tan A) to the student's (sin 3A, cos 3A, tan 3A); None where it has no version.
def _m1(s, c, t):
    return 3 * s, 3 * c, 3 * t


def _m2(s, c, t):
    return 4 * s**3 - 3 * s, 3 * c - 4 * c**3, (t**3 - 3 * t) / (1 - 3 * t**2)


def _m3(s, c, t):
    return 3 * s - s**3, c**3 - 3 * c, None


def _m4(s, c, t):
    return None, None, (3 * t - t**3) / (1 - t**2)


IDX = {"sin": 0, "cos": 1, "tan": 2}

# The book's identities, as functions of (sin x, cos x, sin 3x, cos 3x).
EXPRS = {
    # 3.3.2 SolvedEx.4: (cos^3 x - cos 3x)/cos x + (sin^3 x + sin 3x)/sin x
    "ex4": lambda s, c, S, C: (c**3 - C) / c + (s**3 + S) / s,
    # Ex 3.3 Q3(ii): (sin 3x + sin x) sin x + (cos 3x - cos x) cos x
    "q3ii": lambda s, c, S, C: (S + s) * s + (C - c) * c,
}


def _student(rule, v, p):
    form = p["form"]
    if form == "value":
        out = rule(*_ratios(v, p))[IDX[p["f"]]]
        if out is None:
            raise ValueError(f"no {p['f']} 3A version of this mistake")
        return simplify(out)
    if form == "expr":
        s, c = sin(x), cos(x)
        S, C, _ = rule(s, c, s / c)
        if S is None:
            raise ValueError("a tan mistake: the expression has no tan 3x")
        return simplify(EXPRS[p["expr"]](s, c, S, C))
    raise ValueError(f"this mistake is about the formula, not form {form}")


def key(v, p):
    form = p["form"]
    if form == "value":
        s, c, t = _ratios(v, p)
        z = expand((c + I * s) ** 3)  # argument 3A
        return simplify({"sin": im(z), "cos": re(z), "tan": im(z) / re(z)}[p["f"]])
    if form == "expr":
        return simplify(EXPRS[p["expr"]](sin(x), cos(x), sin(3 * x), cos(3 * x)))
    if form == "product":
        f = {"sin": sin, "cos": cos}[p["f"]]
        return f(x) * f(pi / 3 - x) * f(pi / 3 + x)
    raise ValueError(f"unknown form {form}")


def _f3(p):
    return {"sin": sin, "cos": cos}[p["f"]](3 * x)


def m1(v, p):
    """Lets the 3 come out: sin 3A = 3 sin A, cos 3A = 3 cos A, tan 3A = 3 tan A."""
    return _student(_m1, v, p)


def m2(v, p):
    """Remembers the terms but subtracts them in the wrong order: sin 3A = 4 sin^3 A - 3 sin A,
    cos 3A = 3 cos A - 4 cos^3 A, tan 3A = (tan^3 A - 3 tan A)/(1 - 3 tan^2 A). Each is minus the truth.
    On a product it reduces to (1/4)(4 cos^3 x - 3 cos x) correctly, then names that bracket -cos 3x."""
    if p["form"] == "product":
        return -_f3(p) / 4
    return _student(_m2, v, p)


def m3(v, p):
    """Drops the 4 on the cube term: sin 3A = 3 sin A - sin^3 A, cos 3A = cos^3 A - 3 cos A."""
    return _student(_m3, v, p)


def m4(v, p):
    """Takes tan 2A's denominator: tan 3A = (3 tan A - tan^3 A)/(1 - tan^2 A)."""
    return _student(_m4, v, p)


def m5(v, p):
    """Forgets the 1/4: cos x cos(60 deg - x) cos(60 deg + x) = cos 3x (sin likewise)."""
    if p["form"] != "product":
        raise ValueError("only for the 60-degree product")
    return _f3(p)


def m6(v, p):
    """Puts the 4 on the wrong side: 4 cos x cos(60 deg - x) cos(60 deg + x) = cos 3x read as
    the product = 4 cos 3x (sin likewise)."""
    if p["form"] != "product":
        raise ValueError("only for the 60-degree product")
    return 4 * _f3(p)


MODELS = {"key": key, "C06-M1": m1, "C06-M2": m2, "C06-M3": m3, "C06-M4": m4, "C06-M5": m5, "C06-M6": m6}
