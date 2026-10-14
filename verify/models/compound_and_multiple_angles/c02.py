"""C02 tan of a sum or difference: answer models (the key, and one per misconception).

params["form"] says what the item gives; params["op"] is "+" or "-" (A + B or A - B);
params["ask"] is "tan" (default) or "cot".
  angles    inputs a, b (radians) and optional c (a multiple of pi added on): tan(c + (a op b)).
  tans      inputs ta, tb: tan A and tan B.
  ratios    inputs sa or ca (sin A or cos A), qa (A's quadrant), and sb or cb, qb likewise.
  pi4ratio  input x: tan(pi/4 + x) / tan(pi/4 - x).
  cotdiff   inputs x, y: tan A - tan B = x, cot B - cot A = y; asks cot(A - B).

The key never uses the formula being taught: it reads tan straight from sympy's exact values,
or multiplies (1 + i tan A)(1 +/- i tan B), whose argument is A +/- B, and takes Im / Re.
Each misconception is the student's own formula for tan(A op B), fed the same tan A and tan B.
"""
from sympy import I, cot, im, pi, re, simplify, sqrt, tan


def _s(p):
    return 1 if p.get("op", "+") == "+" else -1


def _tan_from_ratios(v, side, positive=False):
    """tan of an angle from its sin or cos and its quadrant (the quadrant fixes the other ratio's sign)."""
    q = int(v["q" + side])
    if "s" + side in v:
        s = v["s" + side]
        c = sqrt(1 - s**2) * (1 if q in (1, 4) else -1)
    else:
        c = v["c" + side]
        s = sqrt(1 - c**2) * (1 if q in (1, 2) else -1)
    t = simplify(s / c)
    return abs(t) if positive else t


def _tans(v, p, positive=False):
    form = p["form"]
    if form == "angles":
        return tan(v["a"]), tan(v["b"])
    if form == "tans":
        return v["ta"], v["tb"]
    if form == "ratios":
        return _tan_from_ratios(v, "a", positive), _tan_from_ratios(v, "b", positive)
    raise ValueError(f"no tan A, tan B for form {form}")


def _by_product(ta, tb, s):
    """tan(A + sB) from (1 + i tan A)(1 + i s tan B): its argument is A + sB."""
    z = (1 + I * ta) * (1 + I * s * tb)
    return simplify(im(z) / re(z))


def _ask(t, p):
    return simplify(1 / t) if p.get("ask", "tan") == "cot" else simplify(t)


def key(v, p):
    s, form = _s(p), p["form"]
    if form == "angles":
        ang = v.get("c", 0) + v["a"] + s * v["b"]
        return simplify(cot(ang) if p.get("ask", "tan") == "cot" else tan(ang))
    if form == "pi4ratio":
        x = v["x"]
        return tan(pi / 4 + x) / tan(pi / 4 - x)
    if form == "cotdiff":
        x, y = v["x"], v["y"]
        prod = x / y  # cot B - cot A = (tan A - tan B) / (tan A tan B)
        # (1 + i tan A)(1 - i tan B) = (1 + tan A tan B) + i(tan A - tan B) has argument A - B,
        # so cot(A - B) = real part / imaginary part (x, y are real, so read the parts off directly).
        return simplify((1 + prod) / x)
    return _ask(_by_product(*_tans(v, p), s), p)


def _student(rule, v, p):
    """The student's tan(A op B) by their rule, then cot if asked."""
    s, form = _s(p), p["form"]
    if form == "pi4ratio":
        t = tan(v["x"])
        return simplify(rule(1, t, 1) / rule(1, t, -1))
    if form == "cotdiff":
        x, y = v["x"], v["y"]
        if rule is _m3:
            raise ValueError("the sum tan A + tan B isn't given")
        prod = x / y
        # every rule here is (tan A - tan B) / (1 + k tan A tan B) or tan A - tan B, so feed it those
        return _ask(rule.from_parts(x, prod), p)
    ta, tb = _tans(v, p)
    return _ask(rule(ta, tb, s), p)


def _right(ta, tb, s):
    return (ta + s * tb) / (1 - s * ta * tb)


def _m1(ta, tb, s):
    """Denominator with the numerator's sign: (tan A + tan B) / (1 + tan A tan B)."""
    return (ta + s * tb) / (1 + s * ta * tb)


_m1.from_parts = lambda d, prod: d / (1 - prod)  # A - B: (tan A - tan B) / (1 - tan A tan B)


def _m2(ta, tb, s):
    """tan(A + B) = tan A + tan B."""
    return ta + s * tb


_m2.from_parts = lambda d, prod: d


def _m3(ta, tb, s):
    """The other sign's formula: tan(A + B) taken as (tan A - tan B) / (1 + tan A tan B)."""
    return (ta - s * tb) / (1 + s * ta * tb)


def m1(v, p):
    """Gives the denominator the numerator's sign: tan(A +/- B) = (tan A +/- tan B) / (1 +/- tan A tan B)."""
    return _student(_m1, v, p)


def m2(v, p):
    """Treats tan as if it spreads over a sum: tan(A +/- B) = tan A +/- tan B."""
    return _student(_m2, v, p)


def m3(v, p):
    """Mixes up the sum and difference formulas: uses the A - B formula for A + B, and the reverse
    (so tan(pi/4 + x) comes out as (1 - tan x) / (1 + tan x))."""
    return _student(_m3, v, p)


def m4(v, p):
    """Copies the tan pattern onto cot: cot(A +/- B) = (cot A +/- cot B) / (1 -/+ cot A cot B).
    With cot = 1/tan this is -(tan A +/- tan B) / (1 -/+ tan A tan B) = -tan(A +/- B)."""
    if p.get("ask", "tan") != "cot":
        raise ValueError("only for a cot question")
    s, form = _s(p), p["form"]
    if form == "cotdiff":
        x, y = v["x"], v["y"]
        ca_cb, ca_minus_cb = y / x, -y  # cot A cot B = 1/(tan A tan B); cot A - cot B = -y
        if s != -1:
            raise ValueError("cotdiff is A - B")
        return simplify(ca_minus_cb / (1 + ca_cb))
    ta, tb = _tans(v, p)
    ca, cb = 1 / ta, 1 / tb
    return simplify((ca + s * cb) / (1 - s * ca * cb))


def m5(v, p):
    """Ignores the quadrants: takes tan A and tan B positive, whatever the signs of sin and cos."""
    if p["form"] != "ratios":
        raise ValueError("only when tan comes from sin or cos and a quadrant")
    ta, tb = _tans(v, p, positive=True)
    return _ask(_right(ta, tb, _s(p)), p)


MODELS = {"key": key, "C02-M1": m1, "C02-M2": m2, "C02-M3": m3, "C02-M4": m4, "C02-M5": m5}
