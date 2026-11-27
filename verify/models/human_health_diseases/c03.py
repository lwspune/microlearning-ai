"""C03 Typhoid, pneumonia, chicken pox and ringworm: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational, sqrt  # noqa: F401

from ._mix import mixed_models

TABLE = {
    "typhoid": {"key": "salmonella_typhi", "C03-M1": "mycobacterium_b", "C03-M2": "streptococcus_b", "C03-M3": "plasmodium_p"},
    "widal": {"key": "typhoid_t", "C03-M4": "aids_t", "C03-M5": "malaria_t", "C03-M6": "tuberculosis_t"},
    "ringworm": {"key": "fungi_c", "C03-M7": "roundworm_c", "C03-M8": "bacteria_c", "C03-M9": "virus_c"},
    "pneumonia": {"key": "droplets_r", "C03-M10": "mosquito_bite", "C03-M11": "contaminated_food", "C03-M12": "needles_r"},
    "chickenpox": {"key": "varicella_virus", "C03-M13": "bacterium_c", "C03-M14": "fungus_c", "C03-M15": "protozoan_c"},
}
MODELS = mixed_models("C03", TABLE, 15)
