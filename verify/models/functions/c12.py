"""C12 Functional equations: answer models (the key, and one per misconception).

Input: u = where f is wanted (the symbol x for the rule f(x), or a number).
params["ask"] picks the question shape:
  pair   a f(x) + b f(g(x)) = h(x), with g its own partner (g(g(x)) = x)
           a, b  the coefficients;  g  "1/x" or "1 - x";  h  the right side, in x
  shift  f(inner) = h(x)
           inner  "x + 1", "2*x", ...;  h  the right side, in x
  form   a standard rule with one given value f(a) = b
           form  add   f(x + y) = f(x) + f(y)   (f(x) = kx)
                 exp   f(x + y) = f(x) f(y)     (f(x) = k^x)
                 pow   f(xy) = f(x) f(y)        (f(x) = x^n)
                 log   f(xy) = f(x) + f(y)      (f(x) = k log x)
           a, b  the given value f(a) = b
Each misconception model raises ValueError where its wrong rule has nothing to act on.
"""
from sympy import Symbol, log, simplify, solve, sympify

X = Symbol("x", real=True)  # the verifier parses x as a real symbol
T = Symbol("t")


def _real(e):
    return e.subs({s: X for s in getattr(e, "free_symbols", ()) if s.name == "x"})


def _p(s):
    return sympify(s, locals={"x": X})


def _u(v):
    return _real(sympify(v["u"]))


def _pair(p):
    a, b, g, h = _p(p["a"]), _p(p["b"]), _p(p["g"]), _p(p["h"])
    if simplify(g.subs(X, g) - X) != 0:
        raise ValueError("g is not its own partner")
    return a, b, g, h


def _at(e, u):
    return simplify(e.subs(X, u))


# --- key -------------------------------------------------------------------------------------

def key(v, p):
    ask, u = p["ask"], _u(v)
    if ask == "pair":
        a, b, g, h = _pair(p)
        F, G = Symbol("F"), Symbol("G")  # F = f(x), G = f(g(x))
        # the given equation, and the same equation with x replaced by g(x)
        sol = solve([a * F + b * G - h, a * G + b * F - h.subs(X, g)], [F, G], dict=True)
        if len(sol) != 1:
            raise ValueError("the pair has no single solution")
        return _at(sol[0][F], u)
    if ask == "shift":
        inner, h = _p(p["inner"]), _p(p["h"])
        back = solve(inner - T, X)  # the x that makes the input t
        if len(back) != 1:
            raise ValueError("the shift is not one-one")
        return _at(h.subs(X, back[0]).subs(T, X), u)
    if ask == "form":
        form, a, b = p["form"], _p(p["a"]), _p(p["b"])
        if form == "add":
            return simplify(b / a * u)
        if form == "exp":
            return simplify(b ** (u / a))  # k^a = b, so k^u = b^(u/a)
        if form == "pow":
            return simplify(u ** simplify(log(b) / log(a)))  # a^n = b
        if form == "log":
            return simplify(b * log(u) / log(a))
    raise ValueError(f"unknown ask {ask}")


# --- misconceptions ---------------------------------------------------------------------------

def m1(v, p):
    """f of a changed input taken as f(x) itself: f(1/x), f(1 - x), f(x + 1) all read as f(x)."""
    ask, u = p["ask"], _u(v)
    if ask == "pair":
        a, b, g, h = _pair(p)
        return _at(h / (a + b), u)  # a f(x) + b f(x) = h(x)
    if ask == "shift":
        return _at(_p(p["h"]), u)  # the right side read as f(x)
    if ask == "form":
        a, b = _p(p["a"]), _p(p["b"])
        if simplify(u - 1 / a) != 0:
            raise ValueError("u is not the partner 1/a of the given input")
        return b  # f(1/a) taken as f(a)
    raise ValueError(ask)


def m2(v, p):
    """Undoes the shift the wrong way: from f(x + 1) = h(x), puts x + 1 for x instead of x - 1."""
    if p["ask"] != "shift":
        raise ValueError("needs a shifted input")
    inner, h = _p(p["inner"]), _p(p["h"])
    return _at(h.subs(X, inner), _u(v))


def m3(v, p):
    """A change to the input passes straight to the output: f(x + c) = f(x) + c, f(kx) = k f(x)."""
    ask, u = p["ask"], _u(v)
    if ask == "shift":
        inner, h = _p(p["inner"]), _p(p["h"])
        c, rest = inner.as_independent(X, as_Add=True)
        if c != 0 and rest == X:
            return _at(h - c, u)
        k, rest = inner.as_independent(X, as_Add=False)
        if k != 1 and rest == X:
            return _at(h / k, u)
        raise ValueError("the input is neither x + c nor kx")
    if ask == "form":
        if p["form"] == "add":
            raise ValueError("f(x) = kx is right for the additive rule")
        a, b = _p(p["a"]), _p(p["b"])
        return simplify(b / a * u)  # f(u) = (u / a) f(a)
    raise ValueError(ask)


def m4(v, p):
    """Subtracts the two equations and reads the result as f(x), though f(g(x)) is still in it."""
    if p["ask"] != "pair":
        raise ValueError("needs a pair of equations")
    a, b, g, h = _pair(p)
    if a == b:
        raise ValueError("the subtraction removes both unknowns")
    return _at((h - h.subs(X, g)) / (a - b), _u(v))  # (a - b)(f(x) - f(g(x))) = h(x) - h(g(x))


def m5(v, p):
    """Mixes up the power and exponential forms: f(xy) = f(x) f(y) taken as k^x, f(x + y) = f(x) f(y) as x^n."""
    if p["ask"] != "form" or p["form"] not in ("exp", "pow"):
        raise ValueError("needs the power or exponential form")
    swapped = dict(p, form="pow" if p["form"] == "exp" else "exp")
    return key(v, swapped)


def m6(v, p):
    """Solves the pair for the partner f(g(x)) and reports it as f(x)."""
    if p["ask"] != "pair":
        raise ValueError("needs a pair of equations")
    g = _p(p["g"])
    return key({"u": _at(g, _u(v))}, p)


MODELS = {"key": key, "C12-M1": m1, "C12-M2": m2, "C12-M3": m3, "C12-M4": m4, "C12-M5": m5, "C12-M6": m6}
