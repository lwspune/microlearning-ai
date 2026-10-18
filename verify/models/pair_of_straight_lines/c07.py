"""C07 Bisectors of the angles between the lines: answer models (the key, and one per misconception).

The pair through the origin is given in one of two forms (params["form"]):
  pair    inputs a, c, b: the pair a x^2 + c xy + b y^2 = 0 (c = 2h, the WHOLE coefficient of xy);
  lines   inputs a1, b1, a2, b2: the lines a1 x + b1 y = 0 and a2 x + b2 y = 0, as the stem writes them.
params["ask"] is
  "bisectors"  the joint equation of the bisectors, a polynomial in x, y (the locus is poly = 0),
               tidied to integer coefficients with a positive leading one;
  "k"          the value of the unknown k (in a, c or b) for which the bisectors are the pair
               p x^2 + q xy + r y^2 = 0 (inputs p, q, r).

The key never uses the formula h(x^2 - y^2) = (a - b)xy. For the bisectors it uses the definition: a
point is on a bisector when it is equally far from both lines, so with normals n1, n2 the bisectors
are (n1.P)^2 |n2|^2 - (n2.P)^2 |n1|^2 = 0. For k it uses symmetry: a pair of lines is its own mirror
image in each bisector, so reflecting the pair in one of the given lines must give the pair back.
"""
from sympy import Poly, Rational, Symbol, expand, gcd_list, im, lcm_list, simplify, solve, sqrt, symbols

x, y = symbols("x y", real=True)
K = Symbol("k")


def _tidy(e):
    """The polynomial with coprime integer coefficients and a positive leading coefficient."""
    p = Poly(expand(e), x, y)
    cs = [simplify(c) for c in p.coeffs()]
    if not cs or all(c == 0 for c in cs):
        raise ValueError("no equation left")
    if any(c.free_symbols for c in cs):
        return p.as_expr()
    lead = next(c for c in cs if c != 0)
    cs = [simplify(c / abs(lead)) for c in cs]  # a common surd factor cancels
    if any(not c.is_rational for c in cs):
        raise ValueError(f"irrational coefficients {cs}")
    den = lcm_list([Rational(c).q for c in cs])
    p = Poly(sum(simplify(c * den) * x**i * y**j for c, (i, j) in zip(cs, p.monoms())), x, y)
    g = gcd_list([int(c) for c in p.coeffs()])
    p = Poly(p.as_expr() / g, x, y)
    if p.LC() < 0:
        p = -p
    return p.as_expr()


def _pair(v, p):
    """(a, h, b) of the pair a x^2 + 2h xy + b y^2 = 0, from the item."""
    if p["form"] == "pair":
        return v["a"], v["c"] / 2, v["b"]
    if p["form"] == "lines":
        q = Poly(expand((v["a1"] * x + v["b1"] * y) * (v["a2"] * x + v["b2"] * y)), x, y)
        return q.coeff_monomial(x**2), q.coeff_monomial(x * y) / 2, q.coeff_monomial(y**2)
    raise ValueError(f"no form {p['form']!r}")


def _normals(v, p):
    """The two lines as normals (A, B) of A x + B y = 0."""
    if p["form"] == "lines":
        return (v["a1"], v["b1"]), (v["a2"], v["b2"])
    a, h, b = _pair(v, p)
    if simplify(h**2 - a * b) <= 0:
        raise ValueError("not two real distinct lines")
    if b == 0:  # x (a x + 2h y) = 0
        return (1, 0), (a, 2 * h)
    m1, m2 = solve(b * Symbol("m") ** 2 + 2 * h * Symbol("m") + a, Symbol("m"))
    return (-m1, 1), (-m2, 1)  # y = m x, written -m x + y = 0


def _bisectors_by_distance(n1, n2):
    (A1, B1), (A2, B2) = n1, n2
    return _tidy((A1 * x + B1 * y) ** 2 * (A2**2 + B2**2) - (A2 * x + B2 * y) ** 2 * (A1**2 + B1**2))


def _k_by_reflection(v):
    """k such that the pair is symmetric about a line of the target pair p x^2 + q xy + r y^2 = 0."""
    P, Q, R = v["p"], v["q"], v["r"]
    if simplify(P + R) != 0:
        raise ValueError("bisectors are perpendicular: the target needs p + r = 0")
    t = solve(R * Symbol("t") ** 2 + Q * Symbol("t") + P, Symbol("t"))[0]  # one target line, y = t x
    c2, s2 = (1 - t**2) / (1 + t**2), 2 * t / (1 + t**2)  # cos 2θ, sin 2θ
    a, c, b = v["a"], v["c"], v["b"]
    pair = a * x**2 + c * x * y + b * y**2
    mirrored = pair.subs({x: c2 * x + s2 * y, y: s2 * x - c2 * y}, simultaneous=True)
    eqs = [simplify(co) for co in Poly(expand(mirrored - pair), x, y).coeffs()]
    eqs = [e for e in eqs if e != 0]
    sols = solve(eqs, K, dict=True) if eqs else []
    good = []
    for s in sols:
        k = simplify(s[K])
        if k.free_symbols or im(k) != 0:
            continue
        aa, cc, bb = (simplify(e.subs(K, k)) for e in (a, c, b))
        if simplify((cc / 2) ** 2 - aa * bb) <= 0:
            continue  # not two real lines
        if simplify(aa * Q - cc * P) == 0 and simplify(aa * R - bb * P) == 0:
            continue  # the pair IS the target: symmetric, but not bisected by it
        good.append(k)
    if len(good) != 1:
        raise ValueError(f"expected one k, got {good}")
    return good[0]


def key(v, p):
    if p["ask"] == "bisectors":
        n1, n2 = _normals(v, p)
        return _bisectors_by_distance(n1, n2)
    if p["ask"] == "k":
        return _k_by_reflection(v)
    raise ValueError(f"no ask {p['ask']!r}")


# ---- the misconceptions ---------------------------------------------------------------

def _from_formula(v, p, poly_of):
    """Apply a (wrong) bisector formula poly_of(a, h, b), for either ask."""
    if p["ask"] == "bisectors":
        return _tidy(poly_of(*_pair(v, p)))
    if p["ask"] == "k":
        a, h, b = _pair(v, p)
        F = Poly(expand(poly_of(a, h, b)), x, y)
        A, B, C = F.coeff_monomial(x**2), F.coeff_monomial(x * y), F.coeff_monomial(y**2)
        P, Q, R = v["p"], v["q"], v["r"]
        sols = solve([A * Q - B * P, A * R - C * P], K, dict=True)
        ks = [simplify(s[K]) for s in sols if K in s]
        ks = [k for k in ks if not k.free_symbols and im(k) == 0 and simplify(A.subs(K, k)) != 0]
        if len(ks) != 1:
            raise ValueError(f"expected one k, got {ks}")
        return ks[0]
    raise ValueError(f"no ask {p['ask']!r}")


def m1(v, p):
    """Swaps the denominators: (x^2 - y^2)/h = xy/(a - b), i.e. (a - b)(x^2 - y^2) = h xy."""
    return _from_formula(v, p, lambda a, h, b: (a - b) * (x**2 - y**2) - h * x * y)


def m2(v, p):
    """Takes h as the whole coefficient of xy: 2h(x^2 - y^2) = (a - b)xy."""
    return _from_formula(v, p, lambda a, h, b: 2 * h * (x**2 - y**2) - (a - b) * x * y)


def m3(v, p):
    """Writes b - a for a - b: h(x^2 - y^2) = (b - a)xy."""
    return _from_formula(v, p, lambda a, h, b: h * (x**2 - y**2) - (b - a) * x * y)


def m4(v, p):
    """Takes a bisector's slope as the average of the two slopes, s = (m1 + m2)/2 = -h/b,
    and the other bisector perpendicular to it: (y - s x)(x + s y) = 0."""
    if p["ask"] != "bisectors":
        raise ValueError("only for the bisectors themselves")
    a, h, b = _pair(v, p)
    if b == 0:
        raise ValueError("b = 0: one line has no slope")
    s = -h / b
    if s == 0:
        raise ValueError("average slope 0 gives the axes")
    return _tidy((y - s * x) * (x + s * y))


def m5(v, p):
    """Adds and subtracts the two line equations as written, without dividing each by
    sqrt(A^2 + B^2): (u + v)(u - v) = u^2 - v^2 = 0."""
    if p["ask"] != "bisectors" or p["form"] != "lines":
        raise ValueError("needs the two lines written out")
    u = v["a1"] * x + v["b1"] * y
    w = v["a2"] * x + v["b2"] * y
    return _tidy(u**2 - w**2)


MODELS = {"key": key, "C07-M1": m1, "C07-M2": m2, "C07-M3": m3, "C07-M4": m4, "C07-M5": m5}
