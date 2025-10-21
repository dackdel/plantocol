import { writable } from 'svelte/store';

// Default to metric
export const unitSystem = writable('metric');
