"""C08 Integrals of (px + q) over a quadratic: answer models (the key, and one per misconception).

Inputs: p, q (the numerator px + q) and a, b, c (the quadratic Q = ax^2 + bx + c).
Params: form = "frac" (the integrand is (px + q)/Q) or "root" ((px + q)/sqrt(Q));
ask = "AB" (the constants in px + q = A Q' + B, as the tuple (A, B)) or "int" (the integral).

The key's (A, B) solves the identity px + q = A(2ax + b) + B coefficient by coefficient;
the key's integral is checked against the definition: its derivative must be the integrand.
Each wrong answer applies one wrong rule, then integrates the way the student would.
`parts()` gives each answer as alpha * (log|Q| or sqrt(Q)) + beta * (the standard integral of
1/Q or 1/sqrt(Q)), so the item spec can write option text from the same numbers.
"""
from sympy import Abs, Poly, Rational, Symbol, Tuple, asin, atan, diff, log, simplify, solve, sqrt, symbols

X = Symbol("x", real=True)


def _q(v):
    return v["a"] * X**2 + v["b"] * X + v["c"]


def _std(v, form):
    """The standard integral of 1/Q (frac) or 1/sqrt(Q) (root), by completing the square."""
    a, b, c = v["a"], v["b"], v["c"]
    h = b / (2 * a)
    if form == "frac":
        k = c / a - h**2  # Q = a[(x + h)^2 + k]
        if k > 0:
            return atan((X + h) / sqrt(k)) / (a * sqrt(k))
        m = sqrt(-k)
        return log(Abs((X + h - m) / (X + h + m))) / (2 * m * a)
    if a > 0:  # Q = a[(x + h)^2 + k]
        return log(Abs(X + h + sqrt(_q(v) / a))) / sqrt(a)
    K = (c - a * h**2) / (-a)  # Q = |a|[K - (x + h)^2]
    return asin((X + h) / sqrt(K)) / sqrt(-a)


def _first(form, kind="right"):
    """The integral of Q'/Q or Q'/sqrt(Q) (kind "log": the f'/f rule used on the root)."""
    def f(v):
        Q = _q(v)
        if form == "frac" or kind == "log":
            return log(Abs(Q))
        return 2 * sqrt(Q)
    return f


def _ab(v):
    A, B = symbols("A B")
    ident = Poly(v["p"] * X + v["q"] - A * diff(_q(v), X) - B, X)
    s = solve(ident.all_coeffs(), [A, B], dict=True)[0]
    return s[A], s[B]


def _answer(v, p, A, B, first_kind="right"):
    form = p["form"]
    if p["ask"] == "AB":
        return Tuple(A, B)
    return A * _first(form, first_kind)(v) + B * _std(v, form)


def parts(v, p, model):
    """(alpha, first, beta): the answer is alpha * first + beta * standard integral."""
    form = p["form"]
    A, B, kind = {
        "key": lambda: (*_ab(v), "right"),
        "C08-M1": lambda: (_ab(v)[0], v["q"], "right"),
        "C08-M2": lambda: (v["p"] / v["a"], v["q"] - v["p"] / v["a"] * v["b"], "right"),
        "C08-M3": lambda: (*_ab(v), "log"),
        "C08-M4": lambda: (_ab(v)[0], 0, "right"),
        "C08-M5": lambda: (_ab(v)[0], v["q"] + _ab(v)[0] * v["b"], "right"),
    }[model]()
    first = "log" if form == "frac" or kind == "log" else "root"
    alpha = 2 * A if first == "root" else A
    return alpha, first, B


def key(v, p):
    A, B = _ab(v)
    out = _answer(v, p, A, B)
    if p["ask"] == "int":
        Q = _q(v)
        f = (v["p"] * X + v["q"]) / (Q if p["form"] == "frac" else sqrt(Q))
        g = out.replace(Abs, lambda u: u)  # d/dx log|u| = u'/u on every interval
        assert simplify(diff(g, X) - f) == 0, "key is not an antiderivative"
    return out


def m1(v, p):
    """B = q: the constant is taken as it stands, ignoring the A*b that A*Q' already supplies."""
    if v["b"] == 0:
        raise ValueError("b = 0: B = q is right")
    A, _ = _ab(v)
    return _answer(v, p, A, v["q"])


def m2(v, p):
    """d/dx(ax^2 + bx + c) taken as ax + b (the 2 dropped), so A = p/a and B = q - (p/a)b."""
    A = v["p"] / v["a"]
    return _answer(v, p, A, v["q"] - A * v["b"])


def m3(v, p):
    """Over sqrt(Q), the A part integrated like f'/f: A log|Q| instead of 2A sqrt(Q)."""
    if p["form"] != "root" or p["ask"] != "int":
        raise ValueError("only the integral over sqrt(Q)")
    A, B = _ab(v)
    return _answer(v, p, A, B, "log")


def m4(v, p):
    """The whole numerator treated as a multiple of Q': only the A part, the B part dropped."""
    if p["ask"] != "int":
        raise ValueError("only the integral")
    A, _ = _ab(v)
    return _answer(v, p, A, 0)


def m5(v, p):
    """A*b moved across with the wrong sign: B = q + A*b."""
    A, _ = _ab(v)
    if A * v["b"] == 0:
        raise ValueError("A*b = 0: the sign doesn't show")
    return _answer(v, p, A, v["q"] + A * v["b"])


MODELS = {"key": key, "C08-M1": m1, "C08-M2": m2, "C08-M3": m3, "C08-M4": m4, "C08-M5": m5}
