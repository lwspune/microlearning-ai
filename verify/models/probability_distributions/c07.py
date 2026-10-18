"""C07 Expected value of a continuous random variable: answer models (the key, and one per misconception).

Every item gives a p.d.f. f(x) on a < x < b (and 0 otherwise):
  inputs  f (an expression in x), a, b; f, a or b may hold one unknown constant,
  params  find: "E" (asks E(X)) or "Var" (asks Var(X));
          unknown: the constant's name ("k", "c"), or absent when f is fully given.
The constant is fixed by the total-area condition, integral of f over (a, b) = 1 (its one positive
real root). The key is E(X) = integral of x f, or Var(X) = integral of x^2 f - E(X)^2, each worked
with sympy's integrate and checked against a numerical quadrature; f is checked to be a p.d.f.
(non-negative on the support, area 1). Each wrong model is refused where it is undefined or
numerically equal to the key.
"""
from sympy import Integral, integrate, simplify, solve

TOL = 1e-9


def _x(v):
    """The symbol called x (the verifier parses x as real, draft_items as plain)."""
    for e in v.values():
        for s in getattr(e, "free_symbols", ()):
            if s.name == "x":
                return s
    raise ValueError("no x in the inputs")


def _num(e):
    z = complex(e.evalf(30))
    if z != z or abs(z.imag) > 1e-12 or abs(z.real) == float("inf"):
        raise ValueError(f"not a finite real number: {e}")
    return z.real


def _const(v, p):
    """The unknown constant's symbol, or None."""
    name = p.get("unknown")
    if not name:
        return None
    for e in (v["f"], v["a"], v["b"]):
        for s in e.free_symbols:
            if s.name == name:
                return s
    raise ValueError(f"unknown {name} not in the inputs")


def _solved(v, p):
    """(x, f, a, b) with the constant fixed by the total-area condition."""
    x = _x(v)
    f, a, b = v["f"], v["a"], v["b"]
    c = _const(v, p)
    if c is not None:
        roots = [r for r in solve(integrate(f, (x, a, b)) - 1, c) if r.is_real and _num(r) > 0]
        if len(roots) != 1:
            raise ValueError(f"expected one positive value of {c}, got {roots}")
        f, a, b = (simplify(e.subs(c, roots[0])) for e in (f, a, b))
    return x, f, a, b


def _check_pdf(x, f, a, b):
    if abs(_num(Integral(f, (x, a, b))) - 1) > TOL:
        raise ValueError("f does not have total area 1")
    lo, hi = _num(a), _num(b)
    for i in range(1, 200):
        if _num(f.subs(x, lo + (hi - lo) * i / 200)) < 0:
            raise ValueError("f is negative somewhere on the support")


def _moment(x, f, a, b, n):
    """integral of x^n f over (a, b), exact, checked numerically."""
    exact = simplify(integrate(x**n * f, (x, a, b)))
    numeric = _num(Integral(x**n * f, (x, a, b)))
    if abs(_num(exact) - numeric) > TOL * max(1, abs(numeric)):
        raise ValueError(f"integral {exact} differs from quadrature {numeric}")
    return exact


def _right(v, p):
    x, f, a, b = _solved(v, p)
    _check_pdf(x, f, a, b)
    E = _moment(x, f, a, b, 1)
    if not (_num(a) < _num(E) < _num(b)):
        raise ValueError("the mean lies outside the support")
    if p["find"] == "E":
        return E
    var = simplify(_moment(x, f, a, b, 2) - E**2)
    if _num(var) <= 0:
        raise ValueError("variance is not positive")
    return var


def _wrong(val, v, p):
    val = simplify(val)
    if abs(_num(val) - _num(_right(v, p))) < TOL:
        raise ValueError("this model gives the key here")
    return val


def key(v, p):
    return _right(v, p)


def m1(v, p):
    """Takes the mean to be the midpoint of the interval, (a + b)/2 (and uses it in the variance)."""
    x, f, a, b = _solved(v, p)
    mid = (a + b) / 2
    if p["find"] == "E":
        return _wrong(mid, v, p)
    return _wrong(_moment(x, f, a, b, 2) - mid**2, v, p)


def m2(v, p):
    """Variance: stops at E(X^2), forgetting to subtract [E(X)]^2."""
    if p["find"] != "Var":
        raise ValueError("variance items only")
    x, f, a, b = _solved(v, p)
    return _wrong(_moment(x, f, a, b, 2), v, p)


def m3(v, p):
    """Variance: subtracts E(X), not its square: E(X^2) - E(X)."""
    if p["find"] != "Var":
        raise ValueError("variance items only")
    x, f, a, b = _solved(v, p)
    return _wrong(_moment(x, f, a, b, 2) - _moment(x, f, a, b, 1), v, p)


def m4(v, p):
    """Skips finding the constant: works with it as 1."""
    c = _const(v, p)
    if c is None:
        raise ValueError("no constant to find")
    if c in v["a"].free_symbols | v["b"].free_symbols:
        raise ValueError("the constant is a limit, not a multiplier")
    x = _x(v)
    f, a, b = v["f"].subs(c, 1), v["a"], v["b"]
    E = simplify(integrate(x * f, (x, a, b)))
    if p["find"] == "E":
        return _wrong(E, v, p)
    return _wrong(integrate(x**2 * f, (x, a, b)) - E**2, v, p)


def m5(v, p):
    """Mean: integrates x^2 f(x), giving E(X^2) in place of E(X)."""
    if p["find"] != "E":
        raise ValueError("mean items only")
    x, f, a, b = _solved(v, p)
    return _wrong(_moment(x, f, a, b, 2), v, p)


def m6(v, p):
    """Mean: leaves out f(x) and integrates x alone over the interval."""
    if p["find"] != "E":
        raise ValueError("mean items only")
    x, f, a, b = _solved(v, p)
    return _wrong(integrate(x, (x, a, b)), v, p)


MODELS = {"key": key, "C07-M1": m1, "C07-M2": m2, "C07-M3": m3, "C07-M4": m4, "C07-M5": m5, "C07-M6": m6}
