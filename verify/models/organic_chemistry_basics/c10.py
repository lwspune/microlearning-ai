"""C10 Estimating the elements. %C = 12/44 x m(CO2)/m x 100; %H = 2/18 x m(H2O)/m x 100; Kjeldahl: NH3 neutralises
the acid, mol NH3 = 2 x mol H2SO4, %N = 14 x mol NH3 / m x 100; Carius: %Br = 80/188 x m(AgBr)/m x 100. Kjeldahl
fails for nitro, azo and ring nitrogen (pyridine): Dumas' method is used.
params["q"]:
  "carbon": inputs m, co2 (g). "hydrogen": inputs m, h2o (g). "kjeldahl": inputs m (g), V (mL), M (mol/L H2SO4).
  "carius": inputs m, agbr (g). "pyridine": named.
M1 uses water's 12/18; M2 forgets x 100; M3 forgets 12/44; M4 uses 1/18; M5 uses 2/44; M6 forgets x 100;
M7 takes one NH3 per H2SO4; M8 uses the mass of NH3; M9 forgets x 100; M10 uses the mass of AgBr; M11 takes silver's
share; M12 uses 80/108; M13 picks Kjeldahl's method; M14 picks Carius; M15 picks Lassaigne's test."""
from chemistry import molar_mass, sig

from ._mix import mixed_models

CO2, H2O, AGBR, NH3 = (molar_mass(f) for f in ("CO2", "H2O", "AgBr", "NH3"))


def _nh3(v):
    return 2 * v["M"] * v["V"] / 1000


TABLE = {
    "carbon": {"key": lambda v: sig(12 / CO2 * v["co2"] / v["m"] * 100), "C10-M1": lambda v: sig(12 / H2O * v["co2"] / v["m"] * 100),
               "C10-M2": lambda v: sig(12 / CO2 * v["co2"] / v["m"]), "C10-M3": lambda v: sig(v["co2"] / v["m"] * 100)},
    "hydrogen": {"key": lambda v: sig(2 / H2O * v["h2o"] / v["m"] * 100), "C10-M4": lambda v: sig(1 / H2O * v["h2o"] / v["m"] * 100),
                 "C10-M5": lambda v: sig(2 / CO2 * v["h2o"] / v["m"] * 100), "C10-M6": lambda v: sig(2 / H2O * v["h2o"] / v["m"])},
    "kjeldahl": {"key": lambda v: sig(14 * _nh3(v) / v["m"] * 100), "C10-M7": lambda v: sig(14 * _nh3(v) / 2 / v["m"] * 100),
                 "C10-M8": lambda v: sig(NH3 * _nh3(v) / v["m"] * 100), "C10-M9": lambda v: sig(14 * _nh3(v) / v["m"])},
    "carius": {"key": lambda v: sig(80 / AGBR * v["agbr"] / v["m"] * 100), "C10-M10": lambda v: sig(v["agbr"] / v["m"] * 100),
               "C10-M11": lambda v: sig(108 / AGBR * v["agbr"] / v["m"] * 100), "C10-M12": lambda v: sig(80 / 108 * v["agbr"] / v["m"] * 100)},
    "pyridine": {"key": "dumas", "C10-M13": "kjeldahl", "C10-M14": "carius", "C10-M15": "lassaigne"},
}
MODELS = mixed_models("C10", TABLE, 15)
