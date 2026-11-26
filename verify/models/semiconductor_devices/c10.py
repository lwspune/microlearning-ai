"""C10 NAND, NOR and XOR gates: answer models (the key, and one per misconception). Every item is named.

NAND = not(A and B); NOR = not(A or B); XOR = A B' + A' B (1 when the inputs differ); NAND and NOR are universal.
params["ask"]: "xor", "nand", "nor1", "xortable", "universal", "joined" (all named).
"""
from sympy import Symbol

NAMED = {
    "xor": {"key": "xor_expr", "C10-M1": "xnor_expr", "C10-M2": "or_expr", "C10-M3": "and_expr"},
    "nand": {"key": "nand_expr", "C10-M4": "split_bars", "C10-M5": "nor_expr", "C10-M6": "no_bar"},
    "nor1": {"key": "both_zero", "C10-M7": "both_one", "C10-M8": "any_one", "C10-M9": "differ"},
    "xortable": {"key": "t0110", "C10-M10": "t0111", "C10-M11": "t1001", "C10-M12": "t0001"},
    "universal": {"key": "nand_nor", "C10-M13": "and_or", "C10-M14": "not_only", "C10-M15": "xor_only"},
    "joined": {"key": "not_gate", "C10-M16": "and_gate", "C10-M17": "buffer", "C10-M18": "or_gate"},
}


def key(v, p):
    return Symbol(NAMED[p["ask"]]["key"])


def _m(mid):
    def model(v, p):
        if mid not in NAMED[p["ask"]]:
            raise ValueError("does not apply to this item")
        return Symbol(NAMED[p["ask"]][mid])
    return model


MODELS = {"key": key, **{f"C10-M{i}": _m(f"C10-M{i}") for i in range(1, 19)}}
# C10-M1 confuses XOR with XNOR; M2 with OR; M3 with AND.
# C10-M4 puts the bar on each input (De Morgan slip); M5 gives NOR; M6 forgets the NOT.
# C10-M7 confuses NOR with AND; M8 with OR; M9 with XOR.
# C10-M10 gives OR's column; M11 XNOR's; M12 AND's.
# C10-M13 thinks AND and OR are universal; M14 thinks NOT alone is; M15 thinks XOR is.
# C10-M16 thinks joined NAND inputs give AND; M17 a plain buffer; M18 OR.
