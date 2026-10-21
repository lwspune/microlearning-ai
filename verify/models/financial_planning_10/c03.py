"""C03 Taxable value from the total: answer models (the key, and one per misconception).

Inputs (sympy): A = total value with GST (rupees), r = GST rate (%).
params["ask"]:
  taxable -> the taxable value
  cgst    -> the CGST shown in the invoice
  gst     -> the total GST (CGST + SGST)
A mistaken answer that is not a whole number of paise is rounded to the paisa, as a student
writes money.
"""
from sympy import Rational, floor


def _paise(x):
    """Round a rupee amount to the nearest paisa."""
    return Rational(floor(Rational(x) * 100 + Rational(1, 2)), 100)


def _ask(ask, T, cgst_rate, sgst_rate):
    """The invoice line asked for, from a taxable value T and the two rates used."""
    cgst, sgst = Rational(cgst_rate) * T / 100, Rational(sgst_rate) * T / 100
    if ask == "taxable":
        return T
    if ask == "cgst":
        return cgst
    if ask == "gst":
        return cgst + sgst
    raise ValueError(f"unknown ask {ask}")


def key(v, p):
    """Total = T + r% of T, so T = total * 100 / (100 + r); CGST = SGST = r/2 % of T."""
    A, r = v["A"], Rational(v["r"])
    T = A * 100 / (100 + r)
    return _ask(p["ask"], T, r / 2, r / 2)


def m1(v, p):
    """Takes r% of the total as the GST, so the taxable value is the total minus r% of it."""
    A, r = v["A"], Rational(v["r"])
    if p["ask"] == "taxable":
        return _paise(A - r * A / 100)
    return _paise(_ask(p["ask"], A, r / 2, r / 2))


def m2(v, p):
    """Uses the CGST rate (half the GST rate) in the factor: T = total * 100 / (100 + r/2)."""
    A, r = v["A"], Rational(v["r"])
    T = A * 100 / (100 + r / 2)
    if p["ask"] == "taxable":
        return _paise(T)
    return _paise(_ask(p["ask"], T, r / 2, r / 2))


def m3(v, p):
    """Turns the factor upside down: T = total * (100 + r) / 100, adding GST to the total again."""
    A, r = v["A"], Rational(v["r"])
    T = A * (100 + r) / 100
    if p["ask"] == "taxable":
        return _paise(T)
    return _paise(_ask(p["ask"], T, r / 2, r / 2))


def m4(v, p):
    """Finds the taxable value correctly, then charges CGST and SGST each at the whole rate."""
    if p["ask"] == "taxable":
        raise ValueError("the taxable value itself is right under this mistake")
    A, r = v["A"], Rational(v["r"])
    T = A * 100 / (100 + r)
    return _ask(p["ask"], T, r, r)


def m5(v, p):
    """Mixes up the two parts of the total: gives the GST for the taxable value, or the reverse."""
    A, r = v["A"], Rational(v["r"])
    T = A * 100 / (100 + r)
    if p["ask"] == "taxable":
        return A - T
    if p["ask"] == "gst":
        return T
    raise ValueError("only the taxable value or the total GST")


MODELS = {"key": key, "C03-M1": m1, "C03-M2": m2, "C03-M3": m3, "C03-M4": m4, "C03-M5": m5}
