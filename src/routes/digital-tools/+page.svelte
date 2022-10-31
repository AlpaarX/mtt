<script>
  import Subheader from "../../lib/Subheader.svelte"

  let pageTitle = 'Digital tools'
</script>

<svelte:head><title>{pageTitle} • Mtt</title></svelte:head>
<div class="main">
  <Subheader pageTitle={pageTitle}/>
  <h1>We are cuties</h1>
  <img src="/dog.jpeg" alt="dog">
</div>

<style>
  .main {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
</style>