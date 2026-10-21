"""C09 Mutual funds and NAV: answer models (the key, and one per misconception).

Inputs (sympy), by params["ask"]:
  nav    -> V, Vs: the scheme's total value as a number and its scale (10**7 for crore,
            10**5 for lakh, 1 for rupees); U, Us: the units issued, the same way.
            The answer is the NAV of one unit (rupees).
  units  -> A: the amount invested; either N: the NAV, or V, Vs, U, Us as above;
            F: the face value of a unit. The answer is the number of units allotted.
  amount -> n: the number of units; N: the NAV; F: the face value of a unit.
            The answer is the amount needed (rupees).
A mistaken money answer that is not a whole number of paise is rounded to the paisa,
as a student writes money.
"""
from sympy import Integer, Rational, floor

CRORE, LAKH = Integer(10) ** 7, Integer(10) ** 5


def _paise(x):
    """Round a rupee amount to the nearest paisa."""
    return Rational(floor(Rational(x) * 100 + Rational(1, 2)), 100)


def _nav(v):
    """The NAV from the scheme's total value and units, or as given."""
    if "N" in v:
        return v["N"]
    return v["V"] * v["Vs"] / (v["U"] * v["Us"])


def key(v, p):
    """NAV = total value / units; units = amount / NAV; amount = units x NAV."""
    ask = p["ask"]
    if ask == "nav":
        return _nav(v)
    if ask == "units":
        return v["A"] / _nav(v)
    if ask == "amount":
        return v["n"] * v["N"]
    raise ValueError(f"unknown ask {ask}")


def m1(v, p):
    """Uses the wrong operation: units = amount x NAV, amount = units / NAV."""
    ask = p["ask"]
    if ask == "units":
        return v["A"] * _nav(v)
    if ask == "amount":
        return _paise(v["n"] / v["N"])
    raise ValueError("only units or amount")


def m2(v, p):
    """Divides the wrong way round: NAV = units / total value."""
    if p["ask"] != "nav":
        raise ValueError("only the NAV")
    return _paise(v["U"] * v["Us"] / (v["V"] * v["Vs"]))


def m3(v, p):
    """Drops the scale word on the units: divides the rupee value by the bare number of units."""
    if p["ask"] != "nav" or v["Us"] == 1:
        raise ValueError("only the NAV, with units given in lakh or crore")
    return _paise(v["V"] * v["Vs"] / v["U"])


def m4(v, p):
    """Takes 1 crore = 10 lakh when the value and the units are in different scales."""
    if "N" in v or v["Vs"] == v["Us"]:
        raise ValueError("only when the value and the units are given in different scales")
    f = lambda s: Integer(10) ** 6 if s == CRORE else s
    nav = v["V"] * f(v["Vs"]) / (v["U"] * f(v["Us"]))
    if p["ask"] == "nav":
        return _paise(nav)
    if p["ask"] == "units":
        return v["A"] / nav
    raise ValueError("only the NAV or units")


def m5(v, p):
    """Ignores the decimal point in the NAV, written in rupees and paise (reads 12.50 as 1250)."""
    if "N" not in v or v["N"] == floor(v["N"]):
        raise ValueError("only when a NAV with paise is given")
    N = v["N"] * 100
    if p["ask"] == "units":
        return v["A"] / N
    if p["ask"] == "amount":
        return v["n"] * N
    raise ValueError("only units or amount")


def m6(v, p):
    """Uses the face value of a unit in place of the NAV."""
    if "F" not in v:
        raise ValueError("only when the stem gives the face value")
    if p["ask"] == "units":
        return v["A"] / v["F"]
    if p["ask"] == "amount":
        return v["n"] * v["F"]
    raise ValueError("only units or amount")


MODELS = {"key": key, "C09-M1": m1, "C09-M2": m2, "C09-M3": m3, "C09-M4": m4, "C09-M5": m5, "C09-M6": m6}
