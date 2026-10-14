"""C04 Finding a circle from conditions: answer models (the key, and one per misconception).

Every model returns a polynomial in x, y (the circle is that polynomial = 0).
params["type"] picks the condition set; inputs (sympy) by type:
  three:     A, B, C       three points, as tuples
  line:      A, B, L       two points and a line L (a polynomial in x, y; L = 0) holding the centre
  diameters: L1, L2, area  two diameters (lines, as polynomials) and the circle's area, with pi = 22/7
  chord:     O, L, l       the centre O, a line L cutting a chord of length l
  axes:      a, b          through the origin, cutting chords a and b on the positive x- and y-axes
"""
from sympy import Rational, Symbol, expand, linsolve, sqrt, symbols

x, y = symbols("x y", real=True)
_h, _k, _g, _f, _c = symbols("h k g f c")


def circ(h, k, r2):
    """(x - h)^2 + (y - k)^2 - r2."""
    return expand((x - h) ** 2 + (y - k) ** 2 - r2)


def _d2(P, h, k):
    return (P[0] - h) ** 2 + (P[1] - k) ** 2


def _solve(eqs, unknowns):
    (sol,) = linsolve(eqs, unknowns)
    return sol


def _real(L):
    """A line read with plain symbols (draft_items) or real ones (the verifier), as real x, y."""
    return L.subs({Symbol("x"): x, Symbol("y"): y})


def _line_at(L, h, k):
    return _real(L).subs({x: h, y: k})


def centre_r2(v, p):
    """The circle's centre and r^2, straight from the definition (a centre equidistant from its points)."""
    t = p["type"]
    if t == "three":
        A, B, C = v["A"], v["B"], v["C"]
        h, k = _solve([expand(_d2(A, _h, _k) - _d2(B, _h, _k)), expand(_d2(A, _h, _k) - _d2(C, _h, _k))], [_h, _k])
        return h, k, _d2(A, h, k)
    if t == "line":
        A, B = v["A"], v["B"]
        h, k = _solve([expand(_d2(A, _h, _k) - _d2(B, _h, _k)), _line_at(v["L"], _h, _k)], [_h, _k])
        return h, k, _d2(A, h, k)
    if t == "diameters":
        h, k = _solve([_line_at(v["L1"], _h, _k), _line_at(v["L2"], _h, _k)], [_h, _k])
        return h, k, v["area"] / Rational(22, 7)
    if t == "chord":
        (h, k), L, l = v["O"], _real(v["L"]), v["l"]
        a, b = L.coeff(x), L.coeff(y)
        d2 = _line_at(L, h, k) ** 2 / (a**2 + b**2)  # (perpendicular distance from the centre)^2
        return h, k, d2 + (l / 2) ** 2
    if t == "axes":
        O, A, B = (0, 0), (v["a"], 0), (0, v["b"])
        h, k = _solve([expand(_d2(O, _h, _k) - _d2(A, _h, _k)), expand(_d2(O, _h, _k) - _d2(B, _h, _k))], [_h, _k])
        return h, k, h**2 + k**2
    raise ValueError(f"unknown type {t}")


def key(v, p):
    return circ(*centre_r2(v, p))


def m1(v, p):
    """Centre (h, k) written as g = h, f = k: x^2 + y^2 + 2hx + 2ky + c, i.e. (x + h)^2 + (y + k)^2 = r^2."""
    h, k, r2 = centre_r2(v, p)
    return circ(-h, -k, r2)


def m2(v, p):
    """A chord taken as a diameter."""
    t = p["type"]
    if t == "line":
        A, B = v["A"], v["B"]
        return expand((x - A[0]) * (x - B[0]) + (y - A[1]) * (y - B[1]))
    if t == "chord":
        h, k = v["O"]
        return circ(h, k, (v["l"] / 2) ** 2)
    raise ValueError("no chord to take as a diameter")


def m3(v, p):
    """r on the right-hand side instead of r^2."""
    h, k, r2 = centre_r2(v, p)
    return circ(h, k, sqrt(r2))


def m4(v, p):
    """The whole chord used where the perpendicular from the centre gives half of it."""
    t = p["type"]
    if t == "chord":
        h, k, r2 = centre_r2(v, p)
        return circ(h, k, r2 - (v["l"] / 2) ** 2 + v["l"] ** 2)
    if t == "axes":
        a, b = v["a"], v["b"]
        return circ(a, b, a**2 + b**2)
    raise ValueError("no chord length in this question")


def m5(v, p):
    """Substitutes each point as x1^2 + y1^2 + g x1 + f y1 + c = 0 (the 2s dropped), then writes 2gx + 2fy."""
    if p["type"] != "three":
        raise ValueError("only for a circle through three points")
    eqs = [P[0] ** 2 + P[1] ** 2 + _g * P[0] + _f * P[1] + _c for P in (v["A"], v["B"], v["C"])]
    g, f, c = _solve(eqs, [_g, _f, _c])
    return expand(x**2 + y**2 + 2 * g * x + 2 * f * y + c)


def m6(v, p):
    """c = r^2 - g^2 - f^2 instead of g^2 + f^2 - r^2."""
    h, k, r2 = centre_r2(v, p)
    return expand(x**2 + y**2 - 2 * h * x - 2 * k * y + r2 - h**2 - k**2)


MODELS = {"key": key, "C04-M1": m1, "C04-M2": m2, "C04-M3": m3, "C04-M4": m4, "C04-M5": m5, "C04-M6": m6}
