"""C01 Income, expenditure and savings: answer models (the key, and one per misconception).

Params (strings):
  kind="income": find the income x from what is left.
      pcts     comma list of the percents of the INCOME spent or given away (e.g. "90,3")
      bal_pct  optional: percent of the BALANCE (what is left after pcts) given away next
      bal_amt  optional: a fixed amount (rupees) given from the balance next
      left     the amount (rupees) left at the end
  kind="left": the amount left for a year's spending.
      income   the yearly income (rupees)
      pcts     comma list of percents of the yearly income set aside
      monthly  comma list of amounts set aside every month
  kind="rate": earlier spends e% of income; income rises by i%, expenses rise by j% of the
      earlier expenses; the percent of the new income saved now.
"""
from sympy import Symbol, solve, sympify

_x = Symbol("inc", positive=True)


def _n(p, k, default="0"):
    return sympify(p.get(k, default))


def _list(p, k):
    s = p.get(k, "")
    return [sympify(t) for t in s.split(",") if t.strip()]


def _need(p, kind):
    if p["kind"] != kind:
        raise ValueError(f"needs a {kind} question")


def _solve(expr_left, L):
    """The income x with expr_left(x) == L (a single positive root)."""
    sol = solve(expr_left - L, _x)
    if len(sol) != 1:
        raise ValueError("no single solution")
    return sol[0]


def _income_left(p, pcts, bal_pct, bal_amt):
    """What is left from income x: income minus its percents, then the balance steps."""
    balance = _x - sum(q * _x / 100 for q in pcts)
    balance = balance - bal_pct * balance / 100
    return balance - bal_amt


def _rate_parts(p):
    e, i, j = _n(p, "e"), _n(p, "i"), _n(p, "j")
    income = 100 + i * 100 / 100              # earlier income taken as 100 units
    expenses = e + j * e / 100                # j% of the earlier expenses
    return income, expenses, e, i, j


def key(v, p):
    k = p["kind"]
    if k == "income":
        return _solve(_income_left(p, _list(p, "pcts"), _n(p, "bal_pct"), _n(p, "bal_amt")), _n(p, "left"))
    if k == "left":
        I = _n(p, "income")
        return I - sum(q * I / 100 for q in _list(p, "pcts")) - 12 * sum(_list(p, "monthly"))
    if k == "rate":
        income, expenses, *_ = _rate_parts(p)
        return (income - expenses) / income * 100
    raise ValueError(f"unknown kind {k}")


def m1(v, p):
    """Takes every percent as a percent of the whole (earlier) income."""
    k = p["kind"]
    if k == "income":
        if "bal_pct" not in p:
            raise ValueError("needs a percent of the balance")
        pcts = _list(p, "pcts") + [_n(p, "bal_pct")]
        return _solve(_income_left(p, pcts, 0, _n(p, "bal_amt")), _n(p, "left"))
    if k == "rate":
        e, i, j = _n(p, "e"), _n(p, "i"), _n(p, "j")
        return 100 + i - e - j                # all as percents of the earlier income
    raise ValueError("needs a percent of some other amount")


def m2(v, p):
    """Works backwards by adding the percents to the amount left (the amount left as the base)."""
    _need(p, "income")
    x = _n(p, "left") + _n(p, "bal_amt")
    x = x * (1 + _n(p, "bal_pct") / 100)
    return x * (1 + sum(_list(p, "pcts")) / 100)


def m3(v, p):
    """Uses the percent spent as the percent left: x * (spent%) = what is left."""
    _need(p, "income")
    P = sum(_list(p, "pcts"))
    if P == 50:
        raise ValueError("spent and left are both 50%")
    balance = P * _x / 100
    balance = balance - _n(p, "bal_pct") * balance / 100
    return _solve(balance - _n(p, "bal_amt"), _n(p, "left"))


def m4(v, p):
    """Leaves out the last outgoing (the donation, the last set-aside, or the rise in expenses)."""
    k = p["kind"]
    if k == "income":
        pcts, b, d = _list(p, "pcts"), _n(p, "bal_pct"), _n(p, "bal_amt")
        if "bal_pct" in p or "bal_amt" in p:
            b, d = 0, 0
        elif len(pcts) > 1:
            pcts = pcts[:-1]
        else:
            raise ValueError("nothing to leave out")
        return _solve(_income_left(p, pcts, b, d), _n(p, "left"))
    if k == "left":
        I = _n(p, "income")
        monthly = _list(p, "monthly")[:-1]
        return I - sum(q * I / 100 for q in _list(p, "pcts")) - 12 * sum(monthly)
    if k == "rate":
        income, _, e, _, _ = _rate_parts(p)
        return (income - e) / income * 100
    raise ValueError(f"unknown kind {k}")


def m5(v, p):
    """Gives the amount spent (the outgoings) instead of the amount asked for."""
    k = p["kind"]
    if k == "income":
        return key(v, p) - _n(p, "left")
    if k == "left":
        return _n(p, "income") - key(v, p)
    if k == "rate":
        return 100 - key(v, p)
    raise ValueError(f"unknown kind {k}")


def m6(v, p):
    """Takes the monthly amounts once, not 12 times, against a yearly income."""
    _need(p, "left")
    I = _n(p, "income")
    return I - sum(q * I / 100 for q in _list(p, "pcts")) - sum(_list(p, "monthly"))


MODELS = {"key": key, "C01-M1": m1, "C01-M2": m2, "C01-M3": m3, "C01-M4": m4, "C01-M5": m5, "C01-M6": m6}
