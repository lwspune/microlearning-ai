"""C02 Isotopes, isobars and isotones. Isotopes share Z, isobars share A, isotones share the number of neutrons,
isoelectronic species share the number of electrons. Average atomic mass weights each isotope by its abundance.
params["q"]:
  "isobars": named. "ar_k": named. "isotones": named. "isoelectronic": named.
  "chlorine": inputs a1, m1, a2, m2 (abundance parts and masses).
M1 swaps isobars and isotopes; M2 confuses isobars with isotones; M3 with isoelectronic species; M4 picks isotopes; M5
picks isobars; M6 picks an isoelectronic pair; M7 ignores the ion's charge; M8 thinks a negative charge means fewer
electrons; M9 thinks elements of one group are isoelectronic; M10 averages without weights; M11 swaps the abundances;
M12 forgets to divide by the total."""
from chemistry import sig

from ._mix import mixed_models

TABLE = {
    "isobars": {"key": "same_a", "C02-M1": "same_z", "C02-M2": "same_neutrons", "C02-M3": "same_electrons"},
    "ar_k": {"key": "isobars", "C02-M1": "isotopes", "C02-M2": "isotones", "C02-M3": "isoelectronic"},
    "isotones": {"key": "c14_o16", "C02-M4": "c12_c14", "C02-M5": "c14_n14", "C02-M6": "na_ion_ne"},
    "isoelectronic": {"key": "o2_minus", "C02-M7": "o_atom", "C02-M8": "o2_plus", "C02-M9": "s2_minus"},
    "chlorine": {"key": lambda v: sig((v["a1"] * v["m1"] + v["a2"] * v["m2"]) / (v["a1"] + v["a2"])),
                 "C02-M10": lambda v: sig((v["m1"] + v["m2"]) / 2),
                 "C02-M11": lambda v: sig((v["a2"] * v["m1"] + v["a1"] * v["m2"]) / (v["a1"] + v["a2"])),
                 "C02-M12": lambda v: sig(v["a1"] * v["m1"] + v["a2"] * v["m2"])},
}
MODELS = mixed_models("C02", TABLE, 12)
