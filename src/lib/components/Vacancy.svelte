<script>
	import dayjs from 'dayjs';
	import relativeTime from 'dayjs/plugin/relativeTime';
	import Container from '$lib/ui/Container.svelte';
	import { page } from '$app/stores';
	import PrimaryButton from '../ui/PrimaryButton.svelte';
	dayjs.extend(relativeTime);
	export let title, company, location, description, isCreated, id;
</script>
<div class="grid">
	<h1>{title}</h1>
	<h5>{company}</h5>
	<h5>{location}</h5>
	<p>{description}</p>

	<p>{dayjs(isCreated).fromNow(true) + ' ago'}</p>
	{#if $page.url.pathname != '/admin/vacancies'}
		<PrimaryButton title={'Details'} href={'/'} />
	{/if}
	{#if $page.url.pathname === '/admin/vacancies'}
		<!-- <div class="none" /> -->
		<a href="/{id}" role="button" class="buttons"><button id="edit">Edit</button></a>
		<form action="?/deleteVacancy&id={id}" method="POST">
			<button id="delete" type="submit" class="buttons">Delete</button>
		</form>
	{/if}
</div>

<style>
	.grid {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr 1fr .5fr .5fr;
		gap: 1rem;

		background-color: var(--secondary);
		padding: .5rem;
		border-radius: 12px;
		justify-content: center;
		align-items: center;
	}
	button {
		background-color: #ff705b;
		color: var(--text-primary);
		padding: 6px 0;
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
	h1 {
		font-size: 1rem;
	}
	h3 {
	}
	h5 {
	}
	p {
		color: var(--text-secondary);
	}
</style>
