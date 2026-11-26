"""C01 Classes of nuclides: named answers. Isotopes share Z, isobars share A, isotones share N = A - Z; mirror nuclei have
their proton and neutron numbers swapped (3H: 1p 2n and 3He: 2p 1n; 13C: 6p 7n and 13N: 7p 6n). 27Al (14 n) and 28Si
(14 n) are isotones; 235U has 235 - 92 = 143 neutrons.
M1 picks isotopes; M2 picks isobars; M3 picks isotones; M4 calls isotones isotopes; M5 calls them isobars; M6 calls them
mirror nuclei; M7 says atomic number; M8 says neutron number; M9 describes mirror nuclei; M10 calls mirror nuclei
isotopes; M11 isotones; M12 isoelectronic; M13 gives Z; M14 gives A; M15 adds A and Z."""
from ._mix import mixed_models

TABLE = {
    "mirror": {"key": "h3_he3", "C01-M1": "c12_c13", "C01-M2": "c14_n14", "C01-M3": "c14_o16"},
    "al_si": {"key": "isotones", "C01-M4": "isotopes", "C01-M5": "isobars", "C01-M6": "mirror_nuclei"},
    "isobars": {"key": "mass_number", "C01-M7": "atomic_number", "C01-M8": "neutron_number", "C01-M9": "swapped"},
    "c13_n13": {"key": "mirror_nuclei", "C01-M10": "isotopes", "C01-M11": "isotones", "C01-M12": "isoelectronic"},
    "uranium": {"key": "n_143", "C01-M13": "n_92", "C01-M14": "n_235", "C01-M15": "n_327"},
}
MODELS = mixed_models("C01", TABLE, 15)
