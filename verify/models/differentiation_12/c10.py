"""C10 Second and higher derivatives: answer models (the key, and one per misconception).

params["form"] says what y is:
  prod   y = u*v                inputs: u, v, au, av (the x-coefficient inside u and v; 1 if none)
  recip  y = 1/(a x + b)        inputs: a, b
  log    y = log(a x + b)       inputs: a, b
  sin    y = sin(a x + b)       inputs: a, b
  cos    y = cos(a x + b)       inputs: a, b
Input k is the order: a whole number, or the symbol n for the nth derivative.
Optional input `at`: the item asks for the derivative's value at x = at.
For a whole-number k the key is sympy's k-fold derivative of y. For k = n it is the
closed form, checked against sympy's derivative for k = 1 to 6 before it is returned.
"""
from sympy import Function, Integer, Symbol, cos, diff, factorial, log, nan, oo, pi, simplify, sin, zoo


def _x(*exprs):
    """The symbol called x (the verifier parses x as real, draft_items as plain)."""
    for e in exprs:
        for s in getattr(e, "free_symbols", ()):
            if s.name == "x":
                return s
    raise ValueError("no x in the inputs")


def _at(d, x, v):
    """The derivative as an expression, or its value at x = at when the item gives a point."""
    if "at" in v:
        d = d.subs(x, v["at"])
        if d.has(oo, -oo, zoo, nan):
            raise ValueError(f"undefined at {v['at']}")
    return simplify(d)


def _whole(k):
    return isinstance(k, Integer) and k >= 1


def _family(v, p, x):
    """y for the one-function forms, as an expression in x."""
    a, b, f = v["a"], v["b"], p["form"]
    u = a * x + b
    return {"recip": 1 / u, "log": log(u), "sin": sin(u), "cos": cos(u)}[f]


def _closed(v, p, x, k):
    """The textbook nth-derivative formula for the one-function forms."""
    a, b, f = v["a"], v["b"], p["form"]
    u = a * x + b
    if f == "recip":
        return (-1) ** k * factorial(k) * a**k / u ** (k + 1)
    if f == "log":
        return (-1) ** (k - 1) * factorial(k - 1) * a**k / u**k
    if f == "sin":
        return a**k * sin(u + k * pi / 2)
    if f == "cos":
        return a**k * cos(u + k * pi / 2)
    raise ValueError(f"unknown form {f}")


def _setup(v, p):
    """(y, x, k) for the item."""
    k = v["k"]
    if p["form"] == "prod":
        x = _x(v["u"], v["v"])
        return v["u"] * v["v"], x, k
    x = Symbol("x", real=True)  # a and b are numbers here; the verifier's x is real
    return _family(v, p, x), x, k


def key(v, p):
    y, x, k = _setup(v, p)
    if _whole(k):
        return _at(diff(y, x, int(k)), x, v)
    if p["form"] == "prod":
        raise ValueError("an nth derivative needs a one-function form")
    for j in range(1, 7):  # the closed form must match sympy's derivatives
        assert simplify(_closed(v, p, x, j) - diff(y, x, j)) == 0, f"closed form wrong at k = {j}"
    return _at(_closed(v, p, x, k), x, v)


def m1(v, p):
    """Reads d^ky/dx^k as (dy/dx)^k: squares (or raises to the power k) the first derivative."""
    y, x, k = _setup(v, p)
    if k == 1:
        raise ValueError("needs k >= 2")
    return _at(diff(y, x) ** k, x, v)


def m2(v, p):
    """Takes the inner factor a only once: d^k/dx^k f(ax + b) = a f^(k)(ax + b), not a^k f^(k)."""
    y, x, k = _setup(v, p)
    if p["form"] == "prod":
        if k != 2:
            raise ValueError("product items are second derivatives")
        u, w, au, av = v["u"], v["v"], v["au"], v["av"]
        if au == 1 and av == 1:
            raise ValueError("no inner factor")
        u2, w2 = diff(u, x, 2) / au, diff(w, x, 2) / av
        return _at(u2 * w + 2 * diff(u, x) * diff(w, x) + u * w2, x, v)
    a = v["a"]
    if a in (1, -1):
        raise ValueError("needs an inner factor other than 1 or -1")
    whole = key({kk: vv for kk, vv in v.items() if kk != "at"}, p)
    return _at(whole / a ** (k - 1), x, v)


def m3(v, p):
    """Drops the middle term of the product rule: (uv)'' = u''v + uv''."""
    if p["form"] != "prod" or v["k"] != 2:
        raise ValueError("needs the second derivative of a product")
    x = _x(v["u"], v["v"])
    u, w = v["u"], v["v"]
    return _at(diff(u, x, 2) * w + u * diff(w, x, 2), x, v)


def m4(v, p):
    """Brings down the starting power every time, not the falling powers: no k! (or (k - 1)!)."""
    f = p["form"]
    if f not in ("recip", "log"):
        raise ValueError("needs 1/(ax + b) or log(ax + b)")
    y, x, k = _setup(v, p)
    a, b = v["a"], v["b"]
    u = a * x + b
    if f == "recip":
        return _at((-a) ** k / u ** (k + 1), x, v)
    return _at(a * (-a) ** (k - 1) / u**k, x, v)


class _CosNoMinus(Function):
    """cos whose derivative the student takes as +sin."""

    def fdiff(self, argindex=1):
        return sin(self.args[0])


def _d_no_minus(e, x):
    """d/dx with the rule d/dx cos u = (sin u) u' (the minus sign dropped)."""
    return diff(e.replace(cos, _CosNoMinus), x).replace(_CosNoMinus, cos)


def m5(v, p):
    """Drops the minus sign in d/dx cos u = -sin u."""
    y, x, k = _setup(v, p)
    if not _whole(k):
        raise ValueError("needs a whole-number order")
    if not y.has(cos) and not y.has(sin):
        raise ValueError("needs sin or cos")
    d = y
    for _ in range(int(k)):
        d = _d_no_minus(d, x)
    return _at(d, x, v)


def m6(v, p):
    """Leaves out the phase shift: d^k/dx^k sin(ax + b) = a^k sin(ax + b), like e^(ax)."""
    f = p["form"]
    if f not in ("sin", "cos"):
        raise ValueError("needs sin(ax + b) or cos(ax + b)")
    y, x, k = _setup(v, p)
    return _at(v["a"] ** k * y, x, v)


MODELS = {"key": key, "C10-M1": m1, "C10-M2": m2, "C10-M3": m3, "C10-M4": m4, "C10-M5": m5, "C10-M6": m6}
