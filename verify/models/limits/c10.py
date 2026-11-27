"""C10 Series expansions in limits. Keys computed by sympy's limit, straight from the definition.
params["q"]: "sin" (x - sin x)/x^3; "cos" (1 - x^2/2 - cos x)/x^4; "const" the a making (e^x - 1 - ax)/x^2 finite;
"log" (log(1 + x) - x)/x^2; "tan" (tan x - x)/x^3.
M1 stops sin x at x; M2 flips the sign; M3 uses 1/2!; M4 flips the sign; M5 stops cos x at x^2/2; M6 stops at
x^2 and gets -1/2; M7 says 0; M8 says 1/2; M9 says 2; M10 flips the sign; M11 stops log at x; M12 uses the x^3 term;
M13 flips the sign; M14 borrows sin's 1/6; M15 stops tan x at x."""
from sympy import Rational, Symbol, cos, exp, limit, log, sin, tan

from ._mix import mixed_models

x = Symbol("x")

TABLE = {
    "sin": {"key": lambda v: limit((x - sin(x)) / x ** 3, x, 0), "C10-M1": lambda v: 0, "C10-M2": lambda v: Rational(-1, 6),
            "C10-M3": lambda v: Rational(1, 2)},
    "cos": {"key": lambda v: limit((1 - x ** 2 / 2 - cos(x)) / x ** 4, x, 0), "C10-M4": lambda v: Rational(1, 24), "C10-M5": lambda v: 0,
            "C10-M6": lambda v: Rational(-1, 2)},
    "const": {"key": lambda v: 1, "C10-M7": lambda v: 0, "C10-M8": lambda v: Rational(1, 2), "C10-M9": lambda v: 2},
    "log": {"key": lambda v: limit((log(1 + x) - x) / x ** 2, x, 0), "C10-M10": lambda v: Rational(1, 2), "C10-M11": lambda v: 0,
            "C10-M12": lambda v: Rational(-1, 3)},
    "tan": {"key": lambda v: limit((tan(x) - x) / x ** 3, x, 0), "C10-M13": lambda v: Rational(-1, 3), "C10-M14": lambda v: Rational(1, 6),
            "C10-M15": lambda v: 0},
}
# The "const" key: e^x - 1 - ax = (1 - a)x + x^2/2 + ..., finite over x^2 only when a = 1 (checked here at import).
assert limit((exp(x) - 1 - x) / x ** 2, x, 0) == Rational(1, 2)
MODELS = mixed_models("C10", TABLE, 15)
