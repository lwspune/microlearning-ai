"""C04 Structural and geometrical isomerism: named answers. CH3CH=CHCH3 shows geometrical (cis-trans) isomerism;
diethylamine and N-methylpropylamine are metamers (different groups on the same functional group); butan-2-ol and
diethyl ether are functional group isomers; butane and 2-methylpropane are chain isomers. But-1-ene has no cis-trans
isomers because C1 carries two identical H atoms.
M1 says position; M2 says chain; M3 says tautomerism; M4 says chain; M5 says position; M6 says functional group; M7 says
metamers; M8 says position; M9 says chain; M10 says position; M11 says geometrical; M12 says metamers; M13 thinks
but-1-ene has no C=C; M14 thinks rotation is free about C=C; M15 thinks it has fewer carbons."""
from ._mix import mixed_models

TABLE = {
    "butene2": {"key": "geometrical", "C04-M1": "position", "C04-M2": "chain", "C04-M3": "tautomerism"},
    "amines": {"key": "metamers", "C04-M4": "chain", "C04-M5": "position", "C04-M6": "functional_group"},
    "alcohol_ether": {"key": "functional_group", "C04-M7": "metamers", "C04-M8": "position", "C04-M9": "chain"},
    "butanes": {"key": "chain", "C04-M10": "position", "C04-M11": "geometrical", "C04-M12": "metamers"},
    "butene1": {"key": "two_h_on_c1", "C04-M13": "no_double_bond", "C04-M14": "free_rotation", "C04-M15": "fewer_carbons"},
}
MODELS = mixed_models("C04", TABLE, 15)
