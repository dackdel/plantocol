<script>
	import { page } from '$app/stores';
	import { unitSystem } from '$lib/stores/units';
	import { onMount, onDestroy } from 'svelte';
	import { browser } from '$app/environment';
	import gsap from 'gsap';
	
	export let scrollY = 0;
	
	$: isHome = $page.url.pathname === '/';
	
	// On home page, always hide nav - the animated hero title serves as nav
	$: showNav = !isHome;
	
	// Menu state
	let menuOpen = false;
	let isMobile = false;
	let isAtBottom = false;
	let lineTop;
	let lineMiddle;
	let lineBottom;

	function animateHamburger(open) {
		if (!lineTop || !lineMiddle || !lineBottom) return;
		const duration = 0.25;
		
		if (open) {
			gsap.to(lineTop, { y: 6, rotation: 45, duration, ease: 'power2.out' });
			gsap.to(lineMiddle, { opacity: 0, scaleX: 0, duration: duration * 0.8, ease: 'power2.out' });
			gsap.to(lineBottom, { y: -6, rotation: -45, duration, ease: 'power2.out' });
		} else {
			gsap.to(lineTop, { y: 0, rotation: 0, duration, ease: 'power2.out' });
			gsap.to(lineMiddle, { opacity: 1, scaleX: 1, duration: duration * 0.8, ease: 'power2.out' });
			gsap.to(lineBottom, { y: 0, rotation: 0, duration, ease: 'power2.out' });
		}
	}
	
	$: if (isMobile) {
		animateHamburger(menuOpen);
	} else {
		animateHamburger(false);
	}
	
	// Protocol navigation order
	const protocols = [
		{ name: 'Introduction', path: '/introduction' },
		{ name: 'Equipment & Lab Setup', path: '/guides/equipment-setup' },
		{ name: 'Media Preparation', path: '/guides/media-preparation' },
		{ name: 'African Violet', path: '/protocols/african-violet' },
		{ name: 'Monstera', path: '/protocols/monstera' },
		{ name: 'Begonia', path: '/protocols/begonia' },
		{ name: 'Bromeliads', path: '/protocols/bromeliad' },
		{ name: 'Hosta', path: '/protocols/hosta' },
		{ name: 'Sarracenia', path: '/protocols/sarracenia' },
		{ name: 'Troubleshooting', path: '/guides/troubleshooting' }
	];
	
	$: currentIndex = protocols.findIndex(p => p.path === $page.url.pathname);
	$: prevProtocol = currentIndex > 0 ? protocols[currentIndex - 1] : null;
	$: nextProtocol = currentIndex < protocols.length - 1 ? protocols[currentIndex + 1] : null;
	$: hasNavLinks = prevProtocol || nextProtocol;
	
	// Check if scrolled to bottom
	$: if (browser && isMobile) {
		const scrollHeight = document.documentElement.scrollHeight;
		const clientHeight = window.innerHeight;
		isAtBottom = scrollY + clientHeight >= scrollHeight - 100; // 100px threshold
	}
	
	// Check if mobile on mount and resize
	onMount(() => {
		const checkMobile = () => {
			isMobile = window.innerWidth <= 768;
		};
		checkMobile();
		window.addEventListener('resize', checkMobile);
		return () => window.removeEventListener('resize', checkMobile);
	});
	
	// Toggle menu for mobile tap
	function toggleMenu() {
		if (isMobile) {
			menuOpen = !menuOpen;
		}
	}
	
	// Close menu when clicking outside on mobile
	function handleClickOutside(event) {
		if (isMobile && menuOpen) {
			const nav = event.target.closest('.nav-trigger');
			if (!nav) {
				menuOpen = false;
			}
		}
	}
	
	// Close menu on navigation
	$: if ($page.url.pathname) {
		menuOpen = false;
	}
	
	// GSAP underline animations
	function animateUnderlineIn(node) {
		if (!node) return;
		// Kill any existing animation on this element
		gsap.killTweensOf(node);
		gsap.fromTo(node, 
			{ scaleX: 0, transformOrigin: 'left center' },
			{ scaleX: 1, duration: 0.3, ease: 'power2.out' }
		);
	}
	
	function animateUnderlineOut(node) {
		if (!node) return;
		// Kill any existing animation on this element
		gsap.killTweensOf(node);
		gsap.to(node, { 
			scaleX: 0, 
			transformOrigin: 'right center',
			duration: 0.2, 
			ease: 'power2.in' 
		});
	}
	
	function toggleUnits() {
		unitSystem.update(current => current === 'metric' ? 'imperial' : 'metric');
	}
	
	const menuItems = {
		gettingStarted: {
			title: 'Getting Started',
			items: [
				{ name: 'Introduction to Tissue Culture', path: '/introduction' },
				{ name: 'Equipment & Lab Setup', path: '/guides/equipment-setup' },
				{ name: 'Media Preparation', path: '/guides/media-preparation' }
			]
		},
		recipes: {
			title: 'Recipes',
			items: [
				{ name: 'African Violet', path: '/protocols/african-violet' },
				{ name: 'Monstera', path: '/protocols/monstera' },
				{ name: 'Begonia', path: '/protocols/begonia' },
				{ name: 'Bromeliads', path: '/protocols/bromeliad' },
				{ name: 'Hosta', path: '/protocols/hosta' },
				{ name: 'Sarracenia', path: '/protocols/sarracenia' }
			]
		}
	};
</script>

{#if showNav}
<nav class="main-nav" class:animate-in={isHome && scrollY > 300}>
	<div 
		class="nav-trigger"
		on:mouseenter={() => !isMobile && (menuOpen = true)}
		on:mouseleave={() => !isMobile && (menuOpen = false)}
		role="navigation"
	>
		{#if isMobile}
			<!-- Mobile: tap to toggle menu -->
			<button 
				type="button"
				class="home-link nav-pill"
				class:open={menuOpen}
				on:click={toggleMenu}
				aria-expanded={menuOpen}
				aria-label="Toggle navigation"
			>
				<span class="sr-only">Toggle navigation menu</span>
				<span class="hamburger-icon">
					<span class="hamburger-line" bind:this={lineTop}></span>
					<span class="hamburger-line" bind:this={lineMiddle}></span>
					<span class="hamburger-line" bind:this={lineBottom}></span>
				</span>
			</button>
		{:else}
			<!-- Desktop: click navigates home, hover opens menu -->
			<a href="/" class="home-link" aria-label="Go to homepage">
				<span class="logo">Plantocol</span>
				{#if menuOpen}
					<span class="underline" use:animateUnderlineIn></span>
				{/if}
			</a>
		{/if}
		
		{#if menuOpen}
		<div class="dropdown-menu" role="menu" tabindex="-1">
			<!-- Getting Started -->
			<div class="menu-section">
				<h3 class="menu-title">{menuItems.gettingStarted.title}</h3>
				<ul>
					{#each menuItems.gettingStarted.items as item}
						<li>
							<a 
								href={item.path} 
								class="menu-link"
								on:mouseenter={(e) => animateUnderlineIn(e.currentTarget.querySelector('.underline'))}
								on:mouseleave={(e) => animateUnderlineOut(e.currentTarget.querySelector('.underline'))}
							>
								{item.name}
								<span class="underline"></span>
							</a>
						</li>
					{/each}
				</ul>
			</div>
				
			<!-- Recipes -->
			<div class="menu-section">
				<h3 class="menu-title">{menuItems.recipes.title}</h3>
				<ul>
					{#each menuItems.recipes.items as item}
						<li>
							<a 
								href={item.path} 
								class="menu-link"
								on:mouseenter={(e) => animateUnderlineIn(e.currentTarget.querySelector('.underline'))}
								on:mouseleave={(e) => animateUnderlineOut(e.currentTarget.querySelector('.underline'))}
							>
								{item.name}
								<span class="underline"></span>
							</a>
						</li>
					{/each}
				</ul>
			</div>
			
			<!-- Unit Toggle -->
			<div class="menu-section unit-toggle">
				<button on:click={toggleUnits} class="unit-button">
					<span class:selected={$unitSystem === 'metric'}>Based Metric</span>
					<span class="separator">/</span>
					<span class:selected={$unitSystem === 'imperial'}>Cringe Imperial</span>
				</button>
			</div>
			
			<!-- Home link in menu for mobile -->
			<div class="menu-section home-section">
				<a href="/" class="menu-link home-menu-link">
					Home
					<span class="underline"></span>
				</a>
			</div>
		</div>
		{/if}
	</div>
	
	{#if isMobile && menuOpen}
		<div class="nav-overlay" on:click={() => (menuOpen = false)} aria-hidden="true"></div>
	{/if}
	
	<!-- Mobile: Prev/Next nav shown when scrolled to bottom -->
	{#if isMobile && isAtBottom && hasNavLinks}
	<div class="mobile-page-nav">
		{#if prevProtocol}
			<a href={prevProtocol.path} class="page-nav-link prev">
				<span class="arrow">←</span>
				<span class="page-name">{prevProtocol.name}</span>
			</a>
		{/if}
		{#if nextProtocol}
			<a href={nextProtocol.path} class="page-nav-link next">
				<span class="page-name">{nextProtocol.name}</span>
				<span class="arrow">→</span>
			</a>
		{/if}
	</div>
	{/if}
</nav>
{/if}

<svelte:window on:click={handleClickOutside} />

<style>
	.main-nav {
		position: fixed;
		top: 20px;
		left: 8%;
		z-index: 100;
	}
	
	.main-nav.animate-in {
		animation: fadeIn 0.3s ease both;
	}
	
	.nav-trigger {
		position: relative;
		/* Generous hover zone to prevent accidental close */
		padding-bottom: 20px;
		margin-bottom: -20px;
	}
	
	.home-link {
		text-decoration: none;
		color: #222;
		font-size: 16px;
		font-weight: 600;
		letter-spacing: -0.01em;
		display: block;
		position: relative;
	}
	
	.logo {
		display: block;
	}
	
	/* Underline styles */
	.underline {
		position: absolute;
		bottom: -2px;
		left: 0;
		width: 100%;
		height: 2px;
		background: #222;
		transform-origin: left center;
	}
	
	.menu-link .underline {
		height: 1px;
		bottom: 0;
		transform: scaleX(0);
	}
	
	/* Dropdown Menu */
	.dropdown-menu {
		position: absolute;
		top: calc(100% - 20px); /* Account for nav-trigger padding */
		left: 0;
		padding: 20px 0 24px 0;
		min-width: 280px;
		background: #fff;
		animation: menuFadeIn 0.15s ease both;
	}
	
	.menu-section {
		margin-bottom: 28px;
	}
	
	.menu-section:last-child {
		margin-bottom: 0;
	}
	
	.menu-title {
		font-size: 22px;
		font-weight: 700;
		letter-spacing: -0.02em;
		margin: 0 0 12px 0;
		color: #222;
	}
	
	.menu-section ul {
		list-style: none;
		padding: 0;
		margin: 0;
	}
	
	.menu-section li {
		margin: 0;
	}
	
	.menu-link {
		display: inline-block;
		position: relative;
		padding: 6px 0;
		color: #666;
		text-decoration: none;
		font-size: 15px;
		font-weight: 400;
		letter-spacing: -0.01em;
		transition: color 150ms ease;
	}
	
	/* Unit Toggle */
	.unit-toggle {
		padding-top: 20px;
		border-top: 1px solid #e0e0e0;
	}
	
	.unit-button {
		background: none;
		border: none;
		padding: 6px 0;
		cursor: pointer;
		font-family: inherit;
		font-size: 14px;
		display: flex;
		align-items: center;
		gap: 8px;
		color: #999;
	}
	
	.unit-button span {
		transition: color 150ms ease;
	}
	
	.unit-button span.selected {
		color: #222;
		font-weight: 600;
	}
	
	.unit-button .separator {
		color: #ccc;
	}
	
	/* Interface Guidelines: Hover - Only on hover-capable devices */
	@media (hover: hover) {
		.menu-link:hover {
			color: #222;
		}
		
		.unit-button:hover span:not(.selected):not(.separator) {
			color: #666;
		}
	}
	
	/* Home link in mobile menu */
	.home-section {
		display: none;
	}
	
	.home-menu-link {
		font-weight: 600;
		color: #222;
	}
	
	.sr-only {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		border: 0;
	}
	
	/* Mobile styles */
	@media (max-width: 768px) {
		.main-nav {
			position: fixed;
			top: auto;
			bottom: 12px;
			left: 12px;
			transform: none;
			width: auto;
			padding: 0;
			background: rgba(255, 255, 255, 0.95);
			border: 1px solid #222;
			border-radius: 999px;
			box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
			z-index: 100;
			max-width: calc(100% - 24px);
		}
		
		.nav-trigger {
			padding: 0;
			margin: 0;
		}
		
		.home-link {
			display: inline-flex;
			align-items: center;
			justify-content: center;
			width: 64px;
			height: 64px;
			padding: 0;
			font-size: 0;
			border-radius: 50%;
			background: #fff;
			border: none;
			cursor: pointer;
			box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.12);
		}
		
		.nav-pill {
			border-radius: 50%;
			min-width: unset;
			text-align: center;
			transition: background 0.2s ease, box-shadow 0.2s ease;
		}
		
		.nav-pill.open {
			background: #222;
			box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
		}
		
		.hamburger-icon {
			position: relative;
			width: 24px;
			height: 18px;
		}
		
		.hamburger-line {
			position: absolute;
			left: 0;
			right: 0;
			height: 2.5px;
			background: currentColor;
			border-radius: 999px;
		}
		
		.hamburger-line:first-child {
			top: 0;
		}
		
		.hamburger-line:nth-child(2) {
			top: 50%;
			transform: translateY(-50%);
		}
		
		.hamburger-line:last-child {
			bottom: 0;
		}
		
		.dropdown-menu {
			position: fixed;
			top: auto;
			left: 16px;
			transform: none;
			bottom: calc(12px + 64px + env(safe-area-inset-bottom));
			padding: 24px 0 20px 0;
			width: min(94vw, 360px);
			min-width: unset;
			max-height: calc(100vh - 140px);
			overflow-y: auto;
			background: #fff;
			border-radius: 8px;
			box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.1);
			animation: menuFadeInMobile 0.2s ease both;
			z-index: 101;
		}
		
		.menu-section {
			margin-bottom: 24px;
			padding: 0 24px;
		}
		
		.menu-title {
			font-size: 16px;
			font-weight: 600;
		}
		
		.menu-link {
			font-size: 14px;
			padding: 8px 0;
		}
		
		.unit-toggle {
			margin: 0 24px;
			padding: 16px 0;
		}
		
		.home-section {
			display: block;
			padding-top: 16px;
			border-top: 1px solid #e0e0e0;
			margin-bottom: 0;
		}
		
		/* Mobile page navigation (prev/next) */
		.mobile-page-nav {
			position: fixed;
			bottom: calc(12px + 64px + env(safe-area-inset-bottom));
			left: 12px;
			right: 12px;
			display: flex;
			justify-content: space-between;
			background: #fff;
			border-top: 1px solid #e0e0e0;
			padding: 8px 16px;
			z-index: 99;
			animation: slideUp 0.2s ease both;
		}
		
		.page-nav-link {
			display: flex;
			align-items: center;
			gap: 6px;
			text-decoration: none;
			color: #222;
			font-size: 13px;
			font-weight: 500;
			padding: 6px 0;
		}
		
		.page-nav-link.prev {
			margin-right: auto;
		}
		
		.page-nav-link.next {
			margin-left: auto;
		}
		
		.page-nav-link .arrow {
			font-size: 14px;
		}
		
		.page-nav-link .page-name {
			max-width: 120px;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}
	}
	
	@keyframes slideUp {
		from {
			transform: translateY(100%);
			opacity: 0;
		}
		to {
			transform: translateY(0);
			opacity: 1;
		}
	}
	
	@media (max-width: 480px) {
		.main-nav {
			bottom: 16px;
			left: 5%;
		}
		
		.dropdown-menu {
			min-width: 240px;
		}
	}
	
	@media (min-width: 769px) and (max-width: 1024px) {
		.main-nav {
			top: 18px;
			left: 7%;
		}
		
		.dropdown-menu {
			min-width: 260px;
		}
		
		.menu-title {
			font-size: 20px;
		}
		
		.menu-link {
			font-size: 14px;
		}
	}
	
	@media (min-width: 1921px) {
		.main-nav {
			top: 24px;
			left: 10%;
		}
		
		.home-link {
			font-size: 18px;
		}
		
		.dropdown-menu {
			min-width: 320px;
			padding: 40px 0 32px 0;
		}
		
		.menu-title {
			font-size: 26px;
			margin-bottom: 16px;
		}
		
		.menu-link {
			font-size: 17px;
			padding: 8px 0;
		}
		
		.menu-section {
			margin-bottom: 36px;
		}
	}
	
	@keyframes fadeIn {
		from { opacity: 0; }
		to { opacity: 1; }
	}
	
	@keyframes menuFadeIn {
		from { 
			opacity: 0;
			transform: translateY(-8px);
		}
		to { 
			opacity: 1;
			transform: translateY(0);
		}
	}
	
	@keyframes menuFadeInMobile {
		from { 
			opacity: 0;
			transform: translateY(8px);
		}
		to { 
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>
