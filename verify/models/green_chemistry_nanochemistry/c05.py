"""C05 Making and studying nanomaterials: named answers. Characterisation (Balbharati Table 16.1): UV-visible
spectroscopy gives preliminary confirmation that nanoparticles formed; XRD gives particle size, crystal structure and
geometry; FTIR gives the absorption of functional groups; SEM gives the structure of the surface; TEM gives size and
shape. The sol-gel method (bottom-up) runs hydrolysis, polycondensation, drying and thermal decomposition.
M1 thinks FTIR gives particle size; M2 thinks it confirms formation; M3 thinks it gives crystal structure; M4 picks FTIR;
M5 picks UV-visible spectroscopy; M6 equates surface structure with geometry; M7 picks XRD for the surface; M8 swaps the
first two sol-gel steps; M9 starts with drying; M10 starts with thermal decomposition; M11 calls sol-gel top-down; M12
calls it a characterisation technique; M13 thinks it makes bulk crystals."""
from ._table import table_models

ANSWERS = {
    "ftir": {"key": "functional_groups", "C05-M1": "particle_size", "C05-M2": "confirm_formation", "C05-M3": "crystal_structure"},
    "geometry": {"key": "xrd", "C05-M4": "ftir", "C05-M5": "uv_visible", "C05-M6": "sem"},
    "surface": {"key": "sem", "C05-M7": "xrd", "C05-M4": "ftir", "C05-M5": "uv_visible"},
    "solgel": {"key": "hydro_poly_dry_thermal", "C05-M8": "poly_hydro_dry_thermal", "C05-M9": "dry_hydro_poly_thermal",
               "C05-M10": "thermal_hydro_poly_dry"},
    "bottom_up": {"key": "bottom_up_method", "C05-M11": "top_down_method", "C05-M12": "characterisation", "C05-M13": "bulk_crystals"},
}
MODELS = table_models("C05", ANSWERS, 13)
