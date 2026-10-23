"""C03 Taxable income: answer models (the key, and one per misconception).

Inputs (sympy):
  I = total yearly income, S = total 80C savings for the year, d = 80G donation (relief fund),
  A = age in years
params["ask"]:
  taxable  -> the taxable income in rupees
  smallest -> the smallest whole-rupee taxable income on which a person of age A pays income tax
  count    -> how many of params["people"] ("age:taxable income,...") have to pay income tax
Book rules (Balbharati Std IX): 80C deduction at most 1,50,000; relief-fund donations are taken off
in full; Nil limit 2,50,000 up to 60 years, 3,00,000 for 60 to 80, 5,00,000 above 80.
"""
from sympy import Integer, Rational

CAP_80C = Integer(150000)


def limit(age, swap=False, one_table=False):
    """The Nil limit for this age (book Tables I-III)."""
    age = Rational(age)
    if one_table:
        return Integer(250000)
    if age < 60:
        return Integer(250000)
    if age <= 80:
        return Integer(500000) if swap else Integer(300000)
    return Integer(300000) if swap else Integer(500000)


def _taxable(v, cap=True, donation=True, minus_limit=False):
    I, S, d = Rational(v["I"]), Rational(v["S"]), Rational(v["d"])
    t = I - (min(S, CAP_80C) if cap else S) - (d if donation else 0)
    if minus_limit:
        t -= limit(v["A"])
    return t


def _people(p):
    out = []
    for pair in p["people"].split(","):
        a, t = pair.split(":")
        out.append((Integer(a), Integer(t)))
    return out


def _decide(v, p, swap=False, one_table=False, at_limit=False):
    ask = p["ask"]
    if ask == "smallest":
        L = limit(v["A"], swap, one_table)
        return L if at_limit else L + 1
    if ask == "count":
        n = 0
        for a, t in _people(p):
            L = limit(a, swap, one_table)
            if t > L or (at_limit and t == L):
                n += 1
        return Integer(n)
    raise ValueError("this mistake is about the Nil limit, not the deductions")


def key(v, p):
    if p["ask"] == "taxable":
        return _taxable(v)
    return _decide(v, p)


def _taxable_only(v, p, **kw):
    if p["ask"] != "taxable":
        raise ValueError("this mistake is about the deductions")
    return _taxable(v, **kw)


def m1(v, p):   # takes off all the 80C savings, with no 1,50,000 ceiling
    if Rational(v["S"]) <= CAP_80C:
        raise ValueError("80C savings within the ceiling: same as the key")
    return _taxable_only(v, p, cap=False)


def m2(v, p):   # leaves the 80G donation in the taxable income
    return _taxable_only(v, p, donation=False)


def m3(v, p):   # uses the Table I limit 2,50,000 for every age
    return _decide(v, p, one_table=True)


def m4(v, p):   # also takes the Nil limit off, as if taxable income were the part above it
    return _taxable_only(v, p, minus_limit=True)


def m5(v, p):   # swaps Tables II and III: 5,00,000 for 60 to 80, 3,00,000 above 80
    return _decide(v, p, swap=True)


def m6(v, p):   # thinks an income equal to the Nil limit is already taxed
    return _decide(v, p, at_limit=True)


MODELS = {"key": key, "C03-M1": m1, "C03-M2": m2, "C03-M3": m3, "C03-M4": m4, "C03-M5": m5,
          "C03-M6": m6}
