"""C01 Vectors in space and their magnitude: answer models (the key, and one per misconception).

params["ask"] says what the item asks:
  unit      inputs u: the unit vector along u (a 3-component Matrix);
  scaled    inputs u, L: the vector of magnitude L along u;
  mag_ab    inputs A, B: the magnitude of AB (A, B are points);
  ab        inputs A, B: the vector AB, as components;
  terminal  inputs A, AB: the terminal point B, as a Tuple (x, y, z).
Points and vectors come in as tuples "(1, -3, 4)".

The key is the definition: |a| is the Pythagorean length sqrt(x^2 + y^2 + z^2), AB's components are
the changes in the coordinates from A to B, and a unit vector is the vector divided by its length.
"""
from sympy import Abs, Matrix, Tuple, sqrt


def _v(t):
    return Matrix(list(t))


def _len(a):
    return sqrt(sum(c**2 for c in a))


def _walk(a):  # M1: adds the sizes of the components
    return sum(Abs(c) for c in a)


def _sq(a):  # M2: forgets the square root
    return sum(c**2 for c in a)


def _point(m):
    return Tuple(*m)


def _by_norm(norm):
    """Answers that only need a length rule: unit, scaled and mag_ab."""
    def f(v, p):
        ask = p["ask"]
        if ask == "unit":
            u = _v(v["u"])
            return u / norm(u)
        if ask == "scaled":
            u = _v(v["u"])
            return v["L"] * u / norm(u)
        if ask == "mag_ab":
            return norm(_v(v["B"]) - _v(v["A"]))
        raise ValueError(f"{ask}: no length involved")
    return f


def key(v, p):
    ask = p["ask"]
    if ask == "ab":
        return _v(v["B"]) - _v(v["A"])
    if ask == "terminal":  # the coordinates change by AB's components
        return _point(_v(v["A"]) + _v(v["AB"]))
    return _by_norm(_len)(v, p)


m1 = _by_norm(_walk)
m2 = _by_norm(_sq)


def m3(v, p):  # AB = a - b: initial minus terminal
    ask = p["ask"]
    if ask == "ab":
        return _v(v["A"]) - _v(v["B"])
    if ask == "terminal":  # AB = A - B, so B = A - AB
        return _point(_v(v["A"]) - _v(v["AB"]))
    raise ValueError("BA has the same length as AB")


def m4(v, p):  # no normalising: the given vector is taken as the direction
    ask = p["ask"]
    if ask == "unit":
        return _v(v["u"])
    if ask == "scaled":
        return v["L"] * _v(v["u"])
    raise ValueError(f"{ask}: no unit vector involved")


def m5(v, p):  # AB = a + b: adds the position vectors
    ask = p["ask"]
    if ask == "ab":
        return _v(v["A"]) + _v(v["B"])
    if ask == "terminal":  # AB = A + B, so B = AB - A
        return _point(_v(v["AB"]) - _v(v["A"]))
    if ask == "mag_ab":
        return _len(_v(v["A"]) + _v(v["B"]))
    raise ValueError(f"{ask}: no AB involved")


def m6(v, p):  # AB = b: AB's components read as B's coordinates, as if A were the origin
    ask = p["ask"]
    if ask == "ab":
        return _v(v["B"])
    if ask == "terminal":
        return _point(_v(v["AB"]))
    if ask == "mag_ab":
        return _len(_v(v["B"]))
    raise ValueError(f"{ask}: no AB involved")


MODELS = {"key": key, "C01-M1": m1, "C01-M2": m2, "C01-M3": m3, "C01-M4": m4, "C01-M5": m5, "C01-M6": m6}
