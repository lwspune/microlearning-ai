"""C07 Mass defect and binding energy: answer models (the key, and one per misconception).

E_B = (Z m_H + N m_n - M_atom) c^2 with atomic masses (or Z m_p with a bare nucleus), 1 u = 931.5 MeV.
params["ask"]:
  "BE_atom":  E_B, in MeV, from an atomic mass (inputs Z, A, M, mH, mn);
  "BE_nuc":   E_B, in MeV, from a nuclear mass (inputs Z, A, M, mp, mn, mH);
  "BEA":      E_B per nucleon, in MeV, from an atomic mass (inputs Z, A, M, mH, mn);
  "most":     the nucleus with the largest binding energy per nucleon (named).
"""
from sympy import Rational, Symbol

from physics import sig

C2 = Rational(9315, 10)  # MeV per u
NAMED = {"most": {"key": "iron56", "C07-M9": "uranium238", "C07-M10": "helium4", "C07-M11": "deuteron2"}}


def _solve(v, p, *, swap=False, no_c2=False, per_A=False, atom_mass=False, total=False, over_Z=False, over_N=False,
           whole=False):
    ask, n = p["ask"], p.get("sf", 3)
    Z, A, M = v["Z"], v["A"], v["M"]
    N = A - Z
    if ask in ("BE_atom", "BEA"):
        zp = v["mH"]
    else:
        zp = v["mH"] if atom_mass else v["mp"]
    if whole:
        return sig(M * C2, n)
    nz, nn = (N, Z) if swap else (Z, N)
    dm = nz * zp + nn * v["mn"] - M
    E = dm if no_c2 else dm * C2
    if ask == "BEA" and not total:
        return sig(E / Z if over_Z else (E / N if over_N else E / A), n)
    return sig(E / A if per_A else E, n)


def key(v, p):
    if p["ask"] in NAMED:
        return Symbol(NAMED[p["ask"]]["key"])
    return _solve(v, p)


def _m(mid, asks=(), **kw):
    def model(v, p):
        if p["ask"] in NAMED:
            if mid not in NAMED[p["ask"]]:
                raise ValueError("does not apply to this item")
            return Symbol(NAMED[p["ask"]][mid])
        if p["ask"] not in asks:
            raise ValueError("does not apply to this item")
        return _solve(v, p, **kw)
    return model


MODELS = {
    "key": key,
    "C07-M1": _m("C07-M1", ("BE_atom",), swap=True),  # swaps the numbers of protons and neutrons
    "C07-M2": _m("C07-M2", ("BE_atom", "BE_nuc"), no_c2=True),  # leaves the mass defect in u
    "C07-M3": _m("C07-M3", ("BE_atom",), per_A=True),  # gives the energy per nucleon
    "C07-M4": _m("C07-M4", ("BE_nuc",), atom_mass=True),  # uses the hydrogen atom's mass with a bare nucleus
    "C07-M5": _m("C07-M5", ("BE_nuc",), per_A=True),  # gives the energy per nucleon
    "C07-M6": _m("C07-M6", ("BEA",), total=True),  # gives the total, not per nucleon
    "C07-M7": _m("C07-M7", ("BEA",), over_Z=True),  # divides by Z
    "C07-M8": _m("C07-M8", ("BEA",), over_N=True),  # divides by N
    "C07-M9": _m("C07-M9"),  # thinks the biggest nucleus is the most tightly bound
    "C07-M10": _m("C07-M10"),  # thinks helium, being very stable, has the most per nucleon
    "C07-M11": _m("C07-M11"),  # thinks the smallest nucleus is the most tightly bound
    "C07-M12": _m("C07-M12", ("BE_nuc",), whole=True),  # takes the whole rest energy as the binding energy
}
