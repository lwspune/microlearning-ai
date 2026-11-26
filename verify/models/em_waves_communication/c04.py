"""C04 The communication system: answer models (the key, and one per misconception). Every item has a named answer.

params["ask"]: "units", "noise", "bandwidth", "demod", "power".
"""
from sympy import Symbol

NAMED = {
    "units": {"key": "tx_channel_rx", "C04-M1": "mic_amp_speaker", "C04-M2": "mod_antenna_sat", "C04-M3": "source_noise_signal"},
    "noise": {"key": "unwanted_signals", "C04-M4": "loudness", "C04-M5": "carrier_n", "C04-M6": "attenuation"},
    "bandwidth": {"key": "freq_range", "C04-M7": "antenna_width", "C04-M8": "highest_freq", "C04-M9": "wavelength_b"},
    "demod": {"key": "recover_message", "C04-M10": "put_on_carrier", "C04-M11": "amplify", "C04-M12": "remove_noise"},
    "power": {"key": "inverse_square", "C04-M13": "prop_lambda", "C04-M14": "prop_lambda_sq", "C04-M15": "independent"},
}


def key(v, p):
    return Symbol(NAMED[p["ask"]]["key"])


def _m(mid):
    def model(v, p):
        if mid not in NAMED[p["ask"]]:
            raise ValueError("does not apply to this item")
        return Symbol(NAMED[p["ask"]][mid])
    return model


MODELS = {"key": key, **{f"C04-M{i}": _m(f"C04-M{i}") for i in range(1, 16)}}
