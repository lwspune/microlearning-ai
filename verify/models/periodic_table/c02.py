"""C02 Group and period from configuration: named answers. The last subshell filled gives the block; the valence shell
gives the period. s block: group = valence electrons; p block: group = 10 + valence electrons. ns2 np5 is group 17;
Ge (period 4, group 14) is 4s2 4p2; Z = 3 (Li) and 12 (Mg) are s block; Z = 13 (Al) and 31 (Ga) share group 13;
1s2 2s2 2p6 is period 2, group 18.
M1 counts only the p electrons; M2 forgets to add 10; M3 reads only the s electrons; M4 uses 14 - 10 = 4 p electrons; M5
uses shell 3; M6 writes d for p; M7 picks group 15; M8 picks group 14; M9 picks halogens; M10 picks groups 1 and 2; M11
picks Mg and Ne; M12 picks Sc and As; M13 forgets to add 10; M14 counts the shells wrongly; M15 counts only p electrons
plus 10."""
from ._mix import mixed_models

TABLE = {
    "ns2np5": {"key": "group_17", "C02-M1": "group_5", "C02-M2": "group_7", "C02-M3": "group_2"},
    "germanium": {"key": "s4_2_p4_2", "C02-M4": "s4_2_p4_4", "C02-M5": "s3_2_p3_2", "C02-M6": "s4_2_d4_2"},
    "s_block": {"key": "z_3_12", "C02-M7": "z_7_15", "C02-M8": "z_6_14", "C02-M9": "z_9_17"},
    "similar": {"key": "z_13_31", "C02-M10": "z_11_20", "C02-M11": "z_12_10", "C02-M12": "z_21_33"},
    "neon": {"key": "p2_g18", "C02-M13": "p2_g8", "C02-M14": "p3_g18", "C02-M15": "p2_g16"},
}
MODELS = mixed_models("C02", TABLE, 15)
