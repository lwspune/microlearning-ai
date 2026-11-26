"""C05 Electric flux and Gauss' law: answer models (the key, and one per misconception).

Flux phi = E A cos(theta), theta between E and the normal; the total flux out of a closed surface is q_in / eps0;
charge densities lambda = q/l, sigma = q/A, rho = q/V. eps0 = 8.85e-12 and k = 9e9 (the book's values).
params["ask"]:
  "ratio":  flux through the inner over the outer of two concentric spheres of radii r1 < r2 round a charge (inputs r1, r2);
  "cube":   total flux out of a cube of side a cm with q at its centre (inputs q, a);
  "inside": total flux out of a closed surface holding q_in, with q_out outside it (inputs qin, qout);
  "tilt":   flux of a uniform field E through a square of side s cm whose normal is at theta degrees to E (inputs E, s, theta);
  "sigma":  surface charge density of a sphere of radius R cm carrying q (inputs q, R);
  "lambda_unit": named answer.
"""
from sympy import Rational, Symbol, cos, pi, sin

from physics import BOOK, sig

NAMED = {
    "lambda_unit": {"key": "C_per_m", "C05-M11": "C_per_m2", "C05-M12": "C_per_m3", "C05-M13": "C_times_m"},
}

E0 = BOOK["eps0"]
K = BOOK["k_e"]
CM = Rational(1, 100)


def _solve(v, p, *, area=False, radius=False, field=False, sine=False, no_angle=False, no_cm=False, times=False,
           k_q=False, face=False, outside=False, disc=False, volume=False):
    ask = p["ask"]
    if ask == "ratio":
        r1, r2 = v["r1"], v["r2"]
        if area:
            return (r1 / r2) ** 2
        if radius:
            return r1 / r2
        if field:
            return (r2 / r1) ** 2
        return Rational(1)
    if ask in ("cube", "inside"):
        q = v["q"] if ask == "cube" else v["qin"] + (v["qout"] if outside else 0)
        if times:
            return sig(q * E0)
        if k_q:
            return sig(K * q)
        if face:
            a = v["a"] * CM
            return sig(K * q / (a / 2) ** 2 * 6 * a**2)
        return sig(q / E0)
    if ask == "tilt":
        s = v["s"] if no_cm else v["s"] * CM
        t = v["theta"] * pi / 180
        f = 1 if no_angle else (sin(t) if sine else cos(t))
        return sig(v["E"] * s**2 * f)
    if ask == "sigma":
        R = v["R"] if no_cm else v["R"] * CM
        if volume:
            return sig(v["q"] / (Rational(4, 3) * pi * R**3))
        return sig(v["q"] / ((pi if disc else 4 * pi) * R**2))
    raise ValueError("unknown ask")


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
    "C05-M1": _m("C05-M1", ("ratio",), area=True),  # flux in proportion to the area
    "C05-M2": _m("C05-M2", ("ratio",), radius=True),  # flux in proportion to the radius
    "C05-M3": _m("C05-M3", ("ratio",), field=True),  # flux follows the field strength
    "C05-M4": _m("C05-M4", ("tilt",), sine=True),  # takes the angle from the surface, not its normal
    "C05-M5": _m("C05-M5", ("tilt",), no_angle=True),  # ignores the angle
    "C05-M6": _m("C05-M6", ("tilt", "sigma"), no_cm=True),  # leaves cm unconverted
    "C05-M7": _m("C05-M7", ("cube", "inside"), times=True),  # q times eps0
    "C05-M8": _m("C05-M8", ("cube", "inside"), k_q=True),  # q/(4 pi eps0)
    "C05-M9": _m("C05-M9", ("cube",), face=True),  # field at a face times the whole area
    "C05-M10": _m("C05-M10", ("inside",), outside=True),  # counts the charge outside
    "C05-M11": _m("C05-M11"),  # lambda in C/m^2
    "C05-M12": _m("C05-M12"),  # lambda in C/m^3
    "C05-M13": _m("C05-M13"),  # lambda in C m
    "C05-M14": _m("C05-M14", ("sigma",), disc=True),  # pi R^2 for the sphere's area
    "C05-M15": _m("C05-M15", ("sigma",), volume=True),  # divides by the volume
}
