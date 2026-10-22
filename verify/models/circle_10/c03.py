"""C03 Touching circles: answer models (the key, and one per misconception).

Every item names what it asks in params["find"] and how the circles touch in params["touch"]
("ext": outside each other, "int": one inside the other):
  dist      radii r1, r2 given; the distance between the centres            (inputs r1, r2)
  radius    distance d and one radius r given; the other radius             (inputs d, r)
  tangents  the number of common tangents (any radii r1 != r2 will do)      (inputs r1, r2)
  three     circles with centres A, B, C touch each other externally, with
            AB, BC, CA given; the radius of the circle with centre B        (inputs ab, bc, ca)

The key works from the definition: put one centre at the origin and the other at (d, 0); the
circles touch when they have exactly one common point, and they touch externally when that
point lies between the centres. Common tangents are counted as lines at distance r1 from one
centre and r2 from the other. Each misconception applies its own (wrong) distance rule.
"""
from sympy import Rational, Symbol, solve, sympify

_D = Symbol("d", positive=True)
_X = Symbol("x", positive=True)


def _kind(r1, r2, d):
    """How circles of radii r1, r2 with centres d apart meet: "ext", "int" or None (not touching)."""
    x0 = (d**2 + r1**2 - r2**2) / (2 * d)   # where the two circles' common points lie (x = x0)
    if sympify(x0**2 - r1**2) != 0:          # y^2 = r1^2 - x0^2 must be 0 for a single common point
        return None
    return "ext" if 0 < x0 < d else "int"


def _key_dist(r1, r2, touch):
    found = [s for s in solve((_D**2 + r1**2 - r2**2) ** 2 - (2 * _D * r1) ** 2, _D) if _kind(r1, r2, s) == touch]
    if len(found) != 1:
        raise ValueError("no unique touching distance")
    return found[0]


def _key_other(r, d, touch):
    found = [s for s in solve((d**2 + r**2 - _X**2) ** 2 - (2 * d * r) ** 2, _X) if _kind(r, s, d) == touch]
    if len(found) != 1:
        raise ValueError("no unique other radius")
    return found[0]


def _tangents(r1, r2, d):
    """Lines x cos t + y sin t = r1 (distance r1 from the origin) at distance r2 from (d, 0):
    d cos t - r1 = +-r2. Each value of cos t inside (-1, 1) gives two lines, +-1 gives one."""
    count = 0
    for c in {(r1 + r2) / d, (r1 - r2) / d}:
        if abs(c) < 1:
            count += 2
        elif abs(c) == 1:
            count += 1
    return count


def _other(touch):
    return "int" if touch == "ext" else "ext"


def _solve_rule(rule, r, d):
    """The other radius x > 0 a student finds from the believed rule(r, x) = d."""
    found = {s for e in rule(r, _X) for s in solve(e - d, _X) if e.subs(_X, s) > 0}
    if len(found) != 1:
        raise ValueError("the rule gives no unique radius")
    return found.pop()


def key(v, p):
    f, t = p["find"], p["touch"]
    if f == "dist":
        return _key_dist(v["r1"], v["r2"], t)
    if f == "radius":
        return _key_other(v["r"], v["d"], t)
    if f == "tangents":
        return Rational(_tangents(v["r1"], v["r2"], _key_dist(v["r1"], v["r2"], t)))
    if f == "three":
        # Radii a, b, c of A, B, C with each pair having one common point at its given distance,
        # and that point between the centres (touching externally).
        a, b, c = (Symbol(n, positive=True) for n in "abc")
        tang = lambda r1, r2, d: (d**2 + r1**2 - r2**2) ** 2 - (2 * d * r1) ** 2
        sols = solve([tang(a, b, v["ab"]), tang(b, c, v["bc"]), tang(c, a, v["ca"])], [a, b, c], dict=True)
        found = {s[b] for s in sols
                 if _kind(s[a], s[b], v["ab"]) == _kind(s[b], s[c], v["bc"]) == _kind(s[c], s[a], v["ca"]) == "ext"}
        if len(found) != 1:
            raise ValueError("no unique radii")
        return found.pop()
    raise ValueError(f"not modelled for {f}")


def m1(v, p):
    """Mixes up the cases: uses the external rule for internal touching and the internal rule
    for external touching (and so the other case's number of common tangents)."""
    if p["find"] == "three":
        raise ValueError("no radii fit the swapped rule")
    return key(v, {**p, "touch": _other(p["touch"])})


def m2(v, p):
    """Thinks the point of contact is the midpoint of the line of centres, so a radius is half
    the distance between the centres."""
    if p["find"] == "radius" and p["touch"] == "ext":
        return v["d"] / 2
    if p["find"] == "three" and v["ab"] == v["bc"]:
        return v["ab"] / 2
    raise ValueError("not modelled here")


def m3(v, p):
    """Thinks the distance between the centres is just one radius (centre to the point of
    contact), so the other radius is left out."""
    f = p["find"]
    if f == "dist":
        return max(v["r1"], v["r2"])
    if f == "radius":
        return _solve_rule(lambda r, x: [x], v["r"], v["d"])
    if f == "three" and v["ab"] == v["bc"]:
        return v["ab"]
    raise ValueError("not modelled here")


def m4(v, p):
    """Forgets the common tangent at the point of contact."""
    if p["find"] != "tangents":
        raise ValueError("tangent counts only")
    return key(v, p) - 1


def m5(v, p):
    """Counts the common tangents as for two circles that don't meet: 4 for circles outside each
    other, 0 for one inside the other."""
    if p["find"] != "tangents":
        raise ValueError("tangent counts only")
    r1, r2 = v["r1"], v["r2"]
    d = r1 + r2 + 1 if p["touch"] == "ext" else abs(r1 - r2) / 2
    return Rational(_tangents(r1, r2, d))


def m6(v, p):
    """Uses diameters in place of radii: the centres 2r1 + 2r2 apart outside, 2r1 - 2r2 inside."""
    f, t = p["find"], p["touch"]
    rule = (lambda a, b: [2 * (a + b)]) if t == "ext" else (lambda a, b: [2 * (a - b), 2 * (b - a)])
    if f == "dist":
        return max(e for e in rule(v["r1"], v["r2"]))
    if f == "radius":
        return _solve_rule(rule, v["r"], v["d"])
    if f == "three":
        return key(v, p) / 2
    raise ValueError("not modelled here")


MODELS = {"key": key, "C03-M1": m1, "C03-M2": m2, "C03-M3": m3, "C03-M4": m4, "C03-M5": m5, "C03-M6": m6}
