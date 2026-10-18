"""C09 Cooling, curves and other models: answer models (the key, and one per misconception).

params["type"] picks the model the item is about:
  "temp"   Newton's law of cooling, the temperature at a time. Inputs: s (surroundings),
           a (temperature at t = 0), t1, b (temperature at t1), T (the time asked about).
  "time"   the same law, the time to reach a temperature. Inputs s, a, t1, b, and c (the
           temperature asked about).
  "slope"  a curve from its tangent's slope dy/dx = f(x, y) = h(x) g(y). Inputs x0, y0 (a
           point on it) and X (y is asked at x = X). params f, g, h as strings in x, y.
  "normal" the normal at every point (x, y) passes through (a, 0); the curve passes through
           (x0, y0). The answer is the curve, as a polynomial F(x, y) (the curve is F = 0).
  "volume" a balloon whose volume changes at a constant rate: radius r0 at t = 0, r1 at t1.
           The answer is the radius at time t, an expression in t.

The keys solve the differential equation with sympy's dsolve (or, for the balloon, integrate
the constant rate), never the shortcut the lesson teaches.
"""
from sympy import (Eq, Function, Poly, Rational, Symbol, dsolve, expand, expand_log, integrate, log, nsimplify,
                   numer, simplify, solve, sympify, together)

x = Symbol("x", real=True)
y = Symbol("y", real=True)
t = Symbol("t")
kk = Symbol("k", positive=True)
Y = Function("Y")


def _f(p, name):
    return sympify(p[name], locals={"x": x, "y": y})


def _clean(e):
    return nsimplify(simplify(expand_log(simplify(e), force=True)), rational=True) if e.is_number else simplify(e)


def _canon(e):
    """F(x, y) = 0 as a primitive integer polynomial with a positive leading coefficient."""
    p = Poly(numer(together(expand(e))), x, y)
    p = p.primitive()[1]
    return (p if p.LC() > 0 else -p).as_expr()


# ---------- the key ----------

def _cooling(v):
    """theta(t) from d theta/dt = -k(theta - s), theta(0) = a, with k fixed by theta(t1) = b."""
    th = Function("th")
    sol = dsolve(Eq(th(t).diff(t), -kk * (th(t) - v["s"])), th(t), ics={th(0): v["a"]}).rhs
    k = solve(Eq(sol.subs(t, v["t1"]), v["b"]), kk)[0]
    return sol.subs(kk, k)


def key(v, p):
    kind = p["type"]
    if kind == "temp":
        return _clean(_cooling(v).subs(t, v["T"]))
    if kind == "time":
        th = _cooling(v)
        T = Symbol("T", positive=True)
        return _clean(solve(Eq(th.subs(t, T), v["c"]), T)[0])
    if kind == "slope":
        f = _f(p, "f")
        sol = dsolve(Eq(Y(x).diff(x), f.subs(y, Y(x))), Y(x), ics={Y(v["x0"]): v["y0"]})
        sols = sol if isinstance(sol, list) else [sol]
        for s in sols:
            if simplify(s.rhs.subs(x, v["x0"]) - v["y0"]) == 0:
                return _clean(s.rhs.subs(x, v["X"]))
        raise ValueError("no solution through the point")
    if kind == "normal":
        # slope of the normal, -1/y', equals the slope y/(x - a) of the line to (a, 0)
        ode = Eq(Y(x).diff(x), -(x - v["a"]) / Y(x))
        sols = dsolve(ode, Y(x))
        sols = sols if isinstance(sols, list) else [sols]
        for s in sols:
            C = list(s.rhs.free_symbols - {x})[0]
            for c in solve(Eq(s.rhs.subs(x, v["x0"]), v["y0"]), C):
                r = s.rhs.subs(C, c)
                if simplify(r.subs(x, v["x0"]) - v["y0"]) == 0:
                    return _canon(y**2 - r**2)
        raise ValueError("no solution through the point")
    if kind == "volume":
        # dV/dt = c: V is linear in t
        V0, V1 = v["r0"] ** 3, v["r1"] ** 3  # (4/3) pi cancels throughout
        c = Symbol("c")
        V = integrate(c, (t, 0, t)) + V0
        cv = solve(Eq(V.subs(t, v["t1"]), V1), c)[0]
        return simplify(V.subs(c, cv)) ** Rational(1, 3)
    raise ValueError(f"unknown type {kind}")


# ---------- misconceptions ----------

def m1(v, p):
    """dQ/dt = kQ whatever the law: cooling with the surroundings dropped; the balloon's volume grows exponentially."""
    kind = p["type"]
    if kind == "temp":
        return _clean(v["a"] * (v["b"] / v["a"]) ** (v["T"] / v["t1"]))
    if kind == "time":
        return v["t1"] * log(v["a"] / v["c"]) / log(v["a"] / v["b"])
    if kind == "volume":
        return v["r0"] * (v["r1"] / v["r0"]) ** (t / v["t1"])  # V = V0 (V1/V0)^(t/t1), cube-rooted
    raise ValueError("no plain growth-or-decay reading")


def m2(v, p):
    """The rate is constant: a straight line through the given values."""
    kind = p["type"]
    if kind == "temp":
        return _clean(v["a"] + (v["b"] - v["a"]) / v["t1"] * v["T"])
    if kind == "time":
        return _clean((v["a"] - v["c"]) / ((v["a"] - v["b"]) / v["t1"]))
    if kind == "slope":
        return _clean(v["y0"] + _f(p, "f").subs({x: v["x0"], y: v["y0"]}) * (v["X"] - v["x0"]))
    if kind == "normal":
        m = -(v["x0"] - v["a"]) / v["y0"]
        return _canon(y - v["y0"] - m * (x - v["x0"]))
    if kind == "volume":
        return v["r0"] + (v["r1"] - v["r0"]) / v["t1"] * t
    raise ValueError("no straight-line reading")


def m3(v, p):
    """Mixes theta with the excess theta - s: reports the excess, or uses a reading as the excess."""
    kind = p["type"]
    if kind == "temp":
        return _clean((v["a"] - v["s"]) * ((v["b"] - v["s"]) / (v["a"] - v["s"])) ** (v["T"] / v["t1"]))
    if kind == "time":
        return v["t1"] * log((v["a"] - v["s"]) / v["c"]) / log((v["a"] - v["s"]) / (v["b"] - v["s"]))
    raise ValueError("cooling only")


def m4(v, p):
    """Integrates the slope in x with y held at its given value."""
    kind = p["type"]
    if kind == "slope":
        g = _f(p, "f").subs(y, v["y0"])
        return _clean(v["y0"] + integrate(g, (x, v["x0"], v["X"])))
    if kind == "normal":
        g = -(x - v["a"]) / v["y0"]
        return _canon(y - v["y0"] - integrate(g, (x, v["x0"], x)))
    raise ValueError("curves only")


def m5(v, p):
    """Leaves out the constant of integration."""
    kind = p["type"]
    if kind == "slope":
        G = integrate(1 / _f(p, "g"), y)
        H = integrate(_f(p, "h"), x)
        sols = [s for s in solve(Eq(G, H.subs(x, v["X"])), y) if s.is_positive]
        if len(sols) != 1:
            raise ValueError("no single positive y")
        return _clean(sols[0])
    if kind == "volume":
        # V = ct, c from the later reading
        return (v["r1"] ** 3 / v["t1"] * t) ** Rational(1, 3)
    raise ValueError("no constant to drop")


def m6(v, p):
    """Takes the condition on the normal as a condition on the tangent: the tangent passes through (a, 0)."""
    if p["type"] != "normal":
        raise ValueError("normal items only")
    # y' = y/(x - a) gives y = C(x - a); through (x0, y0)
    return _canon(y - v["y0"] * (x - v["a"]) / (v["x0"] - v["a"]))


MODELS = {"key": key, "C09-M1": m1, "C09-M2": m2, "C09-M3": m3, "C09-M4": m4, "C09-M5": m5, "C09-M6": m6}
