"""C14 Beats from strings and pipes: answer models (the key, and one per misconception).

params["ask"] picks the quantity:
  "v_pipes": speed of sound, in m/s, from two pipes l1_cm < l2_cm giving N beats/s (inputs l1_cm, l2_cm, N; params
             pipe "open" | "closed");
  "tension": beats in t seconds when a wire in unison with a fork of n0 Hz has its tension T1 lowered by dT (inputs n0,
             T1, dT, t);
  "length":  fork frequency, in Hz, when lengthening a wire in unison with it by pct per cent gives N beats/s
             (inputs pct, N);
  "fork":    fork frequency, in Hz, giving N beats/s with an open pipe L m long (sound at v), the beats rising as the
             pipe is lengthened (inputs L, v, N).
"""
from sympy import Rational, Symbol, solve, sqrt

from physics import sig

_x = Symbol("x", positive=True)


def _solve(v, p, *, swap=False, no_two=False, cm=False, linear=False, per_s=False, inv_root=False, approx=False,
           double=False, raises=False):
    ask, n = p["ask"], p.get("sf", 3)
    if ask == "v_pipes":
        k = 2 if p["pipe"] == "open" else 4
        if swap:
            k = 6 - k  # uses the other pipe's formula
        if no_two:
            k = 1
        s = 1 if cm else Rational(1, 100)
        l1, l2 = v["l1_cm"] * s, v["l2_cm"] * s
        return sig(v["N"] / (1 / (k * l1) - 1 / (k * l2)), n)
    if ask == "tension":
        r = (v["T1"] - v["dT"]) / v["T1"]
        f = r if linear else (1 / sqrt(r) if inv_root else sqrt(r))
        beats = abs(v["n0"] - v["n0"] * f)
        return sig(beats if per_s else beats * v["t"], n)
    if ask == "length":
        g = 1 + v["pct"] / 100
        if approx:
            f = 1 - v["pct"] / 100  # n' taken as (1 - pct%) n
        elif inv_root:
            f = 1 / sqrt(g)
        else:
            f = 1 / g
        N = v["N"] / 2 if double else v["N"]
        (f0,) = solve(_x - _x * f - N, _x)
        return sig(f0, n)
    if ask == "fork":
        k = 4 if swap else (1 if no_two else 2)
        pipe = v["v"] / (k * v["L"])
        return sig(pipe - v["N"] if raises else pipe + v["N"], n)
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
    "C14-M1": _m(("v_pipes", "fork"), swap=True),  # uses the other kind of pipe's formula
    "C14-M2": _m(("v_pipes", "fork"), no_two=True),  # takes n = v / L, dropping the 2 or 4
    "C14-M3": _m(("v_pipes",), cm=True),  # leaves the lengths in cm
    "C14-M4": _m(("tension",), linear=True),  # takes n ∝ T
    "C14-M5": _m(("tension",), per_s=True),  # gives the beats in one second, not in the time asked
    "C14-M6": _m(("tension", "length"), inv_root=True),  # takes n ∝ 1/sqrt(T) (or 1/sqrt(l))
    "C14-M7": _m(("length",), approx=True),  # takes a 5% longer wire as 5% lower in frequency
    "C14-M8": _m(("length",), double=True),  # counts a rise and a fall as two beats
    "C14-M9": _m(("fork",), raises=True),  # thinks lengthening a pipe raises its frequency
}
