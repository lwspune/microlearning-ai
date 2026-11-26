"""C07 Escape velocity, binding energy and weightlessness: answer models (the key, and one per misconception).

Escape: (1/2) m v_e^2 - GMm/R = 0, so v_e = sqrt(2GM/R) = sqrt(2gR). A satellite in a circular orbit of radius r has
KE = GMm/2r, PE = -GMm/r, total energy E = -GMm/2r and binding energy BE = -E = GMm/2r. params["ask"]:
  "vesc":  escape speed, in m/s, from a body with surface gravity g x kg (kg the factor by which g changes) and radius
           R (inputs g, kg, R, u = metres per unit of R);
  "ke":    a satellite's kinetic energy, in J, given its binding energy BE (input BE);
  "be":    a satellite's binding energy, in J, at height h (inputs G, M, m, R, h, in m);
  "about": which statement about escape speed is right (a named answer);
  "float": why an astronaut in orbit feels weightless (a named answer).
"""
from sympy import Symbol, sqrt

from physics import sig

NAMED = {
    "about": {"key": "root2_times_orbital", "C07-M1": "equals_orbital", "C07-M3": "heavier_needs_more",
              "C07-M14": "mass_only"},
    "float": {"key": "falling_together", "C07-M10": "no_gravity_there", "C07-M11": "walls_shield",
              "C07-M12": "mass_zero"},
}


def _solve(v, p, *, orbital=False, no_root=False, km=False, inv=False, rest=False, total=False, pe=False,
           ke_pe=False, use_h=False):
    ask, n = p["ask"], p.get("sf", 3)
    if ask == "vesc":
        kg = 1 / v["kg"] if inv else v["kg"]
        R = v["R"] * (1 if km else v["u"])
        x = (1 if orbital else 2) * v["g"] * kg * R
        return sig(x if no_root else sqrt(x), n)
    if ask == "ke":
        BE = v["BE"]
        if pe:
            return sig(-2 * BE, n)
        if total:
            return sig(-BE, n)
        return sig(2 * BE if ke_pe else BE, n)
    if ask == "be":
        r = v["h"] if use_h else v["R"] + v["h"]
        E = v["G"] * v["M"] * v["m"] / r
        if total:
            return sig(-E / 2, n)
        return sig(E if rest else E / 2, n)
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
    "C07-M1": _m("C07-M1", ("vesc",), orbital=True),  # takes the escape speed as the orbital speed sqrt(gR)
    "C07-M2": _m("C07-M2", ("vesc",), no_root=True),  # forgets the square root
    "C07-M3": _m("C07-M3"),  # thinks a heavier body needs a bigger escape speed
    "C07-M4": _m("C07-M4", ("be",), rest=True),  # uses GMm/r, the binding energy of a body at rest, for a satellite
    "C07-M5": _m("C07-M5", ("vesc",), km=True),  # leaves the radius in km
    "C07-M6": _m("C07-M6", ("ke",), ke_pe=True),  # takes the kinetic energy as the size of the potential energy
    "C07-M7": _m("C07-M7", ("ke", "be"), total=True),  # gives the satellite's total energy, which is negative
    "C07-M8": _m("C07-M8", ("ke",), pe=True),  # gives the potential energy instead of the kinetic energy
    "C07-M9": _m("C07-M9", ("be",), use_h=True),  # uses the height for the orbit radius
    "C07-M10": _m("C07-M10"),  # thinks there is no gravity at the satellite's height
    "C07-M11": _m("C07-M11"),  # thinks the satellite's walls shield the astronaut from gravity
    "C07-M12": _m("C07-M12"),  # thinks the astronaut's mass becomes zero in orbit
    "C07-M13": _m("C07-M13", ("vesc",), inv=True),  # turns the change in g upside down
    "C07-M14": _m("C07-M14"),  # thinks escape speed depends on the planet's mass only, not its radius
}
