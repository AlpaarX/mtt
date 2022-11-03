<script>
  import Subheader from "../../lib/Subheader.svelte";
  import SomeItem from "./SomeItem.svelte";

  let pageTitle = 'Vacancies'

  const items = [
    {
      name: "This is Title",
      desc: "It's awesome"
    },
  ]
</script>

<svelte:head><title>{pageTitle} • Mtt</title></svelte:head>
<div class="main">
  <Subheader pageTitle={pageTitle}/>
  {#each items as item}
    <SomeItem item={item}/>
  {/each}
</div>

<style>
  .main {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
</style>