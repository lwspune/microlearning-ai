"""C09 p-V, V-T and p-T diagrams: answer models (the key, and one per misconception).

Every item asks for the shape of a process on a diagram; params["ask"] picks which, and each model returns a named shape.
For an ideal gas, pV = nRT fixes them: an isobar is horizontal on p-V and p-T and a line through the origin on V-T;
an isochore is vertical on p-V, horizontal on V-T and a line through the origin on p-T; an isotherm is a hyperbola
on p-V and vertical on V-T and p-T.
  "isobar_VT":   an isobaric process on a V-T diagram;
  "isotherm_VT": an isothermal process on a V-T diagram;
  "cooling_pV":  an isochoric process in which the temperature falls, on a p-V diagram;
  "isochore_pT": an isochoric process on a p-T diagram;
  "isotherm_pV": an isothermal process on a p-V diagram.
"""
from sympy import Symbol

NAMED = {
    "isobar_VT": {"key": "through_origin", "C09-M1": "horizontal", "C09-M2": "vertical", "C09-M4": "hyperbola"},
    "isotherm_VT": {"key": "vertical", "C09-M2": "through_origin", "C09-M5": "horizontal", "C09-M3": "hyperbola"},
    "cooling_pV": {"key": "vertical_p_falls", "C09-M1": "horizontal_V_falls", "C09-M6": "vertical_p_rises", "C09-M5": "hyperbola"},
    "isochore_pT": {"key": "through_origin", "C09-M1": "horizontal", "C09-M5": "vertical", "C09-M4": "hyperbola"},
    "isotherm_pV": {"key": "hyperbola", "C09-M2": "horizontal", "C09-M5": "vertical", "C09-M7": "sloping_line"},
}


def _named(mid):
    def model(v, p):
        answers = NAMED.get(p["ask"], {})
        if mid not in answers:
            raise ValueError("does not apply to this item")
        return Symbol(answers[mid])
    return model


MODELS = {mid: _named(mid) for mid in ["key"] + [f"C09-M{i}" for i in range(1, 8)]}
