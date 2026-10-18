"""C03 Integration by substitution: answer models (the key, and one per misconception).

Every item's integrand has the form  f = m * h(u) * u'(x) / k,  where
  u  the inner function (put t = u),
  h  the outer function, an expression in t (`h`),
  k  the constant with dt = k * (the factor present) dx,
  m  a constant multiplier (default 1),
and `f` is the integrand exactly as the stem prints it. Optional input `den` is
the stem's denominator (for C03-M3).
Each model returns an antiderivative plus the constant c. The key is (m/k) H(u)
with H = sympy's antiderivative of h (log t taken as log|t|), and it must pass
the definition: d/dx key = f, checked numerically at sample points (and every
model must fail that check, so no distractor is secretly right).
"""
from sympy import Abs, Pow, Rational, Symbol, diff, integrate, log, simplify

T = Symbol("t")
C = Symbol("c")
_SAMPLES = [Rational(1, 7), Rational(2, 5), Rational(3, 4), Rational(6, 5), Rational(-1, 3), Rational(-3, 5), Rational(17, 10)]


def _x(v):
    """The symbol called x (the verifier parses x as real, draft_items as plain)."""
    for e in v.values():
        for s in getattr(e, "free_symbols", ()):
            if s.name == "x":
                return s
    raise ValueError("no x in the inputs")


def _H(v):
    """An antiderivative of the outer function h(t), with log t written log|t|."""
    H = integrate(v["h"], T)
    return H.replace(log, lambda a: log(Abs(a)))


def _parts(v):
    x = _x(v)
    u, k = v["u"], v["k"]
    m = v.get("m", 1)
    return x, u, k, m, _H(v).subs(T, u)


def _derivative_matches(F, f, x):
    """True when d/dx F equals f at every sample point where both are real and finite."""
    d = diff(F.replace(Abs, lambda a: a), x)  # d/dx log|a| = a'/a on both sides of 0
    checked = 0
    for s in _SAMPLES:
        try:
            a, b = complex(d.subs(x, s).evalf()), complex(f.subs(x, s).evalf())
        except (TypeError, ValueError):
            continue
        if abs(a.imag) > 1e-9 or abs(b.imag) > 1e-9:
            continue
        checked += 1
        if abs(a - b) > 1e-7 * max(1, abs(b)):
            return False
    if checked < 3:
        raise ValueError("too few sample points in the domain")
    return True


def _wrong(F, v):
    """A misconception's answer, refused if it is actually right."""
    x = _x(v)
    if _derivative_matches(F, v["f"], x):
        raise ValueError("this model gives a correct antiderivative here")
    return F + C


def key(v, p):
    x, u, k, m, H = _parts(v)
    F = m / k * H
    if not _derivative_matches(F, v["f"], x):
        raise ValueError("the key's derivative is not the integrand: check the inputs")
    return F + C


def m1(v, p):
    """Drops the 1/k: treats the factor present as the whole of dt."""
    x, u, k, m, H = _parts(v)
    if k == 1:
        raise ValueError("k = 1: same as the key")
    return _wrong(m * H, v)


def m2(v, p):
    """Multiplies by k instead of dividing (factor dx = k dt)."""
    x, u, k, m, H = _parts(v)
    if abs(k) == 1:
        raise ValueError("|k| = 1: k and 1/k agree")
    return _wrong(m * k * H, v)


def m3(v, p):
    """Any fraction integrates to log|denominator|."""
    if "den" not in v:
        raise ValueError("no denominator given")
    return _wrong(log(Abs(v["den"])), v)


def m4(v, p):
    """Power rule divides by the old power: t^n -> t^(n+1)/n."""
    x, u, k, m, H = _parts(v)
    h = v["h"]
    if not (isinstance(h, Pow) and h.base == T) or h.exp in (0, -1):
        raise ValueError("outer function is not a power t^n with n != 0, -1")
    n = h.exp
    return _wrong(m / k * u ** (n + 1) / n, v)


def m5(v, p):
    """Keeps the leftover x-factor (u'/k) outside as if it were a constant."""
    x, u, k, m, H = _parts(v)
    lead = simplify(diff(u, x) / k)
    if not lead.has(x):
        raise ValueError("u' is constant: nothing left over")
    return _wrong(m * lead * H, v)


def m6(v, p):
    """Drops the minus sign of dt = k(...)dx when k < 0."""
    x, u, k, m, H = _parts(v)
    if not k < 0:
        raise ValueError("k > 0: no sign to drop")
    return _wrong(-m / k * H, v)


MODELS = {"key": key, "C03-M1": m1, "C03-M2": m2, "C03-M3": m3, "C03-M4": m4, "C03-M5": m5, "C03-M6": m6}
