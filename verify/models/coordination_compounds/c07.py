"""C07 Geometric and optical isomers: answer models (the key, and one per misconception).

Complexes are codes in CX: shape (sq square planar, td tetrahedral, oh octahedral), the book's type
(MA2B2, MA5B, MA4B2, M(AA)3 ...), the isomer named in the item (cis / trans / None), and whether it has a
chelating ligand. Facts from the definitions:
  geometric (cis-trans) isomers: square planar MA2B2 or MA2BC, octahedral MA4B2, M(AA)2B2, M(AA)2BC;
  chiral: M(AA)3, and the cis form of M(AA)2B2 or M(AA)2BC (the trans form has a mirror plane).
params["ask"]:
  "geo":     which of params["opts"] (codes, comma separated) exists as cis and trans isomers;
  "chiral":  which of params["opts"] is chiral;
  "outcome": which stereoisomers params["cx"] shows, a named answer:
             cis_trans (cis and trans, neither chiral), cis_chiral (cis and trans, the cis form a pair of
             enantiomers), enantiomers (only a d, l pair), both_chiral (cis and trans, both chiral), no_isomers.
"""
from sympy import Symbol

CX = {
    "PtCl2Br2": dict(shape="sq", type="MA2B2", form=None, chelate=False),
    "PtNH32Cl2": dict(shape="sq", type="MA2B2", form=None, chelate=False),
    "cisPtNH32Cl2": dict(shape="sq", type="MA2B2", form="cis", chelate=False),
    "transPtNH32Cl2": dict(shape="sq", type="MA2B2", form="trans", chelate=False),
    "FeCl2NCS2": dict(shape="td", type="MA2B2", form=None, chelate=False),
    "ZnNH32Cl2": dict(shape="td", type="MA2B2", form=None, chelate=False),
    "CoNH35Br": dict(shape="oh", type="MA5B", form=None, chelate=False),
    "CoNH35Cl": dict(shape="oh", type="MA5B", form=None, chelate=False),
    "CoNH34Cl2": dict(shape="oh", type="MA4B2", form=None, chelate=False),
    "cisCoNH34Cl2": dict(shape="oh", type="MA4B2", form="cis", chelate=False),
    "transCoNH34Cl2": dict(shape="oh", type="MA4B2", form="trans", chelate=False),
    "Coen3": dict(shape="oh", type="MAA3", form=None, chelate=True),
    "Crox3": dict(shape="oh", type="MAA3", form=None, chelate=True),
    "PtenCl2": dict(shape="sq", type="MAAB2", form=None, chelate=True),
    "transCoen2Cl2": dict(shape="oh", type="MAA2B2", form="trans", chelate=True),
    "cisCoen2Cl2": dict(shape="oh", type="MAA2B2", form="cis", chelate=True),
    "Pten2ClBr": dict(shape="oh", type="MAA2BC", form=None, chelate=True),
    "Cren2H2O2": dict(shape="oh", type="MAA2B2", form=None, chelate=True),
}

GEO_TYPES = {("sq", "MA2B2"), ("sq", "MA2BC"), ("oh", "MA4B2"), ("oh", "MAA2B2"), ("oh", "MAA2BC")}


def has_geo(c):
    return (c["shape"], c["type"]) in GEO_TYPES


def chiral(c):
    return c["type"] == "MAA3" or (c["type"] in ("MAA2B2", "MAA2BC") and c["form"] == "cis")


def outcome(c):
    if c["type"] in ("MAA2B2", "MAA2BC"):
        return "cis_chiral"
    if has_geo(c):
        return "cis_trans"
    return "enantiomers" if c["type"] == "MAA3" else "no_isomers"


def _opts(p):
    return p["opts"].split(",")


def _pick(p, test):
    hits = [o for o in _opts(p) if test(CX[o])]
    if len(hits) != 1:
        raise ValueError(f"{len(hits)} options fit")
    return Symbol(hits[0])


def key(v, p):
    if p["ask"] == "geo":
        return _pick(p, has_geo)
    if p["ask"] == "chiral":
        return _pick(p, chiral)
    return Symbol(outcome(CX[p["cx"]]))


def _only(ask, fn):
    def model(v, p):
        if p["ask"] != ask:
            raise ValueError("does not apply to this item")
        return fn(p)
    return model


def m1(p):
    """Gives a tetrahedral MA2B2 cis and trans forms, as if it were square planar."""
    return _pick(p, lambda c: c["shape"] == "td" and c["type"] == "MA2B2")


def m2(p):
    """Thinks any complex with two kinds of ligand has cis and trans forms, even MA5B with a single B."""
    return _pick(p, lambda c: c["type"] == "MA5B")


def m3(v, p):
    """Takes geometric and optical isomers to be the same thing: cis and trans forms are a mirror-image pair."""
    if p["ask"] == "geo":
        return _pick(p, lambda c: chiral(c) and not has_geo(c))
    if p["ask"] == "chiral":
        return _pick(p, lambda c: c["form"] == "trans" and not c["chelate"])
    o = outcome(CX[p["cx"]])
    swap = {"cis_trans": "enantiomers", "enantiomers": "cis_trans", "cis_chiral": "enantiomers"}
    if o not in swap:
        raise ValueError("does not apply")
    return Symbol(swap[o])


def m4(v, p):
    """Thinks every complex with a chelating ligand is chiral, missing the mirror plane of a trans or flat one."""
    if p["ask"] == "chiral":
        return _pick(p, lambda c: c["chelate"] and not chiral(c))
    if p["ask"] == "outcome":
        o = {"cis_chiral": "both_chiral", "no_isomers": "enantiomers"}.get(outcome(CX[p["cx"]]))
        if o and CX[p["cx"]]["chelate"]:
            return Symbol(o)
    raise ValueError("does not apply")


def m5(p):
    """Thinks every cis isomer is chiral, even cis-MA4B2 or a square planar cis form, which have mirror planes."""
    return _pick(p, lambda c: c["form"] == "cis" and not c["chelate"])


def m6(p):
    """Counts only the cis and trans forms, forgetting that a chiral form is a pair of enantiomers."""
    o = {"cis_chiral": "cis_trans", "enantiomers": "no_isomers"}.get(outcome(CX[p["cx"]]))
    if not o:
        raise ValueError("does not apply")
    return Symbol(o)


MODELS = {
    "key": key,
    "C07-M1": _only("geo", m1),
    "C07-M2": _only("geo", m2),
    "C07-M3": m3,
    "C07-M4": m4,
    "C07-M5": _only("chiral", m5),
    "C07-M6": _only("outcome", m6),
}
