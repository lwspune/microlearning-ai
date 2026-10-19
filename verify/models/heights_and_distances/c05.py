"""C05 Directions and reflections: answer models (the key, and one per misconception).

p["ask"] picks the question type.

Directions (a tower of height h at O; elevation v["a"] from A, v["b"] from B, in radians):
  p["at"] = "O"  A and B lie along perpendicular directions from O (A due south, B due east of O)
  p["at"] = "A"  A lies due south of O and B due east of A
  rel  -> AB^2 in terms of h (symbolic angles)
  AB   -> the distance AB, given v["h"]
  h    -> the height h, given v["AB"]

Reflections (an eye v["p"] above a still lake; a cloud H above the lake, its image H below):
  H     elevation v["a"] of the cloud, depression v["b"] of its image -> H
  tanb  the cloud's height v["H"] and elevation v["a"] -> tan of the image's depression
"""
from sympy import Symbol, cot, simplify, solve, sqrt, tan

DIRECTIONS = ("rel", "AB", "h")
REFLECTIONS = ("H", "tanb")


def _ask(p):
    return p["ask"]


# --- Directions -------------------------------------------------------------------------------

def _ground(v, f):
    """Ground distances OA and OB per unit height, from the elevation angles (f = cot is right)."""
    return f(v["a"]), f(v["b"])


def _report(k2, v, p):
    """AB = h * sqrt(k2): give AB^2, AB or h as the question asks."""
    a = _ask(p)
    if a == "rel":
        return simplify(v["h"] ** 2 * k2)
    if a == "AB":
        return simplify(v["h"] * sqrt(k2))
    if a == "h":
        return simplify(v["AB"] / sqrt(k2))
    raise ValueError(a)


def _key_directions(v, p):
    """From coordinates: O at the origin, north up, east to the right; AB by the distance formula."""
    oa, ob = _ground(v, cot)
    A = (0, -oa)  # due south of O
    if p["at"] == "O":
        B = (ob, 0)  # due east of O
        return (B[0] - A[0]) ** 2 + (B[1] - A[1]) ** 2
    if p["at"] == "A":
        # B = (t, -oa), due east of A, with |OB| = ob: t^2 + oa^2 = ob^2, and AB = t.
        t = Symbol("t", positive=True)
        return solve(t**2 + oa**2 - ob**2, t)[0] ** 2 if oa.is_number else ob**2 - oa**2
    raise ValueError(p["at"])


def key(v, p):
    a = _ask(p)
    if a in DIRECTIONS:
        return _report(_key_directions(v, p), v, p)
    if a in REFLECTIONS:
        return _reflection(v, p, image_drop="H+p", answer="H")
    raise ValueError(a)


def m1(v, p):
    """Puts the right angle at the wrong corner, so takes the wrong side as the hypotenuse."""
    if _ask(p) not in DIRECTIONS:
        raise ValueError("directions only")
    oa, ob = _ground(v, cot)
    if p["at"] == "A":  # right angle put at O: AB^2 = OA^2 + OB^2
        return _report(oa**2 + ob**2, v, p)
    # right angle put at the nearer point, so the longer ground distance is taken as the hypotenuse
    if _ask(p) == "rel":
        raise ValueError("needs numbers to know the longer distance")
    k2 = simplify(ob**2 - oa**2)
    return _report(k2 if k2 > 0 else -k2, v, p)


def m2(v, p):
    """Treats A and B as lying in one line with the foot (the two-point picture): AB = |OA - OB|."""
    if _ask(p) not in DIRECTIONS:
        raise ValueError("directions only")
    oa, ob = _ground(v, cot)
    return _report((ob - oa) ** 2, v, p)


def m3(v, p):
    """Swaps the side opposite the angle with the side next to it: distance = height * tan(angle)."""
    a = _ask(p)
    if a in DIRECTIONS:
        oa, ob = _ground(v, tan)
        k2 = oa**2 + ob**2 if p["at"] == "O" else ob**2 - oa**2
        if a != "rel" and not simplify(k2) > 0:
            raise ValueError("no real distance")
        return _report(k2, v, p)
    if a == "tanb":
        # d = (H - p) tan(a), then tan(b) = d / (H + p): both ratios turned upside down.
        d = (v["H"] - v["p"]) * tan(v["a"])
        return simplify(d / (v["H"] + v["p"]))
    raise ValueError("needs an opposite/adjacent pair to swap")


# --- Reflections ------------------------------------------------------------------------------

def _reflection(v, p, image_drop, answer):
    """Eye at (0, p), cloud at (d, H), image at (d, -depth).

    image_drop: how far below the eye the student puts the image ("H+p" right, "H" or "p" wrong).
    answer: "H" (height above the lake) or "H-p" (height above the eye).
    """
    e = v["p"]
    H, d = Symbol("H", positive=True), Symbol("d", positive=True)
    drop = {"H+p": H + e, "H": H, "p": e}[image_drop]
    if _ask(p) == "H":
        sol = solve([tan(v["a"]) * d - (H - e), tan(v["b"]) * d - drop], [H, d], dict=True)
        if len(sol) != 1:
            raise ValueError("no unique height")
        h = simplify(sol[0][H])
        return h if answer == "H" else simplify(h - e)
    if _ask(p) == "tanb":
        if answer != "H":
            raise ValueError("asks an angle")
        Hv = v["H"]
        dist = (Hv - e) / tan(v["a"])
        return simplify(drop.subs(H, Hv) / dist)
    raise ValueError(_ask(p))


def m4(v, p):
    """Measures the image's depth from the lake, not from the eye: the image is H below the eye."""
    if _ask(p) not in REFLECTIONS:
        raise ValueError("reflections only")
    return _reflection(v, p, image_drop="H", answer="H")


def m5(v, p):
    """Puts the image on the lake's surface, where the reflection is seen: p below the eye."""
    if _ask(p) not in REFLECTIONS:
        raise ValueError("reflections only")
    return _reflection(v, p, image_drop="p", answer="H")


def m6(v, p):
    """Stops at the cloud's height above the eye, H - p, and gives it as the height above the lake."""
    if _ask(p) != "H":
        raise ValueError("asks for the height")
    return _reflection(v, p, image_drop="H+p", answer="H-p")


MODELS = {"key": key, "C05-M1": m1, "C05-M2": m2, "C05-M3": m3, "C05-M4": m4, "C05-M5": m5, "C05-M6": m6}
