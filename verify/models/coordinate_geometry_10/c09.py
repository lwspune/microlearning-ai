"""C09 Collinear points and parallel lines by slopes: answer models (the key, and one per misconception).

inputs: x1, y1, x2, y2, ... the points in the stem's order; one co-ordinate may be the unknown k.
params:
- names: the points' letters in that order, e.g. "ABCD" or "PQR".
- ask="slopes": segs "AB,BC" (one or more segments); the answer is the slope, or a Tuple of slopes.
  alt: the segment a mistaken student uses in place of the last one (M4: the adjacent side;
  M5: a side in place of a diagonal).
- ask="k": segs "AB,DC", the known segment then the one holding k; shape "col" (collinear points) or
  "pgm" (a parallelogram with the vertices in order). alt as above.

The key never runs the slope test: slopes come from the definition (rise over run), collinearity from a
zero area (determinant), a parallelogram from its diagonals sharing a midpoint (A + C = B + D).
"""
from sympy import Symbol, Tuple, solve, sympify

K = Symbol("k")


def _pts(v, p):
    return {c: (sympify(v[f"x{i}"]), sympify(v[f"y{i}"])) for i, c in enumerate(p["names"], 1)}


def true_slope(P, Q):
    if P[0] == Q[0]:
        raise ValueError("vertical: no slope")
    return (Q[1] - P[1]) / (Q[0] - P[0])


def inverted(P, Q):
    if P[1] == Q[1]:
        raise ValueError("horizontal: no inverse")
    return (Q[0] - P[0]) / (Q[1] - P[1])


def mixed(P, Q):
    return (Q[1] - P[1]) / (P[0] - Q[0])


def summed(P, Q):
    if P[0] + Q[0] == 0:
        raise ValueError("zero sum")
    return (P[1] + Q[1]) / (P[0] + Q[0])


def _segs(p, alt=False):
    s = p["segs"].split(",")
    if alt:
        if "alt" not in p:
            raise ValueError("no alternative segment for this item")
        s[-1] = p["alt"]
    return s


def _slopes(v, p, f_all=true_slope, f_last=None, alt=False):
    pts = _pts(v, p)
    segs = _segs(p, alt)
    out = []
    for i, s in enumerate(segs):
        f = f_last if (f_last and i == len(segs) - 1) else f_all
        out.append(sympify(f(pts[s[0]], pts[s[1]])))
    return out[0] if len(out) == 1 else Tuple(*out)


def _solve_k(eq):
    sol = [s for s in solve(eq, K) if s.is_real]
    if len(sol) != 1:
        raise ValueError("no single k")
    return sol[0]


def _k(v, p, f_all=true_slope, f_last=None, alt=False):
    """k from slope(first segment) = slope(second), each slope by the student's rule."""
    pts = _pts(v, p)
    a, b = _segs(p, alt)
    m = f_all(pts[a[0]], pts[a[1]])
    P, Q = pts[b[0]], pts[b[1]]
    f = f_last or f_all
    num, den = (Q[1] - P[1], Q[0] - P[0])
    if f is true_slope or f is mixed:
        if f is mixed:
            den = -den
        return _solve_k(num - m * den)
    if f is summed:
        return _solve_k((P[1] + Q[1]) - m * (P[0] + Q[0]))
    raise ValueError("unsupported rule")


def key(v, p):
    if p["ask"] == "slopes":
        return _slopes(v, p)
    pts = _pts(v, p)
    if p["shape"] == "col":
        (x1, y1), (x2, y2), (x3, y3) = list(pts.values())[:3]
        return _solve_k(x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2))
    A, B, C, D = (pts[c] for c in p["names"])
    sol = solve([A[0] + C[0] - B[0] - D[0], A[1] + C[1] - B[1] - D[1]], K, dict=True)
    if len(sol) != 1:
        raise ValueError("not a parallelogram for any single k")
    return sol[0][K]


def m1(v, p):
    """Inverts the slope: run over rise, (x2 - x1)/(y2 - y1)."""
    if p["ask"] != "slopes":
        raise ValueError("inverting both slopes gives the same k")
    return _slopes(v, p, f_all=inverted)


def m2(v, p):
    """Subtracts in opposite orders, (y2 - y1)/(x1 - x2): every slope it works out flips sign.
    For k, only the slope holding k is worked out (the other is already known)."""
    if p["ask"] == "slopes":
        return _slopes(v, p, f_all=mixed)
    return _k(v, p, f_last=mixed)


def m3(v, p):
    """Adds the co-ordinates as in the midpoint formula: (y1 + y2)/(x1 + x2)."""
    if p["ask"] == "slopes":
        return _slopes(v, p, f_all=summed)
    return _k(v, p, f_all=summed)


def m4(v, p):
    """In a quadrilateral ABCD, pairs AB with a side next to it (AD or BC) as if opposite."""
    if p.get("alt_kind") != "adj":
        raise ValueError("parallelogram items only")
    if p["ask"] == "slopes":
        return _slopes(v, p, alt=True)
    return _k(v, p, alt=True)


def m5(v, p):
    """Takes a side (AB) for the diagonal (AC) of quadrilateral ABCD."""
    if p.get("alt_kind") != "side":
        raise ValueError("diagonal items only")
    return _slopes(v, p, alt=True)


def m6(v, p):
    """Clearing the fraction a/(x - k) = m, multiplies instead of divides: x - k = a * m."""
    if p["ask"] != "k":
        raise ValueError("k items only")
    pts = _pts(v, p)
    a, b = _segs(p)
    m = true_slope(pts[a[0]], pts[a[1]])
    P, Q = pts[b[0]], pts[b[1]]
    num, den = Q[1] - P[1], Q[0] - P[0]
    if num.has(K) or not den.has(K):
        raise ValueError("k must be in the run only")
    return _solve_k(den - num * m)


MODELS = {"key": key, "C09-M1": m1, "C09-M2": m2, "C09-M3": m3, "C09-M4": m4, "C09-M5": m5, "C09-M6": m6}
