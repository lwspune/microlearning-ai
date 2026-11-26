"""C05 Modulation: answer models (the key, and one per misconception).

params["ask"]:
  "carrier", "am", "why", "noisy", "tv": named;
  "antenna": antenna length lambda/4, in km, for a signal of frequency f_kHz (input f_kHz).
"""
from sympy import Rational, Symbol

from physics import sig

C = 3 * 10**8
NAMED = {
    "carrier": {"key": "hf_carrier", "C05-M1": "audio_itself", "C05-M2": "the_wire", "C05-M3": "zero_freq"},
    "am": {"key": "amp_varies", "C05-M4": "freq_varies", "C05-M5": "message_varies", "C05-M6": "phase_varies"},
    "why": {"key": "antenna_power", "C05-M7": "travels_faster", "C05-M8": "inaudible", "C05-M9": "louder"},
    "noisy": {"key": "noise_amplitude", "C05-M13": "carrier_freq_varies", "C05-M14": "am_slower", "C05-M15": "no_carrier"},
    "tv": {"key": "am_video_fm_sound", "C05-M16": "fm_both", "C05-M17": "am_both", "C05-M18": "fm_video_am_sound"},
}


def _solve(v, p, *, whole=False, half=False, kms=False):
    lam = Rational(C, 1000 if kms else 1) / (v["f_kHz"] * 1000)
    k = 1 if whole else (2 if half else 4)
    return sig(lam / k / 1000, p.get("sf", 3))


def key(v, p):
    if p["ask"] in NAMED:
        return Symbol(NAMED[p["ask"]]["key"])
    return _solve(v, p)


def _m(mid, **kw):
    def model(v, p):
        if p["ask"] in NAMED:
            if mid not in NAMED[p["ask"]]:
                raise ValueError("does not apply to this item")
            return Symbol(NAMED[p["ask"]][mid])
        if not kw:
            raise ValueError("does not apply to this item")
        return _solve(v, p, **kw)
    return model


MODELS = {
    "key": key,
    **{f"C05-M{i}": _m(f"C05-M{i}") for i in (1, 2, 3, 4, 5, 6, 7, 8, 9, 13, 14, 15, 16, 17, 18)},
    "C05-M10": _m("C05-M10", whole=True),  # takes the whole wavelength
    "C05-M11": _m("C05-M11", half=True),  # takes half the wavelength
    "C05-M12": _m("C05-M12", kms=True),  # uses c in km/s
}
