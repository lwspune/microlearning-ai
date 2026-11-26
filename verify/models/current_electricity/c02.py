"""C02 Kirchhoff's voltage law: answer models (the key, and one per misconception).

params["ask"] picks the circuit:
  "par": two cells (e1, r1) and (e2, r2) in parallel, like poles joined, across an external resistance R.
         params["out"] = "I" (current through R, in A) or "V" (p.d. across R, in V).
  "net": Solved Ex.9.3's network: two junctions F and C joined by three branches. Left: cell eL (rising towards F)
         and RL; middle: RM alone; right: cell eR (rising towards C) and RR. Answer the size of the current in RM.
  "opp": two cells (e1, r1), (e2, r2) in series with like poles joined (opposing), and R; the current, in A.

The key solves the loop and junction laws directly: with V the potential of F above C (or across R), each branch
carries (emf - V) / resistance towards the top junction, and these currents add up to zero (C01).
"""
from sympy import Rational, linsolve, symbols

from physics import sig


def _top(branches):
    """Potential of the top junction for branches (emf rising towards it, resistance); currents sum to zero."""
    return sum(e / r for e, r in branches) / sum(1 / r for _, r in branches)


def _par(v, p, mode=None):
    e1, r1, e2, r2, R = v["e1"], v["r1"], v["e2"], v["r2"], v["R"]
    req = r1 * r2 / (r1 + r2)
    eeq = (e1 / r1 + e2 / r2) / (1 / r1 + 1 / r2)
    if mode == "series":
        i = (e1 + e2) / (R + r1 + r2)
    elif mode == "average":
        i = (e1 + e2) / 2 / (R + req)
    elif mode == "larger":
        i = max(e1, e2) / (R + req)
    elif mode == "no_r":
        i = eeq / R
    elif mode == "flip":
        i = abs(e1 / r1 - e2 / r2) / (1 / r1 + 1 / r2) / (R + req)
    elif mode is None:
        i = _top([(e1, r1), (e2, r2), (0, R)]) / R
    else:
        raise ValueError("does not apply to this item")
    return i if p["out"] == "I" else i * R


def _net(v, mode=None):
    eL, RL, RM, eR, RR = v["eL"], v["RL"], v["RM"], v["eR"], v["RR"]
    if mode in (None, "flip"):
        sR = eR if mode == "flip" else -eR  # flip: the right cell taken the wrong way round
        V = _top([(eL, RL), (0, RM), (sR, RR)])
        return abs(V / RM)
    if mode == "drop":
        # Every IR term written as a drop, even where the loop is crossed against the current.
        i1, i2, i3 = symbols("i1 i2 i3")
        (s,) = linsolve([i1 + i2 - i3, -RL * i1 - RM * i2 + eL, -RR * i3 - RM * i2 + eR], [i1, i2, i3])
        return abs(s[1])
    if mode == "alone":
        return eL / (RL + RM)  # the left loop treated as a series circuit on its own
    raise ValueError("does not apply to this item")


def _opp(v, mode=None):
    e1, r1, e2, r2, R = v["e1"], v["r1"], v["e2"], v["r2"], v["R"]
    if mode == "flip":
        return (e1 + e2) / (R + r1 + r2)
    if mode == "no_r":
        return (e1 - e2) / R
    if mode == "larger":
        return max(e1, e2) / (R + r1 + r2)
    if mode is None:
        return (e1 - e2) / (R + r1 + r2)
    raise ValueError("does not apply to this item")


def _solve(v, p, mode=None):
    ask = p["ask"]
    if ask == "par":
        x = _par(v, p, mode)
    elif ask == "net":
        x = _net(v, mode)
    elif ask == "opp":
        x = _opp(v, mode)
    else:
        raise ValueError(f"unknown ask {ask}")
    return sig(Rational(x) if isinstance(x, int) else x)


def key(v, p):
    return _solve(v, p)


def _m(mode):
    return lambda v, p: _solve(v, p, mode)


MODELS = {
    "key": key,
    "C02-M1": _m("series"),  # adds the emfs of parallel cells, as if in series
    "C02-M2": _m("average"),  # takes the parallel pair's emf as the plain average
    "C02-M3": _m("larger"),  # takes the larger emf for the combination
    "C02-M4": _m("no_r"),  # leaves the internal resistance out of the loop
    "C02-M5": _m("flip"),  # gives a cell's emf the wrong sign
    "C02-M6": _m("drop"),  # takes every IR term as a drop, whatever the direction of travel
    "C02-M7": _m("alone"),  # treats one loop as a separate series circuit
}
