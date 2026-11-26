"""C01 Classes and names: named answers. Aldehydes -al, ketones -one, acids -oic acid; the functional carbon is C1
(aldehyde, acid) or gets the lowest locant (ketone); an aromatic aldehyde or ketone has the ring on the C=O carbon.
M1 numbers from the wrong end; M2 picks the wrong chain or leaves out the functional carbon; M3 gives the common name;
M4 confuses the functional groups; M5 thinks any ring anywhere makes an aromatic carbonyl; M6 thinks any six-membered
ring is aromatic."""
from ._table import table_models

ANSWERS = {
    "ald": {"key": "methylbutanal_2", "C01-M1": "methylbutanal_3", "C01-M2": "ethylpropanal_2", "C01-M3": "common_ald"},
    "ket": {"key": "butan_2_one", "C01-M1": "butan_3_one", "C01-M3": "ethyl_methyl_ketone", "C01-M4": "butanal"},
    "acid": {"key": "propanoic_acid", "C01-M2": "ethanoic_acid", "C01-M3": "propionic_acid", "C01-M4": "propanal"},
    "arom": {"key": "acetophenone", "C01-M5": "phenylpropanone", "C01-M4": "benzaldehyde", "C01-M6": "cyclohexanone"},
    "butanal": {"key": "butanal", "C01-M2": "propanal", "C01-M3": "butyraldehyde", "C01-M4": "butanone"},
}
MODELS = table_models("C01", ANSWERS, 6)
