"""C04 Powers and products of trigonometric functions: answer models (the key, and one per misconception).

Item types (params["type"]):
- "sc": the integral of sin^m x cos^n x (inputs m, n; one of them odd). The odd power keeps one
  factor for dt: n odd puts t = sin x, else m odd puts t = cos x (dt = -sin x dx).
- "tan": the integral of tan^n x (input n), peeling off sec^2 x with tan^2 x = sec^2 x - 1.
- "prod": the integral of a product of sines and cosines, params["fs"] the functions ("cos cos cos")
  and inputs k1, k2, ... their multipliers of x; turned into a sum by the product-to-sum formulae.
The key is built the book's way and then checked by differentiation: its derivative must equal the
integrand, at sample points and symbolically. Every model returns the antiderivative without + c.
"""
from sympy import Abs, Integer, Mul, Rational, Symbol, cos, diff, expand, expand_trig, integrate, log, sec, simplify, sin, tan
from sympy.simplify.fu import TR8

x = Symbol("x", real=True)
t = Symbol("t")


def _int(v, name):
    k = v[name]
    if not (k.is_integer and k >= 0):
        raise ValueError(f"{name} must be a whole number")
    return int(k)


def _integrand(v, p):
    kind = p["type"]
    if kind == "sc":
        return sin(x) ** _int(v, "m") * cos(x) ** _int(v, "n")
    if kind == "tan":
        return tan(x) ** _int(v, "n")
    if kind == "prod":
        return Mul(*[{"sin": sin, "cos": cos}[f](v[f"k{i + 1}"] * x) for i, f in enumerate(p["fs"].split())])
    raise ValueError(f"unknown type {kind}")


def _check(F, v, p):
    """The key is right exactly when its derivative is the integrand."""
    f = _integrand(v, p)
    d = diff(F, x) - f
    for a in (Rational(3, 10), Rational(7, 10), Rational(6, 5), Rational(-2, 5)):
        assert abs(d.subs(x, a).evalf()) < 1e-12, f"key fails at x = {a}"
    forms = (d.rewrite(cos), expand_trig(d), TR8(d))
    assert any(simplify(g) == 0 for g in forms), "key's derivative is not the integrand"
    return F


# ---- sin^m x cos^n x ------------------------------------------------------------------------


def _sc(v, one_minus=1, sign_slip=False, whole_dt=False, split=False):
    """sin^m cos^n as a polynomial in t, integrated and put back. one_minus=-1 writes 1 + t^2 for 1 - t^2."""
    m, n = _int(v, "m"), _int(v, "n")
    if n % 2 == 1:
        back, power, k, sgn = sin(x), m, (n - 1) // 2, 1
    elif m % 2 == 1:
        back, power, k, sgn = cos(x), n, (m - 1) // 2, -1
    else:
        raise ValueError("needs an odd power")
    if sign_slip:
        if sgn == 1:
            raise ValueError("t = sin x has no minus sign to drop")
        sgn = 1
    rest = (1 - one_minus * t**2) ** k
    if whole_dt:
        F = integrate(t**power, t)
    elif split:
        if power == 0 or k == 0:
            raise ValueError("needs two factors in t")
        F = integrate(t**power, t) * integrate(expand(rest), t)
    else:
        F = integrate(expand(t**power * rest), t)
    return sgn * F.subs(t, back)


# ---- tan^n x ----------------------------------------------------------------------------------


def _tan(n, plus=False, log_cos=False):
    """tan^n = tan^(n-2) sec^2 - tan^(n-2) (or + with plus), down to tan x or 1."""
    if n == 0:
        return x
    if n == 1:
        return log(Abs(cos(x))) if log_cos else log(Abs(sec(x)))
    sgn = 1 if plus else -1
    return tan(x) ** (n - 1) / (n - 1) + sgn * _tan(n - 2, plus, log_cos)


# ---- products of sines and cosines ----------------------------------------------------------


def _terms(e, rule="key"):
    """Integrate a sum of c, c cos kx and c sin kx term by term (rule: how a student integrates them)."""
    out = Integer(0)
    for term in expand(e).as_ordered_terms():
        c, rest = term.as_independent(x)
        if rest == 1:
            out += c * x
            continue
        f = rest.func
        k = rest.args[0].as_coeff_Mul()[0]
        if f not in (sin, cos) or rest.args[0] != k * x:
            raise ValueError(f"can't integrate {term}")
        scale = {"key": 1 / k, "nodiv": Integer(1), "times": k, "sign": 1 / k}[rule]
        if f == cos:
            out += c * scale * sin(k * x)
        else:
            out += (1 if rule == "sign" else -1) * c * scale * cos(k * x)
    return out


def _sum(v, p):
    if p["type"] != "prod":
        raise ValueError("needs a product")
    return TR8(_integrand(v, p))


# ---- the models ----------------------------------------------------------------------------


def key(v, p):
    kind = p["type"]
    if kind == "sc":
        F = _sc(v)
    elif kind == "tan":
        F = _tan(_int(v, "n"))
    else:
        F = _terms(_sum(v, p))
    return _check(F, v, p)


def m1(v, p):
    """Ignores the inside's derivative: power rule on a trig function (cos^7 -> cos^8/8), cos kx -> sin kx."""
    kind = p["type"]
    if kind == "prod":
        return _terms(_sum(v, p), "nodiv")
    if kind == "tan":
        n = _int(v, "n")
        return tan(x) ** (n + 1) / (n + 1)
    m, n = _int(v, "m"), _int(v, "n")
    if m and n:
        raise ValueError("needs a single power")
    f, k = (sin(x), m) if m else (cos(x), n)
    return f ** (k + 1) / (k + 1)


def m2(v, p):
    """Takes the whole odd power as dt: with t = sin x, cos^3 x dx = dt, so sin^4 cos^3 -> t^4."""
    if p["type"] != "sc":
        raise ValueError("needs sin^m cos^n")
    return _sc(v, whole_dt=True)


def m3(v, p):
    """Converts with the wrong sign: cos^2 = 1 + sin^2, sin^2 = 1 + cos^2, tan^2 = sec^2 + 1."""
    if p["type"] == "tan":
        return _tan(_int(v, "n"), plus=True)
    if p["type"] != "sc":
        raise ValueError("needs a power")
    return _sc(v, one_minus=-1)


def m4(v, p):
    """Drops the minus in d(cos x) = -sin x dx: sin x dx = dt, int sin kx = cos kx / k, int tan = log|cos|."""
    kind = p["type"]
    if kind == "sc":
        return _sc(v, sign_slip=True)
    if kind == "tan":
        n = _int(v, "n")
        if n % 2 == 0:
            raise ValueError("an even power never reaches int tan x")
        return _tan(n, log_cos=True)
    s = _sum(v, p)
    if not s.has(sin):
        raise ValueError("no sine to integrate")
    return _terms(s, "sign")


def m5(v, p):
    """Integrates each factor of a product separately and multiplies the results."""
    kind = p["type"]
    if kind == "prod":
        out = Integer(1)
        for f in _integrand(v, p).as_ordered_factors():
            out *= _terms(f)
        return out
    if kind == "sc":
        return _sc(v, split=True)
    raise ValueError("needs a product")


def m6(v, p):
    """Multiplies by the coefficient instead of dividing: int cos kx dx = k sin kx."""
    return _terms(_sum(v, p), "times")


MODELS = {"key": key, "C04-M1": m1, "C04-M2": m2, "C04-M3": m3, "C04-M4": m4, "C04-M5": m5, "C04-M6": m6}
