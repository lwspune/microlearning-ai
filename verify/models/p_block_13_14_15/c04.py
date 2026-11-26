"""C04 Catenation and pi bonds: named answers. Catenation (atoms of one element bonding into chains and rings) is far
greater for C than Si because C-C bonds are much stronger. Small C and N form strong p-pi/p-pi multiple bonds (N2 has
N#N), heavier atoms do not (phosphorus forms P4 with single bonds); CO2 is a small molecule with C=O, SiO2 a network of
single Si-O bonds.
M1 gives Si more valence electrons; M2 calls C larger; M3 denies Si p orbitals; M4 picks phosphorus; M5 picks silicon;
M6 picks lead; M7 calls P a metal; M8 calls N larger; M9 denies P lone pairs; M10 credits hydrogen bonds; M11 calls Si
more electronegative; M12 calls CO2 ionic; M13 confuses catenation with oxidation; M14 with ion formation; M15 with
allotropy."""
from ._mix import mixed_models

TABLE = {
    "c_si": {"key": "strong_c_c", "C04-M1": "si_more_electrons", "C04-M2": "c_larger", "C04-M3": "si_no_p"},
    "pi_bonds": {"key": "nitrogen", "C04-M4": "phosphorus", "C04-M5": "silicon", "C04-M6": "lead"},
    "n2_p4": {"key": "triple_vs_weak_pi", "C04-M7": "p_metal", "C04-M8": "n_larger", "C04-M9": "p_no_lone_pairs"},
    "co2_sio2": {"key": "pi_vs_network", "C04-M10": "hydrogen_bonds", "C04-M11": "si_electronegative", "C04-M12": "co2_ionic"},
    "define": {"key": "self_chains", "C04-M13": "with_oxygen", "C04-M14": "forms_ions", "C04-M15": "allotropes"},
}
MODELS = mixed_models("C04", TABLE, 15)
