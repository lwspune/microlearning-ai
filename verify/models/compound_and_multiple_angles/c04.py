"""C04 Double angles: answer models (the key, and one per misconception).

params["form"] says what the item gives:
  ratio  inputs: one of s, c, t, sec (sin x, cos x, tan x or sec x) and q (the quadrant of x);
         params["ask"] is "sin", "cos" or "tan": the item asks for that ratio of 2x.
  expr   params["e"] is an expression in x built from sin, cos, tan, cot, sec, cosec; the item
         asks what it equals. Every term whose angle has an even coefficient (cos(2*x), sin(4*x))
         is a double angle, and each misconception expands it by its own rule, down to single angles.

The key never uses a double-angle formula: for a ratio it squares cos x + i sin x (whose argument is
2x) and reads off the parts; for an expression it is sympy's own value of the expression.
"""
from sympy import Function, I, Symbol, cos, cot, csc, im, re, sec, simplify, sin, sqrt, sympify, tan

X = Symbol("x", real=True)  # the verifier reads option values with a real x

NAMES = ["sin", "cos", "tan", "cot", "sec", "cosec"]
F = {n: Function(n.upper()) for n in NAMES}
SYMPY = {"sin": sin, "cos": cos, "tan": tan, "cot": cot, "sec": sec, "cosec": csc}
RECIPROCAL = {"cot": "tan", "sec": "cos", "cosec": "sin"}


# ---- the rules: f(2u) from s = sin u and c = cos u -------------------------------------------

def _right(f, s, c):
    t = s / c
    return {"sin": 2 * s * c, "cos": c**2 - s**2, "tan": 2 * t / (1 - t**2)}[f]


def _m1(f, s, c):
    """The 2 comes out front: sin 2A = 2 sin A, cos 2A = 2 cos A, tan 2A = 2 tan A."""
    return {"sin": 2 * s, "cos": 2 * c, "tan": 2 * s / c}[f]


def _m2(f, s, c):
    """cos 2A with the squares swapped: sin^2 A - cos^2 A (so 1 - cos 2A = 2cos^2 A)."""
    return s**2 - c**2 if f == "cos" else _right(f, s, c)


def _m3(f, s, c):
    """Drops the 2 in the numerator: sin 2A = sin A cos A, tan 2A = tan A / (1 - tan^2 A)."""
    t = s / c
    return {"sin": s * c, "tan": t / (1 - t**2)}.get(f) if f != "cos" else _right(f, s, c)


def _m4(f, s, c):
    """tan 2A = 2 tan A / (1 + tan^2 A): the plus sign of the sin 2A-in-tan formula."""
    t = s / c
    return 2 * t / (1 + t**2) if f == "tan" else _right(f, s, c)


def _m6(f, s, c):
    """Reads sin 2A as sin^2 A: f(2A) = f(A)^2."""
    return {"sin": s**2, "cos": c**2, "tan": (s / c) ** 2}[f]


# ---- ratio items ----------------------------------------------------------------------------

def _sin_cos(v, positive=False):
    """sin x and cos x from one ratio and the quadrant (the quadrant fixes the signs)."""
    q = int(v["q"])
    ss = 1 if q in (1, 2) else -1  # sign of sin x
    cs = 1 if q in (1, 4) else -1  # sign of cos x
    if "s" in v:
        s = v["s"]
        c = cs * sqrt(1 - s**2)
    elif "c" in v or "sec" in v:
        c = v["c"] if "c" in v else 1 / v["sec"]
        s = ss * sqrt(1 - c**2)
    else:
        t = v["t"]
        c = cs / sqrt(1 + t**2)
        s = t * c
    s, c = simplify(s), simplify(c)
    if positive:
        return abs(s), abs(c)
    return s, c


def _ratio(rule, v, p, positive=False):
    s, c = _sin_cos(v, positive)
    out = rule(p["ask"], s, c)
    if out is None:
        raise ValueError(f"rule has no {p['ask']} 2x")
    return simplify(out)


# ---- expression items -----------------------------------------------------------------------

def _parse(p):
    return sympify(p["e"], locals={**{n: F[n] for n in NAMES}, "x": X})


def _expand(rule, f, arg):
    """f(arg) with every double angle expanded by `rule`, down to single angles."""
    k, rest = arg.as_coeff_Mul()
    if not (k.is_Integer and k % 2 == 0 and k != 0):
        return SYMPY[f](arg)
    u = arg / 2
    if f in RECIPROCAL:
        return 1 / _expand(rule, RECIPROCAL[f], arg)
    s, c = _expand(rule, "sin", u), _expand(rule, "cos", u)
    out = rule(f, s, c)
    if out is None:
        raise ValueError(f"rule has no {f} of a double angle")
    return out


def _expr(rule, p):
    e = _parse(p)
    reps = {fn: _expand(rule, fn.func.__name__.lower(), fn.args[0]) for fn in e.atoms(*F.values())}
    return simplify(e.xreplace(reps))


def _apply(rule, v, p):
    if p["form"] == "ratio":
        return _ratio(rule, v, p)
    return _expr(rule, p)


# ---- models ---------------------------------------------------------------------------------

def key(v, p):
    if p["form"] == "ratio":
        s, c = _sin_cos(v)
        z = (c + I * s) ** 2  # cos 2x + i sin 2x, by squaring (argument doubles)
        c2, s2 = simplify(re(z)), simplify(im(z))
        return simplify({"sin": s2, "cos": c2, "tan": s2 / c2}[p["ask"]])
    e = _parse(p)
    return simplify(e.xreplace({fn: SYMPY[fn.func.__name__.lower()](fn.args[0]) for fn in e.atoms(*F.values())}))


def m1(v, p):
    """The 2 comes out front: sin 2A = 2 sin A (and cos, tan likewise)."""
    return _apply(_m1, v, p)


def m2(v, p):
    """Swaps the squares in cos 2A: cos 2A = sin^2 A - cos^2 A."""
    return _apply(_m2, v, p)


def m3(v, p):
    """Drops the 2 of sin 2A = 2 sin A cos A (and of tan 2A's numerator)."""
    return _apply(_m3, v, p)


def m4(v, p):
    """tan 2A = 2 tan A / (1 + tan^2 A)."""
    return _apply(_m4, v, p)


def m5(v, p):
    """Ignores the quadrant: takes sin x and cos x both positive."""
    if p["form"] != "ratio":
        raise ValueError("only when the ratios come from one ratio and a quadrant")
    return _ratio(_right, v, p, positive=True)


def m6(v, p):
    """Reads sin 2A as sin^2 A."""
    return _apply(_m6, v, p)


MODELS = {"key": key, "C04-M1": m1, "C04-M2": m2, "C04-M3": m3, "C04-M4": m4, "C04-M5": m5, "C04-M6": m6}
