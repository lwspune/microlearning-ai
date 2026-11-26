"""C08 Concentration of solutions. Mass % = solute / solution x 100; molarity = mol solute per litre of solution;
molality = mol solute per kg of solvent; mole fraction = mol of one part / total mol. Molarity changes with temperature
(solution volume changes), molality does not.
params["q"]:
  "mass_pct": inputs a (g solute), w (g water). "molarity": inputs m (g NaOH), V (mL solution).
  "molality": inputs c (mol/L NaCl), d (g/mL). "temperature": named. "mole_fraction": inputs a (g ethanol), w (g water).
M1 divides by the solvent; M2 gives the solute mass; M3 gives the solvent's share; M4 gives the moles; M5 multiplies
by the volume in litres; M6 uses the volume in mL; M7 divides by the solution's mass; M8 equates molality with
molarity; M9 multiplies by the density; M10 thinks the moles change; M11 thinks the solvent's mass changes; M12 thinks
the solute decomposes; M13 divides by the water's moles; M14 gives the mass fraction; M15 gives water's mole fraction."""
from chemistry import molar_mass, sig

from ._mix import mixed_models

NAOH, NACL, ETOH, W = (molar_mass(f) for f in ("NaOH", "NaCl", "C2H6O", "H2O"))


def _x(v):
    a, w = v["a"] / ETOH, v["w"] / W
    return a, w


TABLE = {
    "mass_pct": {"key": lambda v: sig(100 * v["a"] / (v["a"] + v["w"])), "C08-M1": lambda v: sig(100 * v["a"] / v["w"]),
                 "C08-M2": lambda v: sig(v["a"]), "C08-M3": lambda v: sig(100 * v["w"] / (v["a"] + v["w"]))},
    "molarity": {"key": lambda v: sig(v["m"] / NAOH / (v["V"] / 1000)), "C08-M4": lambda v: sig(v["m"] / NAOH),
                 "C08-M5": lambda v: sig(v["m"] / NAOH * v["V"] / 1000), "C08-M6": lambda v: sig(v["m"] / NAOH / v["V"])},
    "molality": {"key": lambda v: sig(v["c"] / ((1000 * v["d"] - v["c"] * NACL) / 1000)),
                 "C08-M7": lambda v: sig(v["c"] / v["d"]), "C08-M8": lambda v: sig(v["c"]),
                 "C08-M9": lambda v: sig(v["c"] * v["d"])},
    "temperature": {"key": "volume_changes", "C08-M10": "moles_change", "C08-M11": "solvent_mass_changes",
                    "C08-M12": "decomposes"},
    "mole_fraction": {"key": lambda v: sig(_x(v)[0] / sum(_x(v))), "C08-M13": lambda v: sig(_x(v)[0] / _x(v)[1]),
                      "C08-M14": lambda v: sig(v["a"] / (v["a"] + v["w"])), "C08-M15": lambda v: sig(_x(v)[1] / sum(_x(v)))},
}
MODELS = mixed_models("C08", TABLE, 15)
