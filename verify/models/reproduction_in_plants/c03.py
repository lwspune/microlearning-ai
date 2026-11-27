"""C03 Microsporogenesis and the pollen grain: answer models from a table keyed by params["q"]: named answers, or numbers from the inputs."""
from sympy import Integer, Rational

from ._mix import mixed_models

TABLE = {
    "tapetum": {"key": "tapetum", "C03-M1": "endothecium", "C03-M2": "epidermis", "C03-M3": "middle_layers"},
    "exine": {"key": "sporopollenin", "C03-M4": "cellulose", "C03-M5": "pectin", "C03-M6": "lignin"},
    "mmc": {"key": "meiosis_tetrad", "C03-M7": "mitosis_two", "C03-M8": "mitosis_four", "C03-M9": "meiosis_two"},
    "pores": {"key": "germ_pores", "C03-M10": "micropyle", "C03-M11": "hilum", "C03-M12": "anywhere_exine"},
    "lobes": {"key": "bilobed_tetrasporangiate", "C03-M13": "monolobed_bisporangiate", "C03-M14": "bilobed_bisporangiate", "C03-M15": "tetralobed"},
}
MODELS = mixed_models("C03", TABLE, 15)
