"""C06 Qualities of sound and superposition: answer models (the key, and one per misconception).

params["ask"]:
  "inphase": sound level, in dB, of two sounds of L1 and L2 dB sounded together perfectly in phase (inputs L1, L2);
  "raise":   new level, in dB, when a sound of L dB is made k times as intense (inputs L, k);
  "pitch":   what differs between two equally loud notes of different pitch (a named answer);
  "timbre":  why a violin and a flute playing the same note equally loudly sound different (a named answer);
  "sum":     resultant displacement, in mm, where two waves of displacements y1 and y2 mm meet (inputs y1, y2);
  "cross":   what two pulses do after they cross on a string (a named answer).

The key: L = 10 log10(I / I0); in phase the amplitudes add, so I = (sqrt I1 + sqrt I2)^2; displacements add as
vectors (with sign); waves pass through one another unchanged.
"""
from sympy import Symbol, log, sqrt

from physics import sig

NAMED = {
    "pitch": {"key": "pitch_freq", "C06-M7": "pitch_amplitude", "C06-M8": "pitch_speed", "C06-M9": "pitch_overtones"},
    "timbre": {"key": "timbre_overtones", "C06-M10": "timbre_freq", "C06-M8": "timbre_speed",
               "C06-M11": "timbre_kind"},
    "cross": {"key": "cross_unchanged", "C06-M15": "cross_bounce", "C06-M16": "cross_vanish",
              "C06-M17": "cross_merge"},
}


def _lg(x):
    return log(x, 10)


def _solve(v, p, *, add_db=False, incoherent=False, louder=False, no10=False, prop=False, twenty=False,
           mags=False, larger=False, mean=False):
    ask, n = p["ask"], p.get("sf", 3)
    if ask == "inphase":
        L1, L2 = v["L1"], v["L2"]
        if add_db:
            return sig(L1 + L2, n)
        if louder:
            return sig(max(L1, L2), n)
        I1, I2 = 10 ** (L1 / 10), 10 ** (L2 / 10)  # in units of I0
        I = I1 + I2 if incoherent else (sqrt(I1) + sqrt(I2)) ** 2
        return sig(10 * _lg(I), n)
    if ask == "raise":
        L, k = v["L"], v["k"]
        if prop:
            return sig(L * k, n)
        return sig(L + (1 if no10 else (20 if twenty else 10)) * _lg(k), n)
    if ask == "sum":
        y1, y2 = v["y1"], v["y2"]
        if mags:
            return sig(abs(y1) + abs(y2), n)
        if larger:
            return sig(y1 if abs(y1) > abs(y2) else y2, n)
        if mean:
            return sig((y1 + y2) / 2, n)
        return sig(y1 + y2, n)
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
    "C06-M1": _m("C06-M1", ("inphase",), add_db=True),  # adds the decibel levels
    "C06-M2": _m("C06-M2", ("inphase",), incoherent=True),  # adds the intensities, ignoring the phase
    "C06-M3": _m("C06-M3", ("inphase",), louder=True),  # the quieter sound adds nothing
    "C06-M4": _m("C06-M4", ("raise",), no10=True),  # leaves out the 10 in L = 10 log(I/I0)
    "C06-M5": _m("C06-M5", ("raise",), prop=True),  # takes the level proportional to the intensity
    "C06-M6": _m("C06-M6", ("raise",), twenty=True),  # uses 20 log(I/I0)
    "C06-M7": _m("C06-M7"),  # pitch is set by the amplitude
    "C06-M8": _m("C06-M8"),  # different notes travel at different speeds
    "C06-M9": _m("C06-M9"),  # pitch is set by the overtones
    "C06-M10": _m("C06-M10"),  # quality comes from slightly different frequencies
    "C06-M11": _m("C06-M11"),  # one instrument's sound is transverse, the other's longitudinal
    "C06-M12": _m("C06-M12", ("sum",), mags=True),  # adds the sizes, ignoring direction
    "C06-M13": _m("C06-M13", ("sum",), larger=True),  # the larger displacement wins
    "C06-M14": _m("C06-M14", ("sum",), mean=True),  # averages the displacements
    "C06-M15": _m("C06-M15"),  # pulses bounce off each other
    "C06-M16": _m("C06-M16"),  # opposite pulses cancel for good
    "C06-M17": _m("C06-M17"),  # pulses merge into one
}
