"""C05 Analgesics: named answers. Analgesics relieve pain. Aspirin is acetylsalicylic acid, made by acetylating
salicylic acid; aspirin and paracetamol are non-narcotic, morphine is narcotic. Paracetamol is the odd one out among
dettol, chloroxylenol and trichlorophenol, which are antiseptics.
M1 picks salicylic acid; M2 picks chloroxylenol; M3 picks thymol; M4 picks paracetamol; M5 picks morphine; M6 picks
penicillin; M7 says antibiotics; M8 says antiseptics; M9 says antacids; M10 picks aspirin; M11 picks paracetamol; M12
picks ibuprofen; M13 picks dettol; M14 picks chloroxylenol; M15 picks trichlorophenol."""
from ._mix import mixed_models

TABLE = {
    "aspirin": {"key": "acetylsalicylic", "C05-M1": "salicylic", "C05-M2": "chloroxylenol", "C05-M3": "thymol"},
    "acetylation": {"key": "aspirin", "C05-M4": "paracetamol", "C05-M5": "morphine", "C05-M6": "penicillin"},
    "painkillers": {"key": "analgesics", "C05-M7": "antibiotics", "C05-M8": "antiseptics", "C05-M9": "antacids"},
    "narcotic": {"key": "morphine", "C05-M10": "aspirin", "C05-M11": "paracetamol", "C05-M12": "ibuprofen"},
    "odd_one": {"key": "paracetamol", "C05-M13": "dettol", "C05-M14": "chloroxylenol", "C05-M15": "trichlorophenol"},
}
MODELS = mixed_models("C05", TABLE, 15)
