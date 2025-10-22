<script>
	import '../app.css';
	import { browser } from '$app/environment';
	import { afterNavigate } from '$app/navigation';
	import { onMount } from 'svelte';
	import UnitSelector from '$lib/components/UnitSelector.svelte';
	import Navigation from '$lib/components/Navigation.svelte';
	
	let scrollY = 0;
	let showBackToTop = false;
	let scrollProgress = 0;
	
	// Scroll to top on navigation
	afterNavigate(() => {
		if (browser) {
			window.scrollTo({ top: 0, behavior: 'instant' });
		}
	});
	
	// Loading screen state
	let showLoading = true;
	let fontsReady = false;
	let currentImageIndex = 0;
	const images = ['/1.webp', '/2.webp', '/3.webp'];
	
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
	
	onMount(async () => {
		// Pick random initial image
		currentImageIndex = Math.floor(Math.random() * images.length);
		
		// Wait for fonts to load to prevent FOUC (Flash of Unstyled Content)
		try {
			await document.fonts.ready;
			fontsReady = true;
		} catch (e) {
			// Fallback if fonts API not supported
			fontsReady = true;
		}
		
		// Hide loading screen when page is fully loaded and fonts are ready
		const hideLoader = () => {
			if (fontsReady) {
				showLoading = false;
			}
		};
		
		if (document.readyState === 'complete') {
			hideLoader();
		} else {
			window.addEventListener('load', hideLoader);
		}
		
		// Rotate images every 3 minutes
		const rotationInterval = setInterval(() => {
			currentImageIndex = Math.floor(Math.random() * images.length);
		}, 180000); // 3 minutes = 180000ms
		
		return () => {
			clearInterval(rotationInterval);
		};
	});
</script>

<svelte:window bind:scrollY />

<!-- Loading screen -->
{#if showLoading}
	<div class="loading-screen">
		<img src={images[currentImageIndex]} alt="Loading" class="loading-image" />
	</div>
{/if}

<div class="app" class:fonts-loaded={fontsReady}>
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
	.loading-screen {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		background: #fff;
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 9999;
		animation: fadeOut 0.3s ease-out forwards;
		animation-delay: 0.7s;
	}
	
	.loading-image {
		max-width: 90vw;
		max-height: 90vh;
		width: auto;
		height: auto;
		object-fit: contain;
	}
	
	@keyframes fadeOut {
		to {
			opacity: 0;
			pointer-events: none;
		}
	}
	
	.app {
		min-height: 100vh;
		visibility: hidden;
	}
	
	.app.fonts-loaded {
		visibility: visible;
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
