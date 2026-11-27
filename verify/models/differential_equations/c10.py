"""C10 Equations reducible to linear: named answers. Bernoulli's dy/dx + Py = Qy^n becomes linear in v = y^(1-n):
dv/dx + (1 - n)Pv = (1 - n)Q. For dy/dx + y/x = x^2 y^3 (n = 3): v = y^(-2), dv/dx - (2/x)v = -2x^2, I.F. = x^(-2).
dy/dx + y = y^2: v = 1/y gives dv/dx - v = -1, so v = 1 + Ce^x and y = 1/(1 + Ce^x).
M1 puts v = y^3; M2 v = y^(-3); M3 v = y^2; M4 keeps P; M5 flips the sign; M6 multiplies by -n; M7 takes x^2; M8 takes
e^(-2/x); M9 writes the exponent as the factor; M10 picks a linear equation; M11 a homogeneous one; M12 a separable one;
M13 forgets to invert v; M14 flips the exponent; M15 drops the 1."""
from ._mix import mixed_models

TABLE = {
    "sub": {"key": "y_minus_two", "C10-M1": "y_cubed", "C10-M2": "y_minus_three", "C10-M3": "y_squared"},
    "coeff": {"key": "minus_two_over_x", "C10-M4": "one_over_x", "C10-M5": "two_over_x", "C10-M6": "minus_three_over_x"},
    "factor": {"key": "x_minus_two", "C10-M7": "x_two", "C10-M8": "e_minus_two_over_x", "C10-M9": "minus_two_log_x"},
    "which": {"key": "bernoulli_form", "C10-M10": "linear", "C10-M11": "homogeneous", "C10-M12": "separable"},
    "solve": {"key": "inverse_one_plus_ce", "C10-M13": "one_plus_ce", "C10-M14": "inverse_one_plus_ce_minus", "C10-M15": "inverse_ce"},
}
MODELS = mixed_models("C10", TABLE, 15)
