"""C02 Properties of parallel lines: answer models (the key, and one per misconception).

Every figure has two parallel lines cut by a transversal. Where the transversal crosses a line,
it makes four angles, named by where they sit: "ne" (above the line, right of the transversal),
"nw" (above, left), "sw" (below, left) and "se" (below, right). Angles are in degrees.

params["ask"] says what the item asks for:
  "chain"  inputs g (a given angle at quadrant params["at"] of the upper crossing) and, in a
           figure with a second transversal, g2 (the angle in the same place on that one).
           The answer is the angle at quadrant params["to"] of the lower crossing.
           params["chain"] is the book's route from g to the answer: steps "lin" (linear pair)
           and "vert" (vertically opposite), and one pair step "corr", "alt" or "int".
  "alg"    inputs e1 (the angle at quadrant params["pos"][0] of the upper crossing) and e2 (at
           params["pos"][1] of the lower crossing), expressions in x; params["rel"] names the
           pair. The answer is x.
  "ratio"  inputs a, b: the angles y (at params["pos"][0], upper crossing) and z (at
           params["pos"][1], lower crossing) are in the ratio y : z = a : b; params["rel"] names
           the pair. The answer is y.

The key never uses the three properties. It builds the figure: a transversal at angle th (from
the lines' rightward direction to its upward direction) crosses both lines at the same angle
th, because parallel lines have one direction. Each quadrant's angle follows from th.
"""
from sympy import Rational, Symbol, solve, sympify

PAIRS = ("corr", "alt", "int")


def _angle(q, th):
    """The angle in quadrant q at a crossing where the transversal makes th with the line."""
    return th if q in ("ne", "sw") else 180 - th


def key(v, p):
    th = Symbol("th")
    if p["ask"] == "chain":
        t = solve(_angle(p["at"], th) - v["g"], th)[0]
        return sympify(_angle(p["to"], t))
    if p["ask"] == "alg":
        q1, q2 = p["pos"]
        (x,) = (v["e1"] + v["e2"]).free_symbols
        sol = solve([_angle(q1, th) - v["e1"], _angle(q2, th) - v["e2"]], [th, x], dict=True)[0]
        return sol[x]
    if p["ask"] == "ratio":
        q1, q2 = p["pos"]
        t = solve(v["b"] * _angle(q1, th) - v["a"] * _angle(q2, th), th)[0]
        return sympify(_angle(q1, t))
    raise ValueError(p["ask"])


def _run(g, chain, pair_rule):
    """Follows the route step by step: linear pairs and vertical angles done right, the pair by pair_rule."""
    val = sympify(g)
    for s in chain:
        if s == "lin":
            val = 180 - val
        elif s == "vert":
            pass
        else:
            val = pair_rule(s, val)
    return val


def _right(s, val):
    return val if s in ("corr", "alt") else 180 - val


def _pair(p):
    pair = [s for s in p["chain"] if s in PAIRS] if p["ask"] == "chain" else [p["rel"]]
    assert len(pair) == 1, "one pair step per route"
    return pair[0]


def _by_sum(v, p, total, equal=False):
    """Solves an 'alg' or 'ratio' item with the pair taken as equal, or as adding to total."""
    if p["ask"] == "alg":
        (x,) = (v["e1"] + v["e2"]).free_symbols
        eq = v["e1"] - v["e2"] if equal else v["e1"] + v["e2"] - total
        return solve(eq, x)[0]
    if p["ask"] == "ratio":
        if equal:
            raise ValueError("equal angles can't be in the ratio a : b")
        return Rational(total) * v["a"] / (v["a"] + v["b"])
    raise ValueError(p["ask"])


def m1(v, p):
    """Interior angles on the same side are equal (like alternate angles)."""
    if _pair(p) != "int":
        raise ValueError("needs interior angles")
    if p["ask"] == "chain":
        return _run(v["g"], p["chain"], lambda s, val: val)
    return _by_sum(v, p, 0, equal=True)


def m2(v, p):
    """Corresponding or alternate angles are supplementary (like interior angles)."""
    if _pair(p) not in ("corr", "alt"):
        raise ValueError("needs corresponding or alternate angles")
    if p["ask"] == "chain":
        return _run(v["g"], p["chain"], lambda s, val: 180 - val)
    return _by_sum(v, p, 180)


def m3(v, p):
    """The two angles of the pair are complementary: they add to 90 degrees."""
    if p["ask"] == "chain":
        out = _run(v["g"], p["chain"], lambda s, val: 90 - val)
    else:
        out = _by_sum(v, p, 90)
    if out <= 0:
        raise ValueError("no angle")
    return out


def m4(v, p):
    """Interior angles on the same side add to 360 degrees (like a quadrilateral's angles)."""
    if _pair(p) != "int" or p["ask"] == "chain":
        raise ValueError("needs interior angles given by letters")
    return _by_sum(v, p, 360)


def m5(v, p):
    """Pairs the asked angle with the angle made by the other transversal."""
    if "g2" not in v:
        raise ValueError("needs a second transversal")
    return _run(v["g2"], p["chain"], _right)


def m6(v, p):
    """Matches the ratio to the angles the wrong way round: y takes the b part."""
    if p["ask"] != "ratio":
        raise ValueError("needs a ratio")
    return Rational(180) * v["b"] / (v["a"] + v["b"])


MODELS = {"key": key, "C02-M1": m1, "C02-M2": m2, "C02-M3": m3, "C02-M4": m4, "C02-M5": m5, "C02-M6": m6}
