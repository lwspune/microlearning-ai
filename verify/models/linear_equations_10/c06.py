"""C06 Cramer's rule: answer models (the key, and one per misconception).

Two kinds of item:
- equations: inputs a1, b1, c1, a2, b2, c2, the pair rewritten as a1 x + b1 y = c1, a2 x + b2 y = c2;
  params ask = "D" | "Dx" | "Dy" | "x" | "y" | "xy" (the point x + y*I), and optionally
  wrongside = "c1,b2": the terms printed on the other side of "=" (a student who doesn't
  rewrite first keeps their printed sign).
- given values: inputs Dx, Dy, D (Dy optional); params ask = "x" | "y".
The key solves the pair directly (sympy) and takes determinants with Matrix.det, never by
Cramer's formulas.
"""
from sympy import I, Abs, Matrix, symbols, solve

_x, _y = symbols("x y")
_EQ = ("a1", "b1", "c1", "a2", "b2", "c2")


def _coeffs(v, p, flip=False):
    c = {k: v[k] for k in _EQ}
    if flip:
        wrong = [s for s in p.get("wrongside", "").split(",") if s]
        if not wrong:
            raise ValueError("every term is already on its own side")
        for s in wrong:
            c[s] = -c[s]
    return c


def _det(m, rule="ad-bc"):
    (a, b), (c, d) = m
    if rule == "ad-bc":
        return Matrix(m).det()
    if rule == "ad+bc":
        return a * d + b * c
    if rule == "bc-ad":
        return b * c - a * d
    raise ValueError(rule)


def _dets(c, rule="ad-bc"):
    """D, Dx, Dy for the coefficients c, each by the given 2 x 2 rule."""
    D = _det([[c["a1"], c["b1"]], [c["a2"], c["b2"]]], rule)
    Dx = _det([[c["c1"], c["b1"]], [c["c2"], c["b2"]]], rule)
    Dy = _det([[c["a1"], c["c1"]], [c["a2"], c["c2"]]], rule)
    return D, Dx, Dy


def _answer(ask, D, Dx, Dy, xf=lambda D, Dk: Dk / D):
    """What the item asks for, from a student's D, Dx, Dy and their x = f(D, Dx)."""
    if ask == "D":
        return D
    if ask == "Dx":
        return Dx
    if ask == "Dy":
        return Dy
    if D == 0:
        raise ValueError("D = 0")
    x, y = xf(D, Dx), xf(D, Dy)
    return {"x": x, "y": y, "xy": x + y * I}[ask]


def _given(v):
    return "a1" not in v


def key(v, p):
    ask = p["ask"]
    if _given(v):
        return v["Dx"] / v["D"] if ask == "x" else v["Dy"] / v["D"]
    c = _coeffs(v, p)
    if ask in ("D", "Dx", "Dy"):
        return _dets(c)[("D", "Dx", "Dy").index(ask)]
    sol = solve([c["a1"] * _x + c["b1"] * _y - c["c1"], c["a2"] * _x + c["b2"] * _y - c["c2"]], [_x, _y], dict=True)
    if len(sol) != 1:
        raise ValueError("not exactly one solution")
    x, y = sol[0][_x], sol[0][_y]
    return {"x": x, "y": y, "xy": x + y * I}[ask]


def m1(v, p):
    """Mixes up D_x and D_y: puts the constants in the wrong column, so x = D_y / D, y = D_x / D."""
    ask = p["ask"]
    if _given(v):
        return v["Dy"] / v["D"] if ask == "x" else v["Dx"] / v["D"]
    D, Dx, Dy = _dets(_coeffs(v, p))
    return _answer(ask, D, Dy, Dx)


def m2(v, p):
    """Turns the fraction upside down: x = D / D_x, y = D / D_y."""
    ask = p["ask"]
    if _given(v):
        return v["D"] / (v["Dx"] if ask == "x" else v["Dy"])
    D, Dx, Dy = _dets(_coeffs(v, p))
    if ask in ("D", "Dx", "Dy"):
        raise ValueError("no division")
    return _answer(ask, D, Dx, Dy, xf=lambda D, Dk: D / Dk)


def m3(v, p):
    """Reads the numbers as printed, without first rewriting the pair as ax + by = c."""
    if _given(v):
        raise ValueError("no equations")
    return _answer(p["ask"], *_dets(_coeffs(v, p, flip=True)))


def m4(v, p):
    """Adds the two products: ad + bc."""
    if _given(v):
        raise ValueError("no determinants to evaluate")
    return _answer(p["ask"], *_dets(_coeffs(v, p), "ad+bc"))


def m5(v, p):
    """Subtracts the products the wrong way round: bc - ad."""
    if _given(v):
        raise ValueError("no determinants to evaluate")
    if p["ask"] not in ("D", "Dx", "Dy"):
        raise ValueError("the sign error cancels in D_x / D")
    return _answer(p["ask"], *_dets(_coeffs(v, p), "bc-ad"))


def m6(v, p):
    """Ignores the sign of D when dividing: x = D_x / |D|."""
    if not _given(v):
        raise ValueError("used on given-value items")
    if v["D"] > 0:
        raise ValueError("D > 0: same as the key")
    return (v["Dx"] if p["ask"] == "x" else v["Dy"]) / Abs(v["D"])


MODELS = {"key": key, "C06-M1": m1, "C06-M2": m2, "C06-M3": m3, "C06-M4": m4, "C06-M5": m5, "C06-M6": m6}
