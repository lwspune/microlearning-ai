"""C01 The modern periodic table: named answers. Elements in order of atomic number; 7 periods, 18 groups; the period
number is the principal quantum number of the valence shell; lanthanoids and actinoids sit at the bottom. Period 6 has
32 elements (6s, 4f, 5d, 6p: 2 + 14 + 10 + 6) and begins with Cs, whose last electron enters 6s.
M1 says atomic number; M2 says atomic mass; M3 says the azimuthal quantum number; M4 puts lanthanoids on the left; M5 on
the right; M6 in the middle; M7 forgets the f subshell; M8 counts only s and p; M9 counts only f; M10 orders by mass;
M11 by neutrons; M12 by density; M13 starts period 6 in 5d; M14 in 4f; M15 in 6p."""
from ._mix import mixed_models

TABLE = {
    "period": {"key": "principal_qn", "C01-M1": "atomic_number", "C01-M2": "atomic_mass", "C01-M3": "azimuthal_qn"},
    "lanthanides": {"key": "bottom", "C01-M4": "left", "C01-M5": "right", "C01-M6": "middle"},
    "period6": {"key": "thirty_two", "C01-M7": "eighteen", "C01-M8": "eight", "C01-M9": "fourteen"},
    "basis": {"key": "atomic_number", "C01-M10": "atomic_mass", "C01-M11": "neutrons", "C01-M12": "density"},
    "first6": {"key": "s6", "C01-M13": "d5", "C01-M14": "f4", "C01-M15": "p6"},
}
MODELS = mixed_models("C01", TABLE, 15)
