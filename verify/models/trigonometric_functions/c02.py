"""C02 Signs in the four quadrants: answer models (the key, and one per misconception).

Inputs: t, the angle in radians (a degree stem is given as its radian value, e.g. 5*pi/3 for 300 degrees).
params["ask"]:
  "qs"   - the quadrant of t's terminal arm and the sign of params["f"](t): Tuple(quadrant, +1 or -1).
           params["unit"] = "rad" when the stem writes t in radians (e.g. 4^c).
  "cond" - the quadrant where every condition in params["cond"] holds (e.g. ["cos>0", "cot<0"]): an Integer 1-4.
"""
from sympy import Integer, Mod, N, Tuple, cos, cot, csc, floor, pi, sec, sin, tan

_F = {"sin": sin, "cos": cos, "tan": tan, "cosec": csc, "sec": sec, "cot": cot}
_XY = {1: (1, 1), 2: (-1, 1), 3: (-1, -1), 4: (1, -1)}  # signs of x and y in each quadrant


def _quadrant(a):
    """The quadrant of the terminal arm of the angle a (radians), from a mod 2*pi."""
    r = Mod(a, 2 * pi)
    if Mod(r, pi / 2) == 0:
        raise ValueError("the arm lies on an axis")
    return int(floor(r / (pi / 2))) + 1


def _true_sign(q, f):
    """The sign in quadrant q from the definitions: sin, cosec follow y; cos, sec follow x; tan, cot follow y/x."""
    x, y = _XY[q]
    return {"sin": y, "cosec": y, "cos": x, "sec": x, "tan": x * y, "cot": x * y}[f]


def _swapped_xy(q, f):
    """Sign table with sin read from x and cos from y (their reciprocals follow); tan, cot unchanged."""
    x, y = _XY[q]
    return {"sin": x, "cosec": x, "cos": y, "sec": y, "tan": x * y, "cot": x * y}[f]


def _tc_swapped(q, f):
    """'All Sin Cos Tan': cos and sec positive in III, tan and cot positive in IV."""
    s = _true_sign(q, f)
    if q in (3, 4) and f in ("cos", "sec", "tan", "cot"):
        return -s
    return s


def _reciprocal_flips(q, f):
    """cosec, sec, cot take the opposite sign to sin, cos, tan."""
    s = _true_sign(q, f)
    return -s if f in ("cosec", "sec", "cot") else s


def _parse(c):
    """'cos>0' -> ("cos", 1); 'cot<0' -> ("cot", -1)."""
    op = ">" if ">" in c else "<"
    f, rhs = c.split(op)
    if rhs.strip() != "0":
        raise ValueError(f"condition {c} must compare with 0")
    f, want = f.strip(), (1 if op == ">" else -1)
    if f not in _F:
        raise ValueError(f"unknown function {f}")
    return f, want


def _solve(p, table):
    """The one quadrant where every condition holds under the given sign table."""
    conds = [_parse(c) for c in p["cond"]]
    found = [q for q in (1, 2, 3, 4) if all(table(q, f) == want for f, want in conds)]
    if len(found) != 1:
        raise ValueError(f"conditions hold in quadrants {found}, not exactly one")
    return Integer(found[0])


def _qs(v, p, quadrant_of, table=_true_sign):
    if p.get("ask") != "qs":
        raise ValueError("needs an angle")
    q = quadrant_of(v["t"])
    return Tuple(Integer(q), Integer(table(q, p["f"])))


def key(v, p):
    """From the definition: the arm's quadrant from t mod 2*pi, the sign from the function's actual value."""
    if p["ask"] == "cond":
        # Test one angle inside each quadrant with the real functions.
        conds = [_parse(c) for c in p["cond"]]
        found = [q for q in (1, 2, 3, 4)
                 if all((N(_F[f]((2 * q - 1) * pi / 4)) > 0) == (want > 0) for f, want in conds)]
        if len(found) != 1:
            raise ValueError(f"conditions hold in quadrants {found}")
        return Integer(found[0])
    t = v["t"]
    val = N(_F[p["f"]](t), 30)
    return Tuple(Integer(_quadrant(t)), Integer(1 if val > 0 else -1))


def m1(v, p):
    """Reads sin from x and cos from y (so cosec follows x, sec follows y)."""
    if p["ask"] == "cond":
        return _solve(p, _swapped_xy)
    return _qs(v, p, _quadrant, _swapped_xy)


def m2(v, p):
    """Swaps Tan and Cos in 'All Sin Tan Cos': cos, sec positive in III; tan, cot positive in IV."""
    if p["ask"] == "cond":
        return _solve(p, _tc_swapped)
    return _qs(v, p, _quadrant, _tc_swapped)


def m3(v, p):
    """Gives a reciprocal the opposite sign: cosec = -sign(sin), sec = -sign(cos), cot = -sign(tan)."""
    if p["ask"] == "cond":
        return _solve(p, _reciprocal_flips)
    if p["f"] not in ("cosec", "sec", "cot"):
        raise ValueError("not a reciprocal function")
    return _qs(v, p, _quadrant, _reciprocal_flips)


def m4(v, p):
    """Takes the number of completed right angles as the quadrant number (300 degrees: three, so Quadrant III)."""
    def q_of(a):
        _quadrant(a)  # rejects an arm on an axis
        n = int(floor(Mod(a, 2 * pi) / (pi / 2)))
        if n == 0:
            raise ValueError("no completed right angle")
        return n
    return _qs(v, p, q_of)


def m5(v, p):
    """Drops multiples of 180 degrees as if they were whole turns: reads the quadrant of t mod pi."""
    return _qs(v, p, lambda a: _quadrant(Mod(a, pi)))


def m6(v, p):
    """Reads an angle in radians as degrees: 4^c as 4 degrees."""
    if p.get("unit") != "rad":
        raise ValueError("the angle is not in radians")
    return _qs(v, p, lambda a: _quadrant(a * pi / 180))


MODELS = {"key": key, "C02-M1": m1, "C02-M2": m2, "C02-M3": m3, "C02-M4": m4, "C02-M5": m5, "C02-M6": m6}
