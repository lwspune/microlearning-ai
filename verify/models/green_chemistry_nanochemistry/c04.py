"""C04 The nanoscale: named answers. 1 nm = 1e-9 m; 'nano' is from the Greek for dwarf. Nanostructures: zero-dimensional
(all three dimensions nanoscale: nanoparticles), one-dimensional (two dimensions nanoscale: nanorods, nanowires),
two-dimensional (one dimension nanoscale: thin films). A large share of a nanoparticle's atoms lie on its surface, so its
properties differ from the bulk. For a cube of side a, surface/volume = 6/a, so a 10 nm cube has 1e6 times the ratio
of a 1 cm cube.
M1 confuses nm with micrometre; M2 with angstrom; M3 with picometre; M4 picks French for billion; M5 Spanish for
particle; M6 Latin for invisible; M7 counts the nanoscale dimensions instead of the large ones, picking nanoparticles; M8
calls films one-dimensional; M9 thinks any wire is a 1-D nanostructure; M10 thinks the element changes; M11 thinks the
atoms get heavier; M12 thinks the bonds are all broken; M13 squares the ratio; M14 thinks the ratio is the same for any
cube; M15 thinks smaller cubes have the smaller ratio."""
from sympy import Rational, Symbol

SV_RATIO = (Rational(6, 10)) / (Rational(6, 10**7))   # 10 nm cube vs 1 cm (1e7 nm) cube
assert SV_RATIO == 10**6

ANSWERS = {
    "nm": {"key": "e_minus_9", "C04-M1": "e_minus_6", "C04-M2": "e_minus_10", "C04-M3": "e_minus_12"},
    "greek": {"key": "greek_dwarf", "C04-M4": "french_billion", "C04-M5": "spanish_particle", "C04-M6": "latin_invisible"},
    "one_d": {"key": "nanorods", "C04-M7": "nanoparticles", "C04-M8": "nanofilms", "C04-M9": "copper_wire"},
    "surface": {"key": "surface_atoms", "C04-M10": "different_element", "C04-M11": "heavier", "C04-M12": "bonds_broken"},
    "ratio": {"key": "ratio_1e6", "C04-M13": "ratio_1e12", "C04-M14": "ratio_1", "C04-M15": "ratio_1e_minus_6"},
}


def key(v, p):
    return Symbol(ANSWERS[p["q"]]["key"])


def _m(mid):
    def model(v, p):
        row = ANSWERS[p["q"]]
        if mid not in row:
            raise ValueError("does not apply to this item")
        return Symbol(row[mid])
    return model


MODELS = {"key": key, **{f"C04-M{i}": _m(f"C04-M{i}") for i in range(1, 16)}}
