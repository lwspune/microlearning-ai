"""C11 Integration by partial fractions: answer models (the key, and one per misconception).

Inputs: N, D (the integrand N/D, D as the stem prints it, x real).
Params: fac = D written as a product of its factors, the way the book factorises it, e.g.
"(3*x - 7)*(2*x + 9)" or "(4 + x)*(1 - x)" (its product must equal D); every factor is
linear, a repeated one is written "(x + 1)**2".
ask = "logs": the tuple of coefficients of log|x - r| for the roots r listed in roots
(a comma-separated string, in the stem's order); these coefficients do not depend on how a
factor is scaled (log|3x - 7| and log|x - 7/3| differ by a constant).
ask = "int": the whole antiderivative (no + c), as  poly + sum k log|factor| + sum m/(factor).

The key comes from sympy's apart() and is checked against the definition: its derivative
must equal N/D. Each wrong answer applies one wrong rule, then integrates the way the student
would. parts() gives every answer in one structured form so the spec writes option text from
the same numbers it checks.
"""
from sympy import Abs, Poly, Rational, Symbol, Tuple, apart, cancel, diff, div, factor_list, integrate, log, simplify, sympify

X = Symbol("x", real=True)


def _factors(p):
    """[(linear factor as written, power)] from p["fac"]."""
    fac = sympify(p["fac"], locals={"x": X})
    out = []
    for f in (fac.args if fac.is_Mul else [fac]):
        base, e = (f.args[0], int(f.args[1])) if f.is_Pow else (f, 1)
        if base.is_number:
            continue
        out.append((base, e))
    return out


def _split(v, p):
    """(quotient, remainder, the factors, the constant k with D = k * product of factors)."""
    N, D = v["N"], v["D"]
    q, r = div(Poly(N, X), Poly(D, X))
    facs = _factors(p)
    prod = 1
    for f, e in facs:
        prod *= f**e
    k = cancel(D / prod)
    assert k.is_number, (D, prod)
    return q.as_expr(), r.as_expr(), facs, k


def _root(f):
    a, b = Poly(f, X).all_coeffs()
    return -b / a, a  # the root, and the factor's x coefficient


def _coeffs(v, p, rule="right"):
    """Partial fraction constants for the remainder over D, piece by piece:
    {(factor, power): constant} for pieces constant/factor**power, by the given rule."""
    q, r, facs, k = _split(v, p)
    out = {}
    if rule in ("right", "monic"):
        # M6 ("monic"): the leading coefficient of D is dropped when factorising
        den = v["D"] / Poly(v["D"], X).LC() if rule == "monic" else v["D"]
        expr = apart(r / den, X)
        for f, e in facs:
            for j in range(1, e + 1):
                out[(f, j)] = _coef_of(expr, f, j)
        return out
    # rule "flip" (M4): put x = -root instead of x = root in the cover-up
    D = k * _prod(facs)
    for f, e in facs:
        r0, a = _root(f)
        rest = cancel(D / f**e)
        if rest.subs(X, -r0) == 0:
            raise ValueError("x = -root is another root")
        out[(f, e)] = cancel(r.subs(X, -r0) / rest.subs(X, -r0))
    # pieces of lower power: compare the top coefficient of the remainder (the right way)
    lower = [(f, j) for f, e in facs for j in range(1, e)]
    if len(lower) > 1:
        raise ValueError("one lower piece only")
    if lower:
        n = Poly(D, X).degree()
        top = Poly(r, X).coeff_monomial(X ** (n - 1)) / Poly(D, X).LC()
        # sum over linear-power pieces of constant / (x coefficient) equals top
        s = sum(c / _root(f)[1] for (f, j), c in out.items() if j == 1)
        f, j = lower[0]
        out[(f, j)] = (top - s) * _root(f)[1]
    return out


def _prod(facs):
    out = 1
    for f, e in facs:
        out *= f**e
    return out


def _coef_of(expr, f, j):
    """The constant c in the term c/f**j of the partial fraction sum expr."""
    r0, a = _root(f)
    for t in (expr.args if expr.is_Add else [expr]):
        n, d = t.as_numer_denom()
        if not n.is_number:
            continue
        dp = Poly(d, X)
        if dp.degree() == j and Poly(f**j, X).monic() == dp.monic():
            return cancel(t * f**j)
    return Rational(0)


def parts(v, p, model):
    """(poly, logs, recips): the answer is poly + sum k*log|f| over logs + sum m/f over recips."""
    q, r, facs, k = _split(v, p)
    rule = {"C11-M4": "flip", "C11-M6": "monic"}.get(model, "right")
    c = _coeffs(v, p, rule)
    poly = 0 if model == "C11-M1" else integrate(q, X)
    logs, recips = [], []
    for f, e in facs:
        a = _root(f)[1]
        lk = 0
        for j in range(1, e + 1):
            cj = c[(f, j)]
            if j == 1:
                if model == "C11-M5" and e > 1:
                    continue  # the 1/(x - a) piece of a repeated factor is left out
                lk += cj if model == "C11-M2" else cj / a
            elif j == 2:
                if model == "C11-M3":
                    lk += cj / a  # integrated like 1/f, to a log
                else:
                    recips.append((-cj / a, f))
            else:
                raise ValueError("power > 2")
        if lk != 0:
            logs.append((lk, f))
    return poly, logs, recips


def _value(v, p, model):
    poly, logs, recips = parts(v, p, model)
    if p["ask"] == "logs":
        roots = [sympify(s) for s in p["roots"].split(",")]
        got = {_root(f)[0]: k for k, f in logs}
        return Tuple(*[got.get(r0, Rational(0)) for r0 in roots])
    return poly + sum(k * log(Abs(f)) for k, f in logs) + sum(m / f for m, f in recips)


def _real(v):
    """The inputs with x as the real symbol X (callers may parse x without assumptions)."""
    return {k: sympify(e).subs({s: X for s in sympify(e).free_symbols if s.name == "x"}) for k, e in v.items()}


def key(v, p):
    v = _real(v)
    out = _value(v, p, "key")
    # the definition: d/dx of the antiderivative is the integrand (|f| -> f: same derivative)
    full = _value(v, {**p, "ask": "int"}, "key").replace(Abs, lambda a: a)
    assert simplify(diff(full, X) - v["N"] / v["D"]) == 0
    return out


def _model(name):
    def m(v, p):
        v = _real(v)
        out, k = _value(v, p, name), key(v, p)
        same = out == k if isinstance(out, Tuple) else simplify(out - k) == 0
        if same:
            raise ValueError("gives the key here")
        return out
    return m


MODELS = {"key": key, **{f"C11-M{i}": _model(f"C11-M{i}") for i in range(1, 7)}}
