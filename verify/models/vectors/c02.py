"""C02 Adding vectors and the triangle law: answer models (the key, and one per misconception).

params["ask"] says what the item asks:
  tri_mid   triangle PQR, inputs PQ, QR (vectors in a, b), M the midpoint of PR: the vector QM;
  trap_bd   trapezium ABCD, inputs p = AB, q = BC, r with DC = r AB (same sense): the vector BD;
  trap_da   the same trapezium: the vector DA;
  third     inputs u = AB, v = BC (component tuples), two sides of triangle ABC: the third side CA;
  combo     inputs a, b (tuples), s, t: the vector s a + t b, with t < 0;
  diag      parallelogram ABCD, inputs AC, BD (tuples): the side AB.

The key works from position vectors (put the first vertex at the origin, every other vertex is the
sum of the arrows that reach it), so it never walks a path the way a student does.
"""
from sympy import Abs, Matrix, Rational


def _v(t):
    return Matrix(list(t))


def key(v, p):
    ask = p["ask"]
    if ask == "tri_mid":  # P at the origin
        Q = v["PQ"]
        R = Q + v["QR"]
        M = R / 2
        return M - Q
    if ask in ("trap_bd", "trap_da"):  # A at the origin; DC = r AB, so D = C - r AB
        B = v["p"]
        C = B + v["q"]
        D = C - v["r"] * v["p"]
        return D - B if ask == "trap_bd" else -D
    if ask == "third":  # A at the origin
        C = _v(v["u"]) + _v(v["v"])
        return -C
    if ask == "combo":
        return v["s"] * _v(v["a"]) + v["t"] * _v(v["b"])
    if ask == "diag":  # A at the origin, C = B + D, BD = D - B
        C, BD = _v(v["AC"]), _v(v["BD"])
        B = (C - BD) / 2
        return B
    raise ValueError(ask)


def m1(v, p):  # a side walked against its arrow is still added with +
    ask = p["ask"]
    if ask == "tri_mid":  # QM = QP + PM, with QP taken as +PQ
        return v["PQ"] + (v["PQ"] + v["QR"]) / 2
    if ask == "trap_bd":  # BD = BC + CD, with CD taken as +DC
        return v["q"] + v["r"] * v["p"]
    if ask == "trap_da":  # DA = DC + CB + BA, with CB, BA taken as +BC, +AB
        return v["r"] * v["p"] + v["q"] + v["p"]
    if ask == "third":  # CA = CB + BA, with both taken as +BC, +AB
        return _v(v["u"]) + _v(v["v"])
    raise ValueError(f"{ask}: no path walked against an arrow")


def m2(v, p):  # the difference reversed: the vector from the head of b to the head of a taken as b - a
    ask = p["ask"]
    if ask == "tri_mid":  # QM = PM - PQ, reversed
        return v["PQ"] - (v["PQ"] + v["QR"]) / 2
    if ask == "trap_bd":  # BD = AD - AB, reversed; AD = AB + BC + CD
        AD = v["p"] + v["q"] - v["r"] * v["p"]
        return v["p"] - AD
    if ask == "combo":  # s a + t b (t < 0) taken as -t b - s a
        if v["t"] >= 0:
            raise ValueError("no subtraction")
        return -key(v, p)
    if ask == "diag":  # BD = AB - AD, reversed, so AC + BD = 2 AB
        return (_v(v["AC"]) + _v(v["BD"])) / 2
    raise ValueError(f"{ask}: no difference")


def _first_only(k, vec):
    """k times a sum, multiplying only its first non-zero term (the components are the terms)."""
    out = list(vec)
    for i, c in enumerate(out):
        if c != 0:
            out[i] = k * c
            break
    return Matrix(out)


def m3(v, p):  # a number in front of a bracket multiplies only its first term
    ask = p["ask"]
    if ask == "tri_mid":  # PM = 1/2 (PQ + QR) taken as 1/2 PQ + QR
        return -v["PQ"] + v["PQ"] / 2 + v["QR"]
    if ask == "trap_da":  # DA = -AD = -(q - (r - 1) p), the minus on q only
        return -v["q"] - (v["r"] - 1) * v["p"]
    if ask == "third":  # CA = -(AB + BC), the minus on the i-part only
        return _first_only(-1, _v(v["u"]) + _v(v["v"]))
    if ask == "combo":
        return _first_only(v["s"], _v(v["a"])) + _first_only(v["t"], _v(v["b"]))
    if ask == "diag":  # AB = 1/2 (AC - BD), the half on the i-part only
        return _first_only(Rational(1, 2), _v(v["AC"]) - _v(v["BD"]))
    raise ValueError(f"{ask}: no bracket")


def m4(v, p):  # parallel taken as equal: DC = AB, the scale factor dropped
    ask = p["ask"]
    if ask in ("trap_bd", "trap_da"):
        return key(dict(v, r=1), p)
    raise ValueError(f"{ask}: no parallel sides")


def m5(v, p):  # sides taken in order treated as starting at one point: the third side joins their heads
    if p["ask"] == "third":
        return _v(v["v"]) - _v(v["u"])
    raise ValueError("no third side")


def m6(v, p):  # subtracting a negative component taken as subtracting its size: x - (-y) = x - y
    ask = p["ask"]
    if ask == "combo":
        if v["t"] >= 0:
            raise ValueError("no subtraction")
        return v["s"] * _v(v["a"]) + v["t"] * _v(v["b"]).applyfunc(Abs)
    if ask == "diag":
        return (_v(v["AC"]) - _v(v["BD"]).applyfunc(Abs)) / 2
    raise ValueError(f"{ask}: no subtraction of components")


MODELS = {"key": key, "C02-M1": m1, "C02-M2": m2, "C02-M3": m3, "C02-M4": m4, "C02-M5": m5, "C02-M6": m6}
