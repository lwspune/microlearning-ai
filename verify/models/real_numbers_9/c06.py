"""C06 Comparing surds: answer models (the key, and one per misconception).

Each number is a surd a*sqrt(b) given in params["nums"] as "a:b" pairs, comma-separated
("7:2,5:3" is 7*sqrt(2) and 5*sqrt(3)); a whole number n is "n:1".
params["ask"] says what the item asks for:
  "greatest" / "smallest": the greatest (smallest) of the numbers;
  "pair": the two numbers under the root that are compared, after writing both numbers
          as single square roots (a Tuple, in the order given);
  "box": the number under the root when the one number is written as a single square root.
Each model is a rule that turns a*sqrt(b) into the number it puts under one square root
(or, for M1 and M2, the number it compares), then compares those.
"""
from sympy import Integer, Tuple, sqrt


def _nums(p):
    return [tuple(int(x) for x in s.split(":")) for s in p["nums"].split(",")]


def _value(a, b):
    return Integer(a) * sqrt(b)


def _answer(p, score):
    """Applies a model's rule (score: (a, b) -> number) to the item's numbers."""
    nums, ask = _nums(p), p["ask"]
    if ask in ("box", "pair"):
        out = [Integer(score(a, b)) for a, b in nums]
        return out[0] if ask == "box" else Tuple(*out)
    scores = [score(a, b) for a, b in nums]
    best = max(scores) if ask == "greatest" else min(scores)
    if scores.count(best) > 1:
        raise ValueError("a tie: the rule picks no single number")
    a, b = nums[scores.index(best)]
    return _value(a, b)


def key(v, p):
    """From the definition: the true values, compared directly (positive numbers, so squares order the same way)."""
    nums, ask = _nums(p), p["ask"]
    if ask in ("box", "pair"):
        out = [_value(a, b) ** 2 for a, b in nums]
        return out[0] if ask == "box" else Tuple(*out)
    vals = [_value(a, b) for a, b in nums]
    best = max(vals) if ask == "greatest" else min(vals)
    return best


def m1(v, p):
    """Compares only the numbers outside the root: the bigger coefficient is the bigger surd."""
    if p["ask"] in ("box", "pair"):
        raise ValueError("compares coefficients; writes no single root")
    return _answer(p, lambda a, b: a)


def m2(v, p):
    """Compares only the numbers under the root: the bigger radicand is the bigger surd."""
    if p["ask"] in ("box", "pair"):
        raise ValueError("compares radicands; writes no single root")
    if any(b == 1 for a, b in _nums(p)):
        raise ValueError("a whole number has no radicand to compare")
    return _answer(p, lambda a, b: b)


def m3(v, p):
    """Moves the number outside into the root without squaring it: a*sqrt(b) = sqrt(a*b) (and n = sqrt(n))."""
    return _answer(p, lambda a, b: a * b)


def m4(v, p):
    """Writes a whole number n as sqrt(n) instead of sqrt(n^2); surds are handled correctly."""
    if all(b != 1 for a, b in _nums(p)):
        raise ValueError("needs a whole number")
    return _answer(p, lambda a, b: a if b == 1 else a * a * b)


def m5(v, p):
    """Doubles the number outside instead of squaring it: a*sqrt(b) = sqrt(2a*b)."""
    return _answer(p, lambda a, b: 2 * a * b)


def m6(v, p):
    """Squares the number under the root instead of the one outside: a*sqrt(b) = sqrt(a*b^2)."""
    if any(b == 1 for a, b in _nums(p)):
        raise ValueError("whole numbers only for surds")
    return _answer(p, lambda a, b: a * b * b)


MODELS = {"key": key, "C06-M1": m1, "C06-M2": m2, "C06-M3": m3, "C06-M4": m4, "C06-M5": m5, "C06-M6": m6}
