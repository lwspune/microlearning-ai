"""C03 Three or four numbers in G.P.: answer models (the key, and one per misconception).

params["n"] picks the question type:
  "3": three numbers in G.P., increasing, with sum v["S"] and product v["P"].
       params["ask"]: "middle" (the middle number) | "outer" (first + last).
  "4": four numbers in G.P., increasing, with product v["P"] and middle-two sum v["M"].
       params["ask"]: "next" (the term after the fourth).
  "k": v["t1"], v["t2"], v["t3"] are expressions in k, consecutive terms of a G.P.; the answer is k
       (the positive value when the condition has two roots).
"""
from sympy import Poly, Symbol, solve, sqrt, symbols, simplify

k = Symbol("k")


def _three(v):
    """x < y < z in G.P. with the given sum and product, solved from the definition."""
    x, y, z = symbols("x y z")
    sols = solve([y**2 - x * z, x + y + z - v["S"], x * y * z - v["P"]], [x, y, z], dict=True)
    real = [s for s in sols if all(simplify(s[w]).is_real for w in (x, y, z))]
    inc = [s for s in real if simplify(s[y] - s[x]).is_positive and simplify(s[z] - s[y]).is_positive]
    if len(inc) != 1:
        raise ValueError(f"no single increasing G.P. with sum {v['S']} and product {v['P']}")
    s = inc[0]
    return simplify(s[x]), simplify(s[y]), simplify(s[z])


def _four(v):
    """t, tq, tq², tq³ (q > 1, t > 0) with product P and tq + tq² = M, from the definition."""
    q = Symbol("q")
    # t = M / (q(1 + q)); product t⁴q⁶ = P gives M⁴q² = P(1 + q)⁴.
    roots = [r for r in Poly(v["M"] ** 4 * q**2 - v["P"] * (1 + q) ** 4, q).all_roots() if r.is_real and r > 1]
    roots = sorted(set(simplify(r) for r in roots))
    if len(roots) != 1:
        raise ValueError("no single increasing G.P. fits")
    r = roots[0]
    t = simplify(v["M"] / (r * (1 + r)))
    nums = [simplify(t * r**i) for i in range(4)]
    assert simplify(nums[0] * nums[1] * nums[2] * nums[3] - v["P"]) == 0
    return nums, r


def _pick(eq, terms):
    """The root of eq in k: the only one, or the only positive one. Roots that make a term 0 are dropped."""
    roots = [simplify(r) for r in solve(eq, k) if r.is_real]
    roots = [r for r in roots if all(simplify(t.subs(k, r)) != 0 for t in terms)]
    if len(roots) == 1:
        return roots[0]
    pos = [r for r in roots if r > 0]
    if len(pos) == 1:
        return pos[0]
    raise ValueError(f"no single value of k ({roots})")


def _terms(v):
    return v["t1"], v["t2"], v["t3"]


def key(v, p):
    n = p["n"]
    if n == "3":
        x, y, z = _three(v)
        return y if p["ask"] == "middle" else simplify(x + z)
    if n == "4":
        nums, q = _four(v)
        return simplify(nums[3] * q)
    t1, t2, t3 = _terms(v)
    return _pick(t2**2 - t1 * t3, (t1, t2, t3))


def m1(v, p):
    """A.P. habit on a G.P.: the middle is the average, first + last = 2 x middle, equal steps, 2b = a + c."""
    n = p["n"]
    if n == "3":
        return v["S"] / 3 if p["ask"] == "middle" else 2 * v["S"] / 3
    if n == "4":
        nums, _ = _four(v)
        return simplify(2 * nums[3] - nums[2])
    t1, t2, t3 = _terms(v)
    return _pick(2 * t2 - t1 - t3, (t1, t2, t3))


def m2(v, p):
    """Takes the middle a as the first term: a, ar, ar² (four: a, ar², ar⁴, ar⁶); for k, squares the first term."""
    n = p["n"]
    if n == "3":
        x, y, z = _three(v)
        a, r = y, simplify(z / y)
        return simplify(a * r) if p["ask"] == "middle" else simplify(a + a * r**2)
    if n == "4":
        nums, q = _four(v)
        a = simplify(sqrt(nums[1] * nums[2]))  # the centre of a/r³, a/r, ar, ar³
        return simplify(a * q**4)
    t1, t2, t3 = _terms(v)
    return _pick(t1**2 - t2 * t3, (t1, t2, t3))


def m3(v, p):
    """Takes r as the common ratio of a/r³, a/r, ar, ar³ (it is r²): the next term is ar³ x r."""
    if p["n"] != "4":
        raise ValueError("only four numbers use a/r³, a/r, ar, ar³")
    nums, q = _four(v)
    return simplify(nums[3] * sqrt(q))


def m4(v, p):
    """Reads a power as a multiple: a³ = P gives a = P/3; (t₂)² is taken as 2t₂."""
    n = p["n"]
    if n == "3":
        a = v["P"] / 3
        return a if p["ask"] == "middle" else simplify(v["S"] - a)
    if n == "k":
        t1, t2, t3 = _terms(v)
        return _pick(2 * t2 - t1 * t3, (t1, t2, t3))
    raise ValueError("not modelled for four numbers")


MODELS = {"key": key, "C03-M1": m1, "C03-M2": m2, "C03-M3": m3, "C03-M4": m4}
