"""C01 Preparing alkanes: named answers. n-Pentane boils above its branched isomers and lighter alkanes. Ethyl bromide
with Zn/HCl gives ethane; CH3Br with Na in dry ether (Wurtz) gives ethane; sodium propanoate with soda lime gives ethane
(one carbon fewer); Kolbe electrolysis of sodium acetate gives ethane at the anode.
M1 thinks branching raises the boiling point; M2 picks a lighter branched isomer; M3 picks a smaller straight chain; M4
expects elimination; M5 expects hydrolysis; M6 expects Wurtz coupling; M7 expects reduction to methane; M8 expects an
alkene; M9 adds a carbon; M10 keeps every carbon; M11 loses two carbons; M12 doubles the chain; M13 removes CO2 as with soda
lime; M14 expects only hydrogen; M15 expects an alkene."""
from ._mix import mixed_models

TABLE = {
    "bp": {"key": "n_pentane", "C01-M1": "neopentane", "C01-M2": "isobutane", "C01-M3": "n_butane"},
    "reduction": {"key": "ethane", "C01-M4": "ethene", "C01-M5": "ethanol", "C01-M6": "butane"},
    "wurtz": {"key": "ethane", "C01-M7": "methane", "C01-M8": "ethene", "C01-M9": "propane"},
    "soda_lime": {"key": "ethane", "C01-M10": "propane", "C01-M11": "methane", "C01-M12": "butane"},
    "kolbe": {"key": "ethane", "C01-M13": "methane", "C01-M14": "hydrogen_only", "C01-M15": "ethene"},
}
MODELS = mixed_models("C01", TABLE, 15)
