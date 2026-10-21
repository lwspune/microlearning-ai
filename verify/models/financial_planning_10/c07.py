"""C07 Brokerage and GST on it: answer models (the key, and one per misconception).

Inputs (sympy): m = MV of one share, b = rate of brokerage (%), g = rate of GST on brokerage (%),
n = number of shares (default 1), f = FV of one share (only where the stem gives it),
S = the whole sum paid, brokerage and GST included (only for the "shares" ask).
params["ask"]:
  buy     -> the amount paid for n shares (value + brokerage + GST)
  sell    -> the amount received for n shares (value - brokerage - GST)
  charges -> brokerage + GST together, for n shares
  shares  -> the number of shares bought for the sum S
A mistaken money answer that is not a whole number of paise is rounded to the paisa, as a student
writes money; a mistaken number of shares is rounded down to a whole share.
"""
from sympy import Rational, floor


def _paise(x):
    """Round a rupee amount to the nearest paisa."""
    return Rational(floor(Rational(x) * 100 + Rational(1, 2)), 100)


def _n(v):
    return v.get("n", Rational(1))


def _answer(v, p, brok_base, gst_rate, gst_on_value=False, sign=1):
    """The asked amount, with brokerage at b% of brok_base (per share), GST at gst_rate% of the
    brokerage (or of the MV when gst_on_value), and the charges added (sign 1) or taken off (-1)."""
    m, b = v["m"], Rational(v["b"])
    brok = b * brok_base / 100
    gst = Rational(gst_rate) * (m if gst_on_value else brok) / 100
    ask = p["ask"]
    if ask == "shares":
        return v["S"] / (m + sign * (brok + gst))
    n = _n(v)
    if ask == "charges":
        return n * (brok + gst)
    if ask == "buy":
        return n * (m + sign * (brok + gst))
    if ask == "sell":
        return n * (m - sign * (brok + gst))
    raise ValueError(f"unknown ask {ask}")


def _out(v, p, x):
    """A mistaken answer as a student writes it."""
    return floor(x) if p["ask"] == "shares" else _paise(x)


def key(v, p):
    """Brokerage = b% of MV; GST = g% of the brokerage; added on buying, taken off on selling."""
    return _answer(v, p, v["m"], v["g"])


def m1(v, p):
    """Takes the brokerage as b% of the FV instead of the MV."""
    if "f" not in v:
        raise ValueError("needs the FV in the stem")
    return _out(v, p, _answer(v, p, v["f"], v["g"]))


def m2(v, p):
    """Charges the GST at g% of the MV (the share's value), not of the brokerage."""
    return _out(v, p, _answer(v, p, v["m"], v["g"], gst_on_value=True))


def m3(v, p):
    """Turns the direction round: takes the charges off when buying, adds them when selling."""
    if p["ask"] == "charges":
        raise ValueError("no direction in the charges alone")
    return _out(v, p, _answer(v, p, v["m"], v["g"], sign=-1))


def m4(v, p):
    """Leaves out the GST on brokerage: only the brokerage is added or taken off."""
    return _out(v, p, _answer(v, p, v["m"], 0))


def m5(v, p):
    """Charges only the CGST (half the GST rate) on the brokerage, forgetting the SGST."""
    return _out(v, p, _answer(v, p, v["m"], Rational(v["g"]) / 2))


def m6(v, p):
    """Divides the whole sum by the MV alone, as if no brokerage or GST were in it."""
    if p["ask"] != "shares":
        raise ValueError("only for the number of shares")
    return floor(v["S"] / v["m"])


MODELS = {"key": key, "C07-M1": m1, "C07-M2": m2, "C07-M3": m3, "C07-M4": m4, "C07-M5": m5, "C07-M6": m6}
