<script>
	export let currentPath = '';
	
	// Sequential content order matching the landing page structure
	const protocols = [
		{ id: 'introduction', name: 'Introduction to Tissue Culture', path: '/introduction' },
		{ id: 'equipment', name: 'Equipment & Lab Setup', path: '/guides/equipment-setup' },
		{ id: 'media', name: 'Media Preparation', path: '/guides/media-preparation' },
		{ id: 'african-violet', name: 'African Violet Protocol', path: '/protocols/african-violet' },
		{ id: 'monstera', name: 'Monstera Protocol', path: '/protocols/monstera' },
		{ id: 'begonia', name: 'Begonia Protocol', path: '/protocols/begonia' },
		{ id: 'hosta', name: 'Hosta Protocol', path: '/protocols/hosta' },
		{ id: 'troubleshooting', name: 'Troubleshooting Guide', path: '/guides/troubleshooting' }
	];
	
	$: currentIndex = protocols.findIndex(p => p.path === currentPath);
	$: prevProtocol = currentIndex > 0 ? protocols[currentIndex - 1] : null;
	$: nextProtocol = currentIndex < protocols.length - 1 ? protocols[currentIndex + 1] : null;
</script>

<nav class="protocol-nav">
	<div class="nav-container">
		{#if prevProtocol}
			<a href={prevProtocol.path} class="nav-link prev">
				<span class="nav-label">Previous</span>
				<span class="nav-title">{prevProtocol.name}</span>
			</a>
		{:else}
			<div class="nav-spacer"></div>
		{/if}
		
		<a href="/" class="nav-link home">
			<span class="nav-label">Back to</span>
			<span class="nav-title">Table of Contents</span>
		</a>
		
		{#if nextProtocol}
			<a href={nextProtocol.path} class="nav-link next">
				<span class="nav-label">Next</span>
				<span class="nav-title">{nextProtocol.name}</span>
			</a>
		{:else}
			<div class="nav-spacer"></div>
		{/if}
	</div>
</nav>

<style>
	.protocol-nav {
		border-top: 1px solid #e0e0e0;
		padding: 60px 8%;
		margin-top: 60px;
	}
	
	.nav-container {
		display: grid;
		grid-template-columns: 1fr auto 1fr;
		gap: 40px;
		align-items: start;
		max-width: 1400px;
	}
	
	.nav-link {
		display: flex;
		flex-direction: column;
		gap: 8px;
		text-decoration: none;
		color: #222;
		transition: opacity 150ms ease;
	}
	
	.nav-link.prev {
		justify-self: start;
		text-align: left;
	}
	
	.nav-link.home {
		justify-self: center;
		text-align: center;
	}
	
	.nav-link.next {
		justify-self: end;
		text-align: right;
	}
	
	.nav-label {
		font-size: 12px;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		color: #999;
		font-weight: 600;
	}
	
	.nav-title {
		font-size: 16px;
		font-weight: 500;
		letter-spacing: -0.01em;
	}
	
	/* nav-spacer intentionally has no styles - used for grid alignment only */
	
	/* Interface Guidelines: Hover - Only on hover-capable devices */
	@media (hover: hover) {
		.nav-link:hover {
			opacity: 0.6;
		}
	}
	
	/* Responsive Design */
	@media (max-width: 480px) {
		.protocol-nav {
			padding: 40px 5%;
			margin-top: 40px;
		}
		
		.nav-container {
			grid-template-columns: 1fr;
			gap: 24px;
		}
		
		.nav-link.prev,
		.nav-link.home,
		.nav-link.next {
			justify-self: start;
			text-align: left;
		}
		
		.nav-label {
			font-size: 11px;
		}
		
		.nav-title {
			font-size: 14px;
		}
		
		.nav-spacer {
			display: none;
		}
	}
	
	@media (min-width: 481px) and (max-width: 768px) {
		.protocol-nav {
			padding: 50px 6%;
		}
		
		.nav-container {
			grid-template-columns: 1fr;
			gap: 28px;
		}
		
		.nav-link.prev,
		.nav-link.home,
		.nav-link.next {
			justify-self: start;
			text-align: left;
		}
		
		.nav-label {
			font-size: 12px;
		}
		
		.nav-title {
			font-size: 15px;
		}
		
		.nav-spacer {
			display: none;
		}
	}
	
	@media (min-width: 769px) and (max-width: 1024px) {
		.protocol-nav {
			padding: 55px 7%;
		}
		
		.nav-container {
			gap: 35px;
		}
	}
	
	@media (min-width: 1921px) {
		.protocol-nav {
			padding: 70px 10%;
		}
		
		.nav-container {
			gap: 50px;
		}
		
		.nav-label {
			font-size: 13px;
		}
		
		.nav-title {
			font-size: 18px;
		}
	}
</style>
