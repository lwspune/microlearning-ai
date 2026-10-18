"""C02 Values of a function: answer models (the key, and one per misconception).

Inputs: u = the input put into f (a number or an expression); a = the point of a difference quotient.
params:
  f        the rule, as a sympy string in the variable `var` (e.g. "m**2 - 3*m + 1")
  var      the rule's variable (default "x")
  ask      value  f(u)
           diffq  (f(a + h) - f(a)) / h
           fit    f(u), after finding the unknown constants from the given values
  utext    the input exactly as the student writes it in (for "no brackets"; default str(u))
  unknowns the constants to find (fit), e.g. "b c"
  given    the given values (fit), "input=output" pairs split by ";", e.g. "0=3;2=1"
"""
import re

from sympy import Add, Mul, Poly, Rational, Symbol, solve, sympify

H = Symbol("h")  # the verifier parses only x and y as real symbols
REAL = ("x", "y")


def _real(e):
    """x and y as real symbols, as the verifier parses them; other letters stay plain."""
    return e.subs({s: Symbol(s.name, real=True) for s in e.free_symbols if s.name in REAL})


def _parse(s):
    return sympify(s, locals={n: Symbol(n, real=True) for n in REAL})


def _rule(p):
    var = _parse(p.get("var", "x"))
    return _parse(p["f"]), var


def _given(p):
    return [tuple(_parse(s) for s in g.split("=")) for g in p["given"].split(";")]


# --- evaluators: f(u) with a given rule, under a given belief -------------------------------

def _right(f, var, u, text):
    """Put u for every var, as a whole (brackets and all)."""
    return f.subs(var, u)


def _no_brackets(f, var, u, text):
    """Writes the input in without brackets: -3 for m in m**2 gives -3**2 = -9."""
    src = re.sub(rf"\b{var.name}\b", text, str(f))
    return _parse(src)


def _sum_of_powers(f, var, u, text):
    """(p + q)^n taken as p^n + q^n."""
    if not isinstance(u, Add):
        raise ValueError("the input is not a sum")
    out = 0
    for (n,), c in Poly(f, var).terms():
        out += c * (sum(t**n for t in u.args) if n >= 2 else u**n)
    return out


def _coefficient_inside(f, var, u, text):
    """c x^n read as (c x)^n: 2x^2 at x = 7 taken as 14^2."""
    out = 0
    for (n,), c in Poly(f, var).terms():
        out += (c * u) ** n if n >= 2 else c * u**n
    return out


def _value(ev, v, p):
    """The asked value, every f(...) computed with the evaluator ev."""
    f, var = _rule(p)
    ask = p.get("ask", "value")
    if ask == "value":
        u = _real(v["u"])
        return ev(f, var, u, p.get("utext", str(u)))
    if ask == "diffq":
        a = _real(v["a"])
        return ((ev(f, var, a + H, f"{a} + h") - f.subs(var, a)) / H).simplify()
    if ask == "fit":
        unknowns = [Symbol(n) for n in p["unknowns"].split()]
        sol = solve([ev(f, var, x, str(x)) - y for x, y in _given(p)], unknowns, dict=True)
        if len(sol) != 1:
            raise ValueError("the constants are not fixed")
        g = f.subs(sol[0])
        u = _real(v["u"])
        return ev(g, var, u, str(u))
    raise ValueError(f"unknown ask {ask}")


def key(v, p):
    return _value(_right, v, p)


def m1(v, p):
    """f(x + c) taken as f(x) + c: the change is made to the output, not the input."""
    f, var = _rule(p)
    ask = p.get("ask", "value")
    if ask == "diffq":
        return Rational(1)  # f(a + h) = f(a) + h, so the quotient is h / h
    if ask == "fit":
        (x, y), u = _given(p)[0], _real(v["u"])
        return y + (u - x)
    u = _real(v["u"])
    if not isinstance(u, Add) or not u.free_symbols:
        raise ValueError("the input is not x + c")
    c, base = u.as_independent(*u.free_symbols)
    if c == 0:
        raise ValueError("the input is not x + c")
    return f.subs(var, base) + c


def m2(v, p):
    """f treated like a multiplier: f(p + q) = f(p) + f(q), f(k p) = k f(p)."""
    f, var = _rule(p)
    ask = p.get("ask", "value")
    if ask == "diffq":
        a = _real(v["a"])
        return ((f.subs(var, a) + f.subs(var, H) - f.subs(var, a)) / H).simplify()
    if ask == "fit":
        u = _real(v["u"])
        x, y = next((x, y) for x, y in _given(p) if x != 0)
        return u / x * y  # f(u) = (u / x) f(x)
    u = _real(v["u"])
    if isinstance(u, Add):
        return sum(f.subs(var, t) for t in u.args)
    k, rest = u.as_coeff_Mul()
    if isinstance(u, Mul) and k != 1 and rest.free_symbols:
        return k * f.subs(var, rest)
    raise ValueError("the input is neither a sum nor a multiple")


def m3(v, p):
    """f(a) = b read the wrong way round: b taken as the input and a as the output."""
    if p.get("ask") != "fit":
        raise ValueError("needs given values")
    q = dict(p, given=";".join(g.split("=")[1] + "=" + g.split("=")[0] for g in p["given"].split(";")))
    return _value(_right, v, q)


def m4(v, p):
    return _value(_no_brackets, v, p)


def m5(v, p):
    return _value(_sum_of_powers, v, p)


def m6(v, p):
    return _value(_coefficient_inside, v, p)


MODELS = {"key": key, "C02-M1": m1, "C02-M2": m2, "C02-M3": m3, "C02-M4": m4, "C02-M5": m5, "C02-M6": m6}
