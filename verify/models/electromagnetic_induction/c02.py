"""C02 Lenz's law: answer models (the key, and one per misconception). Every item is a named answer.

params["ask"] picks the situation:
  "in_N":  a magnet's N pole is pushed towards a coil (sense of the current seen from the magnet, and the near face);
  "out_N": a magnet's N pole is pulled away from a coil;
  "in_S":  a magnet's S pole is pushed towards a coil;
  "ring":  a magnet falls, N pole first, through a closed horizontal ring (its effect entering and leaving);
  "energy": why the induced current must oppose an approaching magnet;
  "sign":  what the minus sign in e = -N d(phi)/dt says.

The key follows Lenz's law: the induced current opposes the change of flux, so an approaching pole meets a like pole
(repelled) and a receding pole an unlike pole (attracted); a face round which the current runs anticlockwise, as
seen from that face, is a north pole.
"""
from sympy import Symbol

NAMED = {
    "in_N": {"key": "acw_N", "C02-M2": "cw_S", "C02-M3": "cw_N", "C02-M4": "none"},
    "out_N": {"key": "cw_S", "C02-M1": "acw_N", "C02-M3": "acw_S", "C02-M4": "none"},
    "in_S": {"key": "cw_S", "C02-M5": "acw_N", "C02-M3": "acw_S", "C02-M4": "none"},
    "ring": {"key": "slows_both", "C02-M2": "speeds_both", "C02-M1": "slows_then_speeds", "C02-M4": "free_fall"},
    "energy": {"key": "energy", "C02-M1": "opposite_field", "C02-M6": "charge", "C02-M7": "third_law"},
    "sign": {"key": "opposes_change", "C02-M1": "opposes_field", "C02-M8": "only_decrease", "C02-M9": "falls_with_time"},
}


def key(v, p):
    return Symbol(NAMED[p["ask"]]["key"])


def _m(mid):
    def model(v, p):
        if mid not in NAMED[p["ask"]]:
            raise ValueError("does not apply to this item")
        return Symbol(NAMED[p["ask"]][mid])
    return model


MODELS = {
    "key": key,
    "C02-M1": _m("C02-M1"),  # the induced field always opposes the magnet's field (the flux, not its change)
    "C02-M2": _m("C02-M2"),  # the induced current helps the change
    "C02-M3": _m("C02-M3"),  # clock rule reversed: clockwise seen from a face makes it N
    "C02-M4": _m("C02-M4"),  # no current unless the coil itself moves
    "C02-M5": _m("C02-M5"),  # treats every pole as a north pole
    "C02-M6": _m("C02-M6"),  # Lenz's law from conservation of charge
    "C02-M7": _m("C02-M7"),  # Newton's third law fixes the direction
    "C02-M8": _m("C02-M8"),  # the minus sign means only a falling flux induces an emf
    "C02-M9": _m("C02-M9"),  # the minus sign means the emf dies away with time
}
