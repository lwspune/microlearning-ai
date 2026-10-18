"""C06 The property f(a + b - x): answer models (the key, and one per misconception).

Inputs: f, the integrand in x; a and b, the limits.
Params: form = "ratio" (f(x) + f(a + b - x) is a constant, as for g/(g + g*)) or
"xphi" (f = x * phi(x) on [0, pi] with phi(pi - x) = phi(x)).
g = f(x) + f(a + b - x) is the sum the property's "add the two forms" step gives, so 2I = int_a^b g.

The key is the exact half of int_a^b g, confirmed against a direct numerical quadrature of
int_a^b f (the definition, no property used); a mismatch raises. Every wrong answer replays
one wrong step of the method.
"""
from sympy import Integer, Integral, Symbol, integrate, simplify

X = Symbol("x", real=True)


def _fab(v):
    """f with x real (as the verifier parses it), and the limits."""
    f = v["f"]
    f = f.subs({s: X for s in f.free_symbols if s.name == "x"})
    return f, v["a"], v["b"]


def _sum(f, a, b):
    """g = f(x) + f(a + b - x), simplified."""
    return simplify(f + f.subs(X, a + b - X))


def _const_sum(f, a, b):
    g = _sum(f, a, b)
    if g.has(X):
        raise ValueError("f(x) + f(a + b - x) is not a constant")
    return g


def _twice(f, a, b):
    """2I = int_a^b (f(x) + f(a + b - x)) dx, exactly."""
    return simplify(integrate(_sum(f, a, b), (X, a, b)))


def key(v, p):
    f, a, b = _fab(v)
    exact = simplify(_twice(f, a, b) / 2)
    direct = Integral(f, (X, a, b)).evalf(30)
    if abs(exact.evalf(30) - direct) > 1e-15:
        raise ValueError(f"key {exact} disagrees with the quadrature {direct}")
    return exact


def m1(v, p):
    """Takes I as the constant sum times the MIDPOINT (a + b)/2, not half the length (b - a)/2."""
    f, a, b = _fab(v)
    if a == 0:
        raise ValueError("with a = 0 the midpoint is half the length: gives the key")
    return simplify(_const_sum(f, a, b) * (a + b) / 2)


def m2(v, p):
    """After t = a + b - x keeps the limits b to a: 2I = int_b^a g, so I comes out negative."""
    f, a, b = _fab(v)
    out = simplify(-_twice(f, a, b) / 2)
    if out == 0:
        raise ValueError("I = 0: the sign slip gives the key")
    return out


def m3(v, p):
    """Uses the [0, a] form f(a - x) on [a, b], as if the interval began at 0: 2I = g * b, I = g * b / 2."""
    f, a, b = _fab(v)
    if a == 0:
        raise ValueError("the interval does begin at 0: gives the key")
    return simplify(_const_sum(f, a, b) * b / 2)


def m4(v, p):
    """Stops at 2I: reports int_a^b (f(x) + f(a + b - x)) dx as I."""
    f, a, b = _fab(v)
    return _twice(f, a, b)


def m5(v, p):
    """For x * phi(x) on [0, pi], turns the lone x into -x instead of pi - x: I = -I, so I = 0."""
    if p.get("form") != "xphi":
        raise ValueError("only for a lone factor x")
    return Integer(0)


MODELS = {"key": key, "C06-M1": m1, "C06-M2": m2, "C06-M3": m3, "C06-M4": m4, "C06-M5": m5}
