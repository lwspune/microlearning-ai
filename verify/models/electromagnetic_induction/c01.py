"""C01 Magnetic flux and Faraday's law: answer models (the key, and one per misconception).

params["ask"] picks the quantity:
  "link":   flux linkage N B A cos(theta), in Wb (inputs N, B, A in m^2, plane = angle between the field and the coil's
            plane, in radians; theta, the angle with the normal, is pi/2 - plane);
  "emf":    average emf N A |B2 - B1| / dt, in V (inputs N, B1, B2, dt, and A in m^2 or A_cm2 in cm^2);
  "rate":   emf at time t0 from phi = a t^2 + b t + c milliweber, in V (inputs a, b, c, t0);
  "charge": charge through a coil of total resistance R as its flux linkage falls from N B A to 0, in C
            (inputs N, A_cm2, B, R, dt);
  "law":    what Faraday's laws say (a named answer).

The key works from the definitions: phi = B A cos(theta) with theta between B and the normal, linkage N phi,
e = -d(N phi)/dt (its size N |d phi/dt|), and q = integral of I dt = N |delta phi| / R.
"""
from sympy import Rational, Symbol, cos, sin

from physics import sig

NAMED = {
    "law": {"key": "rate_of_change", "C01-M5": "flux_itself", "C01-M10": "coil_moves", "C01-M11": "lasts_after"},
}


def _area(v, cm=False):
    if "A" in v:
        return v["A"]
    return v["A_cm2"] * (Rational(1, 100) if cm else Rational(1, 10**4))


def _solve(v, p, *, no_n=False, plane=False, no_cos=False, cm=False, no_dt=False, final=False, avg=False,
           milli=False, per_dt=False):
    ask, n = p["ask"], p.get("sf", 3)
    N = 1 if no_n else v.get("N", 1)
    if ask == "link":
        ang = v["plane"]
        f = 1 if no_cos else (cos(ang) if plane else sin(ang))  # sin(plane) = cos(theta), theta from the normal
        return sig(N * v["B"] * v["A"] * f, n)
    if ask == "emf":
        dB = v["B2"] if final else abs(v["B2"] - v["B1"])
        dphi = N * _area(v, cm) * dB
        return sig(dphi if no_dt else dphi / v["dt"], n)
    if ask == "rate":
        a, b, c, t0 = v["a"], v["b"], v["c"], v["t0"]
        phi = lambda t: a * t**2 + b * t + c  # noqa: E731
        if no_dt:
            rate = phi(t0)  # takes the flux itself for the emf
        elif avg:
            rate = (phi(t0) - phi(0)) / t0  # the average rate since t = 0
        else:
            rate = 2 * a * t0 + b
        return sig(rate * (1 if milli else Rational(1, 1000)), n)
    if ask == "charge":
        q = N * _area(v, cm) * v["B"] / v["R"]
        return sig(q / v["dt"] if per_dt else q, n)
    raise ValueError(f"unknown ask {ask}")


def key(v, p):
    if p["ask"] in NAMED:
        return Symbol(NAMED[p["ask"]]["key"])
    return _solve(v, p)


def _m(mid, asks=(), **kw):
    def model(v, p):
        if p["ask"] in NAMED:
            if mid not in NAMED[p["ask"]]:
                raise ValueError("does not apply to this item")
            return Symbol(NAMED[p["ask"]][mid])
        if p["ask"] not in asks:
            raise ValueError("does not apply to this item")
        return _solve(v, p, **kw)
    return model


MODELS = {
    "key": key,
    "C01-M1": _m("C01-M1", ("link", "emf", "charge"), no_n=True),  # flux through one turn for the linkage
    "C01-M2": _m("C01-M2", ("link",), plane=True),  # takes theta as the angle between the field and the plane
    "C01-M3": _m("C01-M3", ("emf", "charge"), cm=True),  # cm^2 to m^2 by dividing by 100
    "C01-M4": _m("C01-M4", ("link",), no_cos=True),  # phi = B A at any angle
    "C01-M5": _m("C01-M5", ("emf", "rate"), no_dt=True),  # the flux (or its change), not its rate of change
    "C01-M6": _m("C01-M6", ("emf",), final=True),  # the final field, not the change of field
    "C01-M7": _m("C01-M7", ("rate",), avg=True),  # the average rate since t = 0 for the emf at an instant
    "C01-M8": _m("C01-M8", ("rate",), milli=True),  # reads milliweber as weber
    "C01-M9": _m("C01-M9", ("charge",), per_dt=True),  # divides the charge by the time as well
    "C01-M10": _m("C01-M10"),  # an emf needs the coil to move
    "C01-M11": _m("C01-M11"),  # the emf lasts after the change stops
}
