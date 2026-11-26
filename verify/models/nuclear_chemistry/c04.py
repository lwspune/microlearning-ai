"""C04 Modes of radioactive decay: named answers, the alpha and beta counts checked below. Alpha decay lowers A by 4 and
Z by 2; beta-minus raises Z by 1 with A unchanged; gamma changes neither. Number of alphas = dA / 4; betas = 2 x alphas
- dZ. An alpha particle is a helium nucleus, He2+, with no electrons.
M1 ignores beta emission; M2 swaps the counts; M3 takes the beta count from the total change in Z; M4 thinks alpha decay
raises Z; M5 thinks it leaves Z unchanged; M6 thinks it changes Z by 1; M7 equates the alpha particle with a helium
atom; M8 gives it four protons; M9 calls it an electron; M10 thinks Z falls; M11 thinks A falls by 4; M12 thinks
nothing changes."""
from ._mix import mixed_models


def counts(a1, z1, a2, z2):
    alphas = (a1 - a2) // 4
    return alphas, 2 * alphas - (z1 - z2)


assert counts(237, 93, 209, 83) == (7, 4)
assert counts(232, 90, 208, 82) == (6, 4)

TABLE = {
    "np": {"key": "a7_b4", "C04-M1": "a7_b0", "C04-M2": "a4_b7", "C04-M3": "a7_b10"},
    "th": {"key": "a6_b4", "C04-M1": "a6_b0", "C04-M2": "a4_b6", "C04-M3": "a6_b8"},
    "group": {"key": "group_18", "C04-M4": "group_14", "C04-M5": "group_16", "C04-M6": "group_17"},
    "alpha_he": {"key": "nucleus_no_electrons", "C04-M7": "identical", "C04-M8": "four_protons", "C04-M9": "electron"},
    "beta": {"key": "z_up_a_same", "C04-M10": "z_down", "C04-M11": "a_down_4", "C04-M12": "nothing"},
}
MODELS = mixed_models("C04", TABLE, 12)
