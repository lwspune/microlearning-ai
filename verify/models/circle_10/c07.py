"""C07 Angles between intersecting chords: answer models (the key, and one per misconception).

params["mode"]: "in"  - chords meet inside the circle; A is the arc the angle intercepts, B the arc
                        its vertically opposite angle intercepts.
                "out" - lines containing chords meet outside; A is the far arc, B the near arc.
params["ask"]:  "angle" - inputs a, b are the arcs A, B (or, with params["given"] == "inscribed",
                          inscribed angles standing on them: A = 2a, B = 2b); find the angle.
                "arc"   - inputs t (the angle) and b (arc B, or an inscribed angle on it when
                          given == "inscribed"); find arc A.
All measures in degrees.
"""
from sympy import Integer, Rational, Symbol, solve

HALF = Rational(1, 2)
X = Symbol("X")


def _arcs(v, p, double=True):
    k = 2 if (p.get("given") == "inscribed" and double) else 1
    return k * v["b"], (k * v["a"] if "a" in v else None)


def _run(v, p, rule, double=True):
    """Apply the student's rule (angle from arcs A, B) forwards, or solve it for arc A."""
    mode = p["mode"]
    B, A = _arcs(v, p, double)
    if p["ask"] == "angle":
        ans = rule(A, B, mode)
        if not 0 < ans < 180:
            raise ValueError("not an angle between lines")
        return ans
    sols = solve(rule(X, B, mode) - v["t"], X)
    if len(sols) != 1:
        raise ValueError("rule does not fix the arc")
    ans = sols[0]
    if not 0 < ans < 360:
        raise ValueError("not an arc of the circle")
    return ans


def key(v, p):
    """From the definition: join two end points; the angle is an exterior angle of the triangle
    (inside) or of the triangle with the outside point (outside), whose angles are inscribed angles,
    each half its arc."""
    def rule(A, B, mode):
        ins_a, ins_b = HALF * A, HALF * B  # inscribed angles on arcs A and B
        return ins_a + ins_b if mode == "in" else ins_a - ins_b
    return _run(v, p, rule)


def m1(v, p):
    """Mixes the two cases: half the difference inside, half the sum outside."""
    return _run(v, p, lambda A, B, mode: HALF * (A - B) if mode == "in" else HALF * (A + B))


def m2(v, p):
    """Leaves out the half, as if the angle measured its arcs like a central angle."""
    return _run(v, p, lambda A, B, mode: A + B if mode == "in" else A - B)


def m3(v, p):
    """Uses one arc only, as for an inscribed angle: the angle is half the arc it faces (A)."""
    return _run(v, p, lambda A, B, mode: HALF * A)


def m4(v, p):
    """Inside: gives the adjacent angle at the crossing (180 minus the right one)."""
    if p["mode"] != "in":
        raise ValueError("inside only")
    return _run(v, p, lambda A, B, mode: Integer(180) - HALF * (A + B))


def m5(v, p):
    """Takes an arc to equal the inscribed angle standing on it (does not double it)."""
    if p.get("given") != "inscribed":
        raise ValueError("needs inscribed angles")
    return _run(v, p, lambda A, B, mode: HALF * (A + B) if mode == "in" else HALF * (A - B), double=False)


MODELS = {"key": key, "C07-M1": m1, "C07-M2": m2, "C07-M3": m3, "C07-M4": m4, "C07-M5": m5}
