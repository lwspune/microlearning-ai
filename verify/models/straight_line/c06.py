"""C06 Slope-intercept, intercept and normal forms: answer models (the key, and one per misconception).

params["given"] picks the question type:
  slope_xint  inputs m, a: slope m, X-intercept a; the answer is the Y-intercept.
  slope_yint  inputs m, c: slope m, Y-intercept c; the answer is the X-intercept.
  intercepts  inputs a, b: X-intercept a, Y-intercept b; the answer is the line (a polynomial = 0).
  midpoint    inputs h, k: (h, k) bisects the segment of the line between the axes; the answer is the line.
  general     inputs A, B, C: the line Ax + By + C = 0; the answer is (p, alpha in degrees) of its normal form.
  normal      inputs p, alpha (radians): the perpendicular from the origin; the answer is the line.
"""
from sympy import Abs, Tuple, atan, atan2, cos, pi, simplify, sin, sqrt, symbols

x, y = symbols("x y", real=True)


def _through(p1, p2):
    """The line through two points, as a polynomial (= 0)."""
    (x1, y1), (x2, y2) = p1, p2
    return (y2 - y1) * (x - x1) - (x2 - x1) * (y - y1)


def _deg(angle, period=360):
    d = simplify(angle * 180 / pi)
    while d < 0:
        d += period
    while d >= period:
        d -= period
    return d


def _foot(v):
    """Foot of the perpendicular from the origin to Ax + By + C = 0 (C != 0)."""
    A, B, C = v["A"], v["B"], v["C"]
    if C == 0:
        raise ValueError("the line passes through the origin")
    d = A**2 + B**2
    return simplify(-C * A / d), simplify(-C * B / d)


def key(v, p):
    g = p["given"]
    if g == "slope_xint":  # through (a, 0) with slope m: y = m(x - a); put x = 0
        return -v["m"] * v["a"]
    if g == "slope_yint":  # y = mx + c; put y = 0
        return -v["c"] / v["m"]
    if g == "intercepts":
        return _through((v["a"], 0), (0, v["b"]))
    if g == "midpoint":  # the ends of the segment are (2h, 0) and (0, 2k)
        return _through((2 * v["h"], 0), (0, 2 * v["k"]))
    if g == "general":  # p = ON, alpha = direction of ON, N the foot of the perpendicular
        fx, fy = _foot(v)
        return Tuple(simplify(sqrt(fx**2 + fy**2)), _deg(atan2(fy, fx)))
    if g == "normal":  # through N(p cos a, p sin a), perpendicular to ON
        a, r = v["alpha"], v["p"]
        return cos(a) * (x - r * cos(a)) + sin(a) * (y - r * sin(a))
    raise ValueError(f"unknown question type {g}")


def m1(v, p):
    """Takes c in y = mx + c as the X-intercept."""
    g = p["given"]
    if g == "slope_xint":  # writes y = mx + a, so the Y-intercept is a
        return v["a"]
    if g == "slope_yint":  # reads the X-intercept as c
        return v["c"]
    if g == "intercepts":  # right slope -b/a, but c = a
        return y - (-v["b"] / v["a"]) * x - v["a"]
    raise ValueError("no c to misread")


def m2(v, p):
    """Reads the numbers off before the equation is in the form: x/a + y/b = 1 taken as ax + by = 1
    (so the slope is -a/b), and the constant of ax + by = c taken as p without dividing by sqrt(a^2 + b^2)."""
    g = p["given"]
    if g == "slope_xint":  # ax + by = 1 with slope -a/b = m
        return -v["a"] / v["m"]
    if g == "slope_yint":  # ax + cy = 1 with slope -a/c = m
        return -v["m"] * v["c"]
    if g == "intercepts":
        return v["a"] * x + v["b"] * y - 1
    if g == "midpoint":  # right intercepts 2h, 2k, wrong form
        return 2 * v["h"] * x + 2 * v["k"] * y - 1
    if g == "general":  # right direction, but p is the constant itself
        return Tuple(Abs(v["C"]), key(v, p)[1])
    if g == "normal":  # clears the fractions on the left (cos, sin of 30 or 60 degrees) but not on the right
        a = v["alpha"]
        ratios = [Abs(cos(a)), Abs(sin(a))]
        if 0 in ratios:
            raise ValueError("no fractions to clear")
        k = 1 / min(ratios, key=lambda t: float(t))
        return k * cos(a) * x + k * sin(a) * y - v["p"]
    raise ValueError(f"unknown question type {g}")


def m3(v, p):
    """Drops the minus linking slope and intercepts: slope b/a, c = ma, X-intercept c/m."""
    g = p["given"]
    if g == "slope_xint":
        return v["m"] * v["a"]
    if g == "slope_yint":
        return v["c"] / v["m"]
    if g == "intercepts":  # y = (b/a)x + b
        return y - v["b"] / v["a"] * x - v["b"]
    if g == "midpoint":  # slope (2k)/(2h) through (h, k)
        h, k = v["h"], v["k"]
        return (y - k) - k / h * (x - h)
    raise ValueError("no slope from intercepts here")


def m4(v, p):
    """Takes the bisecting point's coordinates as the intercepts."""
    if p["given"] != "midpoint":
        raise ValueError("no bisecting point")
    return _through((v["h"], 0), (0, v["k"]))


def m5(v, p):
    """Takes alpha as the inclination of the line, not the direction of the perpendicular."""
    g = p["given"]
    if g == "general":  # reports the line's inclination as alpha
        A, B = v["A"], v["B"]
        if B == 0:
            raise ValueError("vertical line")
        return Tuple(key(v, p)[0], _deg(atan(-A / B), 180))
    if g == "normal":  # turns the perpendicular's 150 degrees into the line's inclination, then uses it as alpha
        a = v["alpha"] - pi / 2
        while a < 0:
            a += pi
        return x * cos(a) + y * sin(a) - v["p"]
    raise ValueError("no alpha here")


def m6(v, p):
    """Uses the acute angle and ignores the signs of cos alpha and sin alpha."""
    g = p["given"]
    if g == "general":  # alpha from tan alpha = B/A alone
        fx, fy = _foot(v)
        if fx == 0:
            raise ValueError("alpha is 90 or 270 degrees")
        return Tuple(key(v, p)[0], _deg(atan(Abs(fy / fx))))
    if g == "normal":  # cos and sin of the reference angle
        a = v["alpha"]
        ref = atan(Abs(simplify(sin(a) / cos(a))))
        return x * cos(ref) + y * sin(ref) - v["p"]
    raise ValueError("no alpha here")


MODELS = {"key": key, "C06-M1": m1, "C06-M2": m2, "C06-M3": m3, "C06-M4": m4, "C06-M5": m5, "C06-M6": m6}
