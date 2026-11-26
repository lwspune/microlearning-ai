"""C03 Reflection of waves: answer models (the key, and one per misconception). Every item is a named answer.

params["ask"] picks the situation:
  "rigid_sound":  sound in air reflected from a rigid wall (a denser medium);
  "rigid_string": a transverse pulse reaching a string's end fixed to a rigid support;
  "open_pipe":    sound reaching the open end of a pipe (a rarer medium);
  "joint_dense":  a transverse wave on a light string reaching a joint with a heavier string (denser);
  "free_ring":    a transverse pulse reaching a string's end tied to a ring that slides freely (a free end).

The key: from a denser medium or rigid end the displacement changes phase by pi (a crest returns as a trough; for sound
a compression returns as a compression); from a rarer medium or free end there is no phase change (a crest returns as a
crest; a compression returns as a rarefaction). The reflected wave stays in the same medium, so its speed, frequency
and wavelength are unchanged, and with no loss its amplitude is too.
"""
from sympy import Symbol

NAMED = {
    "rigid_sound": {"key": "comp_pi", "C03-M1": "rare_none", "C03-M2": "rare_pi", "C03-M3": "comp_slower"},
    "rigid_string": {"key": "trough_same", "C03-M1": "crest_same", "C03-M3": "trough_slower", "C03-M4": "trough_double"},
    "open_pipe": {"key": "rare_none", "C03-M1": "comp_pi", "C03-M2": "comp_none", "C03-M4": "rare_double"},
    "joint_dense": {"key": "inverted_same", "C03-M1": "upright_same", "C03-M3": "inverted_slower", "C03-M4": "inverted_double"},
    "free_ring": {"key": "upright_same", "C03-M1": "inverted_same", "C03-M3": "upright_slower", "C03-M4": "upright_double"},
}


def key(v, p):
    return Symbol(NAMED[p["ask"]]["key"])


def _m(mid):
    def model(v, p):
        table = NAMED[p["ask"]]
        if mid not in table:
            raise ValueError("does not apply to this item")
        return Symbol(table[mid])
    return model


MODELS = {
    "key": key,
    "C03-M1": _m("C03-M1"),  # swaps the rules for a denser (rigid) and a rarer (free) boundary
    "C03-M2": _m("C03-M2"),  # applies the crest-to-trough rule to compressions
    "C03-M3": _m("C03-M3"),  # thinks the reflected wave travels more slowly
    "C03-M4": _m("C03-M4"),  # takes the doubled displacement at the boundary as a reflected wave of double amplitude
}
