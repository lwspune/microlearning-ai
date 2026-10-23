"""C02 Comparing investments: answer models (the key, and one per misconception).

Inputs (sympy):
  P, R, n = principal, compound interest rate (% a year) and years for a bank deposit
  F, Af   = sum put in a mutual fund (or business) and the amount got back
  r1, r2  = successive percentage changes of a capital (negative for a loss), each on what is there then
params["ask"]:
  ci       -> the compound interest in rupees
  amount   -> the amount after n years in rupees
  bank_pct -> the bank deposit's percent gain
  better   -> the more profitable of the bank deposit and the fund; the value is the figure that
              decides it (its percent gain, or its gain in rupees for a rupee comparison)
  loss_pct -> the loss on the original capital P after r1 then r2, as a percentage of P
Percentages are rounded to two decimal places, rupees to the paisa.
"""
from sympy import Rational, floor


def _round(x, places=2):
    q = Rational(10) ** places
    x = Rational(x)
    sign = -1 if x < 0 else 1
    return sign * Rational(floor(abs(x) * q + Rational(1, 2)), q)


def _r(v, k):
    return Rational(v[k])


def _bank_gain(v, way):
    P, R, n = _r(v, "P"), _r(v, "R"), _r(v, "n")
    if "si" in way:
        return P * R * n / 100
    if "one_year" in way:
        return P * R / 100
    return P * ((1 + R / 100) ** n - 1)


def _pct(gain, invested, received, way):
    if "amount_for_gain" in way:
        return received * 100 / invested
    if "on_received" in way:
        return gain * 100 / received
    return gain * 100 / invested


def compare(v, way=()):
    """(winner, deciding figure) for ask=better under the given way of working."""
    P = _r(v, "P")
    gb = _bank_gain(v, way)
    F, Af = _r(v, "F"), _r(v, "Af")
    gf = Af - F
    if "rupees" in way:
        fig = {"bank": gb, "fund": gf}
    else:
        fig = {"bank": _pct(gb, P, P + gb, way), "fund": _pct(gf, F, Af, way)}
    if fig["bank"] == fig["fund"]:
        raise ValueError("a tie")
    win = "bank" if fig["bank"] > fig["fund"] else "fund"
    return win, _round(fig[win])


def _answer(v, p, way):
    ask = p["ask"]
    if ask == "better":
        return compare(v, way)[1]
    if "rupees" in way:
        raise ValueError("a rupee comparison needs two investments")
    if ask == "loss_pct":
        if way & {"si", "one_year"}:
            raise ValueError("no interest in this question")
        r1, r2, P = _r(v, "r1"), _r(v, "r2"), _r(v, "P")
        if "add_pcts" in way:
            return -(r1 + r2)
        final = P * (1 + r1 / 100) * (1 + r2 / 100)
        if "amount_for_gain" in way:
            return _round(final * 100 / P)
        if "on_received" in way:
            return _round((P - final) * 100 / final)
        return _round((P - final) * 100 / P)
    if "add_pcts" in way:
        raise ValueError("only one percentage in this question")
    P = _r(v, "P")
    gain = _bank_gain(v, way)
    if ask == "ci":
        return _round(P + gain if "amount_for_gain" in way else gain)
    if ask == "amount":
        return _round(gain if "amount_for_gain" in way else P + gain)
    if ask == "bank_pct":
        return _round(_pct(gain, P, P + gain, way))
    raise ValueError(f"unknown ask {ask}")


def key(v, p):
    """Compound interest A - P from A = P(1 + R/100)^n; percent gain = gain / sum invested x 100."""
    return _answer(v, p, set())


def m1(v, p):
    """Compares the two investments by the rupees gained, not the percent gain."""
    if p["ask"] != "better":
        raise ValueError("needs two investments")
    return _answer(v, p, {"rupees"})


def m2(v, p):
    """Uses simple interest PRn/100 for the bank deposit instead of compound interest."""
    return _answer(v, p, {"si"})


def m3(v, p):
    """Mixes up the amount and the gain (interest): uses one where the other is asked for."""
    return _answer(v, p, {"amount_for_gain"})


def m4(v, p):
    """Takes the percent gain (or loss) on the amount received instead of the sum invested."""
    if p["ask"] in ("ci", "amount"):
        raise ValueError("no percentage asked")
    return _answer(v, p, {"on_received"})


def m5(v, p):
    """Adds successive percentages that were taken on different amounts (-20% then +5% as -15%)."""
    if p["ask"] != "loss_pct":
        raise ValueError("needs successive percentages")
    return _answer(v, p, {"add_pcts"})


def m6(v, p):
    """Finds the interest for the first year only."""
    if p["ask"] == "loss_pct":
        raise ValueError("no interest in this question")
    return _answer(v, p, {"one_year"})


MODELS = {"key": key, "C02-M1": m1, "C02-M2": m2, "C02-M3": m3, "C02-M4": m4, "C02-M5": m5, "C02-M6": m6}
