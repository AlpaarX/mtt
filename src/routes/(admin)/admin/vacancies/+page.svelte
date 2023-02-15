<script>
	import VacanciesList from '../../../../lib/modules/Vacancies/VacanciesList.svelte';
	import CreateVacancy from '../../../../lib/modules/Vacancies/CreateVacancy.svelte';
	import Container from '$lib/ui/Container.svelte';
	import dayjs from 'dayjs';
	import relativeTime from 'dayjs/plugin/relativeTime';
	dayjs.extend(relativeTime);
	let isOpen = false;
	function open() {
		isOpen = !isOpen;
	}
</script>

<h1>Manage vacancies</h1>
<button on:click={open}>+</button>
{#if isOpen}
	<div class="create">
		<div class="new-vac">
			<form action="?/createVacancy" method="POST">
				<Container>
					<div class="grid">
						<div class="inputs">
							<input type="text" name="title" placeholder="Job title" required />
							<input type="text" name="company" placeholder="Company" required />
							<input type="text" name="location" placeholder="Location" required />
						</div>
						<textarea
							name="description"
							oninput='this.style.height = "";this.style.height = this.scrollHeight + "px"' 
							placeholder="Job description" 
							required />
					</div>
					<button type="submit">Add vacancy</button>
				</Container>
			</form>
		</div>
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

	.new-vac {
		position: sticky;
		bottom: 0;
		right: 0;
	}
	.grid {
		display: grid;
		grid-template-columns: 1fr 2fr;
		margin-bottom: 1rem;
	}
	.inputs {
		display: grid;
		gap: 1rem;
		height: 230px;
	}
	input,
	textarea {
		background-color: var(--tertiary);
		color: var(--text-primary);
		font-weight: 500;
		border: none;
		border-radius: 6px;
		height: 60px;
		padding: 0 1.5rem;
	}
	textarea {
		resize: vertical;
		padding-top: 1rem;
		min-height: 225px;
	}
	.grid {
		display: grid;
		gap: 0.7rem;
	}
	button {
		background-color: #ff705b;
		color: var(--text-primary);
		padding: 18px 24px;
		/* height: 60px; */
		width: 100%;
		text-align: center;
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
</style>
