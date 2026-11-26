"""C03 Dimensions and dimensional formulae: answer models (the key, and one per misconception). Every item is named.

params["ask"]: "LMT" (what [L M T^-2] is), "ke" (what shares kinetic energy's dimensions), "lsqrt" (dimensions of
l sqrt(l/g)), "B" (dimensions of B from F = Bev), "pressure" (dimensions of pressure).
"""
from sympy import Symbol

NAMED = {
    "LMT": {"key": "force_q", "C03-M1": "work_q", "C03-M2": "accel_q", "C03-M3": "momentum_q"},
    "ke": {"key": "work_k", "C03-M4": "force_k", "C03-M5": "pressure_k", "C03-M6": "momentum_k"},
    "lsqrt": {"key": "d_LT", "C03-M7": "d_L_per_T", "C03-M8": "d_LT2", "C03-M9": "d_T_only"},
    "B": {"key": "d_MT2I", "C03-M10": "d_MT1", "C03-M11": "d_ML2T2I", "C03-M12": "d_MT1I"},
    "pressure": {"key": "d_ML1T2", "C03-M13": "d_MLT2", "C03-M14": "d_ML3T2", "C03-M15": "d_ML2T2"},
}


def key(v, p):
    return Symbol(NAMED[p["ask"]]["key"])


def _m(mid):
    def model(v, p):
        if mid not in NAMED[p["ask"]]:
            raise ValueError("does not apply to this item")
        return Symbol(NAMED[p["ask"]][mid])
    return model


MODELS = {"key": key, **{f"C03-M{i}": _m(f"C03-M{i}") for i in range(1, 16)}}
# M1 adds a length (work); M2 drops the mass (acceleration); M3 uses T^-1 (momentum).
# M4 confuses energy with force; M5 with pressure; M6 with momentum.
# M7 turns l/g upside down; M8 forgets the square root; M9 forgets the leading l.
# M10 treats the charge as dimensionless; M11 multiplies instead of dividing; M12 gives charge the dimensions of current.
# M13 forgets to divide by the area; M14 multiplies by the area; M15 divides by L^2 without force's own L.
