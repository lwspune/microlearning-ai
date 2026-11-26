"""C02 Crystal lattice and unit cells: answer models (the key, and one per misconception).

A cubic unit cell has particles at its 8 corners; bcc adds 1 at the body centre, fcc 1 at each of the 6 face
centres. params:
  ask="positions", cell: where the particles of that cell sit (named);
  ask="sites", cell: how many points of the cell carry a particle, each point counted once;
  ask="define": what a unit cell is (named).
Each position misconception is the cell the student pictures instead of the real one.
"""
from sympy import Integer, Symbol

SITES = {"corners": 8, "body": 1, "faces": 6}
CELL = {"simple": ("corners",), "bcc": ("corners", "body"), "fcc": ("corners", "faces")}


def _answer(parts, ask):
    if ask == "positions":
        return Symbol("_".join(parts))
    if ask == "sites":
        return Integer(sum(SITES[x] for x in parts))
    raise ValueError(f"unknown ask {ask}")


def key(v, p):
    if p["ask"] == "define":
        return Symbol("smallest_repeating_unit")
    return _answer(CELL[p["cell"]], p["ask"])


def _pictured(wrong):
    def model(v, p):
        if p["ask"] == "define":
            raise ValueError("a position mistake")
        return _answer(wrong(CELL[p["cell"]]), p["ask"])
    return model


def _swap(parts):
    """Body-centred read as face-centred and back: 'body' taken to mean the cube's faces."""
    if "body" not in parts and "faces" not in parts:
        raise ValueError("no centred particle to swap")
    return tuple({"body": "faces", "faces": "body"}.get(x, x) for x in parts)


def _corners_only(parts):
    """Ignores the centred particles: every cubic cell pictured as simple cubic."""
    if parts == ("corners",):
        raise ValueError("already simple cubic")
    return ("corners",)


def _drop_corners(parts):
    """Keeps only the centred particles, as if 'centred' meant 'at the centres only'."""
    if parts == ("corners",):
        raise ValueError("no centred particle")
    return tuple(x for x in parts if x != "corners")


def _defined(name):
    def model(v, p):
        if p["ask"] != "define":
            raise ValueError("a definition mistake")
        return Symbol(name)
    return model


MODELS = {
    "key": key,
    "C02-M1": _pictured(_swap),
    "C02-M2": _pictured(_corners_only),
    "C02-M3": _pictured(_drop_corners),
    "C02-M4": _defined("crystal_lattice"),  # takes the unit cell for the whole lattice
    "C02-M5": _defined("lattice_point"),  # takes it for a single lattice point
    "C02-M6": _defined("any_repeating_block"),  # any block that repeats, not the smallest
}
