"""C02 The parabola y^2 = 4ax: answer models (the key, and one per misconception).

p["ask"] picks the question type; the inputs say what is given:
  focus      the parabola k y^2 = l x (inputs k, l) -> the focus, Tuple(x, y)
  directrix  k y^2 = l x -> the directrix (a polynomial in x, y; the line is it = 0)
  ends       k y^2 = l x -> the ends of the latus rectum, FiniteSet of two Tuples
  lr         y^2 = 4ax through the point (x1, y1) -> the length of the latus rectum
  eq_dir     vertex at the origin, directrix x = d (input d) -> the parabola (polynomial = 0)
  eq_end     vertex at the origin, latus rectum ends (ex, ey) and (ex, -ey) -> the parabola
The key works from the definition SP = PM (focus S, directrix x = -s), never from
the read-off rules being taught.
"""
from sympy import Abs, FiniteSet, Poly, Rational, Tuple, expand, simplify, solve, symbols

x, y = symbols("x y", real=True)
_s = symbols("s", real=True)


def _ends(a):
    return FiniteSet(Tuple(a, 2 * a), Tuple(a, -2 * a))


def _std(a):
    """y^2 = 4ax as a polynomial."""
    return expand(y**2 - 4 * a * x)


def _ask(p):
    return p["ask"]


def _read(v, p):
    if _ask(p) not in ("focus", "directrix", "ends"):
        raise ValueError("not a read-off item")
    return v["k"], v["l"]


# ---------- the key: from SP^2 = PM^2 ----------

def _focal_parameter(k, l):
    """s with focus (s, 0), directrix x = -s, such that SP^2 - PM^2 is a multiple of k y^2 - l x."""
    diff = expand((x - _s) ** 2 + y**2 - (x + _s) ** 2)  # = y^2 - 4 s x
    target = expand((k * y**2 - l * x) / k)
    sols = solve(Poly(diff - target, x, y).coeffs(), _s, dict=True)
    if len(sols) != 1:
        raise ValueError("not a parabola y^2 = 4ax")
    return sols[0][_s]


def _locus(S, d):
    """Points with SP = PM for focus S and the vertical directrix x = d."""
    return expand((x - S[0]) ** 2 + (y - S[1]) ** 2 - (x - d) ** 2)


def _chord_through_focus(poly, s):
    """The two points where the line x = s (through the focus, across the axis) meets the parabola."""
    ys = solve(poly.subs(x, s), y)
    return FiniteSet(*[Tuple(s, yy) for yy in ys])


def key(v, p):
    ask = _ask(p)
    if ask in ("focus", "directrix", "ends"):
        k, l = v["k"], v["l"]
        s = _focal_parameter(k, l)
        if ask == "focus":
            return Tuple(s, 0)
        if ask == "directrix":
            return expand(x + s)
        return _chord_through_focus(expand(k * y**2 - l * x), s)
    if ask == "lr":
        # The point fixes the parabola; the latus rectum is the focal chord across the axis.
        x1, y1 = v["x1"], v["y1"]
        (a,) = solve(y1**2 - 4 * _s * x1, _s)
        ends = list(_chord_through_focus(_std(a), a))
        return Abs(ends[0][1] - ends[1][1])
    if ask == "eq_dir":
        # Vertex O is midway between the focus and the directrix, so the focus is (-d, 0).
        d = v["d"]
        return _locus((-d, 0), d)
    if ask == "eq_end":
        # The latus rectum passes through the focus, on the axis: S = (ex, 0); vertex O midway gives x = -ex.
        ex = v["ex"]
        return _locus((ex, 0), -ex)
    raise ValueError(f"unknown ask {ask}")


# ---------- misconceptions ----------

def m1(v, p):
    """Drops the 4: takes the standard parabola as y^2 = ax (focus (a, 0), latus rectum 4a)."""
    ask = _ask(p)
    if ask in ("focus", "directrix", "ends"):
        k, l = _read(v, p)
        a = l / k
        return {"focus": Tuple(a, 0), "directrix": expand(x + a), "ends": _ends(a)}[ask]
    if ask == "lr":
        a = v["y1"] ** 2 / v["x1"]  # from y1^2 = a x1
        return 4 * a
    if ask == "eq_dir":
        return expand(y**2 + v["d"] * x)  # a = -d, then y^2 = ax
    if ask == "eq_end":
        return expand(y**2 - v["ex"] * x)  # a = ex, then y^2 = ax
    raise ValueError(f"unknown ask {ask}")


def m2(v, p):
    """Reads 4a straight off the coefficient of x without first dividing by the coefficient of y^2."""
    k, l = _read(v, p)
    if k == 1:
        raise ValueError("y^2 has coefficient 1: nothing to divide by")
    a = l / 4
    return {"focus": Tuple(a, 0), "directrix": expand(x + a), "ends": _ends(a)}[_ask(p)]


def m3(v, p):
    """Takes the half-length of the latus rectum as a, not 2a: ends (a, +-a), length 2a."""
    ask = _ask(p)
    if ask == "ends":
        k, l = _read(v, p)
        a = l / (4 * k)
        return FiniteSet(Tuple(a, a), Tuple(a, -a))
    if ask == "lr":
        a = v["y1"] ** 2 / (4 * v["x1"])
        return 2 * a
    if ask == "eq_end":
        return _std(Abs(v["ey"]))  # reads a off the ordinate of the end
    raise ValueError("the half-length of the latus rectum plays no part here")


def m4(v, p):
    """Swaps the sides: focus (-a, 0) and directrix x = a."""
    ask = _ask(p)
    if ask in ("focus", "directrix", "ends"):
        k, l = _read(v, p)
        a = l / (4 * k)
        return {"focus": Tuple(-a, 0), "directrix": expand(x - a),
                "ends": FiniteSet(Tuple(-a, 2 * a), Tuple(-a, -2 * a))}[ask]
    if ask == "eq_dir":
        return _std(v["d"])  # directrix x = a, so a = d
    if ask == "eq_end":
        return _std(-v["ex"])  # focus (-a, 0) on the latus rectum, so a = -ex
    raise ValueError("the latus rectum's length does not depend on the side")


def m5(v, p):
    """Puts the axis along the squared variable: y^2 = 4ax read as focus (0, a), directrix y = -a,
    ends (+-2a, a); 'axis along the x-axis' written as x^2 = 4ay."""
    ask = _ask(p)
    if ask in ("focus", "directrix", "ends"):
        k, l = _read(v, p)
        a = l / (4 * k)
        return {"focus": Tuple(0, a), "directrix": expand(y + a),
                "ends": FiniteSet(Tuple(2 * a, a), Tuple(-2 * a, a))}[ask]
    if ask == "lr":
        if v["y1"] == 0:
            raise ValueError("the point is on the x-axis")
        return v["x1"] ** 2 / v["y1"]  # 4a from x1^2 = 4a y1
    if ask == "eq_dir":
        return expand(x**2 + 4 * v["d"] * y)  # a = -d, then x^2 = 4ay
    raise ValueError("the latus rectum ends fix which variable is squared")


MODELS = {"key": key, "C02-M1": m1, "C02-M2": m2, "C02-M3": m3, "C02-M4": m4, "C02-M5": m5}
