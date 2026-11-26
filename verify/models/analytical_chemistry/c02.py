"""C02 Rounding in calculations: named answers. Round to the digits kept: if the next digit is under 5 leave the last
kept digit, if 5 or more raise it by one (25.55 -> 26 to two figures); keep the magnitude (199 -> 2.0 x 10^2). A sum
keeps the fewest decimal places (2.3 + 14.57 + 0.0285 = 16.8985 -> 16.9); a product keeps the fewest significant
figures (4.2 x 1.135 = 4.767 -> 4.8).
M1 rounds a digit under 5 up; M2 keeps an extra figure; M3 loses the decimal point; M4 truncates the last digit; M5
writes 20, losing the magnitude; M6 writes 200, which does not show two figures; M7 keeps two decimal places; M8 applies
the significant-figure rule to a sum; M9 keeps every digit; M10 truncates instead of rounding; M11 rounds to one
figure; M12 drops the trailing 5s; M13 keeps three figures; M14 rounds to one figure."""
from ._mix import mixed_models

TABLE = {
    "r1223": {"key": "r_1_2", "C02-M1": "r_1_3", "C02-M2": "r_1_22", "C02-M3": "r_12"},
    "r199": {"key": "r_2_0_e2", "C02-M4": "r_19", "C02-M5": "r_20", "C02-M6": "r_200"},
    "sum": {"key": "s_16_9", "C02-M7": "s_16_90", "C02-M8": "s_17", "C02-M9": "s_16_8985"},
    "product": {"key": "m_4_8", "C02-M9": "m_4_767", "C02-M10": "m_4_7", "C02-M11": "m_5"},
    "r2555": {"key": "r_26", "C02-M12": "r_25", "C02-M13": "r_25_6", "C02-M14": "r_30"},
}
MODELS = mixed_models("C02", TABLE, 14)
