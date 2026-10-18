"""C10 Special forms from integration by parts: answer models (the key, and one per misconception).

Every answer is an antiderivative (the option omits "+ c"). Params: form.
  form "ef": the integral of e^(ax) g(x), where g = a f + f' (inputs f, g, optional a, default 1).
  form "root": the integral of sqrt(Q), Q = k - t^2 ("a2-t2"), t^2 + k ("t2+a2") or t^2 - k
    ("t2-a2") by param kind; inputs t (x - h, the completed square's inside) and k (a^2 > 0).
  form "exptrig": the integral of e^(a t) trig(b t) (inputs a, b; params trig "sin" | "cos",
    first "exp" | "trig", the function differentiated first in parts). With param sub "log"
    (a = 1), t = log x: the integral of trig(b log x) dx.
The key is the book's closed form, accepted only if its derivative is the integrand (the definition
of an antiderivative), checked symbolically or at sample points of the stated domain.
"""
from sympy import Abs, Integral, Symbol, asin, cos, diff, exp, integrate, log, simplify, sin, sqrt

X = Symbol("x", real=True)
T = Symbol("t", real=True)
SAMPLES = [-3.7, -2.2, -1.4, -0.6, 0.35, 0.8, 1.3, 1.9, 2.6, 3.4, 4.3, 5.2, 6.1, 6.8]


def _v(v, name, default=None):
    """An input with any plain x replaced by the real X."""
    if name not in v:
        if default is None:
            raise ValueError(f"needs input {name}")
        return default
    e = v[name]
    return e.subs({s: X for s in e.free_symbols if s.name == "x"})


def _integrand(v, p):
    form = p["form"]
    if form == "ef":
        return exp(_v(v, "a", 1) * X) * _v(v, "g")
    if form == "root":
        return sqrt(_q(v, p))
    if form == "exptrig":
        a, b = _v(v, "a"), _v(v, "b")
        trig = {"sin": sin, "cos": cos}[p["trig"]]
        if p.get("sub") == "log":
            return trig(b * log(X))
        return exp(a * X) * trig(b * X)
    raise ValueError(f"unknown form {form}")


def _q(v, p):
    t, k = _v(v, "t"), _v(v, "k")
    return {"a2-t2": k - t**2, "t2+a2": t**2 + k, "t2-a2": t**2 - k}[p["kind"]]


def _is_antiderivative(F, f):
    d = diff(F, X) - f
    if simplify(d) == 0:
        return True
    real = 0
    for s in SAMPLES:
        dv, fv = complex(d.subs(X, s).evalf()), complex(f.subs(X, s).evalf())
        if abs(fv.imag) > 1e-12 or abs(fv) > 1e6:
            continue  # outside the domain
        if abs(dv) > 1e-9:
            return False
        real += 1
    return real >= 3


def _out(F, p):
    """Back to x for a log substitution (t = log x, e^t = x)."""
    return F.subs(T, log(X)) if p.get("sub") == "log" else F


def _et(v, p):
    """(a, b, the variable, e^(a t), trig(b t), the second term's function) for exptrig."""
    a, b = _v(v, "a"), _v(v, "b")
    t = T if p.get("sub") == "log" else X
    if p.get("sub") == "log" and a != 1:
        raise ValueError("a log substitution needs a = 1")
    return a, b, t


def _numerator(v, p, flip=False):
    """e^(at)(a sin bt - b cos bt) for sin, e^(at)(a cos bt + b sin bt) for cos (flip: sign of 2nd term)."""
    a, b, t = _et(v, p)
    s = -1 if flip else 1
    if p["trig"] == "sin":
        return exp(a * t) * (a * sin(b * t) - s * b * cos(b * t))
    return exp(a * t) * (a * cos(b * t) + s * b * sin(b * t))


def _root(v, p, half=True, flip=False):
    t, k, kind = _v(v, "t"), _v(v, "k"), p["kind"]
    Q = _q(v, p)
    other = asin(t / sqrt(k)) if kind == "a2-t2" else log(Abs(t + sqrt(Q)))
    sign = -1 if kind == "t2-a2" else 1
    if flip:
        sign = -sign
    F = t * sqrt(Q) + sign * k * other
    return F / 2 if half else F


def key(v, p):
    form = p["form"]
    if form == "ef":
        F = exp(_v(v, "a", 1) * X) * _v(v, "f")
    elif form == "root":
        F = _root(v, p)
    elif form == "exptrig":
        a, b, _ = _et(v, p)
        F = _out(_numerator(v, p) / (a**2 + b**2), p)
    else:
        raise ValueError(f"unknown form {form}")
    if not _is_antiderivative(F, _integrand(v, p)):
        raise ValueError(f"{F} is not an antiderivative of the integrand")
    return F


def m1(v, p):
    """Product of integrals: the integral of e^(ax) g taken as (e^(ax)/a) times the integral of g."""
    form = p["form"]
    if form == "ef":
        a, g = _v(v, "a", 1), _v(v, "g")
    elif form == "exptrig" and not p.get("sub"):
        a, b = _v(v, "a"), _v(v, "b")
        g = {"sin": sin, "cos": cos}[p["trig"]](b * X)
    else:
        raise ValueError("not a product of e^(ax) and a function")
    G = integrate(g, X)
    if G.has(Integral):
        raise ValueError(f"no closed form for the integral of {g}")
    return exp(a * X) / a * G


def m2(v, p):
    """Takes the wrong part as f in e^x[f + f']: answers e^(ax) f'(x)."""
    if p["form"] != "ef":
        raise ValueError("only for the e^x [f + f'] form")
    return exp(_v(v, "a", 1) * X) * diff(_v(v, "f"), X)


def m3(v, p):
    """Drops the integral that returns after parts (I = A - kI read as I = A)."""
    form = p["form"]
    if form == "root":
        return _root(v, p, half=False)
    if form == "exptrig":
        a, b, _ = _et(v, p)
        d = a**2 if p["first"] == "trig" else b**2
        return _out(_numerator(v, p) / d, p)
    raise ValueError("no returning integral")


def m4(v, p):
    """Moves the returning integral across without changing sign: I = A - kI gives I(1 - k) = A."""
    if p["form"] != "exptrig":
        raise ValueError("only for e^(ax) sin bx and e^(ax) cos bx")
    a, b, _ = _et(v, p)
    d = a**2 - b**2 if p["first"] == "trig" else b**2 - a**2
    if d == 0:
        raise ValueError("a^2 = b^2 makes the wrong denominator zero")
    return _out(_numerator(v, p) / d, p)


def m5(v, p):
    """Recalls the result with the sign between its two terms flipped."""
    form = p["form"]
    if form == "root":
        return _root(v, p, flip=True)
    if form == "exptrig":
        a, b, _ = _et(v, p)
        return _out(_numerator(v, p, flip=True) / (a**2 + b**2), p)
    raise ValueError("no two-term standard result")


def m6(v, p):
    """Keeps only the first term of parts, u times the integral of v, as if u were a constant."""
    form = p["form"]
    if form == "ef":
        a = _v(v, "a", 1)
        return _v(v, "g") * exp(a * X) / a
    if form == "root":
        return _v(v, "t") * sqrt(_q(v, p))
    if form == "exptrig":
        a, b, t = _et(v, p)
        trig = {"sin": sin, "cos": cos}[p["trig"]]
        if p["first"] == "trig":
            F = trig(b * t) * exp(a * t) / a
        else:
            F = exp(a * t) * integrate(trig(b * t), t)
        return _out(F, p)
    raise ValueError(f"unknown form {form}")


MODELS = {"key": key, "C10-M1": m1, "C10-M2": m2, "C10-M3": m3, "C10-M4": m4, "C10-M5": m5, "C10-M6": m6}
