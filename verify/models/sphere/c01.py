"""C01 The equation of a sphere: answer models (the key, and one per misconception).

params["ask"] picks the question type:
  centre    the sphere q(x^2 + y^2 + z^2) + L1 x + L2 y + L3 z + D = 0 (inputs q, L, D) -> its centre
  radius    the same sphere -> its radius
  diameter  the same sphere -> its diameter
  const     the sphere x^2 + y^2 + z^2 + L1 x + L2 y + L3 z + D = 0 with D unknown (inputs L) has
            radius r (input r) -> D
  eq        centre C, radius r (inputs C, r) -> the sphere's equation
  eq_diam   ends A, B of a diameter (inputs A, B) -> the sphere's equation
q defaults to 1. An equation is the Tuple (2u, 2v, 2w, d) of x^2 + y^2 + z^2 + 2ux + 2vy + 2wz + d = 0,
written with x^2 coefficient 1 so each sphere has exactly one value.

The key comes from the definition: the sphere is the set of points P with CP = r. For a given
equation, S(P) / q is CP^2 - r^2 (completing squares), so the centre is where it is least (its
gradient vanishes) and r^2 is minus its least value. A centre-radius sphere is CP^2 - r^2 expanded;
a diameter's sphere has centre the midpoint of AB and radius AB / 2.
"""
from sympy import Rational, Tuple, diff, expand, solve, sqrt, symbols

_x, _y, _z = symbols("x y z")
_XYZ = (_x, _y, _z)


def _ask(p):
    return p["ask"]


def _q(v):
    return v.get("q", Rational(1))


def _poly(v):
    """The left side q(x^2 + y^2 + z^2) + L . (x, y, z) + D as given."""
    L = v["L"]
    return _q(v) * (_x**2 + _y**2 + _z**2) + sum(c * s for c, s in zip(L, _XYZ)) + v["D"]


def _uvwd(v, divide=True):
    """u, v, w, d read off the given equation, after dividing by q (or not)."""
    k = _q(v) if divide else 1
    L = [c / k for c in v["L"]]
    return L[0] / 2, L[1] / 2, L[2] / 2, v["D"] / k


def _eq(C, r2):
    """(2u, 2v, 2w, d) of the expansion of CP^2 - r^2 = 0, P = (x, y, z)."""
    e = expand(sum((s - c) ** 2 for s, c in zip(_XYZ, C)) - r2)
    return Tuple(*[e.coeff(s, 1) for s in _XYZ], e.subs({s: 0 for s in _XYZ}))


def _report(r2, p):
    if r2 <= 0:
        raise ValueError("no real sphere")
    r = sqrt(r2)
    return r if _ask(p) == "radius" else 2 * r


def key(v, p):
    a = _ask(p)
    if a in ("centre", "radius", "diameter"):
        S = _poly(v) / _q(v)
        sol = solve([diff(S, s) for s in _XYZ], _XYZ, dict=True)[0]
        C = Tuple(*[sol[s] for s in _XYZ])
        if a == "centre":
            return C
        return _report(-S.subs(sol), p)
    if a == "const":
        Dsym = symbols("Dsym")
        S = _poly({"L": v["L"], "D": Dsym})
        sol = solve([diff(S, s) for s in _XYZ], _XYZ, dict=True)[0]
        return solve(-S.subs(sol) - v["r"] ** 2, Dsym)[0]
    if a == "eq":
        return _eq(v["C"], v["r"] ** 2)
    if a == "eq_diam":
        A, B = v["A"], v["B"]
        M = [(s + t) / 2 for s, t in zip(A, B)]
        AB2 = sum((s - t) ** 2 for s, t in zip(A, B))
        return _eq(M, AB2 / 4)
    raise ValueError(a)


def m1(v, p):
    """Centre (u, v, w): halves the coefficients but doesn't change the sign (and builds +2a x)."""
    a = _ask(p)
    if a == "centre":
        u, w1, w2, _ = _uvwd(v)
        return Tuple(u, w1, w2)
    if a in ("eq", "eq_diam"):
        e = key(v, p)
        return Tuple(-e[0], -e[1], -e[2], e[3])
    raise ValueError("the sign of the centre doesn't change the radius")


def m2(v, p):
    """No halving: the centre coordinate is minus the whole linear coefficient (-6x: centre x = 6)."""
    a = _ask(p)
    if a in ("centre", "radius", "diameter"):
        u, w1, w2, d = _uvwd(v)
        if a == "centre":
            return Tuple(-2 * u, -2 * w1, -2 * w2)
        return _report(4 * (u**2 + w1**2 + w2**2) - d, p)
    if a == "const":
        u, w1, w2 = [c / 2 for c in v["L"]]
        return 4 * (u**2 + w1**2 + w2**2) - v["r"] ** 2
    if a in ("eq", "eq_diam"):
        e = key(v, p)
        return Tuple(e[0] / 2, e[1] / 2, e[2] / 2, e[3])
    raise ValueError(a)


def m3(v, p):
    """Adds d: r^2 = u^2 + v^2 + w^2 + d."""
    a = _ask(p)
    if a in ("radius", "diameter"):
        u, w1, w2, d = _uvwd(v)
        return _report(u**2 + w1**2 + w2**2 + d, p)
    if a == "const":
        u, w1, w2 = [c / 2 for c in v["L"]]
        return v["r"] ** 2 - (u**2 + w1**2 + w2**2)
    raise ValueError("only where the radius is read from the general form")


def m4(v, p):
    """Reads u, v, w, d straight off q x^2 + ... without dividing by q first."""
    a = _ask(p)
    if a not in ("centre", "radius", "diameter") or _q(v) == 1:
        raise ValueError("only for an equation whose x^2 coefficient isn't 1")
    u, w1, w2, d = _uvwd(v, divide=False)
    if a == "centre":
        return Tuple(-u, -w1, -w2)
    return _report(u**2 + w1**2 + w2**2 - d, p)


def m5(v, p):
    """Mixes up r and r^2: stops before the root, or puts r where r^2 belongs."""
    a = _ask(p)
    if a in ("radius", "diameter"):
        u, w1, w2, d = _uvwd(v)
        r2 = u**2 + w1**2 + w2**2 - d
        return r2 if a == "radius" else 2 * r2
    if a == "const":
        u, w1, w2 = [c / 2 for c in v["L"]]
        return u**2 + w1**2 + w2**2 - v["r"]
    if a == "eq":
        return _eq(v["C"], v["r"])
    raise ValueError(a)


def m6(v, p):
    """Takes the whole length AB of the diameter as the radius."""
    if _ask(p) != "eq_diam":
        raise ValueError("only for a diameter's ends")
    A, B = v["A"], v["B"]
    M = [(s + t) / 2 for s, t in zip(A, B)]
    return _eq(M, sum((s - t) ** 2 for s, t in zip(A, B)))


MODELS = {"key": key, "C01-M1": m1, "C01-M2": m2, "C01-M3": m3, "C01-M4": m4, "C01-M5": m5, "C01-M6": m6}
