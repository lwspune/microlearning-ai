"""C08 When a general equation is a pair of lines: answer models (the key, and one per misconception).

Inputs: the coefficients of a x^2 + H xy + b y^2 + G x + F y + c = r, as written in the question
(H, G, F are the WHOLE xy, x and y coefficients; r is the right-hand side, default 0). One of them
holds the unknown k. Every model returns the values of k it accepts: a number when there is one,
a FiniteSet when there are several, EmptySet when there is none.

The key is the definition: P(x, y) = a x^2 + H xy + b y^2 + G x + F y + (c - r) is a pair of lines
when it is a product of two real linear factors. Read as a quadratic in x (a != 0), its roots are
linear in y exactly when the discriminant (H y + G)^2 - 4a(b y^2 + F y + c - r) is the square of a
real linear polynomial in y; likewise in y (b != 0); with a = b = 0, H xy + G x + F y + C factors
exactly when H != 0 and HC = GF. The models use the determinant test being taught, each with its
own wrong rule.
"""
from sympy import EmptySet, FiniteSet, Poly, Rational, Symbol, expand, solve, sympify

x = Symbol("x", real=True)
y = Symbol("y", real=True)
k = Symbol("k")


def _coeffs(v):
    a, H, b, G, F, c = (sympify(v[n]) for n in ("a", "H", "b", "G", "F", "c"))
    r = sympify(v.get("r", "0"))
    return a, H, b, G, F, c, r


def _out(roots):
    roots = sorted(set(roots), key=lambda t: float(t))
    if not roots:
        return EmptySet
    if len(roots) == 1:
        return roots[0]
    return FiniteSet(*roots)


def _square_of_linear(al, be, ga):
    """al t^2 + be t + ga is the square of a real linear (or constant) polynomial in t."""
    return al >= 0 and ga >= 0 and expand(be**2 - 4 * al * ga) == 0


def _is_pair(A, Hc, B, G, F, C):
    """Numeric coefficients: is A x^2 + Hc xy + B y^2 + G x + F y + C a product of two real lines?"""
    if A != 0:
        return _square_of_linear(Hc**2 - 4 * A * B, 2 * Hc * G - 4 * A * F, G**2 - 4 * A * C)
    if B != 0:
        return _square_of_linear(Hc**2 - 4 * A * B, 2 * Hc * F - 4 * B * G, F**2 - 4 * B * C)
    return Hc != 0 and expand(Hc * C - G * F) == 0


def key(v, p):
    a, H, b, G, F, c, r = _coeffs(v)
    C = c - r
    a, b = expand(a), expand(b)
    can_vanish = lambda e: e == 0 or e.has(k)
    conds = [a, b]  # the k where a case switches
    if a != 0:  # a quadratic in x for most k
        conds.append(expand((2 * H * G - 4 * a * F) ** 2 - 4 * (H**2 - 4 * a * b) * (G**2 - 4 * a * C)))
    if can_vanish(a) and b != 0:  # a quadratic in y
        conds.append(expand((2 * H * F - 4 * b * G) ** 2 - 4 * (H**2 - 4 * a * b) * (F**2 - 4 * b * C)))
    if can_vanish(a) and can_vanish(b):  # no square terms
        conds.append(expand(H * C - G * F))
    cands = set()
    for i, e in enumerate(conds):
        if e == 0 and i >= 2:
            raise ValueError("a condition holds for every k")
        if e.has(k):
            cands |= {t for t in solve(e, k) if t.is_real}
    good = [t for t in cands if _is_pair(*(sympify(z).subs(k, t) for z in (a, H, b, G, F, C)))]
    return _out(good)


def _delta(a, h, b, g, f, c, swap=False, two=2):
    if swap:
        return a * b * c + two * f * g * h - a * g**2 - b * f**2 - c * h**2
    return a * b * c + two * f * g * h - a * f**2 - b * g**2 - c * h**2


def _solve(v, half_gf=True, swap=False, two=2, move_r=True, check=True):
    """Solve the (possibly misremembered) determinant condition for k, then apply the student's checks:
    a second-degree term survives and h^2 >= ab (skipped when check is False)."""
    a, H, b, G, F, c, r = _coeffs(v)
    h = H / 2
    g, f = (G / 2, F / 2) if half_gf else (G, F)
    C = c - r if move_r else c
    d = expand(_delta(a, h, b, g, f, C, swap=swap, two=two))
    if not d.has(k):
        raise ValueError("the condition does not involve k")
    roots = [t for t in solve(d, k) if t.is_real]
    if check:
        roots = [
            t for t in roots
            if not (a.subs(k, t) == 0 and H.subs(k, t) == 0 and b.subs(k, t) == 0)
            and (h**2 - a * b).subs(k, t) >= 0
        ]
    return _out(roots)


def m1(v, p):
    """Takes g and f as the whole x and y coefficients, not half of them."""
    a, H, b, G, F, c, r = _coeffs(v)
    if G == 0 and F == 0:
        raise ValueError("no x or y term: halving changes nothing")
    return _solve(v, half_gf=False)


def m2(v, p):
    """Takes the determinant condition as the whole test: keeps every root, even one that leaves no
    second-degree term or makes h^2 < ab."""
    out = _solve(v, check=False)
    if out == key(v, p):
        raise ValueError("every root passes the other checks")
    return out


def m3(v, p):
    """Pairs a with g^2 and b with f^2 when expanding: abc + 2fgh - ag^2 - bf^2 - ch^2."""
    return _solve(v, swap=True)


def m4(v, p):
    """Writes the middle term as fgh, not 2fgh."""
    a, H, b, G, F, c, r = _coeffs(v)
    if expand(H * G * F) == 0:
        raise ValueError("fgh = 0: the 2 changes nothing")
    return _solve(v, two=1)


def m5(v, p):
    """Leaves the right-hand constant where it is: takes c as the constant on the left."""
    a, H, b, G, F, c, r = _coeffs(v)
    if r == 0:
        raise ValueError("the right-hand side is already 0")
    return _solve(v, move_r=False)


MODELS = {"key": key, "C08-M1": m1, "C08-M2": m2, "C08-M3": m3, "C08-M4": m4, "C08-M5": m5}
