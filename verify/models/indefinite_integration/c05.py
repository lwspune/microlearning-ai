"""C05 The substitution t = tan(x/2): answer models (the key, and one per misconception).

Inputs: the integrand is 1 / (a + b sin(theta) + c cos(theta)).
  a, b, c   numbers;
  params["sub"]  "half": theta = x and t = tan(x/2);  "tan": theta = 2x and t = tan x;
  params["ask"]  "t": the answer is f(t), where the integral becomes the integral of f(t) dt;
                 "anti": the answer is an antiderivative in x (without + c).
The key never uses the t-formulae being taught: f(t) is 1/den(x(t)) * dx/dt with x(t) = 2 tan^-1 t
(or tan^-1 t) and sympy's own sin and cos of that angle. An antiderivative key is checked by its
derivative; a distractor whose derivative is the integrand (a key plus a constant) is refused.
"""
from sympy import Symbol, atan, cancel, cos, diff, expand_trig, integrate, nsimplify, sin, simplify, tan

X = Symbol("x", real=True)
T = Symbol("t")


def _abc(v, p):
    if p.get("sub") not in ("half", "tan"):
        raise ValueError("params['sub'] must be 'half' or 'tan'")
    return v["a"], v.get("b", 0), v.get("c", 0), p["sub"] == "half"


def _integrand(v, p):
    """The integrand as a function of the real x."""
    a, b, c, half = _abc(v, p)
    th = X if half else 2 * X
    return 1 / (a + b * sin(th) + c * cos(th))


def _back(half, wrong_angle=False):
    """t as a function of x."""
    return tan(X / 2) if half and not wrong_angle else tan(X)


def _finish(f, v, p, wrong_angle=False, is_key=False):
    """f(t) for ask "t"; for ask "anti", its antiderivative written back in x, checked by derivative."""
    f = cancel(f)
    if p.get("ask", "t") == "t":
        return f
    _, _, _, half = _abc(v, p)
    if wrong_angle and not half:
        raise ValueError("the angle is already x")
    F = integrate(f, T)
    Fx = F.subs(T, _back(half, wrong_angle))
    gap = diff(Fx, X) - _integrand(v, p)
    pts = [nsimplify("1/3"), nsimplify("7/10"), nsimplify("-6/5")]
    vals = [abs(gap.subs(X, s).evalf()) for s in pts]
    right = (simplify(gap) == 0 or simplify(gap.rewrite(tan)) == 0) and all(e < 1e-12 for e in vals)
    if is_key and not right:
        raise ValueError(f"key {Fx} fails the derivative check")
    if not is_key and all(e < 1e-12 for e in vals):
        raise ValueError(f"{Fx} differentiates to the integrand: it is a right answer")
    return Fx


def key(v, p):
    a, b, c, half = _abc(v, p)
    xt = 2 * atan(T) if half else atan(T)
    th = xt if half else 2 * xt
    den = cancel(expand_trig(a + b * sin(th) + c * cos(th)))
    return _finish(cancel(diff(xt, T) / den), v, p, is_key=True)


def _wrong(v, p, S, C, dx):
    a, b, c, _ = _abc(v, p)
    return dx / (a + b * S + c * C)


def _S():
    return 2 * T / (1 + T**2)


def _C():
    return (1 - T**2) / (1 + T**2)


def _dx(half):
    return (2 if half else 1) / (1 + T**2)


def m1(v, p):
    """Converts sin and cos to t but leaves dx as dt."""
    return _finish(_wrong(v, p, _S(), _C(), 1), v, p)


def m2(v, p):
    """dx factor not matched to the angle: dt/(1+t^2) for t = tan(x/2), 2 dt/(1+t^2) for t = tan x."""
    _, _, _, half = _abc(v, p)
    return _finish(_wrong(v, p, _S(), _C(), (1 if half else 2) / (1 + T**2)), v, p)


def m3(v, p):
    """Swaps the formulae: sin = (1 - t^2)/(1 + t^2), cos = 2t/(1 + t^2)."""
    half = _abc(v, p)[3]
    return _finish(_wrong(v, p, _C(), _S(), _dx(half)), v, p)


def m4(v, p):
    """Adds a to the fractions without the common denominator: a + (2bt + c(1 - t^2))/(1 + t^2)
    is taken as (a + 2bt + c(1 - t^2))/(1 + t^2)."""
    a, b, c, half = _abc(v, p)
    if a == 0:
        raise ValueError("no constant term")
    return _finish((2 if half else 1) / (a + 2 * b * T + c * (1 - T**2)), v, p)


def m5(v, p):
    """Sign slip in the cos formula: cos = (t^2 - 1)/(1 + t^2)."""
    _, _, c, half = _abc(v, p)
    if c == 0:
        raise ValueError("no cos term")
    return _finish(_wrong(v, p, _S(), -_C(), _dx(half)), v, p)


def m6(v, p):
    """Writes the answer back with t = tan x instead of tan(x/2)."""
    if p.get("ask") != "anti":
        raise ValueError("only for an antiderivative")
    k = key(dict(v), {**p, "ask": "t"})
    return _finish(k, v, p, wrong_angle=True)


MODELS = {"key": key, "C05-M1": m1, "C05-M2": m2, "C05-M3": m3, "C05-M4": m4, "C05-M5": m5, "C05-M6": m6}
