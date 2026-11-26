"""C10 Batteries and fuel cells: answer models (the key, and one per misconception).

Each answer is a named half reaction or overall reaction of a commercial cell (the book's forms).
params: ask "reaction"; cell ("lead" | "fuel" | "nicad"); process ("dis": giving current, "rech": recharging);
kind ("ox": the oxidation, at the anode | "red": the reduction, at the cathode).
"""
from sympy import Symbol

# REACTIONS[cell][process][kind]; "*_bare" is the reaction written without the electrolyte's ions.
REACTIONS = {
    "lead": {
        "dis": {"ox": "pb_dis_ox", "red": "pbo2_dis_red", "overall": "lead_dis_overall",
                "ox_bare": "pb_bare_ox", "red_bare": "pbo2_bare_red"},
        "rech": {"ox": "pbso4_rech_ox", "red": "pbso4_rech_red", "overall": "lead_rech_overall"},
    },
    "fuel": {"dis": {"ox": "h2_fuel_ox", "red": "o2_fuel_red", "overall": "fuel_overall", "ox_bare": "h2_bare_ox"}},
    "nicad": {"dis": {"ox": "cd_nicad_ox", "red": "nio2_nicad_red", "overall": "nicad_overall", "ox_bare": "cd_bare_ox"}},
}


def _solve(p, rule):
    if p["ask"] != "reaction":
        raise ValueError(f"unknown ask {p['ask']}")
    cell, process, kind = REACTIONS[p["cell"]], p["process"], p["kind"]
    if rule == "other_process":
        process = "rech" if process == "dis" else "dis"
    elif rule == "other_kind":
        kind = "red" if kind == "ox" else "ox"
    elif rule == "bare":
        kind = kind + "_bare"
    elif rule == "overall":
        kind = "overall"
    name = cell.get(process, {}).get(kind)
    if name is None:
        raise ValueError("does not apply to this item")
    return Symbol(name)


def _m(rule):
    return lambda v, p: _solve(p, rule)


MODELS = {
    "key": _m("key"),
    "C10-M1": _m("other_process"),  # mixes up discharging and recharging
    "C10-M2": _m("other_kind"),  # gives the other electrode's reaction
    "C10-M3": _m("bare"),  # leaves the electrolyte's ions out
    "C10-M4": _m("overall"),  # gives the overall cell reaction
}
