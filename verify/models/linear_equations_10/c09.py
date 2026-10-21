"""C09 Speed, boat and work problems: answer models (the key, and one per misconception).

Inputs by p["kind"]:
- "boat": a km upstream and b km downstream take h1 hours n1 minutes; c up and d down take h2 h n2 min.
  p["ask"] is "x" (speed of the boat in still water) or "y" (speed of the stream).
- "meet": two people D km apart meet after h1 h n1 min moving towards each other; moving the same way,
  the faster catches the slower after h2 h n2 min. p["ask"] is "x" (faster) or "y" (slower).
- "bus": D km, part by bus at s1 km/hr and the rest by plane at s2 km/hr, h h n min in all.
  The answer is the distance by bus.
"""
from sympy import Symbol, solve

_X = Symbol("sx", positive=True)
_Y = Symbol("sy", positive=True)


def _hours(h, n, wrong=False):
    """h hours n minutes in hours; wrong=True reads it as the decimal h.n (4 h 30 min as 4.30)."""
    return h + n / (100 if wrong else 60)


def _times(v, wrong=False):
    if wrong and v["n1"] == 0 and v["n2"] == 0:
        raise ValueError("no minutes to misread")
    return _hours(v["h1"], v["n1"], wrong), _hours(v["h2"], v["n2"], wrong)


def _speeds(v, wrong=False):
    """Solve the story's equations straight from time = distance / speed, for x > y > 0."""
    t1, t2 = _times(v, wrong)
    if v.get("a") is not None:
        eqs = [v["a"] / (_X - _Y) + v["b"] / (_X + _Y) - t1, v["c"] / (_X - _Y) + v["d"] / (_X + _Y) - t2]
    else:
        eqs = [(_X + _Y) * t1 - v["D"], (_X - _Y) * t2 - v["D"]]
    sols = [s for s in solve(eqs, [_X, _Y], dict=True) if s[_X] > s[_Y]]
    if len(sols) != 1:
        raise ValueError("no single solution with x > y > 0")
    return sols[0][_X], sols[0][_Y]


def _bus(v, wrong=False):
    t = _hours(v["h"], v["n"], wrong)
    if wrong and v["n"] == 0:
        raise ValueError("no minutes to misread")
    x = Symbol("bx")
    (sol,) = solve(x / v["s1"] + (v["D"] - x) / v["s2"] - t, x)
    return sol


def _pick(xy, p):
    return xy[0] if p["ask"] == "x" else xy[1]


def _river(v):
    """Upstream (or closing-in) speed u = x - y and downstream (or meeting) speed w = x + y."""
    x, y = _speeds(v)
    return x - y, x + y


def key(v, p):
    if p["kind"] == "bus":
        return _bus(v)
    return _pick(_speeds(v), p)


def m1(v, p):
    """Solves for m = 1/(x - y) and n = 1/(x + y), then uses m and n as x - y and x + y."""
    if p["kind"] != "boat" or p["ask"] != "x":
        raise ValueError("boat speed only (the stream comes out negative)")
    u, w = _river(v)
    return (1 / u + 1 / w) / 2


def m2(v, p):
    """Adds or subtracts x - y and x + y but forgets to halve: x = u + w, y = w - u."""
    if p["kind"] == "bus":
        raise ValueError("no pair x + y, x - y")
    u, w = _river(v)
    return u + w if p["ask"] == "x" else w - u


def m3(v, p):
    """Takes the speed of the boat in still water to be its downstream speed x + y."""
    if p["kind"] != "boat" or p["ask"] != "x":
        raise ValueError("boat speed only")
    return _river(v)[1]


def m4(v, p):
    """Gives the other unknown of the pair instead of the one asked."""
    if p["kind"] == "bus":
        return v["D"] - _bus(v)
    x, y = _speeds(v)
    return y if p["ask"] == "x" else x


def m5(v, p):
    """Reads h hours n minutes as the decimal h.n hours (4 h 30 min as 4.30 h)."""
    if p["kind"] == "bus":
        return _bus(v, wrong=True)
    return _pick(_speeds(v, wrong=True), p)


def m6(v, p):
    """Gives the time spent in the bus (the unknown solved for) instead of the distance asked."""
    if p["kind"] != "bus":
        raise ValueError("bus journeys only")
    return _bus(v) / v["s1"]


MODELS = {"key": key, "C09-M1": m1, "C09-M2": m2, "C09-M3": m3, "C09-M4": m4, "C09-M5": m5, "C09-M6": m6}
