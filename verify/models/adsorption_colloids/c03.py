"""C03 Factors and the Freundlich isotherm. Adsorption grows with surface area (finely divided adsorbents), with how
easily a gas liquefies (NH3 > N2, H2), with pressure, and as temperature falls. Freundlich: x/m = k P^(1/n);
log(x/m) = log k + (1/n) log P, a line of slope 1/n and intercept log k.
params["q"]:
  "fine": named. "gas": named. "xm": inputs k, n, P. "k_from_plot": inputs c (intercept), s (slope). "equation": named.
M1 thinks fine powder is lighter; M2 thinks it is hotter; M3 thinks it reacts faster; M4 picks the lightest gas; M5
picks the most abundant; M6 picks the most reactive; M7 divides P by n; M8 raises P to n; M9 drops the power; M10 gives
the intercept; M11 takes the antilog of the slope; M12 uses e instead of 10; M13 writes P^n; M14 writes k/P; M15 writes
kP."""
from sympy import E, Integer

from chemistry import sig

from ._mix import mixed_models

TABLE = {
    "fine": {"key": "more_area", "C03-M1": "lighter", "C03-M2": "hotter", "C03-M3": "reacts_faster"},
    "gas": {"key": "ammonia", "C03-M4": "hydrogen", "C03-M5": "nitrogen", "C03-M6": "oxygen"},
    "xm": {"key": lambda v: sig(v["k"] * v["P"] ** (1 / v["n"])), "C03-M7": lambda v: sig(v["k"] * v["P"] / v["n"]),
           "C03-M8": lambda v: sig(v["k"] * v["P"] ** v["n"]), "C03-M9": lambda v: sig(v["k"] * v["P"])},
    "k_from_plot": {"key": lambda v: sig(Integer(10) ** v["c"]), "C03-M10": lambda v: sig(v["c"]),
                    "C03-M11": lambda v: sig(Integer(10) ** v["s"]), "C03-M12": lambda v: sig(E ** v["c"])},
    "equation": {"key": "k_p_1_over_n", "C03-M13": "k_p_n", "C03-M14": "k_over_p", "C03-M15": "k_p"},
}
MODELS = mixed_models("C03", TABLE, 15)
