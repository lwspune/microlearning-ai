"""C05 Gravitational potential and potential energy: answer models (the key, and one per misconception).

U = -GMm/r and V = -GM/r, with r from the Earth's centre and zero at infinity. params["ask"]:
  "dU_R":   the change in U, as a multiple of GMm/R, on raising a body from height a R to height b R above the
            surface (inputs a, b);
  "V":      the potential, in J/kg, at height k R above the surface (inputs G, M, R in km, k);
  "remove": the energy, in J, to take a body of mass m at rest on the surface to infinity (inputs G, M, R in m, m);
  "raise":  the gain in U, in J, on raising m from the surface to height k R (inputs m, g, R in km, k);
  "vmin":   where the Earth's potential is least (a named answer).
"""
from sympy import Symbol

from physics import sig

NAMED = {
    "vmin": {"key": "centre_min", "C05-M6": "surface_min", "C05-M2": "infinity_min", "C05-M7": "inside_constant"},
}


def _solve(v, p, *, h_as_r=False, no_sign=False, mgh=False, force=False, half=False, final_only=False):
    ask, n = p["ask"], p.get("sf", 3)
    s = -1 if no_sign else 1
    if ask == "dU_R":
        a, b = v["a"], v["b"]
        if mgh:
            return sig(b - a, n)
        ra, rb = (a, b) if h_as_r else (1 + a, 1 + b)
        return sig(s * (1 / ra - 1 / rb), n)
    if ask == "V":
        R = v["R"] * 1000
        r = v["k"] * R if h_as_r else (1 + v["k"]) * R
        return sig(-s * v["G"] * v["M"] / (r**2 if force else r), n)
    if ask == "remove":
        R = v["R"]
        E = v["G"] * v["M"] * v["m"] / (R**2 if force else R)
        return sig(s * (E / 2 if half else E), n)
    if ask == "raise":
        m, g, R, k = v["m"], v["g"], v["R"] * 1000, v["k"]
        if mgh:
            return sig(m * g * k * R, n)
        if final_only:
            return sig(m * g * R / (1 + k), n)  # GMm/(R + h) with GM = gR^2
        return sig(s * m * g * R * (1 - 1 / (1 + k)), n)
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
    "C05-M1": _m("C05-M1", ("dU_R", "V"), h_as_r=True),  # measures r from the surface, not the centre
    "C05-M2": _m("C05-M2", ("dU_R", "V", "remove", "raise"), no_sign=True),  # gets the sign of U or V wrong
    "C05-M3": _m("C05-M3", ("dU_R", "raise"), mgh=True),  # uses mgh for a height comparable with R
    "C05-M4": _m("C05-M4", ("V", "remove"), force=True),  # divides by r^2, mixing up energy with force
    "C05-M5": _m("C05-M5", ("remove",), half=True),  # uses GMm/2R, the energy for a body already in orbit
    "C05-M6": _m("C05-M6"),  # thinks V is least at the surface, where g is greatest
    "C05-M7": _m("C05-M7"),  # thinks V is the same everywhere inside the Earth
    "C05-M8": _m("C05-M8", ("raise",), final_only=True),  # gives the size of the final U, forgetting the starting U
}
