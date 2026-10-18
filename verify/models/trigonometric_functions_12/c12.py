"""C12 Principal values of inverse functions: answer models (the key, and one per misconception).

Inputs: x, the number the inverse function is applied to (absent when params["ask"] == "range").
params["f"]: the function, one of sin, cos, tan.
params["ask"]: "range" asks for the principal value branch (an Interval); otherwise the answer is one angle (radians).
"""
from sympy import Interval, Rational, cos, pi, simplify, sin, tan

FUNCS = {"sin": sin, "cos": cos, "tan": tan}
# The principal value branches, straight from the definitions.
RANGES = {
    "sin": Interval(-pi / 2, pi / 2),
    "cos": Interval(0, pi),
    "tan": Interval.open(-pi / 2, pi / 2),
}
SWAP = {"sin": "cos", "cos": "sin"}


def _f(p):
    f = p["f"]
    if f not in FUNCS:
        raise ValueError(f"unknown function {f}")
    return f


def _is_range(p):
    return p.get("ask") == "range"


def _candidates(lo, hi):
    """Multiples of pi/12 from lo to hi (the book's values are standard angles)."""
    a, b = int(lo / (pi / 12)), int(hi / (pi / 12))
    return [Rational(j, 12) * pi for j in range(a - 1, b + 2) if lo <= Rational(j, 12) * pi <= hi]


def _solve_in(f, x, rng):
    """The one angle in rng with f(angle) = x; raises when there is none or more than one."""
    found = [t for t in _candidates(rng.inf, rng.sup) if t in rng and simplify(FUNCS[f](t) - x) == 0]
    if len(found) != 1:
        raise ValueError(f"{len(found)} angles in {rng}")
    return found[0]


def key(v, p):
    """The principal value: the angle in the function's principal branch with that ratio."""
    f = _f(p)
    if _is_range(p):
        return RANGES[f]
    return _solve_in(f, v["x"], RANGES[f])


def _alpha(f, x):
    """The reference angle: the acute (or zero) angle with ratio |x|."""
    return _solve_in(f, abs(x), Interval(0, pi / 2))


def m1(v, p):
    """Treats cos^-1 like sin^-1: cos^-1(-x) = -cos^-1(x), a clockwise (negative) angle."""
    f = _f(p)
    if _is_range(p) or f != "cos" or not v["x"] < 0:
        raise ValueError("only for cos^-1 of a negative number")
    return -_alpha(f, v["x"])


def m2(v, p):
    """Gives the principal solution habit: the first angle in [0, 2pi) with that ratio."""
    f = _f(p)
    if _is_range(p):
        return Interval.Ropen(0, 2 * pi)
    sols = [t for t in _candidates(0, 2 * pi) if t < 2 * pi and simplify(FUNCS[f](t) - v["x"]) == 0]
    if not sols:
        raise ValueError("no solution")
    return min(sols)


def m3(v, p):
    """Finds the right arm (clockwise, Quadrant IV) but writes it as a positive angle: 2pi - alpha."""
    f = _f(p)
    if _is_range(p) or f == "cos" or not v["x"] < 0:
        raise ValueError("only for sin^-1 or tan^-1 of a negative number")
    return 2 * pi - _alpha(f, v["x"])


def m4(v, p):
    """Swaps sin^-1 and cos^-1: answers with the angle (and branch) of the other function."""
    f = _f(p)
    if f not in SWAP:
        raise ValueError("only sin and cos")
    g = SWAP[f]
    if _is_range(p):
        return RANGES[g]
    return _solve_in(g, v["x"], RANGES[g])


def m5(v, p):
    """Drops the sign: gives the reference angle for |x| (so the branch looks like [0, pi/2])."""
    f = _f(p)
    if _is_range(p):
        return Interval(0, pi / 2)
    if not v["x"] < 0:
        raise ValueError("only for a negative number")
    return _alpha(f, v["x"])


def m6(v, p):
    """Swaps the standard values at pi/6 and pi/3 (takes sin pi/6 = sqrt3/2), then places the angle correctly."""
    f = _f(p)
    if _is_range(p):
        raise ValueError("not for the branch")
    x = v["x"]
    a = _alpha(f, x)
    swapped = {pi / 6: pi / 3, pi / 3: pi / 6}
    if a not in swapped:
        raise ValueError("reference angle is not pi/6 or pi/3")
    b = swapped[a]
    if x > 0:
        return b
    return pi - b if f == "cos" else -b


MODELS = {"key": key, "C12-M1": m1, "C12-M2": m2, "C12-M3": m3, "C12-M4": m4, "C12-M5": m5, "C12-M6": m6}
