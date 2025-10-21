<script>
	import { page } from '$app/stores';
	
	$: isHome = $page.url.pathname === '/';
</script>

<nav class="main-nav">
	<a href="/" class="home-link" aria-label="Go to homepage">
		<span class="logo">Plantocol</span>
	</a>
</nav>

<style>
	.main-nav {
		position: fixed;
		top: 20px;
		left: 8%;
		z-index: 100;
		animation: fadeIn 0.6s ease 0.8s both;
	}
	
	.home-link {
		text-decoration: none;
		color: #222;
		font-size: 16px;
		font-weight: 600;
		letter-spacing: -0.01em;
		transition: opacity 150ms ease;
	}
	
	.logo {
		display: block;
	}
	
	/* Interface Guidelines: Hover - Only on hover-capable devices */
	@media (hover: hover) {
		.home-link:hover {
			opacity: 0.6;
		}
	}
	
	/* Responsive Design */
	@media (max-width: 480px) {
		.main-nav {
			top: 12px;
			left: 5%;
		}
		
		.home-link {
			font-size: 14px;
			font-weight: 700;
		}
	}
	
	@media (min-width: 481px) and (max-width: 768px) {
		.main-nav {
			top: 15px;
			left: 6%;
		}
		
		.home-link {
			font-size: 15px;
		}
	}
	
	@media (min-width: 769px) and (max-width: 1024px) {
		.main-nav {
			top: 18px;
			left: 7%;
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
	}
	
	@keyframes fadeIn {
		from { opacity: 0; }
		to { opacity: 1; }
	}
</style>
