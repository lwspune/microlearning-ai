"""C06 Finding the ratio of division: answer models (the key, and one per misconception).

Every item gives A(x1, y1) and B(x2, y2), and the point P that divides seg AB:
- params on="pt": P is given by its co-ordinate params coord ("x" or "y") = input c;
- params on="yaxis" / "xaxis": P is where seg AB meets that axis.
params ask="ratio" returns AP : PB as the number AP/PB (text "m : n"); ask="x" returns P's
x co-ordinate (the unknown k of P(k, y)).
"""
from sympy import Abs, Rational, sqrt, simplify, sympify


def _ins(v):
    return [sympify(v[k]) for k in ("x1", "y1", "x2", "y2")]


def _known(v, p):
    """(the co-ordinate the student equates, its value at P, at A, at B)."""
    x1, y1, x2, y2 = _ins(v)
    on = p["on"]
    if on == "yaxis":
        return "x", sympify(0), x1, x2
    if on == "xaxis":
        return "y", sympify(0), y1, y2
    c = sympify(v["c"])
    return (p["coord"], c, x1, x2) if p["coord"] == "x" else (p["coord"], c, y1, y2)


def _frac(v, p):
    """t = AP/AB along the segment, read from the known co-ordinate."""
    _, c, c1, c2 = _known(v, p)
    return Rational(c - c1, c2 - c1)


def _answer(v, p, r):
    """The answer a student gives who believes AP : PB = r : 1."""
    if p["ask"] == "ratio":
        return r
    x1, _, x2, _ = _ins(v)
    return (r * x2 + x1) / (r + 1)


def key(v, p):
    """From the definition: P = A + t(B - A) lies on AB; AP and PB by the distance formula."""
    x1, y1, x2, y2 = _ins(v)
    t = _frac(v, p)
    if not 0 < t < 1:
        raise ValueError("P must lie between A and B")
    px, py = x1 + t * (x2 - x1), y1 + t * (y2 - y1)
    if p["on"] == "pt" and "c2" in v:
        assert simplify(sympify(v["c2"]) - (py if p["coord"] == "x" else px)) == 0, "P is not on AB"
    if p["ask"] == "x":
        return px
    ap = sqrt((px - x1) ** 2 + (py - y1) ** 2)
    pb = sqrt((x2 - px) ** 2 + (y2 - py) ** 2)
    return simplify(ap / pb)


def m1(v, p):
    """Turns the ratio round: gives PB : AP (the weight k put with A's co-ordinate)."""
    t = _frac(v, p)
    return _answer(v, p, (1 - t) / t)


def m2(v, p):
    """Mixes up the axes: on the Y-axis puts y = 0 (on the X-axis x = 0), so takes |y1| : |y2|."""
    x1, y1, x2, y2 = _ins(v)
    if p["on"] == "yaxis":
        a, b = y1, y2
    elif p["on"] == "xaxis":
        a, b = x1, x2
    else:
        raise ValueError("axis items only")
    if a == 0 or b == 0:
        raise ValueError("no ratio")
    return _answer(v, p, Abs(a) / Abs(b))


def m3(v, p):
    """Reads the ratio as AP : AB (the part to the whole), not AP : PB."""
    return _answer(v, p, _frac(v, p))


def m4(v, p):
    """Slip clearing the fraction: writes c(k + 1) as ck + 1, so k = (c1 - 1)/(c - c2)."""
    if p["ask"] != "ratio":
        raise ValueError("ratio items only")
    _, c, c1, c2 = _known(v, p)
    r = Rational(c1 - 1, c - c2)
    if r <= 0:
        raise ValueError("gives no positive ratio")
    return r


def m5(v, p):
    """Takes P as the midpoint of AB when no ratio is given."""
    if p["ask"] != "x":
        raise ValueError("only for finding a co-ordinate of P")
    return _answer(v, p, sympify(1))


def m6(v, p):
    """Reads the ratio as PB : AB (the part from B to the whole)."""
    return _answer(v, p, 1 - _frac(v, p))


MODELS = {"key": key, "C06-M1": m1, "C06-M2": m2, "C06-M3": m3, "C06-M4": m4, "C06-M5": m5, "C06-M6": m6}
