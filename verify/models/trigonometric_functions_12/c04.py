"""C04 Equations in sin^2, cos^2, tan^2: answer models (the key, and one per misconception).

Inputs: k, the value of the squared ratio in f^2(theta) = k.
params["f"]: the ratio, one of sin, cos, tan.
A general solution is compared by its solution set over the window [0, 2pi): every form
used here repeats every pi or 2pi, so one window of 2pi tells any two forms apart.
`form(name, v, p)` gives each model's general solution as (family, angle) so the spec can
write the option text in the book's notation; FAMILIES lists the families.
"""
from sympy import FiniteSet, Rational, acos, asin, atan, cos, pi, simplify, sin, sqrt, tan

FUNCS = {"sin": sin, "cos": cos, "tan": tan}
INV = {"sin": asin, "cos": acos, "tan": atan}
N = range(-6, 7)


def _family_angles(fam, a):
    """The angles of a general-solution family, over n = -6..6."""
    if fam == "pm1":  # n pi +- a
        return [n * pi + s * a for n in N for s in (1, -1)]
    if fam == "pm2":  # 2 n pi +- a
        return [2 * n * pi + s * a for n in N for s in (1, -1)]
    if fam == "alt":  # n pi + (-1)^n a
        return [n * pi + (-1) ** n * a for n in N]
    if fam == "plus1":  # n pi + a
        return [n * pi + a for n in N]
    raise ValueError(f"unknown family {fam}")


def window(fam, a):
    """The family's solutions in [0, 2pi)."""
    return FiniteSet(*[t for t in _family_angles(fam, a) if 0 <= t < 2 * pi])


def _args(v, p):
    f = p["f"]
    if f not in FUNCS:
        raise ValueError(f"unknown ratio {f}")
    return f, v["k"]


def _standard(f, val):
    """The angle in [0, pi/2] with f(angle) = val, if it is a rational multiple of pi."""
    if val < 0 or (f != "tan" and val > 1):
        raise ValueError("no angle in [0, pi/2]")
    a = simplify(INV[f](val))
    if not (a / pi).is_rational:
        raise ValueError("not a standard angle")
    return a


def _alpha(f, k):
    """alpha: the acute angle with f(alpha)^2 = k, i.e. f(alpha) = sqrt(k)."""
    if k < 0:
        raise ValueError("a square is never negative")
    return _standard(f, sqrt(k))


def key(v, p):
    """From the definition: every theta in [0, 2pi) with f(theta)^2 = k. The book's values are
    standard, so each solution is a multiple of pi/12; each candidate is checked exactly."""
    f, k = _args(v, p)
    fn = FUNCS[f]
    sols = []
    for j in range(24):
        t = Rational(j, 12) * pi
        val = fn(t)
        if val.has(sin, cos, tan) or val is None:
            continue
        if f == "tan" and j % 12 == 6:  # tan undefined at pi/2, 3pi/2
            continue
        if simplify(val**2 - k) == 0:
            sols.append(t)
    return FiniteSet(*sols)


# The single-ratio general solutions (C02, C03).
SINGLE = {"sin": "alt", "cos": "pm2", "tan": "plus1"}


def form(name, v, p):
    """(family, angle) of the general solution each model writes."""
    f, k = _args(v, p)
    if name == "key":
        return "pm1", _alpha(f, k)
    if name == "C04-M1":  # keeps only the positive root: f(theta) = sqrt(k), single-ratio solution
        return SINGLE[f], _alpha(f, k)
    if name == "C04-M2":  # forgets the square root: alpha with f(alpha) = k
        return "pm1", _standard(f, k)
    if name == "C04-M3":  # the cosine pattern 2n pi +- alpha for every squared ratio
        return "pm2", _alpha(f, k)
    if name == "C04-M4":  # reads the other ratio from the table: alpha replaced by pi/2 - alpha
        return "pm1", pi / 2 - _alpha(f, k)
    if name == "C04-M5":  # cos 2theta = cos 2alpha, then forgets to halve: 2n pi +- 2alpha
        return "pm2", 2 * _alpha(f, k)
    raise ValueError(f"unknown model {name}")


def _model(name):
    def m(v, p):
        return window(*form(name, v, p))
    return m


m1, m2, m3, m4, m5 = (_model(f"C04-M{i}") for i in range(1, 6))

MODELS = {"key": key, "C04-M1": m1, "C04-M2": m2, "C04-M3": m3, "C04-M4": m4, "C04-M5": m5}
