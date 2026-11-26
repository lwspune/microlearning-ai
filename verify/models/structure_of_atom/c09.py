"""C09 de Broglie waves and uncertainty. lambda = h/(m v); dx dp >= h/(4 pi), so the least dv = h/(4 pi m dx).
The stems give h = 6.626e-34 J s and the electron's mass m = 9.11e-31 kg (speeds in 1e6 m/s, positions in 1e-10 m).
params["q"]:
  "electron": inputs v (1e6 m/s). "ball": named. "dv": inputs x (1e-10 m). "meaning": named. "speed": named.
M1 inverts the formula; M2 leaves out the speed; M3 multiplies by the speed; M4 thinks only tiny particles have waves;
M5 blames the speed; M6 blames the mass being small; M7 leaves out 4 pi; M8 gives the momentum; M9 uses 2 pi;
M10 blames the instruments; M11 thinks the electron is at rest; M12 thinks position is always exact; M13 thinks the
wavelength doubles; M14 squares the change; M15 thinks it doesn't depend on speed."""
from sympy import Float, pi

from chemistry import BOOK, sig

from ._mix import mixed_models

H = BOOK["h"]
ME = Float("9.11e-31")  # the electron's mass, as the stems give it

TABLE = {
    "electron": {"key": lambda v: sig(H / (ME * v["v"] * 10 ** 6)), "C09-M1": lambda v: sig(ME * v["v"] * 10 ** 6 / H),
                 "C09-M2": lambda v: sig(H / ME), "C09-M3": lambda v: sig(H * v["v"] * 10 ** 6 / ME)},
    "ball": {"key": "too_small", "C09-M4": "no_wave", "C09-M5": "too_slow", "C09-M6": "too_light"},
    "dv": {"key": lambda v: sig(H / (4 * pi * ME * v["x"] * 10 ** -10)), "C09-M7": lambda v: sig(H / (ME * v["x"] * 10 ** -10)),
           "C09-M8": lambda v: sig(H / (4 * pi * v["x"] * 10 ** -10)), "C09-M9": lambda v: sig(H / (2 * pi * ME * v["x"] * 10 ** -10))},
    "meaning": {"key": "not_both_exact", "C09-M10": "instrument_error", "C09-M11": "at_rest", "C09-M12": "position_exact"},
    "speed": {"key": "halved", "C09-M13": "doubled", "C09-M14": "quartered", "C09-M15": "unchanged"},
}
MODELS = mixed_models("C09", TABLE, 15)
