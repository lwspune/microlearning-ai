"""C06 Galvanic cells: answer models (the key, and one per misconception).

The anode (oxidation, negative) is written on the left, the cathode (reduction, positive) on the right; a single
vertical line is a phase boundary, the double line the salt bridge. Electrons flow in the external wire; ions carry
the charge in the solutions and the salt bridge.
params["ask"]:
  "formula":   the cell formula from its two half reactions (params an, cat: the anode and cathode metals);
               named like Mg_s_Mgi_d_Aui_s_Au (s single line, d double line, i the metal's ion);
  "lines":     what the single and double vertical lines stand for (named);
  "electrode": a statement about one electrode of a written cell (params side: "left" or "right").
"""
from sympy import Symbol


def _formula(an, cat, *, reverse=False, swap_lines=False, ion_first=False):
    if reverse:  # the cathode written on the left
        an, cat = cat, an
    s, d = ("d", "s") if swap_lines else ("s", "d")
    left = f"{an}i_{s}_{an}" if ion_first else f"{an}_{s}_{an}i"
    return Symbol(f"{left}_{d}_{cat}i_{s}_{cat}")


LINES = {"key": "single_phase_double_bridge", "C06-M3": "double_cathode_left", "C06-M4": "double_electron_path",
         "C06-M5": "single_bridge_double_phase"}

# The statement each model makes about the left (anode) or right (cathode) electrode.
ELECTRODE = {
    "key": {"left": "anode_neg_ox", "right": "cathode_pos_red"},
    "C06-M1": {"left": "anode_pos_ox", "right": "cathode_neg_red"},  # galvanic signs taken from electrolysis
    "C06-M2": {"left": "cathode_ox", "right": "anode_red"},  # oxidation called the cathode's process
    "C06-M3": {"left": "cathode_pos_red", "right": "anode_neg_ox"},  # the right-hand electrode read as the anode
    "C06-M4": {"left": "anode_e_bridge", "right": "cathode_e_bridge"},  # electrons pass through the salt bridge
}


def _solve(mid, v, p):
    ask = p["ask"]
    if ask == "formula":
        kw = {"C06-M3": dict(reverse=True), "C06-M5": dict(swap_lines=True), "C06-M6": dict(ion_first=True)}
        if mid != "key" and mid not in kw:
            raise ValueError("does not apply to this item")
        return _formula(p["an"], p["cat"], **kw.get(mid, {}))
    if ask == "lines":
        if mid not in LINES:
            raise ValueError("does not apply to this item")
        return Symbol(LINES[mid])
    if ask == "electrode":
        if mid not in ELECTRODE:
            raise ValueError("does not apply to this item")
        return Symbol(ELECTRODE[mid][p["side"]])
    raise ValueError(f"unknown ask {ask}")


def _m(mid):
    return lambda v, p: _solve(mid, v, p)


MODELS = {"key": _m("key"), **{f"C06-M{i}": _m(f"C06-M{i}") for i in range(1, 7)}}
