"""C07 sin 18 and cos 36: answer models (the key, and one per misconception).

params["e"] is an expression in sin, cos, tan of angles written in degrees, e.g. "sin(18)",
"cos(36) - sin(18)", "sin(72)**2 - sin(60)**2".

The key evaluates every term straight from sympy's exact sin and cos (sin(pi/10) is already
(sqrt(5) - 1)/4 there): no use of the 2 theta = 90 - 3 theta derivation.

Each misconception is the student's own table of values. The student starts from two numbers,
s = sin 18 and c = cos 36, and gets the rest by the book's routes:
  cos 72 = s, sin 54 = c (complements),
  cos 18 = sin 72 = sqrt(1 - s^2), sin 36 = cos 54 = sqrt(1 - c^2) (Pythagoras).
Angles outside 18, 36, 54, 72 (like 60) are always taken correctly.
"""
from sympy import Function, Rational, cos, pi, simplify, sin, sqrt, sympify

SIN, COS, TAN = Function("SIN"), Function("COS"), Function("TAN")
R5 = sqrt(5)
S18 = (R5 - 1) / 4  # the true values, used only to build the students' wrong tables
C36 = (R5 + 1) / 4
FAMILY = {18, 36, 54, 72}


def _parse(p):
    return sympify(p["e"], locals={"sin": SIN, "cos": COS, "tan": TAN})


def _terms(e):
    """[(name, degrees)] of every trig term."""
    out = []
    for fn in e.atoms(SIN, COS, TAN):
        out.append((fn.func.__name__.lower(), int(fn.args[0])))
    return out


def _exact(name, a):
    x = Rational(a) * pi / 180
    return {"sin": sin, "cos": cos, "tan": lambda t: sin(t) / cos(t)}[name](x)


def _table(s, c, sqrt_rule=None):
    """sin and cos of 18, 36, 54, 72 from a student's s = sin 18 and c = cos 36."""
    root = sqrt_rule or (lambda g: sqrt(1 - g**2))
    c18 = root(s)
    s36 = root(c)
    return {
        ("sin", 18): s, ("cos", 72): s,
        ("cos", 36): c, ("sin", 54): c,
        ("cos", 18): c18, ("sin", 72): c18,
        ("sin", 36): s36, ("cos", 54): s36,
    }


def _value(name, a, table, overrides=None):
    overrides = overrides or {}
    if a not in FAMILY:
        return _exact(name, a)
    if name == "tan":
        return _value("sin", a, table, overrides) / _value("cos", a, table, overrides)
    if (name, a) in overrides:
        return overrides[(name, a)]
    return table[(name, a)]


def _apply(p, table, overrides=None, needs=None):
    e = _parse(p)
    terms = _terms(e)
    if needs is not None and not any((n, a) in needs or (n == "tan" and (("sin", a) in needs or ("cos", a) in needs)) for n, a in terms):
        raise ValueError("no term this mistake changes")
    reps = {}
    for fn in e.atoms(SIN, COS, TAN):
        reps[fn] = _value(fn.func.__name__.lower(), int(fn.args[0]), table, overrides)
    return simplify(e.xreplace(reps))


def key(v, p):
    e = _parse(p)
    reps = {fn: _exact(fn.func.__name__.lower(), int(fn.args[0])) for fn in e.atoms(SIN, COS, TAN)}
    return simplify(e.xreplace(reps))


def m1(v, p):
    """Swaps the two surds: sin 18 = (sqrt5 + 1)/4, cos 36 = (sqrt5 - 1)/4."""
    return _apply(p, _table(C36, S18), needs=set(_table(0, 0)))


def m2(v, p):
    """Keeps the negative root of 4s^2 + 2s - 1 = 0, then cos 36 = 1 - 2 sin^2 18."""
    s = -(1 + R5) / 4
    return _apply(p, _table(s, simplify(1 - 2 * s**2)), needs=set(_table(0, 0)))


def m3(v, p):
    """sin 2 theta = 2 sin theta: sin 36 = 2 sin 18 and sin 72 = 2 sin 36."""
    t = _table(S18, C36)
    over = {("sin", 36): 2 * S18, ("cos", 54): 2 * S18, ("sin", 72): 2 * t[("sin", 36)]}
    return _apply(p, t, over, needs={("sin", 36), ("cos", 54), ("sin", 72)})


def m4(v, p):
    """cos 2 theta = 2 sin^2 theta - 1 (sign reversed): cos 36 = 2 sin^2 18 - 1."""
    t = _table(S18, C36)
    c = simplify(2 * S18**2 - 1)
    return _apply(p, t, {("cos", 36): c, ("sin", 54): c}, needs={("cos", 36), ("sin", 54)})


def m5(v, p):
    """Quadratic formula over a, not 2a: sin 18 = (-2 + sqrt 20)/4; cos 36 = 1 - 2 sin^2 18 from it."""
    s = (R5 - 1) / 2
    return _apply(p, _table(s, simplify(1 - 2 * s**2)), needs={("sin", 18), ("cos", 72), ("cos", 18), ("sin", 72)})


def m6(v, p):
    """Square root term by term: sqrt(1 - g^2) = 1 - g, so cos 18 = 1 - sin 18, sin 36 = 1 - cos 36."""
    return _apply(p, _table(S18, C36, lambda g: 1 - g), needs={("cos", 18), ("sin", 72), ("sin", 36), ("cos", 54)})


MODELS = {"key": key, "C07-M1": m1, "C07-M2": m2, "C07-M3": m3, "C07-M4": m4, "C07-M5": m5, "C07-M6": m6}
