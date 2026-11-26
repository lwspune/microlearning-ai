"""C03 Rutherford's model and its drawbacks: named answers. Most alpha particles pass straight through gold foil (the
atom is mostly empty space); a very few bounce back (positive charge and mass sit in a tiny nucleus). Classically an
orbiting electron radiates, loses energy and spirals in; the model cannot explain line spectra. The atom (~1e-10 m) is
about 1e5 times wider than its nucleus (~1e-15 m).
M1 thinks gold has no nucleus; M2 thinks alpha particles are too small to be deflected; M3 thinks the nucleus is
negative; M4 thinks electrons are heavy; M5 keeps Thomson's uniform sphere; M6 blames holes in the foil; M7 thinks the
orbiting electron keeps its energy; M8 thinks it flies off; M9 thinks it stops; M10 thinks the model could not explain
the nucleus; M11 thinks it could not explain scattering; M12 thinks it could not explain empty space; M13 inverts the
ratio; M14 multiplies the sizes; M15 takes the nucleus's exponent."""
from ._mix import mixed_models

TABLE = {
    "most_through": {"key": "empty_space", "C03-M1": "no_nucleus", "C03-M2": "too_small", "C03-M3": "negative_nucleus"},
    "bounce_back": {"key": "tiny_nucleus", "C03-M4": "heavy_electrons", "C03-M5": "uniform_sphere", "C03-M6": "holes"},
    "orbiting": {"key": "spiral_in", "C03-M7": "keeps_energy", "C03-M8": "flies_off", "C03-M9": "stops"},
    "cannot_explain": {"key": "line_spectra", "C03-M10": "nucleus", "C03-M11": "scattering", "C03-M12": "empty_space"},
    "size": {"key": "e_5", "C03-M13": "e_minus_5", "C03-M14": "e_minus_25", "C03-M15": "e_15"},
}
MODELS = mixed_models("C03", TABLE, 15)
