"""C08 The transistor as an amplifier: answer models (the key, and one per misconception).

A common-emitter amplifier is biased in its active region (emitter-base forward, collector-base reverse). Its output is
inverted (180 degrees out of phase). Voltage gain A_V = beta R_L / R_in; power gain A_P = beta A_V. params["ask"]:
  "AV": the voltage gain, from beta, R_L in kilohm and R_in in ohm (inputs beta, RL_k, Rin);
  "AP": the power gain, from beta and the voltage gain (inputs beta, AV);
  "bias", "phase", "why_ce": named answers.
"""
from sympy import Symbol

from physics import sig

NAMED = {
    "bias": {"key": "active_bias_8", "C08-M1": "saturation_8", "C08-M2": "cutoff_8", "C08-M3": "no_bias"},
    "phase": {"key": "deg180", "C08-M4": "in_phase", "C08-M5": "deg90", "C08-M6": "depends_load"},
    "why_ce": {"key": "largest_gains", "C08-M4": "in_phase_ce", "C08-M13": "high_input_R", "C08-M3": "needs_no_bias"},
}


def _solve(v, p, *, no_beta=False, flip=False, no_conv=False, add=False, same=False, square=False):
    ask = p["ask"]
    if ask == "AV":
        RL = v["RL_k"] * (1 if no_conv else 1000)
        ratio = v["Rin"] / RL if flip else RL / v["Rin"]
        return sig(ratio if no_beta else v["beta"] * ratio)
    if ask == "AP":
        b, AV = v["beta"], v["AV"]
        if add:
            return sig(b + AV)
        if same:
            return sig(AV)
        return sig(AV**2 if square else b * AV)
    raise ValueError(f"unknown ask {ask}")


def key(v, p):
    if p["ask"] in NAMED:
        return Symbol(NAMED[p["ask"]]["key"])
    return _solve(v, p)


def _m(mid, asks=(), **kw):
    def model(v, p):
        if p["ask"] in NAMED:
            if mid not in NAMED[p["ask"]]:
                raise ValueError("does not apply to this item")
            return Symbol(NAMED[p["ask"]][mid])
        if p["ask"] not in asks:
            raise ValueError("does not apply to this item")
        return _solve(v, p, **kw)
    return model


MODELS = {
    "key": key,
    "C08-M1": _m("C08-M1"),  # biases the amplifier in saturation
    "C08-M2": _m("C08-M2"),  # biases it at cut-off
    "C08-M3": _m("C08-M3"),  # thinks no DC bias is needed: the signal drives the transistor
    "C08-M4": _m("C08-M4"),  # thinks the output is in phase with the input
    "C08-M5": _m("C08-M5"),  # thinks the output is a quarter cycle out of phase
    "C08-M6": _m("C08-M6"),  # thinks the phase shift depends on the load
    "C08-M7": _m("C08-M7", ("AV",), no_beta=True),  # leaves beta out of the voltage gain
    "C08-M8": _m("C08-M8", ("AV",), flip=True),  # turns the resistance ratio upside down
    "C08-M9": _m("C08-M9", ("AV",), no_conv=True),  # puts R_L in kilohm over R_in in ohm
    "C08-M10": _m("C08-M10", ("AP",), add=True),  # adds the current and voltage gains
    "C08-M11": _m("C08-M11", ("AP",), same=True),  # takes the power gain as the voltage gain
    "C08-M12": _m("C08-M12", ("AP",), square=True),  # squares the voltage gain, as P is proportional to V squared
    "C08-M13": _m("C08-M13"),  # thinks the common-emitter input resistance is high
}
