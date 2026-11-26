"""C07 Electrode potentials and redox. A higher standard reduction potential E0 means a stronger oxidising agent; a lower
(more negative) E0 a stronger reducing agent. A reaction goes when the oxidant's E0 is above the reductant's:
E0 = E0(oxidant couple) - E0(reductant couple).
params["q"]:
  "oxidant": named (Cl2 1.36, Br2 1.09). "reductant": named (Li -3.05, Mg -2.36). "fe_i": named.
  "e_cell": inputs ox, red (V). "displace": named.
M1 thinks a lower E0 means a stronger oxidant; M2 thinks they are equal; M3 thinks concentrations are needed; M4 thinks
a higher E0 means a stronger reductant; M5 credits atomic mass; M6 reverses the comparison; M7 calls Fe3+ a reductant;
M8 thinks heat is needed; M9 adds the potentials; M10 subtracts the wrong way; M11 doubles the iodine potential; M12
thinks a higher E0 metal is more reactive; M13 picks gold; M14 thinks none displaces copper."""
from chemistry import sig

from ._mix import mixed_models

TABLE = {
    "oxidant": {"key": "cl2", "C07-M1": "br2", "C07-M2": "equal", "C07-M3": "need_concentration"},
    "reductant": {"key": "lithium", "C07-M4": "magnesium", "C07-M2": "equal", "C07-M5": "heavier"},
    "fe_i": {"key": "yes_higher", "C07-M6": "no_lower", "C07-M7": "no_reductant", "C07-M8": "only_heated"},
    "e_cell": {"key": lambda v: sig(v["ox"] - v["red"]), "C07-M9": lambda v: sig(v["ox"] + v["red"]),
               "C07-M10": lambda v: sig(v["red"] - v["ox"]), "C07-M11": lambda v: sig(v["ox"] - 2 * v["red"])},
    "displace": {"key": "zn", "C07-M12": "ag", "C07-M13": "au", "C07-M14": "none"},
}
MODELS = mixed_models("C07", TABLE, 14)
