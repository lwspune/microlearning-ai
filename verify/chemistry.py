"""Helpers the chemistry models share: the books' constants and rounded atomic masses.

Answers are rounded with `sig` (from physics.py), so key, distractors and verifier compare the same number.
"""
import re

from sympy import Float, Integer, Rational

from physics import sig  # noqa: F401  (re-exported for chemistry models)

# The constants as the Std XI and XII Chemistry books print them; add one here, from the book, when a chapter needs it.
BOOK = {
    "N_A": Float("6.022e23"),  # per mol
    "R": Float("8.314"),  # J/(K mol)
    "R_atm": Float("0.0821"),  # L atm/(K mol)
    "F": Integer(96500),  # C/mol, one faraday
    "V_m": Float("22.4"),  # L/mol (dm^3/mol), an ideal gas at STP
    "nernst": Float("0.0592"),  # V, 2.303RT/F at 298 K
    "K_w": Rational(1, 10**14),  # ionic product of water at 298 K
    "h": Float("6.626e-34"),  # J s
    "c": Integer(3) * 10**8,  # m/s
}

# Atomic masses as the books round them in calculations (g/mol); exact Rationals so molar masses stay exact.
MASS = {
    "H": Integer(1), "He": Integer(4), "Li": Integer(7), "Be": Integer(9), "B": Integer(11), "C": Integer(12),
    "N": Integer(14), "O": Integer(16), "F": Integer(19), "Ne": Integer(20), "Na": Integer(23), "Mg": Integer(24),
    "Al": Integer(27), "Si": Integer(28), "P": Integer(31), "S": Integer(32), "Cl": Rational(71, 2), "Ar": Integer(40),
    "K": Integer(39), "Ca": Integer(40), "Cr": Integer(52), "Mn": Integer(55), "Fe": Integer(56), "Co": Integer(59),
    "Ni": Integer(59), "Cu": Rational(127, 2), "Zn": Rational(131, 2), "Br": Integer(80), "Ag": Integer(108),
    "Sn": Integer(119), "I": Integer(127), "Ba": Integer(137), "Pt": Integer(195), "Au": Integer(197), "Hg": Integer(201),
    "Pb": Integer(207), "U": Integer(238),
}

_TOKEN = re.compile(r"([A-Z][a-z]?|\(|\)|\d+|\.)")


def molar_mass(formula: str):
    """Molar mass of a formula like "H2SO4", "Ca(OH)2" or a hydrate "CuSO4.5H2O", from MASS (KeyError if unknown)."""
    total = Integer(0)
    for part_i, part in enumerate(formula.split(".")):
        m = re.match(r"(\d+)(.*)", part) if part_i else None
        mult, body = (Integer(m.group(1)), m.group(2)) if m else (Integer(1), part)
        total += mult * _mass(body)
    return total


def _mass(body: str):
    stack = [Integer(0)]
    tokens = _TOKEN.findall(body)
    if "".join(tokens) != body:
        raise KeyError(f"cannot read formula {body!r}")
    i = 0
    while i < len(tokens):
        t = tokens[i]
        n = Integer(int(tokens[i + 1])) if i + 1 < len(tokens) and tokens[i + 1].isdigit() else None
        if t == "(":
            stack.append(Integer(0))
        elif t == ")":
            group = stack.pop()
            stack[-1] += group * (n or 1)
        elif t[0].isalpha():
            stack[-1] += MASS[t] * (n or 1)
        if n is not None:
            i += 1
        i += 1
    return stack[0]
