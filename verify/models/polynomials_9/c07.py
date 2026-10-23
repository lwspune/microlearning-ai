"""C07 Value of a polynomial: answer models (the key, and one per misconception).

A question gives a polynomial and where to evaluate it:
  poly:    sympy string, e.g. "2*x - 2*x**3 + 7"  (x and y are real symbols, other letters plain)
  var:     the polynomial's variable, e.g. "x"
  at:      "2" or "a|-a"   (several values are added with signs)
  signs:   optional, one sign per value, e.g. "++" (default all +)
  unknown, target: optional; the polynomial has an unknown coefficient, and the answer is the unknown
           for which the (signed) value equals target, e.g. unknown="m", target="7" for p(-1) = 7.
"""
from sympy import Eq, Integer, Poly, Symbol, expand, solve, sympify

_LOC = {"x": Symbol("x", real=True), "y": Symbol("y", real=True)}


def _s(t):
    return sympify(t, locals=_LOC)


def _terms(p):
    """[(coefficient, power), ...]; a coefficient may hold the unknown."""
    return [(c, n[0]) for n, c in Poly(_s(p["poly"]), _s(p["var"])).terms()]


def _points(p):
    ats = [_s(a) for a in p["at"].split("|")]
    signs = [1 if s == "+" else -1 for s in p.get("signs", "+" * len(ats))]
    assert len(signs) == len(ats), "one sign per value"
    return list(zip(signs, ats))


def _neg(a):
    return a.could_extract_minus_sign()


def _right(terms, a):
    return sum((c * a**n for c, n in terms), Integer(0))


def _total(p, value_at):
    terms = _terms(p)
    return expand(sum((s * value_at(terms, a) for s, a in _points(p)), Integer(0)))


def _answer(p, value_at):
    """The value; or, with an unknown, the unknown that makes the value equal the target."""
    total = _total(p, value_at)
    if "unknown" not in p:
        return total
    sol = solve(Eq(total, _s(p["target"])), Symbol(p["unknown"]))
    if len(sol) != 1:
        raise ValueError("no single value of the unknown")
    return sol[0]


def _wrong(p, value_at):
    out = _answer(p, value_at)
    if expand(out - key({}, p)) == 0:
        raise ValueError("this rule gives the key here")
    return out


def key(v, p):
    """Straight from the definition: put the number in place of the variable in every term."""
    return _answer(p, _right)


def m1(v, p):
    """Keeps the minus sign outside a power of a negative number: (-2)^2 = -4, (-a)^2 = -a^2."""
    if not any(_neg(a) for _, a in _points(p)):
        raise ValueError("no negative value is substituted")

    def at(terms, a):
        if not _neg(a):
            return _right(terms, a)
        return sum((c * -((-a) ** n) if n >= 1 else c for c, n in terms), Integer(0))

    return _wrong(p, at)


def m2(v, p):
    """Reads a power as multiplication by the index: x^3 at x = 2 worked as 3 x 2 = 6."""

    def at(terms, a):
        return sum((c * n * a if n >= 2 else c * a**n for c, n in terms), Integer(0))

    return _wrong(p, at)


def m3(v, p):
    """Raises the coefficient to the power too: 2x^2 at x = 2 worked as (2 x 2)^2 = 16."""

    def at(terms, a):
        out = Integer(0)
        for c, n in terms:
            if n >= 2 and c.free_symbols:
                raise ValueError("modelled for numeric coefficients only")
            out += (c * a) ** n if n >= 1 else c
        return out

    return _wrong(p, at)


def m4(v, p):
    """Thinks p(-a) is just -p(a): works out the value at a and changes its sign."""
    if not any(_neg(a) for _, a in _points(p)):
        raise ValueError("no negative value is substituted")

    def at(terms, a):
        return -_right(terms, -a) if _neg(a) else _right(terms, a)

    return _wrong(p, at)


def m5(v, p):
    """Leaves out the constant term, as it has no variable to replace."""
    if not any(n == 0 for _, n in _terms(p)):
        raise ValueError("no constant term")

    def at(terms, a):
        return sum((c * a**n for c, n in terms if n >= 1), Integer(0))

    return _wrong(p, at)


def m6(v, p):
    """Finding an unknown: moves the number across '=' without changing its sign (8 + a = 10 gives a = 18)."""
    if "unknown" not in p:
        raise ValueError("no unknown coefficient")
    u = Symbol(p["unknown"])
    total = _total(p, _right)
    alpha, beta = total.coeff(u), total.subs(u, 0)
    if beta == 0 or alpha.free_symbols or total != expand(alpha * u + beta):
        raise ValueError("needs a value of the form alpha*u + beta with beta != 0")
    out = (_s(p["target"]) + beta) / alpha
    if expand(out - key(v, p)) == 0:
        raise ValueError("this rule gives the key here")
    return out


MODELS = {"key": key, "C07-M1": m1, "C07-M2": m2, "C07-M3": m3, "C07-M4": m4, "C07-M5": m5, "C07-M6": m6}
