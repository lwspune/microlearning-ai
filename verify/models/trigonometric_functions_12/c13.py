"""C13 sin⁻¹(sin x) and its relatives: answer models (the key, and one per misconception).

Inputs: x, the angle inside (a number such as 5*pi/3 or 4, or the symbol x); and, when x is the
symbol, s: a sample angle inside the interval the stem gives x (the branch is the same all over it).
Param f: "sin", "cos" or "tan", the function in f⁻¹(f(x)).

The key comes from the definition: f⁻¹(c) is the one angle in f's principal range whose f is c.
It searches the angles ±x + kπ for the one in the range with the same ratio, and checks it.
"""
from sympy import N, Symbol, cos, pi, simplify, sin, tan

FN = {"sin": sin, "cos": cos, "tan": tan}
_KS = range(-12, 13)


def _in_range(f, y):
    """y (a number) in f's principal range."""
    y = float(N(y, 30))
    lo, hi = {"sin": (-0.5, 0.5), "cos": (0, 1), "tan": (-0.5, 0.5)}[f]
    lo, hi = lo * float(N(pi)), hi * float(N(pi))
    eps = 1e-12
    if f == "tan":
        return lo + eps < y < hi - eps
    return lo - eps <= y <= hi + eps


def _sample(v):
    """The number to test ranges at: x itself, or the sample s for the symbol x."""
    x = v["x"]
    return x.subs(x, v["s"]) if isinstance(x, Symbol) else x


def _at(v, y):
    return y.subs(v["x"], v["s"]) if isinstance(v["x"], Symbol) else y


def _same_ratio(f, a, b, sign=1):
    """f(a) = sign * f(b), as an identity (symbolic) or exactly (numbers)."""
    d = FN[f](a) - sign * FN[f](b)
    if simplify(d) == 0:
        return True
    return d.free_symbols == set() and abs(N(d, 40)) < 1e-30


def _find(v, f, sign=1):
    """The angle ±x + kπ in f's principal range with f(angle) = sign * f(x)."""
    x = v["x"]
    found = []
    for e in (1, -1):
        for k in _KS:
            y = e * x + k * pi
            if _in_range(f, _at(v, y)) and _same_ratio(f, y, x, sign):
                found.append(y)
    vals = {round(float(N(_at(v, y), 30)), 9) for y in found}
    assert len(vals) == 1, f"no single angle for {f} at {x}: {found}"
    return found[0]


def key(v, p):
    f = p["f"]
    y = _find(v, f)
    if not isinstance(v["x"], Symbol):  # cross-check with sympy's own inverse
        inv = {"sin": "asin", "cos": "acos", "tan": "atan"}[f]
        import sympy
        assert abs(N(getattr(sympy, inv)(FN[f](v["x"])) - y, 30)) < 1e-20
    return y


def m1(v, p):
    """Cancels f⁻¹ against f: the answer is x."""
    return v["x"]


def m2(v, p):
    """Drops the sign of a negative ratio: f⁻¹(|f(x)|), the acute angle."""
    x = v["x"]
    if isinstance(x, Symbol):
        raise ValueError("needs a number")
    if not FN[p["f"]](x) < 0:
        raise ValueError("needs a negative ratio")
    return _find(v, p["f"], sign=-1)


def m3(v, p):
    """Removes whole turns only: the angle x - 2kπ in (−π, π], range not checked."""
    x, s = v["x"], float(N(_sample(v)))
    for k in _KS:
        if -float(N(pi)) < s - 2 * k * float(N(pi)) <= float(N(pi)):
            return x - 2 * k * pi
    raise ValueError("out of reach")


def m4(v, p):
    """Uses sine's rule π − x for every function, once x is outside the range."""
    if _in_range(p["f"], _sample(v)):
        raise ValueError("x is already in the range")
    return pi - v["x"]


def m5(v, p):
    """Shifts x by whole multiples of π (tangent's period) into the range, for every function."""
    x = v["x"]
    for k in _KS:
        if _in_range(p["f"], _at(v, x - k * pi)):
            return x - k * pi
    raise ValueError("out of reach")


MODELS = {"key": key, "C13-M1": m1, "C13-M2": m2, "C13-M3": m3, "C13-M4": m4, "C13-M5": m5}
