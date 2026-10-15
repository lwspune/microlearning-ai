"""C12 Finding a hyperbola from its data: answer models (the key, and one per misconception).

Every item asks for the hyperbola x^2/a^2 - y^2/b^2 = 1 (transverse axis along the x-axis) from two
pieces of data. The inputs name which two are given:
  A  the length of the transverse axis (2a)       B  the length of the conjugate axis (2b)
  F  the distance between the foci (2ae)          f  the abscissa of a focus (+-ae)
  D  the distance between the directrices (2a/e)  e  the eccentricity
Each model returns the locus as a polynomial x^2/a^2 - y^2/b^2 - 1 (= 0). A model that ends with
b^2 < 0 returns that polynomial as it stands: the student's "hyperbola" is then an ellipse.
"""
from sympy import Abs, solve, symbols

x, y = symbols("x y", real=True)
_a, _e = symbols("a e", positive=True)
_b2 = symbols("b2", real=True)   # b^2, left free in sign so a wrong relation can make it negative


def _data(v, whole=False, swap=False):
    """The semi-lengths read from the inputs: a, b, c = ae, d = a/e, e (None when not given).
    whole: take each given length as the semi-length (no halving). swap: read 2a as 2b and 2b as 2a."""
    half = 1 if whole else 2
    A, B = (v.get("B"), v.get("A")) if swap else (v.get("A"), v.get("B"))
    a = A / half if A is not None else None
    b = B / half if B is not None else None
    c = Abs(v["f"]) if "f" in v else (v["F"] / half if "F" in v else None)
    d = v["D"] / half if "D" in v else None
    return a, b, c, d, v.get("e")


def _solve(a, b, c, d, e, rel):
    """Solve the data together with the relation rel(a, b2, e) = 0 for a, b^2, e; return the locus."""
    eqs = [rel(_a, _b2, _e)]
    if a is not None:
        eqs.append(_a - a)
    if b is not None:
        eqs.append(_b2 - b**2)
    if c is not None:
        eqs.append(_a * _e - c)
    if d is not None:
        eqs.append(_a / _e - d)
    if e is not None:
        eqs.append(_e - e)
    sols = solve(eqs, [_a, _b2, _e], dict=True)
    if len(sols) != 1:
        raise ValueError(f"the data give {len(sols)} hyperbolas under this rule")
    s = sols[0]
    if s[_b2] == 0:
        raise ValueError("b^2 = 0: no curve")
    return (x**2 / s[_a] ** 2 - y**2 / s[_b2] - 1).expand()


def _hyp(a, b2, e):
    """The hyperbola: the foci (+-ae, 0) are at distance sqrt(a^2 + b^2) from the centre."""
    return a**2 * e**2 - (a**2 + b2)


def key(v, p):
    return _solve(*_data(v), _hyp)


def m1(v, p):
    """Uses the ellipse's relation a^2 e^2 = a^2 - b^2, i.e. b^2 = a^2(1 - e^2)."""
    return _solve(*_data(v), lambda a, b2, e: a**2 * e**2 - (a**2 - b2))


def m2(v, p):
    """Takes a given length (an axis, the distance between the foci or the directrices) as the semi-length."""
    if not any(k in v for k in ("A", "B", "F", "D")):
        raise ValueError("no length to halve")
    return _solve(*_data(v, whole=True), _hyp)


def m3(v, p):
    """Takes the focus as a vertex: a = ae."""
    a, b, c, d, e = _data(v)
    if c is None or a is not None:
        raise ValueError("needs a focus and no transverse axis")
    return _solve(c, b, None, d, e, _hyp)


def m4(v, p):
    """Swaps the axes: reads the conjugate axis as 2a (or the transverse axis as 2b)."""
    if "A" not in v and "B" not in v:
        raise ValueError("no axis given")
    return _solve(*_data(v, swap=True), _hyp)


def m5(v, p):
    """Drops the -1: b^2 = a^2 e^2 (the focal distance squared) instead of a^2(e^2 - 1)."""
    return _solve(*_data(v), lambda a, b2, e: a**2 * e**2 - b2)


MODELS = {"key": key, "C12-M1": m1, "C12-M2": m2, "C12-M3": m3, "C12-M4": m4, "C12-M5": m5}
