"""C06 Problems on the mean: answer models (the key, and one per misconception).

p["kind"] picks the question type:
  correct - n observations had mean a, but the value r was recorded as w: the corrected mean
  remove  - n observations have mean a; one is removed and the other n - 1 have mean b: the removed value
  add     - n observations have mean a; one is added and the mean rises by d: the added value
  combine - n1 observations with mean m1 and n2 with mean m2: the mean of all n1 + n2
"""


def _kind(p, *kinds):
    if p.get("kind") not in kinds:
        raise ValueError(f"not a {'/'.join(kinds)} item")
    return p["kind"]


def key(v, p):
    k = p["kind"]
    if k == "correct":
        return (v["n"] * v["a"] - v["w"] + v["r"]) / v["n"]
    if k == "remove":
        return v["n"] * v["a"] - (v["n"] - 1) * v["b"]
    if k == "add":
        return (v["n"] + 1) * (v["a"] + v["d"]) - v["n"] * v["a"]
    if k == "combine":
        return (v["n1"] * v["m1"] + v["n2"] * v["m2"]) / (v["n1"] + v["n2"])
    raise ValueError(k)


def m1(v, p):
    """Averages means without weighting: each group (or the single changed value) counts as one."""
    k = _kind(p, "remove", "add", "combine")
    if k == "combine":
        return (v["m1"] + v["m2"]) / 2
    if k == "remove":          # (removed + b) / 2 = a
        return 2 * v["a"] - v["b"]
    return 2 * (v["a"] + v["d"]) - v["a"]   # (a + x) / 2 = new mean


def m2(v, p):
    """Changes the mean as if it were the sum: adds and subtracts values straight onto the mean."""
    k = _kind(p, "correct", "remove", "add")
    if k == "correct":
        return v["a"] - v["w"] + v["r"]
    if k == "remove":
        return v["a"] - v["b"]
    return v["d"]


def m3(v, p):
    """Forgets that the number of observations changes: uses the old count for the new sum too."""
    k = _kind(p, "remove", "add")
    if k == "remove":
        return v["n"] * v["a"] - v["n"] * v["b"]
    return v["n"] * (v["a"] + v["d"]) - v["n"] * v["a"]


def m4(v, p):
    """Corrects the sum the wrong way round: adds the wrong value and subtracts the right one."""
    _kind(p, "correct")
    return (v["n"] * v["a"] + v["w"] - v["r"]) / v["n"]


def m5(v, p):
    """Pairs each group's mean with the other group's size."""
    _kind(p, "combine")
    return (v["n2"] * v["m1"] + v["n1"] * v["m2"]) / (v["n1"] + v["n2"])


def m6(v, p):
    """Stops at the total: gives the (corrected or combined) sum and never divides by the number."""
    k = _kind(p, "correct", "combine")
    if k == "correct":
        return v["n"] * v["a"] - v["w"] + v["r"]
    return v["n1"] * v["m1"] + v["n2"] * v["m2"]


MODELS = {"key": key, "C06-M1": m1, "C06-M2": m2, "C06-M3": m3, "C06-M4": m4, "C06-M5": m5, "C06-M6": m6}
