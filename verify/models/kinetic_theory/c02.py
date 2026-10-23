"""C02 Mean free path: answer models (the key, and one per misconception).

params["ask"] picks the quantity:
  "lambda":  mean free path of a gas at t_c deg C and pressure P, molecular diameter d_pm (inputs t_c, P, d_pm, k);
  "formula": the expression for the mean free path, in symbols n and d (a formula);
  "scale":   factor by which the mean free path changes when `what` (n, d or T at constant P) is multiplied by f (input f).

The key counts collisions: a molecule moving a distance L sweeps a cylinder of volume pi d^2 L and meets the
n pi d^2 L molecules in it; the motion of the others raises the rate by sqrt(2). So lambda = 1/(sqrt(2) pi n d^2),
with n = P / (k T) for an ideal gas.
"""
from sympy import Symbol, pi, sqrt

from physics import sig

n_, d_ = Symbol("n"), Symbol("d")


def _lam(n, d, *, root2=True, d_power=2, root2_top=False):
    base = pi * n * d ** d_power
    if root2_top:
        return sqrt(2) / base
    return 1 / ((sqrt(2) if root2 else 1) * base)


def _solve(v, p, *, root2=True, radius=False, pm=True, d_power=2, root2_top=False, scale=None):
    ask = p["ask"]
    if ask == "lambda":
        T = v["t_c"] + 273
        d = v["d_pm"] * (10 ** -12 if pm else 10 ** -9)
        if radius:
            d = d / 2
        n = v["P"] / (v["k"] * T)
        return sig(_lam(n, d, root2=root2))
    if ask == "formula":
        return _lam(n_, d_, root2=root2, d_power=d_power, root2_top=root2_top)
    if ask == "scale":
        f, what = v["f"], p["what"]
        if scale is not None:
            return scale(f)
        d, T = Symbol("d0"), Symbol("T0")
        P, k = Symbol("P0"), Symbol("k0")
        before = _lam(P / (k * T), d)
        after = {"n": _lam(f * P / (k * T), d), "d": _lam(P / (k * T), f * d), "T": _lam(P / (k * f * T), d)}[what]
        return (after / before).simplify()
    raise ValueError(f"unknown ask {ask}")


def key(v, p):
    return _solve(v, p)


def _only(p, *asks):
    if p["ask"] not in asks:
        raise ValueError("does not apply to this item")


def _what(p, *whats):
    if p.get("what") not in whats:
        raise ValueError("does not apply to this item")


def m1(v, p):
    """Leaves out the sqrt(2)."""
    _only(p, "lambda", "formula")
    return _solve(v, p, root2=False)


def m2(v, p):
    """Halves the given diameter, as if it were a radius."""
    _only(p, "lambda")
    return _solve(v, p, radius=True)


def m3(v, p):
    """Converts picometres as if they were nanometres."""
    _only(p, "lambda")
    return _solve(v, p, pm=False)


def m4(v, p):
    """Uses d where d^2 belongs."""
    _only(p, "formula", "scale")
    if p["ask"] == "scale":
        _what(p, "d")
        return _solve(v, p, scale=lambda f: 1 / f)
    return _solve(v, p, d_power=1)


def m5(v, p):
    """Puts the sqrt(2) on top."""
    _only(p, "formula")
    return _solve(v, p, root2_top=True)


def m6(v, p):
    """Takes the mean free path to grow with the number of molecules or their size."""
    _only(p, "scale")
    _what(p, "n", "d")
    return _solve(v, p, scale=lambda f: f if p["what"] == "n" else f ** 2)


def m7(v, p):
    """Thinks the mean free path does not change."""
    _only(p, "scale")
    return _solve(v, p, scale=lambda f: 1)


def m8(v, p):
    """Takes the mean free path to go as 1/n^2."""
    _only(p, "scale")
    _what(p, "n")
    return _solve(v, p, scale=lambda f: 1 / f ** 2)


def m9(v, p):
    """Thinks faster, hotter molecules have shorter free paths."""
    _only(p, "scale")
    _what(p, "T")
    return _solve(v, p, scale=lambda f: 1 / f)


def m10(v, p):
    """Takes the mean free path to grow as sqrt(T), like the rms speed."""
    _only(p, "scale")
    _what(p, "T")
    return _solve(v, p, scale=lambda f: sqrt(f))


MODELS = {"key": key, "C02-M1": m1, "C02-M2": m2, "C02-M3": m3, "C02-M4": m4, "C02-M5": m5, "C02-M6": m6,
          "C02-M7": m7, "C02-M8": m8, "C02-M9": m9, "C02-M10": m10}
