"""C10 Properties of nCr: answer models (the key, and one per misconception).

Two item kinds (params["kind"]); every answer is a FiniteSet of the unknown's values.
- "pascal": params["terms"] lists the left side as "coef top bottom" strings (coef may be
  negative); inputs N = the top of the right side, N C r. The unknown is r.
- "eq": N C x = N C y with x, y expressions in the unknown n (inputs N, x, y).
"""
from sympy import FiniteSet, Symbol, binomial, solve

n = Symbol("n")


def _terms(p):
    return [tuple(int(s) for s in t.split()) for t in p["terms"]]


def _reduce(p, wrong=False):
    """Collapses the left side to one N C s with Pascal's rule, as a student would.
    Right rule: nC(a) + nC(a+1) = (n+1)C(a+1). Wrong rule (M1): = (n+1)C(a), the smaller index."""
    terms = {}
    for c, top, bot in _terms(p):
        terms[(top, bot)] = terms.get((top, bot), 0) + c
    for _ in range(50):
        live = {k: c for k, c in terms.items() if c != 0}
        if len(live) == 1 and list(live.values())[0] == 1:
            return list(live)[0]
        done = False
        # (n+1)C(b) - nC(b): rewrite the bigger one by the rule, the nC(b) cancels.
        for (top, bot), c in live.items():
            if c < 0 and live.get((top + 1, bot), 0) > 0:
                other = bot + 1 if wrong else bot - 1
                terms[(top + 1, bot)] -= 1
                terms[(top, bot)] += 1
                terms[(top, other)] = terms.get((top, other), 0) + 1
                done = True
                break
        if not done:
            for (top, bot), c in sorted(live.items()):
                if c > 0 and live.get((top, bot + 1), 0) > 0:
                    terms[(top, bot)] -= 1
                    terms[(top, bot + 1)] -= 1
                    new = (top + 1, bot if wrong else bot + 1)
                    terms[new] = terms.get(new, 0) + 1
                    done = True
                    break
        if not done:
            raise ValueError("the left side does not collapse by Pascal's rule")
    raise ValueError("no single term reached")


def _valid(v, r):
    N, x, y = v["N"], v["x"].subs(n, r), v["y"].subs(n, r)
    return all(t.is_integer and 0 <= t <= N for t in (x, y))


def _roots(expr):
    return [r for r in solve(expr, n) if r.is_real]


def key(v, p):
    """Straight from the definition: every value whose binomial coefficients really are equal."""
    N = int(v["N"])
    if p["kind"] == "pascal":
        total = sum(c * binomial(top, bot) for c, top, bot in _terms(p))
        return FiniteSet(*[r for r in range(N + 1) if binomial(N, r) == total])
    return FiniteSet(*[r for r in range(-100, 101)
                       if _valid(v, r) and binomial(N, v["x"].subs(n, r)) == binomial(N, v["y"].subs(n, r))])


def m1(v, p):
    """Pascal's rule with the smaller lower index: nC(r-1) + nC(r) = (n+1)C(r-1); then both branches."""
    if p["kind"] != "pascal":
        raise ValueError("no Pascal step")
    top, s = _reduce(p, wrong=True)
    return FiniteSet(s, top - s)


def m2(v, p):
    """From N C x = N C y keeps only x = y (misses x + y = N)."""
    if p["kind"] == "pascal":
        return FiniteSet(_reduce(p)[1])
    return FiniteSet(*[r for r in _roots(v["x"] - v["y"]) if _valid(v, r)])


def m3(v, p):
    """From N C x = N C y keeps only x + y = N (misses x = y)."""
    if p["kind"] == "pascal":
        top, s = _reduce(p)
        return FiniteSet(top - s)
    return FiniteSet(*[r for r in _roots(v["x"] + v["y"] - v["N"]) if _valid(v, r)])


def m4(v, p):
    """Solves both x = y and x + y = N and keeps every root, never checking 0 <= x, y <= N."""
    if p["kind"] != "eq":
        raise ValueError("no equation to solve")
    return FiniteSet(*(_roots(v["x"] - v["y"]) + _roots(v["x"] + v["y"] - v["N"])))


MODELS = {"key": key, "C10-M1": m1, "C10-M2": m2, "C10-M3": m3, "C10-M4": m4}
