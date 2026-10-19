"""C01 Solving a quadratic equation: answer models (the key, and one per misconception).

Every item prints an equation lhs = rhs in x (v["lhs"], v["rhs"]); p["ask"] picks the question:
  roots  -> the set of real roots
  root   one root v["r"] is given and the equation has an unknown k in it -> the Tuple (k, other root)
Real roots only (the Complex Numbers chapter covers the rest).
"""
from sympy import FiniteSet, Poly, Symbol, Tuple, expand, solve


def _ask(p):
    return p.get("ask", "roots")


def _x(*es):
    """The symbol named x (the verifier parses it as real, draft_items as plain)."""
    for e in es:
        for s in getattr(e, "free_symbols", ()):
            if s.name == "x":
                return s
    return Symbol("x", real=True)


def _k(*es):
    for e in es:
        for s in getattr(e, "free_symbols", ()):
            if s.name == "k":
                return s
    raise ValueError("no k in the equation")


def _std(v, flip=False):
    """lhs - rhs as a polynomial in x (flip: lhs + rhs, the right side moved without changing sign)."""
    x = _x(v["lhs"], v["rhs"])
    e = expand(v["lhs"] + v["rhs"] if flip else v["lhs"] - v["rhs"])
    return e, x


def _real_roots(e, x):
    """From the definition: the real x that make e zero (sympy's own solver, not the formula)."""
    if Poly(e, x).degree() != 2:
        raise ValueError("not a quadratic")
    roots = [t for t in solve(e, x) if t.is_real]
    if not roots:
        raise ValueError("no real roots")
    return FiniteSet(*roots)


def _lead(e, x):
    return Poly(e, x).all_coeffs()[0]


def _given_root(v, e, x, r):
    """Puts x = r into e (linear in k), solves for k; returns (k, the quadratic with that k)."""
    k = _k(e)
    sols = solve(e.subs(x, r), k)
    if len(sols) != 1:
        raise ValueError("k is not fixed by the root")
    return sols[0], expand(e.subs(k, sols[0]))


def _other(roots, r):
    rest = [t for t in roots if t != r]
    return rest[0] if rest else r


def key(v, p):
    e, x = _std(v)
    if _ask(p) == "roots":
        return _real_roots(e, x)
    if _ask(p) == "root":
        k, q = _given_root(v, e, x, v["r"])
        return Tuple(k, _other(_real_roots(q, x), v["r"]))
    raise ValueError(_ask(p))


def m1(v, p):
    """Zero-product rule with a nonzero right side: (x - p)(x - q) = d gives x - p = d or x - q = d."""
    if _ask(p) != "roots" or v["rhs"] == 0 or _x(v["rhs"]) in v["rhs"].free_symbols:
        raise ValueError("only for a product equal to a nonzero number")
    x = _x(v["lhs"])
    bases = []
    for f in v["lhs"].as_ordered_factors():
        base = f.base if f.is_Pow else f
        if Poly(base, x).degree() == 1 and base not in bases:
            bases.append(base)
    if len(bases) < 1 or not v["lhs"].is_Mul and not v["lhs"].is_Pow:
        raise ValueError("left side is not a product")
    return FiniteSet(*[solve(b - v["rhs"], x)[0] for b in bases])


def m2(v, p):
    """Divides both sides by x, so the root 0 is lost."""
    if _ask(p) != "roots":
        raise ValueError("only for roots")
    r = key(v, p)
    if 0 not in r:
        raise ValueError("0 is not a root")
    return r - FiniteSet(0)


def m3(v, p):
    """Takes the number in each bracket as the root: (x - 2)(x + 3) = 0 gives -2 and 3 (the formula with +b)."""
    e, x = _std(v)
    if _ask(p) == "roots":
        return FiniteSet(*[-t for t in _real_roots(e, x)])
    if _ask(p) == "root":
        # 'r is a root, so (x + r) is a factor': substitutes -r, then keeps the root other than -r.
        k, q = _given_root(v, e, x, -v["r"])
        return Tuple(k, _other(_real_roots(q, x), -v["r"]))
    raise ValueError(_ask(p))


def m4(v, p):
    """Forgets the a: divides by 2, not 2a, in the formula (or splits with ac and never divides back by a)."""
    e, x = _std(v)
    if _ask(p) == "roots":
        a = _lead(e, x)
        if a == 1:
            raise ValueError("a = 1")
        return FiniteSet(*[a * t for t in _real_roots(e, x)])
    if _ask(p) == "root":
        k, q = _given_root(v, e, x, v["r"])
        a = _lead(q, x)
        if a == 1:
            raise ValueError("a = 1")
        return Tuple(k, a * _other(_real_roots(q, x), v["r"]))
    raise ValueError(_ask(p))


def m5(v, p):
    """Takes only the + sign of the +/- (only the positive square root)."""
    if _ask(p) != "roots":
        raise ValueError("only for roots")
    r = list(key(v, p))
    if len(r) < 2:
        raise ValueError("equal roots")
    return FiniteSet(max(r))


def m6(v, p):
    """Moves the right side across without changing its sign (reads a, b, c off an unrearranged equation)."""
    if v["rhs"] == 0:
        raise ValueError("already in standard form")
    e, x = _std(v, flip=True)
    if _ask(p) == "roots":
        return _real_roots(e, x)
    if _ask(p) == "root":
        k, q = _given_root(v, e, x, v["r"])
        return Tuple(k, _other(_real_roots(q, x), v["r"]))
    raise ValueError(_ask(p))


MODELS = {"key": key, "C01-M1": m1, "C01-M2": m2, "C01-M3": m3, "C01-M4": m4, "C01-M5": m5, "C01-M6": m6}
