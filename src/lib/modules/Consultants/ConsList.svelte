<script>
	import ConsCard from './components/ConsCard.svelte';
</script>

<div class="grid">
	<ConsCard />
	<ConsCard />
	<ConsCard />
	<ConsCard />
	<ConsCard />
	<ConsCard />
	<ConsCard />
	<ConsCard />
	<ConsCard />
	<ConsCard />
	<ConsCard />
	<ConsCard />
	<ConsCard />
	<ConsCard />
	<ConsCard />
	<ConsCard />
	<ConsCard />
	<ConsCard />
	<ConsCard />
	<ConsCard />
</div>

<style>
	.grid {
		display: grid;
		gap: 1rem;
		justify-content: center;
		margin-bottom: 6rem;
	}

	@media (min-width: 40em) {
		.grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (min-width: 65em) {
		.grid {
			grid-template-columns: repeat(3, 1fr);
		}
	}
</style>
