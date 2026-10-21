"""C01 Axes, planes and octants: answer models (the key, and one per misconception).

params["ask"] picks the question type:
  foot     the foot of the perpendicular from P (input P) on params["onto"]:
           a coordinate plane "xy" | "yz" | "zx" or an axis "x" | "y" | "z" -> a point
  octants  the octants of two points A, B (inputs A, B) -> Tuple(octN, octM)
  point    a point in octant n (input n) at distances d = (from the YZ-, ZX-, XY-plane)
           (input d) -> the point
Octants are the Symbols oct1 .. oct8 (NCERT's I .. VIII).

The key comes from the definitions: the foot is P minus its component along the plane's
normal (or P's component along the axis), the octant is looked up from NCERT's sign table,
and a coordinate is the signed distance from the plane it is measured from.
"""
from sympy import Matrix, Symbol, Tuple, sign

_E = {"x": Matrix([1, 0, 0]), "y": Matrix([0, 1, 0]), "z": Matrix([0, 0, 1])}
_NORMAL = {"xy": "z", "yz": "x", "zx": "y"}  # each coordinate plane and the axis perpendicular to it
_IDX = {"x": 0, "y": 1, "z": 2}

# NCERT Table 11.1: octant number -> signs of (x, y, z).
_SIGNS = {
    1: (1, 1, 1), 2: (-1, 1, 1), 3: (-1, -1, 1), 4: (1, -1, 1),
    5: (1, 1, -1), 6: (-1, 1, -1), 7: (-1, -1, -1), 8: (1, -1, -1),
}
_OCTANT = {s: n for n, s in _SIGNS.items()}


def _oct(n):
    return Symbol(f"oct{n}")


def _octant_of(P):
    s = tuple(int(sign(c)) for c in P)
    if 0 in s:
        raise ValueError("a point on a coordinate plane is in no octant")
    return _OCTANT[s]


def _foot(P, onto):
    p = Matrix(list(P))
    if onto in _NORMAL:
        n = _E[_NORMAL[onto]]
        f = p - (p.dot(n)) * n
    else:
        d = _E[onto]
        f = (p.dot(d)) * d
    return Tuple(*f)


def key(v, p):
    a = p["ask"]
    if a == "foot":
        return _foot(v["P"], p["onto"])
    if a == "octants":
        return Tuple(_oct(_octant_of(v["A"])), _oct(_octant_of(v["B"])))
    if a == "point":
        s = _SIGNS[int(v["n"])]
        return Tuple(*[si * di for si, di in zip(s, v["d"])])
    raise ValueError(a)


def m1(v, p):
    """The letters in the name vanish: the foot on the ZX-plane is (0, y, 0), on the x-axis (0, y, z)."""
    if p["ask"] != "foot":
        raise ValueError("feet only")
    P = list(v["P"])
    for ch in p["onto"]:
        P[_IDX[ch]] = 0
    return Tuple(*P)


def m2(v, p):
    """Carries the plane's rules over and forgets z: on the x-axis only y = 0, on the y-axis only x = 0;
    the octant is the quadrant of (x, y)."""
    a = p["ask"]
    if a == "foot" and p["onto"] in ("x", "y"):
        P = list(v["P"])
        P[1 - _IDX[p["onto"]]] = 0
        return Tuple(*P)
    if a == "octants":
        q = lambda P: _OCTANT[(int(sign(P[0])), int(sign(P[1])), 1)]
        return Tuple(_oct(q(v["A"])), _oct(q(v["B"])))
    raise ValueError("only an x- or y-axis foot, or an octant")


_CLOCKWISE = {1: 1, 2: 4, 3: 3, 4: 2, 5: 5, 6: 8, 7: 7, 8: 6}


def m3(v, p):
    """Numbers the quadrants clockwise, so II and IV (and VI and VIII) swap."""
    a = p["ask"]
    if a == "octants":
        return Tuple(*[_oct(_CLOCKWISE[_octant_of(v[k])]) for k in ("A", "B")])
    if a == "point":
        s = _SIGNS[_CLOCKWISE[int(v["n"])]]
        return Tuple(*[si * di for si, di in zip(s, v["d"])])
    raise ValueError("octants only")


def m4(v, p):
    """Takes the mirror image for the foot: changes the sign instead of making it 0."""
    if p["ask"] != "foot":
        raise ValueError("feet only")
    f = _foot(v["P"], p["onto"])
    return Tuple(*[2 * a - b for a, b in zip(f, v["P"])])


_FIRST = {"xy": "x", "yz": "y", "zx": "z"}


def m5(v, p):
    """Reads the first letter of the plane's name as its zero coordinate: the XY-plane as x = 0,
    so the distance from the XY-plane is |x|."""
    a = p["ask"]
    if a == "foot" and p["onto"] in _FIRST:
        P = list(v["P"])
        P[_IDX[_FIRST[p["onto"]]]] = 0
        return Tuple(*P)
    if a == "point":
        dyz, dzx, dxy = v["d"]  # under this idea: |y| = d from YZ, |z| = d from ZX, |x| = d from XY
        s = _SIGNS[int(v["n"])]
        return Tuple(s[0] * dxy, s[1] * dyz, s[2] * dzx)
    raise ValueError("only a plane's foot or a point from its distances")


def m6(v, p):
    """Takes octants I-IV as the ones below the XY-plane and V-VIII as the ones above."""
    flip = lambda n: n + 4 if n <= 4 else n - 4
    a = p["ask"]
    if a == "octants":
        return Tuple(*[_oct(flip(_octant_of(v[k]))) for k in ("A", "B")])
    if a == "point":
        s = _SIGNS[flip(int(v["n"]))]
        return Tuple(*[si * di for si, di in zip(s, v["d"])])
    raise ValueError("octants only")


MODELS = {"key": key, "C01-M1": m1, "C01-M2": m2, "C01-M3": m3, "C01-M4": m4, "C01-M5": m5, "C01-M6": m6}
