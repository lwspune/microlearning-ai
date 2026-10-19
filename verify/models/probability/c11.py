"""C11 Bounds on probabilities: answer models (the key, and one per misconception).

Inputs, one of:
  - pa = P(A), pb = P(B), with params["ask"] one of
      imin, imax (least / greatest possible P(A ∩ B)), umin, umax (least / greatest possible P(A ∪ B));
  - pa, pb and claimed values c1, c2, with params ask = "stmt", s1, s2 (each one of imin, imax, umin, umax):
      statement I says "the <s1> value is c1", statement II says "the <s2> value is c2";
      the answer names which are correct (Symbol I_only, II_only, both, neither);
  - u0, i0, i1 with params ask = "summax": P(A ∪ B) ≥ u0 and i0 ≤ P(A ∩ B) ≤ i1; the greatest P(A) + P(B).
"""
from sympy import Eq, Max, Min, Symbol, symbols
from sympy.solvers.simplex import lpmax, lpmin

_X, _Y, _Z, _W = symbols("x y z w")  # A only, B only, both, neither
_REGIONS = [_X >= 0, _Y >= 0, _Z >= 0, _W >= 0, Eq(_X + _Y + _Z + _W, 1)]

_VERDICT = {(True, True): "both", (True, False): "I_only", (False, True): "II_only", (False, False): "neither"}


def _lp(v, ask):
    """Straight from the definition: the four Venn regions are non-negative and add to 1;
    P(A) and P(B) fix two sums of regions. Optimise the asked event over every such split."""
    cons = _REGIONS + [Eq(_X + _Z, v["pa"]), Eq(_Y + _Z, v["pb"])]
    target = _Z if ask[0] == "i" else _X + _Y + _Z
    return (lpmin if ask[1:] == "min" else lpmax)(target, cons)[0]


def _verdict(bound, v, p):
    """Which of the two statements hold, when each extreme is found by `bound(ask)`."""
    return Symbol(_VERDICT[(bound(p["s1"]) == v["c1"], bound(p["s2"]) == v["c2"])])


def key(v, p):
    a = p["ask"]
    if a == "summax":
        cons = _REGIONS + [_X + _Y + _Z >= v["u0"], _Z >= v["i0"], _Z <= v["i1"]]
        return lpmax(_X + _Y + 2 * _Z, cons)[0]  # P(A) + P(B) = (x + z) + (y + z)
    if a == "stmt":
        return _verdict(lambda ask: _lp(v, ask), v, p)
    return _lp(v, a)


def _model(bounds):
    """A misconception model from its (wrong) table of the four extremes."""

    def m(v, p):
        a = p["ask"]
        if a == "stmt":
            return _verdict(lambda ask: bounds(v["pa"], v["pb"])[ask], v, p)
        if a == "summax":
            raise ValueError("no two-event bounds asked")
        return bounds(v["pa"], v["pb"])[a]

    return m


def _m1_bounds(pa, pb):
    """Swaps the extremes: the overlap is least when one event is inside the other and greatest
    when they are as far apart as possible; the union is least when they are disjoint."""
    s = pa + pb
    return {"imin": Min(pa, pb), "imax": Max(0, s - 1), "umin": Min(1, s), "umax": Max(pa, pb)}


def m1(v, p):
    if p["ask"] == "summax":  # gives the least value instead: the least union plus the least overlap
        return v["u0"] + v["i0"]
    return _model(_m1_bounds)(v, p)


def _m2_bounds(pa, pb):
    """Forgets that every probability lies between 0 and 1: least overlap P(A) + P(B) - 1 even when
    negative, greatest union P(A) + P(B) even when above 1."""
    s = pa + pb
    return {"imin": s - 1, "imax": Min(pa, pb), "umin": Max(pa, pb), "umax": s}


def m2(v, p):
    if p["ask"] == "summax":  # never pushes the union up to 1: keeps it at the given u0
        return v["u0"] + v["i1"]
    return _model(_m2_bounds)(v, p)


def _m3_bounds(pa, pb):
    """Misses the forced overlap: thinks two events can always be disjoint, so the least P(A ∩ B) is 0."""
    s = pa + pb
    return {"imin": 0, "imax": Min(pa, pb), "umin": Max(pa, pb), "umax": Min(1, s)}


m3 = _model(_m3_bounds)


def _m4_bounds(pa, pb):
    """Picks the wrong one of the pair: the overlap can grow to the larger probability,
    and the union can shrink to the smaller one."""
    s = pa + pb
    return {"imin": Max(0, s - 1), "imax": Max(pa, pb), "umin": Min(pa, pb), "umax": Min(1, s)}


m4 = _model(_m4_bounds)


def m5(v, p):
    """Treats the events as independent: P(A ∩ B) = P(A) P(B), so P(A ∪ B) = P(A) + P(B) - P(A) P(B),
    whatever extreme is asked."""
    a = p["ask"]
    if a in ("stmt", "summax"):
        raise ValueError(a)
    pab = v["pa"] * v["pb"]
    return pab if a[0] == "i" else v["pa"] + v["pb"] - pab


def m6(v, p):
    """Drops the overlap: P(A) + P(B) = P(A ∪ B), so the greatest P(A) + P(B) is the greatest union, 1."""
    a = p["ask"]
    if a == "summax":
        return 1
    if a in ("umin", "umax"):
        return v["pa"] + v["pb"]
    raise ValueError(a)


MODELS = {"key": key, "C11-M1": m1, "C11-M2": m2, "C11-M3": m3, "C11-M4": m4, "C11-M5": m5, "C11-M6": m6}
