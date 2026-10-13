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
from sympy import Abs, I, Integer, Rational, Symbol, arg, atan, atan2, cos, expand, im, pi, re, real_root, simplify, sin, sqrt, symbols, sympify

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


# ---------- C01 The imaginary unit ----------
def _sqrt_variant(a, kind):
    """sqrt of a real number a, using the misconception's rule when a < 0."""
    if a >= 0:
        return sqrt(a)
    m = sqrt(-a)
    return {
        "C01-M3": -m,  # pulls the minus outside: sqrt(-a) = -sqrt(a)
        "C01-M5": m,  # drops the minus: sqrt(-a) = sqrt(a)
        "C01-M6": -I * m,  # takes the negative root
    }.get(kind, I * m)


_SQRT_KINDS = ("key", "C01-M3", "C01-M5", "C01-M6")


def _c01(kind):
    def model(v, p):
        op = p["op"]
        if op == "sqrt":
            if kind not in _SQRT_KINDS:
                raise ValueError(f"{kind} does not apply")
            return _sqrt_variant(v["a"], kind)
        if op == "sqrt_sum":
            if kind not in _SQRT_KINDS:
                raise ValueError(f"{kind} does not apply")
            return _sqrt_variant(v["a"], kind) + _sqrt_variant(v["b"], kind)
        if op == "sqrt_prod":
            a, b = v["a"], v["b"]
            if kind == "C01-M1":  # sqrt(a) sqrt(b) = sqrt(ab) even when both are negative
                return sqrt(a * b)
            if kind == "C01-M7":  # multiplies under one root but keeps a minus
                return sqrt(-Abs(a * b))
            if kind not in _SQRT_KINDS:
                raise ValueError(f"{kind} does not apply")
            return expand(_sqrt_variant(a, kind) * _sqrt_variant(b, kind))
        if op == "isq":  # (k i)^2
            k = v["k"]
            if kind == "key":
                return -(k**2)
            if kind == "C01-M2":  # i^2 = +1
                return k**2
            if kind == "C01-M4":  # squares k but not i
                return k**2 * I
            raise ValueError(f"{kind} does not apply")
        raise ValueError(f"unknown op {op}")
    return model


C01 = {k: _c01(k) for k in ["key", "C01-M1", "C01-M2", "C01-M3", "C01-M4", "C01-M5", "C01-M6", "C01-M7"]}


# ---------- C02 Powers of i ----------
def _c02(kind):
    def model(v, p):
        n = int(v["n"])
        r = n % 4
        if kind == "key":
            return I**n
        if kind == "C02-M1":  # i^3 = i
            if r != 3:
                raise ValueError("C02-M1 only shows on remainder 3")
            return I
        if kind == "C02-M2":  # off by one in the cycle
            return I ** (r + 1)
        if kind == "C02-M3":  # pairs up i^2 = -1 and forgets the leftover i
            return Integer(-1) ** (n // 2)
        if kind == "C02-M4":  # ignores the minus in a negative exponent
            if n >= 0:
                raise ValueError("C02-M4 needs a negative exponent")
            return I ** (-n)
        raise ValueError(kind)
    return model


C02 = {k: _c02(k) for k in ["key", "C02-M1", "C02-M2", "C02-M3", "C02-M4"]}


# ---------- C03 Standard form and equality ----------
def _c03(kind):
    def model(v, p):
        op = p["op"]
        if op == "im":
            z = expand(v["z"])
            if kind == "key":
                return im(z)
            if kind == "C03-M1":  # keeps the i: Im(a + ib) = ib
                return I * im(z)
            if kind == "C03-M2":  # gives the real part instead
                return re(z)
            if kind == "C03-M3":  # drops the sign of the imaginary part
                return Abs(im(z))
            raise ValueError(kind)
        if op == "equate":  # (a1 x + p) + i(a2 y + q) = c + i d, x and y real
            a1, pp, c, a2, q, d = (v[k] for k in ("a1", "p", "c", "a2", "q", "d"))
            if kind == "C03-M3":
                d = -d
            if kind == "C03-M4":  # equates real with imaginary
                c, d = d, c
            if kind == "C03-M5":  # moves the constant without changing its sign
                return (c + pp) / a1 + I * (d + q) / a2
            if kind not in ("key", "C03-M3", "C03-M4"):
                raise ValueError(kind)
            return (c - pp) / a1 + I * (d - q) / a2
        raise ValueError(op)
    return model


C03 = {k: _c03(k) for k in ["key", "C03-M1", "C03-M2", "C03-M3", "C03-M4", "C03-M5"]}


# ---------- C07 Purely real / purely imaginary (find real x) ----------
_xr = symbols("x", real=True)


def _solve_linear(part):
    """Root of an expression linear in x."""
    a = part.diff(_xr)
    b = part.subs(_xr, 0)
    if a == 0:
        raise ValueError("no unique solution")
    return -b / a


def _parts_in_x(w):
    r, i = expand(w).as_real_imag()
    return expand(r), expand(i)


def _c07(kind):
    def model(v, p):
        num = sympify(p["num"], locals={"x": _xr, "I": I})
        den = sympify(p.get("den", "1"), locals={"x": _xr, "I": I})
        z = expand(num * (den.conjugate()) / expand(den * den.conjugate()))
        want_real = p["want"] == "real"
        re_z, im_z = _parts_in_x(z)
        part, other = (im_z, re_z) if want_real else (re_z, im_z)
        if kind == "key":
            return _solve_linear(part)
        if kind == "C07-M1":  # swaps the condition
            return _solve_linear(other)
        if kind == "C07-M2":  # applies the condition to the numerator only
            if den == 1:
                raise ValueError("C07-M2 needs a quotient")
            re_n, im_n = _parts_in_x(num)
            return _solve_linear(im_n if want_real else re_n)
        if kind == "C07-M3":  # solves a x + b = 0 as x = b / a
            return part.subs(_xr, 0) / part.diff(_xr)
        raise ValueError(kind)
    return model


C07 = {k: _c07(k) for k in ["key", "C07-M1", "C07-M2", "C07-M3"]}


# ---------- C08 Solving a z + b conj(z) = c ----------
_x8, _y8 = symbols("x y", real=True)


def _solve_parts(a, b, c, cross=False):
    from sympy import solve

    lhs = expand(a * (_x8 + I * _y8) + b * (_x8 - I * _y8))
    re_l, im_l = lhs.as_real_imag()
    rc, ic = expand(c).as_real_imag()
    if cross:
        rc, ic = ic, rc
    sol = solve([re_l - rc, im_l - ic], [_x8, _y8], dict=True)
    if len(sol) != 1:
        raise ValueError("no unique solution")
    return sol[0][_x8] + I * sol[0][_y8]


def _c08(kind):
    def model(v, p):
        a, b, c = v["a"], v["b"], v["c"]
        if kind == "key":
            return _solve_parts(a, b, c)
        if kind == "C08-M1":  # treats conj(z) as z
            return expand(c / (a + b))
        if kind == "C08-M2":  # equates real with imaginary
            return _solve_parts(a, b, c, cross=True)
        if kind == "C08-M3":  # sign slip on the imaginary part
            k = _solve_parts(a, b, c)
            return re(k) - I * im(k)
        raise ValueError(kind)
    return model


C08 = {k: _c08(k) for k in ["key", "C08-M1", "C08-M2", "C08-M3"]}


# ---------- C09 Square root of a complex number (as a +/- pair) ----------
def _normalise_root(w):
    """Represent the pair +/-w by its member with positive real part (else positive imaginary part)."""
    w = expand(w)
    r, i = w.as_real_imag()
    if r < 0 or (r == 0 and i < 0):
        return expand(-w)
    return w


def _c09(kind):
    def model(v, p):
        z = v["z"]
        a, b = z.as_real_imag()
        if kind == "key":
            return _normalise_root(sqrt(z))
        if kind == "C09-M1":  # splits the root over the sum: sqrt(a) + i sqrt(b)
            return _normalise_root(sqrt(a) + I * sqrt(b))
        if kind == "C09-M2":  # sign slip in 2xy = b: the conjugate root
            r, i = _normalise_root(sqrt(z)).as_real_imag()
            return _normalise_root(r - I * i)
        raise ValueError(kind)
    return model


C09 = {k: _c09(k) for k in ["key", "C09-M1", "C09-M2"]}


# ---------- C12 Modulus rules ----------
def _c12(kind):
    def model(v, p):
        op = p["op"]
        if op == "prod_pow":  # |z1^n z2|
            a, n, b = Abs(v["z1"]), v["n"], Abs(v["z2"])
            return {"key": a**n * b, "C12-M2": a**n + b, "C12-M3": n * a * b}[kind] if kind in ("key", "C12-M2", "C12-M3") else _no(kind)
        if op == "quot_pow":  # |z1^n / z2|
            a, n, b = Abs(v["z1"]), v["n"], Abs(v["z2"])
            return {"key": a**n / b, "C12-M3": n * a / b, "C12-M4": a**n - b}[kind] if kind in ("key", "C12-M3", "C12-M4") else _no(kind)
        if op == "scale_pow":  # |k z^n| given |z| = r
            k, n, r = v["k"], v["n"], v["r"]
            return {"key": Abs(k) * r**n, "C12-M3": Abs(k) * n * r, "C12-M5": k * r**n}[kind] if kind in ("key", "C12-M3", "C12-M5") else _no(kind)
        if op == "pow_plus_zzbar":  # |z^n| + z conj(z) given |z| = r
            n, r = v["n"], v["r"]
            return {"key": r**n + r**2, "C12-M1": r**n + r, "C12-M3": n * r + r**2}[kind] if kind in ("key", "C12-M1", "C12-M3") else _no(kind)
        raise ValueError(op)
    return model


def _no(kind):
    raise ValueError(f"{kind} does not apply")


C12 = {k: _c12(k) for k in ["key", "C12-M1", "C12-M2", "C12-M3", "C12-M4", "C12-M5"]}


# ---------- C13 Greatest/least |z + c| on |z| = r ----------
def _c13(kind):
    def model(v, p):
        r, c, want = v["r"], v["c"], p["want"]
        size = Abs(re(c)) + Abs(im(c)) if kind == "C13-M3" else Abs(c)
        if kind == "C13-M2":  # least value as |c| - r, absolute value forgotten
            if want != "min":
                raise ValueError("C13-M2 is about the least value")
            return Abs(c) - r
        if kind == "C13-M1":  # gives the other extreme
            want = "min" if want == "max" else "max"
        if kind not in ("key", "C13-M1", "C13-M3"):
            raise ValueError(kind)
        return r + size if want == "max" else Abs(r - size)
    return model


C13 = {k: _c13(k) for k in ["key", "C13-M1", "C13-M2", "C13-M3"]}


# ---------- C15 Polar and Euler form ----------
def _cis(r, th):
    return expand(r * (cos(th) + I * sin(th)))


def _c15(kind):
    def model(v, p):
        op = p["op"]
        if op == "to_polar":
            z = v["z"]
            x, y = re(z), im(z)
            r, th = Abs(z), arg(z)
            if kind == "key":
                return z
            if kind == "C15-M1":  # tan^-1(y/x) without the quadrant
                if x == 0:
                    raise ValueError("C15-M1 needs x != 0")
                return _cis(r, atan(y / x))
            if kind == "C15-M2":  # r = x^2 + y^2, root forgotten
                return _cis(x**2 + y**2, th)
            if kind == "C15-M3":  # matches cos to y and sin to x
                return _cis(r, pi / 2 - th)
            raise ValueError(kind)
        if op == "from_polar":
            r, th = v["r"], v["theta"]
            if kind == "key":
                return _cis(r, th)
            if kind == "C15-M3":  # swaps cos and sin
                return expand(r * (sin(th) + I * cos(th)))
            if kind == "C15-M4":  # r multiplies only the cosine
                return expand(r * cos(th) + I * sin(th))
            raise ValueError(kind)
        raise ValueError(op)
    return model


C15 = {k: _c15(k) for k in ["key", "C15-M1", "C15-M2", "C15-M3", "C15-M4"]}


# ---------- C16 Multiply and divide in polar form ----------
def _c16(kind):
    def model(v, p):
        op = p["op"]
        if op == "argsum":  # principal arg(z1 z2) from arg z1 and arg z2
            s = v["t1"] + v["t2"]
            principal = s - 2 * pi if s > pi else (s + 2 * pi if s <= -pi else s)
            if kind == "key":
                return principal
            if kind == "C16-M2":  # subtracts when multiplying
                return v["t1"] - v["t2"]
            if kind == "C16-M4":  # leaves the sum outside (-pi, pi]
                if principal == s:
                    raise ValueError("C16-M4 needs a sum outside the range")
                return s
            raise ValueError(kind)
        z1, z2 = v["z1"], v["z2"]
        r1, r2, t1, t2 = Abs(z1), Abs(z2), arg(z1), arg(z2)
        if op == "prod":
            if kind == "key":
                return expand(z1 * z2)
            if kind == "C16-M1":  # adds the moduli
                return _cis(r1 + r2, t1 + t2)
            if kind == "C16-M2":  # subtracts the arguments
                return _cis(r1 * r2, t1 - t2)
            raise ValueError(kind)
        if op == "quot":
            if kind == "key":
                return expand(_cis(r1 / r2, t1 - t2))
            if kind == "C16-M1":  # subtracts the moduli
                return _cis(r1 - r2, t1 - t2)
            if kind == "C16-M2":  # adds the arguments
                return _cis(r1 / r2, t1 + t2)
            if kind == "C16-M3":  # subtracts the arguments the wrong way round
                return _cis(r1 / r2, t2 - t1)
            raise ValueError(kind)
        raise ValueError(op)
    return model


C16 = {k: _c16(k) for k in ["key", "C16-M1", "C16-M2", "C16-M3", "C16-M4"]}


# ---------- C17 De Moivre's theorem ----------
def _c17(kind):
    def model(v, p):
        op = p["op"]
        n = v["n"]
        if op == "pow":  # z^n
            z = v["z"]
            r, th = Abs(z), arg(z)
            if kind == "key":
                return expand(_cis(r**n, n * th))
            if kind == "C17-M1":  # doesn't raise the modulus
                return _cis(r, n * th)
            if kind == "C17-M3":  # multiplies the modulus by n
                return _cis(n * r, n * th)
            raise ValueError(kind)
        if op == "sinpow":  # (sin t + i cos t)^n
            th = v["theta"]
            if kind == "key":
                return expand((sin(th) + I * cos(th)) ** n)
            if kind == "C17-M2":  # applies De Moivre to sin + i cos directly
                return expand(sin(n * th) + I * cos(n * th))
            if kind == "C17-M4":  # treats sin t + i cos t as cos t + i sin t
                return _cis(1, n * th)
            raise ValueError(kind)
        raise ValueError(op)
    return model


C17 = {k: _c17(k) for k in ["key", "C17-M1", "C17-M2", "C17-M3", "C17-M4"]}


# ---------- C18 Rotation about a point ----------
def _c18(kind):
    def model(v, p):
        z, c, a = v["z"], v["c"], v["alpha"]
        if kind == "key":
            return expand((z - c) * _cis(1, a) + c)
        if kind == "C18-M1":  # rotates about the origin instead
            if c == 0:
                raise ValueError("C18-M1 needs a centre other than 0")
            return expand(z * _cis(1, a))
        if kind == "C18-M2":  # rotates the wrong way
            return expand((z - c) * _cis(1, -a) + c)
        if kind == "C18-M3":  # forgets to add the centre back
            if c == 0:
                raise ValueError("C18-M3 needs a centre other than 0")
            return expand((z - c) * _cis(1, a))
        raise ValueError(kind)
    return model


C18 = {k: _c18(k) for k in ["key", "C18-M1", "C18-M2", "C18-M3"]}


# ---------- helpers for omega (a non-real cube root of unity) ----------
OMEGA = Symbol("omega")
OMEGA_VALUE = Rational(-1, 2) + sqrt(3) / 2 * I


def _omega_form(v):
    """Writes an exact value of Q(omega) the way a teacher would: a, b*omega, -a*omega^2 or a + b*omega."""
    v = expand(v.subs(OMEGA, OMEGA_VALUE)) if hasattr(v, "subs") else v
    re_v, im_v = expand(v).as_real_imag()
    b = simplify(2 * im_v / sqrt(3))
    a = simplify(re_v + b / 2)
    if b == 0:
        return a
    if a == 0:
        return b * OMEGA
    if a == b:
        return -a * OMEGA**2
    return a + b * OMEGA


def _rewrite_powers(e, rule):
    """Applies rule(n) -> expression to every omega**n term of a polynomial in omega."""
    e = expand(e)
    out = 0
    for term in e.as_ordered_terms() if e.is_Add else [e]:
        coeff, n = term.as_coeff_exponent(OMEGA)
        out += coeff * rule(int(n))
    return expand(out)


def _mod3(n):
    return OMEGA ** (n % 3)


# ---------- C19 Quadratics with complex roots ----------
def _c19(kind):
    def model(v, p):
        op = p["op"]
        if op == "roots":  # a x^2 + b x + c = 0, discriminant negative; the root with positive imaginary part
            a, b, c = v["a"], v["b"], v["c"]
            s = sqrt(4 * a * c - b**2)
            if kind == "key":
                return (-b + I * s) / (2 * a)
            if kind == "C19-M1":  # drops the i: (-b +/- sqrt|D|) / 2a, the larger real root
                return (-b + s) / (2 * a)
            if kind == "C19-M2":  # divides only -b by 2a
                return -b / (2 * a) + I * s
            if kind == "C19-M3":  # uses b instead of -b
                return (b + I * s) / (2 * a)
            raise ValueError(kind)
        if op == "other_root":  # real quadratic with one root z
            z = v["z"]
            if kind == "key":
                return re(z) - I * im(z)
            if kind == "C19-M4":  # the negative of the root
                return -z
            if kind == "C19-M5":  # flips the real part
                return -re(z) + I * im(z)
            raise ValueError(kind)
        if op == "vieta":
            a, b, c, want = v["a"], v["b"], v["c"], p["want"]
            s, prod = -b / a, c / a
            if kind == "key":
                return s if want == "sum" else prod
            if kind == "C19-M6":  # gives the other one
                return prod if want == "sum" else s
            if kind == "C19-M7":  # sign slip: b/a and -c/a
                return -s if want == "sum" else -prod
            raise ValueError(kind)
        raise ValueError(op)
    return model


C19 = {k: _c19(k) for k in ["key", "C19-M1", "C19-M2", "C19-M3", "C19-M4", "C19-M5", "C19-M6", "C19-M7"]}


# ---------- C20 Cube roots of unity ----------
_GOLDEN = (-1 + sqrt(5)) / 2  # a number with w + w^2 = 1, the world of C20-M5


def _c20(kind):
    def model(v, p):
        e = v["e"]
        if kind == "key":
            return _omega_form(_rewrite_powers(e, _mod3))
        if kind == "C20-M1":  # reduces exponents mod 4 (as for i), then omega^3 = 1
            return _rewrite_powers(_rewrite_powers(e, lambda n: OMEGA ** (n % 4)), _mod3)
        if kind == "C20-M2":  # omega^3 = -1
            return _rewrite_powers(e, lambda n: (-1) ** (n // 3) * OMEGA ** (n % 3))
        if kind == "C20-M3":  # omega^2 = -omega
            return _rewrite_powers(_rewrite_powers(e, _mod3), lambda n: -OMEGA if n == 2 else OMEGA**n)
        if kind == "C20-M4":  # off by one when reducing a power of 3 or more
            return _rewrite_powers(_rewrite_powers(e, lambda n: OMEGA ** ((n % 3) + 1) if n >= 3 else OMEGA**n), _mod3)
        if kind == "C20-M5":  # omega + omega^2 = 1
            return simplify(_rewrite_powers(e, _mod3).subs(OMEGA, _GOLDEN))
        raise ValueError(kind)
    return model


C20 = {k: _c20(k) for k in ["key", "C20-M1", "C20-M2", "C20-M3", "C20-M4", "C20-M5"]}


# ---------- C21 Using omega ----------
def _c21(kind):
    def model(v, p):
        op = p["op"]
        if op == "binpow":  # (p + q omega + p omega^2)^n
            pp, q, n = v["p"], v["q"], int(v["n"])
            if kind == "key":
                inner = pp + q * OMEGA + pp * OMEGA**2
            elif kind == "C21-M1":  # 1 + omega^2 = omega (sign dropped)
                inner = (pp + q) * OMEGA
            elif kind == "C21-M2":  # 1 + omega^2 = -omega^2
                inner = q * OMEGA - pp * OMEGA**2
            elif kind == "C21-M3":  # a power distributes over a sum
                return _omega_form(_rewrite_powers(pp**n + q**n * OMEGA**n + pp**n * OMEGA ** (2 * n), _mod3))
            else:
                raise ValueError(kind)
            return _omega_form(_rewrite_powers(expand(inner**n), _mod3))
        if op == "cube_roots":  # roots of z^3 = k, given by the root with positive imaginary part
            k = v["k"]
            c = real_root(k, 3)
            if kind == "key":
                roots = [c, c * OMEGA, c * OMEGA**2]
            elif kind == "C21-M4":  # forgets to scale by the real cube root
                roots = [c, OMEGA, OMEGA**2]
            elif kind == "C21-M5":  # roots of z^3 = -k
                roots = [-c, -c * OMEGA, -c * OMEGA**2]
            else:
                raise ValueError(kind)
            return next(r for r in roots if im(expand(r.subs(OMEGA, OMEGA_VALUE))) > 0)
        raise ValueError(op)
    return model


C21 = {k: _c21(k) for k in ["key", "C21-M1", "C21-M2", "C21-M3", "C21-M4", "C21-M5"]}


# ---------- C22 nth roots of unity ----------
def _c22(kind):
    def model(v, p):
        op = p["op"]
        n = v["n"]
        if op == "sum_powers":  # alpha + ... + alpha^(n-1)
            return {"key": Integer(-1), "C22-M1": Integer(0), "C22-M5": n - 1}[kind] if kind in ("key", "C22-M1", "C22-M5") else _no(kind)
        if op == "product_all":
            return {"key": (-1) ** (n + 1), "C22-M3": Integer(1), "C22-M6": Integer(0)}[kind] if kind in ("key", "C22-M3", "C22-M6") else _no(kind)
        if op == "first_root":  # root with the smallest positive argument
            return {"key": _cis(1, 2 * pi / n), "C22-M2": _cis(1, pi / n), "C22-M7": I}[kind] if kind in ("key", "C22-M2", "C22-M7") else _no(kind)
        if op == "roots_of":  # z^n = k, k > 0: root with the smallest positive argument
            r = v["k"] ** (Integer(1) / n)
            return {"key": _cis(r, 2 * pi / n), "C22-M2": _cis(r, pi / n), "C22-M4": _cis(1, 2 * pi / n)}[kind] if kind in ("key", "C22-M2", "C22-M4") else _no(kind)
        raise ValueError(op)
    return model


C22 = {k: _c22(k) for k in ["key", "C22-M1", "C22-M2", "C22-M3", "C22-M4", "C22-M5", "C22-M6", "C22-M7"]}


# ---------- C23 Polynomial at a complex x ----------
_t = Symbol("t")


def _c23(kind):
    def model(v, p):
        op = p["op"]
        if op == "poly_at":
            x = v["x"]
            poly = sympify(p["poly"], locals={"t": _t})
            if kind == "key":
                return expand(poly.subs(_t, x))
            if kind == "C23-M1":  # reduces with the sign-flipped quadratic: evaluates at -Re(x) + i Im(x)
                return expand(poly.subs(_t, -re(x) + I * im(x)))
            if kind == "C23-M2":  # decides the whole expression vanishes
                return Integer(0)
            raise ValueError(kind)
        if op == "power_sum":  # alpha^n + beta^n for roots of t^2 + b t + c
            b, c, n = v["b"], v["c"], int(v["n"])
            from sympy import solve
            al, be = solve(_t**2 + b * _t + c, _t)
            if kind == "key":
                return simplify(expand(al**n + be**n))
            if kind == "C23-M3":  # (alpha + beta)^n
                return (-b) ** n
            if kind == "C23-M4":  # (alpha + beta)^2 + 2 alpha beta, for n = 2
                if n != 2:
                    raise ValueError("C23-M4 is about squares")
                return b**2 + 2 * c
            if kind == "C23-M5":  # treats the roots as cube roots of unity
                return _omega_form(_rewrite_powers(OMEGA**n + OMEGA ** (2 * n), _mod3))
            raise ValueError(kind)
        raise ValueError(op)
    return model


C23 = {k: _c23(k) for k in ["key", "C23-M1", "C23-M2", "C23-M3", "C23-M4", "C23-M5"]}


# ---------- C24 Circle locus ----------
def _circle(c, r2):
    """x^2 + y^2 - ... locus polynomial for centre c and RIGHT-HAND SIDE r2 (the squared radius)."""
    return expand((x - re(c)) ** 2 + (y - im(c)) ** 2 - r2)


def _c24(kind):
    def model(v, p):
        op = p["op"]
        if op == "circle":  # |k z - w| = R
            k, w, R = v["k"], v["w"], v["R"]
            c, r = w / k, R / Abs(k)
            if kind == "key":
                return _circle(c, r**2)
            if kind == "C24-M1":  # flips the sign of the centre
                return _circle(-c, r**2)
            if kind == "C24-M2":  # writes the radius, not its square, on the right
                return _circle(c, r)
            if kind == "C24-M3":  # forgets to divide the radius by |k|
                if Abs(k) == 1:
                    raise ValueError("C24-M3 needs |k| != 1")
                return _circle(c, R**2)
            if kind == "C24-M4":  # flips only one sign of the centre
                return _circle(re(c) - I * im(c), r**2)
            if kind == "C24-M5":  # divides the radius but not the centre
                if k == 1:
                    raise ValueError("C24-M5 needs k != 1")
                return _circle(w, r**2)
            raise ValueError(kind)
        if op == "zzbar":  # z conj(z) + q (z + conj(z)) + s = 0, i.e. x^2 + y^2 + 2 q x + s = 0
            q, s_ = v["q"], v["s"]
            if kind == "key":
                return expand(x**2 + y**2 + 2 * q * x + s_)
            if kind == "C24-M1":
                return expand(x**2 + y**2 - 2 * q * x + s_)
            if kind == "C24-M2":  # treats r^2 as r
                return _circle(-q, (q**2 - s_) ** 2)
            if kind == "C24-M6":  # z + conj(z) = x (forgets the 2)
                return expand(x**2 + y**2 + q * x + s_)
            raise ValueError(kind)
        raise ValueError(op)
    return model


C24 = {k: _c24(k) for k in ["key", "C24-M1", "C24-M2", "C24-M3", "C24-M4", "C24-M5", "C24-M6"]}


# ---------- C26 Loci from algebraic conditions ----------
def _c26(kind):
    def model(v, p):
        op = p["op"]
        a, b = v["a"], v["b"]
        if op == "apollonius":  # |z - a| = k |z - b|
            k = v["k"]
            if kind == "key":
                return expand(_dist2(a) - k**2 * _dist2(b))
            if kind == "C26-M1":  # calls it the perpendicular bisector even though k != 1
                return _bisector(a, b)
            if kind == "C26-M3":  # uses k instead of k^2 after squaring
                return expand(_dist2(a) - k * _dist2(b))
            raise ValueError(kind)
        if op == "quotient_part":  # Re or Im of (z - a)/(z - b) is zero
            z = x + I * y
            num = expand((z - a) * ((x - re(b)) - I * (y - im(b))))  # (z - a) * conj(z - b)
            part = p["part"]
            pick = (lambda e: e.as_real_imag()[0]) if part == "re" else (lambda e: e.as_real_imag()[1])
            other = (lambda e: e.as_real_imag()[1]) if part == "re" else (lambda e: e.as_real_imag()[0])
            if kind == "key":
                return expand(pick(num))
            if kind == "C26-M2":  # applies the condition to the numerator z - a only
                return expand(pick(expand(z - a)))
            if kind == "C26-M4":  # sets the other part to zero
                return expand(other(num))
            raise ValueError(kind)
        raise ValueError(op)
    return model


def _dist2(c):
    return (x - re(c)) ** 2 + (y - im(c)) ** 2


C26 = {k: _c26(k) for k in ["key", "C26-M1", "C26-M2", "C26-M3", "C26-M4"]}


# ---------- C27 Argument loci ----------
def _side_of_diameter(a, b, theta):
    """For arg((z - a)/(z - b)) = theta = +/-pi/2: 1 if the arc is on the side of c + i(a - b)/2, else 2."""
    c = (a + b) / 2
    probe = c + I * (a - b) / 2
    return 1 if simplify(arg(expand((probe - a) / (probe - b))) - theta) == 0 else 2


def _ray(a, theta):
    """Membership test for the ray arg(z - a) = theta (a itself excluded)."""
    def on(pt):
        w = expand(pt - a)
        return w != 0 and simplify(arg(w) - theta) == 0
    return on


def _c27(kind):
    def model(v, p):
        op = p["op"]
        if op == "arc":  # arg((z - a)/(z - b)) = theta: code 1/2 = the two half circles, 3 = whole circle, 4 = bisector
            a, b, th = v["a"], v["b"], v["theta"]
            side = _side_of_diameter(a, b, th)
            if kind == "key":
                return Integer(side)
            if kind == "C27-M1":  # the whole circle
                return Integer(3)
            if kind == "C27-M2":  # the other half
                return Integer(3 - side)
            if kind == "C27-M3":  # treats it like |(z - a)/(z - b)| = 1
                return Integer(4)
            raise ValueError(kind)
        if op == "ray_start":  # arg(z - a) = theta starts at a
            a = v["a"]
            if kind == "key":
                return a
            if kind == "C27-M4":  # starts the ray at the origin
                return Integer(0)
            if kind == "C27-M5":  # misreads the sign of the starting point
                return -a
            raise ValueError(kind)
        if op == "ray_point":  # which point lies on arg(z - a) = theta
            a, th = v["a"], v["theta"]
            if kind == "key":
                return _ray(a, th)
            if kind == "C27-M4":
                return _ray(0, th)
            if kind == "C27-M5":
                return _ray(-a, th)
            if kind == "C27-M6":  # turns the wrong way
                return _ray(a, -th)
            raise ValueError(kind)
        raise ValueError(op)
    return model


C27 = {k: _c27(k) for k in ["key", "C27-M1", "C27-M2", "C27-M3", "C27-M4", "C27-M5", "C27-M6"]}


# ---------- C28 Conic loci ----------
# codes: 1 ellipse, 2 one branch of a hyperbola, 3 line segment, 4 ray, 5 no points, 6 circle, 7 both branches
def _c28(kind):
    def model(v, p):
        op = p["op"]
        a, b, k = v["a"], v["b"], v["k"]
        d = Abs(a - b)
        if op == "classify":
            plus = p["sign"] == "+"
            if kind == "key":
                if plus:
                    return Integer(1 if k > d else 3 if k == d else 5)
                return Integer(2 if k < d else 4 if k == d else 5)
            if kind == "C28-M1":  # never compares k with the focal distance
                return Integer(1 if plus else 2)
            if kind == "C28-M2":  # swaps ellipse and hyperbola
                return Integer(2 if plus else 1)
            if kind == "C28-M3":  # a difference gives both branches
                if plus:
                    raise ValueError("C28-M3 is about differences")
                return Integer(7)
            if kind == "C28-M4":  # two moduli make a circle
                return Integer(6)
            raise ValueError(kind)
        if op == "max_mod":  # foci +/-c on the real axis: greatest |z| on |z - a| + |z - b| = k
            if kind == "key":
                return k / 2
            if kind == "C28-M5":  # uses half the focal distance
                return d / 2
            if kind == "C28-M6":  # uses the whole sum
                return k
            raise ValueError(kind)
        raise ValueError(op)
    return model


C28 = {k: _c28(k) for k in ["key", "C28-M1", "C28-M2", "C28-M3", "C28-M4", "C28-M5", "C28-M6"]}


# ---------- C29 Greatest/least modulus on a circle or disc ----------
def _c29(kind):
    def model(v, p):
        a, r, c = v["a"], v["r"], v["c"]
        want, region = p["want"], p.get("region", "circle")
        w = a - c
        dist = Abs(re(w)) + Abs(im(w)) if kind == "C29-M3" else Abs(w)
        if kind == "C29-M2":  # least as dist - r even when the point is inside the disc
            if want != "min":
                raise ValueError("C29-M2 is about the least value")
            return Abs(w) - r
        if kind == "C29-M1":  # the other extreme
            want = "min" if want == "max" else "max"
        if kind not in ("key", "C29-M1", "C29-M3"):
            raise ValueError(kind)
        if want == "max":
            return dist + r
        if dist >= r:
            return dist - r
        return Integer(0) if region == "disc" else r - dist
    return model


C29 = {k: _c29(k) for k in ["key", "C29-M1", "C29-M2", "C29-M3"]}


# ---------- C30 Regions and areas ----------
def _c30(kind):
    def model(v, p):
        op = p["op"]
        if op == "area":  # disc of radius r, keeping the fraction f of it
            r, f = v["r"], v["f"]
            if kind == "key":
                return pi * r**2 * f
            if kind == "C30-M2":  # pi r instead of pi r^2
                return pi * r * f
            if kind == "C30-M3":  # ignores the extra condition: whole disc
                if f == 1:
                    raise ValueError("C30-M3 needs a part of the disc")
                return pi * r**2
            if kind == "C30-M4":  # circumference instead of area
                return 2 * pi * r * f
            raise ValueError(kind)
        if op == "closer":  # |z - a| < |z - b|
            a, b = v["a"], v["b"]
            closer = lambda pt, u, w: simplify(Abs(pt - u) - Abs(pt - w)) < 0
            if kind == "key":
                return lambda pt: closer(pt, a, b)
            if kind == "C30-M1":  # the wrong side of the bisector
                return lambda pt: closer(pt, b, a)
            if kind == "C30-M5":  # misreads the sign of b: |z + w| as the distance from +w
                return lambda pt: closer(pt, a, -b)
            raise ValueError(kind)
        if op == "disc_half":  # |z - a| <= r and Im z >= 0
            a, r = v["a"], v["r"]
            in_disc = lambda pt: simplify(Abs(pt - a) - r) <= 0
            if kind == "key":
                return lambda pt: in_disc(pt) and im(pt) >= 0
            if kind == "C30-M6":  # flips the disc inequality
                return lambda pt: not in_disc(pt) and im(pt) >= 0
            if kind == "C30-M7":  # flips the half-plane
                return lambda pt: in_disc(pt) and im(pt) <= 0
            raise ValueError(kind)
        raise ValueError(op)
    return model


C30 = {k: _c30(k) for k in ["key", "C30-M1", "C30-M2", "C30-M3", "C30-M4", "C30-M5", "C30-M6", "C30-M7"]}


MODELS = {"C01": C01, "C02": C02, "C03": C03, "C04": C04, "C05": C05, "C06": C06, "C07": C07, "C08": C08, "C09": C09, "C10": C10, "C11": C11, "C12": C12, "C13": C13, "C14": C14, "C15": C15, "C16": C16, "C17": C17, "C18": C18, "C19": C19, "C20": C20, "C21": C21, "C22": C22, "C23": C23, "C24": C24, "C25": C25, "C26": C26, "C27": C27, "C28": C28, "C29": C29, "C30": C30}
