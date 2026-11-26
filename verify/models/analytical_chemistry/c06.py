"""C06 Calculations from equations: mass -> moles -> mole ratio -> mass or gas volume (22.4 dm^3 per mol at STP).
params["q"]:
  "cao": inputs m (g CaCO3); CaCO3 -> CaO + CO2. "water": inputs m (g CH4); CH4 + 2O2 -> CO2 + 2H2O.
  "oxygen_al": inputs m (g Al); 4Al + 3O2 -> 2Al2O3. "propane": inputs m (g C3H8); C3H8 + 5O2 -> 3CO2 + 4H2O.
  "zinc": inputs m (g sample), V (cm^3 H2 at STP), Zn (g/mol); Zn + H2SO4 -> ZnSO4 + H2.
M1 thinks the product weighs as much as the reactant; M2 gives the CO2; M3 inverts the mass ratio; M4 ignores the 2 in
2H2O; M5 counts 4 H2O; M6 gives the CO2; M7 uses a 1 : 1 ratio; M8 inverts 4 : 3; M9 uses 16 g per mole of O2; M10
ignores the 5; M11 gives the moles of O2; M12 divides by 5; M13 forgets the 100; M14 inverts the ratio; M15 takes two Zn
per H2."""
from chemistry import BOOK, MASS, molar_mass, sig

from ._mix import mixed_models

VM = BOOK["V_m"]
CACO3, CAO, CO2, CH4, W, O2, C3H8 = (molar_mass(f) for f in ("CaCO3", "CaO", "CO2", "CH4", "H2O", "O2", "C3H8"))
AL = MASS["Al"]

TABLE = {
    "cao": {"key": lambda v: sig(v["m"] / CACO3 * CAO), "C06-M1": lambda v: sig(v["m"]),
            "C06-M2": lambda v: sig(v["m"] / CACO3 * CO2), "C06-M3": lambda v: sig(v["m"] * CACO3 / CAO)},
    "water": {"key": lambda v: sig(v["m"] / CH4 * 2 * W), "C06-M4": lambda v: sig(v["m"] / CH4 * W),
              "C06-M5": lambda v: sig(v["m"] / CH4 * 4 * W), "C06-M6": lambda v: sig(v["m"] / CH4 * CO2)},
    "oxygen_al": {"key": lambda v: sig(v["m"] / AL * 3 / 4 * O2), "C06-M7": lambda v: sig(v["m"] / AL * O2),
                  "C06-M8": lambda v: sig(v["m"] / AL * 4 / 3 * O2), "C06-M9": lambda v: sig(v["m"] / AL * 3 / 4 * MASS["O"])},
    "propane": {"key": lambda v: sig(v["m"] / C3H8 * 5 * VM), "C06-M10": lambda v: sig(v["m"] / C3H8 * VM),
                "C06-M11": lambda v: sig(v["m"] / C3H8 * 5), "C06-M12": lambda v: sig(v["m"] / C3H8 / 5 * VM)},
    "zinc": {"key": lambda v: sig(v["V"] / (VM * 1000) * v["Zn"] / v["m"] * 100),
             "C06-M13": lambda v: sig(v["V"] / (VM * 1000) * v["Zn"] / v["m"]),
             "C06-M14": lambda v: sig(v["m"] / (v["V"] / (VM * 1000) * v["Zn"]) * 100),
             "C06-M15": lambda v: sig(2 * v["V"] / (VM * 1000) * v["Zn"] / v["m"] * 100)},
}
MODELS = mixed_models("C06", TABLE, 15)
