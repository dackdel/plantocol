<script>
	import { onMount } from 'svelte';
	
	export let title = '';
	export let columns = 1;
	
	let element;
	
	onMount(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					entry.target.classList.add('visible');
				}
			});
		}, { threshold: 0.15 });
		
		if (element) observer.observe(element);
		
		return () => observer.disconnect();
	});
</script>

<section class="content-block scroll-animate" bind:this={element}>
	{#if title}
		<h3>{title}</h3>
	{/if}
	
	<div class="content" class:two-column={columns === 2}>
		<slot />
	</div>
</section>

<style>
	.content-block {
		margin-bottom: 120px;
	}
	
	.content-block h3 {
		font-size: clamp(24px, 3vw, 36px);
		font-weight: 600;
		letter-spacing: -0.02em;
		margin-bottom: 40px;
		padding-bottom: 15px;
		border-bottom: 1px solid #000;
	}
	
	.two-column {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
		gap: 60px;
	}
	
	.content :global(p) {
		font-size: clamp(15px, 1.6vw, 18px);
		line-height: 1.75;
		letter-spacing: -0.01em;
		margin-bottom: 20px;
	}
	
	.content :global(ul),
	.content :global(ol) {
		margin-left: 20px;
	}
	
	.content :global(li) {
		font-size: clamp(15px, 1.6vw, 18px);
		line-height: 1.75;
		letter-spacing: -0.01em;
		margin-bottom: 12px;
	}
	
	.content :global(.step-list) {
		list-style: none;
		margin-left: 0;
	}
	
	.content :global(.step-list li) {
		padding: 20px 0;
		border-bottom: 1px solid #e5e5e5;
	}
	
	.content :global(.step-list li:last-child) {
		border-bottom: none;
	}
	
	.content :global(.step-number) {
		font-weight: 600;
		display: inline-block;
		margin-right: 10px;
	}
	
	.content :global(table) {
		width: 100%;
		border-collapse: collapse;
		margin: 40px 0;
		font-size: clamp(14px, 1.5vw, 16px);
	}
	
	.content :global(th),
	.content :global(td) {
		text-align: left;
		padding: 20px;
		border-bottom: 1px solid #000;
	}
	
	.content :global(th) {
		font-weight: 600;
		border-top: 1px solid #000;
	}
	
	.content :global(td) {
		line-height: 1.7;
	}
	
	/* Responsive Design */
	@media (max-width: 480px) {
		.content-block {
			margin-bottom: 60px;
		}
		
		.content-block h3 {
			font-size: clamp(20px, 5vw, 28px);
			margin-bottom: 25px;
			padding-bottom: 10px;
		}
		
		.two-column {
			grid-template-columns: 1fr;
			gap: 30px;
		}
		
		.content :global(p),
		.content :global(li) {
			font-size: 15px;
		}
		
		.content :global(.step-list li) {
			padding: 15px 0;
		}
		
		.content :global(table) {
			font-size: 13px;
			margin: 30px 0;
		}
		
		.content :global(th),
		.content :global(td) {
			padding: 12px 8px;
		}
	}
	
	@media (min-width: 481px) and (max-width: 768px) {
		.content-block {
			margin-bottom: 70px;
		}
		
		.content-block h3 {
			font-size: clamp(22px, 4vw, 32px);
			margin-bottom: 30px;
		}
		
		.two-column {
			grid-template-columns: 1fr;
			gap: 35px;
		}
		
		.content :global(table) {
			font-size: 14px;
		}
		
		.content :global(th),
		.content :global(td) {
			padding: 15px 12px;
		}
	}
	
	@media (min-width: 769px) and (max-width: 1024px) {
		.content-block {
			margin-bottom: 100px;
		}
		
		.two-column {
			gap: 50px;
		}
	}
	
	@media (min-width: 1921px) {
		.content-block {
			margin-bottom: 150px;
		}
		
		.content-block h3 {
			font-size: clamp(32px, 2.5vw, 44px);
			margin-bottom: 50px;
			padding-bottom: 20px;
		}
		
		.two-column {
			gap: 80px;
		}
		
		.content :global(p),
		.content :global(li) {
			font-size: 20px;
			margin-bottom: 24px;
		}
		
		.content :global(.step-list li) {
			padding: 25px 0;
		}
		
		.content :global(table) {
			font-size: 18px;
			margin: 50px 0;
		}
		
		.content :global(th),
		.content :global(td) {
			padding: 25px;
		}
	}
</style>
