"""C05 Face value, market value and the sum invested: answer models (the key, and one per misconception).

Inputs (sympy), in rupees:
  F = face value, d = premium (positive) or discount (negative), V = market value,
  S = sum invested (for a count of shares).
  Several companies: n1, F1, d1 (or n1, V1 when only the MV is given), n2, ..., one group per company.
params["ask"]:
  mv     -> the market value of one share (from F, d)
  status -> MV - FV (from F, V): positive = premium, negative = discount, 0 = at par
  count  -> the number of shares bought for S (from S, F, d)
  sum    -> the total sum invested over the companies n1, n2, ...
"""
from sympy import Rational


def _companies(v):
    """(n, F, d, V) for each company; F and d are None where only the MV is given."""
    out, i = [], 1
    while f"n{i}" in v:
        n = Rational(v[f"n{i}"])
        if f"V{i}" in v:
            out.append((n, None, None, Rational(v[f"V{i}"])))
        else:
            out.append((n, Rational(v[f"F{i}"]), Rational(v[f"d{i}"]), None))
        i += 1
    if not out:
        raise ValueError("no companies given")
    return out


def _answer(v, p, mv, status=None, line=None):
    """The quantity asked for, using a per-share MV rule mv(F, d)."""
    ask = p["ask"]
    if ask == "mv":
        return mv(Rational(v["F"]), Rational(v["d"]))
    if ask == "status":
        if status is None:
            raise ValueError("this mistake is not about the premium or discount")
        return status(Rational(v["F"]), Rational(v["V"]))
    if ask == "count":
        m = mv(Rational(v["F"]), Rational(v["d"]))
        if m <= 0:
            raise ValueError("no positive price per share")
        return Rational(v["S"]) / m
    if ask == "sum":
        total = 0
        for n, F, d, V in _companies(v):
            if V is not None:
                total += n * V
            elif line is not None:
                total += line(n, F, d)
            else:
                m = mv(F, d)
                if m <= 0:
                    raise ValueError("no positive price per share")
                total += n * m
        return total
    raise ValueError(f"unknown ask {ask}")


def key(v, p):
    """MV = FV + premium (or - discount); sum invested = shares x MV; shares = sum / MV."""
    return _answer(v, p, lambda F, d: F + d, status=lambda F, V: V - F)


def m1(v, p):
    """Pays the face value: uses FV in place of MV (an MV given outright is still used)."""
    if p["ask"] == "status":
        raise ValueError("not about the premium or discount")
    return _answer(v, p, lambda F, d: F)


def m2(v, p):
    """Takes the premium (or discount) amount itself as the price of a share; reads the MV as the discount or premium."""
    return _answer(v, p, lambda F, d: abs(d), status=lambda F, V: V if V > F else -V)


def m3(v, p):
    """Reverses premium and discount: MV = FV - premium, or FV + discount."""
    return _answer(v, p, lambda F, d: F - d, status=lambda F, V: F - V)


def m4(v, p):
    """Finds the premium or discount by adding FV and MV, and calls it a premium."""
    if p["ask"] != "status":
        raise ValueError("only finding the premium or discount")
    return Rational(v["F"]) + Rational(v["V"])


def m5(v, p):
    """Adds the premium (or takes off the discount) once on the whole lot: shares x FV + premium."""
    if p["ask"] != "sum":
        raise ValueError("only a sum invested")
    return _answer(v, p, None, line=lambda n, F, d: n * F + d)


MODELS = {"key": key, "C05-M1": m1, "C05-M2": m2, "C05-M3": m3, "C05-M4": m4, "C05-M5": m5}
