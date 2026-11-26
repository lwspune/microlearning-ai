"""C01 Classes of halogen derivatives: answer models (the key, and one per misconception).

Each item gives one halide as a small SMILES string in params["smiles"] (C, aromatic c, F, Cl, Br, I,
O; "=" for a double bond; branches in brackets; ring closures by digit). parse() turns it into atoms
and bonds; the key classifies the halide from the carbon that carries the halogen, and each
misconception classifies it by its own wrong rule. Answers are named Symbols (CLASS_TEXT).
C05 reuses parse() and groups() for chirality.
"""
import re

from sympy import Symbol

HALOGENS = {"F", "Cl", "Br", "I"}
VALENCE = {"C": 4, "c": 3, "O": 2, "F": 1, "Cl": 1, "Br": 1, "I": 1}

CLASS_TEXT = {
    "primary_alkyl": "a primary (1°) alkyl halide",
    "secondary_alkyl": "a secondary (2°) alkyl halide",
    "tertiary_alkyl": "a tertiary (3°) alkyl halide",
    "allylic": "an allylic halide",
    "benzylic": "a benzylic halide",
    "vinylic": "a vinylic halide",
    "aryl": "an aryl halide",
}
DEGREE = {1: "primary_alkyl", 2: "secondary_alkyl", 3: "tertiary_alkyl"}


def parse(smiles):
    """Atoms (list of element symbols, 'c' for aromatic carbon), bonds {i: {j: order}}, H counts."""
    tokens = re.findall(r"Cl|Br|[CcOFI]|[=()]|\d", smiles)
    atoms, bonds, stack, rings = [], {}, [], {}
    prev, order = None, 1
    for t in tokens:
        if t == "(":
            stack.append(prev)
        elif t == ")":
            prev = stack.pop()
        elif t == "=":
            order = 2
        elif t.isdigit():
            if t in rings:
                j = rings.pop(t)
                bonds[prev][j] = bonds[j][prev] = order
            else:
                rings[t] = prev
            order = 1
        else:
            i = len(atoms)
            atoms.append(t)
            bonds[i] = {}
            if prev is not None:
                bonds[prev][i] = bonds[i][prev] = order
            prev, order = i, 1
    hs = [VALENCE[a] - sum(bonds[i].values()) for i, a in enumerate(atoms)]
    assert all(h >= 0 for h in hs), f"bad valence in {smiles}"
    return atoms, bonds, hs


def _site(p):
    """The parsed molecule and the index of the carbon carrying the halogen."""
    atoms, bonds, hs = parse(p["smiles"])
    x = next(i for i, a in enumerate(atoms) if a in HALOGENS)
    (c,) = bonds[x]
    return atoms, bonds, hs, c


def _carbons(atoms, bonds, i):
    return [j for j in bonds[i] if atoms[j] in "Cc"]


def _has_cc_double(atoms, bonds, i):
    return any(o == 2 and atoms[j] == "C" for j, o in bonds[i].items())


def classify(p):
    """The book's classes, from the carbon C that carries X."""
    atoms, bonds, hs, c = _site(p)
    if atoms[c] == "c":
        return "aryl"
    if _has_cc_double(atoms, bonds, c):
        return "vinylic"
    nbrs = _carbons(atoms, bonds, c)
    if any(atoms[j] == "c" for j in nbrs):
        return "benzylic"
    if any(_has_cc_double(atoms, bonds, j) for j in nbrs):
        return "allylic"
    return DEGREE[len(nbrs)]


def _named(cls):
    return Symbol(cls)


def key(v, p):
    return _named(classify(p))


def m1(v, p):
    """Counts the hydrogen atoms on the C-X carbon instead of the carbon atoms: 2 H reads as
    secondary, 1 H as primary."""
    if not classify(p).endswith("_alkyl"):
        raise ValueError("not an alkyl halide")
    atoms, bonds, hs, c = _site(p)
    if hs[c] not in DEGREE:
        raise ValueError("no H to count")
    return _named(DEGREE[hs[c]])


def m2(v, p):
    """Calls a halide allylic or benzylic whenever the molecule has a C=C or a benzene ring,
    wherever the halogen sits."""
    if not classify(p).endswith("_alkyl"):
        raise ValueError("already a pi-system class")
    atoms, bonds, hs, c = _site(p)
    if "c" in atoms:
        return _named("benzylic")
    if any(_has_cc_double(atoms, bonds, i) for i in range(len(atoms))):
        return _named("allylic")
    raise ValueError("no C=C or ring")


SWAP_ON_NEXT = {"vinylic": "allylic", "allylic": "vinylic", "aryl": "benzylic", "benzylic": "aryl"}
SWAP_RING_CHAIN = {"vinylic": "aryl", "aryl": "vinylic", "allylic": "benzylic", "benzylic": "allylic"}


def m3(v, p):
    """Mixes up 'on' and 'next to': takes vinylic and aryl to mean the halogen is on the carbon next to
    the C=C or ring, and allylic and benzylic to mean it is on the C=C or ring carbon."""
    cls = classify(p)
    if cls not in SWAP_ON_NEXT:
        raise ValueError("alkyl halide")
    return _named(SWAP_ON_NEXT[cls])


def m4(v, p):
    """Mixes up the ring and chain names: vinylic for a ring carbon, aryl for a C=C carbon, and
    likewise benzylic and allylic."""
    cls = classify(p)
    if cls not in SWAP_RING_CHAIN:
        raise ValueError("alkyl halide")
    return _named(SWAP_RING_CHAIN[cls])


def m5(v, p):
    """Ignores the C=C or ring and names every halide by the number of carbons on the C-X carbon."""
    if classify(p).endswith("_alkyl"):
        raise ValueError("same as the key")
    atoms, bonds, hs, c = _site(p)
    return _named(DEGREE[len(_carbons(atoms, bonds, c))])


def m6(v, p):
    """Counts the halogen as one of the groups on the C-X carbon, so every degree comes out one too high."""
    cls = classify(p)
    if not cls.endswith("_alkyl"):
        raise ValueError("not an alkyl halide")
    atoms, bonds, hs, c = _site(p)
    d = len(_carbons(atoms, bonds, c)) + 1
    if d not in DEGREE:
        raise ValueError("no class beyond tertiary")
    return _named(DEGREE[d])


MODELS = {"key": key, "C01-M1": m1, "C01-M2": m2, "C01-M3": m3, "C01-M4": m4, "C01-M5": m5, "C01-M6": m6}
