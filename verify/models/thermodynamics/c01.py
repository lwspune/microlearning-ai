"""C01 Systems and thermal equilibrium: answer models (the key, and one per misconception).

Every item here is conceptual; params["ask"] picks the question and each model returns a named answer:
  "zeroth":      which law says two systems each in equilibrium with a third are in equilibrium with each other;
  "surroundings": what the surroundings of a system are;
  "closed":      what kind of system a sealed pressure cooker on a stove is;
  "mechanical":  when a system is in mechanical equilibrium;
  "thermal":     when a system is in thermal equilibrium.
"""
from sympy import Symbol

NAMED = {
    "zeroth": {"key": "zeroth_law", "C01-M1": "first_law", "C01-M2": "second_law", "C01-M3": "newtons_cooling"},
    "surroundings": {"key": "everything_outside", "C01-M4": "the_walls", "C01-M5": "system_and_all_around", "C01-M6": "only_the_air"},
    "closed": {"key": "closed_system", "C01-M7": "isolated_system", "C01-M8": "open_system", "C01-M9": "not_a_system"},
    "mechanical": {"key": "same_pressure", "C01-M10": "same_temperature", "C01-M11": "no_reaction", "C01-M12": "molecules_at_rest"},
    "thermal": {"key": "same_temperature", "C01-M10": "same_pressure", "C01-M11": "no_reaction", "C01-M12": "molecules_at_rest"},
}


def _named(mid):
    def model(v, p):
        answers = NAMED.get(p["ask"], {})
        if mid not in answers:
            raise ValueError("does not apply to this item")
        return Symbol(answers[mid])
    return model


MODELS = {mid: _named(mid) for mid in ["key"] + [f"C01-M{i}" for i in range(1, 13)]}
