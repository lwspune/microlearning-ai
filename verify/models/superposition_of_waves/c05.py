"""C05 Stationary waves: answer models (the key, and one per misconception).

The stationary wave is y = 2A cos(kx) sin(wt) (the book's form), from y1 = A sin(wt - kx) and y2 = A sin(wt + kx).
params["ask"] picks the quantity:
  "n_from_nodes":  frequency, in Hz, from the node spacing d_cm and the wave speed v (inputs d_cm, v);
  "node_gap":      distance, in m, between neighbouring nodes, from n and v (inputs n, v);
  "node_anti":     distance, in m, from a node to the next antinode on a string L m long with `loops` loops (inputs L, loops);
  "node_gap_eq":   distance, in m, between neighbouring nodes of y = 2A cos(kx) sin(wt) (input k, in rad/m);
  "amp_at":        amplitude, in m, at x of the wave made by y1 = A sin(wt - kx), y2 = A sin(wt + kx) (inputs A, k, x).

The key: nodes are lambda/2 apart and a node is lambda/4 from the next antinode; each loop is lambda/2 long; v = n lambda;
k = 2 pi / lambda; the amplitude at x is |2A cos kx|.
"""
from sympy import Abs, Rational, cos, pi, sin

from physics import sig

Rh, Rq, Rc = Rational(1, 2), Rational(1, 4), Rational(1, 100)


def _solve(v, p, *, gap_lam=False, gap_quarter=False, cm=False, invert=False, na_half=False, give_lam=False, no_2pi=False,
           same_amp=False, no_two=False, use_sin=False):
    ask, n = p["ask"], p.get("sf", 3)
    gap = 1 if gap_lam else (Rq if gap_quarter else Rh)  # node-to-node distance as a fraction of lambda
    if ask == "n_from_nodes":
        d = v["d_cm"] * (1 if cm else Rc)
        return sig(v["v"] / (d / gap), n)
    if ask == "node_gap":
        lam = v["n"] / v["v"] if invert else v["v"] / v["n"]
        return sig(gap * lam, n)
    if ask == "node_anti":
        lam = v["L"] / v["loops"] / gap  # each loop is one node-to-node gap
        if give_lam:
            return sig(lam, n)
        return sig(lam * (Rh if na_half else Rq), n)
    if ask == "node_gap_eq":
        lam = 1 / v["k"] if no_2pi else 2 * pi / v["k"]
        return sig(gap * lam, n)
    if ask == "amp_at":
        A, k, x = v["A"], v["k"], v["x"]
        if same_amp:
            return sig(2 * A, n)
        f = sin(k * x) if use_sin else cos(k * x)
        return sig(Abs((1 if no_two else 2) * A * f), n)
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
    "C05-M1": _m(("n_from_nodes", "node_gap", "node_anti", "node_gap_eq"), gap_lam=True),  # takes neighbouring nodes as lambda apart
    "C05-M2": _m(("n_from_nodes", "node_gap", "node_gap_eq"), gap_quarter=True),  # takes neighbouring nodes as lambda/4 apart
    "C05-M3": _m(("n_from_nodes",), cm=True),  # leaves the node spacing in cm
    "C05-M4": _m(("node_gap",), invert=True),  # turns v = n lambda upside down
    "C05-M5": _m(("node_anti",), na_half=True),  # takes a node and the next antinode as lambda/2 apart
    "C05-M6": _m(("node_anti",), give_lam=True),  # gives the wavelength instead of the node-to-antinode distance
    "C05-M7": _m(("node_gap_eq",), no_2pi=True),  # takes lambda = 1/k
    "C05-M8": _m(("amp_at",), same_amp=True),  # thinks every point swings with amplitude 2A
    "C05-M9": _m(("amp_at",), no_two=True),  # forgets the 2 in 2A cos kx
    "C05-M10": _m(("amp_at",), use_sin=True),  # uses sin kx in place of cos kx
}
