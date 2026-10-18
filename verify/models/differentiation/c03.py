"""C03 Standard derivatives: answer models (the key, and one per misconception).

The item's function is named by params["fn"]:
  "pow": x**n (inputs["n"]);  "exp": a**x (inputs["a"], a > 0);
  "sin", "cos", "tan", "cot", "sec", "csc": the trigonometric function of x.
inputs["at"], when given, is the point: the answer is f'(at); otherwise it is f'(x).
The key is the limit of the difference quotient (first principles), never the table.
"""
from sympy import E, S, Symbol, cos, cot, csc, diff, limit, sec, sin, tan

x = Symbol("x", real=True)
h = Symbol("h")

_TRIG = {"sin": sin, "cos": cos, "tan": tan, "cot": cot, "sec": sec, "csc": csc}


def _f(v, p):
    fn = p["fn"]
    if fn == "pow":
        return x ** v["n"]
    if fn == "exp":
        return v["a"] ** x
    return _TRIG[fn](x)


def _at(v, e):
    """e at the item's point, or e itself for a 'differentiate' item."""
    return e.subs(x, v["at"]) if "at" in v else e


def key(v, p):
    f = _f(v, p)
    pt = v["at"] if "at" in v else x
    return limit((f.subs(x, pt + h) - f.subs(x, pt)) / h, h, 0)


def m1(v, p):
    """M1: a^x differentiated by the power rule, as if the power were a constant: x a^(x - 1)."""
    if p["fn"] != "exp":
        raise ValueError("needs a^x")
    a = v["a"]
    return _at(v, x * a ** (x - 1))


def m2(v, p):
    """M2: every exponential treated like e^x, its own derivative: a^x (the log a dropped)."""
    if p["fn"] != "exp" or v["a"] == E:
        raise ValueError("needs a^x with a != e")
    return _at(v, v["a"] ** x)


def m3(v, p):
    """M3: the derivative of 1/u taken as 1/u' (the reciprocal of the derivative)."""
    fn = p["fn"]
    if fn == "pow" and v["n"] < 0:
        u = x ** (-v["n"])
    elif fn in ("csc", "sec", "cot"):
        u = {"csc": sin(x), "sec": cos(x), "cot": tan(x)}[fn]
    else:
        raise ValueError("needs a reciprocal: 1/x^n, cosec, sec or cot")
    return _at(v, 1 / diff(u, x))


def m4(v, p):
    """M4: x = a put in first, so the 'derivative' is that of a constant: 0."""
    if "at" not in v:
        raise ValueError("needs a point")
    if key(v, p) == 0:
        raise ValueError("the slope really is 0")
    return S.Zero


def m5(v, p):
    """M5: the derivatives of tan and sec swapped (and of cot and cosec)."""
    swapped = {
        "tan": sec(x) * tan(x),
        "sec": sec(x) ** 2,
        "cot": -csc(x) * cot(x),
        "csc": -csc(x) ** 2,
    }
    if p["fn"] not in swapped:
        raise ValueError("needs tan, sec, cot or cosec")
    return _at(v, swapped[p["fn"]])


def m6(v, p):
    """M6: the minus sign the rule produces dropped (cos, cot, cosec; a negative power n)."""
    fn = p["fn"]
    if not (fn in ("cos", "cot", "csc") or (fn == "pow" and v["n"] < 0)):
        raise ValueError("the rule gives no minus sign here")
    return -key(v, p)


MODELS = {"key": key, "C03-M1": m1, "C03-M2": m2, "C03-M3": m3, "C03-M4": m4, "C03-M5": m5, "C03-M6": m6}
