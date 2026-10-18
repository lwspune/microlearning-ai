"""C02 Forming a differential equation: answer models (the key, and one per misconception).

An answer is a differential equation, given as the expression E in E = 0, in x, y, y1 = dy/dx
and y2 = d^2y/dx^2. Every result is put in one form (_canon): fractions cleared, nonzero factors
free of y, y1, y2 (numbers, powers of x, exponentials) divided out, and the coefficient of the
highest derivative made positive.

Params:
  fam  the family: "coslog"  y = A cos(log x) + B sin(log x);
                   "exp"     y = A e^{kx} + B e^{-kx}            (input k);
                   "ellipse" A x^2 + B y^2 = 1;
                   "circ"    circles with centre (h, k) on y = k touching the X-axis:
                             (x - h)^2 + (y - k)^2 = k^2           (input k);
                   "origin"  circles through the origin, centre (a, 0) on the X-axis:
                             x^2 + y^2 = 2ax.
  drop the constant M1 overlooks (exp: "B"; circ: "h").

The key differentiates the family as many times as it has constants and eliminates them with
sympy's solve (it never uses a remembered answer). Each misconception redoes the work with one
wrong rule.
"""
from sympy import (Function, Mul, Poly, Symbol, cos, diff, exp, expand, factor, fraction, log, sin,
                   simplify, solve, together)

X = Symbol("x", real=True)
Y = Symbol("y", real=True)
Y1, Y2 = Symbol("y1"), Symbol("y2")
A, B, H, CA = Symbol("A"), Symbol("B"), Symbol("h"), Symbol("a")
_yf = Function("yf")(X)


def _canon(e):
    """E = 0 in one form: numerator only, nonzero factors free of y, y1, y2 dropped, sign fixed."""
    num, _ = fraction(together(simplify(e)))
    keep = [f for f in Mul.make_args(factor(num)) if f.has(Y, Y1, Y2)]
    out = expand(Mul(*keep))
    top = Y2 if out.has(Y2) else Y1
    if not out.has(top):
        raise ValueError(f"not a differential equation: {out}")
    lead = Poly(out, top).LC()
    if lead.could_extract_minus_sign():
        out = -out
    return out


def _sym(e):
    """yf(x) and its derivatives as the symbols y, y1, y2."""
    return e.subs(diff(_yf, X, 2), Y2).subs(diff(_yf, X), Y1).subs(_yf, Y)


def _implicit(fam, v):
    """The family as F(x, y) = 0 (y as the function yf(x)) and its arbitrary constants."""
    if fam == "ellipse":
        return A * X**2 + B * _yf**2 - 1, [A, B]
    if fam == "circ":
        k = v["k"]
        return (X - H) ** 2 + (_yf - k) ** 2 - k**2, [H]
    if fam == "origin":
        return X**2 + _yf**2 - 2 * CA * X, [CA]
    if fam == "coslog":
        return _yf - (A * cos(log(X)) + B * sin(log(X))), [A, B]
    if fam == "exp":
        k = v["k"]
        return _yf - (A * exp(k * X) + B * exp(-k * X)), [A, B]
    raise ValueError(f"unknown family {fam}")


def _eliminate(eqs, consts):
    """Solve all equations but one for the constants (a unique solution), put them in the last."""
    for skip in range(len(eqs) - 1, -1, -1):
        rest = [e for i, e in enumerate(eqs) if i != skip]
        sol = solve(rest, consts, dict=True)
        if len(sol) == 1 and set(sol[0]) == set(consts):
            return eqs[skip].subs(sol[0])
    raise ValueError("could not eliminate the constants")


def key(v, p):
    F, consts = _implicit(p["fam"], v)
    eqs = [_sym(diff(F, X, i)) for i in range(len(consts) + 1)]
    return _canon(_eliminate(eqs, consts))


def m1(v, p):
    """Overlooks one arbitrary constant (takes it as 0), so the family looks smaller than it is."""
    fam, drop = p["fam"], p.get("drop")
    if fam not in ("exp", "circ") or not drop:
        raise ValueError("M1 is modelled for the exp and circ families")
    F, consts = _implicit(fam, v)
    c = Symbol(drop)
    F, consts = F.subs(c, 0), [s for s in consts if s != c]
    if not consts:  # nothing left to eliminate: the student differentiates once and stops
        return _canon(_sym(diff(F, X)))
    eqs = [_sym(diff(F, X, i)) for i in range(len(consts) + 1)]
    return _canon(_eliminate(eqs, consts))


def m2(v, p):
    """Treats the term holding the arbitrary constant (2ax) as a constant: its derivative taken as 0."""
    if p["fam"] != "origin":
        raise ValueError("M2 is modelled for the origin family")
    return _canon(_sym(diff(X**2 + _yf**2, X)))


def m3(v, p):
    """Isolating a constant, forgets to divide by the factor multiplying it."""
    fam = p["fam"]
    if fam == "origin":  # 2x + 2y y1 = 2a, with 2a = (x^2 + y^2)/x taken as x^2 + y^2
        return _canon(2 * X + 2 * Y * Y1 - (X**2 + Y**2))
    if fam == "ellipse":  # A x + B y y1 = 0 gives A = -B y y1 / x, taken as -B y y1; then A + B y1^2 + B y y2 = 0
        return _canon(-B * Y * Y1 + B * Y1**2 + B * Y * Y2)
    if fam == "circ":  # 2(x - h) + 2(y - k) y1 = 0 gives x - h = -(y - k) y1, taken as -2(y - k) y1
        k = v["k"]
        return _canon((-2 * (Y - k) * Y1) ** 2 + (Y - k) ** 2 - k**2)
    raise ValueError("M3 is modelled for the origin, ellipse and circ families")


def m4(v, p):
    """Chain rule: drops the inner derivative."""
    fam = p["fam"]
    u = Symbol("u")  # stands for log x
    if fam == "coslog":  # d/dx cos(log x) taken as -sin(log x): differentiates in u = log x
        f = A * cos(u) + B * sin(u)
        eqs = [Y - f, Y1 - diff(f, u), Y2 - diff(f, u, 2)]
        return _canon(_eliminate(eqs, [A, B]).subs(u, log(X)))
    if fam == "exp":  # d/dx e^{kx} taken as e^{kx}: y2 comes out as A e^{kx} + B e^{-kx}, which is y
        return _canon(Y2 - Y)
    if fam == "ellipse":  # d/dx (B y^2) taken as 2By: 2Ax + 2By = 0, then 2A + 2B y1 = 0
        eqs = [2 * A * X + 2 * B * Y, 2 * A + 2 * B * Y1]
        return _canon(eqs[1].subs(solve(eqs[0], A, dict=True)[0]))
    raise ValueError("M4 is modelled for the coslog, exp and ellipse families")


class _CosSlip(Function):
    """cos whose derivative is taken as +sin (the sign slip)."""

    def fdiff(self, argindex=1):
        return _SinSlip(self.args[0])


class _SinSlip(Function):
    def fdiff(self, argindex=1):
        return _CosSlip(self.args[0])


def m5(v, p):
    """Sign slip: a minus sign lost or misplaced while differentiating, transposing or squaring."""
    fam = p["fam"]
    if fam == "coslog":  # (cos u)' taken as +sin u . u'
        f = A * _CosSlip(log(X)) + B * _SinSlip(log(X))
        eqs = [Y - f, Y1 - diff(f, X), Y2 - diff(f, X, 2)]
        e = _eliminate(eqs, [A, B])
        return _canon(e.replace(_CosSlip, cos).replace(_SinSlip, sin))
    if fam == "exp":  # (e^{-kx})'' taken as -k^2 e^{-kx}, from (-k)^2 = -k^2
        k = v["k"]
        f = A * exp(k * X) + B * exp(-k * X)
        eqs = [Y - f, Y1 - diff(f, X), Y2 - (k**2 * A * exp(k * X) - k**2 * B * exp(-k * X))]
        return _canon(_eliminate(eqs, [A, B]))
    if fam == "circ":  # (x - h)^2 = (-(y - k) y1)^2 taken as -(y - k)^2 y1^2
        k = v["k"]
        return _canon(-((Y - k) * Y1) ** 2 + (Y - k) ** 2 - k**2)
    if fam == "origin":  # (x - a)^2 + y^2 = a^2: x - a = -y y1 gives a = x + y y1, taken as x - y y1
        a = X - Y * Y1
        return _canon((Y * Y1) ** 2 + Y**2 - a**2)
    raise ValueError("M5 is modelled for the coslog, exp, circ and origin families")


def m6(v, p):
    """Product rule: differentiates only one factor, treating the other as a constant."""
    fam = p["fam"]
    if fam == "coslog":  # x y1 = -A sin(log x) + B cos(log x); d/dx (x y1) taken as x y2
        g = -A * sin(log(X)) + B * cos(log(X))
        eqs = [Y - (A * cos(log(X)) + B * sin(log(X))), X * Y1 - g, X * Y2 - diff(g, X)]
        return _canon(_eliminate(eqs, [A, B]))
    if fam == "ellipse":  # A x + B y y1 = 0; d/dx (B y y1) taken as B y y2
        return _canon((A + B * Y * Y2).subs(A, -B * Y * Y1 / X))
    raise ValueError("M6 is modelled for the coslog and ellipse families")


MODELS = {"key": key, "C02-M1": m1, "C02-M2": m2, "C02-M3": m3, "C02-M4": m4, "C02-M5": m5, "C02-M6": m6}
