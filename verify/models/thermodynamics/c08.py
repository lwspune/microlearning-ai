"""C08 Cyclic process: answer models (the key, and one per misconception).

params["ask"] picks the quantity:
  "law":       what the first law gives over a cycle (a named answer);
  "ellipse":   work, in J, done in N cycles round an elliptical p-V loop from V1 to V2 (m^3) and p1 to p2 (Pa)
               (inputs N, V1, V2, p1, p2);
  "Q_cycle":   net heat, in J, taken in over a cycle in which the net work done by the system is W (inputs W);
  "direction": what a clockwise cycle on a p-V diagram means (a named answer);
  "rectangle": net work, in J, round a clockwise rectangular cycle between V1 and V2 litres and p1 < p2 (Pa)
               (inputs V1, V2, p1, p2).

The key takes ΔU = 0 over a cycle (U is a state variable), so Q = W by the first law, and the net work as the
area enclosed by the loop, integrating p dV round it in sympy: positive when the loop runs clockwise.
"""
from sympy import Rational, Symbol, cos, integrate, pi, sin

from physics import sig

_t = Symbol("t")
L = Rational(1, 1000)

NAMED = {
    "law": {"key": "W_equals_Q", "C08-M1": "W_zero", "C08-M2": "Q_zero", "C08-M3": "dU_equals_Q"},
    "direction": {"key": "positive_enclosed", "C08-M1": "no_net_work", "C08-M7": "work_on_gas", "C08-M9": "area_under_top"},
}


def _loop_work(V, p):
    """∮ p dV round a loop given as V(t), p(t), t from 0 to 2π."""
    return integrate(p * V.diff(_t), (_t, 0, 2 * pi))


def _solve(v, p, *, one=False, full=False, box=False, flip=False, top_only=False, double=False, none=False):
    ask, n = p["ask"], p.get("sf", 4)
    if ask == "ellipse":
        a, b = (v["V2"] - v["V1"]) / 2, (v["p2"] - v["p1"]) / 2
        if full:
            a, b = 2 * a, 2 * b
        if box:
            W1 = 4 * a * b
        else:
            # clockwise: V = Vc + a cos t, p = pc - b sin t
            W1 = _loop_work((v["V1"] + v["V2"]) / 2 + a * cos(_t), (v["p1"] + v["p2"]) / 2 - b * sin(_t))
        return sig(W1 * (1 if one else v["N"]), n)
    if ask == "Q_cycle":
        if none:
            return 0
        W = -v["W"] if flip else v["W"]
        return sig(2 * W if double else W, n)  # ΔU = 0, so Q = W
    if ask == "rectangle":
        V1, V2, p1, p2 = v["V1"] * L, v["V2"] * L, v["p1"], v["p2"]
        if none:
            return 0
        if top_only:
            return sig(p2 * (V2 - V1), n)
        W = p2 * (V2 - V1) + p1 * (V1 - V2)  # expand at p2, come back at p1; the vertical sides do no work
        return sig(-W if flip else W, n)
    raise ValueError(f"unknown ask {ask}")


def key(v, p):
    if p["ask"] in NAMED:
        return Symbol(NAMED[p["ask"]]["key"])
    return _solve(v, p)


def _named(p, mid):
    return Symbol(NAMED[p["ask"]][mid])


def _check(p, mid, *numeric):
    if p["ask"] in NAMED:
        if mid not in NAMED[p["ask"]]:
            raise ValueError("does not apply to this item")
        return True
    if p["ask"] not in numeric:
        raise ValueError("does not apply to this item")
    return False


def m1(v, p):
    """Thinks no net work is done because the system returns to its start."""
    if _check(p, "C08-M1", "rectangle"):
        return _named(p, "C08-M1")
    return _solve(v, p, none=True)


def m2(v, p):
    """Thinks no net heat flows over a cycle."""
    if _check(p, "C08-M2", "Q_cycle"):
        return _named(p, "C08-M2")
    return _solve(v, p, none=True)


def m3(v, p):
    """Forgets that ΔU = 0 over a cycle, taking ΔU = Q."""
    _check(p, "C08-M3")
    return _named(p, "C08-M3")


def m4(v, p):
    """Gives the work for one cycle only."""
    _check(p, None, "ellipse")
    return _solve(v, p, one=True)


def m5(v, p):
    """Uses the full widths of the ellipse instead of the semi-axes."""
    _check(p, None, "ellipse")
    return _solve(v, p, full=True)


def m6(v, p):
    """Uses the rectangle round the loop instead of the loop itself."""
    _check(p, None, "ellipse")
    return _solve(v, p, box=True)


def m7(v, p):
    """Gets the sign of the net work or heat wrong."""
    if _check(p, "C08-M7", "Q_cycle", "rectangle"):
        return _named(p, "C08-M7")
    return _solve(v, p, flip=True)


def m8(v, p):
    """Thinks ΔU equals the net work, so Q = 2W."""
    _check(p, None, "Q_cycle")
    return _solve(v, p, double=True)


def m9(v, p):
    """Takes the area under the top path only."""
    if _check(p, "C08-M9", "rectangle"):
        return _named(p, "C08-M9")
    return _solve(v, p, top_only=True)


MODELS = {"key": key, "C08-M1": m1, "C08-M2": m2, "C08-M3": m3, "C08-M4": m4, "C08-M5": m5, "C08-M6": m6,
          "C08-M7": m7, "C08-M8": m8, "C08-M9": m9}
