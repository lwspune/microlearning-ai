"""C04 Light, quanta and line spectra. c = nu x lambda; wavenumber = 1/lambda; E = h nu = hc/lambda (h = 6.626e-34 J s,
c = 3e8 m/s). Shorter wavelength means higher frequency and energy.
params["q"]:
  "frequency": inputs l (nm). "energy_compare": named. "photon": inputs l (nm). "wavenumber": inputs l (nm), per metre.
  "planck": named.
M1 divides lambda by c; M2 forgets to convert nm; M3 multiplies c by lambda; M4 thinks longer wavelength means more
energy; M5 thinks all light carries equal energy; M6 thinks energy depends only on brightness; M7 computes h lambda / c;
M8 forgets to convert nm; M9 multiplies h by c only; M10 works in cm; M11 gives the wavelength; M12 gives the frequency;
M13 confuses h with Avogadro's number; M14 with the atomic mass unit; M15 gets the power of ten wrong."""
from chemistry import BOOK, sig

from ._mix import mixed_models

H, C = BOOK["h"], BOOK["c"]
NM = 10 ** -9

TABLE = {
    "frequency": {"key": lambda v: sig(C / (v["l"] * NM)), "C04-M1": lambda v: sig(v["l"] * NM / C),
                  "C04-M2": lambda v: sig(C / v["l"]), "C04-M3": lambda v: sig(C * v["l"] * NM)},
    "energy_compare": {"key": "blue", "C04-M4": "red", "C04-M5": "equal", "C04-M6": "brightness"},
    "photon": {"key": lambda v: sig(H * C / (v["l"] * NM)), "C04-M7": lambda v: sig(H * v["l"] * NM / C),
               "C04-M8": lambda v: sig(H * C / v["l"]), "C04-M9": lambda v: sig(H * C)},
    "wavenumber": {"key": lambda v: sig(1 / (v["l"] * NM)), "C04-M10": lambda v: sig(1 / (v["l"] * 10 ** -7)),
                   "C04-M11": lambda v: sig(v["l"] * NM), "C04-M12": lambda v: sig(C / (v["l"] * NM))},
    "planck": {"key": "h_6_626e_34", "C04-M13": "h_6_023e_24", "C04-M14": "h_1_667e_28", "C04-M15": "h_6_626e_28"},
}
MODELS = mixed_models("C04", TABLE, 15)
