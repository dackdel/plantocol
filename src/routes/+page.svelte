<script>
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	
	const contentSections = [
		{
			category: 'GETTING STARTED',
			description: 'Essential knowledge for beginners',
			items: [
				{ name: 'Introduction to Tissue Culture', path: '/introduction', badge: 'Start Here' },
				{ name: 'Equipment & Lab Setup', path: '/guides/equipment-setup', badge: 'Essential' },
				{ name: 'Media Preparation', path: '/guides/media-preparation', badge: 'Technical' }
			]
		},
		{
			category: 'SPECIES PROTOCOLS',
			description: 'Step-by-step propagation guides',
			items: [
				{ name: 'African Violet', path: '/protocols/african-violet', badge: '⭐ Beginner', detail: 'Saintpaulia ionantha' },
				{ name: 'Monstera', path: '/protocols/monstera', badge: 'Easy', detail: 'Swiss Cheese Plant' },
				{ name: 'Begonia', path: '/protocols/begonia', badge: 'Easy', detail: 'General Protocol' },
				{ name: 'Hosta', path: '/protocols/hosta', badge: '⭐⭐ Intermediate', detail: 'Ornamental Species' }
			]
		},
		{
			category: 'REFERENCE',
			description: 'Problem-solving and support',
			items: [
				{ name: 'Troubleshooting Guide', path: '/guides/troubleshooting', badge: '11 Problems' }
			]
		}
	];
	
	let listItems = [];
	
	onMount(() => {
		// Intersection Observer for list animations
		const observer = new IntersectionObserver((entries) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					entry.target.classList.add('visible');
				}
			});
		}, { threshold: 0.2 });
		
		listItems.forEach(item => observer.observe(item));
		
		return () => observer.disconnect();
	});
	
	function handleKeyDown(event, path) {
		if (event.key === 'Enter' || event.key === ' ') {
			event.preventDefault();
			goto(path);
		}
	}
</script>

<svelte:head>
	<title>Plantocol - Plant Tissue Culture Protocol Library</title>
</svelte:head>

<main>
	<!-- Hero Section -->
	<section class="hero">
		<div class="hero-content">
			<h1>Plantocol</h1>
			<p class="subtitle">Tissue Culture Protocol Library</p>
		</div>
	</section>
	
	<!-- Protocol Navigation -->
	<section class="nav-section">
		<h2>Table of Contents</h2>
		<nav>
			{#each contentSections as section, sectionIndex}
				<div class="content-section">
					<div class="section-header">
						<h3>{section.category}</h3>
						<p class="section-description">{section.description}</p>
					</div>
					<ul class="protocol-list">
						{#each section.items as item, i}
							{@const globalIndex = sectionIndex * 10 + i}
							<li 
								bind:this={listItems[globalIndex]}
								class="scroll-animate"
								style="transition-delay: {globalIndex * 0.06}s"
							>
								<a 
									href={item.path}
									on:keydown={(e) => handleKeyDown(e, item.path)}
									tabindex="0"
								>
									<span class="item-content">
										<span class="item-name">{item.name}</span>
										{#if item.detail}
											<span class="item-detail">{item.detail}</span>
										{/if}
									</span>
									<span class="item-badge">{item.badge}</span>
								</a>
							</li>
						{/each}
					</ul>
				</div>
			{/each}
		</nav>
	</section>
</main>

<style>
	main {
		width: 100%;
	}
	
	/* Hero Section */
	.hero {
		min-height: 100vh;
		display: flex;
		align-items: center;
		padding: 0 8%;
		animation: fadeIn 1.2s ease 0.2s both;
	}
	
	.hero-content {
		max-width: 1000px;
	}
	
	.hero h1 {
		/* Interface Guidelines: Typography - Fluid sizing with clamp() */
		font-size: clamp(60px, 11vw, 160px);
		font-weight: 700;
		line-height: 1.05;
		letter-spacing: -0.05em;
		margin: 0 0 24px 0;
	}
	
	.subtitle {
		font-size: clamp(20px, 2.5vw, 32px);
		font-weight: 700;
		letter-spacing: -0.02em;
		color: #666;
		line-height: 1.4;
		margin: 0 0 0 8px;
	}
	
	/* Navigation Section - Laboratory Notebook Style */
	.nav-section {
		min-height: 100vh;
		padding: 100px 8% 120px;
	}
	
	.nav-section h2 {
		font-size: clamp(16px, 2vw, 20px);
		font-weight: 600;
		letter-spacing: -0.01em;
		margin-bottom: 60px;
		padding-bottom: 12px;
		border-bottom: 1px solid #222;
		text-transform: uppercase;
	}
	
	/* Content Sections */
	.content-section {
		margin-bottom: 60px;
	}
	
	.content-section:last-child {
		margin-bottom: 0;
	}
	
	.section-header {
		margin-bottom: 20px;
	}
	
	.section-header h3 {
		font-size: clamp(13px, 1.5vw, 16px);
		font-weight: 600;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: #666;
		margin: 0 0 6px 0;
	}
	
	.section-description {
		font-size: clamp(13px, 1.3vw, 14px);
		color: #999;
		margin: 0;
		font-weight: 400;
	}
	
	.protocol-list {
		list-style: none;
		padding: 0;
		margin: 0;
	}
	
	.protocol-list li {
		border-bottom: 1px solid #e0e0e0;
	}
	
	.protocol-list li:first-child {
		border-top: 1px solid #e0e0e0;
	}
	
	.protocol-list a {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 18px 0;
		color: #222;
		text-decoration: none;
		/* Interface Guidelines: Motion - Fast transition */
		transition: color 150ms ease;
	}
	
	.item-content {
		display: flex;
		flex-direction: column;
		gap: 4px;
		flex: 1;
	}
	
	.item-name {
		font-size: clamp(15px, 1.8vw, 18px);
		font-weight: 400;
		letter-spacing: -0.005em;
	}
	
	.item-detail {
		font-size: clamp(12px, 1.3vw, 13px);
		color: #999;
		font-weight: 400;
	}
	
	.item-badge {
		padding: 4px 10px;
		font-size: clamp(10px, 1.1vw, 11px);
		font-weight: 600;
		letter-spacing: 0.03em;
		background: #f5f5f5;
		border: 1px solid #ddd;
		border-radius: 4px;
		color: #666;
		white-space: nowrap;
		margin-left: 16px;
	}
	
	/* Interface Guidelines: Hover - Only on hover-capable devices */
	@media (hover: hover) {
		.protocol-list a:hover {
			color: #666;
		}
	}
	
	/* Interface Guidelines: Touch */
	@media (max-width: 768px) {
		.hero, .nav-section {
			padding-left: 5%;
			padding-right: 5%;
		}
		
		.nav-section {
			padding-top: 80px;
			padding-bottom: 100px;
		}
	}
	
	/* ========================================
	   RESPONSIVE DESIGN
	   ======================================== */
	
	/* Mobile Portrait (320-480px) */
	@media (max-width: 480px) {
		.hero {
			min-height: 90vh;
			padding: 0 5%;
		}
		
		.hero h1 {
			font-size: clamp(48px, 14vw, 72px);
			line-height: 1.1;
			margin-bottom: 16px;
		}
		
		.subtitle {
			font-size: clamp(18px, 4vw, 24px);
			margin: 0 0 0 4px;
		}
		
		.nav-section {
			padding: 80px 5% 100px;
			min-height: auto;
		}
		
		.nav-section h2 {
			font-size: 14px;
			margin-bottom: 40px;
		}
		
		.content-section {
			margin-bottom: 50px;
		}
		
		.section-header h3 {
			font-size: 12px;
		}
		
		.section-description {
			font-size: 12px;
		}
		
		.protocol-list a {
			padding: 16px 0;
			flex-direction: column;
			align-items: flex-start;
			gap: 8px;
		}
		
		.item-name {
			font-size: 15px;
		}
		
		.item-detail {
			font-size: 12px;
		}
		
		.item-badge {
			margin-left: 0;
			font-size: 10px;
		}
	}
	
	/* Mobile Landscape & Small Tablets (481-768px) */
	@media (min-width: 481px) and (max-width: 768px) {
		.hero, .nav-section {
			padding-left: 6%;
			padding-right: 6%;
		}
		
		.hero {
			min-height: 85vh;
		}
		
		.hero h1 {
			font-size: clamp(56px, 12vw, 100px);
		}
		
		.subtitle {
			font-size: clamp(20px, 3vw, 28px);
			margin: 0 0 0 6px;
		}
		
		.nav-section {
			padding: 90px 6% 110px;
		}
		
		.protocol-list a {
			padding: 20px 0;
			font-size: 16px;
		}
	}
	
	/* Tablets (769-1024px) */
	@media (min-width: 769px) and (max-width: 1024px) {
		.hero, .nav-section {
			padding-left: 7%;
			padding-right: 7%;
		}
		
		.hero h1 {
			font-size: clamp(64px, 10vw, 120px);
		}
		
		.subtitle {
			font-size: clamp(22px, 2.8vw, 30px);
			margin: 0 0 0 7px;
		}
		
		.nav-section {
			padding: 100px 7% 120px;
		}
	}
	
	/* Large Screens & TVs (1921px+) */
	@media (min-width: 1921px) {
		.hero, .nav-section {
			padding-left: 10%;
			padding-right: 10%;
		}
		
		.hero h1 {
			font-size: clamp(80px, 8vw, 180px);
		}
		
		.subtitle {
			font-size: clamp(28px, 2vw, 38px);
			margin: 0 0 0 10px;
		}
		
		.nav-section h2 {
			font-size: 22px;
		}
		
		.protocol-list a {
			font-size: 20px;
			padding: 24px 0;
		}
	}
</style>
