"""C06 All six from one: answer models (the key, and one per misconception).

One or two angles, each named by a label (A, B). For each label L, inputs[L] is the given ratio's
value, or, for given "cosroot", inputs p2, p1, p0 are the coefficients of p2 c^2 + p1 c + p0 = 0,
one of whose roots is cos L.
params:
  given  the given ratio of each angle, comma-separated in label order: sin | cos | tan | cot | sec | csc | cosroot
  q      the quadrant of each angle, comma-separated: 1 | 2 | 3 | 4
  ask    an expression in sinA, cosA, tanA, cotA, secA, cscA (and ...B), e.g. "tanA" or "4*cscA + 5*cosA"

The student models follow the book's route: from sin (or cos) the other one by sin^2 + cos^2 = 1;
from sec, tan by tan^2 = sec^2 - 1, then sin = tan cos; from tan, sec by sec^2 = 1 + tan^2;
from cot, cosec by cosec^2 = 1 + cot^2; from cosec, cot. A model returns the angle's (sin, cos)
as the student has them, plus the student's rule for the other four.
"""
from sympy import Symbol, sign, solve, sqrt, sympify

_LABELS = ["A", "B"]


def _quad_signs(q):
    """(sign of x, sign of y) in quadrant q."""
    return {1: (1, 1), 2: (-1, 1), 3: (-1, -1), 4: (1, -1)}[int(q)]


def _angles(v, p):
    givens = p["given"].split(",")
    qs = p["q"].split(",")
    return [(_LABELS[i], g.strip(), int(qs[i])) for i, g in enumerate(givens)]


def _cos_roots(v):
    c = Symbol("c")
    return [r for r in solve(v["p2"] * c**2 + v["p1"] * c + v["p0"], c) if r.is_real and -1 <= r <= 1]


def _true_ratios(s, c):
    return dict(sin=s, cos=c, tan=s / c, cot=c / s, sec=1 / c, csc=1 / s)


def _evaluate(v, p, ratios_of):
    """ratios_of(label, given, value, q) -> dict of the six ratios as the model has them."""
    env = {}
    for label, g, q in _angles(v, p):
        val = None if g == "cosroot" else v[label]
        for name, x in ratios_of(label, g, val, q, v).items():
            env[name + label] = x
    return sympify(p["ask"], locals=env).simplify()


def _route(g, val, q, root, v, pick_cos=None):
    """(sin, cos) by the book's route; root(square, ratio_name) turns a square into the ratio's value."""
    if g == "cosroot":
        g, val = "cos", pick_cos
    if g == "sin":
        return val, root(1 - val**2, "cos")
    if g == "cos":
        return root(1 - val**2, "sin"), val
    if g == "tan":
        c = 1 / root(1 + val**2, "sec")
        return val * c, c
    if g == "cot":
        s = 1 / root(1 + val**2, "csc")
        return s, val * s
    if g == "sec":
        c = 1 / val
        return root(val**2 - 1, "tan") * c, c
    if g == "csc":
        s = 1 / val
        return s, root(val**2 - 1, "cot") * s
    raise ValueError(f"unknown given ratio {g}")


_SIGN_OF = {  # which co-ordinate's sign each ratio carries: x for cos/sec, y for sin/csc, x*y for tan/cot
    "cos": lambda sx, sy: sx, "sec": lambda sx, sy: sx,
    "sin": lambda sx, sy: sy, "csc": lambda sx, sy: sy,
    "tan": lambda sx, sy: sx * sy, "cot": lambda sx, sy: sx * sy,
}


def _signed_root(q):
    sx, sy = _quad_signs(q)
    return lambda sq, name: _SIGN_OF[name](sx, sy) * sqrt(sq)


def _right_cos(v, q):
    sx, _ = _quad_signs(q)
    roots = [r for r in _cos_roots(v) if sign(r) == sx]
    if len(roots) != 1:
        raise ValueError(f"{len(roots)} roots fit the quadrant")
    return roots[0]


def key(v, p):
    """From the definition: a point (x, y) on the terminal arm, with the quadrant's signs, and r = sqrt(x^2 + y^2)."""
    def ratios(label, g, val, q, v):
        sx, sy = _quad_signs(q)
        if g == "cosroot":
            g, val = "cos", _right_cos(v, q)
        if g == "sin":
            x, y = sx * sqrt(1 - val**2), val
        elif g == "cos":
            x, y = val, sy * sqrt(1 - val**2)
        elif g == "tan":
            x, y = sx, val * sx
        elif g == "cot":
            x, y = val * sy, sy
        elif g == "sec":
            x, y = 1 / val, sy * sqrt(1 - 1 / val**2)
        elif g == "csc":
            x, y = sx * sqrt(1 - 1 / val**2), 1 / val
        else:
            raise ValueError(f"unknown given ratio {g}")
        if sign(x) != sx or sign(y) != sy:
            raise ValueError("the given ratio's sign doesn't fit the quadrant")
        r = sqrt(x**2 + y**2)
        return dict(sin=y / r, cos=x / r, tan=y / x, cot=x / y, sec=r / x, csc=r / y)

    return _evaluate(v, p, ratios)


def m1(v, p):
    """Ignores the quadrant: every square root is taken positive (from a quadratic, the positive
    root is taken for cos); the given ratio keeps its own sign and the rest follow from it."""
    def ratios(label, g, val, q, v):
        pick = max(_cos_roots(v)) if g == "cosroot" else None
        s, c = _route(g, val, q, lambda sq, name: sqrt(sq), v, pick)
        return _true_ratios(s, c)

    return _evaluate(v, p, ratios)


def m2(v, p):
    """Inverts the quotient: takes tan = cos/sin and cot = sin/cos (x over y). sin and cos are right."""
    def ratios(label, g, val, q, v):
        if g in ("tan", "cot"):
            raise ValueError("with tan or cot given, the quotient isn't used to find them")
        pick = _right_cos(v, q) if g == "cosroot" else None
        s, c = _route(g, val, q, _signed_root(q), v, pick)
        return dict(sin=s, cos=c, tan=c / s, cot=s / c, sec=1 / c, csc=1 / s)

    return _evaluate(v, p, ratios)


def m3(v, p):
    """Pairs the reciprocals the wrong way: sec = 1/sin and cosec = 1/cos. Given sec, takes sin = 1/sec
    (given cosec, cos = 1/cosec), finds the other by sin^2 + cos^2 = 1 with the quadrant's sign; from
    tan (cot) finds sec (cosec) by the identity, then reads it as 1/sin (1/cos)."""
    def ratios(label, g, val, q, v):
        root = _signed_root(q)
        if g == "cosroot":
            g, val = "cos", _right_cos(v, q)
        if g == "sin":
            s, c = val, root(1 - val**2, "cos")
        elif g == "cos":
            s, c = root(1 - val**2, "sin"), val
        elif g == "sec":
            s = 1 / val
            c = root(1 - s**2, "cos")
        elif g == "csc":
            c = 1 / val
            s = root(1 - c**2, "sin")
        elif g == "tan":
            s = 1 / root(1 + val**2, "sin")  # sec, read as 1/sin, takes sin's sign
            c = s / val
        elif g == "cot":
            c = 1 / root(1 + val**2, "cos")  # cosec, read as 1/cos, takes cos's sign
            s = c / val
        else:
            raise ValueError(f"unknown given ratio {g}")
        return dict(sin=s, cos=c, tan=s / c, cot=c / s, sec=1 / s, csc=1 / c)

    return _evaluate(v, p, ratios)


def m4(v, p):
    """Stops at the square: takes the value of cos^2 (or tan^2, sec^2, ...) as the ratio itself,
    with the quadrant's sign, and carries on."""
    def ratios(label, g, val, q, v):
        r = _signed_root(q)
        pick = _right_cos(v, q) if g == "cosroot" else None
        s, c = _route(g, val, q, lambda sq, name: r(sq, name) ** 2 * sign(r(sq, name)), v, pick)
        return _true_ratios(s, c)

    return _evaluate(v, p, ratios)


MODELS = {"key": key, "C06-M1": m1, "C06-M2": m2, "C06-M3": m3, "C06-M4": m4}
