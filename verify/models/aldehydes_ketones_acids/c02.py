"""C02 Polarity of the carbonyl group: named answers. C=O is polar, C delta+ and O delta-; nucleophiles attack the
carbon; reactivity to nucleophilic addition HCHO > other aldehydes > ketones (less crowding, fewer electron-releasing
alkyl groups). Resonance C=O <-> C+-O-: O has 4 then 6 unshared electrons.
M1 counts lone pairs instead of electrons; M2 swaps the two structures; M3 thinks alkyl groups make the carbon more
positive (ketones more reactive); M4 thinks all carbonyls react alike; M5 thinks more carbons make it more reactive;
M6 reverses the polarity; M7 thinks nucleophiles attack oxygen; M8 thinks C=O is non-polar."""
from ._table import table_models

ANSWERS = {
    "electrons": {"key": "e4_6", "C02-M1": "e2_3", "C02-M2": "e6_4", "C02-M8": "e4_4"},
    "why": {"key": "less_crowded_fewer_alkyl", "C02-M3": "ketone_more", "C02-M4": "equal", "C02-M8": "nonpolar"},
    "order": {"key": "hcho_ald_ket", "C02-M3": "ket_ald_hcho", "C02-M5": "ald_hcho_ket", "C02-M4": "all_equal"},
    "attack": {"key": "carbon", "C02-M7": "oxygen", "C02-M6": "carbon_negative", "C02-M8": "neither"},
    "most": {"key": "methanal", "C02-M3": "propanone", "C02-M5": "propanal", "C02-M4": "same"},
}
MODELS = table_models("C02", ANSWERS, 8)
