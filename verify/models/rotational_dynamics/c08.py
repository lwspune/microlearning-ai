"""C08 Rotational kinetic energy: answer models (the key, and one per misconception).

params["ask"] picks the quantity:
  "v_same":   speed of a mass m with the same K.E. as a body of M.I. I turning at w (inputs I, w, m);
  "I_from_E": M.I. of a wheel that takes energy E to go from w1 to w2 (inputs E, w1, w2);
  "disc_ke":  K.E. of a uniform disc flywheel, mass M, radius R, at rpm (inputs M, R, rpm);
  "stop_ke":  K.E. lost when a wheel of M.I. I turning at rpm stops (inputs I, rpm);
  "sphere_ke": K.E. of a solid sphere, mass M, radius R, spinning at w rad/s (inputs M, R, w).

The key adds up (1/2) dm v^2 over the body with v = r w: for a given I that is (1/2) I w^2; for the disc
it integrates rings of radius x. It solves energy balances in sympy.
"""
from sympy import Rational, Symbol, integrate, pi, solve, sqrt

from physics import sig

_x = Symbol("x", positive=True)
_u = Symbol("u", positive=True)


def _ke(I, w, *, half=True, square=True):
    return (Rational(1, 2) if half else 1) * I * (w ** 2 if square else w)


def _omega(rpm, *, per_min=True, two_pi=True):
    n = rpm / 60 if per_min else rpm
    return 2 * pi * n if two_pi else n


def _solve(v, p, *, half=True, square=True, root=True, diff_sq=False, per_min=True, two_pi=True, ring=False):
    ask = p["ask"]
    if ask == "v_same":
        E = _ke(v["I"], v["w"], half=half, square=square)
        (u,) = solve(Rational(1, 2) * v["m"] * _u ** 2 - E, _u)
        return sig(u if root else u ** 2)
    if ask == "I_from_E":
        w1, w2 = v["w1"], v["w2"]
        change = (w2 - w1) ** 2 if diff_sq else (w2 ** 2 - w1 ** 2 if square else w2 - w1)
        I = Symbol("I", positive=True)
        (i,) = solve((Rational(1, 2) if half else 1) * I * change - v["E"], I)
        return sig(i)
    if ask == "disc_ke":
        M, R = v["M"], v["R"]
        w = _omega(v["rpm"], per_min=per_min, two_pi=two_pi)
        # rings of radius x, mass 2 M x dx / R^2, each moving at x w
        dm_ke = (Rational(1, 2) if half else 1) * (2 * M / R ** 2) * _x * (_x * w) ** (2 if square else 1)
        return sig(integrate(dm_ke * (1 if square else _x), (_x, 0, R)))
    if ask == "stop_ke":
        w = _omega(v["rpm"], per_min=per_min, two_pi=two_pi)
        return sig(_ke(v["I"], w, half=half, square=square))
    if ask == "sphere_ke":
        M, R = v["M"], v["R"]
        I = M * R ** 2 if ring else Rational(2, 5) * M * R ** 2
        return sig(_ke(I, v["w"], half=half, square=square))
    raise ValueError(f"unknown ask {ask}")


def key(v, p):
    return _solve(v, p)


def _only(p, *asks):
    if p["ask"] not in asks:
        raise ValueError("does not apply to this item")


def m1(v, p):
    """Drops the 1/2: takes the K.E. as I w^2."""
    return _solve(v, p, half=False)


def m2(v, p):
    """Doesn't square w."""
    _only(p, "v_same", "I_from_E", "disc_ke", "sphere_ke")
    return _solve(v, p, square=False)


def m3(v, p):
    """Forgets the square root, reporting v^2 as the speed."""
    _only(p, "v_same")
    return _solve(v, p, root=False)


def m4(v, p):
    """Squares the change in w, (w2 - w1)^2, instead of taking the change in w^2."""
    _only(p, "I_from_E")
    return _solve(v, p, diff_sq=True)


def m5(v, p):
    """Reads rpm as revolutions per second."""
    _only(p, "disc_ke", "stop_ke")
    return _solve(v, p, per_min=False)


def m6(v, p):
    """Forgets the 2 pi: uses the frequency in rev/s as w."""
    _only(p, "stop_ke")
    return _solve(v, p, two_pi=False)


def m7(v, p):
    """Uses M R^2 for every body."""
    _only(p, "sphere_ke")
    return _solve(v, p, ring=True)


MODELS = {"key": key, "C08-M1": m1, "C08-M2": m2, "C08-M3": m3, "C08-M4": m4, "C08-M5": m5, "C08-M6": m6, "C08-M7": m7}
