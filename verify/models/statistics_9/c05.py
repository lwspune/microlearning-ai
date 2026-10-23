"""C05 Mean: answer models (the key, and one per misconception).

p["kind"] picks the question type:
  raw     - the mean of the observations obs
  table   - the mean of the frequency table: values xs, frequencies fs
  missing - the table xs, fs has an unknown frequency p at position j (fs[j] is a placeholder 0);
            its mean is m: the value of p
"""
from sympy import Integer, Rational, Symbol, solve

P = Symbol("p")


def _kind(p, *kinds):
    if p.get("kind") not in kinds:
        raise ValueError(f"not a {'/'.join(kinds)} item")
    return p["kind"]


def _fs(v):
    """The frequencies, with p in the unknown slot of a missing item."""
    fs = list(v["fs"])
    if "j" in v:
        fs[int(v["j"])] = P
    return fs


def _one(eq):
    sol = solve(eq, P)
    if len(sol) != 1:
        raise ValueError("no single value of p")
    return sol[0]


def _median(obs):
    s = sorted(obs)
    n = len(s)
    return s[n // 2] if n % 2 else (s[n // 2 - 1] + s[n // 2]) / Integer(2)


def key(v, p):
    k = p["kind"]
    if k == "raw":
        obs = list(v["obs"])
        return Integer(sum(obs)) / len(obs)
    if k == "table":
        # every observation written out once per its frequency, then sum / count
        obs = [x for x, f in zip(v["xs"], v["fs"]) for _ in range(int(f))]
        return Integer(sum(obs)) / len(obs)
    if k == "missing":
        fs = _fs(v)
        return _one(sum(f * x for x, f in zip(v["xs"], fs)) - v["m"] * sum(fs))
    raise ValueError(k)


def m1(v, p):
    """Divides the full sum by the number of different values (rows of a table), not by N."""
    k = _kind(p, "raw", "table", "missing")
    if k == "raw":
        obs = list(v["obs"])
        return Integer(sum(obs)) / len(set(obs))
    xs, fs = list(v["xs"]), _fs(v)
    total = sum(f * x for x, f in zip(xs, fs))
    if k == "table":
        return Rational(total, len(xs))
    return _one(total - v["m"] * len(xs))


def m2(v, p):
    """Ignores how often a value occurs: averages the different values only."""
    k = _kind(p, "raw", "table")
    vals = sorted(set(v["obs"])) if k == "raw" else list(v["xs"])
    return Integer(sum(vals)) / len(vals)


def m3(v, p):
    """Averages the frequencies instead of the observations: sum of f_i / number of rows."""
    k = _kind(p, "table", "missing")
    fs = _fs(v)
    if k == "table":
        return Integer(sum(fs)) / len(fs)
    return _one(sum(fs) - v["m"] * len(fs))


def m4(v, p):
    """Removing the bracket in mean x (N + p), multiplies only N by the mean: m N + p."""
    _kind(p, "missing")
    fs = _fs(v)
    known = sum(f for f in fs if f != P)
    return _one(sum(f * x for x, f in zip(v["xs"], fs)) - (v["m"] * known + P))


def m5(v, p):
    """Leaves the unknown frequency p out of N: divides by the sum of the known frequencies only."""
    _kind(p, "missing")
    fs = _fs(v)
    known = sum(f for f in fs if f != P)
    return _one(sum(f * x for x, f in zip(v["xs"], fs)) - v["m"] * known)


def m6(v, p):
    """Takes the middle observation (after arranging in order) as the mean."""
    _kind(p, "raw")
    return _median(list(v["obs"]))


MODELS = {"key": key, "C05-M1": m1, "C05-M2": m2, "C05-M3": m3, "C05-M4": m4, "C05-M5": m5, "C05-M6": m6}
