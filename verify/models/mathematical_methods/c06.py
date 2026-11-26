"""C06 Differential calculus in physics: answer models (the key, and one per misconception).

params["ask"]:
  "prod":  d/dx of f1 * f2 (inputs f1, f2, expressions in x);
  "quot":  d/dx of f1 / f2;
  "sum":   d/dx of x^n + cos x (input n);
  "vel":   v = dx/dt at t0 for x = c2 t^2 + c1 t (inputs c2, c1, t0);
  "acc":   a = dv/dt at t0 for v = c3 t^3 + c1 t (inputs c3, c1, t0).
The key differentiates with sympy; each model applies its own wrong rule.
"""
from sympy import Symbol, cos, diff, simplify, sin

X = Symbol("x", real=True)


def _d(f, cos_plus=False):
    if cos_plus and f == cos(X):
        return sin(X)
    return diff(f, X)


def _solve(v, p, *, naive=False, one_term=False, minus=False, swap=False, no_square=False, cos_plus=False,
           no_times=False, keep_power=False, average=False, value=False, twice=False):
    ask = p["ask"]
    if ask in ("prod", "quot"):
        f1, f2 = v["f1"].subs(Symbol("x"), X), v["f2"].subs(Symbol("x"), X)
        d1, d2 = _d(f1, cos_plus), _d(f2, cos_plus)
        if naive:
            return simplify(d1 * d2 if ask == "prod" else d1 / d2)
        if ask == "prod":
            if one_term:
                return f1 * d2
            return f1 * d2 - d1 * f2 if minus else f1 * d2 + d1 * f2
        if swap:
            return (f1 * d2 - d1 * f2) / f2**2
        if no_square:
            return (f2 * d1 - f1 * d2) / f2
        return d1 / f2 - f1 * d2 / f2**2
    if ask == "sum":
        n = v["n"]
        pw = n * X**n if keep_power else (X ** (n - 1) if no_times else n * X ** (n - 1))
        return pw + (sin(X) if cos_plus else -sin(X))
    if ask in ("vel", "acc"):
        hi = 2 if ask == "vel" else 3
        c, c1, t0 = v["c2" if hi == 2 else "c3"], v["c1"], v["t0"]
        f = c * t0**hi + c1 * t0
        if value:
            return f
        if average:
            return f / t0
        if twice:
            return hi * (hi - 1) * c * t0 ** (hi - 2)
        if keep_power:
            return hi * c * t0**hi + c1
        return hi * c * t0 ** (hi - 1) + c1
    raise ValueError(f"unknown ask {ask}")


def key(v, p):
    return _solve(v, p)


def _m(asks, **kw):
    def model(v, p):
        if p["ask"] not in asks:
            raise ValueError("does not apply to this item")
        return _solve(v, p, **kw)
    return model


MODELS = {
    "key": key,
    "C06-M1": _m(("prod", "quot"), naive=True),  # multiplies (or divides) the two derivatives
    "C06-M2": _m(("prod",), one_term=True),  # keeps only one term of the product rule
    "C06-M3": _m(("prod",), minus=True),  # puts a minus sign in the product rule
    "C06-M4": _m(("sum", "quot"), cos_plus=True),  # takes d(cos x)/dx = sin x
    "C06-M5": _m(("sum",), no_times=True),  # lowers the power but does not multiply by it
    "C06-M6": _m(("sum", "acc"), keep_power=True),  # multiplies by the power but does not lower it
    "C06-M7": _m(("quot",), swap=True),  # subtracts the quotient-rule terms the wrong way round
    "C06-M8": _m(("quot",), no_square=True),  # forgets to square the denominator
    "C06-M9": _m(("vel", "acc"), average=True),  # divides by t instead of differentiating
    "C06-M10": _m(("vel", "acc"), value=True),  # gives the quantity itself, not its rate of change
    "C06-M11": _m(("vel",), twice=True),  # differentiates twice
}
