<script>
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { browser } from '$app/environment';
	import ProtocolNavigation from './ProtocolNavigation.svelte';
	
	export let title = '';
	export let badges = [];
	export let introColumns = [];
	export let source = '';
	
	let titleEl;
	let badgesEl;
	let introEls = [];
	let mounted = false;
	
	onMount(async () => {
		mounted = true;
		
		if (browser) {
			const { gsap } = await import('gsap');
			
			// Subtle title animation - fade in and slight upward movement
			if (titleEl) {
				gsap.fromTo(titleEl, 
					{ opacity: 0, y: 30 },
					{ opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
				);
			}
			
			// Badges fade in with stagger
			if (badgesEl) {
				const badgeItems = badgesEl.querySelectorAll('.badge');
				gsap.fromTo(badgeItems,
					{ opacity: 0, y: 10 },
					{ opacity: 1, y: 0, duration: 0.5, stagger: 0.1, delay: 0.3, ease: 'power2.out' }
				);
			}
			
			// Intro columns fade in with stagger
			introEls.forEach((el, i) => {
				if (el) {
					gsap.fromTo(el,
						{ opacity: 0, y: 20 },
						{ opacity: 1, y: 0, duration: 0.6, delay: 0.5 + (i * 0.15), ease: 'power2.out' }
					);
				}
			});
		}
	});
</script>

<article class="protocol-section">
	<div class="protocol-container">
		<header>
			<h1 class="protocol-title" bind:this={titleEl}>
				{@html title}
			</h1>
			
			{#if badges.length > 0}
				<div class="badges" bind:this={badgesEl}>
					{#each badges as badge}
						<span class="badge">{badge}</span>
					{/each}
				</div>
			{/if}
			
			{#if introColumns.length > 0}
				<div class="protocol-intro">
					{#each introColumns as column, i}
						<div 
							class="intro-column"
							bind:this={introEls[i]}
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
	</div>
	
	<ProtocolNavigation currentPath={$page.url.pathname} />
</article>

<style>
	.protocol-section {
		min-height: 100vh;
		padding: 120px 24px 100px;
		background: #fff;
		color: #000;
	}
	
	.protocol-container {
		max-width: 720px;
		margin: 0 auto;
	}
	
	.protocol-title {
		font-size: clamp(36px, 5vw, 56px);
		font-weight: 600;
		line-height: 1.15;
		letter-spacing: -0.03em;
		margin-bottom: 48px;
		color: #000;
		opacity: 0;
	}
	
	.badges {
		display: flex;
		gap: 10px;
		margin-bottom: 48px;
		flex-wrap: wrap;
	}
	
	.badge {
		display: inline-block;
		padding: 6px 14px;
		font-size: 13px;
		font-weight: 500;
		border: 1px solid #000;
		letter-spacing: -0.01em;
		background: #fff;
		color: #000;
		opacity: 0;
	}
	
	.protocol-intro {
		display: grid;
		grid-template-columns: 1fr;
		gap: 32px;
		margin-bottom: 80px;
	}
	
	.intro-column {
		opacity: 0;
	}
	
	.intro-column p {
		font-size: 17px;
		line-height: 1.75;
		letter-spacing: -0.01em;
		color: #333;
	}
	
	.protocol-content {
		margin-bottom: 60px;
	}
	
	.meta-info {
		font-size: 14px;
		color: #666;
		font-style: italic;
		padding-top: 40px;
		border-top: 1px solid #e5e5e5;
	}
	
	/* Responsive Design */
	@media (max-width: 480px) {
		.protocol-section {
			padding: 80px 20px 60px;
		}
		
		.protocol-container {
			max-width: 100%;
		}
		
		.protocol-title {
			font-size: clamp(28px, 8vw, 40px);
			margin-bottom: 32px;
		}
		
		.badges {
			gap: 8px;
			margin-bottom: 32px;
		}
		
		.badge {
			padding: 5px 10px;
			font-size: 12px;
		}
		
		.protocol-intro {
			gap: 24px;
			margin-bottom: 60px;
		}
		
		.intro-column p {
			font-size: 15px;
		}
		
		.meta-info {
			font-size: 13px;
		}
	}
	
	@media (min-width: 481px) and (max-width: 768px) {
		.protocol-section {
			padding: 100px 32px 70px;
		}
		
		.protocol-container {
			max-width: 600px;
		}
		
		.protocol-title {
			font-size: clamp(32px, 6vw, 48px);
			margin-bottom: 40px;
		}
		
		.protocol-intro {
			gap: 28px;
			margin-bottom: 64px;
		}
		
		.intro-column p {
			font-size: 16px;
		}
	}
	
	@media (min-width: 769px) and (max-width: 1024px) {
		.protocol-section {
			padding: 120px 48px 90px;
		}
		
		.protocol-container {
			max-width: 680px;
		}
		
		.protocol-title {
			font-size: clamp(36px, 5vw, 52px);
			margin-bottom: 44px;
		}
		
		.protocol-intro {
			gap: 30px;
			margin-bottom: 72px;
		}
	}
	
	@media (min-width: 1025px) {
		.protocol-section {
			padding: 140px 48px 120px;
		}
	}
	
	@media (min-width: 1921px) {
		.protocol-container {
			max-width: 800px;
		}
		
		.protocol-title {
			font-size: clamp(48px, 4vw, 64px);
			margin-bottom: 56px;
		}
		
		.badges {
			gap: 12px;
		}
		
		.badge {
			padding: 8px 16px;
			font-size: 14px;
		}
		
		.protocol-intro {
			gap: 40px;
			margin-bottom: 100px;
		}
		
		.intro-column p {
			font-size: 19px;
		}
		
		.meta-info {
			font-size: 15px;
		}
	}
</style>
