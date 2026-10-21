"""C04 Completing the square: answer models (the key, and one per misconception).

Inputs: a, b, c of ax^2 + bx + c = 0 (a != 0).
Params: out = "add"   -> the number added to both sides once the coefficient of x^2 is one;
        out = "q"     -> q in the completed form (x + p)^2 = q;
        out = "form"  -> Tuple(p, q) for (x + p)^2 = q;
        out = "roots" -> FiniteSet of the real roots.
The key is found from the roots (solved directly), never by completing the square.
"""
from sympy import FiniteSet, Symbol, Tuple, solve, sqrt

_X = Symbol("x")


def _abc(v):
    return v["a"], v["b"], v["c"]


def key(v, p):
    a, b, c = _abc(v)
    out = p["out"]
    if out == "add":
        return (b / (2 * a)) ** 2  # the square of half the coefficient of x, from the definition
    r = solve(a * _X**2 + b * _X + c, _X)
    if len(r) != 2 or not all(t.is_real for t in r):
        raise ValueError("two distinct real roots expected")
    if out == "roots":
        return FiniteSet(*r)
    pp, q = -(r[0] + r[1]) / 2, ((r[0] - r[1]) / 2) ** 2
    return q if out == "q" else Tuple(pp, q)


def _method(B, C, k, q, p):
    """The completing-the-square steps with a (possibly wrong) added number k and right side q."""
    out = p["out"]
    if out == "add":
        return k
    if out == "q":
        return q
    if out == "form":
        return Tuple(B / 2, q)
    if out == "roots":
        if q <= 0:
            raise ValueError("no two real roots for this model")
        return FiniteSet(-B / 2 + sqrt(q), -B / 2 - sqrt(q))
    raise ValueError("unknown out")


def _BC(v):
    a, b, c = _abc(v)
    return b / a, c / a


def m1(v, p):
    """Adds half the coefficient of x, b/2, without squaring it."""
    B, C = _BC(v)
    if B / 2 == (B / 2) ** 2:
        raise ValueError("b/2 equals its square here")
    return _method(B, C, B / 2, B / 2 - C, p)


def m2(v, p):
    """Adds the square of the whole coefficient of x, b^2, without halving it."""
    B, C = _BC(v)
    if B == 0:
        raise ValueError("b = 0")
    return _method(B, C, B**2, B**2 - C, p)


def m3(v, p):
    """Adds (b/2)^2 to the left side only: (x + b/2)^2 = -c."""
    if p["out"] == "add":
        raise ValueError("the number added is still right")
    B, C = _BC(v)
    return _method(B, C, (B / 2) ** 2, -C, p)


def m4(v, p):
    """Moves the constant across '=' without changing its sign: (x + b/2)^2 = (b/2)^2 + c."""
    if p["out"] == "add":
        raise ValueError("the number added is still right")
    B, C = _BC(v)
    if C == 0:
        raise ValueError("c = 0")
    return _method(B, C, (B / 2) ** 2, (B / 2) ** 2 + C, p)


def m5(v, p):
    """Takes only the positive square root, so finds one root."""
    if p["out"] != "roots":
        raise ValueError("only for roots")
    B, C = _BC(v)
    q = (B / 2) ** 2 - C
    if q <= 0:
        raise ValueError("no real roots")
    return FiniteSet(-B / 2 + sqrt(q))


def m6(v, p):
    """Does not divide by a: completes the square on x^2 + bx + c, keeping b and c as printed."""
    a, b, c = _abc(v)
    if a == 1:
        raise ValueError("a = 1: nothing to divide")
    return _method(b, c, (b / 2) ** 2, (b / 2) ** 2 - c, p)


MODELS = {"key": key, "C04-M1": m1, "C04-M2": m2, "C04-M3": m3, "C04-M4": m4, "C04-M5": m5, "C04-M6": m6}
