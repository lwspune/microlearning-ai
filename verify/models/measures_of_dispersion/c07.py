"""C07 Standard deviation of combined data: answer models (the key, and one per misconception).

params["kind"]:
  combine  inputs n1, m1, s1, n2, m2, s2 (sizes, means, S.D.s of two groups); answer: combined S.D.
  add      inputs n1, m1, s1 and the added observations a, b; answer: S.D. of all n1 + 2 values.
  sums     inputs n1, Sx, Sxx, n2, Sy, Syy (sum and sum of squares of each group); answer: combined S.D.
  split    inputs n, m, m1, m2, s1, s2: n values with mean m, made of a group with mean m1, S.D. s1
           and a group with mean m2, S.D. s2 (sizes not given); answer: combined S.D.
  second   inputs n1, m1, s1 (first group), n, m, s (combined group); answer: S.D. of the second group.
All S.D.s are population S.D.s (divide by n), as in the book.
"""
from sympy import S, sqrt


def _groups(v, p):
    """(n1, m1, V1, n2, m2, V2) for the forward kinds; V is a variance."""
    k = p["kind"]
    if k == "combine":
        return v["n1"], v["m1"], v["s1"] ** 2, v["n2"], v["m2"], v["s2"] ** 2
    if k == "add":
        a, b = v["a"], v["b"]
        m2 = (a + b) / 2
        return v["n1"], v["m1"], v["s1"] ** 2, S(2), m2, ((a - m2) ** 2 + (b - m2) ** 2) / 2
    if k == "sums":
        m1, m2 = v["Sx"] / v["n1"], v["Sy"] / v["n2"]
        return v["n1"], m1, v["Sxx"] / v["n1"] - m1**2, v["n2"], m2, v["Syy"] / v["n2"] - m2**2
    if k == "split":
        n, m, m1, m2 = v["n"], v["m"], v["m1"], v["m2"]
        n1 = n * (m - m2) / (m1 - m2)  # n1 m1 + (n - n1) m2 = n m
        return n1, m1, v["s1"] ** 2, n - n1, m2, v["s2"] ** 2
    raise ValueError(f"kind {k} is not a two-group forward question")


def _sq(n, m, V):
    """Sum of squares of a group from its size, mean and variance: sum x^2 = n(V + m^2)."""
    return n * (V + m**2)


def _root(V):
    if V.is_negative:
        raise ValueError("negative variance")
    return sqrt(V)


# ---------- the key: from the raw totals sum x and sum x^2, never via the d-formula ----------

def key(v, p):
    if p["kind"] == "second":
        n1, m1, V1, n, m, V = v["n1"], v["m1"], v["s1"] ** 2, v["n"], v["m"], v["s"] ** 2
        n2 = n - n1
        sum2 = n * m - n1 * m1
        sq2 = _sq(n, m, V) - _sq(n1, m1, V1)
        m2 = sum2 / n2
        return _root(sq2 / n2 - m2**2)
    n1, m1, V1, n2, m2, V2 = _groups(v, p)
    n = n1 + n2
    mean = (n1 * m1 + n2 * m2) / n
    return _root((_sq(n1, m1, V1) + _sq(n2, m2, V2)) / n - mean**2)


# ---------- misconceptions ----------

def _formula(n1, m1, V1, n2, m2, V2, mean=None, d=None):
    """The d-formula with a chosen combined mean, or one gap d used for both groups."""
    n = n1 + n2
    if d is None:
        if mean is None:
            mean = (n1 * m1 + n2 * m2) / n
        d1, d2 = m1 - mean, m2 - mean
    else:
        d1 = d2 = d
    return (n1 * (V1 + d1**2) + n2 * (V2 + d2**2)) / n


def _second(v):
    """The second group's size and mean (both found correctly) from the first and combined groups."""
    n1, m1, s1, n, m, s = v["n1"], v["m1"], v["s1"], v["n"], v["m"], v["s"]
    n2 = n - n1
    m2 = (n * m - n1 * m1) / n2
    return n1, m1, s1, n2, m2, s, n


def m1(v, p):
    """Leaves out the d-terms: the combined variance is the size-weighted mean of the two variances."""
    if p["kind"] == "second":
        n1, mm1, s1, n2, m2, s, n = _second(v)
        return _root((n * s**2 - n1 * s1**2) / n2)
    n1, mm1, V1, n2, m2, V2 = _groups(v, p)
    return _root((n1 * V1 + n2 * V2) / (n1 + n2))


def m2(v, p):
    """Averages the S.D.s (weighted by size) instead of the variances."""
    if p["kind"] == "second":
        n1, mm1, s1, n2, mm2, s, n = _second(v)
        sd = (n * s - n1 * s1) / n2
        if sd.is_negative:
            raise ValueError("negative S.D.")
        return sd
    n1, mm1, V1, n2, mm2, V2 = _groups(v, p)
    return (n1 * sqrt(V1) + n2 * sqrt(V2)) / (n1 + n2)


def m3(v, p):
    """Stops at the variance: gives sigma^2 as the S.D."""
    return key(v, p) ** 2


def m4(v, p):
    """Takes the combined mean as the plain average of the two means, ignoring the group sizes."""
    if p["kind"] == "second":
        n1, mm1, V1, n, m, V = v["n1"], v["m1"], v["s1"] ** 2, v["n"], v["m"], v["s"] ** 2
        n2 = n - n1
        mm2 = 2 * m - mm1  # m = (m1 + m2) / 2
        V2 = (n * V - n1 * (V1 + (mm1 - m) ** 2)) / n2 - (mm2 - m) ** 2
        return _root(V2)
    if p["kind"] == "split":
        raise ValueError("the combined mean is given")
    n1, mm1, V1, n2, mm2, V2 = _groups(v, p)
    if n1 == n2:
        raise ValueError("equal sizes: the plain average is the combined mean")
    return _root(_formula(n1, mm1, V1, n2, mm2, V2, mean=(mm1 + mm2) / 2))


def m5(v, p):
    """Takes d as the gap between the two group means, x1 - x2, for both groups."""
    if p["kind"] == "second":
        n1, mm1, s1, n2, mm2, s, n = _second(v)
        d2 = (mm1 - mm2) ** 2
        return _root((n * s**2 - n1 * (s1**2 + d2)) / n2 - d2)
    n1, mm1, V1, n2, mm2, V2 = _groups(v, p)
    return _root(_formula(n1, mm1, V1, n2, mm2, V2, d=mm1 - mm2))


MODELS = {"key": key, "C07-M1": m1, "C07-M2": m2, "C07-M3": m3, "C07-M4": m4, "C07-M5": m5}
