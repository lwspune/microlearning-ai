"""C03 IUPAC names: named answers. Longest chain holding the principal group, numbered for its lowest locant; suffix for
the principal group (acid > ketone > alcohol > amine as prefixes go); other groups as alphabetical prefixes; in a tie the
first-cited prefix gets the lower number. CH3CH(OH)COCH2CH3 is 2-hydroxypentan-3-one; CH3CH(NH2)CH2COOH is
3-aminobutanoic acid; '5-ethyl-3-methylheptane' is correctly 3-ethyl-5-methylheptane; CH2=CHCH=CH2 is buta-1,3-diene;
CH3CH(OH)CH2OH is propane-1,2-diol.
M1 numbers from the wrong end; M2 makes OH the principal group; M3 uses the aldehyde suffix; M4 numbers from the wrong
end; M5 makes the amine principal; M6 leaves the COOH carbon out of the chain; M7 accepts the given name; M8 orders the
prefixes by locant; M9 miscounts the chain; M10 drops the 'a'; M11 numbers from the wrong end; M12 writes -yne; M13
numbers from the wrong end; M14 drops 'di'; M15 makes one OH a prefix."""
from ._mix import mixed_models

TABLE = {
    "hydroxyketone": {"key": "hydroxypentan_3_one_2", "C03-M1": "hydroxypentan_3_one_4", "C03-M2": "oxopentan_2_ol_3",
                      "C03-M3": "hydroxypentan_3_al"},
    "amino_acid": {"key": "aminobutanoic_3", "C03-M4": "aminobutanoic_2", "C03-M5": "carboxybutan_2_amine",
                   "C03-M6": "aminopropanoic_3"},
    "heptane": {"key": "ethyl3_methyl5", "C03-M7": "ethyl5_methyl3", "C03-M8": "methyl3_ethyl5", "C03-M9": "octane_name"},
    "diene": {"key": "buta_1_3_diene", "C03-M10": "but_1_3_diene", "C03-M11": "buta_2_4_diene", "C03-M12": "butadiyne"},
    "diol": {"key": "propane_1_2_diol", "C03-M13": "propane_2_3_diol", "C03-M14": "propan_1_2_ol", "C03-M15": "hydroxypropan_1_ol"},
}
MODELS = mixed_models("C03", TABLE, 15)
