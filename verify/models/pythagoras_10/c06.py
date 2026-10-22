"""C06 Apollonius theorem: answer models (the key, and one per misconception).

Every item names its shape in params["shape"]:
  side     median m from A and S = AB^2 + AC^2 given (or AB = b, AC = c); find BC     (inputs m, S | b, c)
  median   third side a = BC and S = AB^2 + AC^2 given (or b, c); find the median AM (inputs a, S | b, c)
  para     parallelogram: S = sum of the squares of two adjacent sides, one diagonal d;
           find the other diagonal                                                    (inputs S, d)
  rhombus  rhombus of side a and one diagonal d; find the other diagonal              (inputs a, d)

The key works in co-ordinates and vectors (the midpoint M at the origin, or the two sides as vectors),
never by quoting Apollonius; each misconception applies its wrong rule to the same figures.
"""
from sympy import expand, solve, sqrt, symbols

p, q, x, r, k = symbols("p q x r k", real=True)


def _shape(pr, *allowed):
    if pr["shape"] not in allowed:
        raise ValueError(f"not modelled for {pr['shape']}")
    return pr["shape"]


def _S(v):
    """AB^2 + AC^2 (or, for a parallelogram, the sum of the squares of two adjacent sides)."""
    if "S" in v:
        return v["S"]
    return v["b"] ** 2 + v["c"] ** 2


def _pos(e, why):
    if not e.is_positive:
        raise ValueError(why)
    return sqrt(e)


def _sum_sq(h, rad):
    """AB^2 + AC^2 with B = (-h, 0), C = (h, 0), A = (p, q) and AM = rad (M the origin)."""
    e = expand((p + h) ** 2 + q ** 2 + (p - h) ** 2 + q ** 2)
    return expand(e.subs(p ** 2, rad ** 2 - q ** 2))


def _other_diag(S, d):
    """Sides u, w with |u|^2 + |w|^2 = S and u.w = k: the diagonals are |u + w| and |u - w|."""
    kk = solve(S + 2 * k - d ** 2, k)[0]
    return _pos(S - 2 * kk, "no such parallelogram")


def key(v, pr):
    s = _shape(pr, "side", "median", "para", "rhombus")
    if s == "side":
        sols = [t for t in solve(_sum_sq(x, v["m"]) - _S(v), x) if t.is_positive]
        return 2 * sols[0]
    if s == "median":
        sols = [t for t in solve(_sum_sq(v["a"] / 2, r) - _S(v), r) if t.is_positive]
        return sols[0]
    if s == "para":
        return _other_diag(v["S"], v["d"])
    return _other_diag(2 * v["a"] ** 2, v["d"])


def m1(v, pr):
    """Drops the 2s: AB^2 + AC^2 = AM^2 + BM^2, written like Pythagoras."""
    s = _shape(pr, "side", "median")
    if s == "side":
        return 2 * _pos(_S(v) - v["m"] ** 2, "no length")
    return _pos(_S(v) - (v["a"] / 2) ** 2, "no length")


def m2(v, pr):
    """Mixes the whole and the half: stops at BM (or half a diagonal), or uses BC where BM belongs."""
    s = _shape(pr, "side", "median", "para", "rhombus")
    if s == "median":
        return _pos((_S(v) - 2 * v["a"] ** 2) / 2, "no length")
    return key(v, pr) / 2


def m3(v, pr):
    """Forgets the square root: gives the square of the length."""
    return key(v, pr) ** 2


def m4(v, pr):
    """Takes the median as half the third side (true only in a right-angled triangle)."""
    s = _shape(pr, "side", "median")
    if s == "side":
        return 2 * v["m"]
    return v["a"] / 2


def m5(v, pr):
    """Takes the diagonals of a parallelogram (or rhombus) as equal."""
    _shape(pr, "para", "rhombus")
    return v["d"]


def m6(v, pr):
    """Counts only two sides: d1^2 + d2^2 = AB^2 + AD^2, not the sum over all four sides."""
    s = _shape(pr, "para", "rhombus")
    S = v["S"] if s == "para" else 2 * v["a"] ** 2
    return _pos(S - v["d"] ** 2, "no length")


MODELS = {"key": key, "C06-M1": m1, "C06-M2": m2, "C06-M3": m3, "C06-M4": m4, "C06-M5": m5, "C06-M6": m6}
