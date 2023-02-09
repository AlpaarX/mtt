<script>
	import PrimaryButton from '../ui/PrimaryButton.svelte';
</script>

<header tabindex="-1">
	<div class="navbar">
		<div class="nav-wrap">
			<a href="/"><img src="logo.png" alt="mtt logo" /></a>
			<nav>
				<a href="/#consultants">Consultants</a>
				<a href="/#services">Services</a>
				<a href="/#hrci">HRCI Certification</a>
				<a href="/#digitaltools">Digital tools</a>
				<a href="/#vacancies">Vacancies</a>
				<a href="/#clients">Our clients</a>
				<!-- <a href="#about">About</a> -->
			</nav>
		</div>
		<div class="controls">
			<!-- temporary -->
			<PrimaryButton title="Login" href="/admin" />
			<!-- ! -->
			<PrimaryButton title="Contact us" href="/" />
		</div>
	</div>
</header>

<style>
	header {
		position: sticky;
		top: 0;
		left: 0;
		background-color: var(--primary);
		user-select: none;
	}
	.navbar,
	.nav-wrap {
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	.navbar {
		justify-content: space-between;
		width: 100%;
		max-width: 1296px;
		margin: 0 auto;
	}
	.navbar img {
		max-width: 180px;
		padding-right: 1rem;
	}

	header nav a {
		padding: 0 0.5rem;
		color: var(--text-secondary);
		font-weight: 600;
		transition: 0.2s ease;

		scroll-margin-top: 100px;
	}
	header nav a:hover {
		color: white;
	}

	@media only screen and (max-width: 1023px) {
		nav,
		.controls {
			display: none;
		}
		.navbar {
			justify-content: center;
		}
	}
</style>
