"""C18 Three or four numbers in A.P.: answer models (the key, and one per misconception).

params["n"] picks the question type:
  "3": three numbers in A.P. with sum v["S"] and product v["P"], in params["order"] ("inc" | "dec").
       The answer is the first number in that order.
  "4": four numbers in A.P., increasing, with sum v["S"] and sum of squares v["Q"].
       The answer is the term of the A.P. that comes after the fourth number.
  "k": v["t1"], v["t2"], v["t3"] are expressions in k, consecutive terms of an A.P.; the answer is k.
"""
from sympy import Poly, Symbol, expand, simplify, solve, sqrt, symbols

k = Symbol("k")


def _three(v, order):
    """The three numbers in A.P. with the given sum and product, in the asked order, from the definition."""
    x, e = symbols("x e", real=True)
    sols = solve([3 * x + 3 * e - v["S"], x * (x + e) * (x + 2 * e) - v["P"]], [x, e], dict=True)
    want = [s for s in sols if s[x].is_real and s[e].is_real and (s[e] > 0 if order == "inc" else s[e] < 0)]
    if len(want) != 1:
        raise ValueError(f"no single A.P. with sum {v['S']} and product {v['P']} ({sols})")
    s = want[0]
    return [simplify(s[x] + i * s[e]) for i in range(3)]


def _four(v):
    """t, t + e, t + 2e, t + 3e (e > 0) with sum S and sum of squares Q, from the definition."""
    t, e = symbols("t e", real=True)
    sols = solve([4 * t + 6 * e - v["S"], sum((t + i * e) ** 2 for i in range(4)) - v["Q"]], [t, e], dict=True)
    inc = [s for s in sols if s[e].is_real and s[e] > 0]
    if len(inc) != 1:
        raise ValueError("no single increasing A.P. fits")
    return [simplify(inc[0][t] + i * inc[0][e]) for i in range(4)], simplify(inc[0][e])


def _k(eq):
    roots = [simplify(r) for r in solve(eq, k)]
    if len(roots) != 1:
        raise ValueError(f"no single value of k ({roots})")
    return roots[0]


def _terms(v):
    return v["t1"], v["t2"], v["t3"]


def _half_gap(v):
    """The |d| of a − d, a, a + d (three) or a − 3d, ..., a + 3d (four), from the true numbers."""
    if "Q" in v:
        nums, e = _four(v)
        return e / 2
    nums = _three(v, "inc")
    return nums[1] - nums[0]


def key(v, p):
    n = p["n"]
    if n == "3":
        return _three(v, p["order"])[0]
    if n == "4":
        nums, e = _four(v)
        return simplify(nums[3] + e)
    t1, t2, t3 = _terms(v)
    return _k((t2 - t1) - (t3 - t2))


def m1(v, p):
    """Takes d as the common difference of a − 3d, a − d, a + d, a + 3d (it is 2d)."""
    if p["n"] != "4":
        raise ValueError("only four numbers use a − 3d, a − d, a + d, a + 3d")
    nums, e = _four(v)
    return simplify(nums[3] + e / 2)


def m2(v, p):
    """Drops the 2 in 2b = a + c: the middle term is the sum of its neighbours."""
    if p["n"] != "k":
        raise ValueError("only the condition for three terms")
    t1, t2, t3 = _terms(v)
    return _k(t2 - (t1 + t3))


def m3(v, p):
    """Loses track of the middle: takes a of a − d, a, a + d as the first number (four: a, a + 2d, a + 4d,
    a + 6d), or doubles the first term in 2b = a + c."""
    n = p["n"]
    if n == "3":
        return v["S"] / 3
    if n == "4":
        a, d = v["S"] / 4, _half_gap(v)
        return simplify(a + 8 * d)
    t1, t2, t3 = _terms(v)
    return _k(2 * t1 - (t2 + t3))


def m4(v, p):
    """Ignores the order: takes the root of d that lists the numbers the other way round."""
    n = p["n"]
    if n == "3":
        return _three(v, "dec" if p["order"] == "inc" else "inc")[0]
    if n == "4":
        nums, e = _four(v)
        return simplify(nums[0] - e)  # the term after the fourth of the reversed list
    raise ValueError("no order to ignore")


def m5(v, p):
    """Multiplies a bracket by its first term only: a(a² − d²) = a³ − d², 2(pk + q) = 2pk + q."""
    n = p["n"]
    if n == "3":
        a = v["S"] / 3
        d2 = a**3 - v["P"]
        if d2 <= 0:
            raise ValueError("no real d")
        d = sqrt(d2)
        return simplify(a - d if p["order"] == "inc" else a + d)
    if n == "k":
        t1, t2, t3 = _terms(v)
        q = Poly(expand(t2), k)
        c, r = q.coeff_monomial(k), q.coeff_monomial(1)
        if c == 0 or r == 0:
            raise ValueError("the middle term has no bracket to slip on")
        return _k((2 * c * k + r) - (t1 + t3))
    raise ValueError("not modelled for a sum of squares")


MODELS = {"key": key, "C18-M1": m1, "C18-M2": m2, "C18-M3": m3, "C18-M4": m4, "C18-M5": m5}
