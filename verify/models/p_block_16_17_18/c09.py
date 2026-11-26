"""C09 Interhalogen compounds: answer models (the key, and one per misconception).

params["ask"]:
  "lp_shape": lone pairs on the central atom and the shape of a species (params: n bonded atoms, charge).
  "shape":    the shape alone (params: n, charge).
  "product":  the interhalogen formed with the second halogen in excess, and its shape
              (params: x the larger halogen, y the smaller, n the atoms of y in the product).
The central halogen has 7 valence electrons; each bonded halogen takes one of them in a single bond.
"""
from sympy import Symbol

# shape of the atoms from (bond pairs, lone pairs); lone pairs equatorial in a trigonal bipyramid,
# opposite each other in an octahedron
_SHAPE = {
    (1, 0): "linear", (2, 0): "linear", (3, 0): "trigonal_planar", (4, 0): "tetrahedral",
    (5, 0): "trigonal_bipyramidal", (6, 0): "octahedral", (7, 0): "pentagonal_bipyramidal",
    (1, 3): "linear", (2, 3): "linear", (3, 2): "t_shaped", (4, 1): "see_saw",
    (5, 1): "square_pyramidal", (4, 2): "square_planar", (2, 1): "bent", (2, 2): "bent",
    (3, 1): "trigonal_pyramidal",
}
# electron-pair geometry from the total number of pairs
_GEOMETRY = {2: "linear", 3: "trigonal_planar", 4: "tetrahedral", 5: "trigonal_bipyramidal", 6: "octahedral",
             7: "pentagonal_bipyramidal"}
# a trigonal bipyramid with the lone pairs put axial first
_AXIAL = {(3, 2): "trigonal_planar", (2, 3): "bent", (4, 1): "trigonal_pyramidal"}


def _pairs(n, charge, rule):
    electrons = 7 - n if rule == "ignore_charge" else 7 - charge - n
    return n, electrons // 2


def _shape(bp, lp, rule):
    if rule == "no_lone_pairs":
        return _SHAPE[(bp, 0)]
    if rule == "geometry":
        return _GEOMETRY[bp + lp]
    if rule == "axial":
        if (bp, lp) not in _AXIAL:
            raise ValueError("no trigonal bipyramid")
        return _AXIAL[(bp, lp)]
    return _SHAPE[(bp, lp)]


def _species(n, charge, rule):
    bp, lp = _pairs(n, charge, rule)
    shape = _shape(bp, lp, rule)
    if rule == "ignore_charge" and lp == (7 - charge - n) // 2:
        raise ValueError("charge makes no difference")
    shown_lp = 0 if rule == "no_lone_pairs" else lp
    return shown_lp, shape


def _answer(p, rule):
    ask = p["ask"]
    if ask in ("lp_shape", "shape"):
        if rule in ("reverse_roles", "one_to_one"):
            raise ValueError("does not apply")
        n, charge = int(p["n"]), int(p.get("charge", "0"))
        lp, shape = _species(n, charge, rule)
        return Symbol(shape if ask == "shape" else f"lp{lp}_{shape}")
    if ask == "product":
        if rule in ("axial", "ignore_charge"):
            raise ValueError("does not apply")
        x, y, n = p["x"], p["y"], int(p["n"])
        if rule == "one_to_one":           # proportions ignored: always XX'
            n = 1
        centre, ligand = (y, x) if rule == "reverse_roles" else (x, y)
        bp, lp = _pairs(n, 0, rule)
        formula = centre + (ligand + str(n) if n > 1 else ligand)
        return Symbol(f"{formula.lower()}_{_shape(bp, lp, rule)}")
    raise ValueError(ask)


def key(v, p):
    return _answer(p, "key")


def m1(v, p):  # the smaller, more electronegative halogen taken as central
    return _answer(p, "reverse_roles")


def m2(v, p):  # lone pairs ignored
    return _answer(p, "no_lone_pairs")


def m3(v, p):  # electron-pair geometry given as the shape
    return _answer(p, "geometry")


def m4(v, p):  # lone pairs put axial in a trigonal bipyramid
    return _answer(p, "axial")


def m5(v, p):  # the ion's charge ignored when counting electrons
    return _answer(p, "ignore_charge")


def m6(v, p):  # proportions ignored: always the 1:1 compound
    return _answer(p, "one_to_one")


MODELS = {"key": key, "C09-M1": m1, "C09-M2": m2, "C09-M3": m3, "C09-M4": m4, "C09-M5": m5, "C09-M6": m6}
