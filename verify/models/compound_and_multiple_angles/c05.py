"""C05 Half angles: answer models (the key, and one per misconception).

params["form"] says what the item gives:
  angle  input a: the full angle x in radians (exact); params["ask"] is "sin", "cos" or "tan" of x/2.
  ratio  inputs t (tan x) or c (cos x), and q (the quadrant of x, with 0 < x < 2*pi); ask as above.
  expr   params["e"] names an expression in x from EXPRS; the answer is what it simplifies to.

The key never uses the half-angle formulas:
  angle  sympy's own sin, cos, tan of a/2.
  ratio  the complex square root of cos x + i sin x (de Moivre): its argument is x/2, or x/2 - pi
         when x is past pi, so the root is negated there. Its real part is cos(x/2), imaginary sin(x/2).
  expr   the book's right-hand side R, returned only after checking L = R exactly: both sides are
         rewritten in u = tan(x/4) (x = 4 arctan u) and their difference must cancel to 0.

Each misconception is the student's own half-angle rule, written in c = cos x, s = sin x, t = tan x.
The sign sigma comes from the quadrant of x/2 (for M3, of x). In "expr" items every rule takes the
positive branch and works with sin^2(x/2) or tan(x/2) as the route says (EXPRS).
  M1  swaps the formulas: sin(x/2) = sqrt((1 + c)/2), cos(x/2) = sqrt((1 - c)/2), tan(x/2) = (1 + c)/s.
  M2  drops the square root: sin(x/2) = (1 - c)/2, cos(x/2) = (1 + c)/2, tan(x/2) = (1 - c)/(1 + c).
  M3  right formulas, but the sign from the quadrant of x instead of x/2.
  M4  halves the ratio: sin(x/2) = s/2, cos(x/2) = c/2, tan(x/2) = t/2.
  M5  forgets to divide by 2: sin(x/2) = sqrt(1 - c), cos(x/2) = sqrt(1 + c) (tan(x/2) comes out right).
"""
from sympy import Abs, I, Symbol, cancel, cos, cot, expand_complex, expand_trig, im, pi, re, simplify, sin, sqrt, tan

X = Symbol("x", real=True)  # the verifier reads option values with a real x
U = Symbol("u", real=True)

POSITIVE_IN = {"sin": {1, 2}, "cos": {1, 4}, "tan": {1, 3}}

# name: (L, R, the student's working of L in T = tan(x/2), S2 = sin^2(x/2), c, s, t; which of T, S2 it uses)
EXPRS = {
    # Ex 3.3 Q3(xi): (tan(x/2) + cot(x/2)) / (cot(x/2) - tan(x/2)) = sec x
    "tancot": (
        (tan(X / 2) + cot(X / 2)) / (cot(X / 2) - tan(X / 2)),
        1 / cos(X),
        lambda T, S2, c, s, t: (T + 1 / T) / (1 / T - T),
        "T",
    ),
    # Ex 3.3 Q3(xix): sin x tan(x/2) + 2 cos x = 1 + cos x. Route: sin x tan(x/2) = 2 sin^2(x/2).
    "sintan": (
        sin(X) * tan(X / 2) + 2 * cos(X),
        1 + cos(X),
        lambda T, S2, c, s, t: 2 * S2 + 2 * c,
        "S2",
    ),
}


def _sign(ratio, quadrant):
    return 1 if quadrant in POSITIVE_IN[ratio] else -1


def _quadrant(a):
    k = a / (pi / 2)
    if k.is_integer:
        raise ValueError(f"{a} lies on an axis")
    return int(k.floor()) % 4 + 1


def _full(v, p):
    """cos x, sin x and the quadrant of x."""
    if p["form"] == "angle":
        a = v["a"]
        return cos(a), sin(a), _quadrant(a)
    q = int(v["q"])
    if "t" in v:
        c = _sign("cos", q) / sqrt(1 + v["t"] ** 2)
        return c, v["t"] * c, q
    c = v["c"]
    return c, _sign("sin", q) * sqrt(1 - c**2), q


def _half_quadrant(q):
    return 1 if q in (1, 2) else 2  # 0 < x < 2*pi puts x/2 in quadrant I or II


def _identity(L, R):
    """L = R for every x: put x = 2h, expand, then write sin h, cos h in u = tan(h/2)."""
    h = Symbol("h", real=True)
    diff = expand_trig((L - R).subs(X, 2 * h)).rewrite(sin).rewrite(cos)
    diff = expand_trig(diff).subs({sin(h): 2 * U / (1 + U**2), cos(h): (1 - U**2) / (1 + U**2)})
    return cancel(diff) == 0


def key(v, p):
    if p["form"] == "expr":
        L, R, *_ = EXPRS[p["e"]]
        if not _identity(L, R):
            raise ValueError(f"{p['e']}: L is not R")
        return R
    ask = p["ask"]
    if p["form"] == "angle":
        return simplify({"sin": sin, "cos": cos, "tan": tan}[ask](v["a"] / 2))
    c, s, q = _full(v, p)
    w = expand_complex(sqrt(c + I * s))
    if q in (3, 4):
        w = -w
    ch, sh = simplify(re(w)), simplify(im(w))
    return simplify({"sin": sh, "cos": ch, "tan": sh / ch}[ask])


def _rule(m, c, s, t):
    """The student's (sin, cos, tan) of x/2 without the sign, and sin^2(x/2), T for expr items."""
    if m == "key":
        return sqrt((1 - c) / 2), sqrt((1 + c) / 2), Abs(s / (1 + c)), (1 - c) / 2, s / (1 + c)
    if m == "M1":
        return sqrt((1 + c) / 2), sqrt((1 - c) / 2), Abs((1 + c) / s), (1 + c) / 2, (1 + c) / s
    if m == "M2":
        return (1 - c) / 2, (1 + c) / 2, (1 - c) / (1 + c), ((1 - c) / 2) ** 2, (1 - c) / (1 + c)
    if m == "M5":
        return sqrt(1 - c), sqrt(1 + c), None, 1 - c, None
    raise ValueError(m)


def _student(m, v, p):
    if p["form"] == "expr":
        if m == "M3":
            raise ValueError("no quadrant in an identity")
        c, s = cos(X), sin(X)
        if m == "M4":
            T, S2 = tan(X) / 2, (s / 2) ** 2
        else:
            *_, S2, T = _rule(m, c, s, None)
        _, _, route, uses = EXPRS[p["e"]]
        if {"T": T, "S2": S2}[uses] is None:
            raise ValueError(f"{m} gets tan(x/2) right")
        return simplify(route(T, S2, c, s, s / c))
    ask = p["ask"]
    c, s, q = _full(v, p)
    if m == "M4":
        return simplify({"sin": s / 2, "cos": c / 2, "tan": s / c / 2}[ask])
    sh, ch, th, *_ = _rule("key" if m == "M3" else m, c, s, None)
    mag = {"sin": sh, "cos": ch, "tan": th}[ask]
    if mag is None:
        raise ValueError(f"{m} gets tan(x/2) right")
    quad = q if m == "M3" else _half_quadrant(q)
    return simplify(_sign(ask, quad) * mag)


def m1(v, p):
    """Swaps the formulas: sin^2(x/2) = (1 + cos x)/2, cos^2(x/2) = (1 - cos x)/2."""
    return _student("M1", v, p)


def m2(v, p):
    """Drops the square root: sin(x/2) = (1 - cos x)/2."""
    return _student("M2", v, p)


def m3(v, p):
    """Takes the sign from the quadrant of x, not of x/2."""
    return _student("M3", v, p)


def m4(v, p):
    """Halves the ratio: sin(x/2) = (1/2) sin x."""
    return _student("M4", v, p)


def m5(v, p):
    """Forgets to divide by 2: sin^2(x/2) = 1 - cos x."""
    return _student("M5", v, p)


MODELS = {"key": key, "C05-M1": m1, "C05-M2": m2, "C05-M3": m3, "C05-M4": m4, "C05-M5": m5}
