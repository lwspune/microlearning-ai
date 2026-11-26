"""C01 The nature of light: answer models (the key, and one per misconception).

Light is photons guided by the rules of EM waves; in vacuum it travels at c = 3e8 m/s, in a medium of absolute
refractive index n at v = c / n.
params["ask"]:
  "time":    time (in ps, 1 ps = 1e-12 s) for light to cross a glass thickness d_mm (in mm) of refractive index n (inputs d_mm, n);
  "consists", "explain", "denser", "rays": named answers.
"""
from sympy import Symbol

from physics import BOOK, sig

NAMED = {
    "consists": {"key": "photons_waves", "C01-M1": "waves", "C01-M2": "corpuscles", "C01-M3": "rays"},
    "explain": {"key": "wave_photon", "C01-M7": "photon_wave", "C01-M1": "wave_wave", "C01-M3": "ray_ray"},
    "denser": {"key": "kerosene", "C01-M8": "water_heavier", "C01-M4": "water_faster", "C01-M5": "neither"},
    "rays": {"key": "straight_cross", "C01-M9": "straight_always", "C01-M10": "rays_scatter", "C01-M11": "bends_round"},
}


def _solve(v, p, *, faster=False, vacuum=False, mm=False):
    d = v["d_mm"] if mm else v["d_mm"] / 1000
    c = BOOK["c"]
    speed = c if vacuum else (c * v["n"] if faster else c / v["n"])
    return sig(d / speed * 10**12, p.get("sf", 3))


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
    "C01-M1": _m("C01-M1"),  # light is only a wave
    "C01-M2": _m("C01-M2"),  # light is only a stream of particles (corpuscles)
    "C01-M3": _m("C01-M3"),  # ray optics explains everything
    "C01-M4": _m("C01-M4", ("time",), faster=True),  # light goes faster in a denser medium: v = c n
    "C01-M5": _m("C01-M5", ("time",), vacuum=True),  # light keeps the speed c in matter
    "C01-M6": _m("C01-M6", ("time",), mm=True),  # leaves the thickness in mm
    "C01-M7": _m("C01-M7"),  # swaps the wave and particle phenomena
    "C01-M8": _m("C01-M8"),  # optically denser means physically denser
    "C01-M9": _m("C01-M9"),  # light goes straight even across a boundary
    "C01-M10": _m("C01-M10"),  # crossing rays disturb each other
    "C01-M11": _m("C01-M11"),  # ray optics lets light bend round every obstacle
}
