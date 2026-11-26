"""C03 Refraction: answer models (the key, and one per misconception).

Snell's law n1 sin i = n2 sin r; seen along the normal, n = real depth / apparent depth (n of the medium the object
is in, relative to the observer's medium); light in a medium travels at c / n.
params["ask"]:
  "snell":  angle of refraction in degrees, from medium n1 into n2 at incidence i degrees (inputs i, n1, n2);
  "height": apparent height, seen by a fish, of a bird h metres above water of index n (inputs h, n);
  "layers": apparent depth of a spot under a layer t1 of index n1 topped by a layer t2 of index n2 (inputs t1, n1, t2, n2);
  "time":   time in ns for light to reach the bottom of water of depth d (m), index n, incident with sine s (inputs s, n, d).
"""
from sympy import asin, pi, sin, cos, sqrt

from physics import BOOK, sig


def _deg(x):
    return x * 180 / pi


def _solve(v, p, *, inv=False, lin=False, surf=False, air=False, shallower=False, none=False, shift=False,
           one_n=False, mult=False, depth=False, vac=False, by_sin=False):
    ask, n = p["ask"], p.get("sf", 3)
    if ask == "snell":
        i = v["i"] * pi / 180
        n1 = 1 if air else v["n1"]
        if lin:
            return sig(v["i"] * n1 / v["n2"], n)
        if surf:
            return sig(_deg(asin(n1 * cos(i) / v["n2"])), n)
        s = v["n2"] * sin(i) / n1 if inv else n1 * sin(i) / v["n2"]
        return sig(_deg(asin(s)), n)
    if ask == "height":
        h, m = v["h"], v["n"]
        if none:
            return sig(h, n)
        if shallower:
            return sig(h / m, n)
        if shift:
            return sig(h * (m - 1), n)
        return sig(h * m, n)
    if ask == "layers":
        real = v["t1"] + v["t2"]
        app = v["t1"] / v["n1"] + v["t2"] / v["n2"]
        if one_n:
            return sig(real / v["n2"], n)
        if mult:
            return sig(v["t1"] * v["n1"] + v["t2"] * v["n2"], n)
        if shift:
            return sig(real - app, n)
        return sig(app, n)
    if ask == "time":
        s, m, d = v["s"], v["n"], v["d"]
        sr = s / m
        cr = sqrt(1 - sr**2)
        path = d if depth else (d / sr if by_sin else d / cr)
        speed = BOOK["c"] if vac else BOOK["c"] / m
        return sig(path / speed * 10**9, n)
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
    "C03-M1": _m(("snell",), inv=True),  # Snell's law upside down: bends away from the normal into a denser medium
    "C03-M2": _m(("snell",), lin=True),  # r = i n1 / n2, dividing the angles instead of their sines
    "C03-M3": _m(("snell",), surf=True),  # measures the angle of incidence from the surface
    "C03-M4": _m(("layers",), mult=True),  # multiplies each thickness by n
    "C03-M5": _m(("height",), shallower=True),  # thinks things always look nearer, even looking up out of water
    "C03-M6": _m(("layers",), one_n=True),  # uses one refractive index for both layers
    "C03-M7": _m(("height", "layers"), shift=True),  # gives the shift instead of the apparent position
    "C03-M8": _m(("time",), depth=True),  # takes the depth as the path
    "C03-M9": _m(("time",), vac=True),  # takes the speed c in water
    "C03-M10": _m(("time",), by_sin=True),  # path = d / sin r
    "C03-M11": _m(("height",), none=True),  # thinks there is no shift when looking straight along the normal
    "C03-M12": _m(("snell",), air=True),  # treats the first medium as air
}
