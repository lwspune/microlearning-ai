"""C10 Tangent and secant segments: answer models (the key, and one per misconception).

P is a point outside the circle. A secant through P cuts the circle at A (near) and B (far), P-A-B:
a = PA (the outer part), c = AB (the chord inside), so PB = a + c. A tangent from P touches at T: t = PT.
params["kind"] picks the question:
  tangent        v["a"], v["c"]: find PT.
  chord          v["t"], v["a"]: find the chord AB.
  outer          v["t"], v["c"]: find the outer part PA.
  secants_chord  v["a"], v["c"]: first secant; v["e"]: outer part of a second secant; find its chord.
"""
from sympy import Rational, Symbol, solve, sqrt

X = Symbol("X", positive=True)
HALF = Rational(1, 2)


def _one(eq):
    sols = [s for s in solve(eq, X) if s.is_positive]
    if len(sols) != 1:
        raise ValueError("no single positive length")
    return sols[0]


def _power(a, c):
    """From the definition, not the theorem: F is the midpoint of chord AB and h its distance from
    the centre O. Right angles at F (OF bisects AB) and at T (radius OT is perpendicular to the
    tangent) give PT^2 = PO^2 - r^2 = (PF^2 + h^2) - (FB^2 + h^2) = PF^2 - FB^2."""
    m = HALF * c
    return (a + m) ** 2 - m ** 2


def key(v, p):
    k = p["kind"]
    if k == "tangent":
        return sqrt(_power(v["a"], v["c"]))
    if k == "chord":
        return _one(_power(v["a"], X) - v["t"] ** 2)
    if k == "outer":
        return _one(_power(X, v["c"]) - v["t"] ** 2)
    if k == "secants_chord":
        return _one(_power(v["e"], X) - _power(v["a"], v["c"]))
    raise ValueError(k)


def _rule(v, p, prod):
    """A student's rule prod(outer, chord) standing in for PA x PB, applied to the asked length."""
    k = p["kind"]
    if k == "tangent":
        return sqrt(prod(v["a"], v["c"]))
    if k == "chord":
        return _one(prod(v["a"], X) - v["t"] ** 2)
    if k == "outer":
        return _one(prod(X, v["c"]) - v["t"] ** 2)
    if k == "secants_chord":
        return _one(prod(v["e"], X) - prod(v["a"], v["c"]))
    raise ValueError(k)


def m1(v, p):
    """Outer part times the chord inside (PA x AB), as for chords cutting inside the circle."""
    return _rule(v, p, lambda a, c: a * c)


def m2(v, p):
    """The whole secant times the chord inside (PB x AB) in place of PA x PB."""
    return _rule(v, p, lambda a, c: (a + c) * c)


def m3(v, p):
    """Leaves out the square: takes PT itself, not PT^2, to equal PA x PB."""
    k = p["kind"]
    if k == "tangent":
        return v["a"] * (v["a"] + v["c"])
    if k == "outer":
        return _one(X * (X + v["c"]) - v["t"])
    if k == "chord":
        return _one(v["a"] * (v["a"] + X) - v["t"])
    raise ValueError("needs a tangent")


def m4(v, p):
    """Stops at the whole secant segment: answers PB when a part of it (the chord or the outer
    part) is asked."""
    k = p["kind"]
    if k == "chord":
        return v["a"] + key(v, p)
    if k == "secants_chord":
        return v["e"] + key(v, p)
    if k == "outer":
        return v["c"] + key(v, p)
    raise ValueError("asks for a part of a secant")


def m5(v, p):
    """Takes every segment from P to the far side of the circle to be equal, as tangent segments
    from a point are: PT = PB, and two whole secant segments are equal."""
    k = p["kind"]
    if k == "tangent":
        return v["a"] + v["c"]
    if k == "chord":
        ans = v["t"] - v["a"]
    elif k == "outer":
        ans = v["t"] - v["c"]
    elif k == "secants_chord":
        ans = v["a"] + v["c"] - v["e"]
    else:
        raise ValueError(k)
    if not ans > 0:
        raise ValueError("not a length")
    return ans


MODELS = {"key": key, "C10-M1": m1, "C10-M2": m2, "C10-M3": m3, "C10-M4": m4, "C10-M5": m5}
