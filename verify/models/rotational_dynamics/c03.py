"""C03 Vehicle on a flat curved road: answer models (the key, and one per misconception).

params["ask"] picks the quantity:
  "mu":     least coefficient of friction for a car at v m/s on a flat curve of radius r (inputs v, r, g);
  "vmax":   greatest safe speed on a flat curve, in symbols mu, r, g (a formula);
  "lean":   angle with the vertical at which a two-wheeler leans, speed v_kmph, radius r (inputs v_kmph, r, g), in degrees;
  "v_lean": speed of a rider leaning at theta degrees from the vertical on a curve of radius r (inputs theta, r, g);
  "zero":   whether a car can turn on a flat road with no friction (a named answer).

The key writes the forces on the vehicle: N = mg vertically, friction f = m v^2 / r horizontally, at most
mu N; for the rider, the road's push (N and f together) must pass through the centre of gravity, so
tan(lean) = f / N. It solves these in sympy rather than using the lesson's finished formulas.
"""
from sympy import Rational, Symbol, atan, deg, pi, solve, sqrt, tan

from physics import sig

_x = Symbol("x", positive=True)
_m = Symbol("m", positive=True)

ANSWERS = {
    "key": Symbol("no_inward_force"),
    "C03-M6": Symbol("yes_if_slow"),
    "C03-M7": Symbol("yes_normal_force"),
    "C03-M8": Symbol("yes_centrifugal"),
}


def _forces(v, r, g, *, square=True, with_g=True):
    """Friction needed and normal force on a vehicle of mass m on a flat curve."""
    f = _m * (v ** 2 if square else v) / r
    N = _m * g if with_g else _m
    return f, N


def _solve(v, p, *, square=True, invert=False, with_g=True, root=True, kmph=True):
    ask = p["ask"]
    if ask == "mu":
        f, N = _forces(v["v"], v["r"], v["g"], square=square, with_g=with_g)
        mu = f / N  # friction just at its limit: f = mu N
        return sig(1 / mu if invert else mu)
    if ask == "vmax":
        mu, r, g = v["mu"], v["r"], v["g"]  # plain symbols, as the verifier reads them
        _v2 = Symbol("v2")
        f, N = _forces(sqrt(_v2), r, g, with_g=with_g)
        ratio = N / (mu * _m) if invert else mu * N / _m  # inverted: the limit read upside down
        (v2,) = solve(f / _m - ratio, _v2)  # linear in v^2
        return sqrt(v2) if root else v2
    if ask == "lean":
        speed = v["v_kmph"] * Rational(5, 18) if kmph else v["v_kmph"]
        f, N = _forces(speed, v["r"], v["g"], square=square)
        t = N / f if invert else f / N
        return sig(deg(atan(t)))
    if ask == "v_lean":
        t = tan(v["theta"] * pi / 180)
        t = 1 / t if invert else t
        g = v["g"] if with_g else 1
        (x,) = solve(_x ** 2 - v["r"] * g * t, _x)  # tan(lean) = f / N = v^2 / (r g)
        return sig(x if root else x ** 2)
    raise ValueError(f"unknown ask {ask}")


def key(v, p):
    return ANSWERS["key"] if p["ask"] == "zero" else _solve(v, p)


def _numeric(p, *asks):
    if p["ask"] not in asks:
        raise ValueError("does not apply to this item")


def m1(v, p):
    """Doesn't square the speed: uses m v / r for the inward force."""
    _numeric(p, "mu", "lean")
    return _solve(v, p, square=False)


def m2(v, p):
    """Inverts the ratio: writes r g / v^2 for v^2 / (r g), or measures the lean from the horizontal."""
    _numeric(p, "mu", "vmax", "lean", "v_lean")
    return _solve(v, p, invert=True)


def m3(v, p):
    """Leaves out g: takes the friction limit as mu m, or tan(lean) as v^2 / r."""
    _numeric(p, "mu", "vmax", "v_lean")
    return _solve(v, p, with_g=False)


def m4(v, p):
    """Forgets the square root: reports v^2 as the speed."""
    _numeric(p, "vmax", "v_lean")
    return _solve(v, p, root=False)


def m5(v, p):
    """Uses a speed in km/h without converting it to m/s."""
    _numeric(p, "lean")
    return _solve(v, p, kmph=False)


def _named(p, m):
    if p["ask"] != "zero":
        raise ValueError("only the named item")
    return ANSWERS[m]


def m6(v, p):
    """Thinks a slow enough car needs no inward force to turn."""
    return _named(p, "C03-M6")


def m7(v, p):
    """Thinks the normal force of a flat road can turn the car."""
    return _named(p, "C03-M7")


def m8(v, p):
    """Thinks the centrifugal force holds the car on its curve."""
    return _named(p, "C03-M8")


MODELS = {"key": key, "C03-M1": m1, "C03-M2": m2, "C03-M3": m3, "C03-M4": m4, "C03-M5": m5,
          "C03-M6": m6, "C03-M7": m7, "C03-M8": m8}
