"""C08 Vitamins: named answers (NCERT's table). Fat-soluble A, D, E, K are stored in liver and fat; water-soluble B
and C are not stored (except B12) and must be eaten regularly. Deficiencies: A night blindness and xerophthalmia,
B1 beriberi, B12 pernicious anaemia, C scurvy, D rickets, E fragile red cells and muscular weakness, K longer
blood clotting time.
M1 mixes C with D; M2 with B1; M3 with A; M4 picks B and C; M5 picks all; M6 picks A and C; M7 picks A; M8 picks D;
M9 picks K; M10 picks B12's anaemia; M11 picks D's rickets; M12 picks E's weakness; M13 picks C; M14 picks A;
M15 picks B1."""
from ._mix import mixed_models

TABLE = {
    "scurvy": {"key": "scurvy", "C08-M1": "rickets", "C08-M2": "beriberi", "C08-M3": "night_blindness"},
    "fat": {"key": "a_d_e_k", "C08-M4": "b_c", "C08-M5": "all_vitamins", "C08-M6": "a_c"},
    "stored": {"key": "vitamin_c", "C08-M7": "vitamin_a", "C08-M8": "vitamin_d", "C08-M9": "vitamin_k"},
    "k": {"key": "slow_clotting", "C08-M10": "anaemia", "C08-M11": "rickets_k", "C08-M12": "muscle_weakness"},
    "rickets": {"key": "vitamin_d", "C08-M13": "vitamin_c", "C08-M14": "vitamin_a", "C08-M15": "vitamin_b1"},
}
MODELS = mixed_models("C08", TABLE, 15)
