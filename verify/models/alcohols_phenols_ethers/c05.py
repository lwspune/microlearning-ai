"""C05 Acidity of alcohols and phenols: answer models (the key, and one per misconception).

Named answers. Phenols are more acidic than alcohols (phenoxide is resonance stabilised); electron-withdrawing NO2
(ortho, para most) raises acidity, electron-donating CH3 lowers it; alkyl groups (+I) make tertiary alcohols the least
acidic. Alcohols react with Na but not NaOH; phenol reacts with Na and NaOH but not NaHCO3.
"""
from sympy import Symbol

ANSWERS = {
    # M1 thinks alcohols are at least as acidic as phenol; M2 thinks CH3 (electron donor) raises acidity; M3 thinks
    # NO2 lowers acidity; M4 thinks a meta NO2 lowers acidity below phenol's; M5 thinks phenol is acidic enough to
    # react with NaHCO3; M6 thinks Na takes the alcohol's OH, giving NaOH; M7 thinks alcohols and phenols are neutral
    # and react with nothing; M8 reverses the whole order.
    "least": {"key": "p_cresol", "C05-M2": "phenol", "C05-M3": "p_nitrophenol", "C05-M4": "m_nitrophenol"},
    "why": {"key": "phenoxide_resonance", "C05-M1": "ethanol_more", "C05-M7": "equal_neutral",
            "C05-M2": "ring_releases"},
    "reagent": {"key": "naoh", "C05-M5": "nahco3", "C05-M7": "none", "C05-M1": "na_only_ethanol"},
    "sodium": {"key": "ethoxide_h2", "C05-M6": "naoh_ethene", "C05-M7": "no_reaction", "C05-M5": "ethoxide_co2"},
    "order": {"key": "tbu_et_ph_pno2", "C05-M1": "ph_pno2_et_tbu", "C05-M3": "tbu_et_pno2_ph", "C05-M8": "pno2_ph_et_tbu"},
}


def key(v, p):
    return Symbol(ANSWERS[p["q"]]["key"])


def _m(mid):
    def model(v, p):
        table = ANSWERS[p["q"]]
        if mid not in table:
            raise ValueError("does not apply to this item")
        return Symbol(table[mid])
    return model


MODELS = {"key": key, **{f"C05-M{i}": _m(f"C05-M{i}") for i in range(1, 9)}}
