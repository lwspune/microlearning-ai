"""C04 Sum of n terms of a G.P.: answer models (the key, and one per misconception).

params["ask"]:
  sum   inputs a, r, n          -> S_n
  a     inputs r, n, S          -> the first term a, given S_n = S
  a36   inputs S3, S6           -> the first term a, given S_3 and S_6
  sumtt inputs i, ti, j, tj, n  -> S_n, given the terms t_i and t_j (j - i odd)
"""
from sympy import Rational, real_roots, real_root, Symbol, Poly

_r = Symbol("r")


def _terms_sum(a, r, n):
    """a + ar + ... + ar^(n-1), added term by term."""
    return sum((a * r**k for k in range(int(n))), Rational(0))


def _ar_from_terms(v):
    """a and r from t_i and t_j: t_j / t_i = r^(j - i), with j - i odd so r is the one real root."""
    i, j = int(v["i"]), int(v["j"])
    if (j - i) % 2 == 0:
        raise ValueError("j - i must be odd for a unique real r")
    r = real_root(v["tj"] / v["ti"], j - i)
    return v["ti"] / r ** (i - 1), r


def key(v, p):
    """Add the terms one by one; for unknowns, solve the term-by-term sums."""
    ask = p["ask"]
    if ask == "sum":
        return _terms_sum(v["a"], v["r"], v["n"])
    if ask == "a":
        return v["S"] / _terms_sum(1, v["r"], v["n"])
    if ask == "a36":
        # S6 (1 + r + r^2) = S3 (1 + r + ... + r^5): its real roots give r.
        eq = Poly(v["S6"] * _terms_sum(1, _r, 3) - v["S3"] * _terms_sum(1, _r, 6), _r)
        roots = set(real_roots(eq))
        if len(roots) != 1:
            raise ValueError(f"no unique real r: {roots}")
        (r,) = roots
        return v["S3"] / _terms_sum(1, r, 3)
    if ask == "sumtt":
        a, r = _ar_from_terms(v)
        return _terms_sum(a, r, v["n"])
    raise ValueError(f"no ask {ask}")


def _given_ar(v, p):
    if p["ask"] == "sum":
        return v["a"], v["r"]
    if p["ask"] == "sumtt":
        return _ar_from_terms(v)
    raise ValueError("a and r are not both known")


def m1(v, p):
    """Uses the power n - 1 (from t_n) in the sum: S_n = a(r^(n-1) - 1)/(r - 1), the sum of n - 1 terms."""
    ask = p["ask"]
    if ask in ("sum", "sumtt"):
        a, r = _given_ar(v, p)
        return a * (r ** (v["n"] - 1) - 1) / (r - 1)
    if ask == "a":
        r, n = v["r"], v["n"]
        return v["S"] * (r - 1) / (r ** (n - 1) - 1)
    raise ValueError("S_3 and S_6 don't give a neat r with this formula")


def m2(v, p):
    """Takes the sum S_n to be the nth term t_n = ar^(n-1)."""
    ask = p["ask"]
    if ask in ("sum", "sumtt"):
        a, r = _given_ar(v, p)
        return a * r ** (v["n"] - 1)
    if ask == "a":
        return v["S"] / v["r"] ** (v["n"] - 1)
    if ask == "a36":  # S3 = ar^2, S6 = ar^5
        r = real_root(v["S6"] / v["S3"], 3)
        return v["S3"] / r**2
    raise ValueError(f"no ask {ask}")


def m3(v, p):
    """Ignores the -1s: S_n = ar^n/(r - 1), so S_6/S_3 = r^3."""
    ask = p["ask"]
    if ask in ("sum", "sumtt"):
        a, r = _given_ar(v, p)
        return a * r ** v["n"] / (r - 1)
    if ask == "a":
        r, n = v["r"], v["n"]
        return v["S"] * (r - 1) / r**n
    if ask == "a36":
        r = real_root(v["S6"] / v["S3"], 3)
        return v["S3"] * (r - 1) / r**3
    raise ValueError(f"no ask {ask}")


def m4(v, p):
    """Mixes the two forms: S_n = a(r^n - 1)/(1 - r), which flips the sign."""
    ask = p["ask"]
    if ask in ("sum", "sumtt"):
        a, r = _given_ar(v, p)
        return a * (r ** v["n"] - 1) / (1 - r)
    if ask == "a":
        r, n = v["r"], v["n"]
        return v["S"] * (1 - r) / (r**n - 1)
    if ask == "a36":  # the ratio S6/S3 = r^3 + 1 is unchanged, so r is right
        r = real_root(v["S6"] / v["S3"] - 1, 3)
        return v["S3"] * (1 - r) / (r**3 - 1)
    raise ValueError(f"no ask {ask}")


MODELS = {"key": key, "C04-M1": m1, "C04-M2": m2, "C04-M3": m3, "C04-M4": m4}
