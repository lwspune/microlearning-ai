"""C13 Mixtures of ideal gases: answer models (the key, and one per misconception).

params["ask"] picks the quantity:
  "dalton":   pressure of gases of masses m1..m3 (g), molar masses M1..M3 (g/mol), in volume V at T (inputs m*, M*,
              a* = the atomic mass a student might use for the molar mass); the answer is a multiple of RT/V;
  "chambers": common pressure after the partition between (p1, V1, n1) and (p2, V2, n2) is removed (same gas,
              insulated), in the units of p1, p2;
  "U":        internal energy of n1 moles (f1 degrees of freedom) and n2 moles (f2) at T, a multiple of RT;
  "Cv":       molar C_V of the same mixture, a multiple of R;
  "gamma":    gamma of n1 moles (gamma g1) and n2 moles (gamma g2);
  "T":        final temperature when n1 moles (f1) at T1 and n2 moles (f2) at T2 mix in an insulated vessel (K).

The key works from the definitions: each gas spreads through the whole volume and its partial pressure is
n_i R T / V; internal energies add, U = sum n_i (f_i / 2) R T; C_V = U / (n R T) per mole; C_P = C_V + R;
the internal energy is conserved on mixing.
"""
from sympy import Rational, Symbol

from physics import sig

R, T, V = Symbol("R"), Symbol("T"), Symbol("V")
HALF = Rational(1, 2)


def _ask(p, *asks):
    if p["ask"] not in asks:
        raise ValueError("does not apply to this item")


def _pairs(v, name):
    return [(v["n1"], v[f"{name}1"]), (v["n2"], v[f"{name}2"])]


def _cv(v, weight="n", f_of=None):
    """C_V of the mixture in units of R. weight: 'n' (moles), 'f' (degrees of freedom only), 'plain' (no weights)."""
    fs = [f_of if f_of is not None else v["f1"], f_of if f_of is not None else v["f2"]]
    cvs = [f * HALF for f in fs]
    ns = [v["n1"], v["n2"]]
    if weight == "plain":
        return sum(cvs) / 2
    w = ns if weight == "n" else fs
    return sum(wi * c for wi, c in zip(w, cvs)) / sum(w)


def key(v, p):
    ask = p["ask"]
    if ask == "dalton":
        n = sum(v[f"m{i}"] / v[f"M{i}"] for i in (1, 2, 3))
        return n * R * T / V
    if ask == "chambers":
        return sig((v["p1"] * v["V1"] + v["p2"] * v["V2"]) / (v["V1"] + v["V2"]))
    if ask == "U":
        return sum(n * f * HALF for n, f in _pairs(v, "f")) * R * T
    if ask == "Cv":
        return _cv(v) * R
    if ask == "gamma":
        cv = sum(n / (g - 1) for n, g in _pairs(v, "g")) / (v["n1"] + v["n2"])  # C_V_i = R / (gamma_i - 1)
        return (cv + 1) / cv
    if ask == "T":
        c1, c2 = v["n1"] * v["f1"] * HALF, v["n2"] * v["f2"] * HALF
        return sig((c1 * v["T1"] + c2 * v["T2"]) / (c1 + c2))
    raise ValueError(f"unknown ask {ask}")


def m1(v, p):
    """Averages the parts' values plainly, with no weighting by amount."""
    ask = p["ask"]
    if ask == "dalton":
        return sum(v[f"m{i}"] / v[f"M{i}"] for i in (1, 2, 3)) / 3 * R * T / V
    if ask == "chambers":
        return sig((v["p1"] + v["p2"]) / 2)
    if ask == "U":
        return _cv(v, "plain") * (v["n1"] + v["n2"]) * R * T
    if ask == "Cv":
        return _cv(v, "plain") * R
    if ask == "gamma":
        return (v["g1"] + v["g2"]) / 2
    if ask == "T":
        return sig((v["T1"] + v["T2"]) / 2)
    raise ValueError(f"unknown ask {ask}")


def m2(v, p):
    """Takes any property of the mixture (gamma, temperature, pressure) as the mole-weighted mean of the parts'."""
    _ask(p, "chambers", "gamma", "T")
    ask = p["ask"]
    n1, n2 = v["n1"], v["n2"]
    if ask == "chambers":
        return sig((n1 * v["p1"] + n2 * v["p2"]) / (n1 + n2))
    if ask == "gamma":
        return (n1 * v["g1"] + n2 * v["g2"]) / (n1 + n2)
    return sig((n1 * v["T1"] + n2 * v["T2"]) / (n1 + n2))


def m3(v, p):
    """Gives every molecule only its 3 translational degrees of freedom."""
    _ask(p, "U", "Cv")
    if p["ask"] == "U":
        return 3 * HALF * (v["n1"] + v["n2"]) * R * T
    return _cv(v, f_of=3) * R


def m4(v, p):
    """Weights by the degrees of freedom alone, leaving out the moles."""
    _ask(p, "Cv", "T")
    if p["ask"] == "Cv":
        return _cv(v, "f") * R
    return sig((v["f1"] * v["T1"] + v["f2"] * v["T2"]) / (v["f1"] + v["f2"]))


def m5(v, p):
    """Adds the chambers' first pressures, forgetting each gas now fills the whole volume."""
    _ask(p, "chambers")
    return sig(v["p1"] + v["p2"])


def m6(v, p):
    """Uses the atomic mass (16 for O) as the molar mass of a diatomic gas (32 for O2)."""
    _ask(p, "dalton")
    return sum(v[f"m{i}"] / v[f"a{i}"] for i in (1, 2, 3)) * R * T / V


def m7(v, p):
    """Takes the mass in grams as the number of moles."""
    _ask(p, "dalton")
    return sum(v[f"m{i}"] for i in (1, 2, 3)) * R * T / V


def m8(v, p):
    """Gives each degree of freedom RT per mole instead of RT/2."""
    _ask(p, "U")
    return sum(n * f for n, f in _pairs(v, "f")) * R * T


def m9(v, p):
    """Turns gamma upside down: C_V / C_P."""
    _ask(p, "gamma")
    return 1 / key(v, p)


MODELS = {"key": key, "C13-M1": m1, "C13-M2": m2, "C13-M3": m3, "C13-M4": m4, "C13-M5": m5, "C13-M6": m6,
          "C13-M7": m7, "C13-M8": m8, "C13-M9": m9}
