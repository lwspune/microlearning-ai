"""C03 Comparing ratios: answer models (the key, and one per misconception).

params["r"] lists the ratios as "num:den" pairs, comma-separated, each term a sympy
expression ("4:9", "sqrt(13):sqrt(8)", "9.2:5.1"; decimals are read exactly).
params["ask"] says what the item asks for:
  "greatest" / "smallest": the greatest (smallest) ratio, as its value num/den;
  "ascending": the ratios in ascending order, a Tuple of their values.
Each model is a score (num, den) -> number: the ratio it scores higher is the one
that student thinks is bigger.
"""
from sympy import Integer, Tuple, sqrt, sympify


def _ratios(p):
    out = []
    for s in p["r"].split(","):
        a, b = s.split(":")
        out.append((sympify(a, rational=True), sympify(b, rational=True)))
    return out


def _answer(p, score):
    """Applies a model's score to the item's ratios and answers the item's question."""
    rs, ask = _ratios(p), p["ask"]
    scores = [score(a, b) for a, b in rs]
    if len(set(scores)) < len(scores):
        raise ValueError("a tie: the rule doesn't order these ratios")
    if ask == "ascending":
        return Tuple(*[a / b for _, (a, b) in sorted(zip(scores, rs), key=lambda t: t[0])])
    best = max(scores) if ask == "greatest" else min(scores)
    a, b = rs[scores.index(best)]
    return a / b


def key(v, p):
    """From the definition: each ratio's value num/den, compared directly."""
    return _answer(p, lambda a, b: a / b)


def m1(v, p):
    """Cross-multiplies but gives each product to the wrong ratio (b*c taken as a/b's):
    every comparison comes out reversed, as if comparing den/num."""
    return _answer(p, lambda a, b: b / a)


def m2(v, p):
    """Compares only the numerators: the bigger first term is the bigger ratio."""
    return _answer(p, lambda a, b: a)


def m3(v, p):
    """Compares only the denominators: the smaller second term is the bigger ratio (as 1/3 > 1/5)."""
    return _answer(p, lambda a, b: -b)


def m4(v, p):
    """Gap thinking: the ratio whose terms are closest (smallest den - num) is the biggest."""
    rs = _ratios(p)
    if not all(a.is_rational and b.is_rational and a < b for a, b in rs):
        raise ValueError("gap thinking needs ratios of plain numbers, each less than 1")
    return _answer(p, lambda a, b: a - b)


def _as_root(t):
    """A whole number n read as sqrt(n); anything else unchanged."""
    return sqrt(t) if isinstance(t, Integer) else t


def m5(v, p):
    """Mixing whole numbers and roots, writes a whole number n as sqrt(n) (so 9 is compared as sqrt(9))."""
    rs = _ratios(p)
    terms = [t for r in rs for t in r]
    if not any(isinstance(t, Integer) for t in terms) or all(isinstance(t, Integer) for t in terms):
        raise ValueError("needs whole numbers mixed with square roots")
    return _answer(p, lambda a, b: _as_root(a) / _as_root(b))


MODELS = {"key": key, "C03-M1": m1, "C03-M2": m2, "C03-M3": m3, "C03-M4": m4, "C03-M5": m5}
