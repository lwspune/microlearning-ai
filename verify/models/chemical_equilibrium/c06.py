"""C06 Le Chatelier's principle: named answers. An equilibrium shifts to oppose a change. For A <=> 2B + heat, raising
the temperature shifts it back to A. For Cl2 + 2NO <=> 2NOCl, adding Cl2 makes more NOCl. With equal gas moles on both
sides (H2 + I2 <=> 2HI) a volume change shifts nothing. Pressure does not change K (only temperature does); a catalyst
shifts nothing but speeds the approach to equilibrium.
M1 increases the volume; M2 adds a catalyst; M3 removes B; M4 removes NO; M5 adds NOCl; M6 removes Cl2; M7 shifts right;
M8 shifts left; M9 says it cannot be predicted; M10 thinks K rises; M11 thinks K falls; M12 thinks K becomes zero; M13
thinks a catalyst shifts it right; M14 thinks a catalyst raises K; M15 thinks a catalyst shifts it left."""
from ._mix import mixed_models

TABLE = {
    "more_a": {"key": "raise_temperature", "C06-M1": "increase_volume", "C06-M2": "add_catalyst", "C06-M3": "remove_b"},
    "nocl": {"key": "add_cl2", "C06-M4": "remove_no", "C06-M5": "add_nocl", "C06-M6": "remove_cl2"},
    "volume": {"key": "unaltered", "C06-M7": "shifts_right", "C06-M8": "shifts_left", "C06-M9": "unpredictable"},
    "pressure_k": {"key": "k_unchanged", "C06-M10": "k_rises", "C06-M11": "k_falls", "C06-M12": "k_zero"},
    "catalyst": {"key": "no_shift_faster", "C06-M13": "shifts_right", "C06-M14": "raises_k", "C06-M15": "shifts_left"},
}
MODELS = mixed_models("C06", TABLE, 15)
