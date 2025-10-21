<script>
	import '../app.css';
	import { browser } from '$app/environment';
	import UnitSelector from '$lib/components/UnitSelector.svelte';
	import Navigation from '$lib/components/Navigation.svelte';
	
	let scrollY = 0;
	let showBackToTop = false;
	let scrollProgress = 0;
	
	$: showBackToTop = scrollY > 300;
	
	// Calculate scroll progress safely
	$: if (browser) {
		const height = document.documentElement.scrollHeight - window.innerHeight;
		scrollProgress = height > 0 ? (scrollY / height) * 100 : 0;
	}
	
	function scrollToTop() {
		if (browser) {
			window.scrollTo({ top: 0, behavior: 'smooth' });
		}
	}
</script>

<svelte:window bind:scrollY />

<div class="app">
	<!-- Progress bar -->
	<div class="progress-bar" style="width: {scrollProgress}%" />
	
	<!-- Navigation -->
	<Navigation />
	
	<!-- Unit selector -->
	<UnitSelector />
	
	<slot />
	
	<!-- Back to top button -->
	{#if showBackToTop}
		<button 
			class="back-to-top fade-in" 
			on:click={scrollToTop}
			aria-label="Scroll to top"
		>
			↑
		</button>
	{/if}
</div>

<style>
	.app {
		min-height: 100vh;
	}
	
	.progress-bar {
		position: fixed;
		top: 0;
		left: 0;
		height: 2px;
		background: #222;
		z-index: 1000;
		transition: width 0.1s ease;
	}
	
	.back-to-top {
		position: fixed;
		bottom: 40px;
		right: 40px;
		width: 50px;
		height: 50px;
		background: #222;
		color: #fff;
		border: none;
		border-radius: 50%;
		cursor: pointer;
		font-size: 20px;
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 100;
	}
	
	/* Responsive Design */
	@media (max-width: 480px) {
		.progress-bar {
			height: 1.5px;
		}
		
		.back-to-top {
			bottom: 16px;
			right: 16px;
			width: 44px;
			height: 44px;
			font-size: 18px;
		}
	}
	
	@media (min-width: 481px) and (max-width: 768px) {
		.back-to-top {
			bottom: 20px;
			right: 20px;
			width: 46px;
			height: 46px;
			font-size: 19px;
		}
	}
	
	@media (min-width: 769px) and (max-width: 1024px) {
		.back-to-top {
			bottom: 30px;
			right: 30px;
			width: 48px;
			height: 48px;
		}
	}
	
	@media (min-width: 1921px) {
		.progress-bar {
			height: 3px;
		}
		
		.back-to-top {
			bottom: 50px;
			right: 50px;
			width: 60px;
			height: 60px;
			font-size: 24px;
		}
	}
</style>
