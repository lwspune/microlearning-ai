"""C04 Computing income tax: answer models (the key, and one per misconception).

Inputs (sympy):
  I     = taxable income in rupees
  age   = the person's age in years (below 60 -> Table I, 60 to 80 -> Table II)
params["ask"]:
  total -> the income tax payable: income tax + 2% education cess + 1% secondary and higher education cess
  cess  -> the two cesses together
The book's tables (Balbharati Std IX, Financial Planning):
  Table I  (up to 60):  Nil up to 2,50,000; 5% of (I - 2,50,000) up to 5,00,000;
                        12,500 + 20% of (I - 5,00,000) up to 10,00,000; 1,12,500 + 30% of (I - 10,00,000) above.
  Table II (60 to 80):  Nil up to 3,00,000; 5% of (I - 3,00,000) up to 5,00,000;
                        10,000 + 20% of (I - 5,00,000) up to 10,00,000; 1,10,000 + 30% of (I - 10,00,000) above.
The key taxes each part of I at its own rate and adds the parts (the book's fixed amounts are those sums).
"""
from sympy import Rational

# (lower limit of the part, rate %) for each part of the taxable income
PARTS = {
    "I": [(250000, 5), (500000, 20), (1000000, 30)],
    "II": [(300000, 5), (500000, 20), (1000000, 30)],
}
# The book's rows: (slab start, fixed amount, rate %) for the slab the income lies in
ROWS = {
    "I": [(250000, 0, 5), (500000, 12500, 20), (1000000, 112500, 30)],
    "II": [(300000, 0, 5), (500000, 10000, 20), (1000000, 110000, 30)],
}


def _table(v, wrong=False):
    senior = Rational(v["age"]) >= 60
    if wrong:
        senior = not senior
    return "II" if senior else "I"


def _tax_by_parts(I, table):
    """Each part taxed at its own rate, straight from the definition."""
    parts = PARTS[table]
    tax = Rational(0)
    for k, (lo, r) in enumerate(parts):
        hi = parts[k + 1][0] if k + 1 < len(parts) else None
        top = I if hi is None else min(I, hi)
        if top > lo:
            tax += (top - lo) * Rational(r, 100)
    return tax


def _row(I, table):
    row = None
    for start, fixed, r in ROWS[table]:
        if I > start:
            row = (start, fixed, r)
    return row


def _finish(tax, I, p, cess_rate=Rational(3, 100), cess_on_income=False, no_cess=False):
    base = I if cess_on_income else tax
    cess = 0 if no_cess else base * cess_rate
    if p["ask"] == "cess":
        if no_cess:
            raise ValueError("no cess to leave out when the cess is asked for")
        return cess
    return tax + cess


def key(v, p):
    I = Rational(v["I"])
    return _finish(_tax_by_parts(I, _table(v)), I, p)


def m1(v, p):
    """Taxes the whole taxable income at the rate of its slab."""
    I = Rational(v["I"])
    row = _row(I, _table(v))
    if row is None:
        raise ValueError("no slab rate below the first limit")
    return _finish(I * Rational(row[2], 100), I, p)


def m2(v, p):
    """Taxes only the part in the top slab, leaving out the fixed amount for the lower slabs."""
    I = Rational(v["I"])
    row = _row(I, _table(v))
    if row is None or row[1] == 0:
        raise ValueError("no fixed amount to leave out")
    return _finish((I - row[0]) * Rational(row[2], 100), I, p)


def m3(v, p):
    """Gives the income tax without adding the cess."""
    I = Rational(v["I"])
    return _finish(_tax_by_parts(I, _table(v)), I, p, no_cess=True)


def m4(v, p):
    """Uses the other table: Table II for a person under 60, or Table I for a senior citizen."""
    I = Rational(v["I"])
    return _finish(_tax_by_parts(I, _table(v, wrong=True)), I, p)


def m5(v, p):
    """Takes the cess on the taxable income instead of on the income tax."""
    I = Rational(v["I"])
    return _finish(_tax_by_parts(I, _table(v)), I, p, cess_on_income=True)


def m6(v, p):
    """Adds only the 2% education cess, forgetting the 1% secondary and higher education cess."""
    I = Rational(v["I"])
    return _finish(_tax_by_parts(I, _table(v)), I, p, cess_rate=Rational(2, 100))


MODELS = {"key": key, "C04-M1": m1, "C04-M2": m2, "C04-M3": m3, "C04-M4": m4, "C04-M5": m5, "C04-M6": m6}
