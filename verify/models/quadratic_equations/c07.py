"""C07 Common roots: answer models (the key, and one per misconception).

p["ask"] picks the question type:
  param  a1 x^2 + b1 x + c1 = 0 and a2 x^2 + b2 x + c2 = 0 (coefficients v["a1"] .. v["c2"], in a
         parameter k) have a common real root -> the value(s) of k. p["cond"] is the stem's
         condition: "pos" (k > 0), "neg" (k < 0) or "nz" (the common root is non-zero).
  both   A x^2 + p x + q = 0 has both roots of a2 x^2 + b2 x + c2 = 0 (v["A"], v["a2"], v["b2"],
         v["c2"] numbers) -> the pair (p, q), or p + q when p["out"] == "sum".
A single value is returned as a number, several as a FiniteSet.
"""
from sympy import FiniteSet, Poly, Rational, Symbol, Tuple, gcd, real_roots, resultant, solve, sympify

X = Symbol("x")


def _ask(p):
    return p.get("ask", "param")


def _k(v):
    """The parameter: the one free symbol in the coefficients."""
    syms = set().union(*(sympify(v[n]).free_symbols for n in ("a1", "b1", "c1", "a2", "b2", "c2")))
    assert len(syms) == 1, f"expected one parameter, got {syms}"
    return syms.pop()


def _quads(v):
    k = _k(v)
    f = v["a1"] * X**2 + v["b1"] * X + v["c1"]
    g = v["a2"] * X**2 + v["b2"] * X + v["c2"]
    return k, f, g


def _ok(k, val, root, p):
    """The stem's condition on k (or on the common root)."""
    c = p.get("cond")
    if c == "pos":
        return val > 0
    if c == "neg":
        return val < 0
    if c == "nz":
        return root != 0
    return True


def _pack(vals):
    vals = sorted(set(vals))
    if not vals:
        raise ValueError("no value of k")
    return vals[0] if len(vals) == 1 else FiniteSet(*vals)


def _common_ks(v, p, use_cond=True):
    """From the definition: every real k for which both quadratics share a real root."""
    k, f, g = _quads(v)
    out = []
    for s in solve(resultant(Poly(f, X), Poly(g, X)), k):
        if not s.is_real:
            continue
        fs, gs = Poly(f.subs(k, s), X), Poly(g.subs(k, s), X)
        if fs.degree() != 2 or gs.degree() != 2:
            continue
        h = gcd(fs, gs)
        if h.degree() < 1:
            continue
        shared = [r for r in real_roots(h)]
        if not shared:
            continue
        if not use_cond or any(_ok(k, s, r, p) for r in shared):
            out.append(s)
    return out


def _from_root(v, p, alpha):
    """A student's common root alpha(k), substituted into the first equation and solved for k."""
    k, f, _ = _quads(v)
    out = []
    for s in solve(f.subs(X, alpha), k):
        if s.is_real and _ok(k, s, alpha.subs(k, s), p):
            out.append(s)
    return _pack(out)


def _both(v, p, coeffs):
    pq = Tuple(*coeffs)
    return pq[0] + pq[1] if p.get("out") == "sum" else pq


def key(v, p):
    a = _ask(p)
    if a == "param":
        return _pack(_common_ks(v, p))
    if a == "both":
        # From the definition: A (x - r1)(x - r2) with r1, r2 the roots of the second equation.
        rs = Poly(v["a2"] * X**2 + v["b2"] * X + v["c2"], X).all_roots()
        poly = Poly(v["A"] * (X - rs[0]) * (X - rs[1]), X)
        return _both(v, p, (poly.coeff_monomial(X).simplify(), poly.coeff_monomial(1).simplify()))
    raise ValueError(a)


def m1(v, p):
    """Both roots common read as identical coefficients: p = b2, q = c2."""
    if _ask(p) != "both":
        raise ValueError("only when both roots are common")
    return _both(v, p, (v["b2"], v["c2"]))


def m2(v, p):
    """Scales the second equation by the inverse ratio a2/A instead of A/a2."""
    if _ask(p) != "both":
        raise ValueError("only when both roots are common")
    r = Rational(v["a2"]) / v["A"]
    if r == 1:
        raise ValueError("same leading coefficient")
    return _both(v, p, (r * v["b2"], r * v["c2"]))


def m3(v, p):
    """Finds the shared sum and product correctly, then takes p = A(sum) instead of -A(sum)."""
    if _ask(p) != "both":
        raise ValueError("only when both roots are common")
    s, pr = -Rational(v["b2"]) / v["a2"], Rational(v["c2"]) / v["a2"]
    return _both(v, p, (v["A"] * s, v["A"] * pr))


def m4(v, p):
    """Sign slip solving the linear equation a2 f - a1 g = 0: alpha = +w/u instead of -w/u."""
    if _ask(p) != "param":
        raise ValueError("only for a parameter")
    u = v["a2"] * v["b1"] - v["a1"] * v["b2"]
    w = v["a2"] * v["c1"] - v["a1"] * v["c2"]
    return _from_root(v, p, w / u)


def m5(v, p):
    """Subtracts the equations as if the x^2 terms cancel, though a1 != a2."""
    if _ask(p) != "param":
        raise ValueError("only for a parameter")
    if sympify(v["a1"] - v["a2"]) == 0:
        raise ValueError("the x^2 terms really do cancel")
    return _from_root(v, p, -(v["c1"] - v["c2"]) / (v["b1"] - v["b2"]))


def m6(v, p):
    """Keeps every value of k, ignoring the stem's condition (k > 0, k < 0, a non-zero root)."""
    if _ask(p) != "param" or not p.get("cond"):
        raise ValueError("only when the stem sets a condition")
    return FiniteSet(*sorted(set(_common_ks(v, p, use_cond=False))))


MODELS = {"key": key, "C07-M1": m1, "C07-M2": m2, "C07-M3": m3, "C07-M4": m4, "C07-M5": m5, "C07-M6": m6}
