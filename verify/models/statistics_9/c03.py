"""C03 Frequency distribution tables: answer models (the key, and one per misconception).

p["kind"] picks the question type:
  count   - how many of the observations obs fall in the exclusive class a-b
  missing - tally rows ((groups of five, single marks), ...) and the total N: the frequency of the one
            class whose tally is not given
  total   - tally rows ((groups of five, single marks), ...): the total frequency N
  n_obs   - observations obs tallied into k exclusive classes lo-(lo+h), (lo+h)-(lo+2h), ...: the sum
            of the frequencies
"""
from sympy import Integer


def _kind(p, *kinds):
    if p.get("kind") not in kinds:
        raise ValueError(f"not a {'/'.join(kinds)} item")
    return p["kind"]


def _count(v, inside):
    return Integer(sum(1 for x in v["obs"] if inside(x)))


def _tally(rows, group):
    """The frequencies of tally rows, reading each crossed group as `group` marks."""
    return sum(group * g + s for g, s in rows)


def _limits(v):
    return [v["lo"] + i * v["h"] for i in range(int(v["k"]) + 1)]


def key(v, p):
    k = p["kind"]
    if k == "count":
        return _count(v, lambda x: v["a"] <= x < v["b"])
    if k == "missing":
        return v["N"] - _tally(v["rows"], 5)
    if k == "total":
        return Integer(_tally(v["rows"], 5))
    if k == "n_obs":
        lims = _limits(v)
        return _count(v, lambda x: lims[0] <= x < lims[-1])
    raise ValueError(k)


def m1(v, p):
    """Tallies an observation equal to an upper limit in the class it ends: a < x <= b."""
    _kind(p, "count")
    return _count(v, lambda x: v["a"] < x <= v["b"])


def m2(v, p):
    """Tallies a value on a shared class limit in both classes."""
    k = _kind(p, "count", "n_obs")
    if k == "count":
        if not any(x in (v["a"], v["b"]) for x in v["obs"]):
            raise ValueError("no observation on a limit")
        return _count(v, lambda x: v["a"] <= x <= v["b"])
    lims = _limits(v)
    return Integer(sum(1 for x in v["obs"] for i in range(len(lims) - 1) if lims[i] <= x <= lims[i + 1]))


def m3(v, p):
    """Leaves a value on a class limit out of every class."""
    k = _kind(p, "count", "n_obs")
    if k == "count":
        return _count(v, lambda x: v["a"] < x < v["b"])
    lims = _limits(v)
    return _count(v, lambda x: lims[0] < x < lims[-1] and x not in lims)


def m4(v, p):
    """Reads a crossed group of five tally marks as 4, counting only the upright strokes."""
    k = _kind(p, "missing", "total")
    if k == "missing":
        return v["N"] - _tally(v["rows"], 4)
    return Integer(_tally(v["rows"], 4))


def m5(v, p):
    """Reads a crossed group of five tally marks as 1 mark."""
    k = _kind(p, "missing", "total")
    if k == "missing":
        return v["N"] - _tally(v["rows"], 1)
    return Integer(_tally(v["rows"], 1))


def m6(v, p):
    """Gives the sum of the known frequencies instead of what is left of N."""
    _kind(p, "missing")
    return Integer(_tally(v["rows"], 5))


def m7(v, p):
    """Takes the total frequency N as the number of rows (classes) in the table."""
    k = _kind(p, "total", "n_obs")
    if k == "total":
        return Integer(len(v["rows"]))
    return Integer(v["k"])


MODELS = {"key": key, "C03-M1": m1, "C03-M2": m2, "C03-M3": m3, "C03-M4": m4, "C03-M5": m5,
          "C03-M6": m6, "C03-M7": m7}
