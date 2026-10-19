"""C03 Sum and product of the roots: answer models (the key, and one per misconception).

The item's equation is a x^2 + b x + c = 0, with v["a"], v["b"], v["c"] its true coefficients
(expressions, possibly in k). p["ask"] picks the question type:
  sum         the sum of the roots
  prod        the product of the roots
  k_sum       the value of k for which the sum of the roots is v["t"]
  k_prod      the value of k for which the product of the roots is v["t"]
  other_prod  v["r"] is one root and k sits only in b: the other root
  roots1      a + b + c = 0: both roots, as a set
p["printed"] = "cba" means the stem prints the equation as c + b x + a x^2 = 0.
"""
from sympy import FiniteSet, Poly, Symbol, roots, simplify, solve

X = Symbol("x")
K = Symbol("k")


def _ask(p):
    return p["ask"]


def _roots(a, b, c):
    """Both roots (with multiplicity), found by solving the equation itself."""
    rs = roots(Poly(a * X**2 + b * X + c, X))
    out = [r for r, m in rs.items() for _ in range(m)]
    assert len(out) == 2, out
    return out


def _one_k(eq, a):
    """The single value of k solving eq, at which the equation stays quadratic."""
    sols = [s for s in solve(eq, K) if simplify(a.subs(K, s)) != 0]
    if len(sols) != 1:
        raise ValueError(f"expected one k, got {sols}")
    return sols[0]


def key(v, p):
    a, b, c = v["a"], v["b"], v["c"]
    ask = _ask(p)
    if ask in ("sum", "prod", "k_sum", "k_prod"):
        r1, r2 = _roots(a, b, c)
        val = simplify(r1 + r2) if ask in ("sum", "k_sum") else simplify(r1 * r2)
        if ask in ("sum", "prod"):
            return val
        return _one_k(val - v["t"], a)
    if ask == "other_prod":
        r = v["r"]
        k = _one_k(a * r**2 + b * r + c, a)  # r satisfies the equation
        rs = _roots(a.subs(K, k), b.subs(K, k), c.subs(K, k))
        rs.remove(r)
        return simplify(rs[0])
    if ask == "roots1":
        return FiniteSet(*[simplify(s) for s in solve(a * X**2 + b * X + c, X)])
    raise ValueError(ask)


def _from_rules(v, p, S, P, abc=None):
    """Answers the question with the given sum rule S(a, b, c) and product rule P(a, b, c)."""
    a, b, c = abc or (v["a"], v["b"], v["c"])
    ask = _ask(p)
    if ask == "sum":
        return simplify(S(a, b, c))
    if ask == "prod":
        return simplify(P(a, b, c))
    if ask == "k_sum":
        return _one_k(S(a, b, c) - v["t"], a)
    if ask == "k_prod":
        return _one_k(P(a, b, c) - v["t"], a)
    if ask == "other_prod":
        if K in P(a, b, c).free_symbols:
            raise ValueError("the product rule needs k")
        return simplify(P(a, b, c) / v["r"])
    if ask == "roots1":
        return FiniteSet(1, simplify(P(a, b, c)))  # x = 1 is a root; the other is product / 1
    raise ValueError(ask)


def _sum(a, b, c):
    return -b / a


def _prod(a, b, c):
    return c / a


def m1(v, p):
    """Drops the minus sign in the sum: alpha + beta = b/a."""
    if _ask(p) not in ("sum", "k_sum"):
        raise ValueError("only the sum")
    return _from_rules(v, p, lambda a, b, c: b / a, _prod)


def m2(v, p):
    """Forgets to divide by a: sum = -b, product = c."""
    return _from_rules(v, p, lambda a, b, c: -b, lambda a, b, c: c)


def m3(v, p):
    """Reads a, b, c in the printed order of the terms, not by the powers of x."""
    if p.get("printed") != "cba":
        raise ValueError("only when the equation is printed constant first")
    return _from_rules(v, p, _sum, _prod, abc=(v["c"], v["b"], v["a"]))


def m4(v, p):
    """Puts a minus sign on the product too: alpha * beta = -c/a."""
    if _ask(p) not in ("prod", "k_prod", "other_prod", "roots1"):
        raise ValueError("only the product")
    return _from_rules(v, p, _sum, lambda a, b, c: -c / a)


def m5(v, p):
    """Takes the other root to be c/a whatever the known root is (the x = 1 shortcut, misused)."""
    if _ask(p) != "other_prod":
        raise ValueError("only with one root given")
    return simplify(v["c"] / v["a"])


def m6(v, p):
    """Swaps the two relations: sum = c/a, product = -b/a."""
    return _from_rules(v, p, _prod, _sum)


MODELS = {"key": key, "C03-M1": m1, "C03-M2": m2, "C03-M3": m3, "C03-M4": m4, "C03-M5": m5, "C03-M6": m6}
