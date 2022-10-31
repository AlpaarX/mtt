<script>
  import Subheader from "../../lib/Subheader.svelte";

  let pageTitle = "Contact us";
</script>

<svelte:head><title>{pageTitle} • Mtt</title></svelte:head>
<div class="main">
  <Subheader {pageTitle} />
  <div class="form">
    <input type="text" placeholder="Name"/>
    <input type="text" placeholder="Email address"/>
    <textarea placeholder="Your message..."/>
    <button>Send message</button>
  </div>
</div>

<style>
  .main {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .form {
    background-color: #373737;
    display: flex;
    flex-direction: column;

    padding: 1rem;
    border-radius: 10px;
  }
  .form input {
    border: none;
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }
  .form textarea {
    font-family: 'Roboto', sans-serif;
  }
</style>
