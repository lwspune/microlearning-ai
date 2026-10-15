"""C09 Range and period: answer models (the key, and one per misconception).

params["type"] picks the question type:
  "quad": v["eq"] is an equation in x (= theta), written as an expression equal to 0; v["q"] is the
          same equation as a polynomial in t = f(theta), f = params["f"] (sin | cos | tan | sec). The
          answer is the FiniteSet of values f(theta) can actually take.
  "least": the least value of v["a"] tan^2 theta + v["b"] cot^2 theta (a, b > 0).
"""
from sympy import FiniteSet, Poly, Symbol, acos, asin, atan, diff, pi, simplify, solve, sqrt, Rational

t = Symbol("t")
_SC = ("sin", "cos")


def _roots(q):
    return [r for r in Poly(q, t).all_roots() if r.is_real]


def _thetas(f, r):
    """Angles theta with f(theta) = r, built from the inverse functions (complex when r is impossible)."""
    if f == "sin":
        return [asin(r), pi - asin(r)]
    if f == "cos":
        return [acos(r), -acos(r)]
    if f == "tan":
        return [atan(r)]
    if f == "sec":
        return [acos(1 / r), -acos(1 / r)] if r != 0 else []
    raise ValueError(f"unknown function {f}")


def _in_range(f, r):
    if f in _SC:
        return -1 <= r <= 1
    if f == "sec":
        return r <= -1 or r >= 1
    return True


def _set(vals):
    return FiniteSet(*[simplify(r) for r in vals])


def key(v, p):
    if p["type"] == "quad":
        f = p["f"]
        (xs,) = v["eq"].free_symbols  # x, real or not depending on who sympified it
        keep = []
        for r in _roots(v["q"]):
            for th in _thetas(f, r):
                th = simplify(th)
                if th.is_real and simplify(v["eq"].subs(xs, th)) == 0:
                    keep.append(r)
                    break
        return _set(keep)
    # least of a u + b / u over u = tan^2 theta > 0, by calculus
    u = Symbol("u", positive=True)
    g = v["a"] * u + v["b"] / u
    (u0,) = solve(diff(g, u), u)
    return simplify(g.subs(u, u0))


def m1(v, p):
    """Keeps every root of the quadratic: never checks it against the range."""
    if p["type"] != "quad":
        raise ValueError("quadratic items only")
    return _set(_roots(v["q"]))


def m2(v, p):
    """Puts every function in [-1, 1], sec, cosec, tan and cot too."""
    if p["type"] == "quad":
        return _set([r for r in _roots(v["q"]) if -1 <= r <= 1])
    # tan, cot in [-1, 1] with tan cot = 1 forces tan^2 = cot^2 = 1
    return v["a"] + v["b"]


def m3(v, p):
    """Right-triangle habit: sin, cos in [0, 1]; sec, cosec >= 1; tan, cot >= 0 (no negatives)."""
    if p["type"] != "quad":
        raise ValueError("quadratic items only")
    f = p["f"]
    ok = {"sin": lambda r: 0 <= r <= 1, "cos": lambda r: 0 <= r <= 1, "sec": lambda r: r >= 1, "tan": lambda r: r >= 0}[f]
    return _set([r for r in _roots(v["q"]) if ok(r)])


def m4(v, p):
    """Open range: sin and cos never reach 1 or -1, so a root of +-1 is thrown out."""
    if p["type"] != "quad" or p["f"] not in _SC:
        raise ValueError("sin/cos quadratic items only")
    return _set([r for r in _roots(v["q"]) if -1 < r < 1])


def m5(v, p):
    """Least value of a sum = sum of each term's least value: tan^2 >= 0 and cot^2 >= 0, so 0."""
    if p["type"] != "least":
        raise ValueError("least-value items only")
    return Rational(0)


def m6(v, p):
    """Middle-term sign slip in the factors: solves q(-t), so every root is negated."""
    if p["type"] != "quad":
        raise ValueError("quadratic items only")
    f = p["f"]
    return _set([-r for r in _roots(v["q"]) if _in_range(f, -r)])


def m7(v, p):
    """Completes (p + q)^2 for (p - q)^2: a tan^2 + b cot^2 = (sqrt(a) tan + sqrt(b) cot)^2 - 2 sqrt(ab)."""
    if p["type"] != "least":
        raise ValueError("least-value items only")
    return -2 * sqrt(v["a"] * v["b"])


MODELS = {"key": key, "C09-M1": m1, "C09-M2": m2, "C09-M3": m3, "C09-M4": m4, "C09-M5": m5, "C09-M6": m6, "C09-M7": m7}
