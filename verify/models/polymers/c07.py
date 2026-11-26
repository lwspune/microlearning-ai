"""C07 Natural and synthetic rubber: named answers. Natural rubber is cis-1,4-polyisoprene (isoprene =
2-methylbuta-1,3-diene); vulcanisation heats it with sulfur, which cross-links the chains. Neoprene from chloroprene
(2-chlorobuta-1,3-diene); Buna-S (SBR) from buta-1,3-diene and styrene; Buna-N from buta-1,3-diene and acrylonitrile.
M1 confuses the rubber monomer with acrylonitrile; M2 with caprolactam; M3 with tetrafluoroethene; M4 thinks
vulcanisation uses oxygen; M5 thinks it uses chlorine; M6 thinks it uses hydrogen; M7 confuses Buna-S with Buna-N; M8
with neoprene; M9 swaps butadiene for isoprene; M10 confuses chloroprene with isoprene; M11 thinks chlorine polymers
come from vinyl chloride; M12 confuses neoprene with SBR; M13 gives the trans form (gutta-percha); M14 leaves out the
methyl group; M15 confuses natural rubber with neoprene."""
from ._table import table_models

ANSWERS = {
    "monomer": {"key": "isoprene", "C07-M1": "acrylonitrile", "C07-M2": "caprolactam", "C07-M3": "tetrafluoroethene"},
    "vulcanise": {"key": "sulfur", "C07-M4": "oxygen", "C07-M5": "chlorine", "C07-M6": "hydrogen"},
    "buna_s": {"key": "butadiene_styrene", "C07-M7": "butadiene_acrylonitrile", "C07-M8": "chloroprene", "C07-M9": "isoprene_styrene"},
    "neoprene": {"key": "chloroprene", "C07-M10": "isoprene", "C07-M11": "vinyl_chloride", "C07-M12": "styrene"},
    "natural": {"key": "cis_polyisoprene", "C07-M13": "trans_polyisoprene", "C07-M14": "polybutadiene", "C07-M15": "polychloroprene"},
}
MODELS = table_models("C07", ANSWERS, 15)
