"""C02 SI units and temperature scales. The seven SI base units: kg, m, s, K, A, mol, cd (the litre is not one).
T(K) = t(C) + 273.15; F = 9/5 C + 32, so the scales agree at -40.
params["q"]:
  "current": named. "same": where C and F agree (no inputs). "c_to_f": inputs c. "c_to_k": inputs c. "base": named.
M1 confuses current with potential difference; M2 picks another base unit; M3 picks a derived unit; M4 drops the sign;
M5 uses F = 5/9 C + 32; M6 uses F = 9/5 (C + 32); M7 forgets the +32; M8 converts with 5/9; M9 adds 32 before
multiplying; M10 subtracts the Celsius value from 273.15; M11 keeps the Celsius number; M12 converts to Fahrenheit instead; M13 thinks the
kelvin is not a base unit; M14 thinks the mole is not; M15 thinks the candela is not."""
from sympy import Rational, solve, symbols

from chemistry import sig

from ._mix import mixed_models

_x = symbols("x")
NINE5 = Rational(9, 5)

TABLE = {
    "current": {"key": "ampere", "C02-M1": "volt", "C02-M2": "candela", "C02-M3": "newton"},
    "same": {"key": lambda v: sig(solve(NINE5 * _x + 32 - _x, _x)[0]),
             "C02-M4": lambda v: sig(-solve(NINE5 * _x + 32 - _x, _x)[0]),
             "C02-M5": lambda v: sig(solve(Rational(5, 9) * _x + 32 - _x, _x)[0]),
             "C02-M6": lambda v: sig(solve(NINE5 * (_x + 32) - _x, _x)[0])},
    "c_to_f": {"key": lambda v: sig(NINE5 * v["c"] + 32), "C02-M7": lambda v: sig(NINE5 * v["c"]),
               "C02-M8": lambda v: sig(Rational(5, 9) * v["c"] + 32), "C02-M9": lambda v: sig(NINE5 * (v["c"] + 32))},
    "c_to_k": {"key": lambda v: sig(v["c"] + Rational(27315, 100), 5), "C02-M10": lambda v: sig(Rational(27315, 100) - v["c"], 5),
               "C02-M11": lambda v: sig(v["c"], 5), "C02-M12": lambda v: sig(NINE5 * v["c"] + 32, 5)},
    "base": {"key": "litre", "C02-M13": "kelvin", "C02-M14": "mole", "C02-M15": "candela"},
}
MODELS = mixed_models("C02", TABLE, 15)
