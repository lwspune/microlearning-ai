"""C09 The projection rule: answer models (the key, and one per misconception).

Two item shapes, picked by the params:

  find a side:   params {"find": "a"}; inputs give the other two sides and their opposite
                 angles (radians), e.g. b, c, B, C.  The rule: a = b cos C + c cos B.
  find a cosine: params {"find": "B", "given": "C"}; inputs give all three sides a, b, c and
                 cosC.  The rule used is the one for the third side (here a = b cos C + c cos B),
                 solved for cos B.

The key never uses the projection rule: a side comes from the sine rule, a cosine from the
cosine rule on the three sides, and the given data is checked to be one consistent triangle.
"""
from sympy import Abs, cos, pi, simplify, sin

LETTERS = "abc"


def _other(*names):
    """The letter of a, b, c not among names (case-insensitive)."""
    (x,) = [s for s in LETTERS if s not in {n.lower() for n in names}]
    return x


def _side_parts(v, p):
    """For find-a-side: x is the side asked; (y, Y), (z, Z) the given sides with their angles."""
    x = p["find"]
    y, z = [s for s in LETTERS if s != x]
    return x, v[y], v[y.upper()], v[z], v[z.upper()]


def _cos_parts(v, p):
    """For find-a-cosine: the rule x = y cos Z + z cos Y, solved for cos Y (Y asked, Z given)."""
    Y, Z = p["find"], p["given"]
    x = _other(Y, Z)
    return v[x], v[Y.lower()], v[Z.lower()], v["cos" + Z]


def _check_cos(v, p):
    """The given cosine must match the cosine rule on the three sides."""
    Z = p["given"]
    z = Z.lower()
    x, y = [s for s in LETTERS if s != z]
    want = (v[x] ** 2 + v[y] ** 2 - v[z] ** 2) / (2 * v[x] * v[y])
    if simplify(want - v["cos" + Z]) != 0:
        raise ValueError(f"cos {Z} is not consistent with the three sides")


def key(v, p):
    if "given" in p:
        _check_cos(v, p)
        Y = p["find"]
        yv = Y.lower()
        x, z = [s for s in LETTERS if s != yv]
        return simplify((v[x] ** 2 + v[z] ** 2 - v[yv] ** 2) / (2 * v[x] * v[z]))
    x, y, Y, z, Z = _side_parts(v, p)
    if simplify(y * sin(Z) - z * sin(Y)) != 0:
        raise ValueError("the sides and angles do not fit the sine rule")
    X = pi - Y - Z
    return simplify(y * sin(X) / sin(Y))


def m1(v, p):
    """Pairs each side with its own opposite angle: a = b cos B + c cos C."""
    if "given" in p:
        x, y, z, cz = _cos_parts(v, p)
        # x = y cos Y + z cos Z, solved for cos Y
        return simplify((x - z * cz) / y)
    _, y, Y, z, Z = _side_parts(v, p)
    return simplify(y * cos(Y) + z * cos(Z))


def m2(v, p):
    """Takes sines for cosines (the heights, not the projections): a = b sin C + c sin B."""
    if "given" in p:
        raise ValueError("sine model is for finding a side")
    _, y, Y, z, Z = _side_parts(v, p)
    return simplify(y * sin(Z) + z * sin(Y))


def m3(v, p):
    """At an obtuse angle, adds the projection's length instead of subtracting it: |cos|."""
    if "given" in p:
        x, y, z, cz = _cos_parts(v, p)
        if not cz < 0:
            raise ValueError("needs an obtuse given angle")
        return simplify((x - y * Abs(cz)) / z)
    _, y, Y, z, Z = _side_parts(v, p)
    if not (cos(Y) < 0 or cos(Z) < 0):
        raise ValueError("needs an obtuse angle")
    return simplify(y * Abs(cos(Z)) + z * Abs(cos(Y)))


def m4(v, p):
    """Divides by the cosine (takes the side as the leg, not the hypotenuse): a = b/cos C + c/cos B."""
    if "given" in p:
        x, y, z, cz = _cos_parts(v, p)
        # x = y / cos Z + z / cos Y, solved for cos Y
        return simplify(z / (x - y / cz))
    _, y, Y, z, Z = _side_parts(v, p)
    return simplify(y / cos(Z) + z / cos(Y))


def m5(v, p):
    """Moves y cos Z across without changing its sign: cos B = (a + b cos C)/c."""
    if "given" not in p:
        raise ValueError("transposing slip is for finding a cosine")
    x, y, z, cz = _cos_parts(v, p)
    return simplify((x + y * cz) / z)


def m6(v, p):
    """Uses the right-triangle rule a = c cos B in any triangle, with one projection only."""
    if "given" not in p:
        raise ValueError("one-projection model is for finding a cosine")
    x, y, z, cz = _cos_parts(v, p)
    return simplify(x / z)


MODELS = {"key": key, "C09-M1": m1, "C09-M2": m2, "C09-M3": m3, "C09-M4": m4, "C09-M5": m5, "C09-M6": m6}
