"""C03 Two points of observation: answer models (the key, and one per misconception).

A tower of height h stands with its foot N on level ground. Angles are in radians.
v["a"] is the smaller angle of elevation alpha, v["b"] the larger, beta.
p["ask"] picks the question type:
  h      two points v["d"] apart -> the height. p["side"]: "same" (one line through N, the
         point at beta nearer) or "opp" (on opposite sides of the tower).
  far    same side, gap v["d"] -> the far point's distance from the foot
  time   a walker at a steady speed sees alpha, then beta, v["t"] later -> the time still
         needed to reach the foot
  speed  an object flying level at height v["h"] is seen at alpha and at beta, v["t"]
         apart -> its speed
  ladder a ladder v["L"] long reaches v["k"] below the top of a flagstaff; from its foot the
         top is at v["th"] -> the flagstaff's height
"""
from sympy import Symbol, cot, pi, simplify, sin, solve, sqrt, tan


def _ask(p):
    return p["ask"]


def _side(p):
    return p.get("side", "same")


def _solve_height(v, p):
    """From the two right triangles: tan(angle) = height / distance from the foot."""
    H, X = Symbol("H", positive=True), Symbol("X", positive=True)
    a, b, d = v["a"], v["b"], v["d"]
    if _side(p) == "same":  # B at distance X, A at X + d
        eqs = [H - X * tan(b), H - (X + d) * tan(a)]
    else:  # B at distance X on one side, A at d - X on the other
        eqs = [H - X * tan(b), H - (d - X) * tan(a)]
    s = solve(eqs, [H, X], dict=True)[0]
    return simplify(s[H]), simplify(s[X])


def key(v, p):
    a, b = v.get("a"), v.get("b")
    ask = _ask(p)
    if ask == "h":
        return _solve_height(v, p)[0]
    if ask == "far":
        h, x = _solve_height(v, p)
        return simplify(x + v["d"])
    if ask == "time":
        # Unit height: the walker covers cot(a) - cot(b) in time t, and cot(b) remains.
        return simplify(v["t"] * cot(b) / (cot(a) - cot(b)))
    if ask == "speed":
        return simplify(v["h"] * (cot(a) - cot(b)) / v["t"])
    if ask == "ladder":
        x = Symbol("x", positive=True)
        L, k, th = v["L"], v["k"], v["th"]
        roots = [r for r in solve(x**2 + (x * tan(th) - k) ** 2 - L**2, x) if simplify(r * tan(th) - k) > 0]
        return simplify(roots[0] * tan(th))
    raise ValueError(ask)


def m1(v, p):
    """Same side <-> opposite sides: adds the two distances from the foot when it should subtract, or the reverse."""
    a, b = v.get("a"), v.get("b")
    ask = _ask(p)
    flip = {**p, "side": "opp" if _side(p) == "same" else "same"}
    if ask == "h":
        return key(v, flip)
    if ask == "far":
        h = simplify(v["d"] / (cot(a) + cot(b)))
        return simplify(h * cot(a))
    if ask == "time":
        return simplify(v["t"] * cot(b) / (cot(a) + cot(b)))
    if ask == "speed":
        return simplify(v["h"] * (cot(a) + cot(b)) / v["t"])
    raise ValueError("no two points to combine")


def m2(v, p):
    """Takes a point's distance from the foot as h tan(angle) instead of h cot(angle)."""
    a, b = v.get("a"), v.get("b")
    ask = _ask(p)
    if ask in ("h", "far"):
        gap = (tan(b) - tan(a)) if _side(p) == "same" else (tan(a) + tan(b))
        h = v["d"] / gap
        return simplify(h if ask == "h" else h * tan(a))
    if ask == "time":
        return simplify(v["t"] * tan(b) / (tan(b) - tan(a)))
    if ask == "speed":
        return simplify(v["h"] * (tan(b) - tan(a)) / v["t"])
    if ask == "ladder":
        H = Symbol("H", positive=True)
        L, k, th = v["L"], v["k"], v["th"]
        roots = solve((H * tan(th)) ** 2 + (H - k) ** 2 - L**2, H)
        return simplify(max(roots, key=lambda r: float(r)))
    raise ValueError(ask)


def m3(v, p):
    """Takes the gap between the points as the far point's whole distance from the foot."""
    a, b = v.get("a"), v.get("b")
    ask = _ask(p)
    if ask == "h":
        return simplify(v["d"] * tan(a))
    if ask == "far":
        return v["d"]
    if ask == "time":
        return simplify(v["t"] * cot(b) / cot(a))
    if ask == "speed":
        return simplify(v["h"] * cot(a) / v["t"])
    raise ValueError("no gap between two points")


def m4(v, p):
    """Believes the angle of elevation rises at a steady rate with the distance walked."""
    a, b = v.get("a"), v.get("b")
    ask = _ask(p)
    if ask == "far":
        return simplify(v["d"] * (pi / 2 - a) / (b - a))
    if ask == "time":
        return simplify(v["t"] * (pi / 2 - b) / (b - a))
    raise ValueError("only for a walk towards the foot")


def m5(v, p):
    """Ladder: takes the ladder's top as the flagstaff's top, so x^2 + H^2 = L^2."""
    if _ask(p) != "ladder":
        raise ValueError("ladder only")
    return simplify(v["L"] * sin(v["th"]))


def m6(v, p):
    """Ladder: takes the elevation as the ladder's own slope, so the ladder top is L sin(th) up, then adds k."""
    if _ask(p) != "ladder":
        raise ValueError("ladder only")
    return simplify(v["k"] + v["L"] * sin(v["th"]))


MODELS = {"key": key, "C03-M1": m1, "C03-M2": m2, "C03-M3": m3, "C03-M4": m4, "C03-M5": m5, "C03-M6": m6}
