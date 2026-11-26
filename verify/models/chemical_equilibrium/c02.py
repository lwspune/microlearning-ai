"""C02 Law of mass action and Kc. Kc = products' concentrations over reactants', each raised to its coefficient.
Reversing an equation inverts K; doubling it squares K.
params["q"]:
  "expression": named. "reverse": inputs K. "double": inputs K. "hi": inputs hi (M), K (asks [H2] with [H2] = [I2]).
  "mass_action": named.
M1 inverts the expression; M2 drops the powers; M3 adds instead of multiplying; M4 changes the sign; M5 keeps K; M6 takes
the square root; M7 doubles K; M8 keeps K; M9 takes the square root; M10 forgets the square; M11 squares the wrong side;
M12 takes the root of the ratio; M13 uses a sum; M14 makes rate independent of concentration; M15 uses the products."""
from sympy import sqrt

from chemistry import sig

from ._mix import mixed_models

TABLE = {
    "expression": {"key": "so3sq_over_so2sq_o2", "C02-M1": "so2sq_o2_over_so3sq", "C02-M2": "so3_over_so2_o2", "C02-M3": "sum_form"},
    "reverse": {"key": lambda v: sig(1 / v["K"]), "C02-M4": lambda v: sig(-v["K"]), "C02-M5": lambda v: sig(v["K"]),
                "C02-M6": lambda v: sig(sqrt(v["K"]))},
    "double": {"key": lambda v: sig(v["K"] ** 2), "C02-M7": lambda v: sig(2 * v["K"]), "C02-M8": lambda v: sig(v["K"]),
               "C02-M9": lambda v: sig(sqrt(v["K"]))},
    "hi": {"key": lambda v: sig(v["hi"] / sqrt(v["K"])), "C02-M10": lambda v: sig(v["hi"] / v["K"]),
           "C02-M11": lambda v: sig(v["hi"] ** 2 / v["K"]), "C02-M12": lambda v: sig(sqrt(v["hi"] / v["K"]))},
    "mass_action": {"key": "product_of_powers", "C02-M13": "sum_of_masses", "C02-M14": "independent", "C02-M15": "products_conc"},
}
MODELS = mixed_models("C02", TABLE, 15)
