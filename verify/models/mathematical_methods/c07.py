"""C07 Integral calculus in physics: answer models (the key, and one per misconception).

params["ask"]:
  "pow":  the indefinite integral of x^n (input n), with constant C;
  "mix":  the indefinite integral of x^n + sin x (input n), with constant C;
  "def":  the integral of x^n from a to b (inputs n, a, b);
  "sin":  the integral of sin x from 0 to b (input b, in radians);
  "area": the integral of c2 t^2 + c1 t + c0 from 0 to T (inputs c2, c1, c0, T): a displacement or a work.
The key integrates with sympy; each model applies its own wrong rule.
"""
from sympy import Symbol, cos, diff, integrate, sin

X = Symbol("x", real=True)
T_ = Symbol("t")
C = Symbol("C")


def _solve(v, p, *, differentiate=False, no_divide=False, old_power=False, upper=False, reverse=False,
           integrand=False, cos_plus=False, add_ends=False, times_t=False, value=False):
    ask = p["ask"]
    if ask in ("pow", "mix"):
        n = v["n"]
        if differentiate:
            body = n * X ** (n - 1) + (cos(X) if ask == "mix" else 0)
        else:
            pw = X ** (n + 1) if no_divide else X ** (n + 1) / (n if old_power else n + 1)
            body = pw + ((cos(X) if cos_plus else -cos(X)) if ask == "mix" else 0)
        return body + C
    if ask in ("def", "sin"):
        a = v.get("a", 0)
        b = v["b"]
        f = X ** v["n"] if ask == "def" else sin(X)
        if integrand:
            return f.subs(X, b) - f.subs(X, a)
        F = X ** (v["n"] + 1) / (v["n"] + 1) if ask == "def" else (cos(X) if cos_plus else -cos(X))
        Fb, Fa = F.subs(X, b), F.subs(X, a)
        if upper:
            return Fb
        if reverse:
            return Fa - Fb
        if add_ends:
            return Fb + Fa
        return Fb - Fa
    if ask == "area":
        f = v["c2"] * T_**2 + v["c1"] * T_ + v["c0"]
        T = v["T"]
        if times_t:
            return f.subs(T_, T) * T
        if value:
            return f.subs(T_, T)
        if differentiate:
            return diff(f, T_).subs(T_, T)
        return integrate(f, (T_, 0, T))
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
    "C07-M1": _m(("pow", "mix", "area"), differentiate=True),  # differentiates instead of integrating
    "C07-M2": _m(("pow", "mix"), no_divide=True),  # raises the power but does not divide by it
    "C07-M3": _m(("pow",), old_power=True),  # divides by the old power
    "C07-M4": _m(("def",), upper=True),  # uses only the upper limit
    "C07-M5": _m(("def",), reverse=True),  # subtracts the wrong way round
    "C07-M6": _m(("def", "sin"), integrand=True),  # puts the limits into the integrand itself
    "C07-M7": _m(("sin", "mix"), cos_plus=True),  # takes the integral of sin x as cos x
    "C07-M8": _m(("sin",), add_ends=True),  # adds the values at the two limits
    "C07-M9": _m(("area",), times_t=True),  # multiplies the final value by the whole interval
    "C07-M10": _m(("area",), value=True),  # gives the integrand's value at the end
}
