"""C14 Mean and most probable speeds: answer models (the key, and one per misconception).

Each speed is sqrt(c * R T / M); the factor c is 2 (most probable), 8/pi (mean) or 3 (rms).
The key finds the factors from the Maxwell distribution itself, f(v) = 4 pi (a/pi)^(3/2) v^2 exp(-a v^2) with
a = M / (2RT): the most probable speed where f is largest, the mean and the mean square by integration.

params["ask"] picks the question:
  "ratio": v_num / v_den for the speeds named by params num and den ("mp", "mean", "rms");
  "convert": speed num, given speed den = u (input u, in m/s);
  "alpha": x in v_num = sqrt(1 + c/x) v_den (input c), with pi = 22/7 when params pi = "22/7";
  "set":   rms speed of a few molecules, speeds in inputs v1, v2, ... ;
  "T_eq":  temperature at which speed s2 of gas 2 (molar mass M2) equals speed s1 of gas 1 (M1 at T1);
  "statement": which statement about the distribution is right (a named answer).
"""
from sympy import Integer, Rational, Symbol, diff, exp, integrate, oo, pi, simplify, solve, sqrt

from physics import sig

_v = Symbol("v", positive=True)
_a = Symbol("a", positive=True)
_f = 4 * pi * (_a / pi) ** Rational(3, 2) * _v**2 * exp(-_a * _v**2)


def _factors():
    """c in v^2 = c R T / M for each speed, from f(v); R T / M = 1 / (2a)."""
    (vmp,) = solve(diff(_f, _v), _v)
    vbar = integrate(_v * _f, (_v, 0, oo))
    v2 = integrate(_v**2 * _f, (_v, 0, oo))
    return {k: simplify(x * 2 * _a) for k, x in (("mp", vmp**2), ("mean", vbar**2), ("rms", v2))}


KEY_C = _factors()  # {"mp": 2, "mean": 8/pi, "rms": 3}
SWAP_C = {"mp": Integer(3), "mean": 8 / pi, "rms": Integer(2)}  # M1: the peak taken as the largest
SAME_C = {"mp": Integer(1), "mean": Integer(1), "rms": Integer(1)}  # M2: one speed for the whole gas
PEAK_C = {"mp": Integer(2), "mean": Integer(2), "rms": Integer(3)}  # M3: the mean taken at the peak

STATEMENT = {
    "key": Symbol("hotter_lower_wider"),
    "C14-M1": Symbol("peak_is_largest"),
    "C14-M3": Symbol("peak_is_mean"),
    "C14-M6": Symbol("hotter_taller"),
}


def _pi(c, p):
    return c.subs(pi, Rational(22, 7)) if p.get("pi") == "22/7" else c


def _solve(v, p, c, *, root=True):
    ask = p["ask"]
    if ask in ("ratio", "convert", "alpha"):
        r2 = _pi(c[p["num"]] / c[p["den"]], p)  # (v_num / v_den)^2
        if not root:
            r2 = r2**2  # the ratio of the factors taken as the ratio of the speeds
        if ask == "ratio":
            return sqrt(r2)
        if ask == "convert":
            return sig(v["u"] * sqrt(r2))
        if r2 == 1:
            raise ValueError("no x makes 1 + c/x equal 1")
        return sig(v["c"] / (r2 - 1))
    if ask == "T_eq":
        T = Symbol("T", positive=True)
        (T2,) = solve(c[p["s2"]] * T / v["M2"] - c[p["s1"]] * v["T1"] / v["M1"], T)
        return sig(T2)
    raise ValueError(f"ask {ask} does not use the factors")


def _speeds(v):
    return [v[k] for k in sorted((k for k in v if k[0] == "v" and k[1:].isdigit()), key=lambda k: int(k[1:]))]


def key(v, p):
    if p["ask"] == "statement":
        return STATEMENT["key"]
    if p["ask"] == "set":
        s = _speeds(v)
        return sig(sqrt(sum(x**2 for x in s) / len(s)))
    return _solve(v, p, KEY_C)


def _only(p, *asks):
    if p["ask"] not in asks:
        raise ValueError("does not apply to this item")


def m1(v, p):
    """Takes the most probable speed, at the peak, as the largest: 3 for v_mp and 2 for v_rms."""
    if p["ask"] == "statement":
        return STATEMENT["C14-M1"]
    _only(p, "ratio", "convert", "alpha", "T_eq")
    return _solve(v, p, SWAP_C)


def m2(v, p):
    """Gives the gas one speed, so the most probable, mean and rms speeds are all equal."""
    if p["ask"] == "set":
        s = _speeds(v)
        return sig(sum(s) / len(s))
    _only(p, "ratio", "convert", "alpha", "T_eq")
    return _solve(v, p, SAME_C)


def m3(v, p):
    """Takes the mean speed to be the speed at the peak: v_mean = sqrt(2RT/M)."""
    if p["ask"] == "statement":
        return STATEMENT["C14-M3"]
    _only(p, "ratio", "convert", "alpha", "T_eq")
    return _solve(v, p, PEAK_C)


def m4(v, p):
    """Forgets the square root: a ratio of speeds as the ratio of the factors, the mean square as the rms speed."""
    if p["ask"] == "set":
        s = _speeds(v)
        return sig(sum(x**2 for x in s) / len(s))
    _only(p, "ratio", "convert", "alpha")
    return _solve(v, p, KEY_C, root=False)


def m5(v, p):
    """Takes the square root of the sum of the squares, then divides by the number of molecules."""
    _only(p, "set")
    s = _speeds(v)
    return sig(sqrt(sum(x**2 for x in s)) / len(s))


def m6(v, p):
    """Thinks a hotter gas's curve is higher at every speed, as a hotter blackbody's spectrum is."""
    _only(p, "statement")
    return STATEMENT["C14-M6"]


MODELS = {"key": key, "C14-M1": m1, "C14-M2": m2, "C14-M3": m3, "C14-M4": m4, "C14-M5": m5, "C14-M6": m6}
