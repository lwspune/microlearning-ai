"""C07 Electronic configuration: named answers. Pauli: no two electrons share all four quantum numbers. Aufbau, (n + l)
rule: lower n + l fills first, and for equal n + l the lower n (4s, n + l = 4, before 3d, 5). Hund: singly before
pairing. Cr is [Ar] 3d5 4s1 (six unpaired); ions lose 4s electrons first, so Fe2+ is [Ar] 3d6.
M1 names Hund's rule; M2 names the Aufbau rule; M3 names Heisenberg's principle; M4 writes Cr as 3d4 4s2; M5 thinks all
electrons pair; M6 counts only the d electrons; M7 removes 3d electrons first; M8 forgets to remove any; M9 forces a
half-filled d; M10 fills by n alone; M11 thinks 4s and 3d fill together; M12 thinks lower l always fills first; M13
names Pauli's principle; M14 names the Aufbau rule; M15 names Heisenberg's principle."""
from ._mix import mixed_models

TABLE = {
    "pauli": {"key": "pauli", "C07-M1": "hund", "C07-M2": "aufbau", "C07-M3": "heisenberg"},
    "cr_unpaired": {"key": "six", "C07-M4": "four", "C07-M5": "zero", "C07-M6": "five"},
    "fe2": {"key": "ar_3d6", "C07-M7": "ar_3d4_4s2", "C07-M8": "ar_3d6_4s2", "C07-M9": "ar_3d5_4s1"},
    "order": {"key": "s4_first", "C07-M10": "d3_first", "C07-M11": "fill_together", "C07-M12": "p4_first"},
    "oxygen": {"key": "hund", "C07-M13": "pauli", "C07-M14": "aufbau", "C07-M15": "heisenberg"},
}
MODELS = mixed_models("C07", TABLE, 15)
