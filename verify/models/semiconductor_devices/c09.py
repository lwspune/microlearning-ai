"""C09 Logic gates OR, AND and NOT: answer models (the key, and one per misconception). Every item is named.

OR: Y = A + B (1 when at least one input is 1); AND: Y = A . B (1 only when both are 1); NOT: Y = A' (the opposite).
Truth-table answers name the output column for AB = 00, 01, 10, 11 (t0111 is 0, 1, 1, 1).
params["ask"]:
  "gate":     what a logic gate is (Ex Q.1 (iv));
  "expr":     the gate whose expression is Y = A + B;
  "atleast":  the outputs of a gate that is high when at least one input is high;
  "inverter": why a NOT gate is called an inverter;
  "combo":    the outputs of Y = A' . B (A through a NOT gate, then an AND gate with B).
"""
from sympy import Symbol

NAMED = {
    "gate": {"key": "decisions", "C09-M6": "one_direction", "C09-M7": "alternates", "C09-M8": "amplifies"},
    "expr": {"key": "or_gate", "C09-M1": "and_gate", "C09-M9": "nor_gate", "C09-M3": "arith_sum"},
    "atleast": {"key": "t0111", "C09-M1": "t0001", "C09-M2": "t0110", "C09-M3": "t0112"},
    "inverter": {"key": "complement", "C09-M10": "reverse_order", "C09-M11": "dc_to_ac", "C09-M12": "reverse_current"},
    "combo": {"key": "c0100", "C09-M4": "c0001", "C09-M1": "c1101", "C09-M5": "c1110"},
}


def key(v, p):
    return Symbol(NAMED[p["ask"]]["key"])


def _m(mid):
    def model(v, p):
        if mid not in NAMED[p["ask"]]:
            raise ValueError("does not apply to this item")
        return Symbol(NAMED[p["ask"]][mid])
    return model


MODELS = {"key": key, **{f"C09-M{i}": _m(f"C09-M{i}") for i in range(1, 13)}}
# C09-M1 swaps the rules of OR and AND; M2 reads OR as "exactly one"; M3 adds 0s and 1s as numbers (1 + 1 = 2).
# C09-M4 takes NOT as passing its input unchanged; M5 puts the NOT after the AND gate instead of on input A.
# C09-M6 confuses a gate with a diode; M7 thinks a gate's output switches by itself; M8 thinks a gate amplifies.
# C09-M9 ignores whether an expression carries a bar (confuses OR with NOR).
# C09-M10 thinks "inverter" means reversing the order of inputs; M11 confuses it with a DC-to-AC inverter;
# M12 thinks it reverses the direction of the current.
