"""C05 Forming an equation from its roots: answer models (the key, and one per misconception).

An answer is an equation poly = 0, given as the polynomial in x: integer coefficients with no
common factor and a positive x^2 coefficient (so equal equations are equal values). M4's
answer is left as the student writes it.

p["kind"] picks the question type:
  surd     roots (v["p"] + sqrt(v["q"])) / v["r"] and (v["p"] - sqrt(v["q"])) / v["r"]
  times    roots k alpha, k beta (v["k"])         } alpha, beta are the roots of
  shift    roots alpha + k, beta + k (v["k"])     }   a x^2 + b x + c = 0
  plusinv  roots alpha + 1/beta, beta + 1/alpha   }   (v["a"], v["b"], v["c"]);
  ratio    roots alpha/beta, beta/alpha           }   s = alpha + beta, p = alpha beta
  cubes_mn alpha^3, beta^3 are the roots of x^2 + m x + n = 0 -> the value m + n
"""
from sympy import Poly, Rational, Symbol, expand, gcd_list, ilcm, simplify, sqrt

X = Symbol("x", real=True)


def _kind(p):
    return p["kind"]


def _sp(v):
    """s and p read from a x^2 + b x + c = 0 (the method the students use)."""
    a, b, c = v["a"], v["b"], v["c"]
    return -b / a, c / a


def _roots(v):
    """The two roots by the quadratic formula."""
    a, b, c = v["a"], v["b"], v["c"]
    r = sqrt(b**2 - 4 * a * c)
    return (-b + r) / (2 * a), (-b - r) / (2 * a)


def _norm(poly):
    """poly = 0 with integer coprime coefficients and a positive x^2 coefficient."""
    cs = [Rational(simplify(c)) for c in Poly(expand(poly), X).all_coeffs()]
    d = ilcm(*[c.q for c in cs])
    ints = [c * d for c in cs]
    g = gcd_list(ints)
    if ints[0] < 0:
        g = -g
    return expand(sum(c / g * X ** (len(ints) - 1 - i) for i, c in enumerate(ints)))


def _eq(S, P):
    return _norm(X**2 - S * X + P)


def _new_roots(v, k):
    """The new roots, built from the actual roots (the definition)."""
    if k == "surd":
        return (v["p"] + sqrt(v["q"])) / v["r"], (v["p"] - sqrt(v["q"])) / v["r"]
    al, be = _roots(v)
    if k == "times":
        return v["k"] * al, v["k"] * be
    if k == "shift":
        return al + v["k"], be + v["k"]
    if k == "plusinv":
        return al + 1 / be, be + 1 / al
    if k == "ratio":
        return al / be, be / al
    if k == "cubes_mn":
        return al**3, be**3
    raise ValueError(k)


def _sum_prod(v, k):
    """The correct new sum and product, in s and p (what a student who has it right computes)."""
    if k == "surd":
        P_, q, r = v["p"], v["q"], v["r"]
        return 2 * P_ / r, (P_**2 - q) / r**2
    s, p = _sp(v)
    if k == "times":
        return v["k"] * s, v["k"] ** 2 * p
    if k == "shift":
        return s + 2 * v["k"], p + v["k"] * s + v["k"] ** 2
    if k == "plusinv":
        return s + s / p, p + 2 + 1 / p
    if k == "ratio":
        return (s**2 - 2 * p) / p, Rational(1)
    if k == "cubes_mn":
        return s**3 - 3 * p * s, p**3
    raise ValueError(k)


def _answer(S, P, k):
    """The equation x^2 - S x + P = 0, or for cubes_mn the value m + n = -S + P."""
    if k == "cubes_mn":
        return expand(-S + P)
    return _eq(S, P)


def key(v, p):
    k = _kind(p)
    r1, r2 = _new_roots(v, k)
    S, P = simplify(expand(r1 + r2)), simplify(expand(r1 * r2))
    return _answer(S, P, k)


def m1(v, p):
    """Writes x^2 + (sum) x + product = 0: the wrong sign on the x term."""
    k = _kind(p)
    S, P = _sum_prod(v, k)
    if k == "cubes_mn":
        return expand(S + P)  # takes m = alpha^3 + beta^3
    return _eq(-S, P)


def m2(v, p):
    """Pushes the change through the old sum and product: new sum f(s), new product f(p)."""
    k = _kind(p)
    if k == "surd" or k == "ratio":
        raise ValueError("no single change of each root")
    s, pr = _sp(v)
    if k == "times":
        S, P = v["k"] * s, v["k"] * pr
    elif k == "shift":
        S, P = s + v["k"], pr + v["k"]
    elif k == "plusinv":
        S, P = s + 1 / s, _sum_prod(v, k)[1]  # 1/alpha + 1/beta taken as 1/(alpha + beta)
    elif k == "cubes_mn":
        S, P = s**3, pr**3
    else:
        raise ValueError(k)
    return _answer(S, P, k)


def m3(v, p):
    """Substitutes the wrong way: for roots k alpha puts kx for x, for alpha + k puts x + k."""
    k = _kind(p)
    a, b, c, kk = v.get("a"), v.get("b"), v.get("c"), v.get("k")
    if k == "times":
        t = kk * X
    elif k == "shift":
        t = X + kk
    else:
        raise ValueError("only for k alpha and alpha + k")
    return _norm(a * t**2 + b * t + c)


def m4(v, p):
    """Clears the fractions in x^2 - S x + P = 0 but leaves the x^2 coefficient at 1."""
    k = _kind(p)
    if k == "cubes_mn":
        raise ValueError("value question")
    S, P = _sum_prod(v, k)
    d = ilcm(Rational(S).q, Rational(P).q)
    if d == 1:
        raise ValueError("no fractions to clear")
    return expand(X**2 - d * S * X + d * P)


def m5(v, p):
    """Gives the correction term the wrong sign: alpha^2 + beta^2 = s^2 + 2p, alpha^3 + beta^3 = s^3 + 3ps."""
    k = _kind(p)
    s, pr = _sp(v)
    if k == "ratio":
        S, P = (s**2 + 2 * pr) / pr, Rational(1)
    elif k == "cubes_mn":
        S, P = s**3 + 3 * pr * s, pr**3
    else:
        raise ValueError("only for squares or cubes of the roots")
    return _answer(S, P, k)


def m6(v, p):
    """Multiplies the surd pair as (p + sqrt q)(p - sqrt q) = p^2 + q."""
    if _kind(p) != "surd":
        raise ValueError("only for a surd pair")
    P_, q, r = v["p"], v["q"], v["r"]
    return _eq(2 * P_ / r, (P_**2 + q) / r**2)


MODELS = {"key": key, "C05-M1": m1, "C05-M2": m2, "C05-M3": m3, "C05-M4": m4, "C05-M5": m5, "C05-M6": m6}
