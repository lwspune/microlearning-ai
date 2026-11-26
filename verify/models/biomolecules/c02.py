"""C02 The structure of glucose: named answers. Acetic anhydride gives the pentaacetate (five OH); hydroxylamine gives an
oxime (C=O); bromine water oxidises CHO to gluconic acid (aldehyde); nitric acid gives saccharic acid (primary OH too);
HI gives n-hexane (six carbons in a chain). The open chain has a CHO, one primary and four secondary OH, and four chiral
carbons, so 2^4 = 16 stereoisomers; the anomeric OH appears only in the cyclic form.
M1 takes the oxime test for the OH test; M2 takes the aldehyde test for it; M3 takes the nitric acid test for it; M4
uses one mole of anhydride per glucose; M5 forgets to scale to 2 mol; M6 divides by 2; M7 thinks the open chain has no
CHO; M8 thinks it has no primary OH; M9 thinks it has no secondary OH; M10 counts chiral carbons, not isomers; M11 uses
three chiral carbons; M12 counts the anomeric carbon of the ring; M13 confuses bromine water with nitric acid; M14
thinks bromine water reduces glucose; M15 confuses bromine water with HI."""
from ._table import table_models

ANSWERS = {
    "five_oh": {"key": "acetic_anhydride", "C02-M1": "hydroxylamine", "C02-M2": "bromine_water", "C02-M3": "nitric_acid"},
    "anhydride": {"key": "ten", "C02-M4": "two", "C02-M5": "five", "C02-M6": "two_point_five"},
    "open_chain": {"key": "anomeric_oh", "C02-M7": "formyl", "C02-M8": "primary_oh", "C02-M9": "secondary_oh"},
    "isomers": {"key": "sixteen", "C02-M10": "four", "C02-M11": "eight", "C02-M12": "thirty_two"},
    "bromine": {"key": "gluconic_acid", "C02-M13": "saccharic_acid", "C02-M14": "sorbitol", "C02-M15": "n_hexane"},
}
MODELS = table_models("C02", ANSWERS, 15)
