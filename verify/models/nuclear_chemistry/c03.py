"""C03 Mass defect and binding energy. Mass defect = Z m(H) + N m(n) - atomic mass; binding energy = mass defect x
931.5 MeV/u; per nucleon, divide by A. Binding energy per nucleon peaks near iron-56.
params["q"]:
  "per_nucleon_total": inputs E (MeV), A, Z. "defect": inputs Z, N, M, mH, mn.
  "be_per_nucleon": inputs Z, N, M, mH, mn. "peak": named.
M1 divides by Z; M2 multiplies; M3 divides by N; M4 counts every nucleon as H; M5 counts every nucleon as a neutron; M6
subtracts the wrong way; M7 gives the total; M8 leaves out 931.5; M9 divides by Z; M10 picks uranium-235; M11 picks
helium-4; M12 picks deuterium."""
from sympy import Rational

from chemistry import sig

from ._mix import mixed_models

U = Rational(9315, 10)


def _dm(v):
    return v["Z"] * v["mH"] + v["N"] * v["mn"] - v["M"]


TABLE = {
    "per_nucleon_total": {"key": lambda v: sig(v["E"] / v["A"]), "C03-M1": lambda v: sig(v["E"] / v["Z"]),
                          "C03-M2": lambda v: sig(v["E"] * v["A"]), "C03-M3": lambda v: sig(v["E"] / (v["A"] - v["Z"]))},
    "defect": {"key": lambda v: sig(_dm(v)), "C03-M4": lambda v: sig((v["Z"] + v["N"]) * v["mH"] - v["M"]),
               "C03-M5": lambda v: sig((v["Z"] + v["N"]) * v["mn"] - v["M"]), "C03-M6": lambda v: sig(-_dm(v))},
    "be_per_nucleon": {"key": lambda v: sig(_dm(v) * U / (v["Z"] + v["N"])), "C03-M7": lambda v: sig(_dm(v) * U),
                       "C03-M8": lambda v: sig(_dm(v) / (v["Z"] + v["N"])), "C03-M9": lambda v: sig(_dm(v) * U / v["Z"])},
    "peak": {"key": "iron_56", "C03-M10": "uranium_235", "C03-M11": "helium_4", "C03-M12": "deuterium"},
}
MODELS = mixed_models("C03", TABLE, 12)
