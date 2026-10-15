"""C11 The hyperbola x^2/a^2 - y^2/b^2 = 1: answer models (the key, and one per misconception).

Inputs: the hyperbola (x - h)^2/A - (y - k)^2/B = s, with s = 1 or -1 (h, k default 0).
  s = 1:  the x-term is positive, so the transverse axis is along x: a^2 = A, b^2 = B.
  s = -1: the y-term is positive, so the transverse axis is along y: semi-transverse^2 = B.
Below, T is the square of the semi-transverse axis, C the square of the semi-conjugate axis.
p["ask"] picks the question:
  e      -> the eccentricity
  econj  -> the eccentricity of the conjugate hyperbola (the same equation with s flipped)
  foci   -> FiniteSet of the two foci, as Tuples
  dir    -> the pair of directrices, as one polynomial in x, y (the lines are it = 0)
  lr     -> the length of the latus rectum
"""
from sympy import Abs, FiniteSet, Tuple, sqrt, symbols

x, y = symbols("x y", real=True)


def _ask(p):
    return p.get("ask", "e")


def _shape(v, flip=False):
    """(T, C, axis) for the hyperbola, read the right way: a goes with the positive term."""
    s = -v["s"] if flip else v["s"]
    return (v["A"], v["B"], "x") if s == 1 else (v["B"], v["A"], "y")


def _centre(v):
    return v.get("h", 0), v.get("k", 0)


def _pair(v, axis, d):
    """The two points centre +/- d along the axis."""
    h, k = _centre(v)
    if axis == "x":
        return FiniteSet(Tuple(h + d, k), Tuple(h - d, k))
    return FiniteSet(Tuple(h, k + d), Tuple(h, k - d))


def _lines(v, axis, d):
    """The two lines x = h +/- d (or y = k +/- d) as one polynomial."""
    h, k = _centre(v)
    u = x - h if axis == "x" else y - k
    return (u**2 - d**2).expand()


def _answer(v, p, T, C, axis, c2):
    """Every property from T, C and the focal distance squared c2 (= a^2 e^2)."""
    a, c = sqrt(T), sqrt(c2)
    e = c / a
    ask = _ask(p)
    if ask == "e":
        return e
    if ask == "foci":
        return _pair(v, axis, c)
    if ask == "dir":
        return _lines(v, axis, a / e)
    if ask == "lr":
        return 2 * C / a
    raise ValueError(ask)


def key(v, p):
    if _ask(p) == "econj":
        # The conjugate hyperbola swaps the roles of the two axes.
        T, C, _ = _shape(v, flip=True)
        return sqrt(T + C) / sqrt(T)
    T, C, axis = _shape(v)
    # Straight from SP = e PM: b^2 = a^2(e^2 - 1), so a^2 e^2 = a^2 + b^2.
    return _answer(v, p, T, C, axis, T + C)


def m1(v, p):
    """The ellipse relation: a^2 e^2 = a^2 - b^2 (taken as the difference, so it is positive)."""
    if _ask(p) == "lr":
        raise ValueError("the latus rectum doesn't use e")
    if _ask(p) == "econj":
        T, C, _ = _shape(v, flip=True)
        return sqrt(Abs(T - C)) / sqrt(T)
    T, C, axis = _shape(v)
    return _answer(v, p, T, C, axis, Abs(T - C))


def m2(v, p):
    """a^2 is the bigger denominator and the transverse axis goes with it, as for an ellipse."""
    if _ask(p) == "econj":
        raise ValueError("used on the given hyperbola only")
    A, B = v["A"], v["B"]
    if A == B:
        raise ValueError("equal denominators: no bigger one")
    T, C, axis = (A, B, "x") if A > B else (B, A, "y")
    if axis == _shape(v)[2]:
        raise ValueError("the bigger denominator is under the positive term, so this gives the key")
    return _answer(v, p, T, C, axis, T + C)


def m3(v, p):
    """The latus rectum is b^2/a: the height of its end (ae, b^2/a) above the axis, not the whole chord."""
    if _ask(p) != "lr":
        raise ValueError("only for the latus rectum")
    T, C, _ = _shape(v)
    return C / sqrt(T)


def m4(v, p):
    """The conjugate hyperbola has the same eccentricity as the hyperbola."""
    if _ask(p) != "econj":
        raise ValueError("only for the conjugate hyperbola")
    T, C, _ = _shape(v)
    return sqrt(T + C) / sqrt(T)


def m5(v, p):
    """The ratio upside down: e = a / (ae), the semi-axis over the focal distance, so e < 1."""
    ask = _ask(p)
    if ask == "lr":
        raise ValueError("the latus rectum doesn't use e")
    T, C, axis = _shape(v, flip=(ask == "econj"))
    a, c = sqrt(T), sqrt(T + C)
    e = a / c
    if ask in ("e", "econj"):
        return e
    if ask == "foci":
        return _pair(v, axis, a * e)
    if ask == "dir":
        return _lines(v, axis, a / e)
    raise ValueError(ask)


def m6(v, p):
    """Skips the square root: works with a^2 where a belongs (e = 1 + b^2/a^2, latus rectum 2b^2/a^2)."""
    ask = _ask(p)
    if ask in ("e", "econj"):
        T, C, _ = _shape(v, flip=(ask == "econj"))
        return 1 + C / T
    if ask == "lr":
        T, C, _ = _shape(v)
        return 2 * C / T
    raise ValueError("only for e and the latus rectum")


MODELS = {"key": key, "C11-M1": m1, "C11-M2": m2, "C11-M3": m3, "C11-M4": m4, "C11-M5": m5, "C11-M6": m6}
