"""C04 The ideal gas equation, PV = nRT (R = 0.0821 L atm/(K mol)); at fixed T and P, density is proportional to molar
mass (M = dRT/P).
params["q"]:
  "two_moles": named. "moles": inputs P (atm), V (L), t (C). "temperature": inputs P, V, n. "pressure": inputs n, V, t.
  "density": named.
M1 drops n; M2 drops R; M3 halves; M4 uses Celsius; M5 uses R = 8.314 with litre-atmospheres; M6 inverts the equation;
M7 uses R = 8.314; M8 multiplies PV by R; M9 inverts; M10 forgets to divide by V; M11 makes density inversely
proportional; M12 makes it independent; M13 ties it to volume."""
from sympy import Rational

from chemistry import BOOK, sig

from ._mix import mixed_models

R, R_SI, K0 = BOOK["R_atm"], BOOK["R"], Rational(27315, 100)

TABLE = {
    "two_moles": {"key": "pv_2rt", "C04-M1": "pv_rt", "C04-M2": "pv_t", "C04-M3": "pv_half_rt"},
    "moles": {"key": lambda v: sig(v["P"] * v["V"] / (R * (v["t"] + K0))), "C04-M4": lambda v: sig(v["P"] * v["V"] / (R * v["t"])),
              "C04-M5": lambda v: sig(v["P"] * v["V"] / (R_SI * (v["t"] + K0))),
              "C04-M6": lambda v: sig(R * (v["t"] + K0) / (v["P"] * v["V"]))},
    "temperature": {"key": lambda v: sig(v["P"] * v["V"] / (v["n"] * R)), "C04-M7": lambda v: sig(v["P"] * v["V"] / (v["n"] * R_SI)),
                    "C04-M8": lambda v: sig(v["P"] * v["V"] * R), "C04-M9": lambda v: sig(v["n"] * R / (v["P"] * v["V"]))},
    "pressure": {"key": lambda v: sig(v["n"] * R * (v["t"] + K0) / v["V"]), "C04-M4": lambda v: sig(v["n"] * R * v["t"] / v["V"]),
                 "C04-M10": lambda v: sig(v["n"] * R * (v["t"] + K0)), "C04-M5": lambda v: sig(v["n"] * R_SI * (v["t"] + K0) / v["V"])},
    "density": {"key": "proportional_m", "C04-M11": "inverse_m", "C04-M12": "independent", "C04-M13": "volume"},
}
MODELS = mixed_models("C04", TABLE, 13)
