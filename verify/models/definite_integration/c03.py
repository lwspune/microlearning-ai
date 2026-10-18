"""C03 Substitution in a definite integral: answer models (the key, and one per misconception).

Every item's integrand has the form  f = m * h(u) * u'(x) / k  on  [a, b], where
  u  the substitution u = g(x), an expression in x,
  h  the integrand after the change, an expression in t (t stands for u),
  k  the constant with du = k * (the factor present) dx,
  m  a constant multiplier (default 1),
  a, b  the x-limits as the stem prints them,
and `f` is the integrand as the stem prints it (or after an identity the stem gives).
With H an antiderivative of h, the right value is (m/k) [H(g(b)) - H(g(a))].
The key is checked against sympy's integrate of f over [a, b] (when it finds a closed form)
and against a numerical value of the integral, so the substitution itself is never trusted.
Each wrong model is refused when it is undefined or numerically equal to the key.
"""
from sympy import Abs, Integral, Symbol, integrate, log, simplify

T = Symbol("t")
TOL = 1e-12


def _x(v):
    """The symbol called x (the verifier parses x as real, draft_items as plain)."""
    for e in v.values():
        for s in getattr(e, "free_symbols", ()):
            if s.name == "x":
                return s
    raise ValueError("no x in the inputs")


def _num(e):
    """A finite real number for e, or ValueError."""
    try:
        z = complex(e.evalf(30))
    except (TypeError, ValueError):
        raise ValueError(f"not a number: {e}")
    if z != z or abs(z.real) == float("inf") or abs(z.imag) > TOL:
        raise ValueError(f"not a finite real number: {e}")
    return z.real


def _parts(v):
    x = _x(v)
    g = lambda s: v["u"].subs(x, s)
    H0 = integrate(v["h"], T).replace(log, lambda q: log(Abs(q)))
    H = lambda s: H0.subs(T, s)
    return x, g, H, v["k"], v.get("m", 1), v["a"], v["b"]


def _right(v):
    x, g, H, k, m, a, b = _parts(v)
    return simplify(m / k * (H(g(b)) - H(g(a))))


def _wrong(val, v):
    """A misconception's value, refused if undefined or equal to the key."""
    val = simplify(val)
    if abs(_num(val) - _num(_right(v))) < TOL:
        raise ValueError("this model gives the key here")
    return val


def key(v, p):
    x, g, H, k, m, a, b = _parts(v)
    exact = _right(v)
    numeric = _num(Integral(v["f"], (x, a, b)))
    if abs(_num(exact) - numeric) > 1e-9 * max(1, abs(numeric)):
        raise ValueError(f"substitution value {exact} differs from the integral {numeric}: check the inputs")
    direct = integrate(v["f"], (x, a, b))
    if not direct.has(Integral):
        if abs(_num(direct) - numeric) > 1e-9 * max(1, abs(numeric)):
            raise ValueError(f"sympy's integral {direct} differs from the numerical value {numeric}")
    return exact


def m1(v, p):
    """Keeps the x-limits: puts a and b into the antiderivative in u."""
    x, g, H, k, m, a, b = _parts(v)
    return _wrong(m / k * (H(b) - H(a)), v)


def m2(v, p):
    """u decreases: writes the new limits smallest first without changing the sign."""
    x, g, H, k, m, a, b = _parts(v)
    if not _num(g(a)) > _num(g(b)):
        raise ValueError("u increases: the limits are already in order")
    return _wrong(-_right(v), v)


def m3(v, p):
    """Forgets to divide by the number in du (keeps its sign): factor dx = sign(k) du."""
    x, g, H, k, m, a, b = _parts(v)
    if abs(k) == 1:
        raise ValueError("|k| = 1: nothing to divide by")
    return _wrong(abs(k) * _right(v), v)


def m4(v, p):
    """Changes the limits, then puts x back and uses the new limits as x-values."""
    x, g, H, k, m, a, b = _parts(v)
    return _wrong(m / k * (H(g(g(b))) - H(g(g(a)))), v)


def m5(v, p):
    """Changes the upper limit only; copies the lower x-limit a unchanged."""
    x, g, H, k, m, a, b = _parts(v)
    if simplify(g(a) - a) == 0:
        raise ValueError("g(a) = a: the lower limit really is unchanged")
    return _wrong(m / k * (H(g(b)) - H(a)), v)


MODELS = {"key": key, "C03-M1": m1, "C03-M2": m2, "C03-M3": m3, "C03-M4": m4, "C03-M5": m5}
