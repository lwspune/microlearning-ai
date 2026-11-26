"""C05 A rotating rod and the Faraday disc: answer models (the key, and one per misconception).

params["ask"] picks the question:
  "num": the emf between the ends of a rod turning about one end, or between the axle and the rim of a disc or a
         spoked wheel, in V. Inputs B (T); the length R (m) or R_cm (cm); the rate f (rev/s) or rpm (rev/min);
         n, the number of spokes, where the item has a wheel.
  "disc", "semi": named answers (see NAMED).

The key works from e = B l v element by element: a piece dr at distance r moves at v = omega r, so
e = integral of B omega r dr from 0 to R = B omega R^2 / 2, with omega = 2 pi f. Spokes of a wheel are in parallel,
so the emf between the axle and the rim is that of one spoke.
"""
from sympy import Integer, Symbol, pi

from physics import sig

NAMED = {
    # Ex Q.3: the emf between the rim and the axis of a Faraday disc.
    "disc": {"key": "half_BwR2", "C05-M1": "BwR2", "C05-M4": "BpiR2w", "C05-M8": "zero"},
    # Ex Q.10: the amplitude of the emf in a semicircular wire turned about its diameter at f rev/s.
    "semi": {"key": "pi2BR2f", "C05-M5": "two_pi2BR2f", "C05-M6": "piBR2f", "C05-M2": "piBR2f_half"},
}


def _solve(v, p, *, tip=False, f_as_w=False, cm_raw=False, rpm_raw=False, spokes_add=False, cancel=False):
    if p["ask"] != "num":
        raise ValueError(f"unknown ask {p['ask']}")
    if cancel:
        return Integer(0)
    if "R_cm" in v:
        R = v["R_cm"] if cm_raw else v["R_cm"] / 100
    else:
        R = v["R"]
    if "rpm" in v:
        f = v["rpm"] if rpm_raw else v["rpm"] / 60
    else:
        f = v["f"]
    w = f if f_as_w else 2 * pi * f
    e = v["B"] * w * R**2 * (1 if tip else Integer(1) / 2)
    if spokes_add:
        e = e * v["n"]
    return sig(e)


def key(v, p):
    if p["ask"] in NAMED:
        return Symbol(NAMED[p["ask"]]["key"])
    return _solve(v, p)


def _m(mid, **kw):
    def model(v, p):
        if p["ask"] in NAMED:
            if mid not in NAMED[p["ask"]]:
                raise ValueError("does not apply to this item")
            return Symbol(NAMED[p["ask"]][mid])
        if not kw:
            raise ValueError("does not apply to this item")
        return _solve(v, p, **kw)
    return model


MODELS = {
    "key": key,
    "C05-M1": _m("C05-M1", tip=True),  # gives every part of the rod the tip speed: B omega R^2
    "C05-M2": _m("C05-M2", f_as_w=True),  # uses f (rev/s) for omega
    "C05-M3": _m("C05-M3", cm_raw=True),  # leaves the radius in cm
    "C05-M4": _m("C05-M4"),  # uses B A omega with A = pi R^2 for a disc
    "C05-M5": _m("C05-M5"),  # uses the full circle's area for a semicircle
    "C05-M6": _m("C05-M6"),  # uses the rotating-rod formula for a loop turned about its diameter
    "C05-M7": _m("C05-M7", spokes_add=True),  # adds the emfs of the spokes of a wheel
    "C05-M8": _m("C05-M8", cancel=True),  # thinks the emfs of opposite radii cancel
    "C05-M9": _m("C05-M9", rpm_raw=True),  # uses rev/min as rev/s
}
