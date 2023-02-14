<script>
	import Footer from '$lib/modules/Footer.svelte';
	import Header from '$lib/modules/Header.svelte';
	import MobileNav from '$lib/modules/MobileNav.svelte';

	export let data;
</script>

<svelte:head>
	<title>More Than Trust | mtt</title>
</svelte:head>
<div class="layout">
	<Header {data} />
	<main class="main-app">
		<slot />
		<Footer />
	</main>
	<MobileNav />
</div>
