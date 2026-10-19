"""C09 Two circles and their common tangents: answer models (the key, and one per misconception).

Every circle is given as x^2 + y^2 + Dx + Ey + F = 0, inputs D1, E1, F1 (and D2, E2, F2), so its
centre is (-D/2, -E/2) and its radius sqrt(D^2/4 + E^2/4 - F). Question types, by params["type"]:
  "count":    the number of common tangents of the two circles (an integer).
  "position": how the circles lie (a named Symbol, see NAMES).
  "param":    one coefficient of the second circle contains k; the circles touch (params["touch"]
              "ext" | "int"); find k.
  "centre":   a circle of radius r touches the first circle (params["touch"]) at (px, py); its centre,
              as x + I*y.
  "contact":  the point where the two (touching) circles meet, as x + I*y.
"""
from sympy import I, Symbol, expand, nsimplify, solve, sqrt, symbols

x, y = symbols("x y", real=True)

SEPARATE, TOUCH_EXT, CUT, TOUCH_INT, INSIDE = (
    Symbol("separate"), Symbol("touch_ext"), Symbol("cut"), Symbol("touch_int"), Symbol("inside"),
)
COUNTS = {SEPARATE: 4, TOUCH_EXT: 3, CUT: 2, TOUCH_INT: 1, INSIDE: 0}


def _need(p, *kinds):
    if p.get("type") not in kinds:
        raise ValueError(f"not a {' or '.join(kinds)} question")


def _coeffs(v, i):
    return v[f"D{i}"], v[f"E{i}"], v[f"F{i}"]


def _circle(v, i, rmode="ok"):
    """(h, k, r) of circle i. rmode: "ok"; "csign" r^2 = g^2 + f^2 + c; "nosqrt" r = g^2 + f^2 - c."""
    D, E, F = _coeffs(v, i)
    h, k = -D / 2, -E / 2
    r2 = {"ok": h**2 + k**2 - F, "csign": h**2 + k**2 + F, "nosqrt": h**2 + k**2 - F}[rmode]
    if r2.is_number and r2 <= 0:
        raise ValueError("no real radius")
    return h, k, (r2 if rmode == "nosqrt" else sqrt(r2))


def _dist(c1, c2, add=False):
    """Distance between centres; add=True adds the coordinates instead of subtracting them."""
    s = 1 if add else -1
    return sqrt((c1[0] + s * c2[0]) ** 2 + (c1[1] + s * c2[1]) ** 2)


def _classify(d, r1, r2, sum_only=False):
    """The taught comparison of d with r1 + r2 and |r1 - r2|."""
    s, t = r1 + r2, abs(r1 - r2)
    if d > s:
        return SEPARATE
    if d == s or (d - s).equals(0):
        return TOUCH_EXT
    if sum_only:
        return CUT
    if d == t or (d - t).equals(0):
        return TOUCH_INT
    return CUT if d > t else INSIDE


def _answer(case, p):
    return COUNTS[case] if p["type"] == "count" else case


def _taught(v, p, rmode="ok", add=False, sum_only=False, swap=False):
    h1, k1, r1 = _circle(v, 1, rmode)
    h2, k2, r2 = _circle(v, 2, rmode)
    case = _classify(_dist((h1, k1), (h2, k2), add), r1, r2, sum_only)
    if swap:
        if case not in (TOUCH_EXT, TOUCH_INT):
            raise ValueError("the circles do not touch")
        case = TOUCH_INT if case == TOUCH_EXT else TOUCH_EXT
    return _answer(case, p)


# ---------- the key, from the definitions ----------

def _eq(v, i):
    D, E, F = _coeffs(v, i)
    return x**2 + y**2 + D * x + E * y + F


def _meets(v):
    """The real points common to both circles (subtract to get a line, put it into the first)."""
    sols = solve([_eq(v, 1), _eq(v, 1) - _eq(v, 2)], [x, y], dict=True)
    pts = {(s[x], s[y]) for s in sols if s[x].is_real and s[y].is_real}
    return pts


def _power(v, i, pt):
    """> 0 when pt is outside circle i, < 0 inside."""
    return _eq(v, i).subs({x: pt[0], y: pt[1]})


def _position(v):
    n = len(_meets(v))
    c1 = (-v["D1"] / 2, -v["E1"] / 2)
    c2 = (-v["D2"] / 2, -v["E2"] / 2)
    apart = _power(v, 2, c1) > 0 and _power(v, 1, c2) > 0   # each centre outside the other circle
    if n == 2:
        return CUT
    if n == 1:
        return TOUCH_EXT if apart else TOUCH_INT
    return SEPARATE if apart else INSIDE


def _tangent_count(v):
    """Lines x cos t + y sin t = q tangent to both: q = n.C1 +- r1 = n.C2 +- r2. Count unit normals n."""
    h1, k1, r1 = _circle(v, 1)
    h2, k2, r2 = _circle(v, 2)
    cs, sn = symbols("cs sn", real=True)
    total = 0
    for e in (r1 + r2, r1 - r2, -r1 + r2, -r1 - r2):
        sols = solve([(h2 - h1) * cs + (k2 - k1) * sn - e, cs**2 + sn**2 - 1], [cs, sn], dict=True)
        total += len({(s[cs], s[sn]) for s in sols})
    return total // 2   # each line appears once with n and once with -n


def _k_symbol(v):
    ks = set().union(*(e.free_symbols for e in v.values())) - {x, y}
    assert len(ks) == 1, ks
    return ks.pop()


def _real_roots(eq, k):
    out = []
    for s in solve(eq, k):
        s = nsimplify(s)
        if s.is_real:
            out.append(s)
    return out


def _param_key(v, p):
    """k so that the circles meet in exactly one point (discriminant 0), of the asked kind."""
    k = _k_symbol(v)
    line = expand(_eq(v, 1) - _eq(v, 2))
    a, b = line.coeff(x), line.coeff(y)
    # Put the common chord's line into the first circle; one common point <=> a double root.
    if b != 0 and not b.has(k):
        q = expand(_eq(v, 1).subs(y, solve(line, y)[0]) * b**2)
        t = x
    else:
        q = expand(_eq(v, 1).subs(x, solve(line, x)[0]) * a**2)
        t = y
    disc = q.coeff(t, 1) ** 2 - 4 * q.coeff(t, 2) * q.coeff(t, 0)
    good = []
    for s in _real_roots(disc, k):
        w = {n: e.subs(k, s) for n, e in v.items()}
        try:
            _circle(w, 1), _circle(w, 2)
        except ValueError:
            continue
        if _position(w) == {"ext": TOUCH_EXT, "int": TOUCH_INT}[p["touch"]]:
            good.append(s)
    assert len(good) == 1, good
    return good[0]


def _param_taught(v, p, rmode="ok", add=False, swap=False):
    """Solves d = r1 + r2 (external) or d = |r1 - r2| (internal) for k, keeping the real roots that check."""
    k = _k_symbol(v)
    h1, k1, r1 = _circle(v, 1, rmode)
    h2, k2, r2 = _circle(v, 2, rmode)
    d = _dist((h1, k1), (h2, k2), add)
    touch = p["touch"]
    if swap:
        touch = "int" if touch == "ext" else "ext"
    good = []
    for rhs in ([r1 + r2] if touch == "ext" else [r1 - r2, r2 - r1]):
        for s in _real_roots(d**2 - rhs**2, k):
            ok = (d - rhs).subs(k, s)
            radii = (r1.subs(k, s), r2.subs(k, s))
            if not all(r.is_real and r > 0 for r in radii):
                continue
            if abs(ok.evalf()) < 1e-9 and s not in good:
                good.append(s)
    if len(good) != 1:
        raise ValueError(f"no single value: {good}")
    return good[0]


def _centre_key(v, p):
    """The new centre is on the line through C1 and P, r from P: towards C1 (internal) or away (external)."""
    h1, k1, r1 = _circle(v, 1)
    P = (v["px"], v["py"])
    assert expand(_eq(v, 1).subs({x: P[0], y: P[1]})) == 0, "P is not on the circle"
    ux, uy = (h1 - P[0]) / r1, (k1 - P[1]) / r1    # unit vector from P to C1
    s = 1 if p["touch"] == "int" else -1
    return (P[0] + s * v["r"] * ux) + I * (P[1] + s * v["r"] * uy)


def _section(A, B, m, n, external=False):
    """The point dividing AB in m : n (internally, or externally)."""
    if external:
        if m == n:
            raise ValueError("external division in 1 : 1")
        return ((m * B[0] - n * A[0]) / (m - n)) + I * ((m * B[1] - n * A[1]) / (m - n))
    return ((m * B[0] + n * A[0]) / (m + n)) + I * ((m * B[1] + n * A[1]) / (m + n))


def _centre_taught(v, p, rmode="ok", swap=False, reverse=False):
    """Internal: C2 divides C1P in (r1 - r2) : r2. External: P divides C1C2 in r1 : r2, so C2 divides C1P
    externally in (r1 + r2) : r2."""
    h1, k1, r1 = _circle(v, 1, rmode)
    r2 = v["r"]
    P = (v["px"], v["py"])
    touch = p["touch"]
    if swap:
        touch = "int" if touch == "ext" else "ext"
    m, n = (r1 - r2, r2) if touch == "int" else (r1 + r2, r2)
    if reverse:
        m, n = n, m
    return _section((h1, k1), P, m, n, external=(touch == "ext"))


def _contact_taught(v, rmode="ok", swap=False, reverse=False):
    """External touching: P divides C1C2 internally in r1 : r2; internal touching: externally."""
    h1, k1, r1 = _circle(v, 1, rmode)
    h2, k2, r2 = _circle(v, 2, rmode)
    case = _position(v)
    if case not in (TOUCH_EXT, TOUCH_INT):
        raise ValueError("the circles do not touch")
    external = case == TOUCH_INT
    if swap:
        external = not external
    m, n = (r2, r1) if reverse else (r1, r2)
    return _section((h1, k1), (h2, k2), m, n, external=external)


def key(v, p):
    t = p["type"]
    if t == "count":
        return _tangent_count(v)
    if t == "position":
        return _position(v)
    if t == "param":
        return _param_key(v, p)
    if t == "centre":
        return _centre_key(v, p)
    if t == "contact":
        pts = _meets(v)
        assert len(pts) == 1, pts
        (px, py), = pts
        return px + I * py
    raise ValueError(t)


def m1(v, p):
    """Compares d with r1 + r2 only: any d < r1 + r2 is read as 'cut at two points' (2 tangents)."""
    _need(p, "count", "position")
    return _taught(v, p, sum_only=True)


def m2(v, p):
    """Swaps internal and external touching: d = r1 + r2 for internal, d = |r1 - r2| for external."""
    t = p["type"]
    if t in ("count", "position"):
        return _taught(v, p, swap=True)
    if t == "param":
        return _param_taught(v, p, swap=True)
    if t == "centre":
        return _centre_taught(v, p, swap=True)
    return _contact_taught(v, swap=True)


def m3(v, p):
    """Takes r^2 = g^2 + f^2 + c (the sign of c not flipped)."""
    t = p["type"]
    if t in ("count", "position"):
        return _taught(v, p, rmode="csign")
    if t == "param":
        return _param_taught(v, p, rmode="csign")
    if t == "centre":
        return _centre_taught(v, p, rmode="csign")
    return _contact_taught(v, rmode="csign")


def m4(v, p):
    """Takes g^2 + f^2 - c itself as the radius (forgets the square root: x^2 + y^2 = 9 read as r = 9)."""
    t = p["type"]
    if t in ("count", "position"):
        return _taught(v, p, rmode="nosqrt")
    if t == "param":
        return _param_taught(v, p, rmode="nosqrt")
    if t == "centre":
        return _centre_taught(v, p, rmode="nosqrt")
    return _contact_taught(v, rmode="nosqrt")


def m5(v, p):
    """Section formula the wrong way round: m goes with the first point, so the ratio is reversed."""
    _need(p, "centre", "contact")
    if p["type"] == "centre":
        return _centre_taught(v, p, reverse=True)
    return _contact_taught(v, reverse=True)


def m6(v, p):
    """Distance between centres with the coordinates added instead of subtracted."""
    t = p["type"]
    if t in ("count", "position"):
        return _taught(v, p, add=True)
    if t == "param":
        return _param_taught(v, p, add=True)
    raise ValueError("no distance in this question")


MODELS = {"key": key, "C09-M1": m1, "C09-M2": m2, "C09-M3": m3, "C09-M4": m4, "C09-M5": m5, "C09-M6": m6}
