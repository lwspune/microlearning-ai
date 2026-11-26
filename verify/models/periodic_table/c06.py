"""C06 Electron gain enthalpy and electronegativity: named answers. Electron gain enthalpy (for a gaseous atom) can be
measured; electronegativity (pull of a bonded atom on a shared pair) cannot. Both generally grow across a period
(electronegativity Li 1.0 ... N 3.0) and fall down a group, but Cl's electron gain enthalpy is more negative than F's
(F is so small that the added electron is strongly repelled); F's is more negative than O's.
M1 thinks electronegativity is measured; M2 says both; M3 says neither; M4 thinks electron gain always grows up a group;
M5 calls them equal; M6 thinks larger atoms gain electrons more readily; M7 thinks O gains more readily; M8 calls them
equal; M9 thinks neither gains electrons; M10 thinks it decreases across; M11 thinks it is constant; M12 thinks it rises
then falls; M13 gives electron gain enthalpy; M14 gives ionisation enthalpy; M15 gives ionic charge."""
from ._mix import mixed_models

TABLE = {
    "measured": {"key": "electron_gain", "C06-M1": "electronegativity", "C06-M2": "both", "C06-M3": "neither"},
    "cl_f": {"key": "chlorine", "C06-M4": "fluorine", "C06-M5": "equal", "C06-M6": "bromine"},
    "f_o": {"key": "fluorine", "C06-M7": "oxygen", "C06-M8": "equal", "C06-M9": "neither"},
    "across": {"key": "increases", "C06-M10": "decreases", "C06-M11": "constant", "C06-M12": "rises_falls"},
    "define": {"key": "bonded_pull", "C06-M13": "gain_energy", "C06-M14": "remove_energy", "C06-M15": "ion_charge"},
}
MODELS = mixed_models("C06", TABLE, 15)
