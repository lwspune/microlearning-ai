"""C06 Homogeneous equations: answer models (the key, and one per misconception).

Inputs: F, the right side of dy/dx = F(v) written in v = y/x; for a particular solution
also x0, y0 (the condition y(x0) = y0) and, for a value, x1.
params["ask"]:
  "dvdx" -> dv/dx after putting y = vx, as an expression in v and x;
  "y"    -> y(x1), the positive root;
  "y2"   -> y(x1)^2;
  "sol"  -> the particular solution, given as the expression for y^2 in x.

The key puts y = vx, separates, integrates, applies the condition and puts back v = y/x;
it then substitutes back: the implicit solution G(y/x) - log x = const must give
dy/dx = F(y/x) by implicit differentiation, or the key raises.

Misconceptions:
  M1  dy/dx = x dv/dx (drops the v of the product rule): x dv/dx = F(v).
  M2  dy/dx = v + dv/dx (drops the x): dv/dx = F(v) - v, so dv/(F - v) = dx.
  M3  uses the condition y(x0) = y0 as v = y0 (not y0/x0).
  M4  never puts back v = y/x: reports v(x1) (or v^2) for y(x1) (or y^2).
  M5  moves x the wrong way: x dv/dx = G becomes dv/G = x dx.
  M6  takes v = x/y (the ratio upside down), both for the condition and when putting back.
"""
from sympy import Symbol, diff, integrate, log, simplify, solve, sqrt

V = Symbol("v")
X = Symbol("x", real=True)
Y = Symbol("y", real=True)


def _F(v):
    return v["F"]


def _dvdx(v, p, how):
    F = _F(v)
    if how == "key":
        return (F - V) / X
    if how == "M1":
        return F / X
    if how == "M2":
        return F - V
    if how == "M5":
        return X * (F - V)
    raise ValueError("no dv/dx form for this mistake")


def _G(F, how):
    """The v-side integral."""
    if how == "M1":
        return integrate(1 / F, V)
    return integrate(simplify(1 / (F - V)), V)


def _H(x, how):
    """The x-side integral."""
    if how == "M2":
        return x
    if how == "M5":
        return x**2 / 2
    return log(x)


def _check_key(F):
    """Substitute back: G(y/x) - log x = c must satisfy dy/dx = F(y/x)."""
    phi = _G(F, "key").subs(V, Y / X) - log(X)
    slope = -diff(phi, X) / diff(phi, Y)
    if simplify(slope - F.subs(V, Y / X)) != 0:
        raise ValueError("key fails the equation")


def _particular(v, p, how):
    F = _F(v)
    if how == "key":
        _check_key(F)
    x0, y0 = v["x0"], v["y0"]
    v0 = y0 if how == "M3" else x0 / y0 if how == "M6" else y0 / x0
    G, H = _G(F, how), _H
    c = G.subs(V, v0) - H(x0, how)
    back = (lambda x, vs: x**2 / vs) if how == "M6" else (lambda x, vs: x**2 * vs)
    ask = p["ask"]
    if ask == "sol":
        roots = solve(G - H(X, how) - c, V)
        sq = {simplify(r**2) for r in roots}
        if len(sq) != 1:
            raise ValueError(f"ambiguous v^2: {sq}")
        vs = sq.pop()
        return simplify(back(X, vs))
    x1 = v["x1"]
    roots = solve(G - H(x1, how) - c, V)
    roots = [simplify(r) for r in roots]
    roots = [r for r in roots if r.is_real and r >= 0]
    if not roots:
        raise ValueError("no real root")
    if ask == "y2" or (ask == "y" and len(set(roots)) > 1):
        sq = {simplify(r**2) for r in roots}
        if ask == "y" or len(sq) != 1:
            raise ValueError(f"ambiguous root: {roots}")
        vs = sq.pop()
        return simplify(vs if how == "M4" else back(x1, vs))
    r = roots[0]
    return simplify(r if how == "M4" else x1 / r if how == "M6" else x1 * r)


def _model(how):
    def f(v, p):
        if p["ask"] == "dvdx":
            return _dvdx(v, p, how)
        if how in ("M4",) and p["ask"] == "sol":
            raise ValueError("M4 has no solution form")
        return _particular(v, p, how)
    return f


MODELS = {"key": _model("key"), **{f"C06-M{k}": _model(f"M{k}") for k in range(1, 7)}}
