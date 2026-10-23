"""C07 Theorem on equal ratios: answer models (the key, and one per misconception).

Params (strings):
  kind="blank": n_1/d_1 = n_2/d_2 = ... = (l_1 n_1 + l_2 n_2 + ...)/?   the blank is the denominator.
      dens="3,5,4"  mults="5,-3,4"
  kind="solve": n_i/d_i all equal and l_1 n_1 + l_2 n_2 + ... = S; find n_j.
      dens, mults, S, ask (0-based index j)
  kind="eqn": (m x (a x + b) + C)/(m x (d x + e) + F) = (a x + b)/(d x + e); solve for x.
      a, b, d, e, m, C, F
"""
from sympy import Abs, Eq, Symbol, solve, sympify

_x = Symbol("qx")


def _list(p, k):
    return [sympify(s) for s in p[k].split(",")]


def _n(p, k):
    return sympify(p[k])


def _need(p, *kinds):
    if p["kind"] not in kinds:
        raise ValueError(f"needs a {'/'.join(kinds)} question")


def _solve_with(p, denom):
    """Common ratio k = S / denom, then the asked quantity n_j = k d_j."""
    k = _n(p, "S") / denom
    return k * _list(p, "dens")[int(p["ask"])]


def _eqn_parts(p):
    a, b, d, e, m, C, F = (_n(p, s) for s in "a b d e m C F".split())
    return a, b, d, e, m, C, F


def _solve_linear(lhs, rhs):
    sol = solve(Eq(lhs, rhs), _x)
    if len(sol) != 1:
        raise ValueError("no single solution")
    return sol[0]


def key(v, p):
    if p["kind"] == "blank":
        # Each ratio is k, so n_i = k d_i and sum l_i n_i = k * sum l_i d_i: the blank is sum l_i d_i.
        return sum(l * d for l, d in zip(_list(p, "mults"), _list(p, "dens")))
    if p["kind"] == "solve":
        # Straight from the definition: n_i = k d_i, and the given sum fixes k.
        k = Symbol("qk")
        dens, mults = _list(p, "dens"), _list(p, "mults")
        ks = solve(Eq(sum(l * d * k for l, d in zip(mults, dens)), _n(p, "S")), k)
        if len(ks) != 1:
            raise ValueError("no single k")
        return ks[0] * dens[int(p["ask"])]
    if p["kind"] == "eqn":
        a, b, d, e, m, C, F = _eqn_parts(p)
        lhs = (m * _x * (a * _x + b) + C) * (d * _x + e)
        rhs = (a * _x + b) * (m * _x * (d * _x + e) + F)
        sols = [s for s in solve(Eq(lhs, rhs), _x)
                if (d * s + e) != 0 and (m * s * (d * s + e) + F) != 0]
        if len(sols) != 1:
            raise ValueError("no single solution")
        return sols[0]
    raise ValueError("unknown kind")


def m1(v, p):
    """Drops the multipliers from the denominator: just adds the denominators."""
    _need(p, "blank", "solve")
    denom = sum(_list(p, "dens"))
    return denom if p["kind"] == "blank" else _solve_with(p, denom)


def m2(v, p):
    """Multiplies by the multipliers but drops the minus sign of a negative one."""
    _need(p, "blank", "solve")
    mults = _list(p, "mults")
    if all(l > 0 for l in mults):
        raise ValueError("needs a negative multiplier")
    denom = sum(Abs(l) * d for l, d in zip(mults, _list(p, "dens")))
    return denom if p["kind"] == "blank" else _solve_with(p, denom)


def m3(v, p):
    """Writes only the multipliers in the denominator (4a + 9b over 4 + 9)."""
    _need(p, "blank", "solve")
    denom = sum(_list(p, "mults"))
    if denom == 0:
        raise ValueError("multipliers add to 0")
    return denom if p["kind"] == "blank" else _solve_with(p, denom)


def m4(v, p):
    """Writes the common ratio upside down: denominators' sum over numerators' sum."""
    _need(p, "solve", "eqn")
    if p["kind"] == "solve":
        k = sum(l * d for l, d in zip(_list(p, "mults"), _list(p, "dens"))) / _n(p, "S")
        return k * _list(p, "dens")[int(p["ask"])]
    a, b, d, e, m, C, F = _eqn_parts(p)
    return _solve_linear(C * (a * _x + b), F * (d * _x + e))


def m5(v, p):
    """Stops at the common ratio k and gives it as the answer."""
    _need(p, "solve", "eqn")
    if p["kind"] == "solve":
        return _n(p, "S") / sum(l * d for l, d in zip(_list(p, "mults"), _list(p, "dens")))
    a, b, d, e, m, C, F = _eqn_parts(p)
    return C / F


def m6(v, p):
    """With (ax + b)/(dx + e) = k, multiplies only the constant term: ax + b = e k + d x."""
    _need(p, "eqn")
    a, b, d, e, m, C, F = _eqn_parts(p)
    return _solve_linear(a * _x + b, e * C / F + d * _x)


MODELS = {"key": key, "C07-M1": m1, "C07-M2": m2, "C07-M3": m3, "C07-M4": m4, "C07-M5": m5, "C07-M6": m6}
