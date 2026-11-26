"""C03 Solvent extraction: named answers. A solute moves from one liquid into an immiscible solvent that dissolves it
better, shaken in a separating funnel; the less dense liquid forms the upper layer; several small extractions remove
more solute than one large one with the same total solvent.
M1 wants a solvent miscible with water; M2 wants one that dissolves the solute less; M3 wants one that reacts with it;
M4 confuses extraction with evaporation; M5 with filtration; M6 with chromatography; M7 picks a fractionating column; M8
picks a Buchner funnel; M9 picks a chromatography column; M10 thinks one large extraction is better; M11 thinks they are
equal; M12 thinks only shaking time matters; M13 puts the lighter liquid at the bottom; M14 thinks the liquids mix; M15
expects a precipitate."""
from ._mix import mixed_models

TABLE = {
    "properties": {"key": "immiscible_better", "C03-M1": "miscible", "C03-M2": "dissolves_less", "C03-M3": "reacts"},
    "define": {"key": "transfer_solute", "C03-M4": "boil_off", "C03-M5": "filter", "C03-M6": "rates_on_paper"},
    "apparatus": {"key": "separating_funnel", "C03-M7": "fractionating_column", "C03-M8": "buchner_funnel", "C03-M9": "column"},
    "portions": {"key": "several_small", "C03-M10": "one_large", "C03-M11": "same", "C03-M12": "shaking_time"},
    "layers": {"key": "upper", "C03-M13": "lower", "C03-M14": "mixed", "C03-M15": "precipitate"},
}
MODELS = mixed_models("C03", TABLE, 15)
