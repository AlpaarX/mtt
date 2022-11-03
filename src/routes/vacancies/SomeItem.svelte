<script>
  export let item

</script>

<div class="card">
  <h1>{item.name}</h1>
  <p>{item.desc}</p>
</div>

<style>
  .card {
    background-color: #9c0000;
    margin-bottom: 1rem;
  }
  h1 {
    font-size: 2rem;
  }
</style>