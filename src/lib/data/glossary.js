// Centralized glossary of tissue culture terms and abbreviations

// Use Map for O(1) lookup performance
const glossaryData = {
	// Hormones & Growth Regulators
	'BAP': {
		term: 'BAP',
		full: '6-Benzylaminopurine',
		definition: 'Most commonly used cytokinin hormone that promotes shoot development and cell division',
		type: 'hormone'
	},
	'IBA': {
		term: 'IBA',
		full: 'Indole-3-butyric acid',
		definition: 'Stable auxin hormone highly effective for promoting root development',
		type: 'hormone'
	},
	'NAA': {
		term: 'NAA',
		full: 'Naphthaleneacetic acid',
		definition: 'Strong synthetic auxin for root formation - use carefully at lower concentrations',
		type: 'hormone'
	},
	'IAA': {
		term: 'IAA',
		full: 'Indole-3-acetic acid',
		definition: 'Natural auxin hormone, less stable than IBA but effective for root promotion',
		type: 'hormone'
	},
	'TDZ': {
		term: 'TDZ',
		full: 'Thidiazuron',
		definition: 'Very potent cytokinin - use at much lower concentrations than BAP',
		type: 'hormone'
	},
	'GA3': {
		term: 'GA3',
		full: 'Gibberellic acid',
		definition: 'Growth stimulant used to accelerate shoot elongation and development',
		type: 'hormone'
	},
	'2,4-D': {
		term: '2,4-D',
		full: '2,4-Dichlorophenoxyacetic acid',
		definition: 'Synthetic auxin that can cause somaclonal variation - avoid for true-to-type propagation',
		type: 'hormone'
	},
	'cytokinin': {
		term: 'Cytokinin',
		full: 'Cytokinin',
		definition: 'Plant hormone class that promotes shoot formation and cell division (e.g., BAP, Kinetin, TDZ)',
		type: 'hormone'
	},
	'auxin': {
		term: 'Auxin',
		full: 'Auxin',
		definition: 'Plant hormone class that promotes root formation and cell elongation (e.g., IBA, NAA, IAA)',
		type: 'hormone'
	},
	
	// Media & Formulations
	'MS': {
		term: 'MS',
		full: 'Murashige and Skoog (1962)',
		definition: 'Most widely used basal medium containing optimal balance of nutrients, vitamins, and minerals',
		type: 'media'
	},
	'WPM': {
		term: 'WPM',
		full: 'Woody Plant Medium',
		definition: 'Specialized medium with lower salt concentrations, better for trees and shrubs than MS',
		type: 'media'
	},
	'pH': {
		term: 'pH',
		full: 'Potential of Hydrogen',
		definition: 'Measure of acidity/alkalinity - tissue culture media typically requires pH 5.6-5.8',
		type: 'media'
	},
	
	// Equipment & Techniques
	'SAB': {
		term: 'SAB',
		full: 'Still Air Box',
		definition: 'Enclosed workspace that minimizes air movement to maintain sterile conditions',
		type: 'equipment'
	},
	'PPM': {
		term: 'PPM™',
		full: 'Plant Preservative Mixture',
		definition: 'Biocide that suppresses bacterial and fungal contamination without harming plant tissue',
		type: 'equipment'
	},
	'PSI': {
		term: 'PSI',
		full: 'Pounds per Square Inch',
		definition: 'Pressure measurement - autoclaving requires 15 PSI at 121°C for sterilization',
		type: 'equipment'
	},
	
	// Scientific Terms
	'explant': {
		term: 'Explant',
		full: 'Explant',
		definition: 'Plant tissue sample (leaf, stem, node, etc.) used to initiate tissue culture',
		type: 'scientific'
	},
	'callus': {
		term: 'Callus',
		full: 'Callus',
		definition: 'Undifferentiated mass of plant cells that can develop into complete plants under proper conditions',
		type: 'scientific'
	},
	'acclimatization': {
		term: 'Acclimatization',
		full: 'Acclimatization',
		definition: 'Gradual adaptation process transitioning plants from sterile lab to ambient environment',
		type: 'scientific'
	},
	'meristematic': {
		term: 'Meristematic tissue',
		full: 'Meristematic tissue',
		definition: 'Actively dividing plant cells capable of forming new organs (shoots, roots, leaves)',
		type: 'scientific'
	},
	'endophytes': {
		term: 'Endophytes',
		full: 'Endophytes',
		definition: 'Microorganisms (bacteria/fungi) living inside plant tissue - difficult to eliminate with surface sterilization',
		type: 'scientific'
	},
	'hyperhydricity': {
		term: 'Hyperhydricity',
		full: 'Hyperhydricity (Vitrification)',
		definition: 'Glassy, waterlogged appearance caused by excessive humidity and poor gas exchange',
		type: 'scientific'
	},
	'vitrification': {
		term: 'Vitrification',
		full: 'Vitrification (Hyperhydricity)',
		definition: 'Same as hyperhydricity - glassy plant syndrome from oxidative stress',
		type: 'scientific'
	},
	'somaclonal': {
		term: 'Somaclonal variation',
		full: 'Somaclonal variation',
		definition: 'Genetic/phenotypic changes that occur during tissue culture - can affect plant uniformity',
		type: 'scientific'
	},
	'phenolic': {
		term: 'Phenolic oxidation',
		full: 'Phenolic oxidation',
		definition: 'Browning reaction from oxidation of phenolic compounds - common in woody plants',
		type: 'scientific'
	},
	'recalcitrant': {
		term: 'Recalcitrant',
		full: 'Recalcitrant',
		definition: 'Plant species/tissues that resist or fail to respond to in vitro culture conditions',
		type: 'scientific'
	},
	
	// Laboratory Techniques & Equipment
	'laminar flow hood': {
		term: 'Laminar flow hood',
		full: 'Laminar flow hood',
		definition: 'HEPA-filtered air system creating sterile work environment with continuous unidirectional airflow',
		type: 'equipment'
	},
	'autoclave': {
		term: 'Autoclave',
		full: 'Autoclave',
		definition: 'High-pressure steam sterilization device (121°C, 15 PSI) used to sterilize media, tools, and vessels',
		type: 'equipment'
	},
	'autoclaving': {
		term: 'Autoclaving',
		full: 'Autoclaving',
		definition: 'Sterilization process using pressurized steam at 121°C for 15-20 minutes',
		type: 'equipment'
	},
	'surface sterilization': {
		term: 'Surface sterilization',
		full: 'Surface sterilization',
		definition: 'Chemical treatment to eliminate microorganisms from plant tissue surface (typically bleach or ethanol)',
		type: 'equipment'
	},
	'aseptic technique': {
		term: 'Aseptic technique',
		full: 'Aseptic technique',
		definition: 'Sterile handling procedures to prevent contamination during tissue culture work',
		type: 'equipment'
	},
	'subculture': {
		term: 'Subculture',
		full: 'Subculture',
		definition: 'Transferring tissue to fresh media to continue growth - typically every 4-6 weeks',
		type: 'scientific'
	},
	'subculturing': {
		term: 'Subculturing',
		full: 'Subculturing',
		definition: 'Process of transferring tissue to fresh media to continue growth',
		type: 'scientific'
	},
	'photoperiod': {
		term: 'Photoperiod',
		full: 'Photoperiod',
		definition: 'Duration of light exposure per 24-hour period (typically 16 hours light, 8 hours dark)',
		type: 'scientific'
	},
	'in vitro': {
		term: 'In vitro',
		full: 'In vitro',
		definition: 'Latin: "in glass" - refers to growth under controlled laboratory conditions',
		type: 'scientific'
	},
	'ex vitro': {
		term: 'Ex vitro',
		full: 'Ex vitro',
		definition: 'Latin: "out of glass" - refers to growth outside laboratory in normal environment',
		type: 'scientific'
	},
	'bleach solution': {
		term: 'Bleach solution',
		full: 'Bleach solution',
		definition: 'Diluted sodium hypochlorite (1-15%) used for surface sterilization of plant tissue',
		type: 'equipment'
	},
	'sodium hypochlorite': {
		term: 'Sodium hypochlorite',
		full: 'Sodium hypochlorite',
		definition: 'Active chemical in bleach - powerful disinfectant for surface sterilization',
		type: 'equipment'
	},
	'surfactant': {
		term: 'Surfactant',
		full: 'Surfactant',
		definition: 'Wetting agent (e.g., soap, Tween 20) that reduces surface tension for better sterilant penetration',
		type: 'equipment'
	},
	'tween 20': {
		term: 'Tween 20',
		full: 'Tween 20 (Polysorbate 20)',
		definition: 'Common surfactant added to sterilization solutions to improve chemical penetration',
		type: 'equipment'
	},
	'ethanol': {
		term: 'Ethanol',
		full: 'Ethanol',
		definition: '70% alcohol solution used for pre-sterilization and disinfection - breaks surface tension',
		type: 'equipment'
	},
	'hydrogen peroxide': {
		term: 'Hydrogen peroxide',
		full: 'Hydrogen peroxide (H₂O₂)',
		definition: 'Alternative sterilizing agent - oxidizer that breaks down to water and oxygen',
		type: 'equipment'
	},
	'scalpel': {
		term: 'Scalpel',
		full: 'Scalpel',
		definition: 'Surgical knife with sharp blade used for precise cutting of plant tissue',
		type: 'equipment'
	},
	'forceps': {
		term: 'Forceps',
		full: 'Forceps',
		definition: 'Sterile tweezers for handling delicate plant tissue during culture work',
		type: 'equipment'
	},
	'culture vessel': {
		term: 'Culture vessel',
		full: 'Culture vessel',
		definition: 'Container (jar, tube, or dish) holding tissue culture and media',
		type: 'equipment'
	},
	'petri dish': {
		term: 'Petri dish',
		full: 'Petri dish',
		definition: 'Flat circular glass or plastic dish with lid - common culture container',
		type: 'equipment'
	},
	'distilled water': {
		term: 'Distilled water',
		full: 'Distilled water',
		definition: 'Purified water with minerals and impurities removed - essential for media preparation',
		type: 'media'
	},
	
	// Plant Parts & Structures
	'petiole': {
		term: 'Petiole',
		full: 'Petiole',
		definition: 'Leaf stalk connecting leaf blade to stem - commonly used explant for African violets',
		type: 'scientific'
	},
	'node': {
		term: 'Node',
		full: 'Node',
		definition: 'Point on stem where leaf attaches - contains meristematic tissue ideal for culture',
		type: 'scientific'
	},
	'nodal': {
		term: 'Nodal',
		full: 'Nodal explant',
		definition: 'Stem section containing a node - preferred explant for many species',
		type: 'scientific'
	},
	'shoot tip': {
		term: 'Shoot tip',
		full: 'Shoot tip',
		definition: 'Growing end of plant stem containing apical meristem - highly regenerative tissue',
		type: 'scientific'
	},
	'leaf section': {
		term: 'Leaf section',
		full: 'Leaf section',
		definition: 'Cut portion of leaf used as explant - effective for begonias and other species',
		type: 'scientific'
	},
	'crown': {
		term: 'Crown',
		full: 'Crown',
		definition: 'Central growing point where stems emerge from plant base - especially in hostas',
		type: 'scientific'
	},
	'axillary bud': {
		term: 'Axillary bud',
		full: 'Axillary bud',
		definition: 'Dormant bud at leaf-stem junction - produces genetically stable shoots',
		type: 'scientific'
	},
	'apical meristem': {
		term: 'Apical meristem',
		full: 'Apical meristem',
		definition: 'Growing tip tissue with rapidly dividing cells - primary growth region',
		type: 'scientific'
	},
	'variegation': {
		term: 'Variegation',
		full: 'Variegation',
		definition: 'Multi-colored leaf patterns caused by chlorophyll variation - can be maintained through culture',
		type: 'scientific'
	},
	
	// Media Components & Chemicals
	'agar': {
		term: 'Agar',
		full: 'Agar',
		definition: 'Seaweed-derived gelling agent (7-8 g/L) that solidifies culture media',
		type: 'media'
	},
	'gellan gum': {
		term: 'Gellan gum',
		full: 'Gellan gum',
		definition: 'Alternative gelling agent producing clearer medium than agar - easier contamination detection',
		type: 'media'
	},
	'phytagel': {
		term: 'Phytagel',
		full: 'Phytagel',
		definition: 'Commercial gellan gum product - alternative for agar-sensitive species',
		type: 'media'
	},
	'sucrose': {
		term: 'Sucrose',
		full: 'Sucrose',
		definition: 'Table sugar (20-30 g/L) providing energy since photosynthesis is limited in culture',
		type: 'media'
	},
	'glucose': {
		term: 'Glucose',
		full: 'Glucose',
		definition: 'Simple sugar alternative to sucrose for carbon/energy source in media',
		type: 'media'
	},
	'macronutrients': {
		term: 'Macronutrients',
		full: 'Macronutrients',
		definition: 'Major nutrients (N, P, K, Ca, Mg, S) required in large amounts for plant growth',
		type: 'media'
	},
	'micronutrients': {
		term: 'Micronutrients',
		full: 'Micronutrients',
		definition: 'Trace minerals (Fe, Mn, Zn, Cu, Mo, B) needed in small amounts for enzyme function',
		type: 'media'
	},
	'activated charcoal': {
		term: 'Activated charcoal',
		full: 'Activated charcoal',
		definition: 'Porous carbon that absorbs phenolic compounds, toxins, and excess gases from media',
		type: 'media'
	},
	'ascorbic acid': {
		term: 'Ascorbic acid',
		full: 'Ascorbic acid (Vitamin C)',
		definition: 'Antioxidant added to media to prevent browning from phenolic oxidation',
		type: 'media'
	},
	'citric acid': {
		term: 'Citric acid',
		full: 'Citric acid',
		definition: 'Antioxidant that prevents tissue browning by reducing pH and oxidation',
		type: 'media'
	},
	'kinetin': {
		term: 'Kinetin',
		full: 'Kinetin',
		definition: 'First discovered cytokinin - natural plant hormone with gentler action than BAP',
		type: 'hormone'
	},
	'zeatin': {
		term: 'Zeatin',
		full: 'Zeatin',
		definition: 'Natural cytokinin originally isolated from corn - promotes shoot formation',
		type: 'hormone'
	},
	'thiamine': {
		term: 'Thiamine',
		full: 'Thiamine (Vitamin B1)',
		definition: 'Essential vitamin for carbohydrate metabolism in tissue culture',
		type: 'media'
	},
	'pyridoxine': {
		term: 'Pyridoxine',
		full: 'Pyridoxine (Vitamin B6)',
		definition: 'Vitamin required for amino acid metabolism in cultured tissue',
		type: 'media'
	},
	'nicotinic acid': {
		term: 'Nicotinic acid',
		full: 'Nicotinic acid (Niacin/Vitamin B3)',
		definition: 'Vitamin essential for energy production processes in plant cells',
		type: 'media'
	},
	
	// Growth Stages & Processes
	'establishment': {
		term: 'Establishment',
		full: 'Establishment (Stage I)',
		definition: 'Initial culture stage where explant survives and begins growing (2-6 weeks)',
		type: 'scientific'
	},
	'multiplication': {
		term: 'Multiplication',
		full: 'Multiplication (Stage II)',
		definition: 'Shoot proliferation stage where multiple shoots form from explant (3-8 weeks)',
		type: 'scientific'
	},
	'rooting': {
		term: 'Rooting',
		full: 'Rooting (Stage III)',
		definition: 'Root development stage preparing plantlets for transfer to soil (2-4 weeks)',
		type: 'scientific'
	},
	'propagation': {
		term: 'Propagation',
		full: 'Propagation',
		definition: 'Plant reproduction and multiplication - sexual (seeds) or asexual (cuttings, tissue culture)',
		type: 'scientific'
	},
	'micropropagation': {
		term: 'Micropropagation',
		full: 'Micropropagation',
		definition: 'Rapid plant multiplication through tissue culture - produces genetically identical clones',
		type: 'scientific'
	},
	'organogenesis': {
		term: 'Organogenesis',
		full: 'Organogenesis',
		definition: 'Formation of organs (shoots, roots) directly from tissue without callus stage',
		type: 'scientific'
	},
	'embryogenesis': {
		term: 'Embryogenesis',
		full: 'Somatic embryogenesis',
		definition: 'Formation of embryos from somatic (non-reproductive) cells - advanced technique',
		type: 'scientific'
	},
	'hardening off': {
		term: 'Hardening off',
		full: 'Hardening off',
		definition: 'Gradual acclimatization process preparing plantlets for ambient environment',
		type: 'scientific'
	},
	'transplanting': {
		term: 'Transplanting',
		full: 'Transplanting',
		definition: 'Moving rooted plantlets from culture to soil or growing medium',
		type: 'scientific'
	},
	'regeneration': {
		term: 'Regeneration',
		full: 'Regeneration',
		definition: 'New plant development from cultured tissue through cell division and differentiation',
		type: 'scientific'
	},
	
	// Problems & Conditions
	'contamination': {
		term: 'Contamination',
		full: 'Contamination',
		definition: 'Unwanted microorganisms (bacteria, fungi, mold) growing in culture - causes culture failure',
		type: 'scientific'
	},
	'necrosis': {
		term: 'Necrosis',
		full: 'Necrosis',
		definition: 'Tissue death and browning - often from over-sterilization or stress',
		type: 'scientific'
	},
	'chlorosis': {
		term: 'Chlorosis',
		full: 'Chlorosis',
		definition: 'Yellowing of tissue from chlorophyll loss - indicates nutrient deficiency or stress',
		type: 'scientific'
	},
	'etiolation': {
		term: 'Etiolation',
		full: 'Etiolation',
		definition: 'Pale, stretched growth from insufficient light - plants lack chlorophyll development',
		type: 'scientific'
	},
	'oxidative stress': {
		term: 'Oxidative stress',
		full: 'Oxidative stress',
		definition: 'Cell damage from reactive oxygen species - causes browning and tissue death',
		type: 'scientific'
	},
	'browning': {
		term: 'Browning',
		full: 'Browning',
		definition: 'Tissue darkening from phenolic oxidation - common in woody plants',
		type: 'scientific'
	},
	'vigor': {
		term: 'Vigor',
		full: 'Vigor',
		definition: 'Overall health and growth strength of cultured tissue - indicates culture success',
		type: 'scientific'
	},
	'morphogenesis': {
		term: 'Morphogenesis',
		full: 'Morphogenesis',
		definition: 'Development of plant form and structure through organized growth',
		type: 'scientific'
	},
	
	// Specialized Terms
	'clone': {
		term: 'Clone',
		full: 'Clone',
		definition: 'Genetically identical plant produced through asexual propagation',
		type: 'scientific'
	},
	'cultivar': {
		term: 'Cultivar',
		full: 'Cultivar',
		definition: 'Cultivated plant variety selected for specific desirable characteristics',
		type: 'scientific'
	},
	'genotype': {
		term: 'Genotype',
		full: 'Genotype',
		definition: 'Genetic makeup of organism - DNA sequence determining traits',
		type: 'scientific'
	},
	'phenotype': {
		term: 'Phenotype',
		full: 'Phenotype',
		definition: 'Observable characteristics resulting from genotype and environment interaction',
		type: 'scientific'
	},
	'true-to-type': {
		term: 'True-to-type',
		full: 'True-to-type',
		definition: 'Maintains original plant characteristics without genetic variation',
		type: 'scientific'
	},
	'stock plant': {
		term: 'Stock plant',
		full: 'Stock plant',
		definition: 'Mother plant maintained to provide explants for tissue culture',
		type: 'scientific'
	},
	'donor plant': {
		term: 'Donor plant',
		full: 'Donor plant',
		definition: 'Plant providing tissue sample for culture initiation',
		type: 'scientific'
	}
};

// Create Map for O(1) lookups and add case-insensitive entries
const glossaryMap = new Map();
const lookupCache = new Map(); // Cache for faster repeated lookups

// Populate Map with all variations (lowercase, uppercase, original)
Object.entries(glossaryData).forEach(([key, value]) => {
	glossaryMap.set(key.toLowerCase(), value);
	glossaryMap.set(key.toUpperCase(), value);
	glossaryMap.set(key, value);
});

// Export as both Map and object for compatibility
export const glossary = glossaryData;
export { glossaryMap };

// Optimized lookup function with caching
export function getTerm(key) {
	// Check cache first
	if (lookupCache.has(key)) {
		return lookupCache.get(key);
	}
	
	// Try Map lookup (single operation instead of 3)
	const term = glossaryMap.get(key) || 
	             glossaryMap.get(key.toLowerCase()) || 
	             glossaryMap.get(key.toUpperCase());
	
	// Cache the result
	if (term) {
		lookupCache.set(key, term);
	}
	
	return term || null;
}

// Backward compatibility
export function getDefinition(key) {
	return getTerm(key);
}
