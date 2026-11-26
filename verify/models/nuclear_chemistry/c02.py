"""C02 Nuclear stability: named answers. Stable nuclides lie in a belt of N/Z near 1 for light nuclei rising to about
1.5 for heavy ones. Even-even nuclides are the most stable, odd-odd the least (an unpaired proton and an unpaired
neutron). Nuclides above the belt (too many neutrons) emit beta-minus (n -> p); below it (too few) they emit beta-plus
or capture an electron.
M1 picks odd-odd; M2 picks even-odd; M3 thinks parity does not matter; M4 picks beta-plus; M5 picks alpha; M6 picks gamma
only; M7 gives 1; M8 gives 0.5; M9 gives 3; M10 picks beta-minus; M11 picks neutron emission; M12 calls them stable; M13
credits electrons; M14 credits size; M15 thinks they have no neutrons."""
from ._mix import mixed_models

TABLE = {
    "most_stable": {"key": "even_even", "C02-M1": "odd_odd", "C02-M2": "even_odd", "C02-M3": "no_matter"},
    "above_belt": {"key": "beta_minus", "C02-M4": "beta_plus", "C02-M5": "alpha", "C02-M6": "gamma_only"},
    "heavy_ratio": {"key": "r_1_5", "C02-M7": "r_1", "C02-M8": "r_0_5", "C02-M9": "r_3"},
    "below_belt": {"key": "beta_plus_capture", "C02-M10": "beta_minus", "C02-M11": "neutron_emission", "C02-M12": "stable"},
    "odd_odd": {"key": "unpaired_both", "C02-M13": "electrons", "C02-M14": "size", "C02-M15": "no_neutrons"},
}
MODELS = mixed_models("C02", TABLE, 15)
