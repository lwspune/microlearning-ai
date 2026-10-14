"""C03 Values at standard angles: answer models (the key, and one per misconception).

params["expr"]: an expression in sin, cos, tan, cot, sec, cosec of angles in **degrees**
(e.g. "4*cot(45) - sec(60)**2 + sin(30)"). An angle may use the symbol t, whose value
(in degrees) is inputs["t"] (e.g. "cos(2*t) + sin(3*t)" with t = 30).
The calls stay unevaluated until a model decides what each one is worth.
"""
from sympy import Abs, Function, Mul, Pow, Symbol, cos, cot, csc, pi, sec, simplify, sin, sympify, tan, zoo, nan, oo

NAMES = ["sin", "cos", "tan", "cot", "sec", "cosec"]
F = {n: Function("d" + n) for n in NAMES}  # unevaluated: dsin(30) means sin 30°
TRUE = {"sin": sin, "cos": cos, "tan": tan, "cot": cot, "sec": sec, "cosec": csc}
CO = {"sin": "cos", "cos": "sin", "tan": "cot", "cot": "tan", "sec": "cosec", "cosec": "sec"}
T = Symbol("t")
QUADRANTAL = {0, 90, 180, 270, 360}


def _parse(p):
    return sympify(p["expr"], locals={**{n: F[n] for n in NAMES}, "t": T})


def _calls(e):
    """Every trig call in e, as (name, call)."""
    return [(n, c) for n in NAMES for c in e.atoms(F[n])]


def _true(name, deg):
    return TRUE[name](pi * sympify(deg) / 180)


def _evaluate(e, v, rule):
    """Substitute t, then replace each call by rule(name, angle in degrees) (None = the true value)."""
    if "t" in v:
        e = e.subs(T, v["t"])
    changed = False
    reps = {}
    for name, c in _calls(e):
        deg = c.args[0]
        got = rule(name, deg)
        if got is None:
            got = _true(name, deg)
        elif simplify(got - _true(name, deg)) != 0:
            changed = True
        reps[c] = got
    out = simplify(e.xreplace(reps))
    if out.has(zoo, nan, oo, -oo):
        raise ValueError("a term is undefined")
    return out, changed


def _wrong(e, v, rule, why):
    out, changed = _evaluate(e, v, rule)
    if not changed:
        raise ValueError(why)
    return out


def key(v, p):
    """Each value straight from the definition: the exact sine, cosine, ... of the angle in radians."""
    return _evaluate(_parse(p), v, lambda n, d: None)[0]


def m1(v, p):
    """30° and 60° mixed up: reads the co-function's value, so sin 30° = √3/2, cos 60° = √3/2,
    tan 60° = 1/√3, sec 60° = 2/√3 (45° is unaffected)."""
    return _wrong(_parse(p), v, lambda n, d: _true(CO[n], d) if d in (30, 60) else None, "no 30° or 60° term")


def m2(v, p):
    """On an axis, sine and cosine swapped: cos 90° = 1, sin 0° = 1, sin 180° = -1, cos 270° = -1
    (and so tan, sec, ... follow from the swapped pair)."""
    return _wrong(_parse(p), v, lambda n, d: _true(CO[n], d) if d in QUADRANTAL else None, "no axis angle whose value changes")


def m3(v, p):
    """On an axis, the sign of the coordinate dropped: cos 180° = 1, sin 270° = 1, sec 180° = 1."""
    return _wrong(_parse(p), v, lambda n, d: Abs(_true(n, d)) if d in QUADRANTAL else None, "no negative axis value")


def m4(v, p):
    """Reciprocals paired wrongly: sec θ = 1/sin θ and cosec θ = 1/cos θ."""
    def rule(n, d):
        if n == "sec":
            return 1 / _true("sin", d)
        if n == "cosec":
            return 1 / _true("cos", d)
        return None
    return _wrong(_parse(p), v, rule, "no sec or cosec term whose value changes")


def m5(v, p):
    """A multiple of the angle pulled out of the function: sin 2θ = 2 sin θ, cos 3θ = 3 cos θ."""
    e = _parse(p)
    reps = {}
    for name, c in _calls(e):
        k, rest = c.args[0].as_coeff_Mul()
        if rest == T and k != 1:
            reps[c] = k * F[name](T)
    if not reps:
        raise ValueError("no multiple of θ inside a function")
    return _evaluate(e.xreplace(reps), v, lambda n, d: None)[0]


def m6(v, p):
    """The power dropped: sec² 60° worked out as sec 60°, cos³ 30° as cos 30°."""
    e = _parse(p)
    reps = {pw: pw.base for pw in e.atoms(Pow) if any(pw.base.func == F[n] for n in NAMES)}
    if not reps:
        raise ValueError("no power of a trig value")
    return _evaluate(e.xreplace(reps), v, lambda n, d: None)[0]


MODELS = {"key": key, "C03-M1": m1, "C03-M2": m2, "C03-M3": m3, "C03-M4": m4, "C03-M5": m5, "C03-M6": m6}
