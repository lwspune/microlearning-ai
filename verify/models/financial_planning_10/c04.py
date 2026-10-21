"""C04 Input tax credit: answer models (the key, and one per misconception).

Inputs (sympy), either as taxes or as taxable values:
  taxes:  O = output tax (GST collected on sale), I = input tax (GST paid on purchase),
          F = (chains only) the GST paid one stage earlier, on the seller's own supplier's purchase.
  values: P = taxable value of the purchase, S = taxable value of the sale, r = GST rate (%),
          A = (chains only) the taxable value one stage earlier.
params["ask"]:
  payable -> the GST payable
  cgst    -> the CGST payable (SGST payable is the same amount)
"""
from sympy import Rational


def _taxes(v):
    """Output tax, input tax and the earlier stage's tax (or None)."""
    if "r" in v:
        r = Rational(v["r"])
        F = r * v["A"] / 100 if "A" in v else None
        return r * v["S"] / 100, r * v["P"] / 100, F
    return v["O"], v["I"], v.get("F")


def _ask(ask, amount):
    if ask == "payable":
        return amount
    if ask == "cgst":
        return amount / 2
    raise ValueError(f"unknown ask {ask}")


def key(v, p):
    """GST payable = output tax - input tax credit; CGST payable = SGST payable = half of it."""
    O, I, _ = _taxes(v)
    return _ask(p["ask"], O - I)


def m1(v, p):
    """Takes no credit: pays the whole output tax to the government."""
    O, _, _ = _taxes(v)
    return _ask(p["ask"], O)


def m2(v, p):
    """Adds the input tax to the output tax instead of subtracting it."""
    O, I, _ = _taxes(v)
    return _ask(p["ask"], O + I)


def m3(v, p):
    """Finds the GST payable correctly but gives all of it as the CGST payable (no halving)."""
    if p["ask"] != "cgst":
        raise ValueError("only when CGST or SGST payable is asked")
    O, I, _ = _taxes(v)
    return O - I


def m4(v, p):
    """Mixes up the input tax credit with the GST payable: gives the ITC as the amount payable."""
    _, I, _ = _taxes(v)
    return _ask(p["ask"], I)


def m5(v, p):
    """Forgets the rate: gives the value added (sale value - purchase value) as the GST payable."""
    if "r" not in v:
        raise ValueError("only when taxable values are given")
    return _ask(p["ask"], v["S"] - v["P"])


def m6(v, p):
    """In a chain, subtracts the tax paid at an earlier stage, not the tax on the trader's own purchase."""
    O, _, F = _taxes(v)
    if F is None:
        raise ValueError("only in a chain with an earlier stage")
    return _ask(p["ask"], O - F)


MODELS = {"key": key, "C04-M1": m1, "C04-M2": m2, "C04-M3": m3, "C04-M4": m4, "C04-M5": m5, "C04-M6": m6}
