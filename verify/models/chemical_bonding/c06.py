"""C06 Orbital overlap, sigma and pi: named answers. Head-on (axial) overlap gives a sigma bond, sideways overlap of p
orbitals a pi bond; head-on overlap is greater, so sigma is stronger. H-F forms from H 1s and F 2p. Ethyne has two
C-H sigma bonds and a C-C triple bond (one sigma, two pi): 3 sigma, 2 pi. Covalent bonds are directional because the
overlapping orbitals point in definite directions.
M1 takes head-on s-s overlap for pi; M2 takes head-on p-p overlap for pi; M3 takes s-p overlap for pi; M4 thinks sigma
bonds hold more electrons; M5 thinks pi bonds are ionic; M6 thinks sigma bonds are longer; M7 uses F's 2s orbital; M8
thinks two p orbitals overlap; M9 thinks the overlap is sideways; M10 swaps the counts; M11 counts every bond as sigma;
M12 forgets the C-H bonds; M13 credits one-way electron transfer; M14 thinks repulsion is the same in all directions;
M15 thinks ionic bonds are directional too."""
from ._mix import mixed_models

TABLE = {
    "pi": {"key": "sideways_p", "C06-M1": "head_on_s", "C06-M2": "head_on_p", "C06-M3": "s_p"},
    "sigma_stronger": {"key": "greater_overlap", "C06-M4": "more_electrons", "C06-M5": "pi_ionic", "C06-M6": "sigma_longer"},
    "hf": {"key": "h1s_f2p", "C06-M7": "h1s_f2s", "C06-M8": "p_p", "C06-M9": "sideways"},
    "ethyne": {"key": "s3_p2", "C06-M10": "s2_p3", "C06-M11": "s5_p0", "C06-M12": "s1_p2"},
    "directional": {"key": "orbitals_point", "C06-M13": "one_way_transfer", "C06-M14": "equal_repulsion", "C06-M15": "ionic_too"},
}
MODELS = mixed_models("C06", TABLE, 15)
