"""C05 Using the equilibrium constant. A very large K means mostly products. The reaction quotient Q has K's form with
current concentrations: Q < K, the reaction goes forward; Q > K, backward. K = kf / kr.
params["q"]:
  "large_k": named. "q_less": named. "quotient": inputs n2, h2, nh3 (M) for N2 + 3H2 <=> 2NH3.
  "kf": inputs K, kr. "use": named.
M1 thinks a large K means mostly reactants; M2 thinks it means a fast reaction; M3 thinks it means equal amounts; M4 goes
backward; M5 thinks it is at equilibrium; M6 thinks it stops; M7 inverts Q; M8 drops the powers; M9 multiplies by the coefficients instead of raising to them; M10 divides
kr by K; M11 takes kf = K; M12 divides K by kr; M13 says the rate; M14 says activation energy; M15 says time."""
from chemistry import sig

from ._mix import mixed_models

TABLE = {
    "large_k": {"key": "mostly_products", "C05-M1": "mostly_reactants", "C05-M2": "fast", "C05-M3": "equal_amounts"},
    "q_less": {"key": "forward", "C05-M4": "backward", "C05-M5": "at_equilibrium", "C05-M6": "stops"},
    "quotient": {"key": lambda v: sig(v["nh3"] ** 2 / (v["n2"] * v["h2"] ** 3)),
                 "C05-M7": lambda v: sig(v["n2"] * v["h2"] ** 3 / v["nh3"] ** 2),
                 "C05-M8": lambda v: sig(v["nh3"] / (v["n2"] * v["h2"])),
                 "C05-M9": lambda v: sig(2 * v["nh3"] / (v["n2"] * 3 * v["h2"]))},
    "kf": {"key": lambda v: sig(v["K"] * v["kr"]), "C05-M10": lambda v: sig(v["kr"] / v["K"]),
           "C05-M11": lambda v: sig(v["K"]), "C05-M12": lambda v: sig(v["K"] / v["kr"])},
    "use": {"key": "equilibrium_conc", "C05-M13": "rate", "C05-M14": "activation_energy", "C05-M15": "time"},
}
MODELS = mixed_models("C05", TABLE, 15)
