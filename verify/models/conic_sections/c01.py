"""C01 Focus, directrix and eccentricity: answer models (the key, and one per misconception).

Inputs: the focus S(a, b), the directrix l*x + m*y + n = 0, and (for "eq" and "name") the eccentricity e.
p["ask"] picks the question type:
  eq    -> the conic SP = e*PM, as a polynomial in x, y (the conic is it = 0)
  name  -> Symbol("parabola" | "ellipse" | "hyperbola" | "circle"); e may be given as a ratio
  e     -> e itself, from a point P(px, py) on the conic: e = SP / PM
"""
from sympy import Abs, Symbol, expand, sqrt, symbols

x, y = symbols("x y", real=True)


def _ask(p):
    return p.get("ask", "eq")


def _locus(v, e2, norm=True, sign=1):
    """SP^2 - e2 * PM^2 for the focus (sign*a, sign*b); PM uses sqrt(l^2 + m^2) unless norm is False."""
    sp2 = (x - sign * v["a"]) ** 2 + (y - sign * v["b"]) ** 2
    line2 = (v["l"] * x + v["m"] * y + v["n"]) ** 2
    pm2 = line2 / (v["l"] ** 2 + v["m"] ** 2) if norm else line2
    return expand(sp2 - e2 * pm2)


def _sp(v, sign=1):
    return sqrt((v["px"] - sign * v["a"]) ** 2 + (v["py"] - sign * v["b"]) ** 2)


def _pm(v, norm=True):
    d = Abs(v["l"] * v["px"] + v["m"] * v["py"] + v["n"])
    return d / sqrt(v["l"] ** 2 + v["m"] ** 2) if norm else d


def _name(e):
    if e == 1:
        return Symbol("parabola")
    return Symbol("ellipse") if e < 1 else Symbol("hyperbola")


def key(v, p):
    a = _ask(p)
    if a == "eq":
        # Every P(x, y) with SP = e * PM, squared: SP^2 = e^2 * PM^2.
        return _locus(v, v["e"] ** 2)
    if a == "name":
        return _name(v["e"])
    if a == "e":
        return _sp(v) / _pm(v)
    raise ValueError(a)


def m1(v, p):
    """PM taken as |lx + my + n|, without dividing by sqrt(l^2 + m^2)."""
    a = _ask(p)
    if a == "eq":
        return _locus(v, v["e"] ** 2, norm=False)
    if a == "e":
        return _sp(v) / _pm(v, norm=False)
    raise ValueError("naming doesn't use PM")


def m2(v, p):
    """Squares the distances but not e: SP^2 = e * PM^2 (so e comes out as SP^2 / PM^2)."""
    a = _ask(p)
    if a == "eq":
        return _locus(v, v["e"])
    if a == "e":
        return _sp(v) ** 2 / _pm(v) ** 2
    raise ValueError("naming doesn't square e")


def m3(v, p):
    """The ratio upside down: PM = e * SP, so e is read as PM / SP."""
    a = _ask(p)
    if a == "eq":
        return _locus(v, 1 / v["e"] ** 2)
    if a == "name":
        return _name(1 / v["e"])
    if a == "e":
        return _pm(v) / _sp(v)
    raise ValueError(a)


def m4(v, p):
    """Copies the focus's signs into SP: (x + a)^2 + (y + b)^2 for the focus (a, b)."""
    a = _ask(p)
    if a == "eq":
        return _locus(v, v["e"] ** 2, sign=-1)
    if a == "e":
        return _sp(v, sign=-1) / _pm(v)
    raise ValueError("naming doesn't use SP")


def m5(v, p):
    """Every focus-directrix curve is a parabola: takes SP = PM whatever e is."""
    a = _ask(p)
    if a == "eq":
        return _locus(v, 1)
    if a == "name":
        return Symbol("parabola")
    if a == "e":
        return 1
    raise ValueError(a)


def m6(v, p):
    """A fixed ratio of distances gives a circle (the locus PA = k*PB of two fixed points)."""
    if _ask(p) != "name":
        raise ValueError("only for naming the curve")
    return Symbol("circle")


MODELS = {"key": key, "C01-M1": m1, "C01-M2": m2, "C01-M3": m3, "C01-M4": m4, "C01-M5": m5, "C01-M6": m6}
