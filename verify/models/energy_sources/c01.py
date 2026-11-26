"""C01 Sources of energy: answer models (the key, and one per misconception).

Every item is a named answer: params["ask"] picks the question, and each model returns the option a student
with that idea picks.
  "nonconv": which source is non-conventional;   "renew": which source is renewable;
  "reactor": the principle of a nuclear reactor;  "parts": what a nuclear power plant does not have;
  "biogas": what biogas is and how it is made;    "solar": what a solar cell does.
"""
from sympy import Symbol

NAMED = {
    "nonconv": {"key": "tidal", "C01-M2": "coal", "C01-M3": "hydro_dam", "C01-M4": "natural_gas"},
    "renew": {"key": "wind", "C01-M1": "uranium", "C01-M2": "coal", "C01-M4": "natural_gas"},
    "reactor": {"key": "controlled_fission", "C01-M5": "controlled_fusion", "C01-M6": "uncontrolled_fission",
                "C01-M7": "burning_uranium"},
    "parts": {"key": "co2_control", "C01-M11": "turbine", "C01-M6": "control_rods", "C01-M5": "splitting_core"},
    "biogas": {"key": "methane_bacteria", "C01-M8": "mostly_co2", "C01-M7": "burnt_waste",
               "C01-M1": "nonrenewable_gas"},
    "solar": {"key": "light_to_elec", "C01-M9": "stores_light", "C01-M10": "heat_to_elec",
              "C01-M12": "elec_to_light"},
}


def key(v, p):
    if p["ask"] in NAMED:
        return Symbol(NAMED[p["ask"]]["key"])
    raise ValueError(f"unknown ask {p['ask']}")


def _m(mid):
    def model(v, p):
        if mid not in NAMED.get(p["ask"], {}):
            raise ValueError("does not apply to this item")
        return Symbol(NAMED[p["ask"]][mid])
    return model


MODELS = {
    "key": key,
    "C01-M1": _m("C01-M1"),  # judges "renewable" by how much energy or how long a supply lasts
    "C01-M2": _m("C01-M2"),  # lumps fossil fuels in with biomass: renewable, non-conventional
    "C01-M3": _m("C01-M3"),  # hydro power from a dam is non-conventional, like tidal power
    "C01-M4": _m("C01-M4"),  # takes clean for renewable: natural gas is a green source
    "C01-M5": _m("C01-M5"),  # swaps fission and fusion: a reactor joins nuclei
    "C01-M6": _m("C01-M6"),  # a reactor's chain reaction runs unchecked, as in a bomb
    "C01-M7": _m("C01-M7"),  # every fuel gives its energy by burning
    "C01-M8": _m("C01-M8"),  # biogas is mostly carbon dioxide
    "C01-M9": _m("C01-M9"),  # a solar cell stores light, as a battery stores charge
    "C01-M10": _m("C01-M10"),  # a solar cell runs on the Sun's heat, like a solar cooker
    "C01-M11": _m("C01-M11"),  # a power plant turns its fuel's energy straight into electricity
    "C01-M12": _m("C01-M12"),  # reads a conversion backwards: output for input
}
