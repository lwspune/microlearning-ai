"""C02 Circular and helical motion in a field: answer models (the key, and one per misconception).

params["ask"] picks the question:
  "path":   a named answer (Ex Q.1 (iii): a proton enters a field into the paper along +x).
  "mass":   mass of a particle from its circle, in kg. Inputs qe (charge in units of e), K_MeV, B (T), r_cm.
  "T2":     period after the speed is raised from v1 to v2, in s. Inputs m, q, B, v1, v2.
  "pitch":  pitch of the helix, in m. Inputs m, q, B, v, th (angle between v and B, degrees).
  "rhelix": radius of the helix, in m. Same inputs.
Wherever a field B is an input, params["Bunit"] says how the stem gives it: "T", or "mT" (then the input is in mT).

The key works from the definitions: across the field, q v B = m v^2 / r, so r = m v / (q B) and the period
T = 2 pi r / v = 2 pi m / (q B), whatever the speed; the part of v along B is untouched, so the charge drifts
v cos(theta) T along B per turn (the pitch) while circling with radius m v sin(theta) / (q B).
"""
from sympy import Symbol, cos, pi, sin

from physics import BOOK, sig

E = BOOK["e"]

NAMED = {
    "path": {"key": "circle_py", "C02-M8": "circle_ny", "C02-M9": "straight", "C02-M10": "spiral_in"},
}


def _B(v, p, prefix):
    if p.get("Bunit", "T") == "mT":
        return v["B"] if prefix else v["B"] / 1000
    if prefix:
        raise ValueError("the field is already in T")
    return v["B"]


def _solve(v, p, *, old_r=False, no_2pi=False, q_e=False, no_half=False, total_v=False, swap=False, prefix=False):
    ask = p["ask"]
    if ask == "mass":
        q = (1 if q_e else v["qe"]) * E
        r = v["r_cm"] if prefix else v["r_cm"] / 100
        K = v["K_MeV"] * 10**6 * E
        return sig((q * v["B"] * r) ** 2 / ((1 if no_half else 2) * K))
    B = _B(v, p, prefix)
    m, q = v["m"], v["q"]
    turn = 1 if no_2pi else 2 * pi
    if ask == "T2":
        if old_r:
            return sig(turn * (m * v["v1"] / (q * B)) / v["v2"])  # the old radius at the new speed
        return sig(turn * m / (q * B))
    th = v["th"] * pi / 180
    along, across = v["v"] * cos(th), v["v"] * sin(th)
    if swap:
        along, across = across, along
    if total_v:
        along = across = v["v"]
    if ask == "pitch":
        return sig(along * turn * m / (q * B))
    if ask == "rhelix":
        return sig(m * across / (q * B))
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
    "C02-M1": _m("C02-M1", ("T2",), old_r=True),  # thinks a faster charge goes round the same circle in less time
    "C02-M2": _m("C02-M2", ("T2", "pitch"), no_2pi=True),  # uses m/(qB), the time per radian, as the period
    "C02-M3": _m("C02-M3", ("mass",), q_e=True),  # takes the alpha particle's charge as e
    "C02-M4": _m("C02-M4", ("mass",), no_half=True),  # drops the 1/2: K = (mv)^2 / m
    "C02-M5": _m("C02-M5", ("pitch", "rhelix"), total_v=True),  # uses the whole speed in the helix
    "C02-M6": _m("C02-M6", ("mass", "T2", "rhelix"), prefix=True),  # forgets to convert cm to m or mT to T
    "C02-M7": _m("C02-M7", ("pitch", "rhelix"), swap=True),  # swaps the parts of v along and across B
    "C02-M8": _m("C02-M8"),  # bends the wrong way
    "C02-M9": _m("C02-M9"),  # no work, so no deflection
    "C02-M10": _m("C02-M10"),  # thinks the field slows the charge, so it spirals in
}
