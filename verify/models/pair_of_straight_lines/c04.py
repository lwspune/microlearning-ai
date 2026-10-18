"""C04 Angle between the lines: answer models (the key, and one per misconception).

Inputs: a, c, b, the coefficients of x^2, xy, y^2 in ax^2 + cxy + by^2 = 0 (so c = 2h).
They may contain the unknown k. params["ask"]:
  "tan"   tan(theta) for the acute angle theta between the lines
  "angle" the acute angle theta itself, in radians
  "perp"  the value of k that makes the lines perpendicular
  "coinc" the value of k that makes the lines coincident
"""
from sympy import Abs, Symbol, atan, simplify, solve, sqrt

k = Symbol("k")
_m = Symbol("m")


def _one(eq):
    """The single value of k solving eq = 0."""
    sols = solve(eq, k)
    if len(sols) != 1:
        raise ValueError(f"expected one k, got {sols}")
    return simplify(sols[0])


def _slopes(v):
    """The two slopes: roots of b m^2 + c m + a = 0 (y = mx put into the equation, divided by x^2)."""
    if v["b"] == 0:
        raise ValueError("a line is vertical (b = 0)")
    r = solve(v["b"] * _m**2 + v["c"] * _m + v["a"], _m)
    if len(r) == 1:
        r = [r[0], r[0]]
    return r


def key(v, p):
    """Straight from the slopes: tan(theta) = |(m1 - m2) / (1 + m1 m2)|; m1 m2 = -1; m1 = m2."""
    ask = p["ask"]
    if ask in ("tan", "angle"):
        m1, m2 = _slopes(v)
        t = simplify(Abs((m1 - m2) / (1 + m1 * m2)))
        return t if ask == "tan" else simplify(atan(t))
    if ask == "perp":
        # m1 m2 = -1 with the slopes found from b m^2 + c m + a = 0
        m1, m2 = solve(v["b"] * _m**2 + v["c"] * _m + v["a"], _m)
        return _one(simplify(m1 * m2 + 1))
    if ask == "coinc":
        # equal slopes: the quadratic in m has a repeated root (zero discriminant)
        return _one(v["c"] ** 2 - 4 * v["a"] * v["b"])
    raise ValueError(ask)


def _tan(h, a, b, two=2, sign=-1):
    return simplify(Abs(two * sqrt(h**2 + sign * a * b) / (a + b)))


def _angle_or_tan(t, p):
    if p["ask"] == "tan":
        return t
    if p["ask"] == "angle":
        return simplify(atan(t))
    raise ValueError("this mistake is about the angle formula")


def m1(v, p):
    """Takes h as the whole coefficient of xy (forgets that the xy term is 2hxy)."""
    a, h, b = v["a"], v["c"], v["b"]
    if p["ask"] == "coinc":
        return _one(h**2 - a * b)
    if p["ask"] in ("tan", "angle"):
        return _angle_or_tan(_tan(h, a, b), p)
    raise ValueError("h plays no part in a + b = 0")


def m2(v, p):
    """Swaps the two tests: perpendicular when h^2 = ab, coincident when a + b = 0."""
    a, h, b = v["a"], v["c"] / 2, v["b"]
    if p["ask"] == "perp":
        return _one(h**2 - a * b)
    if p["ask"] == "coinc":
        return _one(a + b)
    raise ValueError("only for the perpendicular and coincident tests")


def m3(v, p):
    """Applies m1 m2 = -1 to the coefficients themselves: perpendicular when ab = -1."""
    if p["ask"] != "perp":
        raise ValueError("only for the perpendicular test")
    return _one(v["a"] * v["b"] + 1)


def m4(v, p):
    """Takes the product of slopes as -a/b, so -a/b = -1 gives a = b."""
    if p["ask"] != "perp":
        raise ValueError("only for the perpendicular test")
    return _one(v["a"] - v["b"])


def m5(v, p):
    """Drops the 2 in the numerator: tan(theta) = |sqrt(h^2 - ab) / (a + b)|."""
    return _angle_or_tan(_tan(v["c"] / 2, v["a"], v["b"], two=1), p)


def m6(v, p):
    """Sign slip under the root: h^2 + ab in place of h^2 - ab."""
    a, h, b = v["a"], v["c"] / 2, v["b"]
    if p["ask"] == "coinc":
        return _one(h**2 + a * b)
    t = _tan(h, a, b, sign=1)
    if not t.is_real:
        raise ValueError("h^2 + ab < 0")
    return _angle_or_tan(t, p)


MODELS = {"key": key, "C04-M1": m1, "C04-M2": m2, "C04-M3": m3, "C04-M4": m4, "C04-M5": m5, "C04-M6": m6}
