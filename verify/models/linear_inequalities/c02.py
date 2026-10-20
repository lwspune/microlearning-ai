"""C02 Inequalities with brackets and fractions: answer models (the key, and one per misconception).

An item is one linear inequality in x, LHS rel RHS, given term by term:
  v["L"], v["R"]: tuples of terms (c, first, second, d), each standing for c*(first + second)/d,
                  where c is the number (with its sign) outside the bracket, (first + second) the
                  bracket in the order the stem writes it (second = 0 for a bare term), d the denominator.
  p["rel"]: "lt" | "le" | "gt" | "ge".
The answer is the solution set, an Interval.

The key solves the inequality from the definition (sympy's solve_univariate_inequality on the
whole expression), never by the clear-collect-divide method. The misconception models walk that
method step by step and slip at one place:
  M1  multiplies only the fraction terms by the L.C.M. (whole-number terms left as they were)
  M2  a minus outside a bracket changes the sign of only the first term inside it
  M3  divides by a negative coefficient of x without turning the sign round
  M4  turns the sign round on multiplying by the (positive) L.C.M.
  M5  a number (other than 1 or -1) outside a bracket multiplies only the first term inside it
  M6  a term carried to the other side keeps its sign (x terms to the left, numbers to the right)
"""
from functools import reduce

from sympy import Interval, Poly, Symbol, ilcm, oo, solve_univariate_inequality

_X = Symbol("x", real=True)
_FLIP = {"lt": "gt", "le": "ge", "gt": "lt", "ge": "le"}


def _xs(v):
    """Replace whatever symbol named x the inputs carry with a real x."""
    def fix(side):
        out = []
        for t in side:
            out.append(tuple(e.subs({s: _X for s in getattr(e, "free_symbols", ()) if s.name == "x"}) for e in t))
        return out
    return fix(v["L"]), fix(v["R"])


def _value(side):
    return sum((c * (f + s) / d for c, f, s, d in side), 0)


def _lcm(L, R):
    return reduce(ilcm, [int(d) for _, _, _, d in L + R], 1)


def _set(rel, b):
    """{x : x rel b} as an interval."""
    return {
        "lt": Interval(-oo, b, True, True),
        "le": Interval(-oo, b, True, False),
        "gt": Interval(b, oo, True, True),
        "ge": Interval(b, oo, False, True),
    }[rel]


def _expand(side, lcm, wrong=None):
    """The side after multiplying every term by lcm and opening its bracket.
    wrong(c, f, s, d, lcm) may return the student's (wrong) expansion of a term, or None."""
    total = 0
    for c, f, s, d in side:
        w = wrong(c, f, s, d, lcm) if wrong else None
        total += w if w is not None else c * lcm / d * (f + s)
    return total


def _finish(lhs, rhs, rel, turn_on_divide=True, carry=-1):
    """Collect x on the left, numbers on the right, then divide by the coefficient of x.
    carry is the sign a term picks up when it crosses over (-1; the M6 slip uses +1)."""
    A, B = Poly(lhs, _X).all_coeffs() if Poly(lhs, _X).degree() == 1 else (0, lhs)
    C, D = Poly(rhs, _X).all_coeffs() if Poly(rhs, _X).degree() == 1 else (0, rhs)
    k, b = A + carry * C, D + carry * B
    if k == 0:
        raise ValueError("x cancels")
    if k < 0 and turn_on_divide:
        rel = _FLIP[rel]
    return _set(rel, b / k)


def _coeff(L, R):
    lcm = _lcm(L, R)
    lhs, rhs = _expand(L, lcm), _expand(R, lcm)
    return Poly(lhs - rhs, _X).coeff_monomial(_X)


def key(v, p):
    L, R = _xs(v)
    lhs, rhs = _value(L), _value(R)
    op = {"lt": lhs < rhs, "le": lhs <= rhs, "gt": lhs > rhs, "ge": lhs >= rhs}[p["rel"]]
    return solve_univariate_inequality(op, _X, relational=False)


def m1(v, p):
    """Multiplies the fractions by the L.C.M. but leaves the whole-number terms alone."""
    L, R = _xs(v)
    lcm = _lcm(L, R)
    if lcm == 1 or all(d != 1 for *_, d in L + R):
        raise ValueError("needs a fraction and a term with no denominator")
    wrong = lambda c, f, s, d, l: c * (f + s) if d == 1 else None
    return _finish(_expand(L, lcm, wrong), _expand(R, lcm, wrong), p["rel"])


def m2(v, p):
    """A minus outside a bracket changes only the first term's sign."""
    L, R = _xs(v)
    lcm = _lcm(L, R)
    if not any(c < 0 and s != 0 for c, _, s, _ in L + R):
        raise ValueError("needs a minus before a bracket")
    wrong = lambda c, f, s, d, l: (c * l / d) * f - (c * l / d) * s if c < 0 and s != 0 else None
    return _finish(_expand(L, lcm, wrong), _expand(R, lcm, wrong), p["rel"])


def m3(v, p):
    """Divides by a negative coefficient of x and keeps the sign."""
    L, R = _xs(v)
    if not _coeff(L, R) < 0:
        raise ValueError("the coefficient of x is positive: nothing to forget")
    lcm = _lcm(L, R)
    return _finish(_expand(L, lcm), _expand(R, lcm), p["rel"], turn_on_divide=False)


def m4(v, p):
    """Turns the sign round on multiplying by the positive L.C.M."""
    L, R = _xs(v)
    lcm = _lcm(L, R)
    if lcm == 1:
        raise ValueError("no fractions to clear")
    return _finish(_expand(L, lcm), _expand(R, lcm), _FLIP[p["rel"]])


def m5(v, p):
    """The number outside a bracket (after clearing fractions) multiplies only the first term inside."""
    L, R = _xs(v)
    lcm = _lcm(L, R)
    hit = lambda c, s, d: s != 0 and abs(c * lcm / d) != 1
    if not any(hit(c, s, d) for c, _, s, d in L + R):
        raise ValueError("needs a bracket multiplied by a number other than 1 or -1")
    wrong = lambda c, f, s, d, l: (c * l / d) * f + s if hit(c, s, d) else None
    return _finish(_expand(L, lcm, wrong), _expand(R, lcm, wrong), p["rel"])


def m6(v, p):
    """Carries a term across to the other side without changing its sign."""
    L, R = _xs(v)
    lcm = _lcm(L, R)
    lhs, rhs = _expand(L, lcm), _expand(R, lcm)
    if Poly(rhs, _X).coeff_monomial(_X) == 0 and Poly(lhs, _X).coeff_monomial(1) == 0:
        raise ValueError("nothing to carry across")
    return _finish(lhs, rhs, p["rel"], carry=1)


MODELS = {"key": key, "C02-M1": m1, "C02-M2": m2, "C02-M3": m3, "C02-M4": m4, "C02-M5": m5, "C02-M6": m6}
