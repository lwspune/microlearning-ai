"""C03 Ratios of 0°, 30°, 45°, 60° and 90°: answer models (the key, and one per misconception).

inputs: "e", an expression in ratio symbols named <fn><angle>: s30 is sin 30°, c0 is cos 0°, t45 is
tan 45° (fn s, c or t; angle 0, 30, 45, 60 or 90). A square is written s60**2 (that is, sin² 60°).

The key substitutes sympy's own sin, cos and tan of each angle (in radians), never a table of values.
Each misconception model substitutes the value a student with that idea uses, then simplifies.
"""
from sympy import Rational, Symbol, cos, pi, simplify, sin, tan

_FN = {"s": sin, "c": cos, "t": tan}
_ANGLES = (0, 30, 45, 60, 90)


def _parts(sym):
    """('s', 30) from the symbol s30."""
    name = sym.name
    fn, angle = name[0], int(name[1:])
    assert fn in _FN and angle in _ANGLES, f"unknown ratio symbol {name}"
    return fn, angle


def _true(fn, angle):
    if fn == "t" and angle == 90:
        raise ValueError("tan 90° is not defined")
    return _FN[fn](pi * angle / 180)


def _evaluate(v, value):
    """Substitutes value(fn, angle) for every ratio symbol in v["e"]."""
    e = v["e"]
    subs = {s: value(*_parts(s)) for s in e.free_symbols if isinstance(s, Symbol)}
    return simplify(e.subs(subs))


def key(v, p):
    return _evaluate(v, _true)


def m1(v, p):
    """Reads each ratio from the other acute angle: uses the value of 90° − θ (sin 30° taken as √3/2)."""
    return _evaluate(v, lambda fn, a: _true(fn, 90 - a))


def m2(v, p):
    """Writes each ratio upside down (hypotenuse over opposite for sin), so sin 30° is taken as 2."""
    def value(fn, a):
        t = _true(fn, a)
        if t == 0:
            raise ValueError("the upside-down ratio of 0 is not defined")
        return 1 / t
    return _evaluate(v, value)


def m3(v, p):
    """Takes the hypotenuse of a 45°-45°-90° triangle as twice a side, so sin 45° = cos 45° = 1/2."""
    def value(fn, a):
        if a == 45 and fn in "sc":
            return Rational(1, 2)
        return _true(fn, a)
    if not any(_parts(s)[1] == 45 and _parts(s)[0] in "sc" for s in v["e"].free_symbols):
        raise ValueError("no sin 45° or cos 45° in the expression")
    return _evaluate(v, value)


def m4(v, p):
    """Reads sin² θ as 2 sin θ (the square taken as doubling)."""
    e = v["e"]
    doubled = e.replace(lambda x: x.is_Pow and x.exp == 2 and x.base.is_Symbol, lambda x: 2 * x.base)
    if doubled == e:
        raise ValueError("no squared ratio in the expression")
    return _evaluate({"e": doubled}, _true)


def m5(v, p):
    """Thinks every ratio of 0° is 0 and every ratio of 90° is 1 (so cos 0° = 0, cos 90° = 1)."""
    def value(fn, a):
        if a == 0:
            return 0
        if a == 90:
            if fn == "t":
                raise ValueError("tan 90° is not defined")
            return 1
        return _true(fn, a)
    if not any(_parts(s)[1] in (0, 90) for s in v["e"].free_symbols):
        raise ValueError("no ratio of 0° or 90° in the expression")
    return _evaluate(v, value)


def m6(v, p):
    """Takes tan θ as opposite over hypotenuse (the hypotenuse in place of the adjacent side), so tan θ = sin θ."""
    if not any(_parts(s)[0] == "t" for s in v["e"].free_symbols):
        raise ValueError("no tan in the expression")
    return _evaluate(v, lambda fn, a: _true("s" if fn == "t" else fn, a))


MODELS = {"key": key, "C03-M1": m1, "C03-M2": m2, "C03-M3": m3, "C03-M4": m4, "C03-M5": m5, "C03-M6": m6}
