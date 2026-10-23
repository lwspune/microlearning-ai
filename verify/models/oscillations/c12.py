"""C12 Composition of two S.H.M.s: answer models (the key, and one per misconception).

params["ask"] picks the quantity:
  "R":     resultant amplitude of A1 sin(wt + a1) + A2 sin(wt + a2), the phase difference d = a1 - a2 in degrees (inputs A1, A2, d);
  "eps":   resultant epoch, in degrees, of the same sum (inputs A1, A2, a1, a2);
  "R_sym": amplitude of a sin(wt) + b cos(wt) (plain symbols a, b).

The key expands each term as sin(wt) cos(alpha) + cos(wt) sin(alpha) and collects: the sum is R sin(wt + delta) with
R cos(delta) = A1 cos a1 + A2 cos a2 and R sin(delta) = A1 sin a1 + A2 sin a2, solved in sympy; that gives
R^2 = A1^2 + A2^2 + 2 A1 A2 cos(a1 - a2) and tan(delta) = (A1 sin a1 + A2 sin a2) / (A1 cos a1 + A2 cos a2).
"""
from sympy import Abs, atan2, cos, deg, rad, sin, sqrt, symbols

from physics import sig

a, b = symbols("a b")  # plain symbols, as the option values parse


def _components(A1, A2, a1, a2):
    C = A1 * cos(a1) + A2 * cos(a2)  # coefficient of sin(wt)
    S = A1 * sin(a1) + A2 * sin(a2)  # coefficient of cos(wt)
    return C, S


def _solve(v, p, *, add=False, squares=False, use_sin=False, average=False, invert=False, sum_eps=False, no_root=False,
           subtract=False, larger=False, cancel=False):
    ask, n = p["ask"], p.get("sf", 4)
    if ask == "R":
        A1, A2, d = v["A1"], v["A2"], rad(v["d"])
        if add:
            return sig(A1 + A2, n)
        if squares:
            return sig(sqrt(A1**2 + A2**2), n)
        if subtract:
            return sig(Abs(A1 - A2), n)
        if larger:
            return sig(max(A1, A2), n)
        if cancel:
            return 0
        if use_sin:
            return sig(sqrt(A1**2 + A2**2 + 2 * A1 * A2 * sin(d)), n)
        C, S = _components(A1, A2, d, 0)
        return sig(sqrt(C**2 + S**2), n)
    if ask == "eps":
        A1, A2, a1, a2 = v["A1"], v["A2"], v["a1"], v["a2"]
        if average:
            return sig((a1 + a2) / 2, n)
        if sum_eps:
            return sig(a1 + a2, n)
        C, S = _components(A1, A2, rad(a1), rad(a2))
        return sig(deg(atan2(C, S) if invert else atan2(S, C)), n)
    if ask == "R_sym":
        if add:
            return a + b
        if no_root:
            return a**2 + b**2
        if subtract:
            return Abs(a - b)
        return sqrt(a**2 + b**2)  # a sin wt + b cos wt = R sin(wt + delta) with R cos(delta) = a, R sin(delta) = b
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
    "C12-M1": _m(("R", "R_sym"), add=True),  # adds the amplitudes, ignoring the phase difference
    "C12-M2": _m(("R",), squares=True),  # adds the squares, as if a quarter cycle apart
    "C12-M3": _m(("R",), use_sin=True),  # uses sin of the phase difference instead of cos
    "C12-M4": _m(("eps",), average=True),  # averages the epochs
    "C12-M5": _m(("eps",), invert=True),  # inverts the tangent
    "C12-M6": _m(("eps",), sum_eps=True),  # adds the epochs
    "C12-M7": _m(("R_sym",), no_root=True),  # leaves out the square root
    "C12-M8": _m(("R", "R_sym"), subtract=True),  # subtracts the amplitudes, as if opposite
    "C12-M9": _m(("R",), larger=True),  # takes the larger amplitude
    "C12-M10": _m(("R",), cancel=True),  # thinks opposite S.H.M.s cancel completely
}
