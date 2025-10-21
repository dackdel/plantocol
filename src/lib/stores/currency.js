import { writable } from 'svelte/store';
import { browser } from '$app/environment';

// Currency exchange rates (USD base)
const exchangeRates = {
	USD: { rate: 1, symbol: '$', name: 'US Dollar' },
	EUR: { rate: 0.92, symbol: '€', name: 'Euro' },
	GBP: { rate: 0.79, symbol: '£', name: 'British Pound' },
	CAD: { rate: 1.36, symbol: 'CA$', name: 'Canadian Dollar' },
	AUD: { rate: 1.53, symbol: 'A$', name: 'Australian Dollar' },
	INR: { rate: 83.12, symbol: '₹', name: 'Indian Rupee' },
	JPY: { rate: 149.50, symbol: '¥', name: 'Japanese Yen' },
	CNY: { rate: 7.24, symbol: '¥', name: 'Chinese Yuan' },
	BRL: { rate: 4.97, symbol: 'R$', name: 'Brazilian Real' },
	MXN: { rate: 17.05, symbol: 'MX$', name: 'Mexican Peso' },
	ZAR: { rate: 18.65, symbol: 'R', name: 'South African Rand' },
	SGD: { rate: 1.34, symbol: 'S$', name: 'Singapore Dollar' },
	NZD: { rate: 1.67, symbol: 'NZ$', name: 'New Zealand Dollar' },
	CHF: { rate: 0.88, symbol: 'CHF', name: 'Swiss Franc' },
	KRW: { rate: 1320.50, symbol: '₩', name: 'South Korean Won' }
};

// Map locales/countries to currencies
const localeToCurrency = {
	'en-US': 'USD',
	'en-GB': 'GBP',
	'en-CA': 'CAD',
	'en-AU': 'AUD',
	'en-NZ': 'NZD',
	'en-IN': 'INR',
	'en-SG': 'SGD',
	'en-ZA': 'ZAR',
	'fr-FR': 'EUR',
	'de-DE': 'EUR',
	'es-ES': 'EUR',
	'it-IT': 'EUR',
	'nl-NL': 'EUR',
	'pt-BR': 'BRL',
	'es-MX': 'MXN',
	'ja-JP': 'JPY',
	'zh-CN': 'CNY',
	'ko-KR': 'KRW',
	'de-CH': 'CHF',
	'fr-CH': 'CHF'
};

// Detect user's currency based on locale
function detectCurrency() {
	if (!browser) return 'USD';
	
	// Check if user has saved preference
	const saved = localStorage.getItem('plantocol-currency');
	if (saved && exchangeRates[saved]) {
		return saved;
	}
	
	// Detect from browser locale
	const locale = navigator.language || navigator.userLanguage || 'en-US';
	
	// Try exact match
	if (localeToCurrency[locale]) {
		return localeToCurrency[locale];
	}
	
	// Try language code only (e.g., 'en' from 'en-GB')
	const langCode = locale.split('-')[0];
	const matchedLocale = Object.keys(localeToCurrency).find(l => l.startsWith(langCode));
	if (matchedLocale) {
		return localeToCurrency[matchedLocale];
	}
	
	// Default to USD
	return 'USD';
}

// Create writable store
function createCurrencyStore() {
	const { subscribe, set } = writable(detectCurrency());
	
	return {
		subscribe,
		setCurrency: (code) => {
			if (exchangeRates[code]) {
				set(code);
				if (browser) {
					localStorage.setItem('plantocol-currency', code);
				}
			}
		},
		reset: () => {
			const detected = detectCurrency();
			set(detected);
			if (browser) {
				localStorage.removeItem('plantocol-currency');
			}
		}
	};
}

export const currency = createCurrencyStore();
export { exchangeRates };
