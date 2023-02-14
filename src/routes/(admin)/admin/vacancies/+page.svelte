<script>
	import VacanciesList from '../../../../lib/modules/Vacancies/VacanciesList.svelte';
	import CreateVacancy from '../../../../lib/modules/Vacancies/CreateVacancy.svelte';
	let isOpen = false;
	function open() {
		isOpen = !isOpen;
	}
</script>

<h1>Manage vacancies</h1>
<button on:click={open}>+</button>
{#if isOpen}
	<div class="create">
		<CreateVacancy />
	</div>
{/if}

<VacanciesList />

<style>
	.create {
		margin-bottom: 1rem;
	}
	button {
		background-color: #ff705b;
		color: var(--text-primary);
		padding: 4px 0;
		width: 60px;
		text-align: center;
		border: none;
		border-radius: 100px;
		font-weight: 600;
		font-size: 2rem;
		white-space: nowrap;
		transition: 0.2s ease;
		cursor: pointer;
		margin-bottom: 1rem;
	}
</style>
