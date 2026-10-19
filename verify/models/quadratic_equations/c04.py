"""C04 Expressions in the roots: answer models (the key, and one per misconception).

alpha, beta are the roots of a x^2 + b x + c = 0 (v["a"], v["b"], v["c"]); s = alpha + beta and
p = alpha * beta. p["ask"] picks the question type:
  value     numeric a, b, c; p["expr"] names the expression in the roots -> its value
              cube_sum      alpha^3 + beta^3
              plus_recip    (alpha + 1/beta) + (beta + 1/alpha)
  argmin    a, b, c in k -> the k that makes alpha^2 + beta^2 least
  diff      a, b, c in k; the roots differ by v["d"] -> the positive value of k
  sqdiff    x^2 - 8x + q style: a, b numeric, c = q; alpha > beta and alpha^2 - beta^2 = v["g"] -> q
  ratio     x^2 + bx + c = 0 with c > 0, alpha > beta and alpha^2 + beta^2 = v["m"] * alpha * beta
              -> alpha - beta, in terms of the symbol c
The key works from the roots themselves (the quadratic formula), never from s and p. Each
misconception model is a student who works in s and p with one wrong rule.
"""
from sympy import Rational, Symbol, diff, expand, nsimplify, radsimp, simplify, solve, sqrt, sqrtdenest, sympify

K = Symbol("k")
Q = Symbol("q")
C = Symbol("c")


def _ask(p):
    return p.get("ask", "value")


def _roots(a, b, c):
    """The two roots by the quadratic formula, larger first when real."""
    r = sqrt(b**2 - 4 * a * c)
    return (-b + r) / (2 * a), (-b - r) / (2 * a)


def _expr(name, al, be):
    if name == "cube_sum":
        return al**3 + be**3
    if name == "plus_recip":
        return al + 1 / be + be + 1 / al
    raise ValueError(name)


def _positive(sols):
    pos = [x for x in sols if x.is_real and x > 0]
    if len(pos) != 1:
        raise ValueError(f"expected one positive solution, got {sols}")
    return sqrtdenest(pos[0])


def key(v, p):
    v = {n: sympify(x) for n, x in v.items()}
    a, b, c = v.get("a"), v.get("b"), v.get("c")
    ask = _ask(p)
    if ask == "value":
        al, be = _roots(a, b, c)
        return simplify(radsimp(expand(_expr(p["expr"], al, be))))
    if ask == "argmin":
        al, be = _roots(a, b, c)
        e = simplify(expand(al**2 + be**2))
        return solve(diff(e, K), K)[0]
    if ask == "diff":
        al, be = _roots(a, b, c)
        return _positive(solve(simplify(expand((al - be) ** 2)) - v["d"] ** 2, K))
    if ask == "sqdiff":
        al, be = _roots(a, b, c)  # al > be
        sols = [x for x in solve(al**2 - be**2 - v["g"], Q)]
        if len(sols) != 1:
            raise ValueError(sols)
        return sols[0]
    if ask == "ratio":
        # alpha = r * beta with r^2 - m r + 1 = 0; alpha * beta = c, so beta^2 = c / r.
        m = v["m"]
        r = max(solve(Symbol("r") ** 2 - m * Symbol("r") + 1, Symbol("r")), key=lambda x: x.evalf())
        return nsimplify(radsimp(simplify((r - 1) ** 2 / r))) ** Rational(1, 2) * sqrt(C)
    raise ValueError(ask)


class Student:
    """Works in s and p; each flag is one wrong rule."""

    def __init__(self, term_by_term=False, swap_24=False, flip_sum=False, ignore_a=False,
                 diff_vs_sq=False, add_denoms=False):
        self.term_by_term = term_by_term
        self.swap_24 = swap_24
        self.flip_sum = flip_sum
        self.ignore_a = ignore_a
        self.diff_vs_sq = diff_vs_sq
        self.add_denoms = add_denoms

    def sp(self, a, b, c):
        s, pr = (-b, c) if self.ignore_a else (-b / a, c / a)
        if self.flip_sum:
            s = -s
        return s, pr

    def sq_sum(self, s, pr):
        if self.term_by_term:
            return s**2
        return s**2 - (4 if self.swap_24 else 2) * pr

    def diff_sq(self, s, pr):
        return s**2 - (2 if self.swap_24 else 4) * pr

    def value(self, v, p):
        s, pr = self.sp(v["a"], v["b"], v["c"])
        e = p["expr"]
        if e == "cube_sum":
            return s**3 if self.term_by_term else s**3 - 3 * pr * s
        if e == "plus_recip":
            if self.term_by_term:
                raise ValueError("no power of a sum here")
            return s + (1 / s if self.add_denoms else s / pr)
        raise ValueError(e)

    def answer(self, v, p):
        v = {n: sympify(x) for n, x in v.items()}
        ask = _ask(p)
        if ask == "value":
            return self.value(v, p)
        if ask == "argmin":
            s, pr = self.sp(v["a"], v["b"], v["c"])
            return solve(diff(expand(self.sq_sum(s, pr)), K), K)[0]
        if ask == "diff":
            s, pr = self.sp(v["a"], v["b"], v["c"])
            d = v["d"] if self.diff_vs_sq else v["d"] ** 2
            return _positive(solve(self.diff_sq(s, pr) - d, K))
        if ask == "sqdiff":
            s, pr = self.sp(v["a"], v["b"], v["c"])
            if self.term_by_term:
                lhs = v["g"]  # takes alpha^2 - beta^2 as (alpha - beta)^2
            else:
                dif = v["g"] / s  # alpha^2 - beta^2 = s (alpha - beta)
                lhs = dif if self.diff_vs_sq else dif**2
            sols = solve(self.diff_sq(s, pr) - lhs, Q)
            if len(sols) != 1:
                raise ValueError(sols)
            return sols[0]
        if ask == "ratio":
            # alpha^2 + beta^2 = m c gives s^2; then (alpha - beta)^2 = s^2 - 4c.
            m = v["m"]
            s2 = Symbol("s2")
            sq = (s2 - (4 if self.swap_24 else 2) * C) if not self.term_by_term else s2
            s2v = solve(sq - m * C, s2)[0]
            dsq = expand(s2v - (2 if self.swap_24 else 4) * C)
            return dsq if self.diff_vs_sq else sqrt(dsq)
        raise ValueError(ask)


def m1(v, p):
    """Raises a sum (or difference) to a power term by term: (alpha + beta)^2 = alpha^2 + beta^2."""
    return Student(term_by_term=True).answer(v, p)


def m2(v, p):
    """Mixes up 2p and 4p: alpha^2 + beta^2 = s^2 - 4p and (alpha - beta)^2 = s^2 - 2p."""
    return Student(swap_24=True).answer(v, p)


def m3(v, p):
    """Takes the sum of the roots as +b/a."""
    return Student(flip_sum=True).answer(v, p)


def m4(v, p):
    """Reads s = -b and p = c without dividing by a."""
    return Student(ignore_a=True).answer(v, p)


def m5(v, p):
    """Confuses (alpha - beta)^2 with |alpha - beta|: no square root, or a given difference not squared."""
    if _ask(p) not in ("diff", "sqdiff", "ratio"):
        raise ValueError("only where the difference of the roots appears")
    return Student(diff_vs_sq=True).answer(v, p)


def m6(v, p):
    """Adds reciprocals by adding denominators: 1/alpha + 1/beta = 1/(alpha + beta)."""
    if p.get("expr") != "plus_recip":
        raise ValueError("only for reciprocals")
    return Student(add_denoms=True).answer(v, p)


MODELS = {"key": key, "C04-M1": m1, "C04-M2": m2, "C04-M3": m3, "C04-M4": m4, "C04-M5": m5, "C04-M6": m6}
