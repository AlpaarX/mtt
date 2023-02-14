<script>
	import {page} from "$app/stores"
</script>

<footer>
	<a class:active={$page.url.hash === '#consultants'} href="/#consultants">Consultants</a>
	<a class:active={$page.url.hash === '#services'} href="/#services">Services</a>
	<a class:active={$page.url.hash === '#vacancies'} href="/#vacancies">Vacancies</a>
	<a class:active={$page.url.hash === '#clients'} href="/#clients">Our clients</a>

	<!-- <a href="#about">About</a> -->
</footer>

<style>
	/* ===== FOOTER ====== */

	footer {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		position: sticky;
		bottom: 0;
		left: 0;
		width: 100%;

		background-color: var(--primary);
		user-select: none;
		visibility: hidden;
	}
	footer a {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		padding: 1.2rem 0;
		color: var(--text-secondary);
		font-weight: 500;
	}
	.active {
		color: var(--text-primary);
	}

	@media only screen and (max-width: 1023px) {
		footer {
			visibility: visible;
		}
	}
</style>
