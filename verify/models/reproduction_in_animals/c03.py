"""C03 The female reproductive system: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer

from ._mix import mixed_models

TABLE = {
    "womb": {"key": "uterus", "C03-M1": "ovary", "C03-M2": "vagina", "C03-M3": "oviduct"},
    "ampulla": {"key": "ampulla", "C03-M4": "uterus", "C03-M5": "isthmus", "C03-M6": "infundibulum"},
    "implant": {"key": "endometrium", "C03-M7": "myometrium", "C03-M8": "perimetrium", "C03-M9": "cervix"},
    "theca": {"key": "theca_interna", "C03-M10": "theca_externa", "C03-M11": "corona_radiata", "C03-M12": "antrum"},
    "primary": {"key": "ovaries", "C03-M13": "uterus", "C03-M14": "mammary_glands", "C03-M15": "vagina"},
}
MODELS = mixed_models("C03", TABLE, 15)
