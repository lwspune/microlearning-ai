"""C07 Linear differential equations: answer models (the key, and one per misconception).

Inputs: the equation  a * dY/ds + b * Y = q,  with a, b, q functions of the independent
variable s only (Y is the dependent variable).
Params: var = the independent variable's name ("x", "y" or "theta"; default "x");
mode = "if" (the item asks for the integrating factor) or "value" (the item gives the
condition Y(s0) = y0 and asks for Y(s1); inputs s0, y0, s1).
In standard form P = b/a and Q = q/a.

The key for "if" is e^{int P ds}, checked against its defining property IF' = P * IF.
The key for "value" comes from sympy's dsolve with the initial condition (not from the
integrating-factor method), and is checked by substituting it back into the equation.
Every wrong answer replays one wrong step of the integrating-factor method.
"""
from sympy import Function, Integer, Symbol, diff, dsolve, exp, integrate, log, powsimp, simplify, solve

X = Symbol("x", real=True)
YV = Symbol("y", real=True)
TH = Symbol("theta")
_C = Symbol("c_const")


def _var(p):
    return {"x": X, "y": YV, "theta": TH}[p.get("var", "x")]


def _fix(e, s):
    """Inputs are parsed with plain symbols: put the item's real variable in."""
    e = Integer(e) if isinstance(e, int) else e
    return e.subs({t: s for t in getattr(e, "free_symbols", set()) if t.name == s.name})


def _abq(v, p):
    s = _var(p)
    return s, _fix(v["a"], s), _fix(v["b"], s), _fix(v["q"], s)


def _mode(p):
    return p.get("mode", "if")


def _ifac(P, s):
    """e^{int P ds}, simplified (e^{2 log x} = x^2)."""
    return simplify(powsimp(exp(integrate(P, s)), force=True))


def _solve_with(mu, integrand, s, v, divide_c=True):
    """y * mu = int integrand ds + c, c fixed by Y(s0) = y0, then Y(s1).
    divide_c=False writes y = (int integrand)/mu + c instead."""
    F = integrate(integrand, s)
    y = (F + _C) / mu if divide_c else F / mu + _C
    s0, y0, s1 = (_fix(v[k], s) for k in ("s0", "y0", "s1"))
    cs = solve(y.subs(s, s0) - y0, _C)
    if len(cs) != 1:
        raise ValueError("constant not fixed by the condition")
    return simplify(y.subs(_C, cs[0]).subs(s, s1))


def key(v, p):
    s, a, b, q = _abq(v, p)
    P, Q = simplify(b / a), simplify(q / a)
    if _mode(p) == "if":
        mu = _ifac(P, s)
        assert simplify(diff(mu, s) - P * mu) == 0
        return mu
    f = Function("f")
    s0, y0, s1 = (_fix(v[k], s) for k in ("s0", "y0", "s1"))
    sol = dsolve(diff(f(s), s) + P * f(s) - Q, f(s), ics={f(s0): y0}).rhs
    assert simplify(diff(sol, s) + P * sol - Q) == 0
    assert simplify(sol.subs(s, s0) - y0) == 0
    return simplify(sol.subs(s, s1))


def m1(v, p):
    """Reads P off the equation before dividing by the coefficient of dY/ds: P = b."""
    if _mode(p) != "if":
        raise ValueError("integrating-factor items only")
    s, a, b, q = _abq(v, p)
    if simplify(a - 1) == 0:
        raise ValueError("already in standard form")
    return _ifac(b, s)


def m2(v, p):
    """Takes e^{k log g} as k g instead of g^k."""
    if _mode(p) != "if":
        raise ValueError("integrating-factor items only")
    s, a, b, q = _abq(v, p)
    I = simplify(integrate(simplify(b / a), s))
    k, g = I.as_coeff_Mul()
    if not isinstance(g, log) or k == 1:
        raise ValueError("int P ds is not k log g with k != 1")
    return simplify(k * g.args[0])


def m3(v, p):
    """Takes P with the wrong sign: I.F. = e^{-int P ds}."""
    s, a, b, q = _abq(v, p)
    P, Q = simplify(b / a), simplify(q / a)
    mu = _ifac(-P, s)
    if _mode(p) == "if":
        return mu
    return _solve_with(mu, Q * mu, s, v)


def m4(v, p):
    """Forgets to multiply Q by the I.F.: y * I.F. = int Q ds + c."""
    if _mode(p) != "value":
        raise ValueError("value items only")
    s, a, b, q = _abq(v, p)
    P, Q = simplify(b / a), simplify(q / a)
    return _solve_with(_ifac(P, s), Q, s, v)


def m5(v, p):
    """Divides by the I.F. but leaves c undivided: y = (int Q I.F. ds)/I.F. + c."""
    if _mode(p) != "value":
        raise ValueError("value items only")
    s, a, b, q = _abq(v, p)
    P, Q = simplify(b / a), simplify(q / a)
    mu = _ifac(P, s)
    return _solve_with(mu, Q * mu, s, v, divide_c=False)


def m6(v, p):
    """Forgets the exponential: I.F. = int P ds."""
    if _mode(p) != "if":
        raise ValueError("integrating-factor items only")
    s, a, b, q = _abq(v, p)
    return simplify(integrate(simplify(b / a), s))


MODELS = {"key": key, "C07-M1": m1, "C07-M2": m2, "C07-M3": m3, "C07-M4": m4, "C07-M5": m5, "C07-M6": m6}
