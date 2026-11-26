"""C09 The law of radioactive decay: answer models (the key, and one per misconception).

-dN/dt = lambda N gives N = N0 e^(-lambda t); activity A = lambda N = A0 e^(-lambda t); N = m N_A / M;
1 Bq = 1 decay per second, 1 Ci = 3.7e10 Bq. params["ask"]:
  "act_mass": activity in Bq of m_mg milligrams (inputs lam in 1/s, m_mg, M in g/mol, NA);
  "mass_ci":  mass in g that gives an activity of mCi millicuries (inputs mCi, lam in 1/s, M, NA);
  "lam2":     lambda from activities A1 at t1 and A2 at t2 (inputs A1, A2, t1, t2), per unit of t;
  "frac":     the fraction N/N0 left after time t (inputs lam, t);
  "law":      what integrating -dN/dt = lambda N gives (named);
  "bq":       what one becquerel is (named).
"""
from sympy import Rational, Symbol, exp, log

from physics import sig

CI = Rational(37, 10) * 10**10  # Bq per curie
NAMED = {
    "law": {"key": "N_exp_minus_lt", "C09-M7": "N_linear_lt", "C09-M10": "N_exp_plus_lt", "C09-M11": "N_exp_t_over_l"},
    "bq": {"key": "one_decay_per_s", "C09-M12": "curie_rate_bq", "C09-M3": "one_nucleus_bq", "C09-M13": "lambda_one_bq"},
}


def _solve(v, p, *, mg_as_g=False, no_M=False, a_is_n=False, ci_as_bq=False, n_times=False, t2_only=False,
           linear=False, base10=False, decayed=False):
    ask, n = p["ask"], p.get("sf", 3)
    if ask == "act_mass":
        m_g = v["m_mg"] if mg_as_g else v["m_mg"] / 1000
        N = m_g * v["NA"] if no_M else m_g / v["M"] * v["NA"]
        return sig(N if a_is_n else v["lam"] * N, n)
    if ask == "mass_ci":
        A = v["mCi"] / 1000 * (1 if ci_as_bq else CI)
        N = A if a_is_n else (A * v["lam"] if n_times else A / v["lam"])
        return sig(N * v["M"] / v["NA"], n)
    if ask == "lam2":
        r = v["A1"] / v["A2"]
        dt = v["t2"] if t2_only else v["t2"] - v["t1"]
        if linear:
            return sig((v["A1"] - v["A2"]) / (v["A1"] * dt), n)
        return sig((log(r, 10) if base10 else log(r)) / dt, n)
    if ask == "frac":
        x = v["lam"] * v["t"]
        if linear:
            return sig(1 - x, n)
        f = 10 ** (-x) if base10 else exp(-x)
        return sig(1 - f if decayed else f, n)
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
    "C09-M1": _m("C09-M1", ("act_mass",), mg_as_g=True),  # takes milligrams as grams
    "C09-M2": _m("C09-M2", ("act_mass",), no_M=True),  # forgets to divide by the molar mass
    "C09-M3": _m("C09-M3", ("act_mass", "mass_ci"), a_is_n=True),  # takes the activity as the number of nuclei
    "C09-M4": _m("C09-M4", ("mass_ci",), ci_as_bq=True),  # takes a curie as one decay per second
    "C09-M5": _m("C09-M5", ("mass_ci",), n_times=True),  # multiplies by lambda instead of dividing
    "C09-M6": _m("C09-M6", ("lam2",), t2_only=True),  # uses t2 for the time between the readings
    "C09-M7": _m("C09-M7", ("lam2", "frac"), linear=True),  # treats the decay as linear in time
    "C09-M8": _m("C09-M8", ("lam2", "frac"), base10=True),  # uses base 10 in place of e
    "C09-M9": _m("C09-M9", ("frac",), decayed=True),  # gives the fraction decayed, not the fraction left
    "C09-M10": _m("C09-M10"),  # drops the minus sign in the exponent
    "C09-M11": _m("C09-M11"),  # takes lambda as a time
    "C09-M12": _m("C09-M12"),  # confuses the becquerel with the curie
    "C09-M13": _m("C09-M13"),  # confuses activity with the decay constant
}
