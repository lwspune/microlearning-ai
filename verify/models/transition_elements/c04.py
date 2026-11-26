"""C04 Magnetic moment and colour: answer models (the key, and one per misconception).

params["ask"]:
  "mu":     the spin-only magnetic moment (B.M.) of the ion M^q+ (params "Z", "q"), mu = sqrt(n(n + 2)),
            rounded with sig() to 3 figures;
  "colour": how many of the ions params["ions"] ("21:3,22:4,...") give coloured salts: a partly filled
            3d subshell (d1 to d9) is coloured, d0 and d10 are colourless.
"""
from sympy import Integer, sqrt

from chemistry import sig

from .c01 import ATOM, ion_cfg, unpaired


def _zq(p):
    return int(p["Z"]), int(p["q"])


def _ions(p):
    return [tuple(int(x) for x in pair.split(":")) for pair in p["ions"].split(",")]


def _n(cfg):
    """Unpaired electrons of a configuration (d, s): Hund's rule in 3d, plus a lone 4s electron."""
    d, s = cfg
    return unpaired(d) + (1 if s == 1 else 0)


def _mu(n):
    return sig(sqrt(n * (n + 2)))


def _coloured(d):
    return 0 < d < 10


def _count(p, d_of, test=_coloured):
    return Integer(sum(1 for Z, q in _ions(p) if test(d_of(Z, q))))


def key(v, p):
    if p["ask"] == "mu":
        return _mu(_n(ion_cfg(*_zq(p))))
    return _count(p, lambda Z, q: ion_cfg(Z, q)[0])


def m1(v, p):
    """Takes the ion's electrons from 3d first (because 3d fills after 4s), then counts unpaired electrons."""
    if p["ask"] == "mu":
        return _mu(_n(ion_cfg(*_zq(p), first="3d")))
    return _count(p, lambda Z, q: ion_cfg(Z, q, "3d")[0])


def m2(v, p):
    """Counts every d electron as unpaired, ignoring pairing beyond d5 (Hund's rule)."""
    if p["ask"] != "mu":
        raise ValueError("does not apply")
    d, s = ion_cfg(*_zq(p))
    if d <= 5:
        raise ValueError("no pairing to ignore")
    return _mu(d)


def m3(v, p):
    """Takes the moment in B.M. to equal the number of unpaired electrons, mu = n."""
    if p["ask"] != "mu":
        raise ValueError("does not apply")
    return Integer(_n(ion_cfg(*_zq(p))))


def m4(v, p):
    """Forgets the square root, taking mu = n(n + 2)."""
    if p["ask"] != "mu":
        raise ValueError("does not apply")
    n = _n(ion_cfg(*_zq(p)))
    return Integer(n * (n + 2))


def m5(v, p):
    """Thinks any ion with d electrons is coloured, so a full d10 ion is coloured too (only d0 is colourless)."""
    if p["ask"] != "colour":
        raise ValueError("does not apply")
    return _count(p, lambda Z, q: ion_cfg(Z, q)[0], test=lambda d: d > 0)


def m6(v, p):
    """Thinks an ion loses only its 4s electrons, whatever its charge: its 3d count stays the atom's."""
    if p["ask"] == "mu":
        Z, q = _zq(p)
        d, s = ATOM[Z]
        if q <= s:
            raise ValueError("charge does not exceed the 4s electrons")
        return _mu(unpaired(d))
    return _count(p, lambda Z, q: ATOM[Z][0])


MODELS = {"key": key, "C04-M1": m1, "C04-M2": m2, "C04-M3": m3, "C04-M4": m4, "C04-M5": m5, "C04-M6": m6}
