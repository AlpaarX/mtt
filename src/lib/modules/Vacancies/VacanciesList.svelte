<script>
	import Vacancy from '../../components/Vacancy.svelte';
	import { page } from '$app/stores';
	import PrimaryButton from '../../ui/PrimaryButton.svelte';

	$: ({ vacancies } = $page.data);
	let limit
	if ($page.url.pathname === "/")
	{
		limit = 5
	}
	
</script>

<div class="vacancies">
	{#each [...vacancies].reverse().slice(0, limit) as vacancy}
	<div class="vacancy">
		<Vacancy
			title={vacancy.title}
			company={vacancy.company}
			location={vacancy.location}
			description={vacancy.description}
			isCreated={vacancy.isCreated}
			id={vacancy.id}
		/>
	</div>
{/each}
{#if $page.url.pathname === "/"}
	<PrimaryButton title={"Browse all vacancies"} href={"/vacancies"}/>
{/if}
</div>

<style>
	.vacancies {
		margin-bottom: 6rem;
	}
	.vacancy {
		margin-bottom: 1rem;
	}
</style>