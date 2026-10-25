"""C11 Damped and forced oscillations: answer models (the key, and one per misconception).

Every item here is conceptual; params["ask"] picks the question and each model returns a named answer:
  "damped":    how a damped oscillator's amplitude changes;
  "forced":    the frequency of a forced oscillation;
  "resonance": when a forced oscillation's amplitude is largest;
  "energy":    where a damped oscillator's energy goes;
  "free":      what a free oscillation is.
"""
from sympy import Symbol

NAMED = {
    "damped": {"key": "gradually_decreasing", "C11-M1": "gradually_increasing", "C11-M2": "suddenly_decreasing", "C11-M3": "constant"},
    "forced": {"key": "driving_frequency", "C11-M4": "natural_frequency", "C11-M5": "average", "C11-M6": "falls_to_zero"},
    "resonance": {"key": "equal_frequencies", "C11-M7": "highest_driving", "C11-M8": "lowest_driving", "C11-M9": "most_damping"},
    "energy": {"key": "heat", "C11-M10": "destroyed", "C11-M11": "faster_oscillation", "C11-M12": "stays_constant"},
    "free": {"key": "natural_no_force", "C11-M4": "driving_force", "C11-M13": "no_restoring", "C11-M14": "vacuum_only"},
}


def _named(mid):
    def model(v, p):
        answers = NAMED.get(p["ask"], {})
        if mid not in answers:
            raise ValueError("does not apply to this item")
        return Symbol(answers[mid])
    return model


MODELS = {mid: _named(mid) for mid in ["key"] + [f"C11-M{i}" for i in range(1, 15)]}
