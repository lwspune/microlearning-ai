"""C06 Combining errors: answer models (the key, and one per misconception).

Sums and differences: absolute errors add. Products and quotients: relative (percentage) errors add, each times the
size of its power. params["ask"]:
  "sum":    the error in A + B (inputs dA, dB, A, B);
  "pct":    the percentage error of a quantity whose factors have percentage errors e1, e2, ... and powers p1, p2, ...
            (inputs es, ps, comma-separated; a negative power is a factor in the denominator);
  "pct_from": the same, but from values and errors: x1, dx1, x2, dx2, ... (inputs xs, dxs, ps).
"""
from sympy import Rational, sqrt

from physics import sig


def _list(s):
    items = s if hasattr(s, "__iter__") and not isinstance(s, str) else [s]
    return [Rational(str(x)) for x in items]


def _solve(v, p, *, subtract=False, average=False, relative=False, no_powers=False, signed=False, multiply=False,
           num_only=False, half=False, one_only=False, halve=False, square_sum=False):
    ask, n = p["ask"], p.get("sf", 3)
    if ask == "sum":
        dA, dB = v["dA"], v["dB"]
        if subtract:
            return sig(abs(dA - dB), n)
        if average:
            return sig((dA + dB) / 2, n)
        if relative:
            return sig((dA / v["A"] + dB / v["B"]) * (v["A"] + v["B"]), n)
        return sig(dA + dB, n)
    if ask == "pct_from":
        es = [d / x * 100 for x, d in zip(_list(v["xs"]), _list(v["dxs"]))]
    else:
        es = _list(v["es"])
    ps = _list(v["ps"])
    if one_only:
        return sig(max(es), n)
    if halve:
        return sig(max(es) / 2, n)
    if square_sum:
        return sig(sum(abs(q) * e for e, q in zip(es, ps)) ** 2, n)
    if multiply:
        out = 1
        for e in es:
            out *= e
        return sig(out, n)
    terms = []
    for e, q in zip(es, ps):
        w = 1 if no_powers else abs(q)
        if half:
            w = w / 2 if abs(q) > 1 else w
        if num_only and q < 0:
            continue
        terms.append(-w * e if (signed and q < 0) else w * e)
    total = sum(terms)
    return sig(abs(total), n)


def key(v, p):
    return _solve(v, p)


def _m(mid, asks=(), **kw):
    def model(v, p):
        if p["ask"] not in asks:
            raise ValueError("does not apply to this item")
        return _solve(v, p, **kw)
    return model


MODELS = {
    "key": key,
    "C06-M1": _m("C06-M1", ("sum",), subtract=True),  # subtracts the errors
    "C06-M2": _m("C06-M2", ("sum",), average=True),  # averages the errors
    "C06-M3": _m("C06-M3", ("sum",), relative=True),  # adds relative errors for a sum
    "C06-M4": _m("C06-M4", ("pct", "pct_from"), no_powers=True),  # ignores the powers
    "C06-M5": _m("C06-M5", ("pct", "pct_from"), signed=True),  # subtracts the errors of the denominator
    "C06-M6": _m("C06-M6", ("pct", "pct_from"), multiply=True),  # multiplies the percentage errors
    "C06-M7": _m("C06-M7", ("pct", "pct_from"), num_only=True),  # leaves out the denominator's errors
    "C06-M8": _m("C06-M8", ("pct", "pct_from"), one_only=True),  # takes one factor's error only
    "C06-M9": _m("C06-M9", ("pct",), halve=True),  # thinks a product halves the error
    "C06-M10": _m("C06-M10", ("pct",), square_sum=True),  # squares the total percentage error
}
