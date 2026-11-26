"""C05 Errors in measurement: answer models (the key, and one per misconception).

Mean a = sum/n; absolute errors |a_i - a|; mean absolute error = their mean; relative = mean error / a;
percentage = relative x 100. params["ask"]:
  "mae":   the mean absolute error of readings xs (comma-separated);
  "pct":   the percentage error of readings xs;
  "rel":   the relative error of readings xs;
  "pct2":  the percentage error from a mean `a` and mean absolute error `da`;
  "def":   the definition of relative error (named).
"""
from sympy import Rational, Symbol

from physics import sig

NAMED = {"def": {"key": "da_over_a", "C05-M9": "a_over_da", "C05-M10": "da_times_100", "C05-M11": "a_minus_mean"}}


def _xs(v):
    items = v["xs"] if hasattr(v["xs"], "__iter__") and not isinstance(v["xs"], str) else [v["xs"]]
    return [Rational(str(x)) for x in items]


def _stats(v):
    xs = _xs(v)
    m = sum(xs) / len(xs)
    devs = [abs(x - m) for x in xs]
    return xs, m, devs


def _solve(v, p, *, signed=False, max_dev=False, n_minus_1=False, no_100=False, inverted=False, use_range=False,
           give_mae=False, pct_as_rel=False):
    ask, n = p["ask"], p.get("sf", 3)
    if ask == "pct2":
        a, da = v["a"], v["da"]
        if no_100:
            return sig(da / a, n)
        if inverted:
            return sig(a / da, n)
        if use_range:  # here: forgets to divide by the mean
            return sig(da * 100, n)
        return sig(da / a * 100, n)
    xs, m, devs = _stats(v)
    if ask == "mae":
        if signed:
            return 0
        if max_dev:
            return sig(max(devs), n)
        return sig(sum(devs) / (len(xs) - 1 if n_minus_1 else len(xs)), n)
    mae = sum(devs) / len(xs)
    if ask == "pct":
        if no_100:
            return sig(mae / m, n)
        if inverted:
            return sig(m / mae, n)
        if use_range:
            return sig((max(xs) - min(xs)) / m * 100, n)
        return sig(mae / m * 100, n)
    if ask == "rel":
        if give_mae:
            return sig(mae, n)
        if inverted:
            return sig(m / mae, n)
        if pct_as_rel:
            return sig(mae / m * 100, n)
        return sig(mae / m, n)
    raise ValueError(f"unknown ask {ask}")


def key(v, p):
    if p["ask"] in NAMED:
        return Symbol(NAMED[p["ask"]]["key"])
    return _solve(v, p)


def _m(mid, asks=(), **kw):
    def model(v, p):
        if p["ask"] in NAMED:
            if mid not in NAMED[p["ask"]]:
                raise ValueError("does not apply to this item")
            return Symbol(NAMED[p["ask"]][mid])
        if p["ask"] not in asks:
            raise ValueError("does not apply to this item")
        return _solve(v, p, **kw)
    return model


MODELS = {
    "key": key,
    "C05-M1": _m("C05-M1", ("mae",), signed=True),  # keeps the signs of the deviations
    "C05-M2": _m("C05-M2", ("mae",), max_dev=True),  # gives the largest deviation
    "C05-M3": _m("C05-M3", ("mae",), n_minus_1=True),  # divides by n - 1
    "C05-M4": _m("C05-M4", ("pct", "pct2"), no_100=True),  # gives the relative error, not the percentage
    "C05-M5": _m("C05-M5", ("pct", "pct2", "rel"), inverted=True),  # divides the mean by the error
    "C05-M6": _m("C05-M6", ("pct",), use_range=True),  # uses the spread of the readings
    "C05-M7": _m("C05-M7", ("rel",), give_mae=True),  # gives the mean absolute error
    "C05-M8": _m("C05-M8", ("rel",), pct_as_rel=True),  # gives the percentage as the relative error
    "C05-M9": _m("C05-M9"),  # turns the ratio upside down
    "C05-M10": _m("C05-M10"),  # forgets to divide by the mean
    "C05-M11": _m("C05-M11"),  # gives a single absolute error
    "C05-M12": _m("C05-M12", ("pct2",), use_range=True),  # multiplies the error by 100 without dividing
}
