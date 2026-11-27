"""C15 Integer solutions and identical objects. x1 + ... + xr = n: C(n + r - 1, r - 1) non-negative solutions,
C(n - 1, r - 1) positive ones; lower bounds are subtracted first. n identical objects into r distinct boxes: the same.
params["q"]:
  "nonneg": inputs n, r. "positive": inputs n, r. "boxes": inputs n, r (each box at least one).
  "bounds": inputs n, a, b (x >= a, y >= b, z >= 0). "rule": named.
M1 uses the positive formula; M2 takes r instead of r - 1; M3 arranges instead of choosing; M4 uses the non-negative
formula; M5 takes r; M6 takes n; M7 allows empty boxes; M8 treats the objects as distinct; M9 takes C(n, r); M10
ignores the bounds; M11 subtracts one bound; M12 uses the positive formula; M13 picks r^n; M14 picks n^r; M15 picks
the positive formula."""
from sympy import binomial, ff

from ._mix import mixed_models

C = binomial

TABLE = {
    "nonneg": {"key": lambda v: C(v["n"] + v["r"] - 1, v["r"] - 1), "C15-M1": lambda v: C(v["n"] - 1, v["r"] - 1),
               "C15-M2": lambda v: C(v["n"] + v["r"] - 1, v["r"]), "C15-M3": lambda v: ff(v["n"] + v["r"] - 1, v["r"] - 1)},
    "positive": {"key": lambda v: C(v["n"] - 1, v["r"] - 1), "C15-M4": lambda v: C(v["n"] + v["r"] - 1, v["r"] - 1),
                 "C15-M5": lambda v: C(v["n"], v["r"]), "C15-M6": lambda v: C(v["n"] - 1, v["r"])},
    "boxes": {"key": lambda v: C(v["n"] - 1, v["r"] - 1), "C15-M7": lambda v: C(v["n"] + v["r"] - 1, v["r"] - 1),
              "C15-M8": lambda v: v["r"] ** v["n"], "C15-M9": lambda v: C(v["n"], v["r"])},
    "bounds": {"key": lambda v: C(v["n"] - v["a"] - v["b"] + 2, 2), "C15-M10": lambda v: C(v["n"] + 2, 2),
               "C15-M11": lambda v: C(v["n"] - v["a"] + 2, 2), "C15-M12": lambda v: C(v["n"] - v["a"] - v["b"] - 1, 2)},
    "rule": {"key": "stars_and_bars", "C15-M13": "r_power_n", "C15-M14": "n_power_r", "C15-M15": "positive_formula"},
}
MODELS = mixed_models("C15", TABLE, 15)
