"""C06 Relations between the roots: answer models (the key, and one per misconception).

The item gives the quadratic a x^2 + b x + c = 0 as v["a"], v["b"], v["c"]: expressions in one
parameter, named by p["param"] (default "k"). p["rel"] is the condition on the roots:
  times   one root is v["R"] times the other
  ratio   the roots are in the ratio v["m"] : v["n"]
  diff    the roots differ by v["d"]
  sqdiff  the roots alpha > beta have alpha^2 - beta^2 = v["s"]
  recip   the roots are real and one is the reciprocal of the other
  opp     the roots are real, equal in size and opposite in sign
The answer is the set of parameter values for which the condition holds (a FiniteSet), or the
one value itself when p["one"] is "1".
"""
from sympy import FiniteSet, S, Symbol, im, simplify, solve

ALPHA, BETA = Symbol("alpha"), Symbol("beta")


def _param(p):
    return Symbol(p.get("param", "k"))


def _real(x):
    return simplify(im(x)) == 0


def _report(vals, p):
    vals = FiniteSet(*[simplify(x) for x in vals])
    if p.get("one") == "1":
        if len(vals) != 1:
            raise ValueError(f"expected one value, got {vals}")
        return next(iter(vals))
    return vals


def _quadratic(v, p, k0):
    """a(k0) != 0, so the equation is a quadratic at this value."""
    return simplify(v["a"].subs(_param(p), k0)) != 0


def key(v, p):
    """From the definition of a root: both roots satisfy the equation; solve for the parameter."""
    k = _param(p)
    a, b, c = v["a"], v["b"], v["c"]
    f = lambda x: a * x**2 + b * x + c
    rel = p["rel"]
    if rel == "sqdiff":
        eqs = [f(ALPHA), f(BETA), ALPHA**2 - BETA**2 - v["s"]]
        sols = solve(eqs, [k, ALPHA, BETA], dict=True)
        out = []
        for s in sols:
            al, be, k0 = s[ALPHA], s[BETA], s[k]
            if all(_real(x) for x in (al, be, k0)) and simplify(al - be) > 0 and _quadratic(v, p, k0):
                out.append(k0)
        return _report(out, p)
    roots = {
        "times": (ALPHA, v.get("R", S(0)) * ALPHA),
        "ratio": (v.get("m", S(0)) * ALPHA, v.get("n", S(0)) * ALPHA),
        "diff": (ALPHA, ALPHA + v.get("d", S(0))),
        "recip": (ALPHA, 1 / ALPHA),
        "opp": (ALPHA, -ALPHA),
    }[rel]
    eqs = [simplify(f(r) * (ALPHA**2 if rel == "recip" else 1)) for r in roots]
    sols = solve(eqs, [k, ALPHA], dict=True)
    out = []
    for s in sols:
        k0, al = s[k], s[ALPHA]
        r1, r2 = (simplify(r.subs(ALPHA, al)) for r in roots)
        if not (_real(k0) and _real(al)) or al == 0 or simplify(r1 - r2) == 0:
            continue
        if _quadratic(v, p, k0):
            out.append(k0)
    return _report(out, p)


def _vieta(v, p, *, divide=True, psign=1, coef=4, dsq=True, check=True):
    """The taught method: sum and product of the roots, the condition as an equation in them.

    divide=False forgets to divide by a; psign=-1 gives the product a minus sign; coef=2 takes
    (alpha - beta)^2 as (sum)^2 - 2(product); dsq=False forgets to square the difference;
    check=False skips the check that the roots are real.
    """
    k = _param(p)
    a, b, c = v["a"], v["b"], v["c"]
    A = a if divide else 1
    Sm, Pr = -b / A, psign * c / A
    rel = p["rel"]
    if rel == "times":
        R = v["R"]
        eq = R * Sm**2 - (R + 1) ** 2 * Pr
    elif rel == "ratio":
        m, n = v["m"], v["n"]
        eq = m * n * Sm**2 - (m + n) ** 2 * Pr
    elif rel == "diff":
        d = v["d"]
        eq = Sm**2 - coef * Pr - (d**2 if dsq else d)
    elif rel == "sqdiff":
        d = v["s"] / Sm  # alpha - beta = (alpha^2 - beta^2) / (alpha + beta)
        eq = Sm**2 - coef * Pr - (d**2 if dsq else d)
    elif rel == "recip":
        eq = Pr - 1
    elif rel == "opp":
        eq = Sm
    else:
        raise ValueError(rel)
    out = []
    for k0 in solve(simplify(eq), k):
        if not _real(k0) or not _quadratic(v, p, k0):
            continue
        if rel == "sqdiff":
            s0 = simplify(Sm.subs(k, k0))
            if s0 == 0 or simplify(v["s"] / s0) <= 0:
                continue
        if check and rel == "recip" and simplify((b**2 - 4 * a * c).subs(k, k0)) < 0:
            continue  # real roots need b^2 - 4ac >= 0
        if check and rel == "opp" and simplify(Pr.subs(k, k0)) >= 0:
            continue  # roots alpha, -alpha have product -alpha^2 < 0
        out.append(k0)
    return _report(out, p)


def _only(p, rels):
    if p["rel"] not in rels:
        raise ValueError(f"only for {rels}")


def m1(v, p):
    """Forgets to divide by a: takes the sum of the roots as -b and the product as c."""
    return _vieta(v, p, divide=False)


def m2(v, p):
    """Takes (alpha - beta)^2 as (alpha + beta)^2 - 2 alpha beta, mixing it up with alpha^2 + beta^2."""
    _only(p, ("diff", "sqdiff"))
    return _vieta(v, p, coef=2)


def m3(v, p):
    """Sets (alpha - beta)^2 equal to the difference d instead of d^2."""
    _only(p, ("diff", "sqdiff"))
    return _vieta(v, p, dsq=False)


def m4(v, p):
    """Takes the ratio's own numbers as the roots: roots in ratio m : n (or R : 1) are m and n."""
    _only(p, ("times", "ratio"))
    k = _param(p)
    a, b, c = v["a"], v["b"], v["c"]
    m, n = (v["R"], 1) if p["rel"] == "times" else (v["m"], v["n"])
    if k in c.free_symbols:
        eq = c / a - m * n  # the product of the roots
    elif k in b.free_symbols:
        eq = -b / a - (m + n)  # the sum of the roots
    else:
        raise ValueError("parameter only in a")
    return _report([k0 for k0 in solve(simplify(eq), k) if _real(k0) and _quadratic(v, p, k0)], p)


def m5(v, p):
    """Gives the product a minus sign too: alpha beta = -c/a, copying the sign of the sum."""
    return _vieta(v, p, psign=-1)


def m6(v, p):
    """Turns the condition into an equation but never checks that the roots are real."""
    _only(p, ("recip", "opp"))
    return _vieta(v, p, check=False)


MODELS = {"key": key, "C06-M1": m1, "C06-M2": m2, "C06-M3": m3, "C06-M4": m4, "C06-M5": m5, "C06-M6": m6}
