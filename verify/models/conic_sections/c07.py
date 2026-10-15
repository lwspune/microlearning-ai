"""C07 Finding an ellipse from its data: answer models (the key, and one per misconception).

Every ellipse here is x^2/a^2 + y^2/b^2 = 1 with a > b, foci (+-ae, 0).
p["ask"] picks the question type:
  eq  -> the ellipse, as the polynomial b^2 x^2 + a^2 y^2 - a^2 b^2 (the ellipse is it = 0).
         Inputs: any two of
           L  length of the major axis (2a)          F  distance between the foci (2ae)
           D  distance between the directrices (2a/e) m  length of the minor axis (2b)
           c  foci at (+-c, 0) (so ae = c)            e  the eccentricity
           R  length of the latus rectum (2b^2/a)     px, py  a point on the ellipse
  e   -> the eccentricity when the latus rectum is k times the minor axis (input k).
"""
from sympy import S, expand, nsimplify, solve, sqrt, symbols

x, y = symbols("x y", real=True)
_a, _e = symbols("a e", positive=True)


def _ask(p):
    return p.get("ask", "eq")


def _solve(v, b2_of, half=False):
    """(a^2, b^2) from the given data, with b^2 = b2_of(a, e).

    half: the student equates each full length (2a, 2ae, 2a/e, 2b, 2b^2/a) with its half.
    """
    k = 1 if half else 2
    b2 = b2_of(_a, _e)
    eqs = []
    if "L" in v:
        eqs.append(k * _a - v["L"])
    if "F" in v:
        eqs.append(k * _a * _e - v["F"])
    if "c" in v:
        eqs.append(_a * _e - v["c"])
    if "D" in v:
        eqs.append(k * _a / _e - v["D"])
    if "m" in v:
        eqs.append(b2 - (v["m"] / k) ** 2)
    if "e" in v:
        eqs.append(_e - v["e"])
    if "R" in v:
        eqs.append(k * b2 / _a - v["R"])
    if "px" in v:
        eqs.append(v["px"] ** 2 / _a**2 + v["py"] ** 2 / b2 - 1)
    if len(eqs) != 2:
        raise ValueError("needs exactly two pieces of data")
    sols = solve(eqs, [_a, _e], dict=True)
    sols = [s for s in sols if s[_a].is_positive and s[_e].is_positive]
    if len(sols) != 1:
        raise ValueError(f"no single ellipse ({sols})")
    a2 = S(sols[0][_a]) ** 2
    bb = b2.subs(sols[0])
    if not bb.is_positive:
        raise ValueError("b^2 is not positive")
    return nsimplify(a2), nsimplify(bb)


def _ellipse(a2, b2):
    return expand(b2 * x**2 + a2 * y**2 - a2 * b2)


def _e2(b_over_a):
    """e^2 = 1 - b^2/a^2, from b^2 = a^2(1 - e^2)."""
    return 1 - b_over_a**2


def key(v, p):
    if _ask(p) == "eq":
        # b^2 = a^2 - (ae)^2: the end of the minor axis is a from each focus.
        a2, b2 = _solve(v, lambda a, e: a**2 * (1 - e**2))
        if not a2 > b2:
            raise ValueError("the major axis is not along x")
        return _ellipse(a2, b2)
    if _ask(p) == "e":
        # 2b^2/a = k * 2b, so b/a = k and e^2 = 1 - b^2/a^2.
        return sqrt(_e2(v["k"]))
    raise ValueError(_ask(p))


def m1(v, p):
    """Adds instead of subtracting: b^2 = a^2 + a^2 e^2."""
    if _ask(p) == "eq":
        return _ellipse(*_solve(v, lambda a, e: a**2 * (1 + e**2)))
    if _ask(p) == "e":
        raise ValueError("b/a < 1 gives e^2 = (b/a)^2 - 1 < 0")
    raise ValueError(_ask(p))


def m2(v, p):
    """A full length equated with its half: 2ae read as ae, 2a as a, 2b as b, 2b^2/a as b^2/a."""
    if _ask(p) == "eq":
        if not any(n in v for n in "LFDmR"):
            raise ValueError("no full length in the data")
        return _ellipse(*_solve(v, lambda a, e: a**2 * (1 - e**2), half=True))
    if _ask(p) == "e":
        # b^2/a = k * 2b, so b/a = 2k.
        b_over_a = 2 * v["k"]
        if not b_over_a < 1:
            raise ValueError("b/a >= 1")
        return sqrt(_e2(b_over_a))
    raise ValueError(_ask(p))


def m3(v, p):
    """Finds a^2 and b^2 right, then writes a^2 under y^2 and b^2 under x^2."""
    if _ask(p) != "eq":
        raise ValueError("only for equations")
    a2, b2 = _solve(v, lambda a, e: a**2 * (1 - e**2))
    return _ellipse(b2, a2)


def m4(v, p):
    """e where e^2 belongs: b^2 = a^2(1 - e), and e^2 reported as e."""
    if _ask(p) == "eq":
        return _ellipse(*_solve(v, lambda a, e: a**2 * (1 - e)))
    if _ask(p) == "e":
        return _e2(v["k"])
    raise ValueError(_ask(p))


def m5(v, p):
    """The focus taken as the end of the minor axis: b = ae (so e = b/a)."""
    if _ask(p) == "eq":
        return _ellipse(*_solve(v, lambda a, e: a**2 * e**2))
    if _ask(p) == "e":
        return v["k"]
    raise ValueError(_ask(p))


MODELS = {"key": key, "C07-M1": m1, "C07-M2": m2, "C07-M3": m3, "C07-M4": m4, "C07-M5": m5}
