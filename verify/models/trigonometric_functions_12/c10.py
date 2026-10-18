"""C10 Half-angle formulae and area: answer models (the key, and one per misconception).

Inputs: a, b, c, the sides of triangle ABC (a opposite A, b opposite B, c opposite C).
Params: f, what is asked: "sin", "cos" or "tan" of half an angle, or "area";
        angle, the angle ("A", "B" or "C"; ignored for the area).

The key never uses s: it finds the angle's cosine by the cosine rule, then
sin(X/2) = sqrt((1 - cos X)/2), cos(X/2) = sqrt((1 + cos X)/2), and the area as (1/2) b c sin A.
The wrong models use the s-formulae with one mistake each.
"""
from sympy import Rational, radsimp, sqrt, sqrtdenest

HALF = Rational(1, 2)


def _tidy(x):
    return radsimp(sqrtdenest(x))


def _sides(v, angle):
    """(opposite side, the two sides enclosing the angle)."""
    a, b, c = v["a"], v["b"], v["c"]
    if not (a + b > c and b + c > a and c + a > b):
        raise ValueError("not a triangle")
    return {"A": (a, b, c), "B": (b, c, a), "C": (c, a, b)}[angle]


def key(v, p):
    f = p["f"]
    if f == "area":
        a, b, c = v["a"], v["b"], v["c"]
        cosA = (b**2 + c**2 - a**2) / (2 * b * c)
        return _tidy(HALF * b * c * sqrt(1 - cosA**2))
    x, y, z = _sides(v, p["angle"])
    cosX = (y**2 + z**2 - x**2) / (2 * y * z)
    s2, c2 = sqrt((1 - cosX) / 2), sqrt((1 + cosX) / 2)
    return _tidy({"sin": s2, "cos": c2, "tan": s2 / c2}[f])


def _formulae(x, y, z, s, root=True, swap=False, drop_s=False):
    """sin, cos, tan of half the angle opposite x (enclosed by y and z), by the s-formulae."""
    r = sqrt if root else (lambda t: t)
    top_s = (s - y) * (s - z)
    top_c = (1 if drop_s else s) * (s - x)
    if swap:
        top_s, top_c = top_c, top_s
    sn, cs = r(top_s / (y * z)), r(top_c / (y * z))
    return {"sin": sn, "cos": cs, "tan": sn / cs}


def _wrong(v, p, perimeter=False, root=True, swap=False, drop_s=False, letters=None):
    a, b, c = v["a"], v["b"], v["c"]
    s = (a + b + c) if perimeter else (a + b + c) / 2
    f = p["f"]
    if f == "area":
        if swap or letters:
            raise ValueError("no half angle in Heron's formula")
        prod = (1 if drop_s else s) * (s - a) * (s - b) * (s - c)
        return _tidy(sqrt(prod) if root else prod)
    x, y, z = _sides(v, letters or p["angle"])
    return _tidy(_formulae(x, y, z, s, root=root, swap=swap, drop_s=drop_s)[f])


def m1(v, p):
    """Swaps the sin and cos formulae: s(s - a) on top for sin(A/2), (s - b)(s - c) for cos(A/2)."""
    return _wrong(v, p, swap=True)


def m2(v, p):
    """Takes s as the whole perimeter a + b + c, not half of it."""
    return _wrong(v, p, perimeter=True)


def m3(v, p):
    """Forgets the square root: gives sin^2(A/2), or the square of the area."""
    return _wrong(v, p, root=False)


def m4(v, p):
    """Uses the formula for angle A (sides b, c; s - b, s - c) for angle B or C too."""
    if p["f"] == "area" or p["angle"] == "A":
        raise ValueError("only for half of B or C")
    return _wrong(v, p, letters="A")


def m5(v, p):
    """Drops the lone factor s: area = sqrt((s - a)(s - b)(s - c)), cos(A/2) = sqrt((s - a)/(bc))."""
    if p["f"] == "sin":
        raise ValueError("sin(A/2) has no lone s")
    return _wrong(v, p, drop_s=True)


MODELS = {"key": key, "C10-M1": m1, "C10-M2": m2, "C10-M3": m3, "C10-M4": m4, "C10-M5": m5}
