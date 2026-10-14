"""C02 Shift of origin: answer models (the key, and one per misconception).

The origin moves to O'(h, k), axes parallel. Old co-ordinates (x, y), new (X, Y).
Each model is a rule giving the old co-ordinates from the new ones:
  key: x = X + h, y = Y + k   (the definition: X is measured from O' to the point)
  M1:  x = X - h, y = Y - k   (shifts the wrong way)
  M2:  x = h - X, y = k - Y   (measures from the point to O': X = h - x)
  M3:  x = X + k, y = Y + h   (pairs h with y and k with x)
  M4:  the key's rule, but expands (X + h)^2 as X^2 + h^2 (equations only)

params["ask"] picks the question:
  new:      inputs h, k, a, b (old point)      -> Tuple of new co-ordinates
  old:      inputs h, k, a, b (new point)      -> Tuple of old co-ordinates
  origin:   inputs a, b (old), A, B (new)      -> Tuple (h, k)
  equation: inputs h, k; params["f"] the old locus f(x, y) = 0
            -> polynomial in x, y standing for the new X, Y (= 0)
"""
from sympy import Poly, Tuple, expand, solve, symbols, sympify

x, y = symbols("x y", real=True)
_LOCALS = {"x": x, "y": y}

RULES = {
    "key": lambda X, Y, h, k: (X + h, Y + k),
    "C02-M1": lambda X, Y, h, k: (X - h, Y - k),
    "C02-M2": lambda X, Y, h, k: (h - X, k - Y),
    "C02-M3": lambda X, Y, h, k: (X + k, Y + h),
}


def _solve_new(rule, a, b, h, k):
    """New co-ordinates (X, Y) whose old co-ordinates under `rule` are (a, b)."""
    X, Y = symbols("X Y")
    ox, oy = rule(X, Y, h, k)
    s = solve([ox - a, oy - b], [X, Y], dict=True)[0]
    return Tuple(s[X], s[Y])


def _solve_origin(rule, a, b, A, B):
    """The (h, k) for which `rule` sends new (A, B) to old (a, b)."""
    h, k = symbols("h k")
    ox, oy = rule(A, B, h, k)
    s = solve([ox - a, oy - b], [h, k], dict=True)[0]
    return Tuple(s[h], s[k])


def _apply(rule, v, p):
    ask = p.get("ask")
    if ask == "new":
        return _solve_new(rule, v["a"], v["b"], v["h"], v["k"])
    if ask == "old":
        return Tuple(*rule(v["a"], v["b"], v["h"], v["k"]))
    if ask == "origin":
        return _solve_origin(rule, v["a"], v["b"], v["A"], v["B"])
    if ask == "equation":
        f = sympify(p["f"], locals=_LOCALS)
        X, Y = symbols("X Y", real=True)
        ox, oy = rule(X, Y, v["h"], v["k"])
        g = f.subs({x: ox, y: oy}, simultaneous=True)
        return expand(g.subs({X: x, Y: y}, simultaneous=True))
    raise ValueError(f"unknown ask {ask!r}")


def key(v, p):
    return _apply(RULES["key"], v, p)


def m1(v, p):
    return _apply(RULES["C02-M1"], v, p)


def m2(v, p):
    return _apply(RULES["C02-M2"], v, p)


def m3(v, p):
    if v.get("h") is not None and v.get("h") == v.get("k"):
        raise ValueError("h = k: swapping them changes nothing")
    return _apply(RULES["C02-M3"], v, p)


def m4(v, p):
    """Substitutes x = X + h, y = Y + k but writes (X + h)^n as X^n + h^n for n >= 2."""
    if p.get("ask") != "equation":
        raise ValueError("only an equation has a square to expand")
    f = Poly(sympify(p["f"], locals=_LOCALS), x, y)
    if all(i < 2 and j < 2 for i, j in f.monoms()):
        raise ValueError("no square term to expand")
    X, Y = symbols("X Y", real=True)
    h, k = v["h"], v["k"]

    def power(var, s, n):
        return var**n + s**n if n >= 2 else (var + s) ** n

    g = sum(c * power(X, h, i) * power(Y, k, j) for (i, j), c in zip(f.monoms(), f.coeffs()))
    return expand(g.subs({X: x, Y: y}, simultaneous=True))


MODELS = {"key": key, "C02-M1": m1, "C02-M2": m2, "C02-M3": m3, "C02-M4": m4}
