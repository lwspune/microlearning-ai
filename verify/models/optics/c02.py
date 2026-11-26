"""C02 Reflection and the mirror equation: answer models (the key, and one per misconception).

Cartesian sign convention (the book's): distances from the pole, positive along the incident light (to the right),
so a real object has u < 0, a concave mirror f = -R/2, a convex mirror f = +R/2; 1/v + 1/u = 1/f, m = -v/u.
Inputs give magnitudes (R, d = object distance, h = object height); params["mirror"] is "concave" or "convex".
params["ask"]:
  "size":   image size (magnitude) of an object of height h (inputs R, d, h);
  "v":      signed image distance (inputs R, d);
  "length": length of the image of a pencil lying along the axis, near end at d, length L (inputs R, d, L);
  "shave":  object distances giving an image k times the object for shaving (inputs R, k), named cm10, cm10_30, ...;
  "images": number of images between plane mirrors inclined at theta degrees, object on/off the bisector.
"""
from sympy import Integer, Symbol, ceiling, floor

from physics import sig


def _f(v, p, f_eq_R=False, flip=False):
    R = v["R"] if f_eq_R else v["R"] / 2
    f = -R if p["mirror"] == "concave" else R
    return -f if flip else f


def _img(u, f):
    vv = 1 / (1 / f - 1 / u)
    return vv, -vv / u


def _solve(v, p, *, f_eq_R=False, flip=False, u_pos=False, m_inv=False, lateral=False,
           real=False, both=False, nm1=False, up=False, half_turn=False):
    ask, n = p["ask"], p.get("sf", 3)
    if ask == "images":
        th = v["theta"]
        q = (180 if half_turn else 360) / th
        if up:
            return Integer(ceiling(q)) if q != floor(q) else Integer(q) - 1
        if q != floor(q):
            return Integer(floor(q)) - (1 if nm1 else 0)
        q = Integer(q)
        if nm1 or q % 2 == 0 or p.get("pos") == "bisector":
            return q - 1
        return q
    f = _f(v, p, f_eq_R, flip)
    if ask == "shave":
        k = v["k"]
        outs = set()
        if not real or both:
            outs.add(-f * (1 - 1 / k))   # erect image, m = +k
        if real or both:
            outs.add(-f * (1 + 1 / k))   # inverted image, m = -k
        return Symbol("cm" + "_".join(str(sig(x, n)) for x in sorted(outs)))  # a named answer: cm10, cm10_30
    u = v["d"] if u_pos else -v["d"]
    vv, m = _img(u, f)
    if ask == "v":
        return sig(vv, n)
    if ask == "size":
        mm = -u / vv if m_inv else m
        return sig(abs(mm) * v["h"], n)
    if ask == "length":
        if lateral:
            return sig(abs(m) * v["L"], n)
        v2, _ = _img(u - v["L"], f)
        return sig(abs(vv - v2), n)
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
    "C02-M1": _m(("size", "v", "length", "shave"), f_eq_R=True),  # takes f = R
    "C02-M2": _m(("size", "v", "length"), flip=True),  # gives f the wrong sign (concave positive, convex negative)
    "C02-M3": _m(("v",), u_pos=True),  # takes the object distance u as positive
    "C02-M4": _m(("size",), m_inv=True),  # m = -u/v, upside down
    "C02-M5": _m(("length",), lateral=True),  # scales a length along the axis by the lateral magnification
    "C02-M6": _m(("shave",), real=True),  # takes the inverted (real) image for shaving
    "C02-M7": _m(("shave",), both=True),  # thinks both object positions serve for shaving
    "C02-M8": _m(("images",), nm1=True),  # always subtracts 1 from 360/theta
    "C02-M9": _m(("images",), up=True),  # rounds 360/theta up
    "C02-M10": _m(("images",), half_turn=True),  # uses 180/theta
}
