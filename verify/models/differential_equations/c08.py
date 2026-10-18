"""C08 Growth and decay: answer models (the key, and one per misconception).

Inputs (sympy): x0, the amount at t = 0; x1, the amount at t = t1; then either T (the time
asked, counted from t = 0) when params["ask"] == "amount", or r (the target amount) when
params["ask"] == "time".
Params (strings): ask ("amount" | "time"); trend ("growth" | "decay", for M2);
subs (optional flat list [from, to, from, to, ...]: the book's table values, e.g.
"log(2)", "0.6931", substituted into the exact answer); dp (optional: round to that many
decimal places, after subs).

The key works from the definition: dx/dt = kx with x(0) = x0 gives x = x0 e^(kt); the
reading x(t1) = x1 fixes k = log(x1/x0)/t1; then x(T) = x0 e^(kT), or the t with x(t) = r.
"""
from sympy import Rational, exp, log, nsimplify, simplify, sympify


def _finish(e, p):
    """Apply the book's table values and rounding, so options match the book's numbers."""
    s = p.get("subs", [])
    e = simplify(e)
    for a, b in zip(s[0::2], s[1::2]):
        e = e.subs(sympify(a), nsimplify(b, rational=True))
    e = simplify(e)
    if "dp" in p:
        e = Rational(str(round(float(e), int(p["dp"]))))
    return e


def _k(v):
    return log(v["x1"] / v["x0"]) / v["t1"]


def key(v, p):
    k = _k(v)
    if p["ask"] == "amount":
        return _finish(v["x0"] * exp(k * v["T"]), p)
    return _finish(log(v["r"] / v["x0"]) / k, p)


def m1(v, p):
    """Linear: equal times add equal amounts, (x1 - x0) every t1."""
    x0, x1, t1 = v["x0"], v["x1"], v["t1"]
    if p["ask"] == "amount":
        x = x0 + (x1 - x0) * v["T"] / t1
        if x.is_number and x <= 0:
            raise ValueError("linear model runs out before T")
        return _finish(x, p)
    return _finish(t1 * (v["r"] - x0) / (x1 - x0), p)


def m2(v, p):
    """Multiplies the factor by the number of periods n (growth: f*n; decay: divides by n)."""
    x0, f, t1 = v["x0"], v["x1"] / v["x0"], v["t1"]
    grow = p["trend"] == "growth"
    if p["ask"] == "amount":
        n = v["T"] / t1
        return _finish(x0 * f * n if grow else x0 * f / n, p)
    g = v["r"] / x0
    n = g / f if grow else f / g
    return _finish(t1 * n, p)


def m3(v, p):
    """Measures time from the known reading at t1, not from t = 0."""
    if p["ask"] == "amount":
        return _finish(v["x0"] * (v["x1"] / v["x0"]) ** ((v["T"] - v["t1"]) / v["t1"]), p)
    k = _k(v)
    return _finish(log(v["r"] / v["x0"]) / k - v["t1"], p)


def m4(v, p):
    """Inverts the exponent: f^(t1/T) for f^(T/t1); for a time, log f / log g for log g / log f."""
    x0, f, t1 = v["x0"], v["x1"] / v["x0"], v["t1"]
    if p["ask"] == "amount":
        return _finish(x0 * f ** (t1 / v["T"]), p)
    return _finish(t1 * log(f) / log(v["r"] / x0), p)


def m5(v, p):
    """Raises the reading x1 itself to the power, not the ratio x1/x0."""
    if p["ask"] != "amount":
        raise ValueError("amount questions only")
    return _finish(v["x1"] ** (v["T"] / v["t1"]), p)


MODELS = {"key": key, "C08-M1": m1, "C08-M2": m2, "C08-M3": m3, "C08-M4": m4, "C08-M5": m5}
