"""C05 Decay law and half life. lambda = 0.693 / t_half; fraction left = (1/2)^(t / t_half);
t = (2.303 / lambda) log10(N0 / N). 1 Ci = 3.7 x 10^10 Bq.
params["q"]:
  "lambda": inputs th. "pct_left": inputs th, t. "time_decay": inputs th, pct (percent decayed). "three_quarters": inputs t.
  "curie": named.
M1 inverts; M2 multiplies; M3 leaves out 0.693; M4 divides 100 by the number of half lives; M5 gives the percentage
decayed; M6 uses e^(-t/t_half); M7 uses the fraction decayed in the log; M8 counts three half lives; M9 leaves out
2.303; M10 takes three quarters of the time; M11 takes the whole time; M12 counts three half lives; M13 says 1 Bq; M14
says 10^6 Bq; M15 flips the exponent."""
from sympy import E, Rational, log

from chemistry import sig

from ._mix import mixed_models

L2 = Rational(693, 1000)


def _lam(v):
    return L2 / v["th"]


TABLE = {
    "lambda": {"key": lambda v: sig(L2 / v["th"]), "C05-M1": lambda v: sig(v["th"] / L2), "C05-M2": lambda v: sig(L2 * v["th"]),
               "C05-M3": lambda v: sig(1 / v["th"])},
    "pct_left": {"key": lambda v: sig(100 * Rational(1, 2) ** (v["t"] / v["th"])), "C05-M4": lambda v: sig(100 / (v["t"] / v["th"])),
                 "C05-M5": lambda v: sig(100 - 100 * Rational(1, 2) ** (v["t"] / v["th"])),
                 "C05-M6": lambda v: sig(100 * E ** (-v["t"] / v["th"]))},
    "time_decay": {"key": lambda v: sig(Rational(2303, 1000) / _lam(v) * log(100 / (100 - v["pct"]), 10)),
                   "C05-M7": lambda v: sig(Rational(2303, 1000) / _lam(v) * log(100 / v["pct"], 10)),
                   "C05-M8": lambda v: sig(3 * v["th"]),
                   "C05-M9": lambda v: sig(1 / _lam(v) * log(100 / (100 - v["pct"]), 10))},
    "three_quarters": {"key": lambda v: sig(v["t"] / 2), "C05-M10": lambda v: sig(v["t"] * Rational(3, 4)),
                       "C05-M11": lambda v: sig(v["t"]), "C05-M12": lambda v: sig(v["t"] / 3)},
    "curie": {"key": "bq_3_7e10", "C05-M13": "bq_1", "C05-M14": "bq_1e6", "C05-M15": "bq_3_7e_minus10"},
}
MODELS = mixed_models("C05", TABLE, 15)
