"""C08 Exponential limits: answer models (the key, and one per misconception).

The item's function is params["f"], a string in x (sympy syntax); the point is inputs["a"].
The key is the limit of f straight from the definition (sympy's one-sided limits).

The misconception models work on the item's shape, params["kind"]:
  "sum":     a numerator over x (or over x - a): params["num"] lists its terms
  "ratio":   a numerator over a denominator, both sums of terms: params["num"], params["den"]
  "product": a product of factors (b^h - 1) over h^2: params["fac"] lists the bases b
A term "c,b,k" stands for c * b^(k x); a constant term has b = 1 (and k = 0).
After grouping, a sum of terms tends to sum(c * k * log b) over x, by lim (b^x - 1)/x = log b.
"""
from sympy import E, Mul, S, Symbol, limit, log, sign, sympify
from sympy.parsing.sympy_parser import parse_expr

x = Symbol("x", real=True)


def _terms(ts):
    out = []
    for t in ts:
        c, b, k = (sympify(s, locals={"E": E}) for s in t.split(","))
        if b != 1:
            out.append((c, b, k))
    return out


def key(v, p):
    f = parse_expr(p["f"], local_dict={"x": x})
    a = v["a"]
    left, right = limit(f, x, a, "-"), limit(f, x, a, "+")
    if left != right or not left.is_finite:
        raise ValueError("no limit")
    return left


def _first_order(ts, L):
    """The grouped sum's limit over x, with each (b^(kx) - 1)/x given by L(c, b, k)."""
    return sum((L(c, b, k) for c, b, k in _terms(ts)), S.Zero)


def _right(c, b, k):
    return c * k * log(b)


def _shape(p, *kinds):
    if p.get("kind") not in kinds:
        raise ValueError(f"needs kind {' or '.join(kinds)}")


def m1(v, p):
    """M1: log p +- log q taken as log(p +- q): the logs of a sum or difference combined term by term."""
    _shape(p, "sum", "ratio")

    def comb(ts):
        ts = _terms(ts)
        if len(ts) == 1:  # nothing to combine
            c, b, k = ts[0]
            return c * k * log(b)
        inside = sum((sign(c) * b ** (abs(c) * k) for c, b, k in ts), S.Zero)
        if not inside.is_positive:
            raise ValueError("log of a non-positive number")
        return log(inside)

    num = comb(p["num"])
    return num if p["kind"] == "sum" else num / comb(p["den"])


def m2(v, p):
    """M2: every (b^x - 1)/x taken as 1, as if every base were e."""
    if p.get("kind") == "product":
        return S.One
    L = lambda c, b, k: c * k
    num = _first_order(p["num"], L)
    return num if p["kind"] == "sum" else num / _first_order(p["den"], L)


def m3(v, p):
    """M3: the number multiplying the standard limit dropped: (b^(kx) - 1)/x taken as log b, c(b^x - 1) as (b^x - 1)."""
    _shape(p, "sum", "ratio")
    L = lambda c, b, k: sign(c) * log(b)
    num = _first_order(p["num"], L)
    return num if p["kind"] == "sum" else num / _first_order(p["den"], L)


def m4(v, p):
    """M4: log P - log Q mixed up with (log P)/(log Q), in either direction."""
    _shape(p, "sum", "ratio")
    if p["kind"] == "sum":
        ts = _terms(p["num"])
        P = Mul(*[b ** (c * k) for c, b, k in ts if c > 0])
        Q = Mul(*[b ** (-c * k) for c, b, k in ts if c < 0])
        if P == 1 or Q == 1:
            raise ValueError("needs a difference of logs")
        return log(P) / log(Q)
    return _first_order(p["num"], _right) - _first_order(p["den"], _right)


def m5(v, p):
    """M5: log p * log q taken as log(pq), so (log b)^2 becomes log(b^2)."""
    _shape(p, "product")
    return log(Mul(*[sympify(b) for b in p["fac"]]))


def m6(v, p):
    """M6: the 0/0 found by substituting read as 0."""
    if key(v, p) == 0:
        raise ValueError("the limit really is 0")
    return S.Zero


MODELS = {"key": key, "C08-M1": m1, "C08-M2": m2, "C08-M3": m3, "C08-M4": m4, "C08-M5": m5, "C08-M6": m6}
