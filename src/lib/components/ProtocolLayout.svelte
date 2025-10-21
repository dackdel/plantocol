<script>
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import ProtocolNavigation from './ProtocolNavigation.svelte';
	
	export let title = '';
	export let badges = [];
	export let introColumns = [];
	export let source = '';
	
	let elements = [];
	
	onMount(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					entry.target.classList.add('visible');
				}
			});
		}, { 
			threshold: 0.15,
			rootMargin: '0px 0px -100px 0px'
		});
		
		elements.forEach(el => observer.observe(el));
		
		return () => observer.disconnect();
	});
</script>

<article class="protocol-section">
	<header>
		<h1 class="protocol-title scroll-animate" bind:this={elements[0]}>
			{@html title}
		</h1>
		
		{#if badges.length > 0}
			<div class="badges">
				{#each badges as badge}
					<span class="badge">{badge}</span>
				{/each}
			</div>
		{/if}
		
		{#if introColumns.length > 0}
			<div class="protocol-intro">
				{#each introColumns as column, i}
					<div 
						class="intro-column scroll-animate"
						style="transition-delay: {i * 0.15}s"
						bind:this={elements[i + 1]}
					>
						<p>{column}</p>
					</div>
				{/each}
			</div>
		{/if}
	</header>
	
	<div class="protocol-content">
		<slot />
	</div>
	
	{#if source}
		<footer class="meta-info">
			{source}
		</footer>
	{/if}
	
	<ProtocolNavigation currentPath={$page.url.pathname} />
</article>

<style>
	.protocol-section {
		min-height: 100vh;
		padding: 150px 8% 100px;
	}
	
	.protocol-title {
		font-size: clamp(42px, 6vw, 80px);
		font-weight: 700;
		line-height: 1.1;
		letter-spacing: -0.03em;
		margin-bottom: 100px;
	}
	
	.badges {
		display: flex;
		gap: 12px;
		margin-bottom: 40px;
		flex-wrap: wrap;
	}
	
	.badge {
		display: inline-block;
		padding: 8px 16px;
		font-size: 14px;
		font-weight: 500;
		border: 1px solid #222;
		letter-spacing: -0.01em;
	}
	
	.protocol-intro {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 60px;
		margin-bottom: 150px;
	}
	
	.intro-column p {
		font-size: clamp(16px, 1.8vw, 20px);
		line-height: 1.7;
		letter-spacing: -0.01em;
	}
	
	.protocol-content {
		margin-bottom: 60px;
	}
	
	.meta-info {
		font-size: 16px;
		color: #666;
		font-style: italic;
	}
	
	/* Responsive Design */
	@media (max-width: 480px) {
		.protocol-section {
			padding: 80px 5% 60px;
		}
		
		.protocol-title {
			font-size: clamp(32px, 9vw, 56px);
			margin-bottom: 50px;
		}
		
		.badges {
			gap: 8px;
			margin-bottom: 30px;
		}
		
		.badge {
			padding: 6px 12px;
			font-size: 12px;
		}
		
		.protocol-intro {
			grid-template-columns: 1fr;
			gap: 30px;
			margin-bottom: 80px;
		}
		
		.intro-column p {
			font-size: 15px;
		}
		
		.meta-info {
			font-size: 14px;
		}
	}
	
	@media (min-width: 481px) and (max-width: 768px) {
		.protocol-section {
			padding: 90px 6% 70px;
		}
		
		.protocol-title {
			font-size: clamp(36px, 7vw, 64px);
			margin-bottom: 55px;
		}
		
		.protocol-intro {
			grid-template-columns: 1fr;
			gap: 35px;
			margin-bottom: 90px;
		}
		
		.intro-column p {
			font-size: 16px;
		}
	}
	
	@media (min-width: 769px) and (max-width: 1024px) {
		.protocol-section {
			padding: 120px 7% 90px;
		}
		
		.protocol-title {
			font-size: clamp(40px, 6.5vw, 72px);
			margin-bottom: 80px;
		}
		
		.protocol-intro {
			gap: 50px;
			margin-bottom: 120px;
		}
	}
	
	@media (min-width: 1921px) {
		.protocol-section {
			padding: 180px 10% 120px;
		}
		
		.protocol-title {
			font-size: clamp(60px, 5vw, 100px);
			margin-bottom: 120px;
		}
		
		.badges {
			gap: 16px;
		}
		
		.badge {
			padding: 10px 20px;
			font-size: 16px;
		}
		
		.protocol-intro {
			gap: 80px;
			margin-bottom: 180px;
		}
		
		.intro-column p {
			font-size: 22px;
		}
		
		.meta-info {
			font-size: 18px;
		}
	}
</style>
