"""C09 Algebra of functions: answer models (the key, and one per misconception).

params:
  f, g   the two rules, as sympy strings in x, written the way the book prints them
         (e.g. "x**2 + 2", "sqrt(x - 1)"): M5 joins these strings as they stand
  op     "+", "-", "*" or "/": the combination f + g, f - g, fg or f/g
  ask    value   the combination at the input u (inputs: u)
         domain  the domain of the combination, a subset of R
  utext  the input as the student writes it in (for M6; default str(u))
"""
import re

from sympy import Eq, Pow, S, Symbol, solveset, sympify

x = Symbol("x", real=True)
REAL = ("x", "y")


def _parse(s):
    return sympify(s, locals={n: Symbol(n, real=True) for n in REAL})


def _real(e):
    """x and y as real symbols, as the verifier parses them; other letters stay plain."""
    return e.subs({s: Symbol(s.name, real=True) for s in e.free_symbols if s.name in REAL})


def _rules(p):
    return _parse(p["f"]), _parse(p["g"])


def _combine(a, b, op):
    return {"+": a + b, "-": a - b, "*": a * b, "/": a / b}[op]


def _domain(e):
    """Where e is a real number: even-root radicands >= 0 (> 0 in a denominator), denominators != 0."""
    dom = S.Reals
    for sub in e.atoms(Pow):
        b, n = sub.base, sub.exp
        if n.is_Rational and n.q % 2 == 0:
            dom = dom.intersect(solveset(b > 0 if n < 0 else b >= 0, x, S.Reals))
        elif n.is_negative:
            dom = dom - solveset(Eq(b, 0), x, S.Reals)
    return dom


def _zeros(g):
    return solveset(Eq(g, 0), x, S.Reals)


def _both(p):
    """D_f and D_g."""
    f, g = _rules(p)
    return _domain(f), _domain(g)


def _ask(p, want):
    if p["ask"] != want:
        raise ValueError(f"this mistake shows on a {want} question")


# --- the key: straight from the definitions ----------------------------------------------------

def key(v, p):
    f, g = _rules(p)
    if p["ask"] == "value":
        u = _real(v["u"])
        return _combine(f.subs(x, u), g.subs(x, u), p["op"]).expand()
    df, dg = _both(p)
    dom = df.intersect(dg)
    return dom - _zeros(g) if p["op"] == "/" else dom


# --- misconceptions ----------------------------------------------------------------------------

def m1(v, p):  # f/g: the overlap of the domains, the zeros of g left in
    _ask(p, "domain")
    if p["op"] != "/":
        raise ValueError("only a quotient has zeros to remove")
    df, dg = _both(p)
    return df.intersect(dg)


def m2(v, p):  # the union of the domains instead of their intersection
    _ask(p, "domain")
    f, g = _rules(p)
    df, dg = _both(p)
    dom = df.union(dg)
    return dom - _zeros(g) if p["op"] == "/" else dom


def m3(v, p):  # the domain read off the combined rule: sqrt(u)*sqrt(w) as sqrt(u*w), sqrt(u)/sqrt(w) as sqrt(u/w)
    _ask(p, "domain")
    f, g = _rules(p)
    if p["op"] not in "*/" or not all(isinstance(h, Pow) and h.exp == S.Half for h in (f, g)):
        raise ValueError("needs two square roots multiplied or divided")
    return _domain(_combine(f.base, g.base, p["op"]) ** S.Half)


def m4(v, p):  # (fg)(x) read as f(g(x))
    if p["op"] != "*":
        raise ValueError("only a product is mistaken for a composition")
    f, g = _rules(p)
    if p["ask"] == "value":
        return f.subs(x, g.subs(x, _real(v["u"]))).expand()
    return _domain(f.subs(x, g))


def m5(v, p):  # the rules joined without brackets: x**2 - 5 times 2x + 3 written x**2 - 5*2*x + 3
    _ask(p, "value")
    if p["op"] == "+":
        raise ValueError("brackets don't matter in a sum")
    joined = _parse(f"{p['f']} {p['op']} {p['g']}")
    return joined.subs(x, _real(v["u"])).expand()


def m6(v, p):  # the input put in without brackets: (-2)**2 written -2**2, (3m)**2 written 3m**2
    _ask(p, "value")
    text = p.get("utext", str(v["u"]))
    put = lambda s: _parse(re.sub(r"\bx\b", text, s))
    return _combine(put(p["f"]), put(p["g"]), p["op"]).expand()


MODELS = {"key": key, "C09-M1": m1, "C09-M2": m2, "C09-M3": m3, "C09-M4": m4, "C09-M5": m5, "C09-M6": m6}
