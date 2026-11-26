"""C06 Kinetic theory and real gases: named answers. Kinetic theory: molecules of negligible volume, in random motion,
with no attractions and elastic collisions; an ideal gas has no intermolecular forces. Real gases deviate most at high
pressure and low temperature, and liquefy only below their critical temperature (water: Tc = 647.1 K), the temperature
above which no pressure can liquefy a gas.
M1 says small forces; M2 says large forces; M3 says the same as real gases; M4 gives strong attractions; M5 makes
collisions lose energy; M6 puts molecules at rest; M7 swaps the conditions; M8 says low P and low T; M9 says high P and
high T; M10 puts water above Tc; M11 thinks pressure alone liquefies any gas; M12 limits Tc to CO2; M13 calls Tc the
boiling point; M14 calls it the ideal temperature; M15 calls it the lowest temperature."""
from ._mix import mixed_models

TABLE = {
    "ideal_forces": {"key": "nil", "C06-M1": "small", "C06-M2": "large", "C06-M3": "same_as_real"},
    "postulate": {"key": "negligible_volume", "C06-M4": "strong_attraction", "C06-M5": "inelastic", "C06-M6": "at_rest"},
    "deviate": {"key": "high_p_low_t", "C06-M7": "low_p_high_t", "C06-M8": "low_p_low_t", "C06-M9": "high_p_high_t"},
    "water_tc": {"key": "below_tc", "C06-M10": "above_tc", "C06-M11": "pressure_alone", "C06-M12": "only_co2"},
    "tc_define": {"key": "no_liquefaction_above", "C06-M13": "boiling_point", "C06-M14": "becomes_ideal", "C06-M15": "lowest"},
}
MODELS = mixed_models("C06", TABLE, 15)
