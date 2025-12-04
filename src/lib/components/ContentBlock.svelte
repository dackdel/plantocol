<script>
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	
	export let title = '';
	export let columns = 1;
	
	let element;
	
	// Tailwind grid classes based on column count
	$: gridClasses = columns === 2 
		? 'grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-[60px]' 
		: columns === 3 
		? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-[35px] lg:gap-[40px] xl:gap-[60px]' 
		: '';
	
	onMount(async () => {
		if (browser && element) {
			const { gsap } = await import('gsap');
			const { ScrollTrigger } = await import('gsap/ScrollTrigger');
			gsap.registerPlugin(ScrollTrigger);
			
			gsap.fromTo(element,
				{ opacity: 0, y: 20 },
				{
					opacity: 1,
					y: 0,
					duration: 0.5,
					ease: 'power2.out',
					scrollTrigger: {
						trigger: element,
						start: 'top 85%',
						toggleActions: 'play none none none'
					}
				}
			);
		}
	});
</script>

<section class="content-block" bind:this={element}>
	{#if title}
		<h3>{title}</h3>
	{/if}
	
	<div class="content {gridClasses}">
		<slot />
	</div>
</section>

<style>
	.content-block {
		margin-bottom: 64px;
		opacity: 0;
	}
	
	.content-block h3 {
		font-size: 20px;
		font-weight: 600;
		letter-spacing: -0.02em;
		margin-bottom: 24px;
		padding-bottom: 12px;
		border-bottom: 1px solid #000;
		color: #000;
	}
	
	.content :global(p) {
		font-size: 15px;
		line-height: 1.7;
		letter-spacing: -0.01em;
		margin-bottom: 16px;
		color: #333;
	}
	
	.content :global(ul),
	.content :global(ol) {
		margin-left: 20px;
	}
	
	.content :global(li) {
		font-size: 15px;
		line-height: 1.7;
		letter-spacing: -0.01em;
		margin-bottom: 10px;
		color: #333;
	}
	
	.content :global(.step-list) {
		list-style: none;
		margin-left: 0;
	}
	
	.content :global(.step-list li) {
		padding: 16px 0;
		border-bottom: 1px solid #e5e5e5;
	}
	
	.content :global(.step-list li:last-child) {
		border-bottom: none;
	}
	
	.content :global(.step-number) {
		font-weight: 600;
		display: inline-block;
		margin-right: 8px;
		color: #000;
	}
	
	.content :global(table) {
		width: 100%;
		border-collapse: collapse;
		margin: 24px 0;
		font-size: 14px;
	}
	
	.content :global(th),
	.content :global(td) {
		text-align: left;
		padding: 14px 12px;
		border-bottom: 1px solid #e5e5e5;
		color: #333;
	}
	
	.content :global(th) {
		font-weight: 600;
		border-top: 1px solid #000;
		border-bottom: 1px solid #000;
		color: #000;
		background: #fafafa;
	}
	
	.content :global(td) {
		line-height: 1.6;
	}
	
	.content :global(strong) {
		color: #000;
	}

	/* Override colorful table styles from protocol pages */
	.content :global(.data-table-wrapper) {
		margin-top: 16px;
	}

	.content :global(.data-table) {
		font-size: 14px;
		background: #fff;
	}

	.content :global(.data-table thead th) {
		background: #fafafa;
		color: #000;
		border-bottom: 1px solid #000;
		font-size: 12px;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	.content :global(.data-table tbody td) {
		color: #333;
		border-bottom: 1px solid #e5e5e5;
	}

	.content :global(.data-table tbody tr:nth-child(odd) td) {
		background: #fafafa;
	}

	.content :global(.timeline-grid) {
		gap: 16px;
	}

	.content :global(.timeline-card) {
		border: 1px solid #e5e5e5;
		box-shadow: none;
		background: #fff;
	}

	.content :global(.timeline-window) {
		color: #666;
	}

	.content :global(.timeline-label) {
		color: #000;
	}

	.content :global(.timeline-notes) {
		color: #333;
	}

	.content :global(.microcopy) {
		color: #666;
	}
	
	/* Responsive Design */
	@media (max-width: 480px) {
		.content-block {
			margin-bottom: 48px;
		}
		
		.content-block h3 {
			font-size: 18px;
			margin-bottom: 20px;
			padding-bottom: 10px;
		}
		
		.content :global(p),
		.content :global(li) {
			font-size: 14px;
		}
		
		.content :global(.step-list li) {
			padding: 12px 0;
		}
		
		.content :global(table) {
			font-size: 12px;
			margin: 20px 0;
		}
		
		.content :global(th),
		.content :global(td) {
			padding: 10px 8px;
		}
	}
	
	@media (min-width: 481px) and (max-width: 768px) {
		.content-block {
			margin-bottom: 56px;
		}
		
		.content-block h3 {
			font-size: 19px;
			margin-bottom: 22px;
		}
		
		.content :global(table) {
			font-size: 13px;
		}
		
		.content :global(th),
		.content :global(td) {
			padding: 12px 10px;
		}
	}
	
	@media (min-width: 769px) and (max-width: 1024px) {
		.content-block {
			margin-bottom: 60px;
		}
	}
	
	@media (min-width: 1921px) {
		.content-block {
			margin-bottom: 80px;
		}
		
		.content-block h3 {
			font-size: 22px;
			margin-bottom: 28px;
			padding-bottom: 14px;
		}
		
		.content :global(p),
		.content :global(li) {
			font-size: 16px;
			margin-bottom: 18px;
		}
		
		.content :global(.step-list li) {
			padding: 18px 0;
		}
		
		.content :global(table) {
			font-size: 15px;
			margin: 28px 0;
		}
		
		.content :global(th),
		.content :global(td) {
			padding: 16px 14px;
		}
	}
</style>
