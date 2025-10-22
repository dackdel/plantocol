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
