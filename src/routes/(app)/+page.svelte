<script>
	import ConsList from '$lib/modules/Consultants/ConsList.svelte';
	import Hero from '$lib/modules/Hero.svelte';
	import ServicesTabs from '$lib/modules/Services/ServicesTabs.svelte';
	import Clients from '$lib/modules/Clients/Clients.svelte';
</script>


<main>
	<Hero />
	<section class="anchors">
		<h1 id="consultants">Our Consultants</h1>
		<ConsList />
		<h1 id="services">Our Services</h1>
		<ServicesTabs />
		<h1 id="hrci">HRCI Certification</h1>
		<h1 id="digitaltools">Digital Tools</h1>
		<h1 id="vacancies">Vacancies</h1>
		<h1 id="clients">Our Clients</h1>
		<Clients />
	</section>
</main>

<style>
	.anchors h1 {
		scroll-margin-top: 6rem;
		font-size: 2rem;
	}
</style>
