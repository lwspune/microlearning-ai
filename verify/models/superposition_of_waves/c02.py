"""C02 Phase difference in a wave: answer models (the key, and one per misconception).

A whole wavelength of path, or a whole period of time, is a phase of 2 pi. params["ask"] picks the quantity:
  "dt":   phase difference at one point between instants dt_ms apart (inputs n in Hz, dt_ms), in rad;
  "deg":  smallest distance, in cm, between two points `deg` degrees out of phase (inputs n, v);
  "path": phase difference, in rad, at a point d1 m from one in-phase source and d2 m from the other (inputs n, v, d1, d2);
  "same": minimum distance, in m, between two particles that always have the same speed (inputs n, v);
  "k":    phase difference, in rad, between two points dx_cm apart on y = A sin(w t - k x) in SI units (input k).
Phases that are multiples of pi are returned as sig(coefficient) * pi, so 18 pi / 11 prints as 1.64 pi.

The key works from the definitions: lambda = v / n, T = 1 / n, a path difference dx is a phase 2 pi dx / lambda,
a time dt at one point is a phase 2 pi dt / T; particles with equal speeds at every instant are in phase or in
antiphase, and the nearest such pair is lambda / 2 apart.
"""
from sympy import pi

from physics import sig


def _pi(c, n=3):
    """A phase c * pi, with its coefficient rounded."""
    return sig(c, n) * pi


def _solve(v, p, *, no_2pi=False, invert=False, no_si=False, deg_as_rad=False, lam_nv=False, one_path=False,
           in_phase=False, quarter=False):
    ask = p["ask"]
    if ask == "dt":
        dt = v["dt_ms"] if no_si else v["dt_ms"] / 1000
        T = 1 / v["n"]
        if no_2pi:
            return sig(dt / T)
        return _pi(2 * T / dt if invert else 2 * dt / T)
    if ask in ("deg", "path", "same"):
        lam = v["n"] / v["v"] if lam_nv else v["v"] / v["n"]
    if ask == "deg":
        d = v["deg"]
        if deg_as_rad:
            dx = lam * d / (2 * pi)  # puts the degrees into the radian formula
        elif no_2pi:
            dx = lam * d * pi / 180  # dx = lambda * phase, the 2 pi dropped
        else:
            dx = lam * d / 360
        return sig(dx * 100)
    if ask == "path":
        dx = v["d1"] if one_path else v["d1"] - v["d2"]
        if no_2pi:
            return sig(dx / lam)
        return _pi(2 * dx / lam)
    if ask == "same":
        return sig(lam if in_phase else (lam / 4 if quarter else lam / 2))
    if ask == "k":
        dx = v["dx_cm"] if no_si else v["dx_cm"] / 100
        k = v["k"]
        lam = 2 * pi / k
        if no_2pi:
            return sig(dx / lam)
        if invert:
            return _pi(2 * lam / dx)  # 2 pi lambda / dx, as a multiple of pi
        return _pi(k * dx / pi)
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
    "C02-M1": _m(("dt", "deg", "path", "k"), no_2pi=True),  # takes the fraction of a cycle as the phase in radians
    "C02-M2": _m(("dt", "k"), invert=True),  # inverts the ratio: 2 pi T / dt, 2 pi lambda / dx
    "C02-M3": _m(("deg",), deg_as_rad=True),  # puts a phase in degrees into the radian formula
    "C02-M4": _m(("deg", "path", "same"), lam_nv=True),  # takes lambda = n / v
    "C02-M5": _m(("path",), one_path=True),  # uses the distance from one source, not the path difference
    "C02-M6": _m(("dt", "k"), no_si=True),  # leaves ms or cm unconverted
    "C02-M7": _m(("same",), in_phase=True),  # thinks equal speeds need the particles in phase
    "C02-M8": _m(("same",), quarter=True),  # thinks particles a quarter wavelength apart move oppositely
}
