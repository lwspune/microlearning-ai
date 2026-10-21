"""C08 Gain or loss on shares: answer models (the key, and one per misconception).

Inputs (sympy):
  n  = number of shares bought (or S = total amount paid, brokerage included, from which n follows)
  F  = face value, Mb = market value when bought, d = dividend rate (% of FV; 0 for none)
  b  = brokerage rate (% of MV; 0 when brokerage is a flat amount), g = GST rate on brokerage (%)
  k  = flat brokerage per trade in rupees (0 when brokerage is a percentage)
  n1, s1 = shares sold in the first lot and the MV then; s2 = MV for the remaining n - n1 shares
         (leave n1 and s2 out when all the shares are sold at s1)
params["ask"]:
  amount -> the gain (positive) or loss (negative) in rupees
  pct    -> the gain or loss as a percentage of the total amount paid, to two decimal places
A mistaken money answer that is not a whole number of paise is rounded to the paisa.
"""
from sympy import Rational, floor


def _round(x, places):
    q = Rational(10) ** places
    x = Rational(x)
    sign = -1 if x < 0 else 1
    return sign * Rational(floor(abs(x) * q + Rational(1, 2)), q)


def _paise(x):
    return _round(x, 2)


def _get(v, name, default=0):
    return Rational(v[name]) if name in v else Rational(default)


def _deal(v, *, sell_charge_sign=-1, charges=True, div_on_mv=False):
    """(total paid, dividend, total from sales, n, Mb) under the given way of working."""
    F, Mb, d = Rational(v["F"]), Rational(v["Mb"]), _get(v, "d")
    b, g, k = _get(v, "b"), _get(v, "g"), _get(v, "k")
    rate = b / 100 * (1 + g / 100) if charges else Rational(0)
    flat = k if charges else Rational(0)
    if "n" in v:
        n = Rational(v["n"])
    else:
        n = (Rational(v["S"]) - k) / (Mb * (1 + b / 100 * (1 + g / 100)))
    paid = n * Mb * (1 + rate) + flat
    dividend = n * d / 100 * (Mb if div_on_mv else F)
    lots = [(n, Rational(v["s1"]))]
    if "n1" in v:
        n1 = Rational(v["n1"])
        lots = [(n1, Rational(v["s1"])), (n - n1, Rational(v["s2"]))]
    sales = sum(c * s * (1 + sell_charge_sign * rate) + sell_charge_sign * flat for c, s in lots)
    return paid, dividend, sales


def _answer(p, paid, dividend, sales, base=None):
    gain = dividend + sales - paid
    if p["ask"] == "amount":
        return _paise(gain)
    if p["ask"] == "pct":
        return _round(gain * 100 / (paid if base is None else base), 2)
    raise ValueError(f"unknown ask {p['ask']}")


def key(v, p):
    """Gain = (sale money after charges + dividend) - (purchase money with charges)."""
    return _answer(p, *_deal(v))


def m1(v, p):
    """Leaves out the dividend: compares only what the sale brings in with what was paid."""
    if _get(v, "d") == 0:
        raise ValueError("no dividend in this question")
    paid, _, sales = _deal(v)
    return _answer(p, paid, 0, sales)


def m2(v, p):
    """Treats the sale like a purchase: adds brokerage (and its GST) to the selling MV."""
    return _answer(p, *_deal(v, sell_charge_sign=1))


def m3(v, p):
    """Leaves out brokerage and GST altogether: compares only the market values (plus dividend)."""
    return _answer(p, *_deal(v, charges=False))


def m4(v, p):
    """Takes the dividend as a percentage of the market value instead of the face value."""
    if _get(v, "d") == 0:
        raise ValueError("no dividend in this question")
    return _answer(p, *_deal(v, div_on_mv=True))


def m5(v, p):
    """Finds the percentage on the money received (sale + dividend) instead of the money paid."""
    if p["ask"] != "pct":
        raise ValueError("only for a percentage")
    paid, dividend, sales = _deal(v)
    return _answer(p, paid, dividend, sales, base=dividend + sales)


def m6(v, p):
    """Subtracts the wrong way round, so a gain is called a loss and a loss a gain."""
    return -key(v, p)


MODELS = {"key": key, "C08-M1": m1, "C08-M2": m2, "C08-M3": m3, "C08-M4": m4, "C08-M5": m5, "C08-M6": m6}
