<script>
	import Footer from '$lib/modules/Footer.svelte';
	import Header from '$lib/modules/Header.svelte';
	import MobileNav from '$lib/modules/MobileNav.svelte';
</script>

<svelte:head
	><script
		src="https://kit.fontawesome.com/16355e4ba0.js"
		crossorigin="anonymous"
	></script></svelte:head
>

<div class="layout">
	<Header />
	<main>
		<slot />
		<Footer />
	</main>
	<MobileNav />
</div>

<style>
	/* :global(:root) {
		--primary: #12141d;
		--secondary: #22232C;
		--text-primary: white;
		--text-secondary: #898a8e;
	}
	:global(html) {
		scroll-behavior: smooth;
	}
	:global(body) {
		background-color: #12141d;
		color: var(--text-primary);
	}
	main {
		width: 90%;
		max-width: 1296px;
		margin: 0 auto;
		padding-bottom: 6rem;
	} */
</style>
