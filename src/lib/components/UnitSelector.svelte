<script>
	import { unitSystem } from '$lib/stores/units';
	
	function toggleUnits() {
		unitSystem.update(current => current === 'metric' ? 'imperial' : 'metric');
	}
</script>

<div class="unit-selector">
	<button 
		on:click={toggleUnits}
		aria-label="Toggle between metric and imperial units"
		class:active={$unitSystem === 'metric'}
	>
		<span class="option" class:selected={$unitSystem === 'metric'}>Based Metric</span>
		<span class="separator">/</span>
		<span class="option" class:selected={$unitSystem === 'imperial'}>Cringe Imperial</span>
	</button>
</div>

<style>
	.unit-selector {
		position: fixed;
		top: 20px;
		right: 8%;
		z-index: 100;
	}
	
	button {
		background: transparent;
		border: 1px solid #222;
		padding: 8px 16px;
		cursor: pointer;
		font-family: 'Inter', sans-serif;
		font-size: 14px;
		letter-spacing: -0.01em;
		display: flex;
		align-items: center;
		gap: 8px;
		/* Interface Guidelines: Motion */
		transition: background-color 150ms ease, border-color 150ms ease;
	}
	
	.option {
		color: #999;
		font-weight: 400;
		transition: color 150ms ease, font-weight 150ms ease;
	}
	
	.option.selected {
		color: #222;
		font-weight: 600;
	}
	
	.separator {
		color: #ccc;
	}
	
	/* Interface Guidelines: Hover - Only on hover-capable devices */
	@media (hover: hover) {
		button:hover {
			background-color: #f5f5f5;
			border-color: #222;
		}
		
		button:hover .option:not(.selected) {
			color: #666;
		}
	}
	
	/* Interface Guidelines: Motion - Proportional scale */
	button:active {
		transform: scale(0.98);
	}
	
	/* Responsive Design */
	@media (max-width: 480px) {
		.unit-selector {
			top: 12px;
			right: 5%;
		}
		
		button {
			min-height: 44px;
			padding: 10px 12px;
			font-size: 12px;
			gap: 6px;
		}
		
		.nav-label {
			font-size: 11px;
		}
	}
	
	@media (min-width: 481px) and (max-width: 768px) {
		.unit-selector {
			top: 15px;
			right: 6%;
		}
		
		button {
			min-height: 44px;
			padding: 10px 14px;
			font-size: 13px;
		}
	}
	
	@media (min-width: 769px) and (max-width: 1024px) {
		.unit-selector {
			top: 18px;
			right: 7%;
		}
	}
	
	@media (min-width: 1921px) {
		.unit-selector {
			top: 24px;
			right: 10%;
		}
		
		button {
			padding: 10px 20px;
			font-size: 16px;
		}
	}
	
	/* Hide during hero animation for cleaner entrance */
	@media (min-width: 769px) {
		.unit-selector {
			animation: fadeIn 0.6s ease 1s both;
		}
	}
	
	@keyframes fadeIn {
		from { opacity: 0; }
		to { opacity: 1; }
	}
</style>
