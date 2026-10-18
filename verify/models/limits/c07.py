"""C07 Trigonometric limits: answer models (the key, and one per misconception).

Every item is a limit as x -> 0. params["f"] is the question's function of x (sympy syntax;
m and n are plain nonzero constants). params["g"], when given, is the same function rewritten
with the identities a student uses first (1 - cos u = 2 sin^2(u/2), cos A - cos B = ...), so
only sin and tan of multiples of x are left: the form in which the angle is matched to the
denominator. params["deg"] = "1" means every angle is in degrees (x stands for x degrees).
"""
from sympy import S, Symbol, cos, limit, pi, simplify, sin
from sympy.functions.elementary.trigonometric import TrigonometricFunction
from sympy.parsing.sympy_parser import parse_expr

x = Symbol("x", real=True)
_LOCAL = {"x": x, "m": Symbol("m"), "n": Symbol("n")}


def _parse(s):
    return parse_expr(s, local_dict=_LOCAL)


def _is_trig(a):
    return isinstance(a, TrigonometricFunction)


def _radians(e, p):
    """Degrees to radians inside every trigonometric function, when the item is in degrees."""
    if p.get("deg") != "1":
        return e
    return e.replace(_is_trig, lambda a: a.func(a.args[0].subs(x, x * pi / 180)))


def _limit(e):
    """The two-sided limit at 0, from the definition (both one-sided limits, equal and finite)."""
    left, right = limit(e, x, 0, "-"), limit(e, x, 0, "+")
    if simplify(left - right) == 0 and left.is_finite is not False:
        return simplify(left)
    raise ValueError("no limit")


def key(v, p):
    return _limit(_radians(_parse(p["f"]), p))


def _rework_angles(p, new_arg):
    """The student's form (g, else f) with each angle k*u replaced by new_arg(k, u); the limit of that."""
    e = _parse(p.get("g", p["f"]))
    changed = []

    def swap(a):
        k, u = a.args[0].as_independent(x, as_Add=False)
        if k == 1:
            return a
        changed.append(k)
        return a.func(new_arg(k, u))

    e = e.replace(_is_trig, swap)
    if not changed:
        raise ValueError("no angle with a coefficient to match")
    return _limit(_radians(e, p))


def m1(v, p):
    """M1: sin(k u)/u taken as 1: the angle is never matched to the denominator (k dropped)."""
    return _rework_angles(p, lambda k, u: u)


def m2(v, p):
    """M2: sin(k u)/u taken as 1/k: the angle is matched the wrong way round (k inverted)."""
    return _rework_angles(p, lambda k, u: u / k)


def m3(v, p):
    """M3: angles in degrees used as if they were radians."""
    if p.get("deg") != "1":
        raise ValueError("needs angles in degrees")
    return _limit(_parse(p["f"]))


def _one_minus_cos(p, rewrite):
    """f with every 1 - cos(u) replaced by rewrite(u); the limit of that."""
    e = _parse(p["f"])
    hit = []

    def is_1_minus_cos(a):
        return a.is_Add and len(a.args) == 2 and S.One in a.args and any(
            (-t).func == cos for t in a.args if t != S.One)

    def swap(a):
        u = next((-t).args[0] for t in a.args if t != S.One)
        hit.append(u)
        return rewrite(u)

    e = e.replace(is_1_minus_cos, swap)
    if not hit:
        raise ValueError("no 1 - cos u")
    return _limit(_radians(e, p))


def m4(v, p):
    """M4: 1 - cos u taken as sin^2 u (confused with 1 - cos^2 u)."""
    return _one_minus_cos(p, lambda u: sin(u) ** 2)


def m5(v, p):
    """M5: 1 - cos u taken as sin^2(u/2): the 2 of 2 sin^2(u/2) dropped."""
    return _one_minus_cos(p, lambda u: sin(u / 2) ** 2)


def m6(v, p):
    """M6: 0/0 read as 0, because sin 0 = 0 makes the numerator 0."""
    if key(v, p) == 0:
        raise ValueError("the limit really is 0")
    return S.Zero


MODELS = {"key": key, "C07-M1": m1, "C07-M2": m2, "C07-M3": m3, "C07-M4": m4, "C07-M5": m5, "C07-M6": m6}
