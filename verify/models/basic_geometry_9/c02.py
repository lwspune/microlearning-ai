"""C02 Betweenness: answer models (the key, and one per misconception).

Two kinds of item, chosen by params["ask"]:
  "between": three distances among three named points; which point is between the other two?
    params {"ask": "between", "pairs": ["PR", "PQ", "QR"]} (in the order the stem gives them),
    inputs {"d1", "d2", "d3"}: the distances of those pairs. Answers are pt_<letter> or not_collinear.
  "part": X-Y-Z is given with the whole d(X, Z) and one part; find the other part.
    inputs {"w": whole, "a": the given part}, params {"surd": "sqrt(7)"} (the like surd in w and a).
"""
from sympy import Symbol, sympify

NOT_COLLINEAR = Symbol("not_collinear")


def _pt(name):
    return Symbol(f"pt_{name}")


def _dists(v, p):
    """{frozenset of two letters: distance}, and the letters in alphabetical order."""
    pairs = p["pairs"]
    d = {frozenset(pr): v[f"d{i + 1}"] for i, pr in enumerate(pairs)}
    letters = sorted(set("".join(pairs)))
    assert len(letters) == 3 and len(d) == 3, "three points, three distances"
    return d, letters


def _others(x, letters):
    return [y for y in letters if y != x]


def _between(d, letters):
    """The point X with d(Y, X) + d(X, Z) = d(Y, Z), straight from the definition; None if no point is."""
    hits = []
    for x in letters:
        y, z = _others(x, letters)
        if d[frozenset(x + y)] + d[frozenset(x + z)] == d[frozenset(y + z)]:
            hits.append(x)
    assert len(hits) <= 1, "distinct points: at most one is between"
    return hits[0] if hits else None


def _opposite(pair, letters):
    """The point not in the pair."""
    (x,) = [c for c in letters if c not in pair]
    return x


def key(v, p):
    if p["ask"] == "between":
        d, letters = _dists(v, p)
        x = _between(d, letters)
        return _pt(x) if x else NOT_COLLINEAR
    if p["ask"] == "part":
        return v["w"] - v["a"]
    raise ValueError(p["ask"])


def m1(v, p):
    """Takes the alphabetical order of the names (A-B-C, P-Q-R) as the order on the line."""
    if p["ask"] != "between":
        raise ValueError("the order is given in the stem")
    _, letters = _dists(v, p)
    return _pt(letters[1])


def m2(v, p):
    """Assumes any three points are collinear: names the point opposite the longest distance unchecked."""
    if p["ask"] != "between":
        raise ValueError("only for which-point items")
    d, letters = _dists(v, p)
    if _between(d, letters):
        raise ValueError("collinear: this gives the key")
    longest = max(d, key=lambda k: d[k])
    return _pt(_opposite(longest, letters))


def m3(v, p):
    """Checks only the first two distances written: if they add to the third, their common point; else not collinear."""
    if p["ask"] != "between":
        raise ValueError("only for which-point items")
    pairs = p["pairs"]
    if v["d1"] + v["d2"] == v["d3"]:
        (x,) = set(pairs[0]) & set(pairs[1])
        return _pt(x)
    return NOT_COLLINEAR


def m4(v, p):
    """Mixes up the whole and a part: treats the longest distance as a part (so the point between is
    the one shared by the two longest distances), or adds the whole and a part to find the other part."""
    if p["ask"] == "between":
        d, letters = _dists(v, p)
        shortest = min(d, key=lambda k: d[k])
        return _pt(_opposite(shortest, letters))
    if p["ask"] == "part":
        return v["w"] + v["a"]
    raise ValueError(p["ask"])


def m5(v, p):
    """Takes 'between' to mean 'midway': each part is half the whole."""
    if p["ask"] != "part":
        raise ValueError("needs the whole")
    return v["w"] / 2


def m6(v, p):
    """Subtracts the numbers in front of the surd and drops the surd: 3*sqrt(7) - sqrt(7) = 2."""
    if p["ask"] != "part":
        raise ValueError("needs surds")
    s = sympify(p["surd"])
    return (v["w"] - v["a"]) / s


MODELS = {"key": key, "C02-M1": m1, "C02-M2": m2, "C02-M3": m3, "C02-M4": m4, "C02-M5": m5, "C02-M6": m6}
