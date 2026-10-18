"""C03 Derivative as a rate of change: answer models (the key, and one per misconception).

Inputs: f, the function (an expression in one variable: t for motion, x otherwise);
a, the point (for asks "d1" and "d2"); k, the given acceleration (for ask "v_at_a").
Params: ask = "d1" (the rate dy/dx or the velocity ds/dt at a),
"d2" (the acceleration d2s/dt2 at a), or "v_at_a" (the velocity at the instant
the acceleration equals k, at a unique time t > 0).
The key differentiates straight from the definitions v = ds/dt, a = dv/dt.
"""
from sympy import Symbol, diff, simplify, solve


def _var(f):
    syms = list(f.free_symbols)
    if len(syms) != 1:
        raise ValueError("f must be in one variable")
    return syms[0]


def _d(f, n):
    """The n-th derivative of f (n = 0 gives f)."""
    t = _var(f)
    return diff(f, t, n) if n else f


def _at(e, f, a):
    return simplify(e.subs(_var(f), a))


def _time(eq, f):
    """The unique positive time at which eq (an expression in t) is zero."""
    t = _var(f)
    roots = [r for r in solve(eq, t) if r.is_real and r > 0]
    if len(roots) != 1:
        raise ValueError(f"no unique positive root of {eq}")
    return roots[0]


def _rates(v, p, vel, acc):
    """Evaluates the ask with a student's own 'velocity' and 'acceleration' (functions of f)."""
    f = v["f"]
    ask = p["ask"]
    if ask == "d1":
        return _at(vel(f), f, v["a"])
    if ask == "d2":
        return _at(acc(f), f, v["a"])
    if ask == "v_at_a":
        t = _time(acc(f) - v["k"], f)
        return _at(vel(f), f, t)
    raise ValueError(f"unknown ask {ask}")


def key(v, p):
    return _rates(v, p, lambda f: _d(f, 1), lambda f: _d(f, 2))


def m1(v, p):
    """One derivative short: takes the quantity itself for its rate (velocity = s, acceleration = ds/dt)."""
    return _rates(v, p, lambda f: f, lambda f: _d(f, 1))


def m2(v, p):
    """The constant-rate formulas v = s/t and a = v/t: an average, not the rate at the instant."""
    def vel(f):
        return f / _var(f)

    def acc(f):
        return _d(f, 1) / _var(f)

    return _rates(v, p, vel, acc)


def m3(v, p):
    """Inverts the rate: gives dx/dy, the rate of x with respect to y, for dy/dx."""
    if p["ask"] != "d1":
        raise ValueError("only for a first-order rate")
    r = key(v, p)
    if r == 0:
        raise ValueError("zero rate")
    return simplify(1 / r)


def m4(v, p):
    """Swaps velocity and acceleration: velocity = d2s/dt2, acceleration = ds/dt."""
    return _rates(v, p, lambda f: _d(f, 2), lambda f: _d(f, 1))


def m5(v, p):
    """Reads d2s/dt2 as (ds/dt)^2: squares the velocity for the acceleration."""
    if p["ask"] == "d1":
        raise ValueError("no second derivative asked")
    return _rates(v, p, lambda f: _d(f, 1), lambda f: _d(f, 1) ** 2)


MODELS = {"key": key, "C03-M1": m1, "C03-M2": m2, "C03-M3": m3, "C03-M4": m4, "C03-M5": m5}
