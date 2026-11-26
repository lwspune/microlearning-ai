"""C13 The transformer: answer models (the key, and one per misconception).

Ideal transformer: e_s / e_p = N_s / N_p = I_p / I_s (power in = power out, e_p I_p = e_s I_s);
efficiency = output power / input power. params["ask"]:
  "Ns":    secondary turns from e_p, e_s (V) and N_p (inputs ep, es, Np);
  "down":  what a step-down transformer does (named);
  "how":   the principle, and why it needs AC (named);
  "Is":    secondary current, in A, from N_p, N_s and I_p (inputs Np, Ns, Ip);
  "eff":   efficiency, in %, from input e_p, I_p and output e_s, I_s (inputs ep, Ip, es, Is).
"""
from sympy import Symbol

from physics import sig

NAMED = {
    "down": {"key": "fewer_bigI", "C13-M2": "fewer_smallI", "C13-M1": "more_bigI", "C13-M4": "less_power"},
    "how": {"key": "mutual_changing", "C13-M3": "mutual_dc", "C13-M6": "conduction", "C13-M4": "core_adds"},
}


def _solve(v, p, *, invert=False, extra=False, ratio_only=False, with_turns=False, same=False, volt_eff=False,
           inv_eff=False, loss=False):
    ask, n = p["ask"], p.get("sf", 3)
    if ask == "Ns":
        ratio = v["ep"] / v["es"] if invert else v["es"] / v["ep"]
        if ratio_only:
            return sig(ratio, n)
        if extra:
            return sig(v["Np"] * ratio - v["Np"], n)
        return sig(v["Np"] * ratio, n)
    if ask == "Is":
        if same:
            return sig(v["Ip"], n)
        ratio = v["Ns"] / v["Np"] if with_turns else v["Np"] / v["Ns"]
        if ratio_only:
            return sig(ratio, n)
        return sig(v["Ip"] * ratio, n)
    if ask == "eff":
        pin, pout = v["ep"] * v["Ip"], v["es"] * v["Is"]
        if volt_eff:
            return sig(100 * v["es"] / v["ep"], n)
        if inv_eff:
            return sig(100 * pin / pout, n)
        if loss:
            return sig(100 * (pin - pout) / pin, n)
        return sig(100 * pout / pin, n)
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
    "C13-M1": _m("C13-M1", ("Ns",), invert=True),  # turns the turns ratio upside down
    "C13-M2": _m("C13-M2", ("Is",), with_turns=True),  # thinks the current steps up or down with the voltage
    "C13-M3": _m("C13-M3"),  # thinks a transformer works on a steady (DC) supply
    "C13-M4": _m("C13-M4", ("eff",), volt_eff=True),  # thinks the power changes in the ratio of the voltages
    "C13-M5": _m("C13-M5", ("Ns",), extra=True),  # gives the extra turns, N_s - N_p
    "C13-M6": _m("C13-M6", ("Is",), same=True),  # thinks the coils are joined, so the same current flows in both
    "C13-M7": _m("C13-M7", ("eff",), inv_eff=True),  # divides the input power by the output power
    "C13-M8": _m("C13-M8", ("eff",), loss=True),  # gives the fraction lost, not the fraction delivered
    "C13-M9": _m("C13-M9", ("Ns", "Is"), ratio_only=True),  # stops at the ratio, forgetting to multiply
}
