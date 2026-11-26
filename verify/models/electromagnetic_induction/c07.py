"""C07 Eddy currents: answer models (the key, and one per misconception).

A changing flux through a solid conductor induces loops of current in its body (eddy currents); by Lenz's law
they oppose the change, and they heat the conductor. params["ask"]:
  "when":    when eddy currents are induced in a copper block at rest in a field (named);
  "pend":    why a copper-disc pendulum swinging between magnet poles stops quickly (named);
  "heat":    the heat produced in the disc, in J, when a pendulum of mass m (kg) released h_cm above its lowest
             point is brought to rest (inputs m, h_cm; air resistance ignored);
  "brake":   how an eddy-current brake's force changes as the train slows (named);
  "lam":     what laminating a transformer core does (named);
  "furnace": how an induction furnace heats the metal (named).
"""
from sympy import Rational, Symbol

from physics import BOOK, sig

NAMED = {
    "when": {"key": "changing", "C07-M2": "steady", "C07-M1": "never_block", "C07-M4": "iron_only"},
    "pend": {"key": "eddy_oppose", "C07-M4": "attract", "C07-M1": "air_only", "C07-M2": "clamp"},
    "brake": {"key": "fades", "C07-M2": "holds", "C07-M3": "grows", "C07-M1": "no_force"},
    "lam": {"key": "cuts_paths", "C07-M6": "blocks_flux", "C07-M7": "more_heat", "C07-M1": "weight_only"},
    "furnace": {"key": "eddy_fast", "C07-M3": "eddy_slow", "C07-M1": "conduction", "C07-M2": "dc_same"},
}


def _solve(v, p, *, gone=False, cm_as_m=False, no_g=False):
    ask, n = p["ask"], p.get("sf", 3)
    if ask == "heat":
        if gone:
            return 0  # thinks the energy is destroyed or stored in the magnet, none of it heat
        h = v["h_cm"] * (1 if cm_as_m else Rational(1, 100))
        g = 1 if no_g else BOOK["g"]
        return sig(v["m"] * g * h, n)
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
    "C07-M1": _m("C07-M1"),  # thinks a current is induced only in a coil of wire, never in a solid block
    "C07-M2": _m("C07-M2"),  # thinks a steady field drives eddy currents in a conductor at rest
    "C07-M3": _m("C07-M3"),  # thinks a slower change induces more, not less
    "C07-M4": _m("C07-M4"),  # mixes up eddy-current forces with magnetic attraction
    "C07-M5": _m("C07-M5", ("heat",), gone=True),  # thinks the mechanical energy is lost, not turned into heat
    "C07-M6": _m("C07-M6"),  # thinks laminations block the flux
    "C07-M7": _m("C07-M7"),  # thinks thin sheets, having more resistance, heat more
    "C07-M8": _m("C07-M8", ("heat",), cm_as_m=True),  # uses the height in cm as metres
    "C07-M9": _m("C07-M9", ("heat",), no_g=True),  # forgets g
}
