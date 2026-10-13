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
from sympy import I, Abs, atan, atan2, expand, im, pi, re, sqrt, symbols

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


# ---------- C04 Arithmetic: mul p*q, sq p^2, sub_mul p - q*r ----------
def _parts(z):
    return re(z), im(z)


def _mul(z1, z2, kind):
    a, b = _parts(z1)
    c, d = _parts(z2)
    if kind == "key":
        return expand(z1 * z2)
    if kind == "C04-M1":  # i^2 = +1
        return (a * c + b * d) + I * (a * d + b * c)
    if kind == "C04-M2":  # real parts times real parts, imaginary times imaginary
        return a * c + I * (b * d)
    if kind == "C04-M4":  # drops the i^2 term
        return a * c + I * (a * d + b * c)
    raise ValueError(f"{kind} does not apply to multiplication")


def _sq(z, kind):
    a, b = _parts(z)
    if kind == "C04-M5":  # squares term by term: a^2 + (ib)^2
        return a**2 - b**2
    return _mul(z, z, kind)


def _sub(z1, z2, kind):
    a, b = _parts(z1)
    c, d = _parts(z2)
    if kind == "C04-M3":  # the minus reaches only the real part
        return (a - c) + I * (b + d)
    return expand(z1 - z2)


def _c04(kind):
    def model(v, p):
        op = p["op"]
        if op == "mul":
            return _mul(v["p"], v["q"], kind)
        if op == "sq":
            return _sq(v["p"], kind)
        if op == "sub_mul":
            product_kind = kind if kind in ("C04-M1", "C04-M2", "C04-M4") else "key"
            return _sub(v["p"], _mul(v["q"], v["r"], product_kind), kind)
        raise ValueError(f"unknown op {op}")
    return model


C04 = {k: _c04(k) for k in ["key", "C04-M1", "C04-M2", "C04-M3", "C04-M4", "C04-M5"]}


# ---------- C05 Conjugate: zzbar, zminuszbar, conjprod ----------
def _conj(z, kind):
    a, b = _parts(z)
    if kind == "C05-M1":  # flips the real part instead
        return -a + I * b
    if kind == "C05-M2":  # flips both parts
        return -a - I * b
    return a - I * b


def _c05(kind):
    def model(v, p):
        op = p["op"]
        if op == "zzbar":
            if kind == "C05-M3":  # (a+ib)(a-ib) = a^2 - b^2
                a, b = _parts(v["z"])
                return a**2 - b**2
            return expand(v["z"] * _conj(v["z"], kind))
        if op == "zminuszbar":
            if kind == "C05-M4":  # forgets the i: 2b
                return 2 * im(v["z"])
            return expand(v["z"] - _conj(v["z"], kind))
        if op == "conjprod":
            if kind == "C05-M5":  # conjugates only the first factor
                return expand(_conj(v["z1"], "key") * v["z2"])
            return expand(_conj(expand(v["z1"] * v["z2"]), kind))
        raise ValueError(f"unknown op {op}")
    return model


C05 = {k: _c05(k) for k in ["key", "C05-M1", "C05-M2", "C05-M3", "C05-M4", "C05-M5"]}


# ---------- C10 Argand plane: point (as x + iy) or quadrant ----------
def _quadrant(x, y):
    if x == 0 or y == 0:
        raise ValueError("point on an axis has no quadrant")
    if x > 0:
        return 1 if y > 0 else 4
    return 2 if y > 0 else 3


def _c10(transform):
    def model(v, p):
        x, y = transform(v["x"], v["y"])
        return _quadrant(x, y) if p.get("target") == "quadrant" else x + I * y
    return model


C10 = {
    "key": _c10(lambda x, y: (x, y)),
    "C10-M1": _c10(lambda x, y: (y, x)),  # swaps the axes
    "C10-M2": _c10(lambda x, y: (x, -y)),  # flips the sign of the imaginary part
    "C10-M3": _c10(lambda x, y: (-x, y)),  # flips the sign of the real part
}


# ---------- C11 Modulus as distance: abs (z) or dist (z1, z2) ----------
def _c11(kind):
    def model(v, p):
        op = p["op"]
        z = v["z"] if op == "abs" else expand(v["z1"] - v["z2"])
        a, b = _parts(z)
        if kind == "key":
            return sqrt(a**2 + b**2)
        if kind == "C11-M1":  # adds the sizes of the parts
            return Abs(a) + Abs(b)
        if kind == "C11-M2":  # an i^2 sneaks in: sqrt(a^2 - b^2)
            return sqrt(a**2 - b**2)
        if kind == "C11-M3":  # forgets the square root
            return a**2 + b**2
        if op != "dist":
            raise ValueError(f"{kind} applies only to distances")
        if kind == "C11-M4":  # distance as |z1 + z2|
            return Abs(expand(v["z1"] + v["z2"]))
        if kind == "C11-M5":  # |z1 - z2| as |z1| - |z2|
            return Abs(v["z1"]) - Abs(v["z2"])
        raise ValueError(f"unknown model {kind}")
    return model


C11 = {k: _c11(k) for k in ["key", "C11-M1", "C11-M2", "C11-M3", "C11-M4", "C11-M5"]}


MODELS = {"C04": C04, "C05": C05, "C06": C06, "C10": C10, "C11": C11, "C14": C14, "C25": C25}
