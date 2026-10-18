"""C11 A line meeting or lying in a plane: answer models (the key, and one per misconception).

Inputs: the line r = a + lambda b as tuples a, b ("(1, 2, 1)"), and the plane r . n = d as the tuple n and the
number d (so 2x - y + z = 8 is n = (2, -1, 1), d = 8). An item that asks for an unknown holds it as the one free
symbol in the inputs (m or k).

params["ask"]:
  point  where the line meets the plane (a Tuple (x, y, z));
  kind   how the line sits: Symbol("one_point") (it crosses the plane at one point), Symbol("lies_in"),
         Symbol("parallel") (parallel to the plane, not in it), or Symbol("perpendicular");
  param  the value of the unknown that makes the line lie in the plane (a number).
params["form"]: "cart" when the line was given in Cartesian (symmetric) form, "vec" in vector form.

The key comes from the definition: the common points of the line and the plane. For the point it solves
X = a + lambda b and n . X = d together for x, y, z, lambda. For the kind it counts the solutions of that system
(one, none or every lambda). For the unknown it asks n . (a + lambda b) = d to hold for every lambda.
"""
from sympy import Matrix, S, Symbol, Tuple, solve, symbols

LAM = Symbol("lambda")
ONE, IN, PAR, PERP = Symbol("one_point"), Symbol("lies_in"), Symbol("parallel"), Symbol("perpendicular")


def _v(t):
    return Matrix(list(t))


def _parts(v):
    return _v(v["a"]), _v(v["b"]), _v(v["n"]), v["d"]


def _unknown(a, b, n, d):
    free = set().union(a.free_symbols, b.free_symbols, n.free_symbols, getattr(d, "free_symbols", set()))
    if len(free) != 1:
        raise ValueError(f"expected one unknown, found {free}")
    return free.pop()


def _common(a, b, n, d):
    """The common points of the line and the plane, from the system X = a + lambda b, n . X = d."""
    x, y, z = symbols("x y z", real=True)
    X = Matrix([x, y, z])
    eqs = list(X - a - LAM * b) + [n.dot(X) - d]
    sol = solve(eqs, [x, y, z, LAM], dict=True)
    if not sol:
        return PAR, None
    (s,) = sol
    if LAM not in s:
        return IN, None
    return ONE, Tuple(*[c.subs(s) for c in (x, y, z)])


def _answer(a, b, n, d, p):
    ask = p["ask"]
    if ask == "point":
        kind, pt = _common(a, b, n, d)
        if pt is None:
            raise ValueError("the line does not meet the plane at one point")
        return pt
    if ask == "kind":
        return _common(a, b, n, d)[0]
    if ask == "param":
        u = _unknown(a, b, n, d)
        f = (n.dot(a + LAM * b) - d).expand()
        sol = solve([f.coeff(LAM, 1), f.coeff(LAM, 0)], u, dict=True)
        if len(sol) != 1:
            raise ValueError(f"no single value of {u}")
        return sol[0][u]
    raise ValueError(f"unknown ask {ask}")


def key(v, p):
    a, b, n, d = _parts(v)
    return _answer(a, b, n, d, p)


def m1(v, p):  # moves a . n across with the wrong sign: lambda = (a . n - d)/(b . n)
    if p["ask"] != "point":
        raise ValueError("only for the meeting point")
    a, b, n, d = _parts(v)
    if b.dot(n) == 0:
        raise ValueError("b . n = 0")
    lam = (a.dot(n) - d) / b.dot(n)
    return Tuple(*(a + lam * b))


def m2(v, p):  # reads the point of (x - x1)/l = ... with the signs flipped: uses -a for a
    if p.get("form") != "cart":
        raise ValueError("the line is not in Cartesian form")
    a, b, n, d = _parts(v)
    return _answer(-a, b, n, d, p)


def m3(v, p):  # swaps the line's point and direction: works with r = b + lambda a
    a, b, n, d = _parts(v)
    if p["ask"] == "param":
        u = _unknown(a, b, n, d)
        f = (n.dot(b + LAM * a) - d).expand()
        parts = [c for c in (f.coeff(LAM, 1), f.coeff(LAM, 0)) if u in c.free_symbols]
        if len(parts) != 1:
            raise ValueError("the unknown is not in exactly one condition")
        (s,) = solve(parts[0], u)
        return s
    return _answer(b, a, n, d, p)


def m4(v, p):  # b . n = 0 alone means the line lies in the plane: never checks a point
    a, b, n, d = _parts(v)
    if p["ask"] == "kind":
        return IN if b.dot(n) == 0 else ONE
    if p["ask"] == "param":
        if b.dot(n).expand() != 0:
            raise ValueError("b . n is not 0")
        return S.Reals  # "the line lies in the plane whatever the unknown is"
    raise ValueError("only for the kind or the unknown")


def m5(v, p):  # swaps the conditions: b parallel to n means the line is parallel; b . n = 0 means perpendicular
    if p["ask"] != "kind":
        raise ValueError("only for the kind")
    a, b, n, d = _parts(v)
    if b.dot(n) == 0:
        return PERP
    if b.cross(n) == Matrix([0, 0, 0]):
        return PAR
    return ONE


def m6(v, p):  # forgets the point a: takes the line's general point as lambda b
    if p["ask"] != "point":
        raise ValueError("only for the meeting point")
    a, b, n, d = _parts(v)
    if b.dot(n) == 0:
        raise ValueError("b . n = 0")
    return Tuple(*(d / b.dot(n) * b))


MODELS = {"key": key, "C11-M1": m1, "C11-M2": m2, "C11-M3": m3, "C11-M4": m4, "C11-M5": m5, "C11-M6": m6}
