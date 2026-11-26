"""C07 Potassium permanganate and dichromate: answer models (the key, and one per misconception).

params["ask"]:
  "ox":    oxidation state of the metal in params["sp"] (an oxoanion, SPECIES below):
           n x + (-2)(oxygens) = charge, so x = (charge + 2 O) / n;
  "e":     electrons one formula unit of params["sp"] gains in acid (MnO4- to Mn2+, Cr2O7^2- to Cr3+):
           n (x - final state);
  "ratio": moles of reductant params["red"] oxidised by params["mol"] moles of params["sp"] in acid:
           electrons gained / electrons each reductant gives (REDUCTANT).
"""
from sympy import Integer, Rational

# metal atoms, oxygen atoms, charge, metal, oxidation state the metal reaches in acid
SPECIES = {
    "MnO4-": (1, 4, -1, "Mn", 2),
    "MnO4^2-": (1, 4, -2, "Mn", 2),
    "Cr2O7^2-": (2, 7, -2, "Cr", 3),
}
# electrons given by one molecule (or ion) of reductant
REDUCTANT = {"H2C2O4": 2, "I-": 1, "H2S": 2, "Fe2+": 1}
# the other manganese oxoanion (permanganate <-> manganate)
SWAP = {"MnO4-": "MnO4^2-", "MnO4^2-": "MnO4-"}


def _ox(sp, charge_sign=1, n_atoms=True):
    n, o, q, _, _ = SPECIES[sp]
    return Rational(charge_sign * q + 2 * o, n if n_atoms else 1)


def _electrons(sp, start, end=None, per_formula=True):
    n, _, _, _, final = SPECIES[sp]
    end = final if end is None else end
    return (start - end) * (n if per_formula else 1)


def _answer(p, ox, electrons):
    """Turn a wrong (or right) oxidation-state rule and electron count into the asked quantity."""
    sp = p["sp"]
    if p["ask"] == "ox":
        return ox(sp)
    e = electrons(sp)
    if p["ask"] == "e":
        return Integer(e)
    return Rational(e * int(p["mol"]), REDUCTANT[p["red"]])


def key(v, p):
    return _answer(p, _ox, lambda sp: _electrons(sp, _ox(sp)))


def m1(v, p):
    """Ignores the ion's charge: sets the oxidation numbers to add up to zero."""
    ox = lambda sp: _ox(sp, charge_sign=0)
    return _answer(p, ox, lambda sp: _electrons(sp, ox(sp)))


def m2(v, p):
    """Forgets that Cr2O7^2- has two Cr atoms (does not divide, or multiply, by 2)."""
    if SPECIES[p["sp"]][0] == 1:
        raise ValueError("one metal atom")
    ox = lambda sp: _ox(sp, n_atoms=False)
    if p["ask"] == "ox":
        return ox(p["sp"])
    return _answer(p, _ox, lambda sp: _electrons(sp, _ox(sp), per_formula=False))


def m3(v, p):
    """Takes MnO2 (+4), the product in neutral solution, as the product in acid."""
    if SPECIES[p["sp"]][3] != "Mn" or p["ask"] == "ox":
        raise ValueError("permanganate in acid only")
    return _answer(p, _ox, lambda sp: _electrons(sp, _ox(sp), end=4))


def m4(v, p):
    """Mixes up permanganate (MnO4-, +7) and manganate (MnO4^2-, +6); in acid takes permanganate to manganate."""
    if SPECIES[p["sp"]][3] != "Mn":
        raise ValueError("manganese only")
    if p["ask"] == "ox":
        return _ox(SWAP[p["sp"]])
    return _answer(p, _ox, lambda sp: _electrons(sp, _ox(sp), end=6))


def m5(v, p):
    """Uses the ion's charge with the wrong sign when finding the oxidation state."""
    ox = lambda sp: _ox(sp, charge_sign=-1)
    return _answer(p, ox, lambda sp: _electrons(sp, ox(sp)))


MODELS = {"key": key, "C07-M1": m1, "C07-M2": m2, "C07-M3": m3, "C07-M4": m4, "C07-M5": m5}
