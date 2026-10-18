"""C05 Change of origin and scale: answer models (the key, and one per misconception).

Inputs p, q describe the change; params:
  mode  "data": xs (class marks or values) with frequencies fs, and the step deviation
        u = (x - q)/p is used, so x = p*u + q. The source is u, the target is x.
        "map": xs (values, frequencies fs) are replaced by y = p*x + q. The source is x,
        the target is y.
  want  "sd" or "var": what the question asks for, of the target.
  xs, fs  lists of numbers as strings (fs optional: every frequency 1).

The key works out the target's spread straight from its own values (the definition);
the misconceptions convert the source's spread with a wrong rule.
"""
from sympy import Abs, sqrt, sympify


def _data(p):
    xs = [sympify(x) for x in p["xs"]]
    fs = [sympify(f) for f in p.get("fs", ["1"] * len(xs))]
    return xs, fs


def _variance(vals, fs):
    """sigma^2 = sum f (x - mean)^2 / N, from the definition."""
    N = sum(fs)
    mean = sum(f * x for f, x in zip(fs, vals)) / N
    return sum(f * (x - mean) ** 2 for f, x in zip(fs, vals)) / N


def _out(var, p):
    return var if p["want"] == "var" else sqrt(var)


def _source_var(v, p):
    xs, fs = _data(p)
    if p["mode"] == "data":
        return _variance([(x - v["q"]) / v["p"] for x in xs], fs)
    return _variance(xs, fs)


def key(v, p):
    xs, fs = _data(p)
    target = xs if p["mode"] == "data" else [v["p"] * x + v["q"] for x in xs]
    return _out(_variance(target, fs), p)


def m1(v, p):
    """Adds the origin back, as for the mean: sigma_x = |h| sigma_u + a (variance: h^2 var + a)."""
    s = _source_var(v, p)
    if p["want"] == "var":
        return v["p"] ** 2 * s + v["q"]
    return Abs(v["p"]) * sqrt(s) + v["q"]


def m2(v, p):
    """Scales the variance by h, not h^2."""
    s = Abs(v["p"]) * _source_var(v, p)
    return _out(s, p)


def m3(v, p):
    """Thinks the change of scale, like the change of origin, leaves the spread unchanged."""
    return _out(_source_var(v, p), p)


def m4(v, p):
    """Divides by h when going back from u to x (sigma_x = sigma_u / h)."""
    return _out(_source_var(v, p) / v["p"] ** 2, p)


def m5(v, p):
    """Multiplies the S.D. by h^2 (variance by h^4)."""
    return _out(v["p"] ** 4 * _source_var(v, p), p)


def m6(v, p):
    """Keeps the sign of h: sigma_y = h sigma_x, negative when h < 0."""
    if p["want"] != "sd" or v["p"] > 0:
        raise ValueError("only differs from the key for an S.D. with a negative multiplier")
    return v["p"] * sqrt(_source_var(v, p))


MODELS = {"key": key, "C05-M1": m1, "C05-M2": m2, "C05-M3": m3, "C05-M4": m4, "C05-M5": m5, "C05-M6": m6}
