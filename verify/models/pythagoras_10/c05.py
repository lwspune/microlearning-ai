"""C05 Squares of sides opposite acute and obtuse angles: answer models (the key, and one per misconception).

Every item is one triangle with an angle at a vertex V (acute or obtuse), seg AD perpendicular to the
line through V, and D the foot. Inputs:
  a: the side along that line from V (BC in the book's figure),
  b: the other side at V (AC), the hypotenuse of right triangle ADC,
  x: the piece from V to the foot D (DC).
Params: angle = "acute" | "obtuse"; ask = "c2" (AB^2) | "c" (AB) | "ratio" (AB^2 / b^2) | "coef" ((AB^2 - b^2) / a^2).

The key works through the two right triangles (AD^2 = b^2 - x^2, BD = a -/+ x, AB^2 = AD^2 + BD^2),
not through the rule being taught.
"""
from sympy import Abs, Symbol, sqrt, simplify


def _setup(v, p):
    pos = {s: Symbol(s.name, positive=True) for e in (v["a"], v["b"], v["x"]) for s in e.free_symbols}
    a, b, x = (v[k].subs(pos) for k in ("a", "b", "x"))
    angle = p["angle"]
    if angle not in ("acute", "obtuse"):
        raise ValueError("angle must be acute or obtuse")
    return a, b, x, angle, {q: Symbol(q.name) for q in pos.values()}


def _out(c2, a, b, p, back):
    ask = p["ask"]
    if ask == "c2":
        r = c2
    elif ask == "c":
        if simplify(c2).is_negative:
            raise ValueError("negative square")
        r = sqrt(c2)
    elif ask == "ratio":
        r = c2 / b**2
    elif ask == "coef":
        r = (c2 - b**2) / a**2
    else:
        raise ValueError(f"unknown ask {ask}")
    return simplify(r).subs(back)


def _key_c2(a, b, x, angle):
    ad2 = b**2 - x**2                       # right triangle ADC
    bd = a - x if angle == "acute" else a + x
    return ad2 + bd**2                      # right triangle ADB


def _sign(angle):
    return -1 if angle == "acute" else 1


def key(v, p):
    a, b, x, angle, back = _setup(v, p)
    if simplify(b**2 - x**2).is_positive is False:
        raise ValueError("DC must be shorter than AC")
    return _out(_key_c2(a, b, x, angle), a, b, p, back)


def m1(v, p):
    """Swaps the sign: adds 2BC.DC for an acute angle, subtracts it for an obtuse angle."""
    a, b, x, angle, back = _setup(v, p)
    return _out(a**2 + b**2 - _sign(angle) * 2 * a * x, a, b, p, back)


def m2(v, p):
    """Uses Pythagoras with no right angle at the vertex: AB^2 = BC^2 + AC^2."""
    a, b, x, angle, back = _setup(v, p)
    return _out(a**2 + b**2, a, b, p, back)


def m3(v, p):
    """Uses the other piece of the base, BD, in place of DC: 2BC.BD."""
    a, b, x, angle, back = _setup(v, p)
    bd = Abs(a - x) if angle == "acute" else a + x
    return _out(a**2 + b**2 + _sign(angle) * 2 * a * bd, a, b, p, back)


def m4(v, p):
    """Drops the 2: corrects by BC.DC."""
    a, b, x, angle, back = _setup(v, p)
    return _out(a**2 + b**2 + _sign(angle) * a * x, a, b, p, back)


def m5(v, p):
    """Stops at AB^2 and forgets the square root."""
    a, b, x, angle, back = _setup(v, p)
    if p["ask"] != "c":
        raise ValueError("only when the side itself is asked")
    return simplify(_key_c2(a, b, x, angle)).subs(back)


def m6(v, p):
    """Adds where it should subtract in right triangle ADC: AD^2 = AC^2 + DC^2."""
    a, b, x, angle, back = _setup(v, p)
    bd = a - x if angle == "acute" else a + x
    return _out(b**2 + x**2 + bd**2, a, b, p, back)


MODELS = {"key": key, "C05-M1": m1, "C05-M2": m2, "C05-M3": m3, "C05-M4": m4, "C05-M5": m5, "C05-M6": m6}
