"""C08 The photoelectric effect. h nu = h nu0 + KE, so nu0 = W0/h and KE = h(nu - nu0) = hc/lambda - W0
(h = 6.626e-34 J s, c = 3e8 m/s; work functions in units of 1e-19 J, frequencies of 1e14 Hz, wavelengths in nm).
Below nu0 no electrons come out however bright the light; above it, brighter light ejects more electrons, not faster.
params["q"]:
  "threshold": inputs W (1e-19 J). "kinetic": inputs n, n0 (1e14 Hz). "below": named. "intensity": named.
  "wavelength": inputs l (nm), W (1e-19 J).
M1 multiplies by h; M2 gives the threshold wavelength; M3 drops the power of ten; M4 forgets the work function;
M5 adds it; M6 gives the work function itself; M7 thinks brighter light frees electrons; M8 thinks it makes them faster;
M9 expects a time lag; M10 thinks the kinetic energy doubles; M11 thinks both double; M12 expects no change;
M13 forgets the work function; M14 adds it; M15 subtracts the wrong way round."""
from chemistry import BOOK, sig

from ._mix import mixed_models

H, C = BOOK["h"], BOOK["c"]
J19, HZ14, NM = 10 ** -19, 10 ** 14, 10 ** -9

TABLE = {
    "threshold": {"key": lambda v: sig(v["W"] * J19 / H), "C08-M1": lambda v: sig(v["W"] * J19 * H),
                  "C08-M2": lambda v: sig(H * C / (v["W"] * J19)), "C08-M3": lambda v: sig(v["W"] / H)},
    "kinetic": {"key": lambda v: sig(H * (v["n"] - v["n0"]) * HZ14), "C08-M4": lambda v: sig(H * v["n"] * HZ14),
                "C08-M5": lambda v: sig(H * (v["n"] + v["n0"]) * HZ14), "C08-M6": lambda v: sig(H * v["n0"] * HZ14)},
    "below": {"key": "no_electrons", "C08-M7": "more_electrons", "C08-M8": "faster_electrons", "C08-M9": "after_delay"},
    "intensity": {"key": "more_same_energy", "C08-M10": "energy_doubles", "C08-M11": "both_double", "C08-M12": "no_change"},
    "wavelength": {"key": lambda v: sig(H * C / (v["l"] * NM) - v["W"] * J19), "C08-M13": lambda v: sig(H * C / (v["l"] * NM)),
                   "C08-M14": lambda v: sig(H * C / (v["l"] * NM) + v["W"] * J19),
                   "C08-M15": lambda v: sig(v["W"] * J19 - H * C / (v["l"] * NM))},
}
MODELS = mixed_models("C08", TABLE, 15)
