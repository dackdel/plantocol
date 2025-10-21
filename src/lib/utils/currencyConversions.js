import { exchangeRates } from '$lib/stores/currency';

/**
 * Convert USD price to target currency
 * @param {number} priceUSD - Price in USD
 * @param {string} targetCurrency - Target currency code
 * @returns {string} - Formatted price string
 */
export function convertPrice(priceUSD, targetCurrency) {
	const currencyInfo = exchangeRates[targetCurrency];
	
	if (!currencyInfo) {
		return `$${priceUSD.toFixed(2)}`;
	}
	
	const convertedPrice = priceUSD * currencyInfo.rate;
	const symbol = currencyInfo.symbol;
	
	// Format based on currency (some don't use decimals)
	const noDecimalCurrencies = ['JPY', 'KRW'];
	const decimals = noDecimalCurrencies.includes(targetCurrency) ? 0 : 2;
	
	// Format with thousand separators
	const formatted = convertedPrice.toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
	
	return `${symbol}${formatted}`;
}

/**
 * Convert price range (e.g., "$50-$150")
 * @param {number} minUSD - Minimum price in USD
 * @param {number} maxUSD - Maximum price in USD
 * @param {string} targetCurrency - Target currency code
 * @returns {string} - Formatted price range string
 */
export function convertPriceRange(minUSD, maxUSD, targetCurrency) {
	const currencyInfo = exchangeRates[targetCurrency];
	
	if (!currencyInfo) {
		return `$${minUSD}-$${maxUSD}`;
	}
	
	const minConverted = minUSD * currencyInfo.rate;
	const maxConverted = maxUSD * currencyInfo.rate;
	const symbol = currencyInfo.symbol;
	
	const noDecimalCurrencies = ['JPY', 'KRW'];
	const decimals = noDecimalCurrencies.includes(targetCurrency) ? 0 : 2;
	
	const minFormatted = minConverted.toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
	const maxFormatted = maxConverted.toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
	
	return `${symbol}${minFormatted}-${symbol}${maxFormatted}`;
}

/**
 * Get currency symbol
 * @param {string} currencyCode - Currency code
 * @returns {string} - Currency symbol
 */
export function getCurrencySymbol(currencyCode) {
	return exchangeRates[currencyCode]?.symbol || '$';
}

/**
 * Get currency name
 * @param {string} currencyCode - Currency code
 * @returns {string} - Currency name
 */
export function getCurrencyName(currencyCode) {
	return exchangeRates[currencyCode]?.name || 'US Dollar';
}
