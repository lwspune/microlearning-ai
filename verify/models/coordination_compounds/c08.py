"""C08 Valence bond theory of complexes: answer models (the key, and one per misconception).

A complex is params: metal (symbol), lig ("NH3:6", ligands in the bracket), charge (on the complex ion).
The metal's oxidation state balances the ligands' charges; its d electron count is Z - 18 - (oxidation state).
The book's rule for the ligand: donor atom C, N or P is strong field (the 3d electrons pair up, inner orbital
d2sp3 or dsp2); a halogen, O or S donor is weak field (no pairing, outer orbital sp3d2 or sp3).
Unpaired electrons: octahedral strong field fills three orbitals in pairs first (t2g), then two more; weak field
follows Hund's rule over all five. Four-coordinate strong field (dsp2) pairs into four orbitals; weak field (sp3)
follows Hund's rule.
params["ask"]:
  "n":     number of unpaired electrons;
  "mu":    spin-only magnetic moment sqrt(n(n + 2)) in BM, to 3 significant figures;
  "shape": the geometry with the number of unpaired electrons, a named answer such as tetrahedral_2.
"""
from sympy import Symbol, sqrt

from chemistry import sig

# Atomic number and the neutral atom's 3d and 4s electrons.
METAL = {"Ti": (22, 2, 2), "V": (23, 3, 2), "Cr": (24, 5, 1), "Mn": (25, 5, 2), "Fe": (26, 6, 2),
         "Co": (27, 7, 2), "Ni": (28, 8, 2), "Cu": (29, 10, 1), "Zn": (30, 10, 2)}
# Ligand: charge, donor atom.
LIG = {"NH3": (0, "N"), "en": (0, "N"), "CN": (-1, "C"), "CO": (0, "C"), "H2O": (0, "O"), "ox": (-2, "O"),
       "F": (-1, "F"), "Cl": (-1, "Cl"), "Br": (-1, "Br"), "I": (-1, "I")}
DENT = {"en": 2, "ox": 2}
STRONG_DONORS = {"C", "N", "P"}


def ligands(p):
    out = []
    for part in p["lig"].split(","):
        k, n = part.split(":")
        out.append((k, int(n)))
    return out


def ox_state(p):
    return int(p["charge"]) - sum(LIG[k][0] * n for k, n in ligands(p))


def cn(p):
    return sum(DENT.get(k, 1) * n for k, n in ligands(p))


def strong(p):
    donors = {LIG[k][1] for k, _ in ligands(p)}
    return donors <= STRONG_DONORS


def d_ion(p):
    Z, _, _ = METAL[p["metal"]]
    return Z - 18 - ox_state(p)


def d_atom(p):
    return METAL[p["metal"]][1]


def d_3d_first(p):
    """Removes the ion's electrons from 3d, keeping 4s."""
    d = METAL[p["metal"]][1] - ox_state(p)
    if d < 0:
        raise ValueError("3d runs out")
    return d


def hund(d):
    return d if d <= 5 else 10 - d


def paired_into(d, k):
    """d electrons paired into k orbitals first, the rest Hund's rule over the remaining 5 - k."""
    low = min(d, 2 * k)
    rest = d - low
    return (low if low <= k else 2 * k - low) + (rest if rest <= 5 - k else 2 * (5 - k) - rest)


def unpaired(d, n_lig, is_strong):
    if not is_strong:
        return hund(d)
    return paired_into(d, 3) if n_lig == 6 else paired_into(d, 4)


def shape(n_lig, is_strong, d):
    if n_lig == 6:
        return "octahedral"
    return "square_planar" if is_strong and d == 8 else "tetrahedral"


def answer(p, d=None, is_strong=None, swap_shape=False, mu_slip=False):
    d = d_ion(p) if d is None else d
    is_strong = strong(p) if is_strong is None else is_strong
    n = unpaired(d, cn(p), is_strong)
    ask = p["ask"]
    if ask == "n":
        return n
    if ask == "mu":
        return sig(sqrt(n * (n + 1)) if mu_slip else sqrt(n * (n + 2)), 3)
    s = shape(cn(p), is_strong, d)
    if swap_shape:
        s = {"square_planar": "tetrahedral", "tetrahedral": "square_planar"}.get(s, s)
    return Symbol(f"{s}_{n}")


def key(v, p):
    return answer(p)


def m1(v, p):
    """Treats every ligand as weak field: never pairs the 3d electrons."""
    if not strong(p):
        raise ValueError("weak field already")
    return answer(p, is_strong=False)


def m2(v, p):
    """Treats every ligand as strong field: always pairs the 3d electrons."""
    if strong(p):
        raise ValueError("strong field already")
    return answer(p, is_strong=True)


def m3(v, p):
    """Uses the neutral atom's 3d electrons, forgetting the metal's oxidation state."""
    return answer(p, d=d_atom(p))


def m4(v, p):
    """Removes the ion's electrons from 3d instead of 4s."""
    return answer(p, d=d_3d_first(p))


def m5(v, p):
    """Swaps the shapes of sp3 and dsp2: takes sp3 as square planar and dsp2 as tetrahedral."""
    if p["ask"] != "shape" or cn(p) != 4:
        raise ValueError("does not apply")
    return answer(p, swap_shape=True)


def m6(v, p):
    """Uses sqrt(n(n + 1)) for the spin-only magnetic moment."""
    if p["ask"] != "mu":
        raise ValueError("does not apply")
    return answer(p, mu_slip=True)


MODELS = {"key": key, "C08-M1": m1, "C08-M2": m2, "C08-M3": m3, "C08-M4": m4, "C08-M5": m5, "C08-M6": m6}
