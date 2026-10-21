"""C02 Discount, then GST: answer models (the key, and one per misconception).

Inputs (sympy): P = printed price (rupees), d = discount rate (%), r = GST rate (%).
params["ask"]:
  total -> the amount the customer pays (taxable value + GST)
  cgst  -> the CGST shown in the invoice
  gst   -> the total GST (CGST + SGST) shown in the invoice
"""
from sympy import Rational


def _pct(rate, amount):
    return Rational(rate) * amount / 100


def _parts(v):
    P, d, r = v["P"], v["d"], v["r"]
    D = _pct(d, P)  # discount
    return P, D, P - D, r  # printed price, discount, taxable value, GST rate


def _answer(ask, taxable, cgst_rate, sgst_rate, paid_base=None):
    """The invoice line asked for, given the taxable value and the two rates used."""
    cgst, sgst = _pct(cgst_rate, taxable), _pct(sgst_rate, taxable)
    if ask == "cgst":
        return cgst
    if ask == "gst":
        return cgst + sgst
    if ask == "total":
        return (taxable if paid_base is None else paid_base) + cgst + sgst
    raise ValueError(f"unknown ask {ask}")


def key(v, p):
    """Discount off the printed price first; GST (CGST + SGST, half each) on what is left."""
    P, D, T, r = _parts(v)
    gst = _pct(r, T)
    return {"cgst": gst / 2, "gst": gst, "total": T + gst}[p["ask"]]


def m1(v, p):
    """GST charged on the printed price, not on the discounted price."""
    P, D, T, r = _parts(v)
    if D == 0:
        raise ValueError("no discount: same as the key")
    return _answer(p["ask"], P, Rational(r) / 2, Rational(r) / 2, paid_base=T)


def m2(v, p):
    """CGST and SGST each charged at the whole GST rate."""
    P, D, T, r = _parts(v)
    return _answer(p["ask"], T, r, r)


def m3(v, p):
    """Only CGST (half the rate) is added: SGST forgotten."""
    P, D, T, r = _parts(v)
    if p["ask"] == "cgst":
        raise ValueError("CGST itself is right under this mistake")
    return _answer(p["ask"], T, Rational(r) / 2, 0)


def m4(v, p):
    """Pays the printed price plus GST: thinks the discount only lowers the tax."""
    P, D, T, r = _parts(v)
    if p["ask"] != "total" or D == 0:
        raise ValueError("only the amount paid, with a discount, changes")
    return _answer("total", T, Rational(r) / 2, Rational(r) / 2, paid_base=P)


def m5(v, p):
    """Takes the taxable value as the amount paid, forgetting to add GST."""
    P, D, T, r = _parts(v)
    if p["ask"] != "total":
        raise ValueError("only the amount paid")
    return T


def m6(v, p):
    """Uses the discount amount itself as the taxable value."""
    P, D, T, r = _parts(v)
    if p["ask"] == "total" or D == 0:
        raise ValueError("only the tax amounts, with a discount")
    return _answer(p["ask"], D, Rational(r) / 2, Rational(r) / 2)


MODELS = {"key": key, "C02-M1": m1, "C02-M2": m2, "C02-M3": m3, "C02-M4": m4, "C02-M5": m5, "C02-M6": m6}
