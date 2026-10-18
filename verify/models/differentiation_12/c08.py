"""C08 Parametric functions: answer models (the key, and one per misconception).

Inputs: X and Y, the curve's x and y as expressions in one parameter (t or theta, a plain
symbol, as the verifier parses every letter other than x and y); optional at, the parameter
value (absent when the item asks for dy/dx in terms of the parameter).
The key is the slope of the chord through the points at the parameter and at parameter + h,
in the limit h -> 0: the definition of the tangent's slope, not the quotient rule being taught.
Each wrong answer applies its wrong rule to dx/dt and dy/dt.
"""
from sympy import Add, Function, Mul, Pow, Symbol, cos, cot, csc, diff, limit, log, nan, oo, simplify, sin, zoo


def _par(v):
    names = {s.name: s for s in (v["X"].free_symbols | v["Y"].free_symbols)}
    for n in ("t", "theta"):
        if n in names:
            return names[n]
    raise ValueError("no parameter t or theta")


def _at(e, t, v):
    if "at" in v:
        e = e.subs(t, v["at"])
        if e.has(oo, -oo, zoo, nan):
            raise ValueError(f"undefined at {v['at']}")
    return simplify(e)


def _rates(v):
    t = _par(v)
    return diff(v["X"], t), diff(v["Y"], t), t


def key(v, p):
    t = _par(v)
    h = Symbol("h")
    X, Y = v["X"], v["Y"]
    if "at" in v:
        a = v["at"]
        return simplify(limit((Y.subs(t, a + h) - Y.subs(t, a)) / (X.subs(t, a + h) - X.subs(t, a)), h, 0))
    return simplify(limit((Y.subs(t, t + h) - Y) / (X.subs(t, t + h) - X), h, 0))


def m1(v, p):
    """Turns the ratio upside down: dy/dx = (dx/dt)/(dy/dt)."""
    xt, yt, t = _rates(v)
    return _at(xt / yt, t, v)


def m2(v, p):
    """Stops at dy/dt: takes the rate of y in the parameter as the slope dy/dx."""
    xt, yt, t = _rates(v)
    return _at(yt, t, v)


def m3(v, p):
    """Multiplies the rates: dy/dx = (dy/dt)(dx/dt), reading dt/dx as dx/dt in the chain rule."""
    xt, yt, t = _rates(v)
    return _at(yt * xt, t, v)


class _bcos(Function):
    def fdiff(self, argindex=1):
        return sin(self.args[0])


class _bcot(Function):
    def fdiff(self, argindex=1):
        return csc(self.args[0]) ** 2


class _bcsc(Function):
    def fdiff(self, argindex=1):
        return csc(self.args[0]) * cot(self.args[0])


def _no_minus(e, t):
    """d/dt of e with the minus sign of every co-function's derivative dropped."""
    if not e.has(cos, cot, csc):
        raise ValueError("needs cos, cot or cosec")
    b = e.replace(cos, _bcos).replace(cot, _bcot).replace(csc, _bcsc)
    return diff(b, t).replace(_bcos, cos).replace(_bcot, cot).replace(_bcsc, csc)


def m4(v, p):
    """Drops the minus sign in the derivatives of cos, cot and cosec: (cos u)' = sin u."""
    t = _par(v)
    if not (v["X"].has(cos, cot, csc) or v["Y"].has(cos, cot, csc)):
        raise ValueError("needs cos, cot or cosec")
    xt = _no_minus(v["X"], t) if v["X"].has(cos, cot, csc) else diff(v["X"], t)
    yt = _no_minus(v["Y"], t) if v["Y"].has(cos, cot, csc) else diff(v["Y"], t)
    return _at(yt / xt, t, v)


def _outer_only(e, t):
    """d/dt of e with every chain rule stopped early: the inner function's derivative left off."""
    if not e.has(t):
        return 0 * t
    if e == t:
        return 1 + 0 * t
    if isinstance(e, Add):
        return Add(*[_outer_only(a, t) for a in e.args])
    if isinstance(e, Mul):
        terms = []
        for i, a in enumerate(e.args):
            rest = Mul(*(e.args[:i] + e.args[i + 1:]))
            terms.append(rest * _outer_only(a, t))
        return Add(*terms)
    if isinstance(e, Pow):
        b, n = e.args
        if n.has(t):
            if b.has(t):
                raise ValueError("variable power")
            return e * log(b)
        return n * b ** (n - 1)
    if len(e.args) == 1:
        u = Symbol("u")
        return diff(e.func(u), u).subs(u, e.args[0])
    raise ValueError(f"can't take {e}")


def m5(v, p):
    """Leaves off the inner derivative in a chain: (sin^3 t)' = 3 sin^2 t, (cos 2t)' = -sin 2t."""
    t = _par(v)
    xt, yt = _outer_only(v["X"], t), _outer_only(v["Y"], t)
    return _at(yt / xt, t, v)


MODELS = {"key": key, "C08-M1": m1, "C08-M2": m2, "C08-M3": m3, "C08-M4": m4, "C08-M5": m5}
