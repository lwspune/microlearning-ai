"""C01 Range and its coefficient: answer models (the key, and one per misconception).

Inputs (sympy), one of: x = a tuple of observations (raw data, or the values of an ungrouped
frequency table); c = a tuple of classes (lower, upper). Optional f = the frequencies.
params["ask"]: range (L - S, the default) | coef (the coefficient of range, (L - S)/(L + S)).
"""
from sympy import Rational, simplify


def _ask(p):
    return p.get("ask", "range")


def _answer(L, S, p):
    """Range or coefficient of range from the chosen L and S."""
    if _ask(p) == "coef":
        if L + S == 0:
            raise ValueError("L + S = 0: no coefficient of range")
        return simplify((L - S) / (L + S))
    return simplify(L - S)


def _ends(v):
    """L and S from the definition: the largest and smallest observation; for classes, the
    upper limit of the top class and the lower limit of the bottom class."""
    if "c" in v:
        return max(hi for _, hi in v["c"]), min(lo for lo, _ in v["c"])
    return max(v["x"]), min(v["x"])


def key(v, p):
    L, S = _ends(v)
    return _answer(L, S, p)


def m1(v, p):
    """Uses the frequencies as the data: L - S from the largest and smallest frequency."""
    if "f" not in v:
        raise ValueError("no frequencies")
    return _answer(max(v["f"]), min(v["f"]), p)


def m2(v, p):
    """For classes, uses the class marks of the top and bottom classes instead of the limits."""
    if "c" not in v:
        raise ValueError("no classes")
    marks = [Rational(lo + hi, 2) for lo, hi in v["c"]]
    return _answer(max(marks), min(marks), p)


def m3(v, p):
    """Takes the last and first observations as listed, without finding the largest and smallest."""
    if "x" not in v:
        raise ValueError("no list of observations")
    return _answer(v["x"][-1], v["x"][0], p)


def m4(v, p):
    """Judges size by the digits, ignoring the sign: L has the largest |x|, S the smallest."""
    if "x" not in v:
        raise ValueError("no list of observations")
    xs = list(v["x"])
    L, S = max(xs, key=abs), min(xs, key=abs)
    if sum(1 for x in xs if abs(x) == abs(L)) > 1 or sum(1 for x in xs if abs(x) == abs(S)) > 1:
        raise ValueError("tie in size")
    return _answer(L, S, p)


def m5(v, p):
    """Mixes up L - S and L + S: range = L + S, coefficient = (L + S)/(L - S)."""
    L, S = _ends(v)
    if _ask(p) == "coef":
        return simplify((L + S) / (L - S))
    return simplify(L + S)


def m6(v, p):
    """Gives the range L - S as the coefficient of range (doesn't divide by L + S)."""
    if _ask(p) != "coef":
        raise ValueError("only for the coefficient")
    L, S = _ends(v)
    return simplify(L - S)


MODELS = {"key": key, "C01-M1": m1, "C01-M2": m2, "C01-M3": m3, "C01-M4": m4, "C01-M5": m5, "C01-M6": m6}
