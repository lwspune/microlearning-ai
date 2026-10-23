"""C01 Ratios in reduced form: answer models (the key, and one per misconception).

Every answer is a ratio a : b (the value a/b) or a percentage (the number).
p["kind"] picks the question type:
  units   - quantity a in a unit worth fa base units, b in a unit worth fb; wfa, wfb the wrong factors
  mixed   - a1 big + a2 small units against b1 big + b2 small; f small units in one big, wf the wrong f
  to_pct  - the ratio a : b written as a percentage
  to_ratio - the percentage p written as a ratio
"""
from sympy import sympify


def _kind(p, *kinds):
    if p.get("kind") not in kinds:
        raise ValueError(f"not a {'/'.join(kinds)} item")
    return p["kind"]


def key(v, p):
    k = p["kind"]
    if k == "units":
        return v["a"] * v["fa"] / (v["b"] * v["fb"])
    if k == "mixed":
        return (v["a1"] * v["f"] + v["a2"]) / (v["b1"] * v["f"] + v["b2"])
    if k == "to_pct":
        return 100 * v["a"] / v["b"]
    if k == "to_ratio":
        return v["p"] / 100
    raise ValueError(k)


def m1(v, p):
    """Compares the numbers as written, without making the units the same."""
    if _kind(p, "units", "mixed") == "units":
        return sympify(v["a"]) / v["b"]
    return sympify(v["a1"]) / v["b1"]  # keeps only the big units


def m2(v, p):
    """Converts with a wrong factor (1 km = 100 m; 3 years 4 months = 3.4 years)."""
    if _kind(p, "units", "mixed") == "units":
        return v["a"] * v["wfa"] / (v["b"] * v["wfb"])
    return (v["a1"] * v["wf"] + v["a2"]) / (v["b1"] * v["wf"] + v["b2"])


def m3(v, p):
    """Writes the ratio the wrong way round: second to first."""
    k = p["kind"]
    if k == "to_pct":
        return 100 * v["b"] / v["a"]
    if k == "to_ratio":
        return 100 / sympify(v["p"])
    return 1 / key(v, p)


def m4(v, p):
    """Treats a ratio a : b as a part of the total a + b."""
    if _kind(p, "to_pct", "to_ratio") == "to_pct":
        return 100 * v["a"] / (v["a"] + v["b"])
    return v["p"] / (100 - v["p"])


def m5(v, p):
    """Forgets the 100: a : b becomes (a/b)%, and p% becomes p : 1."""
    if _kind(p, "to_pct", "to_ratio") == "to_pct":
        return sympify(v["a"]) / v["b"]
    return sympify(v["p"])


MODELS = {"key": key, "C01-M1": m1, "C01-M2": m2, "C01-M3": m3, "C01-M4": m4, "C01-M5": m5}
