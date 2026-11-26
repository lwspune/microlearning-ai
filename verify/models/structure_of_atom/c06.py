"""C06 Quantum numbers and orbitals. n sets size and energy; l (0 to n - 1) the shape (s, p, d, f); m_l (-l to +l) the
orientation; m_s the spin. Shell n has n^2 orbitals and 2n^2 electrons. s orbitals are spherical, p dumbbell, d
mostly double dumbbell.
params["q"]:
  "n_describes": named. "p_shape": named. "n_shell": inputs n (orbitals asked). "l_values": named (n = 3).
  "notation": named (n = 4, l = 2).
M1 confuses n with l; M2 with m_s; M3 with m_l; M4 gives the s shape; M5 gives the d shape; M6 invents a shape; M7
gives n; M8 gives 2n; M9 gives the electrons, 2n^2; M10 counts l from 1 to n; M11 counts l up to n; M12 gives the m_l
values; M13 takes l = 2 for p; M14 swaps n and l; M15 takes l = 2 for f."""
from chemistry import sig

from ._mix import mixed_models

TABLE = {
    "n_describes": {"key": "size", "C06-M1": "shape_l", "C06-M2": "spin", "C06-M3": "orientation"},
    "p_shape": {"key": "dumbbell", "C06-M4": "spherical", "C06-M5": "double_dumbbell", "C06-M6": "diagonal"},
    "n_shell": {"key": lambda v: sig(v["n"] ** 2), "C06-M7": lambda v: sig(v["n"]), "C06-M8": lambda v: sig(2 * v["n"]),
                "C06-M9": lambda v: sig(2 * v["n"] ** 2)},
    "l_values": {"key": "l_012", "C06-M10": "l_123", "C06-M11": "l_0123", "C06-M12": "l_m2_to_2"},
    "notation": {"key": "o_4d", "C06-M13": "o_4p", "C06-M14": "o_2d", "C06-M15": "o_4f"},
}
MODELS = mixed_models("C06", TABLE, 15)
