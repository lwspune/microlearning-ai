"""C01 Scientific notation and significant figures: named answers. Write N x 10^n with 1 <= N < 10; significant figures
are all nonzero digits, zeros between them and trailing zeros after a decimal point; leading zeros and the power of ten
never count. Multiplying multiplies the N's and adds the exponents.
M1 drops a trailing zero after the decimal point; M2 counts the digits of the power of ten; M3 writes the number out and
counts every digit; M4 skips a zero between nonzero digits; M5 counts every digit of the number written out; M6 counts
leading zeros; M7 counts the zeros after the point but not the one before it; M8 thinks a number below 1 has one
significant figure; M9 flips the exponent's sign; M10 leaves N outside 1 to 10; M11 miscounts the places moved; M12 adds
the N's; M13 multiplies the exponents."""
from ._mix import mixed_models

TABLE = {
    "sf_150": {"key": "three", "C01-M1": "two", "C01-M2": "six", "C01-M3": "five"},
    "sf_avogadro": {"key": "four", "C01-M4": "three", "C01-M2": "eight", "C01-M5": "twenty_four"},
    "sf_small": {"key": "two", "C01-M6": "six", "C01-M7": "five", "C01-M8": "one"},
    "notation": {"key": "e_3498_m4", "C01-M9": "e_3498_p4", "C01-M10": "e_3498_m5_big", "C01-M11": "e_3498_m3"},
    "product": {"key": "p_39_e14", "C01-M12": "p_125_e13", "C01-M13": "p_39_e40", "C01-M10": "p_3864_e13"},
}
MODELS = mixed_models("C01", TABLE, 13)
