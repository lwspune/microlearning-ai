"""C06 Coefficient of variation: answer models (the key, and one per misconception).

C.V. = sigma / mean * 100 (a percentage). params["ask"] picks the question:
  cv:       find the C.V. Inputs m (mean) and s (S.D.) or v (variance); or params xs (values)
            with optional fs (frequencies) for data given in full.
  sd:       find the S.D. from inputs m (mean) and cv (C.V., the number of per cent).
  mean:     find the mean from inputs s (S.D.) and cv.
  consistent / variable: params names (the groups, e.g. ["varad", "viraj"]); inputs m1, m2, ...
            and s1, s2, ... (S.D.) or v1, v2, ... (variances). The answer is the named group,
            Symbol(name): the most consistent (smallest C.V.) or the most variable (largest C.V.).
"""
from sympy import Symbol, sqrt, sympify

_COMPARE = ("consistent", "variable")


def _stats(v, p):
    """(mean, variance) of the data the item gives."""
    if "xs" in p:
        xs = [sympify(x) for x in p["xs"]]
        fs = [sympify(f) for f in p.get("fs", ["1"] * len(xs))]
        n = sum(fs)
        mean = sum(f * x for f, x in zip(fs, xs)) / n
        return mean, sum(f * (x - mean) ** 2 for f, x in zip(fs, xs)) / n
    if "s" in v:
        return v["m"], v["s"] ** 2
    return v["m"], v["v"]


def _groups(v, p):
    """[(name, mean, variance)] for a comparison."""
    out = []
    for i, name in enumerate(p["names"], 1):
        var = v[f"s{i}"] ** 2 if f"s{i}" in v else v[f"v{i}"]
        out.append((name, v[f"m{i}"], var))
    return out


def _pick(groups, score, best):
    """The one group with the best score (best = min or max); ValueError on a tie."""
    scores = [score(m, var) for _, m, var in groups]
    target = best(scores)
    hits = [g[0] for g, sc in zip(groups, scores) if sc == target]
    if len(hits) != 1:
        raise ValueError("tie")
    return Symbol(hits[0])


def _cv(m, var):
    return sqrt(var) / m * 100


def _compare(v, p, score, *, smallest_for_consistent):
    best = min if (p["ask"] == "consistent") == smallest_for_consistent else max
    return _pick(_groups(v, p), score, best)


def key(v, p):
    """From the definition: C.V. = sigma / mean * 100, sigma the square root of the variance;
    smaller C.V., more consistent."""
    ask = p["ask"]
    if ask == "cv":
        m, var = _stats(v, p)
        return _cv(m, var)
    if ask == "sd":
        return v["cv"] * v["m"] / 100
    if ask == "mean":
        return 100 * v["s"] / v["cv"]
    return _compare(v, p, _cv, smallest_for_consistent=True)


def m1(v, p):
    """Turns the ratio upside down: C.V. = mean / sigma * 100."""
    ask = p["ask"]
    if ask == "cv":
        m, var = _stats(v, p)
        return m / sqrt(var) * 100
    if ask == "sd":  # cv = 100 m / sigma
        return 100 * v["m"] / v["cv"]
    if ask == "mean":  # cv = 100 m / s
        return v["cv"] * v["s"] / 100
    return _compare(v, p, lambda m, var: m / sqrt(var), smallest_for_consistent=True)


def m2(v, p):
    """Puts the variance on top instead of sigma: C.V. = sigma^2 / mean * 100."""
    ask = p["ask"]
    if ask == "cv":
        m, var = _stats(v, p)
        return var / m * 100
    if ask == "sd":  # sigma^2 = cv m / 100
        return sqrt(v["cv"] * v["m"] / 100)
    if ask == "mean":
        return 100 * v["s"] ** 2 / v["cv"]
    return _compare(v, p, lambda m, var: var / m, smallest_for_consistent=True)


def m3(v, p):
    """Leaves out the factor 100: takes sigma / mean itself as the percentage."""
    ask = p["ask"]
    if ask == "cv":
        m, var = _stats(v, p)
        return sqrt(var) / m
    if ask == "sd":
        return v["cv"] * v["m"]
    if ask == "mean":
        return v["s"] / v["cv"]
    raise ValueError("the factor 100 doesn't change a comparison")


def m4(v, p):
    """Reads the C.V. backwards: the larger C.V. is the more consistent."""
    if p["ask"] not in _COMPARE:
        raise ValueError("only for a comparison")
    return _compare(v, p, _cv, smallest_for_consistent=False)


def m5(v, p):
    """Compares the standard deviations alone, ignoring the means."""
    if p["ask"] not in _COMPARE:
        raise ValueError("only for a comparison")
    return _compare(v, p, lambda m, var: var, smallest_for_consistent=True)


def m6(v, p):
    """Takes the group with the highest mean (the best average) as the most consistent."""
    if p["ask"] != "consistent":
        raise ValueError("only for 'most consistent'")
    return _pick(_groups(v, p), lambda m, var: m, max)


MODELS = {"key": key, "C06-M1": m1, "C06-M2": m2, "C06-M3": m3, "C06-M4": m4, "C06-M5": m5, "C06-M6": m6}
