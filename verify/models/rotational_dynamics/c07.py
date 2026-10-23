"""C07 Moment of inertia and radius of gyration: answer models (the key, and one per misconception).

params["ask"] picks the quantity:
  "ring":   I of a thin ring about its central axis (inputs M, R);
  "disc":   I of a uniform disc about its central axis (inputs M, R_cm);
  "disc_formula": the same in symbols M, R (a formula);
  "K_disc": radius of gyration of a uniform disc about its central axis (inputs R);
  "which":  which statement about M.I. expressions is right (a named answer).

The key integrates r^2 dm in sympy: a ring keeps all its mass at R; a disc is a stack of thin rings of
radius x with mass 2 M x dx / R^2. Radii of gyration come from I = M K^2.
"""
from sympy import Rational, Symbol, integrate, solve, sqrt

from physics import sig

_x = Symbol("x", positive=True)
_K = Symbol("K", positive=True)

STATEMENTS = {
    "key": Symbol("cone_and_disc_alike"),
    "C07-M7": Symbol("each_object_its_own"),
    "C07-M8": Symbol("depth_counts"),
    "C07-M9": Symbol("rod_equals_sheet"),
}


def _ring(M, R):
    return M * R ** 2  # every bit of mass at distance R


def _disc(M, R):
    return integrate(2 * M / R ** 2 * _x ** 3, (_x, 0, R))  # rings of radius x: dm = 2 M x dx / R^2


def _disc_about_diameter(M, R):
    return _disc(M, R) / 2  # used only by the wrong-axis slip


def _I(shape, M, R, *, swap=False, square=True, axis_wrong=False):
    if axis_wrong and shape == "disc":
        I = _disc_about_diameter(M, R)
    else:
        use = {"ring": "disc", "disc": "ring"}[shape] if swap else shape
        I = _ring(M, R) if use == "ring" else _disc(M, R)
    return I if square else I / R  # the slip writes R where R^2 belongs


def _solve(v, p, *, swap=False, square=True, diameter=False, si=True, axis_wrong=False, root=True):
    ask = p["ask"]
    if ask == "ring":
        R = 2 * v["R"] if diameter else v["R"]
        return sig(_I("ring", v["M"], R, swap=swap, square=square))
    if ask == "disc":
        R = v["R_cm"] / 100 if si else v["R_cm"]
        return sig(_I("disc", v["M"], R, swap=swap, square=square))
    if ask == "disc_formula":
        return _I("disc", v["M"], v["R"], swap=swap, square=square, axis_wrong=axis_wrong)
    if ask == "K_disc":
        M = Symbol("M", positive=True)
        R = 2 * v["R"] if diameter else v["R"]
        I = _I("disc", M, R, swap=swap)
        (K,) = solve(M * _K ** 2 - I, _K) if root else [I / (M * R)]  # I = M K^2; the slip takes K = I / (M R)
        return sig(K)
    raise ValueError(f"unknown ask {ask}")


def key(v, p):
    return STATEMENTS["key"] if p["ask"] == "which" else _solve(v, p)


def _only(p, *asks):
    if p["ask"] not in asks:
        raise ValueError("does not apply to this item")


def m1(v, p):
    """Mixes up the ring and the disc formulas."""
    _only(p, "ring", "disc", "disc_formula", "K_disc")
    return _solve(v, p, swap=True)


def m2(v, p):
    """Writes R where R^2 belongs."""
    _only(p, "ring", "disc", "disc_formula")
    return _solve(v, p, square=False)


def m3(v, p):
    """Uses the diameter as the radius."""
    _only(p, "ring", "K_disc")
    return _solve(v, p, diameter=True)


def m4(v, p):
    """Leaves centimetres unconverted."""
    _only(p, "disc")
    return _solve(v, p, si=False)


def m5(v, p):
    """Uses the formula for the wrong axis: a disc about a diameter."""
    _only(p, "disc_formula")
    return _solve(v, p, axis_wrong=True)


def m6(v, p):
    """Forgets the square root in the radius of gyration."""
    _only(p, "K_disc")
    return _solve(v, p, root=False)


def _named(p, m):
    if p["ask"] != "which":
        raise ValueError("only the named item")
    return STATEMENTS[m]


def m7(v, p):
    """Thinks different objects must have different M.I. expressions."""
    return _named(p, "C07-M7")


def m8(v, p):
    """Thinks every dimension of a body enters its M.I."""
    return _named(p, "C07-M8")


def m9(v, p):
    """Thinks a plane sheet is just a wide rod."""
    return _named(p, "C07-M9")


MODELS = {"key": key, "C07-M1": m1, "C07-M2": m2, "C07-M3": m3, "C07-M4": m4, "C07-M5": m5, "C07-M6": m6,
          "C07-M7": m7, "C07-M8": m8, "C07-M9": m9}
