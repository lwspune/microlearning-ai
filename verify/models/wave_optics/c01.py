"""C01 Wavefronts and Huygens' principle: answer models (the key, and one per misconception).

params["ask"] picks the question:
  "far":    the shape of sunlight's wavefront at a small window on Earth, and why (a named answer);
  "shapes": the wavefronts near a point source, near a line source, and far from a point source (named);
  "huygens": which statement describes Huygens' construction (named);
  "moon":   why the Moon is a secondary source of light (named);
  "radius": the radius, in m, of a spherical wavefront a time t later (inputs R, v, t_ns).

The key works from the definitions: a wavefront joins points in the same phase, rays are its normals; a point source
gives spheres, a line source cylinders, and far away a small patch of a huge sphere is a plane; every point of a
wavefront sends out forward wavelets at the wave's speed in the medium, and their forward envelope is the next
wavefront, so a spherical wavefront of radius R grows to R + vt.
"""
from sympy import Symbol

from physics import BOOK, sig

NAMED = {
    "far": {"key": "plane_patch", "C01-M3": "sphere_kept", "C01-M4": "plane_flat_disc", "C01-M1": "plane_rays_along"},
    "shapes": {"key": "sph_cyl_plane", "C01-M2": "sph_sph_plane", "C01-M3": "sph_cyl_sph", "C01-M4": "sph_plane_plane"},
    "huygens": {"key": "forward_v", "C01-M8": "reflectors", "C01-M5": "two_ways", "C01-M9": "speed_c"},
    "moon": {"key": "reflects", "C01-M6": "primary_bright", "C01-M7": "cold", "C01-M8": "wavelets"},
}


def _solve(v, p, *, vac=False, back=False, wavelet=False):
    if p["ask"] != "radius":
        raise ValueError(f"unknown ask {p['ask']}")
    n = p.get("sf", 2)
    speed = BOOK["c"] if vac else v["v"]
    grow = speed * v["t_ns"] * 10**-9
    if wavelet:
        return sig(grow, n)  # the wavelet's own radius taken as the wavefront's
    return sig(v["R"] - grow if back else v["R"] + grow, n)


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
    "C01-M1": _m("C01-M1"),  # takes a ray to run along the wavefront
    "C01-M2": _m("C01-M2"),  # treats every source as a point source (a line source gives spheres)
    "C01-M3": _m("C01-M3"),  # thinks a wavefront keeps its curvature however far it travels
    "C01-M4": _m("C01-M4"),  # thinks the wavefront copies the source's shape
    "C01-M5": _m("C01-M5", ("radius",), back=True),  # thinks the wavelets also build a wavefront going back
    "C01-M6": _m("C01-M6"),  # takes any bright-looking object as a primary source
    "C01-M7": _m("C01-M7"),  # thinks only hot bodies give out light of their own
    "C01-M8": _m("C01-M8"),  # confuses Huygens' secondary sources with secondary sources of light
    "C01-M9": _m("C01-M9", ("radius",), vac=True),  # gives the wavelets the speed c in every medium
    "C01-M10": _m("C01-M10", ("radius",), wavelet=True),  # takes one wavelet for the new wavefront
}
