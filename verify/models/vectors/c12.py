"""C12 Vector triple product: answer models (the key, and one per misconception).

params["ask"] says what the item asks (inputs are component tuples unless noted):
  a_bc    inputs a, b, c: the vector a x (b x c);
  ab_c    inputs a, b, c: the vector (a x b) x c;
  coeffs  inputs a, b, c: the pair (lambda, mu) with a x (b x c) = lambda b + mu c;
  dots    inputs ab, ac (the numbers a . b and a . c), b, c: the vector a x (b x c);
  angles  inputs l, m: a, b, c are unit vectors, b and c not parallel, and
          a x (b x c) = l b + m c; the pair (angle between a and b, angle between a and c).

The key never uses the expansion being taught: it takes sympy's Matrix.cross twice, solves a
linear system for (lambda, mu), and for "angles" builds actual unit vectors b, c, solves for a
from the cross products, and reads the angles off a . b and a . c.
"""
from sympy import Matrix, Rational, Tuple, acos, linsolve, simplify, solve, sqrt, symbols


def _v(t):
    return Matrix(list(t))


def _abc(v):
    return _v(v["a"]), _v(v["b"]), _v(v["c"])


def _span(w, b, c):
    """(lambda, mu) with w = lambda b + mu c, solved as a linear system."""
    lam, mu = symbols("lam mu")
    sol = linsolve(list(w - lam * b - mu * c), [lam, mu])
    if not sol:
        raise ValueError("not in the plane of b and c")
    (pair,) = sol
    return Tuple(*pair)


def _from_formula(alpha_b, alpha_c, b, c, ask, v):
    """Turns a student's formula a x (b x c) = alpha_b b + alpha_c c into the item's answer.
    For "angles" the coefficients are the given l, m, and the formula says which dot product
    each equals; alpha_b and alpha_c are then (dot name, sign) pairs."""
    if ask in ("a_bc", "dots"):
        return alpha_b * b + alpha_c * c
    if ask == "coeffs":
        return Tuple(alpha_b, alpha_c)
    raise ValueError(ask)


def _dots(v, p):
    """a . b, a . c and the vectors b, c, for the items that give a (or its dot products)."""
    if p["ask"] == "dots":
        return v["ab"], v["ac"], _v(v["b"]), _v(v["c"])
    a, b, c = _abc(v)
    return a.dot(b), a.dot(c), b, c


def _angles(ab, ac):
    return Tuple(acos(ab), acos(ac))


def _angles_from(v, coef_b_is, coef_c_is):
    """A student's formula as which signed dot product sits on b and on c, e.g. ("ac", 1) means
    the coefficient of b is +a . c. Solves for a . b and a . c from l and m."""
    l, m = v["l"], v["m"]
    got = {}
    for (name, sign), val in ((coef_b_is, l), (coef_c_is, m)):
        got[name] = sign * val
    if set(got) != {"ab", "ac"}:
        raise ValueError("formula does not fix both dot products")
    return _angles(got["ab"], got["ac"])


def key(v, p):
    ask = p["ask"]
    if ask == "angles":
        # b = i and a unit vector c with b . c = -1/4 (a value that lets a, b, c be non-coplanar for these
        # items); a = (x, y, z) unknown, solved from a x (b x c) = l b + m c, then made a unit vector.
        b = Matrix([1, 0, 0])
        c = Matrix([Rational(-1, 4), sqrt(15) / 4, 0])
        x, y, z = symbols("x y z", real=True)
        a = Matrix([x, y, z])
        eqs = list(a.cross(b.cross(c)) - v["l"] * b - v["m"] * c)
        (sol,) = [s for s in solve(eqs, [x, y], dict=True)]
        a = a.subs(sol)
        zz = solve(a.dot(a) - 1, z)
        if not any(r.is_real and r != 0 for r in zz):
            raise ValueError("no unit vector a off the plane of b and c")
        return _angles(simplify(a.dot(b)), simplify(a.dot(c)))
    if ask == "dots":
        # build some a with the given dot products (b, c not parallel), then cross twice
        b, c = _v(v["b"]), _v(v["c"])
        n = b.cross(c)
        x, y = symbols("x y")
        a = x * b + y * c + n
        (sol,) = solve([a.dot(b) - v["ab"], a.dot(c) - v["ac"]], [x, y], dict=True)
        a = a.subs(sol)
        return a.cross(b.cross(c))
    a, b, c = _abc(v)
    if ask == "a_bc":
        return a.cross(b.cross(c))
    if ask == "ab_c":
        return (a.cross(b)).cross(c)
    if ask == "coeffs":
        return _span(a.cross(b.cross(c)), b, c)
    raise ValueError(ask)


def m1(v, p):  # brackets moved: a x (b x c) taken as (a x b) x c, and the other way round
    ask = p["ask"]
    if ask in ("angles", "dots", "coeffs"):
        raise ValueError("needs all three vectors, and (a x b) x c is not in the plane of b and c")
    a, b, c = _abc(v)
    if ask == "a_bc":
        return (a.cross(b)).cross(c)
    if ask == "ab_c":
        return a.cross(b.cross(c))
    raise ValueError(ask)


def m2(v, p):  # the two terms the wrong way round: (a . b) c - (a . c) b, the negative
    ask = p["ask"]
    if ask == "angles":  # l = -(a . c), m = a . b
        return _angles_from(v, ("ac", -1), ("ab", 1))
    if ask == "ab_c":  # (b . c) a - (a . c) b
        a, b, c = _abc(v)
        return b.dot(c) * a - a.dot(c) * b
    ab, ac, b, c = _dots(v, p)
    return _from_formula(-ac, ab, b, c, ask, v)


def m3(v, p):  # each vector paired with the dot product that contains it: (a . b) b - (a . c) c
    ask = p["ask"]
    if ask == "angles":  # l = a . b, m = -(a . c)
        return _angles_from(v, ("ab", 1), ("ac", -1))
    if ask == "ab_c":
        raise ValueError("pairing slip modelled for a x (b x c) only")
    ab, ac, b, c = _dots(v, p)
    return _from_formula(ab, -ac, b, c, ask, v)


def m4(v, p):  # the minus sign dropped: (a . c) b + (a . b) c
    ask = p["ask"]
    if ask == "angles":  # l = a . c, m = a . b
        return _angles_from(v, ("ac", 1), ("ab", 1))
    if ask == "ab_c":  # (a . c) b + (b . c) a
        a, b, c = _abc(v)
        return a.dot(c) * b + b.dot(c) * a
    ab, ac, b, c = _dots(v, p)
    return _from_formula(ac, ab, b, c, ask, v)


MODELS = {"key": key, "C12-M1": m1, "C12-M2": m2, "C12-M3": m3, "C12-M4": m4}
