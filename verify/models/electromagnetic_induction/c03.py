"""C03 Emf in a stationary coil: answer models (the key, and one per misconception).

params["ask"] picks the quantity:
  "emf":    the average emf in a coil of N turns at rest round the middle of a long solenoid whose current changes from
            I1 to I2 (A) in dt (s), in V. The solenoid has n turns/m (or n_cm turns/cm). The coil's area is A_cm2 (cm^2,
            wound tightly on the solenoid), or it has radius rc_cm and the solenoid radius rs_cm (cm);
  "E":      the induced electric field, in V/m, at r_cm from the axis of a circular region of radius s_cm in which a
            uniform field changes at dBdt (T/s);
  "steady": a coil at rest in a steady uniform field (a named answer).

The key works from the definitions: inside a long solenoid B = mu0 n I and outside it B = 0, so the flux through each
turn is B times the cross-section where the field is (the smaller of the coil and the solenoid); e = N |delta phi| / dt.
The induced field follows from E (2 pi r) = |d phi / dt| over a circle of radius r, the flux being B times the area of
the field region inside that circle.
"""
from sympy import Rational, Symbol, pi

from physics import BOOK, sig

CM = Rational(1, 100)

NAMED = {
    "steady": {"key": "neither", "C03-M8": "both", "C03-M9": "emf_only", "C03-M10": "current_only"},
}


def _emf(v, n_digits, *, once=False, sol_area=False, coil_area=False, per_cm=False, no_n=False, cm2=False):
    n = v["n"] if "n" in v else v["n_cm"] * (1 if per_cm else 100)
    dI = abs(v["I1"]) if once else abs(v["I2"] - v["I1"])
    if "A_cm2" in v:
        A = v["A_cm2"] * (CM if cm2 else CM**2)
    else:
        rc, rs = v["rc_cm"] * CM, v["rs_cm"] * CM
        r = rs if sol_area else (rc if coil_area else min(rc, rs))
        A = pi * r**2
    N = 1 if no_n else v["N"]
    return sig(BOOK["mu0"] * n * dI * A * N / v["dt"], n_digits)


def _field(v, n_digits, *, emf=False, region_in=False, circle_out=False, zero_out=False, uniform=False):
    s, r, k = v["s_cm"] * CM, v["r_cm"] * CM, v["dBdt"]
    inside = r <= s
    if emf:
        return sig(pi * min(r, s) ** 2 * k, n_digits)  # gives the emf round the circle, not the field
    if inside:
        if region_in:
            return sig(s**2 * k / (2 * r), n_digits)  # the whole region's flux for a circle inside it
        if uniform:
            return sig(s * k / 2, n_digits)  # the edge value everywhere inside
        return sig(r * k / 2, n_digits)
    if zero_out:
        return sig(0, n_digits)
    if circle_out:
        return sig(r * k / 2, n_digits)  # B over the whole circle, as if the field filled it
    return sig(s**2 * k / (2 * r), n_digits)


def key(v, p):
    ask = p["ask"]
    if ask in NAMED:
        return Symbol(NAMED[ask]["key"])
    n = p.get("sf", 3)
    return _emf(v, n) if ask == "emf" else _field(v, n)


def _m(mid, ask=None, **kw):
    def model(v, p):
        if p["ask"] in NAMED:
            if mid not in NAMED[p["ask"]]:
                raise ValueError("does not apply to this item")
            return Symbol(NAMED[p["ask"]][mid])
        if p["ask"] != ask:
            raise ValueError("does not apply to this item")
        n = p.get("sf", 3)
        return _emf(v, n, **kw) if ask == "emf" else _field(v, n, **kw)
    return model


MODELS = {
    "key": key,
    "C03-M1": _m("C03-M1", "emf", once=True),  # reversing the current: takes the change as I, not 2I
    "C03-M2": _m("C03-M2", "emf", sol_area=True),  # the solenoid's cross-section for a smaller coil inside it
    "C03-M3": _m("C03-M3", "emf", coil_area=True),  # the coil's own area for a coil round a thinner solenoid
    "C03-M4": _m("C03-M4", "emf", per_cm=True),  # turns per cm used as turns per metre
    "C03-M5": _m("C03-M5", "emf", no_n=True),  # the flux through one turn, N forgotten
    "C03-M6": _m("C03-M6", "emf", cm2=True),  # cm^2 to m^2 by dividing by 100
    "C03-M7": _m("C03-M7", "E", emf=True),  # gives the emf round the circle for the field
    "C03-M8": _m("C03-M8"),  # being in a field is enough: emf and current
    "C03-M9": _m("C03-M9"),  # an emf, but no current without a cell
    "C03-M10": _m("C03-M10"),  # the field pushes the coil's free electrons round: a current
    "C03-M11": _m("C03-M11", "E", region_in=True),  # the whole region's flux for a circle inside it
    "C03-M12": _m("C03-M12", "E", circle_out=True),  # B times the whole circle for a circle outside the region
    "C03-M13": _m("C03-M13", "E", zero_out=True),  # no induced field outside the region where B changes
    "C03-M14": _m("C03-M14", "E", uniform=True),  # the same field everywhere inside the region
}
