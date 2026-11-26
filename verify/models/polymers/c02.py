"""C02 Elastomers, fibres and plastics: named answers. By intermolecular forces: elastomers (weakest van der Waals,
stretch and recover), fibres (strongest: H bonds or dipole forces, high tensile strength, e.g. nylon), thermoplastics
(intermediate, soften on heating and can be remoulded: polythene, PVC, PET) and thermosetting polymers (cross-link on
heating and set for good: Bakelite, urea- and melamine-formaldehyde).
M1 reverses the order of forces; M2 thinks thermoplastics have the strongest forces; M3 counts cross-links as
intermolecular forces; M4 thinks condensation polymers are thermosetting; M5 thinks any rigid plastic is thermosetting;
M6 thinks thermosetting polymers melt on heating; M7 confuses elastomers with thermoplastics; M8 confuses elastomers with
thermosets; M9 reverses thermoplastic and thermosetting; M10 gives thermoplastics cross-links; M11 thinks thermoplastics
are copolymers; M12 credits weak van der Waals forces; M13 credits cross-links; M14 credits being a copolymer."""
from ._table import table_models

ANSWERS = {
    "strongest": {"key": "fibres", "C02-M1": "elastomers", "C02-M2": "thermoplastics", "C02-M3": "thermosetting"},
    "thermoset": {"key": "bakelite", "C02-M4": "pet", "C02-M5": "pvc", "C02-M6": "polythene"},
    "elastomer": {"key": "weakest_stretch", "C02-M1": "strongest", "C02-M7": "remouldable", "C02-M8": "rigid_network"},
    "thermoplastic": {"key": "remould", "C02-M9": "set_permanently", "C02-M10": "cross_links", "C02-M11": "copolymers"},
    "nylon": {"key": "h_bonds", "C02-M12": "van_der_waals", "C02-M13": "cross_links", "C02-M14": "copolymer"},
}
MODELS = table_models("C02", ANSWERS, 14)
