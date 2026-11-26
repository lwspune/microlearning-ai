"""C06 Nuclear reactions, fission and fusion. Mass and charge numbers balance: 27Al + 4He -> 30P + 1n. Fusion joins light
nuclei (2H + 3H -> 4He + n), fission splits heavy ones; fusion needs millions of kelvin to overcome repulsion. Energy from
lost mass: E = mc^2 (c = 3 x 10^8 m/s).
params["q"]:
  "missing": named. "fusion_define": named. "fusion_pick": named. "fusion_hard": named. "sun": inputs m (kg/s).
M1 forgets the neutron; M2 miscounts the charge; M3 adds the neutron; M4 says fission; M5 says chemical reaction; M6 says
chain reaction; M7 picks fission; M8 picks beta decay; M9 picks a chemical reaction; M10 thinks fusion releases little
energy; M11 thinks light nuclei are rare; M12 blames runaway chain reactions; M13 forgets to square c; M14 converts to
kJ but keeps J; M15 uses mc^2/2."""
from sympy import Integer

from chemistry import sig

from ._mix import mixed_models

C = Integer(3) * 10 ** 8

TABLE = {
    "missing": {"key": "p30_15", "C06-M1": "p31_15", "C06-M2": "si30_14", "C06-M3": "s32_16"},
    "fusion_define": {"key": "fusion", "C06-M4": "fission", "C06-M5": "chemical", "C06-M6": "chain"},
    "fusion_pick": {"key": "d_t", "C06-M7": "u235_split", "C06-M8": "c14_beta", "C06-M9": "carbon_burns"},
    "fusion_hard": {"key": "huge_temperature", "C06-M10": "little_energy", "C06-M11": "rare_nuclei", "C06-M12": "runaway_chain"},
    "sun": {"key": lambda v: sig(v["m"] * C ** 2), "C06-M13": lambda v: sig(v["m"] * C),
            "C06-M14": lambda v: sig(v["m"] * C ** 2 / 1000), "C06-M15": lambda v: sig(v["m"] * C ** 2 / 2)},
}
MODELS = mixed_models("C06", TABLE, 15)
