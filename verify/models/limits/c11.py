"""C11 The 1-to-the-infinity form: lim f^g = e^(lim (f - 1) g). Keys by sympy's limit, straight from the definition.
params["q"]: "inf" (1 + 3/x)^(2x), x -> oo; "cos" (cos x)^(1/x^2), x -> 0; "ratio" ((x + 2)/(x - 1))^x, x -> oo;
"neg" (1 - 2x)^(1/x), x -> 0; "rule": named.
M1 divides the exponents; M2 takes 1^oo as 1; M3 adds the exponents; M4 takes 1^oo as 1; M5 drops the minus sign;
M6 uses 1 - cos x ~ x^2; M7 uses the numerator only; M8 uses the denominator only; M9 takes 1^oo as 1; M10 drops the
sign; M11 divides; M12 takes 1^oo as 1; M13 says 1; M14 says infinity; M15 forgets the minus 1."""
from sympy import E, Rational, Symbol, cos, exp, limit, oo

from ._mix import mixed_models

x = Symbol("x")

TABLE = {
    "inf": {"key": lambda v: limit((1 + 3 / x) ** (2 * x), x, oo), "C11-M1": lambda v: exp(Rational(3, 2)), "C11-M2": lambda v: 1,
            "C11-M3": lambda v: exp(5)},
    "cos": {"key": lambda v: limit(cos(x) ** (1 / x ** 2), x, 0), "C11-M4": lambda v: 1, "C11-M5": lambda v: exp(Rational(1, 2)),
            "C11-M6": lambda v: exp(-1)},
    "ratio": {"key": lambda v: limit(((x + 2) / (x - 1)) ** x, x, oo), "C11-M7": lambda v: exp(2), "C11-M8": lambda v: E, "C11-M9": lambda v: 1},
    "neg": {"key": lambda v: limit((1 - 2 * x) ** (1 / x), x, 0), "C11-M10": lambda v: exp(2), "C11-M11": lambda v: exp(Rational(-1, 2)),
            "C11-M12": lambda v: 1},
    "rule": {"key": "e_power_lim_f_minus_one_g", "C11-M13": "always_one", "C11-M14": "always_infinite", "C11-M15": "e_power_lim_f_g"},
}
MODELS = mixed_models("C11", TABLE, 15)
