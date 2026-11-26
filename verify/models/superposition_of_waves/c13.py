"""C13 Beats: answer models (the key, and one per misconception).

Beat frequency N = |n1 - n2|; beat period 1/N. params["ask"] picks the quantity:
  "period":  time, in s, between successive maxima for forks n1, n2 (inputs n1, n2);
  "v_lam":   speed of sound, in m/s, from wavelengths l1_cm, l2_cm giving N beats per second (inputs l1_cm, l2_cm, N);
  "dlam":    difference of wavelengths, in m, of forks n1 < n2 in air at speed v (inputs n1, n2, v);
  "series_first": first fork of k forks rising by N beats each, the last twice the first (inputs k, N);
  "series_j": the j-th fork of k forks falling by N beats each, the first r times the last (inputs k, N, r, j).
"""
from sympy import Rational, Symbol, solve

from physics import sig

_x = Symbol("x", positive=True)


def _solve(v, p, *, inv=False, double=False, avg=False, cm=False, sub_lam=False, add=False, v_over=False, over_v=False,
           one=False, forks=False, other=False, steps_j=False):
    ask, n = p["ask"], p.get("sf", 3)
    if ask == "period":
        N = abs(v["n2"] - v["n1"])
        if avg:
            return sig(2 / (v["n1"] + v["n2"]), n)
        if inv:
            return sig(N, n)
        return sig(1 / (2 * N) if double else 1 / N, n)
    if ask == "v_lam":
        s = 1 if cm else Rational(1, 100)
        l1, l2, N = v["l1_cm"] * s, v["l2_cm"] * s, v["N"]
        if sub_lam:
            return sig(N * abs(l2 - l1), n)
        if add:
            return sig(N / (1 / l1 + 1 / l2), n)
        return sig(N / abs(1 / l1 - 1 / l2), n)
    if ask == "dlam":
        n1, n2, c = v["n1"], v["n2"], v["v"]
        if v_over:
            return sig(c / (n2 - n1), n)
        if over_v:
            return sig((n2 - n1) / c, n)
        if one:
            return sig(c / n1, n)
        return sig(c / n1 - c / n2, n)
    if ask == "series_first":
        k, N = v["k"], v["N"]
        step = N / 2 if double else N
        gaps = k if forks else k - 1
        (first,) = solve(_x + gaps * step - 2 * _x, _x)
        return sig(2 * first if other else first, n)
    if ask == "series_j":
        k, N, r, j = v["k"], v["N"], v["r"], v["j"]
        step = N / 2 if double else N
        gaps = k if forks else k - 1
        (last,) = solve(_x + gaps * step - r * _x, _x)
        first = r * last
        return sig(first - (j if steps_j else j - 1) * step, n)
    raise ValueError(f"unknown ask {ask}")


def key(v, p):
    return _solve(v, p)


def _m(asks, **kw):
    def model(v, p):
        if p["ask"] not in asks:
            raise ValueError("does not apply to this item")
        return _solve(v, p, **kw)
    return model


MODELS = {
    "key": key,
    "C13-M1": _m(("period",), inv=True),  # gives the beat frequency as the time between maxima
    "C13-M2": _m(("period", "series_first", "series_j"), double=True),  # counts every rise and fall: N = 2|n1 - n2|
    "C13-M3": _m(("period",), avg=True),  # uses the average frequency, the pitch heard
    "C13-M4": _m(("v_lam",), cm=True),  # leaves the wavelengths in cm
    "C13-M5": _m(("v_lam",), sub_lam=True),  # subtracts the wavelengths instead of the frequencies
    "C13-M6": _m(("v_lam",), add=True),  # adds the frequencies
    "C13-M7": _m(("dlam",), v_over=True),  # takes the difference of wavelengths as v / (n2 - n1)
    "C13-M8": _m(("dlam",), over_v=True),  # takes the difference of wavelengths as (n2 - n1) / v
    "C13-M9": _m(("dlam",), one=True),  # stops at one wavelength
    "C13-M10": _m(("series_first", "series_j"), forks=True),  # counts the forks instead of the gaps between them
    "C13-M11": _m(("series_first",), other=True),  # gives the last fork's frequency
    "C13-M12": _m(("series_j",), steps_j=True),  # counts j steps from the first fork to the j-th
}
