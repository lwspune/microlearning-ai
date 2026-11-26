"""C01 Hydrogen and its isotopes: named answers. Hydrogen (1s1) is like the alkali metals (one outer electron, forms H+)
and like the halogens (one electron short of a full shell, forms H- and diatomic molecules). Isotopes: protium,
deuterium and radioactive tritium (1 proton, 2 neutrons). Hydrogen is the most abundant element in the universe.
M1 calls protium unstable; M2 calls deuterium radioactive; M3 invents H-4; M4 reads the mass number as protons; M5
reads it as neutrons; M6 swaps protons and neutrons; M7 calls hydrogen a metal; M8 gives it a full shell; M9 says it
forms only H-; M10 gives an alkali-metal likeness; M11 calls it a liquid; M12 gives it seven valence electrons; M13 says
helium; M14 says oxygen; M15 says nitrogen."""
from ._mix import mixed_models

TABLE = {
    "unstable": {"key": "h3", "C01-M1": "h1", "C01-M2": "h2", "C01-M3": "h4"},
    "tritium": {"key": "p1_n2", "C01-M4": "p3", "C01-M5": "p1_n3", "C01-M6": "p2_n1"},
    "alkali_like": {"key": "one_electron_h_plus", "C01-M7": "is_metal", "C01-M8": "full_shell", "C01-M9": "only_h_minus"},
    "halogen_like": {"key": "one_short_h_minus", "C01-M10": "h_plus_water", "C01-M11": "liquid", "C01-M12": "seven_valence"},
    "abundant": {"key": "hydrogen", "C01-M13": "helium", "C01-M14": "oxygen", "C01-M15": "nitrogen"},
}
MODELS = mixed_models("C01", TABLE, 15)
