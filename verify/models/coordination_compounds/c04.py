"""C04 Classes of complexes: answer models (the key, and one per misconception).

Complexes use the C01 params (lig, out, charge). Every item asks for both classes at once, as a named
answer "<charge class>_<ligand class>": cationic / anionic / neutral, and homoleptic / heteroleptic.
"""
from sympy import Symbol

from .c01 import ION, LIG, counters, ligand_charge, ligands, ox_state, sphere_charge


def _charge_class(q):
    return "cationic" if q > 0 else ("anionic" if q < 0 else "neutral")


def _leptic(kinds):
    return "homoleptic" if len(set(kinds)) == 1 else "heteroleptic"


def _lig_kinds(p):
    return [k for k, _ in ligands(p)]


def _answer(cls, lep):
    return Symbol(f"{cls}_{lep}")


def _need_counters(p):
    if not counters(p):
        raise ValueError("no counter ions")


def key(v, p):
    return _answer(_charge_class(sphere_charge(p)), _leptic(_lig_kinds(p)))


def m1(v, p):
    """Classes the complex by the metal's own charge: a positive metal ion makes it cationic."""
    return _answer(_charge_class(ox_state(p)), _leptic(_lig_kinds(p)))


def m2(v, p):
    """Names the class after the counter ion: anions outside the bracket make it 'anionic'."""
    _need_counters(p)
    q = sum(ION[k][0] * n for k, n in counters(p))
    return _answer(_charge_class(q), _leptic(_lig_kinds(p)))


def m3(v, p):
    """Counts the counter ions as ligands when deciding homoleptic or heteroleptic."""
    _need_counters(p)
    return _answer(_charge_class(sphere_charge(p)), _leptic(_lig_kinds(p) + [k for k, _ in counters(p)]))


def m4(v, p):
    """Judges homoleptic by the donor atom, not the ligand: ligands bonding through the same element count as one kind."""
    return _answer(_charge_class(sphere_charge(p)), _leptic([LIG[k]["donor"] for k in _lig_kinds(p)]))


def m5(v, p):
    """Classes the complex by the sign of its ligands' total charge, ignoring the metal."""
    return _answer(_charge_class(ligand_charge(p)), _leptic(_lig_kinds(p)))


def m6(v, p):
    """Thinks the coordination sphere is neutral because the whole compound is neutral."""
    _need_counters(p)
    return _answer("neutral", _leptic(_lig_kinds(p)))


MODELS = {"key": key, "C04-M1": m1, "C04-M2": m2, "C04-M3": m3, "C04-M4": m4, "C04-M5": m5, "C04-M6": m6}
