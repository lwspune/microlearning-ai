"""C11 Fission, fusion and reactors: answer models (the key, and one per misconception).

Q = [sum of masses before - sum of masses after] c^2, 1 u = 931.5 MeV. params["ask"]:
  "fiss":  Q of a fission, in MeV (inputs mX, m1, m2, nn neutrons of mass mn, A of the parent);
  "fus":   Q of 4p -> alpha + 2e+ in MeV, nuclear masses (inputs mp, ma, me);
  "react": Q of Li-7 + p -> 2 alpha from ATOMIC masses, in MeV (inputs mLi, mH, mp, mHe);
  "fuel":  mass in kg of U-235 that must fission in a day for a power (inputs P_MW, E_MeV per fission, M g/mol, NA, e);
  "moder": what the moderator does (named);
  "why":   why fusing light nuclei releases energy (named).
"""
from sympy import Rational, Symbol

from physics import sig

C2 = Rational(9315, 10)  # MeV per u
DAY = 24 * 3600  # s
NAMED = {
    "moder": {"key": "slow_neutrons_m", "C11-M11": "absorb_neutrons_m", "C11-M12": "carry_heat_m", "C11-M13": "stop_radiation_m"},
    "why": {"key": "higher_bea_f", "C11-M14": "electric_pull_f", "C11-M15": "all_mass_f", "C11-M16": "heat_source_f"},
}


def _solve(v, p, *, in_u=False, no_n=False, per_A=False, no_pos=False, one_pos=False, bare_p=False, one_alpha=False,
           per_s=False, no_mega=False, moles=False):
    ask, n = p["ask"], p.get("sf", 3)
    if ask == "fuel":
        E = v["P_MW"] * 10**6 * (1 if per_s else DAY)  # J
        E1 = v["E_MeV"] * (1 if no_mega else 10**6) * v["e"]  # J per fission
        mol = E / E1 / v["NA"]
        return sig(mol if moles else mol * v["M"] / 1000, n)
    if ask == "fiss":
        dm = v["mX"] - v["m1"] - v["m2"] - (0 if no_n else v["nn"] * v["mn"])
    elif ask == "fus":
        dm = 4 * v["mp"] - v["ma"] - (0 if no_pos else (1 if one_pos else 2)) * v["me"]
    elif ask == "react":
        dm = v["mLi"] + (v["mp"] if bare_p else v["mH"]) - (1 if one_alpha else 2) * v["mHe"]
    else:
        raise ValueError(f"unknown ask {ask}")
    if in_u:
        return sig(dm, n)
    E = dm * C2
    return sig(E / v["A"] if per_A else E, n)


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
    "C11-M1": _m("C11-M1", ("fiss",), no_n=True),  # leaves out the neutrons' mass
    "C11-M2": _m("C11-M2", ("fiss", "fus", "react"), in_u=True),  # leaves the mass difference in u
    "C11-M3": _m("C11-M3", ("fiss",), per_A=True),  # gives the energy per nucleon
    "C11-M4": _m("C11-M4", ("fus",), no_pos=True),  # ignores the positrons' mass
    "C11-M5": _m("C11-M5", ("fus",), one_pos=True),  # subtracts one positron mass
    "C11-M6": _m("C11-M6", ("react",), bare_p=True),  # uses the bare proton's mass with atomic masses
    "C11-M7": _m("C11-M7", ("react",), one_alpha=True),  # counts one alpha particle
    "C11-M8": _m("C11-M8", ("fuel",), per_s=True),  # works for one second, not one day
    "C11-M9": _m("C11-M9", ("fuel",), no_mega=True),  # converts MeV to J without the 10^6
    "C11-M10": _m("C11-M10", ("fuel",), moles=True),  # stops at the number of moles
    "C11-M11": _m("C11-M11"),  # confuses the moderator with the control rods
    "C11-M12": _m("C11-M12"),  # confuses the moderator with the coolant
    "C11-M13": _m("C11-M13"),  # confuses the moderator with the shielding
    "C11-M14": _m("C11-M14"),  # thinks the light nuclei attract electrically
    "C11-M15": _m("C11-M15"),  # thinks all the mass becomes energy
    "C11-M16": _m("C11-M16"),  # thinks the heat is the source of the energy
}
