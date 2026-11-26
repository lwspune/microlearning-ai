"""C03 Disaccharides and polysaccharides: named answers. Sucrose: alpha-glucose C1 to beta-fructose C2 (both anomeric
carbons used), nonreducing; hydrolysis turns (+) rotation to (-) (inversion) because fructose's laevorotation outweighs
glucose's dextrorotation. Maltose: alpha-1,4; lactose (galactose + glucose): beta-1,4; both reducing. Starch (amylose
alpha-1,4; amylopectin with alpha-1,6 branches), glycogen; cellulose is beta-1,4 glucose, which humans cannot digest.
M1 takes the sucrose link for any disaccharide; M2 takes the beta-1,4 link for maltose; M3 takes the alpha-1,6 branch
link for the main link; M4 confuses lactose with maltose; M5 thinks sucrose contains no carbonyl units at all; M6 thinks
fructose units can never reduce Tollens; M7 thinks sucrose is too large to react; M8 thinks the glycosidic bond itself
is inverted; M9 thinks glucose turns into fructose; M10 thinks D changes to L; M11 thinks cellulose is made of fructose;
M12 blames branching; M13 thinks cellulose has alpha-1,6 links."""
from ._table import table_models

ANSWERS = {
    "maltose": {"key": "alpha_1_4", "C03-M1": "alpha_beta_1_2", "C03-M2": "beta_1_4", "C03-M3": "alpha_1_6"},
    "lactose": {"key": "beta_1_4", "C03-M1": "alpha_beta_1_2", "C03-M4": "alpha_1_4", "C03-M3": "alpha_1_6"},
    "tollens": {"key": "anomeric_tied", "C03-M5": "no_carbonyl", "C03-M6": "fructose_never", "C03-M7": "too_large"},
    "inversion": {"key": "sign_changes", "C03-M8": "bond_inverted", "C03-M9": "glucose_to_fructose", "C03-M10": "d_to_l"},
    "cellulose": {"key": "beta_links", "C03-M11": "fructose", "C03-M12": "branched", "C03-M13": "alpha_1_6"},
}
MODELS = table_models("C03", ANSWERS, 13)
