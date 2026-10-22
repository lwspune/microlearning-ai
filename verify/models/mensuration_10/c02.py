"""C02 Melting and recasting: answer models (the key, and one per misconception).

Every item melts (or pours) one solid, the "old" one (inputs o_*), into new solids
(inputs n_*), or drops it into a cylinder of water (inputs c_*). Lengths are numbers in the
unit the stem prints; params["unit_<input>"] names a unit other than cm ("mm" or "m").
A radius is given as <side>_r, or a diameter as <side>_d.

params:
  old, new  the solids: sphere | cylinder | cone | tube (a hollow cylinder: o_R outer radius,
            o_t thickness, o_h length)
  ask       count  how many new solids (n_* gives one new solid whole)
            wire   the length of a wire (cylinder) of radius n_r or diameter n_d, in cm
            rise   how far the water rises in a cylinder of radius c_r holding water c_h0 high
            area   the base area of a cone of height n_h made from the old solid

The key finds each volume by integrating the areas of thin circular slices (the solid's
definition), not by quoting the volume formulas taught in C01.
"""
from sympy import Rational, Symbol, integrate, pi, sqrt

UNIT = {"cm": 1, "mm": Rational(1, 10), "m": 100}
_x = Symbol("x", real=True)


def _len(v, p, name, units=True):
    """An input length in cm (or as printed, when units are ignored)."""
    f = UNIT[p.get("unit_" + name, "cm")] if units else 1
    return v[name] * f


def _radius(v, p, side, halve=True, units=True):
    if side + "_r" in v:
        return _len(v, p, side + "_r", units)
    if side + "_d" in v:
        d = _len(v, p, side + "_d", units)
        return d / 2 if halve else d
    raise ValueError(f"no radius for {side}")


def _slices(area, lo, hi):
    """Volume as the integral of slice areas."""
    return integrate(area, (_x, lo, hi))


def _volume(shape, v, p, side, halve=True, units=True, nofrac=False, surface=False, ring=False):
    if shape == "tube":
        R, t, h = (_len(v, p, side + k, units) for k in ("_R", "_t", "_h"))
        r = R - t
        if surface:
            raise ValueError("no surface model for a tube")
        if ring:
            return pi * (R - r) ** 2 * h
        return _slices(pi * R**2 - pi * r**2, 0, h)
    r = _radius(v, p, side, halve, units)
    if shape == "sphere":
        if surface:
            return 4 * pi * r**2
        if nofrac:
            return pi * r**3
        return _slices(pi * (r**2 - _x**2), -r, r)
    h = _len(v, p, side + "_h", units)
    if shape == "cylinder":
        if surface:
            return 2 * pi * r * (r + h)
        return _slices(pi * r**2, 0, h)
    if shape == "cone":
        if surface:
            return pi * r * (r + sqrt(r**2 + h**2))
        if nofrac:
            return pi * r**2 * h
        return _slices(pi * (r * _x / h) ** 2, 0, h)
    raise ValueError(f"unknown solid {shape}")


def _solve(v, p, halve=True, units=True, nofrac=False, surface=False, ring=False, level=False):
    kw = dict(halve=halve, units=units, nofrac=nofrac, surface=surface, ring=ring)
    old = _volume(p["old"], v, p, "o", **kw)
    ask = p["ask"]
    if ask == "count":
        return old / _volume(p["new"], v, p, "n", **kw)
    if ask == "wire":
        r = _radius(v, p, "n", halve, units)
        if surface:  # the wire's curved surface 2*pi*r*L matched to the old surface
            return old / (2 * pi * r)
        return old / (pi * r**2)
    if ask == "rise":
        R = _radius(v, p, "c", halve, units)
        h = old / (pi * R**2)
        return h + _len(v, p, "c_h0", units) if level else h
    if ask == "area":
        if surface:
            raise ValueError("no surface model for a heap's base area")
        h = _len(v, p, "n_h", units)
        return old / h if nofrac else 3 * old / h
    raise ValueError(f"unknown ask {ask}")


def key(v, p):
    return _solve(v, p)


def m1(v, p):
    """Uses a given diameter as the radius."""
    if not any(k.endswith("_d") for k in v):
        raise ValueError("no diameter given")
    return _solve(v, p, halve=False)


def m2(v, p):
    """Ignores the units: uses mm or m numbers as if they were cm."""
    if not any(k.startswith("unit_") for k in p):
        raise ValueError("every length is in cm")
    return _solve(v, p, units=False)


def m3(v, p):
    """Drops the fraction of a volume formula: cone as pi r^2 h, sphere as pi r^3."""
    if not {"cone", "sphere"} & {p.get("old"), p.get("new")} and p["ask"] != "area":
        raise ValueError("no cone or sphere")
    return _solve(v, p, nofrac=True)


def m4(v, p):
    """Keeps the surface area instead of the volume."""
    return _solve(v, p, surface=True)


def m5(v, p):
    """Takes a tube's volume as pi (R - r)^2 h."""
    if p.get("old") != "tube":
        raise ValueError("no tube")
    return _solve(v, p, ring=True)


def m6(v, p):
    """Gives the new water level (old level + rise) for the rise."""
    if p["ask"] != "rise":
        raise ValueError("not a rise")
    return _solve(v, p, level=True)


MODELS = {"key": key, "C02-M1": m1, "C02-M2": m2, "C02-M3": m3, "C02-M4": m4, "C02-M5": m5, "C02-M6": m6}
