"""C03 Boyle's and Charles' laws. Boyle (fixed n, T): P1 V1 = P2 V2. Charles (fixed n, P): V1/T1 = V2/T2 with T in
kelvin. A rising bubble meets less pressure and grows.
params["q"]:
  "boyle": inputs V, P1, P2. "charles": inputs V, T1, T2 (K). "charles_c": inputs V, t1, t2 (Celsius). "bubble": named.
M1 inverts the pressure ratio; M2 leaves the volume unchanged; M3 squares the ratio; M4 inverts the temperature ratio;
M5 uses Celsius temperatures; M6 leaves the volume unchanged; M7 thinks the bubble shrinks; M8 thinks it stays the same;
M9 thinks warmer water shrinks it."""
from sympy import Rational

from chemistry import sig

from ._mix import mixed_models

K0 = Rational(27315, 100)

TABLE = {
    "boyle": {"key": lambda v: sig(v["V"] * v["P1"] / v["P2"]), "C03-M1": lambda v: sig(v["V"] * v["P2"] / v["P1"]),
              "C03-M2": lambda v: sig(v["V"]), "C03-M3": lambda v: sig(v["V"] * (v["P1"] / v["P2"]) ** 2)},
    "charles": {"key": lambda v: sig(v["V"] * v["T2"] / v["T1"]), "C03-M4": lambda v: sig(v["V"] * v["T1"] / v["T2"]),
                "C03-M5": lambda v: sig(v["V"] * (v["T2"] - K0) / (v["T1"] - K0)), "C03-M6": lambda v: sig(v["V"])},
    "charles_c": {"key": lambda v: sig(v["V"] * (v["t2"] + K0) / (v["t1"] + K0), 4),
                  "C03-M4": lambda v: sig(v["V"] * (v["t1"] + K0) / (v["t2"] + K0), 4),
                  "C03-M5": lambda v: sig(v["V"] * v["t2"] / v["t1"], 4), "C03-M6": lambda v: sig(v["V"], 4)},
    "bubble": {"key": "grows", "C03-M7": "shrinks", "C03-M8": "same", "C03-M9": "shrinks_warm"},
}
MODELS = mixed_models("C03", TABLE, 9)
