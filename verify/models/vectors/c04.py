"""C04 Section formula: answer models (the key, and one per misconception).

params["ask"] says what the item asks:
  point  inputs A, B, m, n; params ext ("1" external, else internal):
         the position vector of R dividing AB in m : n;
  end    inputs A, P, m, n (internal): the end B, when P divides AB in m : n;
  third  inputs A, B, G: the third vertex C of triangle ABC with centroid G.
Points come in as tuples "(2, -1, 3)" (returned as a Matrix) or as vector expressions "6*a + 2*b".

The key comes from the definition, not the formula: R lies on AB with AR = (m / (m + n)) AB
inside the segment, or AR = (m / (m - n)) AB outside it, and r = a + AR (triangle law);
the centroid is the point with AG = (2/3) of the median from A, D the midpoint of BC.
"""
from sympy import Matrix, Rational, symbols, solve
from sympy.core.containers import Tuple


def _v(x):
    return Matrix(list(x)) if isinstance(x, (Tuple, tuple, list)) else x


def _is_ext(p):
    return p.get("ext") == "1"


def _true_point(a, b, m, n, ext):
    """From the definition: r = a + k (b - a), k = AR / AB as a signed fraction."""
    k = m / (m - n) if ext else m / (m + n)
    return a + k * (b - a)


def _solve_end(formula, a, p):
    """The end B with formula(a, B) = p, solved component by component."""
    if isinstance(p, Matrix):
        xs = symbols("x0:%d" % p.rows)
        B = Matrix(xs)
        sol = solve(list(formula(a, B) - p), xs, dict=True)
        assert len(sol) == 1
        return B.subs(sol[0])
    x = symbols("x_end")
    (s,) = solve(formula(a, x) - p, x)
    return s


def _apply(v, p, rule, name):
    """Run a student's section rule rule(a, b, m, n, ext) on the item's ask."""
    m, n = v["m"], v["n"]
    if p["ask"] == "point":
        return rule(_v(v["A"]), _v(v["B"]), m, n, _is_ext(p))
    if p["ask"] == "end":
        return _solve_end(lambda a, b: rule(a, b, m, n, False), _v(v["A"]), _v(v["P"]))
    raise ValueError(f"{name} doesn't apply to {p['ask']}")


def key(v, p):
    if p["ask"] == "third":
        A, B, G = _v(v["A"]), _v(v["B"]), _v(v["G"])
        # C with A + (2/3)(D - A) = G, D the midpoint of BC: solve from the definition
        return _solve_end(lambda a, c: a + Rational(2, 3) * ((B + c) / 2 - a), A, G)
    return _apply(v, p, _true_point, "key")


def m1(v, p):  # weights swapped: m goes with A, n with B
    if p["ask"] == "third":
        # on the median CD (D the midpoint of AB), G = (2C + D) / 3 instead of (C + 2D) / 3
        A, B, G = _v(v["A"]), _v(v["B"]), _v(v["G"])
        D = (A + B) / 2
        return (3 * G - D) / 2
    rule = lambda a, b, m, n, ext: (m * a - n * b) / (m - n) if ext else (m * a + n * b) / (m + n)
    return _apply(v, p, rule, "C04-M1")


def m2(v, p):  # external division done with the internal formula
    if not (p["ask"] == "point" and _is_ext(p)):
        raise ValueError("only external division")
    return _apply(v, p, lambda a, b, m, n, ext: (m * b + n * a) / (m + n), "C04-M2")


def m3(v, p):  # external: changes the sign in the numerator only, keeps m + n below
    if not (p["ask"] == "point" and _is_ext(p)):
        raise ValueError("only external division")
    return _apply(v, p, lambda a, b, m, n, ext: (m * b - n * a) / (m + n), "C04-M3")


def m4(v, p):  # takes the displacement AR = k AB as the position vector of R (drops + a)
    if p["ask"] == "third":
        raise ValueError("no ratio on a centroid item")
    rule = lambda a, b, m, n, ext: (m / (m - n) if ext else m / (m + n)) * (b - a)
    return _apply(v, p, rule, "C04-M4")


def m5(v, p):  # forgets the denominator: m b + n a, or A + B + C = G for the centroid
    if p["ask"] == "third":
        return _v(v["G"]) - _v(v["A"]) - _v(v["B"])
    rule = lambda a, b, m, n, ext: m * b - n * a if ext else m * b + n * a
    return _apply(v, p, rule, "C04-M5")


def m6(v, p):  # puts the centroid at the midpoint of a median: G = (C + D) / 2
    if p["ask"] != "third":
        raise ValueError("only centroid items")
    A, B, G = _v(v["A"]), _v(v["B"]), _v(v["G"])
    return 2 * G - (A + B) / 2


MODELS = {"key": key, "C04-M1": m1, "C04-M2": m2, "C04-M3": m3, "C04-M4": m4, "C04-M5": m5, "C04-M6": m6}
