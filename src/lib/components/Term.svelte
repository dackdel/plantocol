<script>
	import Tooltip from './Tooltip.svelte';
	import { getTerm } from '$lib/data/glossary.js';
	
	export let abbr = ''; // The abbreviation/term key
	export let showFull = false; // Whether to show full name in parentheses
	
	// Use optimized cached lookup - single call instead of 3
	$: termData = getTerm(abbr) || {
		term: abbr,
		full: abbr,
		definition: 'Definition not available',
		type: 'default'
	};
</script>

{#if showFull && termData.full !== termData.term}
	<Tooltip 
		term="{termData.term} ({termData.full})" 
		definition={termData.definition}
		type={termData.type}
	/>
{:else}
	<Tooltip 
		term={termData.term} 
		definition={termData.definition}
		type={termData.type}
	/>
{/if}
