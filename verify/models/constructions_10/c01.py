"""C01 Constructing a similar triangle: answer models (the key, and one per misconception).

Inputs: m, n, the ratio old side : new side (AB : A'B = m : n); for a length item also s, a side
of the given (old) triangle. params["form"]:
  "length": the matching side of the new triangle, a number (cm);
  "plan":   Tuple(number of equal parts marked on the ray, k), where T_k is the point joined to
            the end of the given side (the parallel to it is then drawn through T_n).
"""
from sympy import Max, Min, Tuple, sympify


def _mn(v):
    return sympify(v["m"]), sympify(v["n"])


def key(v, p):
    m, n = _mn(v)
    if p["form"] == "length":
        # Similar triangles: every side of the new one is n/m of the matching old side.
        return sympify(v["s"]) * n / m
    # The parallel through T_n to the join T_kC cuts BC at BC' = BC * n/k (basic proportionality),
    # so k = m; both T_m and T_n must be on the ray, so max(m, n) parts are marked.
    return Tuple(Max(m, n), m)


def m1(v, p):
    """Reads the ratio the wrong way round: new side = s * m/n; joins T_n and draws the parallel through T_m."""
    m, n = _mn(v)
    if p["form"] == "length":
        return sympify(v["s"]) * m / n
    return Tuple(Max(m, n), n)


def m2(v, p):
    """Treats m : n as dividing a segment in that ratio: m + n parts; new side = s * n/(m + n)."""
    m, n = _mn(v)
    if p["form"] == "length":
        return sympify(v["s"]) * n / (m + n)
    return Tuple(m + n, m + n)


def m3(v, p):
    """Marks only the smaller of m and n parts, and joins the last one."""
    m, n = _mn(v)
    if p["form"] != "plan":
        raise ValueError("a plan item only")
    return Tuple(Min(m, n), Min(m, n))


def m4(v, p):
    """Additive thinking: the new side differs from the old by m - n cm."""
    m, n = _mn(v)
    if p["form"] != "length":
        raise ValueError("a length item only")
    return sympify(v["s"]) - (m - n)


MODELS = {"key": key, "C01-M1": m1, "C01-M2": m2, "C01-M3": m3, "C01-M4": m4}
