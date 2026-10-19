"""C11 Greatest and least values of a sin θ + b cos θ: answer models (the key, and one per misconception).

params["kind"]:
  R     inputs a, b, c; params e (the stem's expression in t), u (an angle linear in t), ask, and
        optionally lo, hi (the interval for t, default 0 to 2π) and terms (the stem's terms, ";"-separated).
        The models check that e equals c + a sin u + b cos u before using a, b, c.
        ask "max" | "min": the greatest or least value;  ask "at": the t in [lo, hi] where e is greatest.
  amgm  inputs p, q, c; params e, ask "min": e equals c + p tan^2 t + q cot^2 t (checked), least value.

The key never uses R = sqrt(a^2 + b^2): it finds where the derivative of a sin u + b cos u is zero
(tan u = a/b, the angle atan2(a, b)) and evaluates there; for amgm, where the derivative of
p T + q/T (T = tan^2 t > 0) is zero.
"""
from sympy import Abs, Symbol, atan2, cos, cot, expand_trig, pi, simplify, sin, sqrt, sympify, tan

T = Symbol("t", real=True)


def _e(p, name="e"):
    return sympify(p[name], locals={"t": T})


def _abc(v, p):
    if p["kind"] != "R":
        raise ValueError("not an a sin u + b cos u item")
    a, b, c = v["a"], v["b"], v.get("c", 0)
    u = _e(p, "u")
    if simplify(expand_trig(_e(p) - (c + a * sin(u) + b * cos(u)))) != 0:
        raise ValueError("e is not c + a sin u + b cos u")
    return a, b, c, u


def _pqc(v, p):
    if p["kind"] != "amgm":
        raise ValueError("not an AM-GM item")
    pp, q, c = v["p"], v["q"], v.get("c", 0)
    if simplify(expand_trig(_e(p) - (c + pp * tan(T) ** 2 + q * cot(T) ** 2))) != 0:
        raise ValueError("e is not c + p tan^2 t + q cot^2 t")
    return pp, q, c


def _t_at(u_value, u, p):
    """The t in [lo, hi] with u(t) = u_value + 2nπ for some whole n (u is linear in t)."""
    k = simplify(u.diff(T))
    u0 = u.subs(T, 0)
    lo, hi = sympify(p.get("lo", "0")), sympify(p.get("hi", "2*pi"))
    hits = []
    for n in range(-6, 7):
        tv = simplify((u_value + 2 * n * pi - u0) / k)
        if lo <= tv <= hi:
            hits.append(tv)
    if len(hits) != 1:
        raise ValueError(f"{len(hits)} values of t in the interval")
    return hits[0]


def key(v, p):
    if p["kind"] == "amgm":
        pp, q, c = _pqc(v, p)
        t2 = sqrt(q / pp)  # d/dT (p T + q/T) = p - q/T^2 = 0
        return simplify(c + pp * t2 + q / t2)
    a, b, c, u = _abc(v, p)
    u0 = atan2(a, b)  # d/du (a sin u + b cos u) = a cos u - b sin u = 0 here and at u0 + π
    top = simplify(a * sin(u0) + b * cos(u0))
    low = simplify(a * sin(u0 + pi) + b * cos(u0 + pi))
    if p["ask"] == "max":
        return simplify(c + top)
    if p["ask"] == "min":
        return simplify(c + low)
    return _t_at(u0 if top > low else u0 + pi, u, p)


def _term_range(term):
    """The range of k f(w)^n for f sin or cos: n even gives [0, k], n odd [-|k|, |k|]."""
    coeff, rest = term.as_independent(T, as_Add=False)
    base, n = rest.as_base_exp()
    if base.func not in (sin, cos) or not n.is_Integer:
        raise ValueError(f"can't range the term {term}")
    if n % 2 == 0:
        return sorted([0, coeff])
    return [-Abs(coeff), Abs(coeff)]


def m1(v, p):
    """Adds the terms' separate extremes, as though every term peaks at the same angle; asked where the
    peak is, puts it where the bigger term peaks. For amgm: tan^2, cot^2 >= 0 separately, so the least is c."""
    if p["kind"] == "amgm":
        return _pqc(v, p)[2]
    a, b, c, u = _abc(v, p)
    if p["ask"] == "at":
        if Abs(a) == Abs(b):
            raise ValueError("neither term is bigger")
        uv = (pi / 2 if a > 0 else -pi / 2) if Abs(a) > Abs(b) else (0 if b > 0 else pi)
        return _t_at(uv, u, p)
    if "terms" in p:
        ranges = [_term_range(sympify(s, locals={"t": T})) for s in p["terms"].split(";")]
        i = 1 if p["ask"] == "max" else 0
        return simplify(sum(r[i] for r in ranges))
    s = 1 if p["ask"] == "max" else -1
    return c + s * (Abs(a) + Abs(b))


def m2(v, p):
    """Drops the square root: R = a^2 + b^2."""
    a, b, c, u = _abc(v, p)
    if p["ask"] == "at":
        raise ValueError("R doesn't move the peak")
    s = 1 if p["ask"] == "max" else -1
    return c + s * (a**2 + b**2)


def m3(v, p):
    """Takes the least value of sine (or cosine) as 0, so c + R sin(u + α) is least at c."""
    a, b, c, u = _abc(v, p)
    if p["ask"] != "min":
        raise ValueError("only for least values")
    return c


def m4(v, p):
    """Swaps the ratios when matching R sin(u + α): takes tan α = a/b, so the peak lands at the complement."""
    a, b, c, u = _abc(v, p)
    if p["ask"] != "at":
        raise ValueError("only for where the peak is")
    if a == b:
        raise ValueError("a = b: the swap changes nothing")
    return _t_at(atan2(b, a), u, p)


def m5(v, p):
    """Drops the constant: gives the extreme of the varying part alone."""
    if p["kind"] == "amgm":
        pp, q, c = _pqc(v, p)
        if c == 0:
            raise ValueError("no constant to drop")
        return 2 * sqrt(pp * q)
    a, b, c, u = _abc(v, p)
    if c == 0 or p["ask"] == "at":
        raise ValueError("no constant to drop")
    s = 1 if p["ask"] == "max" else -1
    return s * sqrt(a**2 + b**2)


def m6(v, p):
    """Puts the extreme at 45°, where sin = cos (and tan = cot), whatever a and b are."""
    if p["kind"] == "amgm":
        pp, q, c = _pqc(v, p)
        return c + pp + q
    a, b, c, u = _abc(v, p)
    if p["ask"] == "at":
        return _t_at(pi / 4, u, p)
    return simplify(c + (a + b) / sqrt(2))


MODELS = {"key": key, "C11-M1": m1, "C11-M2": m2, "C11-M3": m3, "C11-M4": m4, "C11-M5": m5, "C11-M6": m6}
