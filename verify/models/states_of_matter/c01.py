"""C01 Gases, pressure and temperature. 1 atm = 1.013 x 10^5 Pa; T(K) = t(C) + 273.15. Gases fill their container and
compress; they mix by diffusion. At the foot of a mountain air pressure is higher, so it pushes water up a straw.
params["q"]:
  "atm_pa": inputs p (atm). "c_to_k": inputs c. "mixing": named. "straw": named. "property": named.
M1 takes 1 atm as 760 Pa; M2 divides by the factor; M3 takes 1 atm as exactly 10^5 Pa; M4 subtracts 273.15; M5 keeps the
Celsius number; M6 adds the magnitudes; M7 says effusion; M8 says condensation; M9 says sublimation; M10 thinks low
pressure pulls water up; M11 sees no difference; M12 thinks water is lighter up high; M13 gives gases a fixed volume;
M14 gives them a fixed shape; M15 thinks they cannot be compressed."""
from sympy import Rational

from chemistry import sig

from ._mix import mixed_models

ATM = Rational(101300)
ZERO_C = Rational(27315, 100)

TABLE = {
    "atm_pa": {"key": lambda v: sig(v["p"] * ATM), "C01-M1": lambda v: sig(v["p"] * 760),
               "C01-M2": lambda v: sig(v["p"] / ATM), "C01-M3": lambda v: sig(v["p"] * 10 ** 5)},
    "c_to_k": {"key": lambda v: sig(v["c"] + ZERO_C, 4), "C01-M4": lambda v: sig(v["c"] - ZERO_C, 5),
               "C01-M5": lambda v: sig(v["c"], 4), "C01-M6": lambda v: sig(abs(v["c"]) + ZERO_C, 5)},
    "mixing": {"key": "diffusion", "C01-M7": "effusion", "C01-M8": "condensation", "C01-M9": "sublimation"},
    "straw": {"key": "base_higher_pressure", "C01-M10": "top_low_pressure", "C01-M11": "no_difference", "C01-M12": "top_lighter"},
    "property": {"key": "fill_compress", "C01-M13": "fixed_volume", "C01-M14": "fixed_shape", "C01-M15": "incompressible"},
}
MODELS = mixed_models("C01", TABLE, 15)
