"""C03 Formal charge. FC = V - N - B/2 (V valence electrons of the free atom, N non-bonding electrons, B bonding
electrons around the atom). The preferred structure has the smallest formal charges, any negative charge on the more
electronegative atom.
params["q"]:
  "fc": inputs V, N, B. "best": named.
M1 subtracts all the bonding electrons; M2 leaves out the non-bonding electrons; M3 counts lone pairs instead of lone
electrons; M4 prefers the most bonds; M5 prefers the largest charges; M6 puts positive charge on the more electronegative
atom."""
from chemistry import sig

from ._mix import mixed_models

TABLE = {
    "fc": {"key": lambda v: sig(v["V"] - v["N"] - v["B"] / 2), "C03-M1": lambda v: sig(v["V"] - v["N"] - v["B"]),
           "C03-M2": lambda v: sig(v["V"] - v["B"] / 2), "C03-M3": lambda v: sig(v["V"] - v["N"] / 2 - v["B"] / 2)},
    "best": {"key": "smallest_charges", "C03-M4": "most_bonds", "C03-M5": "largest_charges", "C03-M6": "positive_on_en"},
}
MODELS = mixed_models("C03", TABLE, 6)
