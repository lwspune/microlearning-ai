"""C05 Equations that reduce to the standard forms: answer models (the key, and one per misconception).

Inputs: lhs, rhs, the two sides of the equation in theta (sympy expressions).
A general solution has many equivalent forms, so every answer is compared by its solution set
over a fixed window: the FiniteSet of all solutions theta with 0 <= theta < 4 pi (radians).

Params (strings) describe the standard forms the equation reduces to; the wrong models act on them:
  pieces: "f,m,k[,c];..."  the factors f(m theta) = k (f in sin, cos, tan); c marks the common
          factor a student might divide out.
  cc:     "p,q,s"          cos(p theta) = cos(q theta + s), both sides angles in theta.
  cmp:    "a,b,c"          a cos theta + b sin theta = c.
"""
from sympy import (FiniteSet, Integer, N, acos, asin, atan, atan2, ceiling, pi, simplify, sqrt,
                   sympify, lambdify)

LO, HI = Integer(0), 4 * pi
STEP = pi / 48  # every root of the book's equations is a multiple of pi/48


def _theta(expr):
    syms = list(expr.free_symbols)
    if len(syms) != 1:
        raise ValueError("the equation must be in one angle")
    return syms[0]


def _scan(expr):
    """Every theta in [0, 4 pi) with expr = 0, where expr is defined: the multiples of pi/48 are
    checked exactly, and a numeric sweep confirms there is no root between them."""
    th = _theta(expr)
    roots = []
    for j in range(192):
        c = j * STEP
        val = expr.subs(th, c)
        if not val.is_finite:
            continue
        # values at multiples of pi/48 are algebraic; sympy can't always simplify them to 0
        # (cos(165 pi/16) - sin(99 pi/16)), so zero is decided at 60 digits
        if abs(complex(N(val, 60))) < 1e-50:
            roots.append(c)
    f = lambdify(th, expr, "mpmath")
    known = [float(r) for r in roots]
    M = 4000
    prev = None
    for i in range(M + 1):
        x = float(HI) * i / M
        try:
            y = float(f(x))
        except (ZeroDivisionError, ValueError, TypeError):
            prev = None
            continue
        if prev is not None and abs(y) < 0.5 and abs(prev[1]) < 0.5 and (y == 0 or prev[1] * y < 0):
            if not any(abs(r - x) < 0.01 or abs(r - prev[0]) < 0.01 for r in known):
                raise ValueError(f"a root near {x} is not a multiple of pi/48")
        prev = (x, y)
    return FiniteSet(*roots)


def window(forms):
    """All theta in [0, 4 pi) of the families theta = n P + c, n in Z, for (P, c) in forms."""
    out = set()
    for P, c in forms:
        n = ceiling((LO - c) / P)
        while True:
            th = simplify(n * P + c)
            if not th < HI:
                break
            out.add(th)
            n += 1
    return FiniteSet(*out)


def _pieces(p, drop_common=False):
    if "pieces" not in p:
        raise ValueError("no factor pieces")
    out = []
    for part in p["pieces"].split(";"):
        bits = part.split(",")
        f, m, k = bits[0], sympify(bits[1]), sympify(bits[2])
        common = len(bits) > 3 and bits[3] == "c"
        if drop_common and common:
            continue
        out.append((f, m, k))
    return out


def _forms(f, m, k, divide_period=True):
    """The general solution of f(m theta) = k as families (P, c); divide_period=False divides only
    the angle by m (the M5 slip)."""
    d = m if divide_period else Integer(1)
    if f == "sin":
        a = asin(k)
        return [(2 * pi / d, a / m), (2 * pi / d, (pi - a) / m if divide_period else pi - a / m)]
    if f == "cos":
        a = acos(k)
        return [(2 * pi / d, a / m), (2 * pi / d, -a / m)]
    if f == "tan":
        a = atan(k)
        a = a + pi if a < 0 else a  # the book's alpha for tangent lies in [0, pi): tan 2 theta = -1 uses 3 pi / 4
        return [(pi / d, a / m)]
    raise ValueError(f"unknown ratio {f}")


def _solve(pieces, divide_period=True):
    forms = []
    for f, m, k in pieces:
        forms += _forms(f, m, k, divide_period)
    return window(forms)


def _cc(p):
    if "cc" not in p:
        raise ValueError("not cos = cos")
    return [sympify(x) for x in p["cc"].split(",")]


def _cc_forms(pq, s, branches=("+", "-")):
    """cos(p theta) = cos(q theta + s): p theta = 2n pi + (q theta + s) or 2n pi - (q theta + s)."""
    P, q = pq
    out = []
    if "+" in branches:
        out.append((2 * pi / (P - q), s / (P - q)))
    if "-" in branches:
        out.append((2 * pi / (P + q), -s / (P + q)))
    return out


def _cmp(p):
    """a cos theta + b sin theta = c as cos(theta - beta) = c / R: returns beta and gamma = acos(c / R)."""
    if "cmp" not in p:
        raise ValueError("not a cos theta + b sin theta = c")
    a, b, c = [sympify(x) for x in p["cmp"].split(",")]
    R = sqrt(a**2 + b**2)
    return simplify(atan2(b, a)), simplify(acos(c / R))


def key(v, p):
    """From the definition: every theta in [0, 4 pi) where both sides are defined and equal."""
    return _scan(v["lhs"] - v["rhs"])


def m1(v, p):
    """Divides both sides by the common factor, so its roots are lost."""
    kept = _pieces(p, drop_common=True)
    if len(kept) == len(_pieces(p)):
        raise ValueError("no common factor")
    return _solve(kept)


def m2(v, p):
    """cos A = cos B: keeps only A = 2n pi + B and drops the minus branch."""
    if "cc" in p:
        P, q, s = _cc(p)
        return window(_cc_forms((P, q), s, branches=("+",)))
    beta, gamma = _cmp(p)
    return window([(2 * pi, beta + gamma)])


def m3(v, p):
    """Writes the side as one cosine with the wrong sign of the shift: cos(x + beta) for cos(x - beta)."""
    if "cc" in p:
        P, q, s = _cc(p)
        return window(_cc_forms((P, q), -s))
    beta, gamma = _cmp(p)
    return window([(2 * pi, -beta + gamma), (2 * pi, -beta - gamma)])


def m4(v, p):
    """Squares both sides and keeps every root of the squared equation."""
    return _scan(v["lhs"] ** 2 - v["rhs"] ** 2)


def m5(v, p):
    """For a multiple angle, divides only the angle by the multiple, not the period."""
    if "cc" in p:
        P, q, s = _cc(p)
        return window([(2 * pi, s / (P - q)), (2 * pi, -s / (P + q))])
    pieces = _pieces(p)
    if all(m == 1 for _, m, _ in pieces):
        raise ValueError("no multiple angle")
    return _solve(pieces, divide_period=False)


def m6(v, p):
    """Ignores the sign of a negative value: solves f(m theta) = |k|."""
    pieces = _pieces(p)
    if not any(k < 0 for _, _, k in pieces):
        raise ValueError("no negative value")
    return _solve([(f, m, abs(k)) for f, m, k in pieces])


MODELS = {"key": key, "C05-M1": m1, "C05-M2": m2, "C05-M3": m3, "C05-M4": m4, "C05-M5": m5, "C05-M6": m6}
