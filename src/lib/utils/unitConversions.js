/**
 * Unit conversion utilities for protocol measurements
 */

// Temperature conversions
export function convertTemp(celsius, system) {
	if (system === 'imperial') {
		const fahrenheit = (celsius * 9/5) + 32;
		return `${fahrenheit}°F`;
	}
	return `${celsius}°C`;
}

// Volume conversions (mL to fl oz)
export function convertVolume(ml, system) {
	if (system === 'imperial') {
		const floz = (ml * 0.033814).toFixed(2);
		return `${floz} fl oz`;
	}
	return `${ml} mL`;
}

// Weight/Mass conversions (g to oz)
export function convertWeight(grams, system) {
	if (system === 'imperial') {
		const oz = (grams * 0.035274).toFixed(2);
		return `${oz} oz`;
	}
	return `${grams} g`;
}

// Length conversions (cm to inches)
export function convertLength(cm, system) {
	if (system === 'imperial') {
		const inches = (cm * 0.393701).toFixed(2);
		return `${inches} in`;
	}
	return `${cm} cm`;
}

// pH remains the same (universal scale)
export function displayPH(value) {
	return `pH ${value}`;
}

// Percentage remains the same
export function displayPercentage(value) {
	return `${value}%`;
}

// Concentration - mostly stays in g/L but could show oz/qt
export function convertConcentration(gPerL, system) {
	if (system === 'imperial') {
		const ozPerQt = (gPerL * 0.033814).toFixed(2);
		return `${ozPerQt} oz/qt`;
	}
	return `${gPerL} g/L`;
}
