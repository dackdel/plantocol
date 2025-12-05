<script>
	import { onDestroy } from 'svelte';
	
	export let duration = 30; // duration in seconds
	export let label = 'Timer';
	
	let isActive = false;
	let isPaused = false;
	let timeRemaining = duration;
	let intervalId;
	let audioContext;
	let startTime;
	let pausedTime = 0;
	
	// Check if duration is more than 1 hour (3600 seconds)
	$: isLongDuration = duration > 3600;
	
	// Calculate progress percentage
	$: progressPercent = (timeRemaining / duration) * 100;
	
	// Generate ICS calendar file
	function generateICS() {
		const now = new Date();
		const endDate = new Date(now.getTime() + duration * 1000);
		
		// Format dates for ICS (YYYYMMDDTHHMMSSZ)
		const formatDate = (date) => {
			return date.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
		};
		
		// Format creation timestamp for display
		const formatCreationTime = (date) => {
			return date.toLocaleString('en-US', {
				weekday: 'short',
				year: 'numeric',
				month: 'short',
				day: 'numeric',
				hour: '2-digit',
				minute: '2-digit'
			});
		};
		
		// Get current page info
		const pageTitle = typeof document !== 'undefined' ? document.title : 'Plantocol';
		const recipeTitle = pageTitle.replace(' - Plantocol', '').replace('Plantocol - ', '');
		
		// Get current URL with scroll position
		const scrollY = typeof window !== 'undefined' ? Math.round(window.scrollY) : 0;
		const currentUrl = typeof window !== 'undefined' 
			? `${window.location.href.split('#')[0]}#scroll=${scrollY}`
			: '';
		
		const creationTimestamp = formatCreationTime(now);
		
		const description = [
			`Recipe: ${recipeTitle}`,
			`Step: ${label}`,
			`Duration: ${formatDurationReadable(duration)}`,
			``,
			`Event created: ${creationTimestamp}`,
			``,
			`Return to this step:`,
			`${currentUrl}`
		].join('\\n');
		
		const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Plantocol//Calendar Event//EN
CALSCALE:GREGORIAN
METHOD:PUBLISH
BEGIN:VEVENT
DTSTART:${formatDate(now)}
DTEND:${formatDate(endDate)}
SUMMARY:${label} - ${recipeTitle}
DESCRIPTION:${description}
URL:${currentUrl}
STATUS:CONFIRMED
UID:${Date.now()}@plantocol.com
END:VEVENT
END:VCALENDAR`;
		
		// Create and download the file
		const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
		const url = URL.createObjectURL(blob);
		const link = document.createElement('a');
		link.href = url;
		link.download = `${label.replace(/\s+/g, '-').toLowerCase()}-plantocol.ics`;
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
		URL.revokeObjectURL(url);
	}
	
	// Format duration for human readable display
	function formatDurationReadable(seconds) {
		const weeks = Math.floor(seconds / 604800);
		const days = Math.floor((seconds % 604800) / 86400);
		const hours = Math.floor((seconds % 86400) / 3600);
		const mins = Math.floor((seconds % 3600) / 60);
		
		const parts = [];
		if (weeks > 0) parts.push(`${weeks} week${weeks > 1 ? 's' : ''}`);
		if (days > 0) parts.push(`${days} day${days > 1 ? 's' : ''}`);
		if (hours > 0) parts.push(`${hours} hour${hours > 1 ? 's' : ''}`);
		if (mins > 0) parts.push(`${mins} minute${mins > 1 ? 's' : ''}`);
		
		return parts.join(', ') || 'Less than a minute';
	}
	
	// Apply background to entire page
	$: if (isActive && typeof document !== 'undefined') {
		// Color transitions: green (100%) → yellow (50%) → orange (25%) → red (0%)
		let r, g, b;
		if (progressPercent > 50) {
			// Green to yellow transition (100% → 50%)
			const factor = (progressPercent - 50) / 50;
			r = Math.round(150 + (100 - 150) * (1 - factor)); // 100 → 150
			g = Math.round(200 + (220 - 200) * factor); // 220 → 200
			b = Math.round(100 + (80 - 100) * (1 - factor)); // 80 → 100
		} else if (progressPercent > 25) {
			// Yellow to orange transition (50% → 25%)
			const factor = (progressPercent - 25) / 25;
			r = Math.round(180 + (150 - 180) * factor); // 150 → 180
			g = Math.round(160 + (200 - 160) * factor); // 200 → 160
			b = 80;
		} else {
			// Orange to red transition (25% → 0%)
			const factor = progressPercent / 25;
			r = Math.round(200 + (180 - 200) * factor); // 180 → 200
			g = Math.round(100 + (160 - 100) * factor); // 160 → 100
			b = 80;
		}
		
		const backgroundColor = `rgba(${r}, ${g}, ${b}, 0.12)`;
		
		// Apply gradient to entire page background (drains from left to right)
		document.body.style.transition = 'background 0.3s ease';
		document.body.style.background = `linear-gradient(to right, 
			transparent 0%, 
			transparent ${100 - progressPercent}%, 
			${backgroundColor} ${100 - progressPercent}%, 
			${backgroundColor} 100%)`;
	} else if (!isActive && typeof document !== 'undefined') {
		document.body.style.background = '';
	}
	
	// Start the timer
	function startTimer() {
		isActive = true;
		isPaused = false;
		timeRemaining = duration;
		pausedTime = 0;
		startTime = Date.now();
		
		intervalId = setInterval(() => {
			if (!isPaused) {
				const elapsed = Math.floor((Date.now() - startTime - pausedTime) / 1000);
				timeRemaining = duration - elapsed;
				
				if (timeRemaining <= 0) {
					timeRemaining = 0;
					stopTimer();
					playBeep();
				}
			}
		}, 100);
	}
	
	// Stop the timer
	function stopTimer() {
		clearInterval(intervalId);
		isPaused = false;
	}
	
	// Pause/Resume
	function togglePause() {
		if (isPaused) {
			// Resume
			isPaused = false;
			startTime = Date.now() - (duration - timeRemaining) * 1000 - pausedTime;
		} else {
			// Pause
			isPaused = true;
			pausedTime += Date.now() - startTime - (duration - timeRemaining) * 1000;
		}
	}
	
	// Reset timer
	function resetTimer() {
		stopTimer();
		timeRemaining = duration;
		pausedTime = 0;
		startTimer();
	}
	
	// Close timer
	function closeTimer() {
		stopTimer();
		isActive = false;
		timeRemaining = duration;
		pausedTime = 0;
	}
	
	// Play beep sound
	function playBeep() {
		try {
			audioContext = new (window.AudioContext || window.webkitAudioContext)();
			const oscillator = audioContext.createOscillator();
			const gainNode = audioContext.createGain();
			
			oscillator.connect(gainNode);
			gainNode.connect(audioContext.destination);
			oscillator.frequency.value = 800;
			oscillator.type = 'sine';
			gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
			gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
			
			oscillator.start(audioContext.currentTime);
			oscillator.stop(audioContext.currentTime + 0.5);
		} catch (e) {
			console.log('Audio not supported');
		}
	}
	
	// Format time
	function formatTime(seconds) {
		const mins = Math.floor(seconds / 60);
		const secs = seconds % 60;
		return mins > 0 ? `${mins}:${secs.toString().padStart(2, '0')}` : `${secs}s`;
	}
	
	// Cleanup on component destroy
	onDestroy(() => {
		if (typeof document !== 'undefined') {
			document.body.style.background = '';
		}
		stopTimer();
	});
</script>

{#if !isActive}
	{#if isLongDuration}
		<button class="timer-badge calendar-badge" on:click={generateICS} aria-label="Add {label} to calendar">
			<span class="timer-icon">📅</span>
			<slot />
		</button>
	{:else}
		<button class="timer-badge" on:click={startTimer} aria-label="Start {label} timer">
			<span class="timer-icon">⏱</span>
			<slot />
		</button>
	{/if}
{:else}
	<!-- Timer display -->
	<div class="timer-overlay" role="timer" aria-live="polite">
		<div class="timer-info">
			<div class="time-display">{formatTime(timeRemaining)}</div>
			<div class="timer-label">{label}</div>
		</div>
		
		<div class="timer-controls">
			<button on:click={togglePause} aria-label={isPaused ? 'Resume' : 'Pause'} title={isPaused ? 'Resume' : 'Pause'}>
				{isPaused ? '▶' : '⏸'}
			</button>
			<button on:click={resetTimer} aria-label="Reset" title="Reset">↻</button>
			<button on:click={closeTimer} aria-label="Stop" title="Stop" class="stop-btn">■</button>
		</div>
	</div>
{/if}

<style>
	.timer-badge {
		display: inline-flex;
		align-items: center;
		gap: 4px;
		padding: 2px 8px;
		background: transparent;
		border: 1px solid #222;
		border-radius: 4px;
		cursor: pointer;
		font-family: inherit;
		font-size: inherit;
		color: inherit;
		transition: all 0.2s ease;
	}
	
	.timer-badge:hover {
		background: #f5f5f5;
		border-color: #000;
	}
	
	.calendar-badge {
		border-style: dashed;
	}
	
	.calendar-badge:hover {
		border-style: solid;
	}
	
	.timer-icon {
		font-size: 0.9em;
	}
	
	/* Ambient timer overlay - sits in corner, doesn't block content */
	.timer-overlay {
		position: fixed;
		top: 80px;
		right: 24px;
		z-index: 900;
		display: flex;
		flex-direction: column;
		gap: 8px;
		animation: fadeIn 0.3s ease;
	}
	
	@keyframes fadeIn {
		from {
			opacity: 0;
			transform: translateY(-10px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
	
	.timer-info {
		background: rgba(255, 255, 255, 0.95);
		backdrop-filter: blur(10px);
		border: 1px solid rgba(34, 34, 34, 0.2);
		border-radius: 12px;
		padding: 16px 20px;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
		text-align: center;
	}
	
	.time-display {
		font-size: 48px;
		font-weight: 700;
		letter-spacing: -0.02em;
		color: #222;
		line-height: 1;
		margin-bottom: 4px;
		font-variant-numeric: tabular-nums;
	}
	
	.timer-label {
		font-size: 12px;
		color: #666;
		font-weight: 500;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}
	
	.timer-controls {
		display: flex;
		gap: 6px;
		justify-content: center;
	}
	
	.timer-controls button {
		padding: 10px;
		min-width: 44px;
		background: rgba(255, 255, 255, 0.95);
		backdrop-filter: blur(10px);
		border: 1px solid rgba(34, 34, 34, 0.2);
		border-radius: 8px;
		cursor: pointer;
		font-size: 16px;
		transition: all 0.2s ease;
		color: #222;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	
	.timer-controls button:hover {
		background: rgba(255, 255, 255, 1);
		border-color: #222;
		transform: translateY(-1px);
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
	}
	
	.timer-controls button:active {
		transform: translateY(0);
	}
	
	.stop-btn {
		color: #c44;
	}
	
	/* Responsive */
	@media (max-width: 768px) {
		.timer-overlay {
			top: 70px;
			right: 16px;
		}
		
		.timer-info {
			padding: 12px 16px;
		}
		
		.time-display {
			font-size: 36px;
		}
		
		.timer-label {
			font-size: 10px;
		}
		
		.timer-controls button {
			padding: 8px;
			min-width: 36px;
			font-size: 14px;
		}
	}
	
	@media (max-width: 480px) {
		.timer-overlay {
			top: 60px;
			right: 12px;
		}
		
		.timer-info {
			padding: 10px 14px;
		}
		
		.time-display {
			font-size: 28px;
		}
	}
</style>
