"""C07 Uses of radioisotopes. 32P treats leukaemia, 60Co gives radiotherapy for cancer, 131I is for the thyroid; tracers
follow an element through a process. Carbon-14 dating: a living organism keeps its 14C level constant; after death 14C
decays, so t = (t_half / 0.693) ln(A0 / A).
params["q"]:
  "leukaemia": named. "wood_age": inputs th, a0, a (dps/g). "dating": named. "cobalt": named. "tracer": named.
M1 picks 60Co; M2 picks 226Ra; M3 picks 131I; M4 uses log10 without 2.303; M5 uses a straight-line fall; M6 multiplies
the ratio by the half life; M7 thinks 14C rises after death; M8 thinks 12C decays; M9 dates from 12C; M10 says dating
wood; M11 says treating leukaemia; M12 says studying photosynthesis; M13 says killing bacteria; M14 says slowing
reactions; M15 says dating rocks only."""
from sympy import Rational, log

from chemistry import sig

from ._mix import mixed_models

L2 = Rational(693, 1000)

TABLE = {
    "leukaemia": {"key": "p32", "C07-M1": "co60", "C07-M2": "ra226", "C07-M3": "i131"},
    "wood_age": {"key": lambda v: sig(v["th"] / L2 * log(v["a0"] / v["a"])),
                 "C07-M4": lambda v: sig(v["th"] / L2 * log(v["a0"] / v["a"], 10)),
                 "C07-M5": lambda v: sig((1 - v["a"] / v["a0"]) * 2 * v["th"]),
                 "C07-M6": lambda v: sig(v["a0"] / v["a"] * v["th"])},
    "dating": {"key": "decays_after_death", "C07-M7": "rises_after_death", "C07-M8": "c12_decays", "C07-M9": "from_c12"},
    "cobalt": {"key": "radiotherapy", "C07-M10": "dating", "C07-M11": "leukaemia", "C07-M12": "photosynthesis"},
    "tracer": {"key": "follow_path", "C07-M13": "kill_bacteria", "C07-M14": "slow_reactions", "C07-M15": "date_rocks"},
}
MODELS = mixed_models("C07", TABLE, 15)
