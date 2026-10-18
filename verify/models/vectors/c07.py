"""C07 Direction cosines and direction ratios: answer models (the key, and one per misconception).

params["ask"] says what the item asks:
  ratios    inputs d (direction ratios): the direction cosines (l, m, n), as a Tuple;
  points    inputs A, B (points on the line): the direction cosines of the line, as a Tuple;
            both take params acute="1": the direction in which alpha is acute;
  third     inputs a, b (two direction angles, radians): every possible third angle, a FiniteSet
            (EmptySet when no line has those two angles);
  vec_yz    inputs b (the angle with the y-axis), L: every vector of magnitude L in the YZ-plane
            making angle b with the y-axis, a FiniteSet of component Tuples;
  terminal  inputs A, d (direction ratios of AB), L (= AB): the point B, as a Tuple.
Points and vectors come in as tuples "(1, -3, 4)".

The key is the definition: l = cos(alpha) is the cosine of the angle with the x-axis, found from the
dot product with i-hat; a direction is a vector of length 1, so a missing cosine n is any real
solution of l^2 + m^2 + n^2 = 1, and each one gives an angle acos(n) in [0, pi].
"""
from sympy import EmptySet, FiniteSet, Matrix, Symbol, Tuple, acos, asin, cos, pi, sin, solve, sqrt

_n = Symbol("n", real=True)


def _v(t):
    return Matrix(list(t))


def _len(d):
    return sqrt(sum(c**2 for c in d))


def _ratios(v, p):
    if p["ask"] == "ratios":
        return _v(v["d"])
    if p["ask"] == "points":
        return _v(v["B"]) - _v(v["A"])
    raise ValueError(f"{p['ask']}: no direction ratios")


def _oriented(u, p):
    """The direction the question fixes: alpha acute means l > 0."""
    if p.get("acute") == "1" and u[0] < 0:
        u = -u
    return Tuple(*u)


def _scaled(scale):
    """Direction cosines as the ratios times scale(ratios), turned to the direction the question fixes."""
    def f(v, p):
        d = _ratios(v, p)
        return _oriented(d * scale(d), p)
    return f


def _cosines(d):  # the definition: cos(angle with each axis) = d . e / |d|
    return Matrix([d.dot(e) / _len(d) for e in (Matrix([1, 0, 0]), Matrix([0, 1, 0]), Matrix([0, 0, 1]))])


def _missing(known):
    """Every real n with sum(known^2) + n^2 = 1: the cosines a unit vector can have."""
    return sorted(solve(sum(k**2 for k in known) + _n**2 - 1, _n), key=lambda s: -s)


def _angles(ns):
    return FiniteSet(*[acos(c) for c in ns]) if ns else EmptySet


def _yz(m, ns, L):
    return FiniteSet(*[Tuple(0, L * m, L * c) for c in ns])


def key(v, p):
    ask = p["ask"]
    if ask in ("ratios", "points"):
        return _oriented(_cosines(_ratios(v, p)), p)
    if ask == "third":
        return _angles(_missing([cos(v["a"]), cos(v["b"])]))
    if ask == "vec_yz":
        m = cos(v["b"])
        return _yz(m, _missing([0, m]), v["L"])
    if ask == "terminal":
        return Tuple(*(_v(v["A"]) + v["L"] * _cosines(_v(v["d"]))))
    raise ValueError(ask)


def m1(v, p):  # the cosines add to 1: l + m + n = 1
    ask = p["ask"]
    if ask in ("ratios", "points"):
        return _scaled(lambda d: 1 / sum(d))(v, p)
    if ask == "third":
        c = 1 - cos(v["a"]) - cos(v["b"])
        if abs(c) > 1:
            raise ValueError("no angle has that cosine")
        return FiniteSet(acos(c))
    if ask == "vec_yz":
        m = cos(v["b"])
        return _yz(m, [1 - m], v["L"])
    raise ValueError(f"{ask}: M1 not modelled")


def m2(v, p):  # forgets the square root: divides by a^2 + b^2 + c^2, or takes cos(gamma) = +-cos^2(gamma)
    ask = p["ask"]
    if ask in ("ratios", "points"):
        return _scaled(lambda d: 1 / sum(c**2 for c in d))(v, p)
    if ask == "third":
        s = 1 - cos(v["a"]) ** 2 - cos(v["b"]) ** 2
        if abs(s) > 1:
            raise ValueError("no angle has that cosine")
        return FiniteSet(acos(s), acos(-s))
    if ask == "vec_yz":
        m = cos(v["b"])
        s = 1 - m**2
        return _yz(m, [s, -s], v["L"])
    if ask == "terminal":
        d = _v(v["d"])
        return Tuple(*(_v(v["A"]) + v["L"] * d / sum(c**2 for c in d)))
    raise ValueError(ask)


def m3(v, p):  # the direction ratios are the direction cosines (no scaling)
    ask = p["ask"]
    if ask in ("ratios", "points"):
        return _scaled(lambda d: 1)(v, p)
    if ask == "terminal":
        return Tuple(*(_v(v["A"]) + v["L"] * _v(v["d"])))
    raise ValueError(f"{ask}: no ratios to scale")


def m4(v, p):  # only the positive square root: misses the obtuse angle, ignores the sign the question fixes
    ask = p["ask"]
    if ask == "points":
        d = _ratios(v, p)
        return Tuple(*(d / _len(d)))
    if ask == "third":
        return _angles(_missing([cos(v["a"]), cos(v["b"])])[:1])
    if ask == "vec_yz":
        m = cos(v["b"])
        return _yz(m, _missing([0, m])[:1], v["L"])
    raise ValueError(f"{ask}: no root taken")


def m5(v, p):  # the direction cosine is the sine of the direction angle
    ask = p["ask"]
    if ask == "third":
        s2 = 1 - sin(v["a"]) ** 2 - sin(v["b"]) ** 2
        if s2 < 0:
            return EmptySet
        s = sqrt(s2)
        return FiniteSet(asin(s), pi - asin(s))
    if ask == "vec_yz":  # the plane still gives l = 0; the given angle goes in as a sine
        m = sin(v["b"])
        return _yz(m, _missing([0, m]), v["L"])
    raise ValueError(f"{ask}: no angle given")


def m6(v, p):  # B = L(l, m, n): the steps from A taken as B's coordinates, as if A were O
    if p["ask"] == "terminal":
        return Tuple(*(v["L"] * _cosines(_v(v["d"]))))
    raise ValueError(f"{p['ask']}: no point to reach")


MODELS = {"key": key, "C07-M1": m1, "C07-M2": m2, "C07-M3": m3, "C07-M4": m4, "C07-M5": m5, "C07-M6": m6}
