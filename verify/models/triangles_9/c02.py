"""C02 Tests of congruence: answer models (the key, and one per misconception).

An item describes two triangles and the equal parts known about them:
  params["t1"]     the first triangle's vertices, in the order the answer starts with ("ADB");
  params["t2"]     the second triangle's vertices in the order the stem names them ("AEB");
  params["sides"]  given equal sides, t1 side then t2 side: "AB-BA,DB-EA";
  params["angs"]   given equal angles, t1 vertex then t2 vertex: "D-E,Q-Q";
  params["right"]  t1 vertices whose (given) equal angles are right angles: "D";
  params["csides"] / params["cangs"]  equal parts the stem does NOT state: a common side, a common angle,
                   vertically opposite angles (same format as sides / angs).
An answer is a Symbol "<test>_<image>": the test (SSS, SAS, ASA, AAS, HS, or the false AAA) and the images of
t1's vertices in order (HS_BEA: triangle ADB is congruent to triangle BEA by hypotenuse-side); or "none".
"""
from itertools import permutations

from sympy import Symbol


def _pairs(s):
    return [tuple(x.split("-")) for x in s.split(",") if x] if s else []


def _facts(p, stated_only=False):
    sides = _pairs(p.get("sides", "")) + ([] if stated_only else _pairs(p.get("csides", "")))
    angs = _pairs(p.get("angs", "")) + ([] if stated_only else _pairs(p.get("cangs", "")))
    return sides, angs


def _corr(p, sides, angs):
    """The correspondence that matches every equal part to its partner (the first, if several fit)."""
    t1, t2 = p["t1"], p["t2"]
    for perm in permutations(t2):
        img = dict(zip(t1, perm))
        if all({img[c] for c in s1} == set(s2) for s1, s2 in sides) and all(img[a1] == a2 for a1, a2 in angs):
            return img
    raise ValueError("the equal parts fit no correspondence")


def _test(p, sides, angs):
    """Which test the parts satisfy, straight from the five tests; None if none of them."""
    S = [frozenset(s1) for s1, _ in sides]
    A = [a1 for a1, _ in angs]
    right = set(p.get("right", ""))
    if len(set(S)) >= 3:
        return "SSS"
    for i, s in enumerate(S):
        for u in S[i + 1:]:
            (c,) = s & u
            if c in A:
                return "SAS"
    for i, a in enumerate(A):
        for b in A[i + 1:]:
            if frozenset((a, b)) in S:
                return "ASA"
    if len(set(A)) >= 2 and S:
        return "AAS"
    for r in right & set(A):
        hyp = frozenset(set(p["t1"]) - {r})
        if hyp in S and len(set(S)) >= 2:
            return "HS"
    return None


def _ans(test, p, img):
    return Symbol(f"{test}_{''.join(img[c] for c in p['t1'])}")


def key(v, p):
    sides, angs = _facts(p)
    test = _test(p, sides, angs)
    return _ans(test, p, _corr(p, sides, angs)) if test else Symbol("none")


def _key_parts(p):
    sides, angs = _facts(p)
    test = _test(p, sides, angs)
    if not test:
        raise ValueError("not congruent")
    return test, _corr(p, sides, angs)


def m1(v, p):
    """Ignores where the parts sit: two sides and an angle are 'SAS', two angles and a side are 'ASA'."""
    sides, angs = _facts(p)
    n_s, n_a = len(sides), len(angs)
    if (n_s, n_a) == (2, 1):
        test = "SAS"
    elif (n_s, n_a) == (1, 2):
        test = "ASA"
    else:
        raise ValueError("needs exactly three parts: two sides and an angle, or two angles and a side")
    out = _ans(test, p, _corr(p, sides, angs))
    if out == key(v, p):
        raise ValueError("the parts sit where the test needs them: M1 agrees with the key")
    return out


def m2(v, p):
    """Two pairs of equal angles make the third pair equal too, and AAA is taken as a congruence test."""
    sides, angs = _facts(p)
    if len(angs) < 2:
        raise ValueError("needs two pairs of equal angles")
    return _ans("AAA", p, _corr(p, sides, angs))


def m3(v, p):
    """Takes the order the stem names the triangles in as the correspondence (first with first, ...)."""
    test, img = _key_parts(p)
    named = dict(zip(p["t1"], p["t2"]))
    if named == img:
        raise ValueError("the named order is the correspondence: M3 agrees with the key")
    return _ans(test, p, named)


def m4(v, p):
    """Matches each vertex the two triangles share (the ends of a common side) with itself."""
    test, img = _key_parts(p)
    shared = set(p["t1"]) & set(p["t2"])
    if not shared or all(img[c] == c for c in shared):
        raise ValueError("no shared vertex maps elsewhere: M4 agrees with the key")
    fixed = {c: c for c in shared}
    rest1 = [c for c in p["t1"] if c not in shared]
    rest2 = [c for c in p["t2"] if c not in shared]
    if len(rest1) != 1:
        raise ValueError("needs exactly two shared vertices")
    return _ans(test, p, {**fixed, rest1[0]: rest2[0]})


def m5(v, p):
    """Two pairs of equal sides taken as enough for the SSS test."""
    sides, angs = _facts(p)
    if len({frozenset(s1) for s1, _ in sides}) != 2:
        raise ValueError("needs exactly two pairs of equal sides")
    return _ans("SSS", p, _corr(p, sides, angs))


def m6(v, p):
    """Counts only the parts the question states: a common side, a common angle or vertically opposite angles
    are left out, so too few parts remain and the triangles 'cannot be proved congruent'."""
    if not (p.get("csides") or p.get("cangs")):
        raise ValueError("no unstated common part")
    sides, angs = _facts(p, stated_only=True)
    if _test(p, sides, angs):
        raise ValueError("the stated parts already prove it")
    return Symbol("none")


MODELS = {"key": key, "C02-M1": m1, "C02-M2": m2, "C02-M3": m3, "C02-M4": m4, "C02-M5": m5, "C02-M6": m6}
