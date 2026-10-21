"""C01 CGST, SGST and IGST: answer models (the key, and one per misconception).

Every item names what it asks in params["ask"]:
  split   the tax rates on a sale, given the GST rate r   -> Tuple(CGST %, SGST %, IGST %)
  rate    the GST rate, given taxable value t and the amounts c (CGST) and s (SGST)   -> GST %
  cgst    the CGST amount on n articles of taxable value v each at GST rate r   -> rupees
  price   the customer's price for n articles of taxable value v each at GST rate r   -> rupees
  taxes   the tax amounts on a sale of n articles of value v at rate r   -> Tuple(CGST, SGST, IGST) in rupees
params["within"] is "yes" for a sale inside one state, "no" for a sale between two states.

The key works from the definitions: inside a state the tax is shared equally by the Centre and the
State; between states the Centre takes the whole tax as IGST.
"""
from sympy import Integer, Tuple


def _ask(p, *allowed):
    if p["ask"] not in allowed:
        raise ValueError(f"not modelled for {p['ask']}")
    return p["ask"]


def _within(p):
    return p.get("within", "yes") == "yes"


def _value(v):
    return v.get("n", Integer(1)) * v["v"]


def _heads(total_tax, within):
    """(CGST, SGST, IGST) for a total tax: shared equally inside a state, all IGST between states."""
    return Tuple(total_tax / 2, total_tax / 2, 0) if within else Tuple(0, 0, total_tax)


def key(v, p):
    ask = p["ask"]
    if ask == "split":
        return _heads(v["r"], _within(p))
    if ask == "rate":
        return (v["c"] + v["s"]) / v["t"] * 100
    tax = _value(v) * v["r"] / 100
    if ask == "cgst":
        if not _within(p):
            raise ValueError("no CGST between states")
        return tax / 2
    if ask == "price":
        return _value(v) + tax
    if ask == "taxes":
        return _heads(tax, _within(p))
    raise ValueError(ask)


def m1(v, p):
    """Does not split: charges the whole GST rate as CGST and again as SGST (and reads a CGST rate as the GST rate)."""
    ask = _ask(p, "split", "rate", "cgst", "price", "taxes")
    if ask != "rate" and not _within(p):
        raise ValueError("within a state only")
    if ask == "split":
        return Tuple(v["r"], v["r"], 0)
    if ask == "rate":
        return v["c"] / v["t"] * 100
    tax = _value(v) * v["r"] / 100
    if ask == "cgst":
        return tax
    if ask == "price":
        return _value(v) + 2 * tax
    return Tuple(tax, tax, 0)


def m2(v, p):
    """Swaps part and whole: doubles the GST rate to get CGST, or halves the CGST rate to get GST."""
    ask = _ask(p, "split", "rate", "cgst", "price")
    if ask != "rate" and not _within(p):
        raise ValueError("within a state only")
    if ask == "split":
        return Tuple(2 * v["r"], 2 * v["r"], 0)
    if ask == "rate":
        return v["c"] / v["t"] * 100 / 2
    cgst = _value(v) * 2 * v["r"] / 100
    if ask == "cgst":
        return cgst
    return _value(v) + 2 * cgst


def m3(v, p):
    """Charges only half the GST: CGST alone within a state, IGST at half the rate between states."""
    ask = _ask(p, "price", "taxes")
    half = _value(v) * v["r"] / 200
    if ask == "price":
        if not _within(p):
            raise ValueError("within a state only")
        return _value(v) + half
    return Tuple(half, 0, 0) if _within(p) else Tuple(0, 0, half)


def m4(v, p):
    """Mixes up the two cases: IGST inside a state, CGST and SGST between states."""
    ask = _ask(p, "split", "taxes")
    within = not _within(p)
    if ask == "split":
        return _heads(v["r"], within)
    return _heads(_value(v) * v["r"] / 100, within)


def m5(v, p):
    """Works out the tax on one article when the invoice has several."""
    ask = _ask(p, "cgst", "price", "taxes")
    if v.get("n", Integer(1)) == 1:
        raise ValueError("needs more than one article")
    one = dict(v, n=Integer(1))
    return key(one, dict(p, ask=ask))


def m6(v, p):
    """Forgets the x 100: gives the fraction tax / taxable value as the rate."""
    _ask(p, "rate")
    return (v["c"] + v["s"]) / v["t"]


MODELS = {"key": key, "C01-M1": m1, "C01-M2": m2, "C01-M3": m3, "C01-M4": m4, "C01-M5": m5, "C01-M6": m6}
