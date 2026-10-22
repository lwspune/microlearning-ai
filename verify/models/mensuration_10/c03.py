"""C03 Combined solids: answer models (the key, and one per misconception).

Every item names its parts in params["parts"], listed from the bottom up (hemi | cyl | cone; a tent is
cyl then cone), and what it asks in params["find"] (area: the outer surface, or the canvas of a tent;
vol: the volume). Inputs: the common radius r; the cylinder's height hc and the cone's height hk, one
of which may be missing when the total height T is given; pi, the value of pi the stem gives (22/7,
157/50 for 3.14, or pi itself for an answer in terms of pi); and s2, the value of sqrt(2) the stem
gives, if any.

The key works from the definition: the whole solid is one body of revolution about its axis, with
profile (x(t), z(t)): radius x at height z. Its volume adds up the cross-sections, the integral of
pi x^2 dz, and its outer surface adds up thin bands along the profile, the integral of 2 pi x ds. The joined faces
are inside the body, so they never enter. A tent's floor is not canvas, and a toy's profile closes at
both ends. Exact pi and surds are used throughout and the stem's values substituted at the end. Each
misconception applies its own wrong rule with the part formulas.
"""
from sympy import Rational, Symbol, cos, diff, integrate, pi, simplify, sin, sqrt

_t = Symbol("t", nonnegative=True)

_FIND = ("area", "vol")


def _heights(v, p, total_for_missing=False):
    """The cylinder's and the cone's heights (None for a part the solid lacks). A missing one comes
    from the total height T: T less the other parts (a hemisphere stands r high).
    total_for_missing: take T itself (C03-M5)."""
    parts, r = p["parts"], v["r"]
    h = {"cyl": v.get("hc"), "cone": v.get("hk")}
    missing = [k for k in h if k in parts and h[k] is None]
    if not missing:
        if total_for_missing:
            raise ValueError("no height to find")
        return h["cyl"], h["cone"]
    (m,) = missing
    T = v["T"]
    if total_for_missing:
        h[m] = T
    else:
        h[m] = T - sum(h[k] for k in h if k in parts and k != m) - (r if "hemi" in parts else 0)
    return h["cyl"], h["cone"]


def _finish(val, v):
    """Substitute the stem's values of pi and sqrt(2)."""
    val = simplify(val)
    if "s2" in v:
        val = simplify(val.subs(sqrt(2), v["s2"]))
    return simplify(val.subs(pi, v["pi"]))


def key(v, p):
    parts, find, r = p["parts"], p["find"], v["r"]
    assert find in _FIND
    hc, hk = _heights(v, p)
    vol = area = 0
    z0 = 0
    for part in parts:  # each piece of the profile as (radius x(t), height z(t)), t from 0 to t1
        if part == "hemi":  # the bowl, rim at the top
            x, z, t1 = r * sin(_t), z0 + r * (1 - cos(_t)), pi / 2
        elif part == "cyl":
            x, z, t1 = r + 0 * _t, z0 + _t, hc
        elif part == "cone":  # shrinks linearly to the vertex
            x, z, t1 = r * (hk - _t) / hk, z0 + _t, hk
        else:
            raise ValueError(part)
        vol += integrate(pi * x**2 * diff(z, _t), (_t, 0, t1))
        ds = simplify(sqrt(diff(x, _t) ** 2 + diff(z, _t) ** 2))
        area += integrate(2 * pi * x * ds, (_t, 0, t1))
        z0 = z.subs(_t, t1)
    return _finish(vol if find == "vol" else area, v)


def _parts_sum(v, p, *, total_faces=False, swap_h_l=False, sphere=False, no_third=False, total_height=False):
    """The textbook part formulas, added up, with the chosen wrong rules switched on."""
    parts, find, r = p["parts"], p["find"], v["r"]
    hc, hk = _heights(v, p, total_for_missing=total_height)
    l = sqrt(r**2 + hk**2) if "cone" in parts else None
    out = 0
    for part in parts:
        if part == "hemi":
            if find == "vol":
                out += Rational(4, 3) * pi * r**3 if sphere else Rational(2, 3) * pi * r**3
            else:
                out += 4 * pi * r**2 if sphere else 2 * pi * r**2
                out += pi * r**2 if total_faces else 0
        elif part == "cyl":
            if find == "vol":
                out += pi * r**2 * hc
            else:
                out += 2 * pi * r * hc + (2 * pi * r**2 if total_faces else 0)
        elif part == "cone":
            if find == "vol":
                h = l if swap_h_l else hk
                out += pi * r**2 * h if no_third else Rational(1, 3) * pi * r**2 * h
            else:
                out += pi * r * (hk if swap_h_l else l) + (pi * r**2 if total_faces else 0)
    return _finish(out, v)


def m1(v, p):
    """Adds each part's total surface area, so the joined (hidden) flat faces are counted."""
    if p["find"] != "area":
        raise ValueError("a volume has no faces to count")
    return _parts_sum(v, p, total_faces=True)


def m2(v, p):
    """Swaps the cone's heights: pi r h for its curved surface, (1/3) pi r^2 l for its volume."""
    if "cone" not in p["parts"]:
        raise ValueError("no cone")
    return _parts_sum(v, p, swap_h_l=True)


def m3(v, p):
    """Treats the hemisphere as a whole sphere: 4 pi r^2 and (4/3) pi r^3."""
    if "hemi" not in p["parts"]:
        raise ValueError("no hemisphere")
    return _parts_sum(v, p, sphere=True)


def m4(v, p):
    """Drops the 1/3 from the cone's volume, as if it were a cylinder."""
    if p["find"] != "vol" or "cone" not in p["parts"]:
        raise ValueError("needs a cone's volume")
    return _parts_sum(v, p, no_third=True)


def m5(v, p):
    """Takes the total height as the height of the part whose height is not given."""
    return _parts_sum(v, p, total_height=True)


MODELS = {"key": key, "C03-M1": m1, "C03-M2": m2, "C03-M3": m3, "C03-M4": m4, "C03-M5": m5}
