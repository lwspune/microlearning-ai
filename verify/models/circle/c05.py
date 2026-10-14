"""C05 Parametric form: answer models (the key, and one per misconception).

Two kinds of item:
  forward (params want="param"): inputs eq, a polynomial in x, y (the circle is eq = 0);
    the answer is the pair (x(θ), y(θ)) as a Tuple, in the book's form x = h + r cos θ, y = k + r sin θ.
  reverse (params want="centre_radius" or "equation"): the circle x = a + p·xf(θ), y = b + q·yf(θ),
    inputs a, p, b, q, params xf, yf (each "cos" or "sin"); the answer is Tuple(h, k, r) or the
    Cartesian polynomial (x − h)² + (y − k)² − r² (= 0).
"""
from sympy import Abs, Poly, Symbol, Tuple, cos, expand, powdenest, simplify, sin, sqrt

X, Y = Symbol("x", real=True), Symbol("y", real=True)  # the verifier reads option values with real x, y
TH = Symbol("theta")


def _root(v):
    """√v, with √(m²/2) taken as m/√2 (the book's m is positive)."""
    return powdenest(sqrt(simplify(v)), force=True)


def _coeffs(v):
    """(a, A, B, C): eq = a(x² + y²) + A x + B y + C, checked to be a circle's shape."""
    eq = expand(v["eq"].subs({Symbol("x"): X, Symbol("y"): Y}))
    pl = Poly(eq, X, Y)
    a = pl.coeff_monomial(X**2)
    if simplify(a - pl.coeff_monomial(Y**2)) != 0 or pl.coeff_monomial(X * Y) != 0:
        raise ValueError("not a circle")
    return a, pl.coeff_monomial(X), pl.coeff_monomial(Y), pl.coeff_monomial(1)


def _param(h, k, r):
    return Tuple(h + r * cos(TH), k + r * sin(TH))


def _forward(v, p, divide=True, c_sign=-1):
    """Centre and radius of eq = 0 by completing the square (divide: by the x² coefficient first)."""
    a, A, B, C = _coeffs(v)
    d = a if divide else 1
    g, f, c = A / (2 * d), B / (2 * d), C / d
    r2 = simplify(g**2 + f**2 + c_sign * c)
    if r2.is_number and r2 <= 0:
        raise ValueError("no real radius")
    return -g, -f, r2


def _trig(name):
    return {"cos": cos(TH), "sin": sin(TH)}[name]


def _reverse_true(v, p):
    """(h, k, r) of x = a + p·xf(θ), y = b + q·yf(θ), found by eliminating θ."""
    if p["xf"] == p["yf"]:
        raise ValueError("both cos or both sin: a line segment, not a circle")
    if simplify(v["p"] ** 2 - v["q"] ** 2) != 0:
        raise ValueError("unequal coefficients: an ellipse")
    # ((x − a)/p)² + ((y − b)/q)² = cos²θ + sin²θ = 1, so (x − a)² + (y − b)² = p².
    fx, fy = _trig(p["xf"]), _trig(p["yf"])
    xt, yt = v["a"] + v["p"] * fx, v["b"] + v["q"] * fy
    assert simplify((xt - v["a"]) ** 2 + (yt - v["b"]) ** 2 - v["p"] ** 2) == 0
    return v["a"], v["b"], Abs(v["p"])


def _reverse_answer(h, k, r, p):
    if p["want"] == "centre_radius":
        return Tuple(h, k, r)
    if p["want"] == "equation":
        return expand((X - h) ** 2 + (Y - k) ** 2 - r**2)
    raise ValueError(f"unknown want {p['want']}")


def key(v, p):
    if p["want"] == "param":
        h, k, r2 = _forward(v, p)
        return _param(h, k, _root(r2))
    return _reverse_answer(*_reverse_true(v, p), p)


def m1(v, p):
    """Mixes up r and r²: puts r² in front of cos θ, or reads the coefficient of cos θ as r²."""
    if p["want"] == "param":
        h, k, r2 = _forward(v, p)
        if simplify(r2 - 1) == 0:
            raise ValueError("r = r² when r = 1")
        return _param(h, k, r2)
    h, k, r = _reverse_true(v, p)
    if simplify(r - 1) == 0:
        raise ValueError("r = r² when r = 1")
    return _reverse_answer(h, k, _root(r), p)


def m2(v, p):
    """Takes the centre with the wrong signs: (g, f) for (−g, −f), (−3, 4) from (x − 3)², x = 3 + … read as h = −3."""
    if p["want"] == "param":
        h, k, r2 = _forward(v, p)
        if h == 0 and k == 0:
            raise ValueError("centre at the origin")
        return _param(-h, -k, _root(r2))
    h, k, r = _reverse_true(v, p)
    if h == 0 and k == 0:
        raise ValueError("centre at the origin")
    return _reverse_answer(-h, -k, r, p)


def m3(v, p):
    """Writes x = r cos θ, y = r sin θ for every circle, dropping the centre."""
    if p["want"] != "param":
        raise ValueError("forward items only")
    h, k, r2 = _forward(v, p)
    if h == 0 and k == 0:
        raise ValueError("centre at the origin: same as the key")
    return _param(0, 0, _root(r2))


def m4(v, p):
    """Radius from the general form as √(g² + f² + c): the sign of c slips."""
    if p["want"] != "param":
        raise ValueError("forward items only")
    _, _, _, C = _coeffs(v)
    if C == 0:
        raise ValueError("c = 0: same as the key")
    h, k, r2 = _forward(v, p, c_sign=+1)
    return _param(h, k, _root(r2))


def m5(v, p):
    """Reads g, f, c from ax² + ay² + … without first dividing by a."""
    if p["want"] != "param":
        raise ValueError("forward items only")
    a, _, _, _ = _coeffs(v)
    if a == 1:
        raise ValueError("x² coefficient already 1")
    h, k, r2 = _forward(v, p, divide=False)
    return _param(h, k, _root(r2))


def m6(v, p):
    """Believes the equation holding cos θ always gives x: takes its constant as h."""
    if p["want"] == "param":
        raise ValueError("reverse items only")
    if p["xf"] == "cos":
        raise ValueError("cos already in the x-equation: same as the key")
    h, k, r = _reverse_true(v, p)
    return _reverse_answer(k, h, r, p)


MODELS = {"key": key, "C05-M1": m1, "C05-M2": m2, "C05-M3": m3, "C05-M4": m4, "C05-M5": m5, "C05-M6": m6}
