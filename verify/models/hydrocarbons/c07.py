"""C07 Benzene and aromaticity: named answers. Hückel: a planar, cyclic, fully conjugated ring with (4n + 2) pi electrons
is aromatic: benzene (6). Cyclobutadiene (4), cyclohexene and non-planar cyclooctatetraene are not. Sodium benzoate with
soda lime gives benzene; phenol heated with zinc dust gives benzene. Benzene's C-C bonds are all equal (139 pm) because
its pi electrons are delocalised.
M1 says 4n; M2 says any number; M3 says one double bond is enough; M4 picks cyclobutadiene; M5 picks cyclohexene; M6
picks cyclooctatetraene; M7 expects phenol; M8 expects toluene; M9 expects benzoic acid; M10 expects cyclohexanol; M11
expects chlorobenzene; M12 expects no reaction; M13 thinks the bonds flip; M14 calls them all single; M15 calls them all
double."""
from ._mix import mixed_models

TABLE = {
    "huckel": {"key": "four_n_plus_two", "C07-M1": "four_n", "C07-M2": "any_number", "C07-M3": "one_double"},
    "aromatic": {"key": "benzene", "C07-M4": "cyclobutadiene", "C07-M5": "cyclohexene", "C07-M6": "cyclooctatetraene"},
    "benzoate": {"key": "benzene", "C07-M7": "phenol", "C07-M8": "toluene", "C07-M9": "benzoic_acid"},
    "phenol_zn": {"key": "benzene", "C07-M10": "cyclohexanol", "C07-M11": "chlorobenzene", "C07-M12": "no_reaction"},
    "bonds": {"key": "delocalised", "C07-M13": "flipping", "C07-M14": "all_single", "C07-M15": "all_double"},
}
MODELS = mixed_models("C07", TABLE, 15)
