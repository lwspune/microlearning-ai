"""C01 Magnetic force on a moving charge: answer models (the key, and one per misconception).

params["ask"] picks the question:
  "dir":  direction of the force. Inputs vx, vy, vz (direction of v), Bx, By, Bz (direction of B), q (+1 or -1,
          the sign of the charge). The answer is a named direction: "px" (+x), "nx" (-x), "py", "ny", "pz", "nz".
  "F":    size of the force, in N. Inputs q (C), v (m/s), B_mT (field in mT), th (angle between v and B, degrees).
  "work", "elec", "unit": named answers (see NAMED).

The key works from the definition F = q (v x B): its size is q v B sin(theta) and it is at right angles to v,
so it does no work and leaves the speed unchanged.
"""
from sympy import Matrix, Symbol, cos, pi, sin

from physics import sig

NAMED = {
    # Board 2025: work done by a perpendicular field on a moving charge.
    "work": {"key": "zero_turns", "C01-M3": "positive", "C01-M5": "negative", "C01-M10": "zero_straight"},
    # Ex Ch.10 Q.1: what is true of the magnetic force but not of the electric force.
    "elec": {"key": "rest_zero", "C01-M1": "along_B", "C01-M7": "no_angle", "C01-M3": "along_v"},
    # Board 2022: Wb m^-2.
    "unit": {"key": "tesla", "C01-M9": "weber", "C01-M8": "henry", "C01-M1": "N_per_C"},
}

AXES = {(1, 0, 0): "px", (-1, 0, 0): "nx", (0, 1, 0): "py", (0, -1, 0): "ny", (0, 0, 1): "pz", (0, 0, -1): "nz"}


def _name(vec):
    t = tuple(int(c) for c in vec)
    if t not in AXES:
        raise ValueError(f"not along an axis: {t}")
    return Symbol(AXES[t])


def _dir(v, *, no_sign=False, along_B=False, along_v=False, against_v=False):
    vel = Matrix([v["vx"], v["vy"], v["vz"]])
    B = Matrix([v["Bx"], v["By"], v["Bz"]])
    q = v["q"]
    if along_B:
        return _name(q * B)  # pushed along the field, like q E
    if along_v:
        return _name(vel)
    if against_v:
        return _name(-vel)
    f = vel.cross(B)
    return _name(f if no_sign else q * f)


def _force(v, *, use_cos=False, no_sin=False, mT=False):
    B = v["B_mT"] if mT else v["B_mT"] / 1000
    th = v["th"] * pi / 180
    s = 1 if no_sin else (cos(th) if use_cos else sin(th))
    return sig(v["q"] * v["v"] * B * s)


def key(v, p):
    if p["ask"] in NAMED:
        return Symbol(NAMED[p["ask"]]["key"])
    if p["ask"] == "dir":
        return _dir(v)
    if p["ask"] == "F":
        return _force(v)
    raise ValueError(f"unknown ask {p['ask']}")


def _m(mid, dir_kw=None, force_kw=None):
    def model(v, p):
        ask = p["ask"]
        if ask in NAMED:
            if mid not in NAMED[ask]:
                raise ValueError("does not apply to this item")
            return Symbol(NAMED[ask][mid])
        if ask == "dir" and dir_kw is not None:
            return _dir(v, **dir_kw)
        if ask == "F" and force_kw is not None:
            return _force(v, **force_kw)
        raise ValueError("does not apply to this item")
    return model


MODELS = {
    "key": key,
    "C01-M1": _m("C01-M1", dir_kw={"along_B": True}),  # treats the magnetic force like q E: along B
    "C01-M2": _m("C01-M2", dir_kw={"no_sign": True}),  # ignores the sign of the charge
    "C01-M3": _m("C01-M3", dir_kw={"along_v": True}),  # takes the force along the motion, speeding the charge up
    "C01-M4": _m("C01-M4", force_kw={"use_cos": True}),  # cos(theta) for sin(theta)
    "C01-M5": _m("C01-M5", dir_kw={"against_v": True}),  # takes the force to oppose the motion, like a drag
    "C01-M6": _m("C01-M6", force_kw={"mT": True}),  # uses the field in mT as if in T
    "C01-M7": _m("C01-M7", force_kw={"no_sin": True}),  # drops sin(theta): qvB at any angle
    "C01-M8": _m("C01-M8"),  # takes Wb m^-2 for the henry
    "C01-M9": _m("C01-M9"),  # takes Wb m^-2 for the weber, the unit of flux
    "C01-M10": _m("C01-M10"),  # takes a force that does no work to leave the motion unchanged
}
