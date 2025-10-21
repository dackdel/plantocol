<script>
	import { progress } from '$lib/stores/progress';
	
	export let protocolId = '';
	export let stepId = '';
	export let stepNumber = '';
	
	$: isCompleted = $progress[protocolId]?.[stepId] || false;
	
	function toggleStep() {
		progress.toggleStep(protocolId, stepId);
	}
</script>

<li class="step-item" class:completed={isCompleted}>
	<div class="step-header">
		<button 
			class="checkbox" 
			on:click={toggleStep}
			aria-label="Mark step as {isCompleted ? 'incomplete' : 'complete'}"
			class:checked={isCompleted}
		>
			{#if isCompleted}
				<span class="checkmark">✓</span>
			{/if}
		</button>
		{#if stepNumber}
			<span class="step-number">{stepNumber}</span>
		{/if}
	</div>
	<div class="step-content">
		<slot />
	</div>
</li>

<style>
	.step-item {
		display: flex;
		gap: 12px;
		margin-bottom: 16px;
		transition: opacity 0.2s ease;
	}
	
	.step-item.completed {
		opacity: 0.6;
	}
	
	.step-item.completed .step-content {
		text-decoration: line-through;
		text-decoration-color: rgba(0, 0, 0, 0.3);
		text-decoration-thickness: 1px;
	}
	
	.step-header {
		display: flex;
		align-items: flex-start;
		gap: 8px;
		flex-shrink: 0;
	}
	
	.checkbox {
		width: 20px;
		height: 20px;
		border: 2px solid #222;
		border-radius: 4px;
		background: white;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: all 0.2s ease;
		flex-shrink: 0;
		margin-top: 2px;
		padding: 0;
	}
	
	.checkbox:hover {
		background: #f5f5f5;
		border-color: #000;
	}
	
	.checkbox.checked {
		background: #222;
		border-color: #222;
	}
	
	.checkmark {
		color: white;
		font-size: 14px;
		line-height: 1;
	}
	
	.step-number {
		font-weight: 600;
		color: #222;
		white-space: nowrap;
	}
	
	.step-content {
		flex: 1;
		line-height: 1.6;
	}
	
	/* Responsive */
	@media (max-width: 480px) {
		.step-item {
			gap: 8px;
		}
		
		.checkbox {
			width: 18px;
			height: 18px;
		}
		
		.checkmark {
			font-size: 12px;
		}
	}
</style>
