"""C01 Protons, neutrons and electrons. Z counts protons (and electrons in the neutral atom); A = protons + neutrons;
neutrons = A - Z; an ion of charge q has Z - q electrons. The electron carries -1.6 x 10^-19 C.
params["q"]:
  "neutrons": inputs A, Z. "symbol": named (A = 11, 6 neutrons). "mass_number": inputs e (electrons), n (neutrons).
  "ion_electrons": inputs Z, q (charge), A. "charge": named.
M1 gives the protons; M2 gives the mass number; M3 adds A and Z; M4 takes the neutrons as Z; M5 swaps A and Z in the
symbol; M6 adds A and the neutrons; M7 gives the neutrons; M8 subtracts; M9 adds the charge; M10 ignores the charge;
M11 subtracts the charge from the mass number; M12 drops the sign; M13 gives the electron's mass; M14 confuses the
electron with the neutron."""
from chemistry import sig

from ._mix import mixed_models

TABLE = {
    "neutrons": {"key": lambda v: sig(v["A"] - v["Z"]), "C01-M1": lambda v: sig(v["Z"]), "C01-M2": lambda v: sig(v["A"]),
                 "C01-M3": lambda v: sig(v["A"] + v["Z"])},
    "symbol": {"key": "x_11_5", "C01-M4": "x_11_6", "C01-M5": "x_5_11", "C01-M6": "x_17_6"},
    "mass_number": {"key": lambda v: sig(v["e"] + v["n"]), "C01-M1": lambda v: sig(v["e"]), "C01-M7": lambda v: sig(v["n"]),
                    "C01-M8": lambda v: sig(v["n"] - v["e"])},
    "ion_electrons": {"key": lambda v: sig(v["Z"] - v["q"]), "C01-M9": lambda v: sig(v["Z"] + v["q"]),
                      "C01-M10": lambda v: sig(v["Z"]), "C01-M11": lambda v: sig(v["A"] - v["q"])},
    "charge": {"key": "minus_1_6e_19", "C01-M12": "plus_1_6e_19", "C01-M13": "mass_9_1e_31", "C01-M14": "zero"},
}
MODELS = mixed_models("C01", TABLE, 14)
