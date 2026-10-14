"""C03 Allied angles: answer models (the key, and one per misconception).

params["e"] is an expression built from sin, cos, tan, cot, sec, cosec of angles written in degrees:
a number (`sin(690)`, `sec(-855)`) or a multiple of 90 plus or minus the angle x (`cos(180 + x)`,
`cot(-x)`, `sin(270 - x)`). x stands for an acute angle theta and is already an angle, so the key is
f(c*pi/180 + s*x).

params["route"] (optional) is how a number of degrees left after removing full turns is written:
  "book" (default): second quadrant 90 + theta, third 180 + theta, fourth 360 - theta.
  "x": second quadrant 180 - theta, third 180 + theta, fourth 360 - theta (the function is kept).
The key is computed straight from sympy's sin, cos, ...; each misconception applies its wrong rule
to every trig term along that route.
"""
from sympy import Function, Symbol, cos, cot, csc, pi, sec, simplify, sin, sympify, tan

X = Symbol("x", real=True)  # the verifier reads option values with a real x

NAMES = ["sin", "cos", "tan", "cot", "sec", "cosec"]
F = {n: Function(n.upper()) for n in NAMES}
SYMPY = {"sin": sin, "cos": cos, "tan": tan, "cot": cot, "sec": sec, "cosec": csc}
CO = {"sin": "cos", "cos": "sin", "tan": "cot", "cot": "tan", "sec": "cosec", "cosec": "sec"}
ODD = {"sin", "tan", "cot", "cosec"}
POSITIVE_IN = {"sin": {1, 2}, "cosec": {1, 2}, "cos": {1, 4}, "sec": {1, 4}, "tan": {1, 3}, "cot": {1, 3}}


def _parse(p):
    return sympify(p["e"], locals={**{n: F[n] for n in NAMES}, "x": X})


def _name(fn):
    return fn.func.__name__.lower()


def _split(arg):
    """arg = c + s*x: c in degrees, s in {-1, 0, 1}."""
    c, rest = arg.as_coeff_Add()
    s = simplify(rest / X) if rest != 0 else 0
    if s not in (-1, 0, 1):
        raise ValueError(f"angle {arg} is not c + x or c - x")
    return c, int(s)


def _sign(f, q):
    return 1 if q in POSITIVE_IN[f] else -1


def _at(f, c, s):
    """f at c degrees plus s*x, exactly."""
    return SYMPY[f](c * pi / 180 + s * X)


def _allied(f, c, s, route):
    """The allied form of f(c + s x): (k, s, theta_degrees or None, allied?) with angle = 90k + s*theta."""
    if s != 0:  # c is a multiple of 90
        if c % 90 != 0 or c < 0:
            raise ValueError(f"{c} is not a non-negative multiple of 90")
        return int(c // 90), s, None, c != 0
    turns, a = divmod(c, 360)
    if a % 90 == 0:
        raise ValueError(f"{c} lands on an axis")
    if a < 90:
        return 0, 1, a, turns != 0
    if a < 180:
        return (1, 1, a - 90, True) if route == "book" else (2, -1, 180 - a, True)
    if a < 270:
        return 2, 1, a - 180, True
    return 4, -1, 360 - a, True


def _term(f, arg, rule, route):
    c, s = _split(arg)
    # Negative angle first: f(-u) = f(u) for cos and sec, -f(u) for the rest.
    if (s == 0 and c < 0) or (c == 0 and s == -1):
        odd = False if rule == "M4" else f in ODD
        return (-1 if odd else 1) * _term(f, -arg, rule, route)
    if rule == "M5":  # drops the multiple of 90 degrees
        if s == 0:
            if c % 90 == 0:
                raise ValueError("no remainder after dropping multiples of 90")
            return _at(f, c % 90, 0)
        return _at(f, 0, s)
    k, s2, th, allied = _allied(f, c, s, route)
    if not allied:
        return _at(f, c, s)
    switch = k % 2 == 1
    if rule == "M1":
        switch = not switch
    g = CO[f] if switch else f
    q = (k % 4) + 1 if s2 == 1 else ((k - 1) % 4) + 1
    sign = {"M2": _sign(g, q), "M3": 1}.get(rule, _sign(f, q))
    value = _at(g, 0, 1) if th is None else _at(g, th, 0)
    return sign * value


def _apply(p, rule):
    e = _parse(p)
    route = p.get("route", "book")
    reps = {fn: _term(_name(fn), fn.args[0], rule, route) for fn in e.atoms(*F.values())}
    return simplify(e.xreplace(reps))


def key(v, p):
    """Straight from sympy's own sin, cos, ...: no allied-angle rule is used."""
    e = _parse(p)
    reps = {}
    for fn in e.atoms(*F.values()):
        c, s = _split(fn.args[0])
        reps[fn] = _at(_name(fn), c, s)
    return simplify(e.xreplace(reps))


def m1(v, p):
    """Reverses the switch: keeps the function at 90 and 270, switches it at 180 and 360."""
    return _apply(p, "M1")


def m2(v, p):
    """Switches correctly but takes the sign of the new function in that quadrant."""
    return _apply(p, "M2")


def m3(v, p):
    """Drops the quadrant sign: every allied term comes out positive."""
    return _apply(p, "M3")


def m4(v, p):
    """Drops the minus sign of a negative angle: f(-x) = f(x) for every function."""
    return _apply(p, "M4")


def m5(v, p):
    """Drops the multiple of 90 degrees, as if the function repeated every 90 degrees."""
    return _apply(p, "M5")


MODELS = {"key": key, "C03-M1": m1, "C03-M2": m2, "C03-M3": m3, "C03-M4": m4, "C03-M5": m5}
