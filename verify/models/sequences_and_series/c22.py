"""C22 Telescoping sums. Write t_r = f(r) - f(r + 1) (with a factor) so the middle terms cancel.
params["q"]:
  "pair": sum 1/(r(r+1)), r = 1..n; inputs n. "odd": sum 1/((2r-1)(2r+1)), r = 1..n; inputs n.
  "gap2": sum to infinity of 1/(r(r+2)). "roots": sum 1/(sqrt(r) + sqrt(r+1)), r = 1..n; inputs n.
  "fact": sum r * r!, r = 1..n; inputs n.
M1 gives the infinite sum; M2 keeps an extra 1/(n+1); M3 stops at 1/n; M4 drops the factor 1/2; M5 gives the infinite
sum; M6 ends at 2n - 1; M7 keeps one surviving term; M8 drops the factor 1/2; M9 copies the r(r+1) answer; M10 ends at
sqrt(n); M11 adds the 1; M12 forgets the 1; M13 forgets the -1; M14 ends at n!; M15 gives n * n!."""
from sympy import Rational, factorial, sqrt

from ._mix import mixed_models

TABLE = {
    "pair": {"key": lambda v: v["n"] / (v["n"] + 1), "C22-M1": lambda v: 1 + 0 * v["n"], "C22-M2": lambda v: 1 + 1 / (v["n"] + 1),
             "C22-M3": lambda v: 1 - 1 / v["n"]},
    "odd": {"key": lambda v: v["n"] / (2 * v["n"] + 1), "C22-M4": lambda v: 2 * v["n"] / (2 * v["n"] + 1), "C22-M5": lambda v: Rational(1, 2) + 0 * v["n"],
            "C22-M6": lambda v: v["n"] / (2 * v["n"] - 1)},
    "gap2": {"key": lambda v: Rational(3, 4), "C22-M7": lambda v: Rational(1, 2), "C22-M8": lambda v: Rational(3, 2), "C22-M9": lambda v: 1},
    "roots": {"key": lambda v: sqrt(v["n"] + 1) - 1, "C22-M10": lambda v: sqrt(v["n"]) - 1, "C22-M11": lambda v: sqrt(v["n"] + 1) + 1,
              "C22-M12": lambda v: sqrt(v["n"] + 1)},
    "fact": {"key": lambda v: factorial(v["n"] + 1) - 1, "C22-M13": lambda v: factorial(v["n"] + 1), "C22-M14": lambda v: factorial(v["n"]) - 1,
             "C22-M15": lambda v: v["n"] * factorial(v["n"])},
}
MODELS = mixed_models("C22", TABLE, 15)
