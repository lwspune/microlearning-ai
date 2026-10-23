"""C09 Parallel and perpendicular axes: answer models (the key, and one per misconception).

params["ask"] picks the quantity:
  "Kc":       radius of gyration about the parallel axis through the centre of mass, given K about an axis h away (inputs K, h);
  "K_tangent": a disc's radius of gyration about a tangent in its plane, given K about its central axis (inputs K2 = K^2);
  "dumbbell": M.I. in g cm^2 of a rod (M, L) with a solid sphere (m, R) at each end, about the rod's perpendicular bisector;
  "disc_tangent": M.I. of a disc (M, diameter D) about a tangent in its plane;
  "rod_end":  M.I. of a rod (M, L) about a perpendicular axis through one end.

The key integrates r^2 dm for the rod and the disc, gets a disc's diameter from I_z = I_x + I_y with
I_x = I_y, and shifts axes with I_o = I_c + M h^2, solving in sympy.
"""
from sympy import Rational, Symbol, integrate, solve, sqrt

from physics import sig

_x = Symbol("x", real=True)
_u = Symbol("u", positive=True)


def _rod_centre(M, L):
    return integrate(M / L * _x ** 2, (_x, -L / 2, L / 2))


def _rod_end(M, L):
    return integrate(M / L * _x ** 2, (_x, 0, L))


def _disc_central(M, R):
    return integrate(2 * M / R ** 2 * _x ** 3, (_x, 0, R))


def _disc_diameter(M, R):
    (Id,) = solve(2 * _u - _disc_central(M, R), _u)  # I_z = I_x + I_y with I_x = I_y
    return Id


def _shift(Ic, M, h, *, square=True, own=True):
    return (Ic if own else 0) + M * (h ** 2 if square else h)


def _solve(v, p, *, add=False, square=True, root=True, diameter_is_central=False, far=False, own=True, wrong_axis=False):
    ask = p["ask"]
    if ask == "Kc":
        K, h = v["K"], v["h"]
        if not square:
            return sig(K - h)  # lengths, not squares
        Kc2 = K ** 2 + h ** 2 if add else K ** 2 - h ** 2  # K^2 = Kc^2 + h^2
        return sig(sqrt(Kc2) if root else Kc2)
    if ask == "K_tangent":
        M = Symbol("M", positive=True)
        R2 = solve(_disc_central(M, sqrt(_u)) / M - v["K2"], _u)[0]  # R^2 from the central K^2
        R = sqrt(R2)
        Id = _disc_central(M, R) if diameter_is_central else _disc_diameter(M, R)
        h = 2 * R if far else R
        K2 = _shift(Id, M, h) / M
        return sig(sqrt(K2) if root else K2)
    if ask == "dumbbell":
        M, L, m, R = v["M"], v["L"], v["m"], v["R"]
        rod = _rod_end(M, L) if wrong_axis else _rod_centre(M, L)
        d = L / 2 if far else L / 2 + R  # the sphere's centre is beyond the rod's end
        sphere = _shift(Rational(2, 5) * m * R ** 2, m, d, own=own)
        return sig(rod + 2 * sphere)
    if ask == "disc_tangent":
        M, R = v["M"], v["D"] / 2
        Ic = _disc_central(M, R) if diameter_is_central else _disc_diameter(M, R)
        h = 2 * R if far else R
        return sig(_shift(Ic, M, h, own=own))
    if ask == "rod_end":
        M, L = v["M"], v["L"]
        h = L if far else L / 2
        return sig(_shift(_rod_centre(M, L), M, h, square=square, own=own))
    raise ValueError(f"unknown ask {ask}")


def key(v, p):
    return _solve(v, p)


def _only(p, *asks):
    if p["ask"] not in asks:
        raise ValueError("does not apply to this item")


def m1(v, p):
    """Adds h^2 when going towards the centre of mass, where it should subtract."""
    _only(p, "Kc")
    return _solve(v, p, add=True)


def m2(v, p):
    """Uses h, or the lengths themselves, where their squares belong."""
    _only(p, "Kc", "rod_end")
    return _solve(v, p, square=False)


def m3(v, p):
    """Forgets the square root at the end."""
    _only(p, "Kc", "K_tangent")
    return _solve(v, p, root=False)


def m4(v, p):
    """Takes the M.I. about a diameter to equal the M.I. about the central axis."""
    _only(p, "K_tangent", "disc_tangent")
    return _solve(v, p, diameter_is_central=True)


def m5(v, p):
    """Measures the shift h wrongly: a diameter for a radius, the rod's end for the sphere's centre, the whole length for half."""
    _only(p, "K_tangent", "dumbbell", "disc_tangent", "rod_end")
    return _solve(v, p, far=True)


def m6(v, p):
    """Leaves out the body's own M.I. about its centre, keeping only M h^2."""
    _only(p, "dumbbell", "disc_tangent", "rod_end")
    return _solve(v, p, own=False)


def m7(v, p):
    """Uses the formula for the wrong axis: the rod about its end instead of its centre."""
    _only(p, "dumbbell")
    return _solve(v, p, wrong_axis=True)


MODELS = {"key": key, "C09-M1": m1, "C09-M2": m2, "C09-M3": m3, "C09-M4": m4, "C09-M5": m5, "C09-M6": m6, "C09-M7": m7}
