<script>
	export let term = '';
	export let definition = '';
	export let type = 'default'; // 'hormone', 'media', 'equipment', 'scientific'
	
	let showTooltip = false;
	let isVisible = false; // Controls actual visibility after position calculation
	let tooltipElement;
	let containerElement;
	let positionClass = 'bottom-full left-1/2 -translate-x-1/2 mb-2';
	let arrowClass = 'top-full left-1/2 -translate-x-1/2';
	
	// Color schemes based on type
	const typeStyles = {
		hormone: 'border-purple-200 bg-purple-50 text-purple-900',
		media: 'border-blue-200 bg-blue-50 text-blue-900',
		equipment: 'border-green-200 bg-green-50 text-green-900',
		scientific: 'border-orange-200 bg-orange-50 text-orange-900',
		default: 'border-gray-200 bg-gray-50 text-gray-900'
	};
	
	function calculatePosition() {
		if (!containerElement || !tooltipElement) return;
		
		const containerRect = containerElement.getBoundingClientRect();
		const tooltipRect = tooltipElement.getBoundingClientRect();
		const viewportWidth = window.innerWidth;
		
		// Calculate where tooltip would be if centered
		const tooltipLeft = containerRect.left + (containerRect.width / 2) - (tooltipRect.width / 2);
		const tooltipRight = tooltipLeft + tooltipRect.width;
		
		// Check if tooltip would go off left edge
		if (tooltipLeft < 10) {
			positionClass = 'bottom-full left-0 mb-2';
			arrowClass = 'top-full left-4';
		}
		// Check if tooltip would go off right edge
		else if (tooltipRight > viewportWidth - 10) {
			positionClass = 'bottom-full right-0 mb-2';
			arrowClass = 'top-full right-4';
		}
		// Default: centered
		else {
			positionClass = 'bottom-full left-1/2 -translate-x-1/2 mb-2';
			arrowClass = 'top-full left-1/2 -translate-x-1/2';
		}
	}
	
	function showTooltipWithPosition() {
		showTooltip = true;
		// Single RAF for optimal performance
		requestAnimationFrame(() => {
			if (tooltipElement) {
				calculatePosition();
				isVisible = true;
			}
		});
	}
	
	function hideTooltip() {
		isVisible = false;
		setTimeout(() => {
			showTooltip = false;
		}, 200); // Match animation duration
	}
	
	function handleClick() {
		if (!showTooltip) {
			showTooltipWithPosition();
		} else {
			hideTooltip();
		}
	}
	
	function handleMouseEnter() {
		showTooltipWithPosition();
	}
	
	function handleMouseLeave() {
		hideTooltip();
	}
	
	function handleKeyPress(event) {
		if (event.key === 'Enter' || event.key === ' ') {
			event.preventDefault();
			if (!showTooltip) {
				showTooltipWithPosition();
			} else {
				hideTooltip();
			}
		}
	}
</script>

<span 
	bind:this={containerElement}
	class="relative inline-block"
	on:mouseenter={handleMouseEnter}
	on:mouseleave={handleMouseLeave}
	on:click|stopPropagation={handleClick}
	on:keydown={handleKeyPress}
	role="button"
	tabindex="0"
>
	<!-- Term with NO visual styling -->
	<span>
		{term}
	</span>
	
	<!-- Tooltip -->
	{#if showTooltip}
		<span 
			bind:this={tooltipElement}
			class="absolute z-50 px-3 py-2 text-sm rounded-lg shadow-lg border pointer-events-none {positionClass} {typeStyles[type]}"
			class:animate-fadeIn={isVisible}
			class:opacity-0={!isVisible}
			style="min-width: max-content; max-width: 300px; white-space: normal;"
		>
			{definition}
			<span 
				class="absolute -mt-1 border-4 border-transparent {arrowClass}"
				class:border-t-purple-50={type === 'hormone'}
				class:border-t-blue-50={type === 'media'}
				class:border-t-green-50={type === 'equipment'}
				class:border-t-orange-50={type === 'scientific'}
				class:border-t-gray-50={type === 'default'}
			></span>
		</span>
	{/if}
</span>

<style>
	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
	
	.animate-fadeIn {
		animation: fadeIn 0.2s ease-out forwards;
	}
</style>
