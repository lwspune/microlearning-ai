"""C01 Sine, cosine and tangent: answer models (the key, and one per misconception).

inputs: the three sides of a right triangle, keyed by side name ("PQ", "QR", "PR"); each value is a
number or a symbol (the side's own name, or a letter like a, b, c).
params: "right" (the vertex with the right angle), "at" (the vertex of the acute angle asked about),
"fn" ("sin", "cos" or "tan").

The key names the sides from the vertices alone: the hypotenuse is the side that does not touch the
right angle, the opposite side is the one that does not touch the angle asked about, the adjacent side
is the third. With numeric sides it instead places the triangle on axes (right angle at the origin,
adjacent side along the x-axis) and takes sympy's sin, cos or tan of the angle there.
"""
from sympy import atan2, cos, simplify, sin, tan

_FN = {"sin": sin, "cos": cos, "tan": tan}


def _sides(v, p):
    """(opposite, adjacent, hypotenuse) for the angle at p["at"], from which vertices each side touches."""
    right, at = p["right"], p["at"]
    assert right != at, "the angle asked about must be acute"
    hyp = [s for s in v if right not in s]
    opp = [s for s in v if at not in s]
    adj = [s for s in v if right in s and at in s]
    assert len(hyp) == len(opp) == len(adj) == 1, "inputs must be the three sides of the triangle"
    o, a, h = v[opp[0]], v[adj[0]], v[hyp[0]]
    if all(x.is_number for x in (o, a, h)):
        assert simplify(h ** 2 - o ** 2 - a ** 2) == 0, "not a right triangle"
    return o, a, h


def _ratio(o, a, h, fn):
    return {"sin": o / h, "cos": a / h, "tan": o / a}[fn]


def key(v, p):
    o, a, h = _sides(v, p)
    if all(x.is_number for x in (o, a, h)):
        theta = atan2(o, a)  # right angle at the origin, adjacent side on the x-axis, opposite side up
        return simplify(_FN[p["fn"]](theta))
    return _ratio(o, a, h, p["fn"])


def m1(v, p):
    """Swaps opposite and adjacent: reads the sides from the other acute angle."""
    o, a, h = _sides(v, p)
    return _ratio(a, o, h, p["fn"])


def m2(v, p):
    """Writes the ratio upside down: hypotenuse over opposite for sin, and so on."""
    o, a, h = _sides(v, p)
    return 1 / _ratio(o, a, h, p["fn"])


def m3(v, p):
    """Takes the hypotenuse as the adjacent side (it also touches the angle), so the other leg plays the hypotenuse."""
    o, a, h = _sides(v, p)
    return _ratio(o, h, a, p["fn"])


def m4(v, p):
    """Takes the side opposite the angle as the hypotenuse, and the hypotenuse as the opposite side."""
    o, a, h = _sides(v, p)
    return _ratio(h, a, o, p["fn"])


MODELS = {"key": key, "C01-M1": m1, "C01-M2": m2, "C01-M3": m3, "C01-M4": m4}
