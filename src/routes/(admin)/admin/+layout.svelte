<script>
	import SideMenu from '$lib/modules/AdminDashboard/SideMenu.svelte';
	export let data
</script>
<svelte:head>
	<title>More Than Trust | mtt</title>
</svelte:head>
<div class="grid">
		<SideMenu {data}/>
	<main>
		<slot></slot>
	</main>
</div>

<style>
	.grid {
		display: grid;
		grid-template-columns: 1fr 10fr;
		height: 100%;
    }
    main {
        padding: 1.875rem;
    }

</style>
