<script>
	import PrimaryButton from '../ui/PrimaryButton.svelte';
	import { page } from '$app/stores';
	export let data;

</script>

<header tabindex="-1">
	<div class="navbar">
		<div class="nav-wrap">
			<a href="/"><img src="logo.png" alt="mtt logo" /></a>
			<nav>
				<a class:active={$page.url.hash === "#consultants"} href="/#consultants">Consultants</a>
				<a class:active={$page.url.hash === "#services"} href="/#services">Services</a>
				<a class:active={$page.url.hash === "#hrci"} href="/#hrci">HRCI Certification</a>
				<a class:active={$page.url.hash === "#digitaltools"} href="/#digitaltools">Digital tools</a>
				<a class:active={$page.url.hash === "#vacancies"} href="/#vacancies">Vacancies</a>
				<a class:active={$page.url.hash === "#clients"} href="/#clients">Our clients</a>
				<!-- <a href="#about">About</a> -->
			</nav>
		</div>
		<div class="controls">
			<form METHOD="POST">
				{#if !data.user}
					<PrimaryButton title="Login" href="/login" />
					<PrimaryButton title="Contact us" href="/" />
				{:else}
					<PrimaryButton title="Dashboard" href="/admin/dashboard" />
					<button formaction="/logout" type="submit">Logout</button>
				{/if}
			</form>
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
		color: var(--text-primary);
	}
	.active {
		color: var(--text-primary);
	}
	form button {
		background-color: #ff705b;
		color: var(--text-primary);
		padding: 12px 24px;
		border: none;
		border-radius: 6px;
		font-weight: 600;
		white-space: nowrap;
		transition: 0.2s ease;
		cursor: pointer;
	}
	button:hover {
		opacity: 0.8;
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
