"""C04 Area between two curves: answer models (the key, and one per misconception).

Inputs: f and g, the two curves in the order the question names them, each as a function of the
integration variable (params var: "x" for y = f(x), "y" for x = f(y); default "x").
The key is the integral of |f - g| between the outermost points where the curves meet, split at every
meeting point in between, and cross-checked numerically by quadrature of |f - g|.
"""
import mpmath
from sympy import Integer, N, S, Symbol, integrate, lambdify, solveset


def _t(p):
    return Symbol(p.get("var", "x"), real=True)


def _fg(v, p):
    """f and g in the real variable, whatever assumptions the caller parsed them with."""
    t = _t(p)
    real = lambda e: e.xreplace({s: t for s in e.free_symbols if s.name == t.name})
    return real(v["f"]), real(v["g"])


def _roots(v, p):
    """The points where f = g, in order (real values of the variable)."""
    t = _t(p)
    v = dict(zip("fg", _fg(v, p)))
    sols = solveset(v["f"] - v["g"], t, S.Reals)
    return sorted(sols, key=lambda r: float(N(r)))


def _pieces(v, p):
    """(lo, hi, upper, lower) for each piece between consecutive meeting points."""
    t, (f, g) = _t(p), _fg(v, p)
    rs = _roots(v, p)
    if len(rs) < 2:
        raise ValueError("the curves meet fewer than twice")
    out = []
    for lo, hi in zip(rs, rs[1:]):
        mid = (lo + hi) / 2
        up, dn = (f, g) if N((f - g).subs(t, mid)) > 0 else (g, f)
        out.append((lo, hi, up, dn))
    return out


def key(v, p):
    t, v = _t(p), dict(zip("fg", _fg(v, p)))
    area = sum((integrate(up - dn, (t, lo, hi)) for lo, hi, up, dn in _pieces(v, p)), Integer(0))
    h = lambdify(t, v["f"] - v["g"], "mpmath")
    rs = [float(N(r)) for r in _roots(v, p)]
    num = mpmath.quad(lambda s: abs(h(s)), rs)
    assert abs(float(N(area)) - float(num)) < 1e-9, (area, num)
    return area.simplify()


def m1(v, p):
    """Integrates (first curve - second curve), in the order named, straight across: no check of which is on top."""
    t, rs, v = _t(p), _roots(v, p), dict(zip("fg", _fg(v, p)))
    return integrate(v["f"] - v["g"], (t, rs[0], rs[-1])).simplify()


def m2(v, p):
    """Adds the two curves' areas: integrates (f + g) between the meeting points."""
    t, rs, v = _t(p), _roots(v, p), dict(zip("fg", _fg(v, p)))
    return integrate(v["f"] + v["g"], (t, rs[0], rs[-1])).simplify()


def m3(v, p):
    """Right integrand (upper - lower), but the limits are the meeting points' OTHER coordinates."""
    t, pieces = _t(p), _pieces(v, p)
    v = dict(zip("fg", _fg(v, p)))
    if len(pieces) != 1:
        raise ValueError("the curves cross in between")
    lo, hi, up, dn = pieces[0]
    c, d = sorted((v["f"].subs(t, lo), v["f"].subs(t, hi)), key=lambda r: float(N(r)))
    if (c - lo).simplify() == 0 and (d - hi).simplify() == 0:
        raise ValueError("the other coordinates are the same limits")
    return integrate(up - dn, (t, c, d)).simplify()


def m4(v, p):
    """Takes only the area under the upper (or right) curve: never subtracts the lower one."""
    t = _t(p)
    return sum((integrate(up, (t, lo, hi)) for lo, hi, up, dn in _pieces(v, p)), Integer(0)).simplify()


MODELS = {"key": key, "C04-M1": m1, "C04-M2": m2, "C04-M3": m3, "C04-M4": m4}
