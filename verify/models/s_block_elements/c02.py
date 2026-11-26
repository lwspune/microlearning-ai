"""C02 Dihydrogen and hydrogen peroxide. Steam over red-hot coke gives water gas, CO + H2. Electrolytic oxidation of
50% H2SO4 gives peroxodisulphuric acid, hydrolysed to H2O2. 2H2O2 -> 2H2O + O2; an 'x volume' solution gives x L of
O2 (at STP) per litre, so its strength is x / 22.4 x 2 x 34 g per litre.
params["q"]:
  "water_gas": named. "electrolysis": named. "volume_pct": inputs v (volume strength). "ten_volume": named.
  "decompose": named.
M1 gives the shift-reaction products; M2 says methane; M3 thinks steam splits into its elements; M4 says SO2; M5 says
O2 only; M6 stops before hydrolysis; M7 ignores the 2 : 1 ratio; M8 gives grams per litre; M9 uses the mass of O2; M10
reads 10 volume as 10 % by mass; M11 as 10 mol per litre; M12 scales the volumes wrongly; M13 says hydrogen and oxygen;
M14 says water and hydrogen; M15 says ozone."""
from chemistry import BOOK, molar_mass, sig

from ._mix import mixed_models

VM, H2O2, O2 = BOOK["V_m"], molar_mass("H2O2"), molar_mass("O2")

TABLE = {
    "water_gas": {"key": "co_h2", "C02-M1": "co2_h2", "C02-M2": "methane", "C02-M3": "o2_h2"},
    "electrolysis": {"key": "h2o2", "C02-M4": "so2", "C02-M5": "o2_only", "C02-M6": "h2s2o8"},
    "volume_pct": {"key": lambda v: sig(v["v"] / VM * 2 * H2O2 / 10), "C02-M7": lambda v: sig(v["v"] / VM * H2O2 / 10),
                   "C02-M8": lambda v: sig(v["v"] / VM * 2 * H2O2), "C02-M9": lambda v: sig(v["v"] / VM * O2 / 10)},
    "ten_volume": {"key": "ten_litres_o2", "C02-M10": "ten_pct", "C02-M11": "ten_molar", "C02-M12": "ten_ml_one_litre"},
    "decompose": {"key": "water_oxygen", "C02-M13": "hydrogen_oxygen", "C02-M14": "water_hydrogen", "C02-M15": "ozone"},
}
MODELS = mixed_models("C02", TABLE, 15)
