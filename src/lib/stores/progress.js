import { writable } from 'svelte/store';
import { browser } from '$app/environment';

// Load progress from localStorage
function loadProgress() {
	if (browser) {
		const stored = localStorage.getItem('plantocol-progress');
		return stored ? JSON.parse(stored) : {};
	}
	return {};
}

// Create writable store
function createProgressStore() {
	const { subscribe, set, update } = writable(loadProgress());
	
	return {
		subscribe,
		toggleStep: (protocolId, stepId) => {
			update(progress => {
				if (!progress[protocolId]) {
					progress[protocolId] = {};
				}
				progress[protocolId][stepId] = !progress[protocolId][stepId];
				
				// Save to localStorage
				if (browser) {
					localStorage.setItem('plantocol-progress', JSON.stringify(progress));
				}
				
				return progress;
			});
		},
		resetProtocol: (protocolId) => {
			update(progress => {
				delete progress[protocolId];
				
				// Save to localStorage
				if (browser) {
					localStorage.setItem('plantocol-progress', JSON.stringify(progress));
				}
				
				return progress;
			});
		},
		isCompleted: (protocolId, stepId, currentProgress) => {
			return currentProgress[protocolId]?.[stepId] || false;
		}
	};
}

export const progress = createProgressStore();
