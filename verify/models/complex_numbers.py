"""Answer and misconception models for Complex Numbers.

Each concept maps "key" and each misconception ID to a function
(inputs, params) -> result. The key model is computed directly from the
definition, never through the method the concept teaches, so it stays an
independent derivation.

Result types by item kind:
  value  -> sympy expression (the answer)
  locus  -> polynomial in x, y (the locus is "poly = 0")
  point  -> polynomial in x, y (the locus the option point must lie on)
"""
from sympy import I, Abs, atan, atan2, expand, im, pi, re, symbols

x, y = symbols("x y", real=True)


# ---------- C06 Division: (a + ib) / (c + id) ----------
def _c06(fn):
    return lambda v, p: fn(v["a"], v["b"], v["c"], v["d"])


C06 = {
    "key": _c06(lambda a, b, c, d: (a + I * b) / (c + I * d)),
    "C06-M1": _c06(lambda a, b, c, d: a / c + I * b / d),
    "C06-M2": _c06(lambda a, b, c, d: expand((a + I * b) * (c - I * d))),
    "C06-M3": _c06(lambda a, b, c, d: expand((a + I * b) * (c - I * d)) / (c**2 - d**2)),
    "C06-M4": _c06(lambda a, b, c, d: ((a * c - b * d) + I * (b * c - a * d)) / (c**2 + d**2)),
    "C06-M5": _c06(lambda a, b, c, d: expand((a + I * b) * (c + I * d)) / (c**2 + d**2)),
}


# ---------- C14 Argument of x + iy ----------
def _in_range(theta, p):
    if p.get("range") == "0_2pi" and theta < 0:
        return theta + 2 * pi
    return theta


def _place(alpha, px, py):
    """Put a reference angle in the quadrant of (px, py), principal range."""
    if px > 0 and py >= 0:
        return alpha
    if px < 0 and py >= 0:
        return pi - alpha
    if px < 0 and py < 0:
        return -(pi - alpha)
    return -alpha


def _c14_key(v, p):
    return _in_range(atan2(v["y"], v["x"]), p)


def _c14_m1(v, p):  # tan^-1(y/x) taken as the argument
    if v["x"] == 0:
        raise ValueError("tan^-1(y/x) is undefined when x = 0")
    return atan(v["y"] / v["x"])


def _c14_m2(v, p):  # range convention mixed up
    principal = atan2(v["y"], v["x"])
    if p.get("range") == "0_2pi":
        return principal  # gave the principal value when [0, 2pi) was asked
    if principal == pi:
        return -pi  # the excluded endpoint
    return principal + 2 * pi if principal < 0 else principal


def _c14_m3(v, p):  # reference angle measured from the imaginary axis
    px, py = v["x"], v["y"]
    if px == 0 or py == 0:
        theta = atan2(px, py)  # axis point: real and imaginary roles swapped
    else:
        theta = _place(atan(Abs(px / py)), px, py)
    return _in_range(theta, p)


def _c14_m4(v, p):  # reference angle, not placed by quadrant
    return pi / 2 if v["x"] == 0 else atan(Abs(v["y"] / v["x"]))


C14 = {"key": _c14_key, "C14-M1": _c14_m1, "C14-M2": _c14_m2, "C14-M3": _c14_m3, "C14-M4": _c14_m4}


# ---------- C25 |z - a| = |z - b| ----------
def _bisector(a, b):
    return expand((x - re(a)) ** 2 + (y - im(a)) ** 2 - (x - re(b)) ** 2 - (y - im(b)) ** 2)


def _line_through(a, b):
    return expand((x - re(a)) * (im(b) - im(a)) - (y - im(a)) * (re(b) - re(a)))


def _circle_on_diameter(a, b):
    c = (a + b) / 2
    return expand((x - re(c)) ** 2 + (y - im(c)) ** 2 - Abs(a - b) ** 2 / 4)


def _c25_m2(v, p):  # sign of the listed point(s) misread
    flip = p.get("flip", [])
    a = -v["a"] if "a" in flip else v["a"]
    b = -v["b"] if "b" in flip else v["b"]
    return _bisector(a, b)


C25 = {
    "key": lambda v, p: _bisector(v["a"], v["b"]),
    "C25-M1": lambda v, p: _circle_on_diameter(v["a"], v["b"]),
    "C25-M2": _c25_m2,
    "C25-M3": lambda v, p: _line_through(v["a"], v["b"]),
}


MODELS = {"C06": C06, "C14": C14, "C25": C25}
