"""C03 Derivative of an inverse function: answer models (the key, and one per misconception).

Four kinds of item, told apart by their inputs:
- f, b, a: f is an expression in x, the item asks for (f^-1)'(b); a is the matching point, f(a) = b
  (given so the models need not solve a quintic; the key checks it).
- table: a, b and the tabled values fa = f(a), fpa = f'(a), fb = f(b), fpb = f'(b); the item asks for g'(b).
- fp: f'(x) as an expression in x; the item asks for g'(x), g the inverse of f (answers in g(x)).
- f, g: y = f(x) with inverse x = g(y); the item asks for dy/dx, found through dx/dy.
The key is computed from the definition: the slope of the mirrored secant, h / (f(a + h) - f(a)) as h -> 0,
or sympy's derivative of y = f(x); never the reciprocal rule being taught.
"""
from sympy import Function, Symbol, diff, limit, nan, oo, simplify, zoo

_h = Symbol("h")


def _sym(v, name):
    """The symbol called `name` in the inputs (the verifier parses x, y as real, draft_items as plain)."""
    for e in v.values():
        for s in getattr(e, "free_symbols", ()):
            if s.name == name:
                return s
    return Symbol(name, real=True)


def _finite(e):
    e = simplify(e)
    if e.has(oo, -oo, zoo, nan):
        raise ValueError(f"undefined: {e}")
    return e


def _kind(v):
    if "fpa" in v:
        return "table"
    if "fp" in v:
        return "fp"
    if "g" in v:
        return "dydx"
    return "point"


def _check_point(v):
    x = _sym(v, "x")
    f, a, b = v["f"], v["a"], v["b"]
    if simplify(f.subs(x, a) - b) != 0:
        raise ValueError(f"f({a}) is not {b}")
    return x, f, a, b


def _check_table(v):
    if simplify(v["fa"] - v["b"]) != 0:
        raise ValueError("the table's f(a) is not b")
    return v


def _g_of_x(v):
    x = _sym(v, "x")
    return x, Function("g")(x)


def key(v, p):
    k = _kind(v)
    if k == "point":
        x, f, a, b = _check_point(v)
        return _finite(limit(_h / (f.subs(x, a + _h) - b), _h, 0))
    if k == "table":
        _check_table(v)
        return _finite(1 / v["fpa"])  # a table gives only f'(a): the mirrored slope is its reciprocal
    if k == "fp":
        x, gx = _g_of_x(v)
        return simplify(1 / v["fp"].subs(x, gx))  # f(g(x)) = x differentiated
    x = _sym(v, "x")
    return simplify(diff(v["f"], x))


def m1(v, p):
    """Wrong point: evaluates the slope of f at the same number, (f^-1)'(b) = 1/f'(b), not at the matching point."""
    k = _kind(v)
    if k == "point":
        x, f, a, b = _check_point(v)
        return _finite(1 / diff(f, x).subs(x, b))
    if k == "table":
        _check_table(v)
        return _finite(1 / v["fpb"])
    if k == "fp":
        return simplify(1 / v["fp"])
    x, y = _sym(v, "x"), _sym(v, "y")
    return simplify(1 / diff(v["g"], y).subs(y, x))  # dy/dx = 1/(dx/dy) with y simply renamed x


def m2(v, p):
    """No reciprocal: takes the inverse's slope to be the same as f's, (f^-1)'(b) = f'(a)."""
    k = _kind(v)
    if k == "point":
        x, f, a, b = _check_point(v)
        return _finite(diff(f, x).subs(x, a))
    if k == "table":
        _check_table(v)
        return v["fpa"]
    if k == "fp":
        x, gx = _g_of_x(v)
        return simplify(v["fp"].subs(x, gx))
    x, y = _sym(v, "x"), _sym(v, "y")
    return simplify(diff(v["g"], y).subs(y, v["f"]))  # answers with dx/dy, put back in x


def m3(v, p):
    """Reads f^-1 as the reciprocal 1/f and differentiates that at b: -f'(b)/f(b)^2."""
    k = _kind(v)
    if k == "point":
        x, f, a, b = _check_point(v)
        return _finite(diff(1 / f, x).subs(x, b))
    if k == "table":
        _check_table(v)
        return _finite(-v["fpb"] / v["fb"] ** 2)
    raise ValueError("needs f or its tabled values at b")


def m4(v, p):
    """Negative reciprocal, as for perpendicular lines: (f^-1)'(b) = -1/f'(a)."""
    return -key(v, p)


MODELS = {"key": key, "C03-M1": m1, "C03-M2": m2, "C03-M3": m3, "C03-M4": m4}
