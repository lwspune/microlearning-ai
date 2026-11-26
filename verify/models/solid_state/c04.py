"""C04 Close packing and voids: answer models (the key, and one per misconception).

N close-packed spheres (hcp or ccp) leave 2N tetrahedral and N octahedral voids. Coordination numbers:
simple cubic 6, bcc 8, hcp and ccp 12. params:
  ask="voids", kind="tetra" | "octa": the number of voids, from inputs mol (moles of spheres) or N (spheres);
  ask="cn", lattice="sc" | "bcc" | "ccp" | "hcp": the coordination number.
"""
from sympy import Integer, Rational

from chemistry import BOOK, sig

CN = {"sc": 6, "bcc": 8, "ccp": 12, "hcp": 12}
OWN_LAYER = {"sc": 4, "bcc": 4, "ccp": 6, "hcp": 6}  # neighbours in a sphere's own layer (square or hexagonal)
PER_CELL = {"sc": 1, "bcc": 2, "ccp": 4}  # particles per cubic unit cell


def _voids(v, p, tetra, octa):
    per = {"tetra": tetra, "octa": octa}[p["kind"]]
    if "mol" in v:
        return sig(per * v["mol"] * BOOK["N_A"])
    return per * v["N"]


def key(v, p):
    if p["ask"] == "cn":
        return Integer(CN[p["lattice"]])
    return _voids(v, p, 2, 1)


def _void_model(tetra, octa):
    def model(v, p):
        if p["ask"] != "voids":
            raise ValueError("a void mistake")
        return _voids(v, p, tetra, octa)
    return model


def _cn_model(table):
    def model(v, p):
        if p["ask"] != "cn" or p["lattice"] not in table:
            raise ValueError("a coordination-number mistake")
        return Integer(table[p["lattice"]])
    return model


MODELS = {
    "key": key,
    "C04-M1": _void_model(1, 2),  # swaps the counts: N tetrahedral, 2N octahedral
    "C04-M2": _void_model(Rational(1, 4), Rational(1, 6)),  # spheres divided by the spheres around one void
    "C04-M3": _void_model(3, 3),  # gives all 3N voids for one kind
    "C04-M4": _cn_model(OWN_LAYER),  # counts only the neighbours in the sphere's own layer
    "C04-M5": _cn_model({"sc": 12, "bcc": 12}),  # takes 12, the close-packed value, for every packing
    "C04-M6": _cn_model(PER_CELL),  # gives the particles per unit cell
}
