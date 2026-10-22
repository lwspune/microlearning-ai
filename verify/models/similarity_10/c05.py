"""C05 Tests of similarity: answer models (the key, and one per misconception).

An item describes two triangles and the facts given about them:
  params["t1"]   the first triangle's vertices, in the order the answer starts with ("ABC");
  params["t2"]   the second triangle's vertices as a student would name them unprompted (alphabetical);
  params["ang"]  equal angles as vertex pairs, t1 vertex first: "BF,CD" means angle B = angle F, angle C = angle D;
  params["pos"]  (figure items) vertex pairs that sit in the same place in the picture: "AD,BC,PP";
  inputs         side lengths by name ("PM": 6), sides of both triangles.
An answer is a Symbol "<test>_<image>": the test (AA, SAS, SSS) or "cong" for a congruence claim, and the
images of t1's vertices in order (AA_EFD: triangle ABC ~ triangle EFD by AA); or "not_similar".
"""
from itertools import permutations

from sympy import Symbol, simplify


def _pairs(s):
    return [tuple(x) for x in s.split(",") if x] if s else []


def _sides(v, tri):
    """The given sides of one triangle: {frozenset of its two vertices: length}."""
    return {frozenset(k): val for k, val in v.items() if len(k) == 2 and set(k) <= set(tri)}


def _ans(test, p, img):
    return Symbol(f"{test}_{''.join(img[c] for c in p['t1'])}")


def _angle_map(p):
    """Two pairs of equal angles fix the correspondence; the third vertex goes to the third."""
    eq = dict(_pairs(p.get("ang", "")))
    if len(eq) < 2:
        return None
    t1, t2 = p["t1"], p["t2"]
    (a,) = set(t1) - set(eq)
    (b,) = set(t2) - set(eq.values())
    return {**eq, a: b}


def _side_map(v, p):
    """The correspondence that makes the given sides proportional (every given side matched), and how many."""
    t1, t2 = p["t1"], p["t2"]
    s1, s2 = _sides(v, t1), _sides(v, t2)
    if len(s1) < 2 or len(s1) != len(s2):
        return None, 0
    for perm in permutations(t2):
        img = dict(zip(t1, perm))
        ratios = []
        for side, val in s1.items():
            other = frozenset(img[c] for c in side)
            if other not in s2:
                break
            ratios.append(simplify(val / s2[other]))
        else:
            if len(set(ratios)) == 1:
                return img, len(ratios)
    return None, 0


def _shared(sides):
    (c,) = set.intersection(*[set(s) for s in sides])
    return c


def _facts(v, p):
    """What the given facts prove: (test or None, correspondence)."""
    img = _angle_map(p)
    if img:
        return "AA", img
    img, n = _side_map(v, p)
    if img is None:
        return None, None
    if n == 3:
        return "SSS", img
    c = _shared(_sides(v, p["t1"]))  # the vertex the two given sides meet at
    eq = dict(_pairs(p.get("ang", "")))
    if eq.get(c) == img[c]:
        return "SAS", img
    return None, img


def key(v, p):
    test, img = _facts(v, p)
    return _ans(test, p, img) if test else Symbol("not_similar")


def m1(v, p):
    """SSA taken as SAS: two proportional sides and any equal angle, between them or not."""
    img, n = _side_map(v, p)
    if img is None or n != 2 or not _pairs(p.get("ang", "")):
        raise ValueError("needs two proportional sides and an equal angle")
    c = _shared(_sides(v, p["t1"]))
    if dict(_pairs(p["ang"])).get(c) == img[c]:
        raise ValueError("the angle is the included one: M1 agrees with the key")
    return _ans("SAS", p, img)


def m2(v, p):
    """Similar needs equal sides: proportional but unequal sides make the triangles 'not similar'."""
    s1, s2 = _sides(v, p["t1"]), _sides(v, p["t2"])
    if not s1 or not s2:
        raise ValueError("no sides given")
    if set(s1.values()) == set(s2.values()):
        raise ValueError("equal sides: M2 gives no wrong answer")
    return Symbol("not_similar")


def m3(v, p):
    """Two pairs of equal angles taken as proof of congruence (same size), not similarity."""
    img = _angle_map(p)
    if not img:
        raise ValueError("needs two pairs of equal angles")
    return _ans("cong", p, img)


def m4(v, p):
    """Takes the named order (first with first, ...) as the correspondence instead of working it out.

    Where the triangles are similar, it writes them in that order. Where they are not, it reads a given equal
    angle at the matching named position, between the two given sides, as the SAS test in that order.
    """
    named = dict(zip(p["t1"], p["t2"]))
    test, img = _facts(v, p)
    if test:
        return _ans(test, p, named)
    s1 = _sides(v, p["t1"])
    if len(s1) == 2 and dict(_pairs(p.get("ang", ""))).get(_shared(s1)) == named[_shared(s1)]:
        return _ans("SAS", p, named)
    raise ValueError("not similar, and the named order gives no test either")


def m5(v, p):
    """Matches the vertices by where they sit in the picture (left with left), not by the equal parts."""
    test, _ = _facts(v, p)
    if not test or not p.get("pos"):
        raise ValueError("needs a similar pair and a figure")
    return _ans(test, p, dict(_pairs(p["pos"])))


def m6(v, p):
    """Two pairs of proportional sides taken as enough for the SSS test."""
    img, n = _side_map(v, p)
    if img is None or n != 2:
        raise ValueError("needs exactly two proportional pairs of sides")
    return _ans("SSS", p, img)


MODELS = {"key": key, "C05-M1": m1, "C05-M2": m2, "C05-M3": m3, "C05-M4": m4, "C05-M5": m5, "C05-M6": m6}
