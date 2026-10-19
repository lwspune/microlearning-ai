"""C11 The correlation coefficient: answer models (the key, and one per misconception).

p["ask"] picks the question type:
  data       the pairs v["xs"], v["ys"] (tuples, in order) -> Karl Pearson's r
  sums       n = v["n"] pairs with v["sx"] = sum x, v["sy"], v["sxx"] = sum x^2, v["syy"], v["sxy"] -> r
  explained  v["cov"], v["vx"] = var(x), v["vy"] = var(y) -> the percentage of the variation in y
             explained by the straight-line relation (p["share"] = "explained" or "unexplained")
  shift      r(x, y) = v["r"]; u = a + b x, v = c + d y with v["b"], v["d"] -> r(u, v)
The variance and covariance divide by n.
"""
from sympy import Abs, Rational, S, sqrt


def _ask(p):
    return p["ask"]


def _pairs(v):
    return [(Rational(x), Rational(y)) for x, y in zip(v["xs"], v["ys"])]


def _moments(v, p):
    """(cov, var x, var y), straight from the deviations (data) or the sums (sums)."""
    a = _ask(p)
    if a == "data":
        ps = _pairs(v)
        n = len(ps)
        mx = sum(x for x, _ in ps) / n
        my = sum(y for _, y in ps) / n
        cov = sum((x - mx) * (y - my) for x, y in ps) / n
        vx = sum((x - mx) ** 2 for x, _ in ps) / n
        vy = sum((y - my) ** 2 for _, y in ps) / n
        return cov, vx, vy
    if a == "sums":
        n = S(v["n"])
        mx, my = v["sx"] / n, v["sy"] / n
        return v["sxy"] / n - mx * my, v["sxx"] / n - mx**2, v["syy"] / n - my**2
    if a == "explained":
        return S(v["cov"]), S(v["vx"]), S(v["vy"])
    raise ValueError(a)


def _r(v, p):
    if _ask(p) == "shift":
        # cov(u, v) = b d cov(x, y), sigma_u = |b| sigma_x, sigma_v = |d| sigma_y; take sigma_x = sigma_y = 1.
        b, d = S(v["b"]), S(v["d"])
        return b * d * S(v["r"]) / (Abs(b) * Abs(d))
    cov, vx, vy = _moments(v, p)
    return cov / sqrt(vx * vy)


def _share(r2, p):
    """The percentage explained (100 r^2) or not explained (100 (1 - r^2))."""
    return 100 * r2 if p.get("share", "explained") == "explained" else 100 * (1 - r2)


def key(v, p):
    r = _r(v, p)
    return _share(r**2, p) if _ask(p) == "explained" else r


def m1(v, p):
    """Measures from the origin, not the means: r = sum xy / sqrt(sum x^2 sum y^2)."""
    a = _ask(p)
    if a == "data":
        ps = _pairs(v)
        return sum(x * y for x, y in ps) / sqrt(sum(x**2 for x, _ in ps) * sum(y**2 for _, y in ps))
    if a == "sums":
        return v["sxy"] / sqrt(v["sxx"] * v["syy"])
    raise ValueError("only for raw data or sums")


def m2(v, p):
    """Divides the covariance by the product of the variances, not of the S.D.s."""
    if _ask(p) == "shift":
        raise ValueError("no variances given")
    cov, vx, vy = _moments(v, p)
    r = cov / (vx * vy)
    return _share(r**2, p) if _ask(p) == "explained" else r


def m3(v, p):
    """Thinks r scales like the covariance: r(a + bx, c + dy) = b d r."""
    if _ask(p) != "shift":
        raise ValueError("only for a change of origin and scale")
    return S(v["b"]) * S(v["d"]) * S(v["r"])


def m4(v, p):
    """Thinks r is unaffected by any change of scale, a negative one included."""
    if _ask(p) != "shift":
        raise ValueError("only for a change of origin and scale")
    return S(v["r"])


def m5(v, p):
    """Mixes up r and r^2: reports r^2 as r, or takes r itself as the share explained."""
    r = _r(v, p)
    if _ask(p) == "explained":
        return _share(Abs(r), p)
    return r**2


def m6(v, p):
    """Gives the other share: the percentage not explained when the explained one is asked, and vice versa."""
    if _ask(p) != "explained":
        raise ValueError("only for a share of the variation")
    r2 = _r(v, p) ** 2
    return 100 * (1 - r2) if p.get("share", "explained") == "explained" else 100 * r2


MODELS = {"key": key, "C11-M1": m1, "C11-M2": m2, "C11-M3": m3, "C11-M4": m4, "C11-M5": m5, "C11-M6": m6}
