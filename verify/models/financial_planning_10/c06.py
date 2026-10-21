"""C06 Dividend and rate of return: answer models (the key, and one per misconception).

Inputs (sympy): F = face value of one share, M = market value of one share, d = dividend rate (%),
n = number of shares (where the item has one). Comparison items: F, and dA, MA, dB, MB for
Company A and Company B.
params["ask"]:
  dps     -> dividend on one share (rupees)
  total   -> total dividend on n shares (rupees)
  ror     -> rate of return (the number of %)
  compare -> the more profitable company and its rate of return, as (company, rate)
"""
from sympy import Rational, Symbol, Tuple


def _pct(rate, amount):
    return Rational(rate) * amount / 100


def _answer(p, v, dps, ror):
    """The asked value, given a rule for the dividend on one share and one for the rate of return."""
    ask = p["ask"]
    if ask == "dps":
        return dps(v["d"], v["F"], v["M"])
    if ask == "total":
        return v["n"] * dps(v["d"], v["F"], v["M"])
    if ask == "ror":
        return ror(v["d"], v["F"], v["M"], v.get("n"))
    if ask == "compare":
        ra = ror(v["dA"], v["F"], v["MA"], None)
        rb = ror(v["dB"], v["F"], v["MB"], None)
        if ra == rb:
            raise ValueError("a tie: no company is chosen")
        return Tuple(Symbol("A"), ra) if ra > rb else Tuple(Symbol("B"), rb)
    raise ValueError(f"unknown ask {ask}")


def _key_dps(d, F, M):
    return _pct(d, F)


def key(v, p):
    """Dividend is d% of the face value; rate of return = dividend on one share / MV x 100."""
    return _answer(p, v, _key_dps, lambda d, F, M, n: _key_dps(d, F, M) / M * 100)


def m1(v, p):
    """Dividend taken as d% of the market value, so the rate of return comes out as d% itself."""
    dps = lambda d, F, M: _pct(d, M)
    return _answer(p, v, dps, lambda d, F, M, n: dps(d, F, M) / M * 100)


def m2(v, p):
    """Takes the dividend rate as rupees: d% dividend means ₹ d on each share, whatever the FV."""
    if v["F"] == 100:
        raise ValueError("FV 100: same as the key")
    dps = lambda d, F, M: Rational(d)
    return _answer(p, v, dps, lambda d, F, M, n: dps(d, F, M) / M * 100)


def m3(v, p):
    """Swaps FV and MV: dividend on the MV, divided by the FV (rate = d x MV / FV)."""
    if p["ask"] not in ("ror", "compare"):
        raise ValueError("only a rate of return")
    return _answer(p, v, _key_dps, lambda d, F, M, n: _pct(d, M) / F * 100)


def m4(v, p):
    """Divides the dividend on ONE share by the WHOLE sum invested (n x MV)."""
    if p["ask"] != "ror" or not v.get("n") or v["n"] == 1:
        raise ValueError("needs a rate of return over several shares")
    return _answer(p, v, _key_dps, lambda d, F, M, n: _key_dps(d, F, M) / (n * M) * 100)


def m5(v, p):
    """Forgets to divide by 100: d% of FV taken as d x FV."""
    if p["ask"] not in ("dps", "total"):
        raise ValueError("only a dividend amount")
    return _answer(p, v, lambda d, F, M: Rational(d) * F, None)


def m6(v, p):
    """Gives the dividend on one share when the total dividend on n shares is asked."""
    if p["ask"] != "total":
        raise ValueError("only the total dividend")
    return _key_dps(v["d"], v["F"], v["M"])


MODELS = {"key": key, "C06-M1": m1, "C06-M2": m2, "C06-M3": m3, "C06-M4": m4, "C06-M5": m5, "C06-M6": m6}
