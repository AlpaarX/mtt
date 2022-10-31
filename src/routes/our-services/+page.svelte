<script>
  import Subheader from "../../lib/Subheader.svelte";

  let pageTitle = 'Our services'
</script>

<svelte:head><title>{pageTitle} • Mtt</title></svelte:head>
<div class="main">
  <Subheader pageTitle={pageTitle}/>
  <div class="hero1">
    <h1 class="title">Recruitment and Executive Search</h1>
    <p class="content">
      “Right people, right place, right time” – old, but gold! We provide professional recruitment services (using professional assessment tools of SHL); search for unique specialists and head hunting. Just show whom you want and we will bring them on board.
    </p>
  </div>
</div>

<style>
  .main {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .hero1 {
    position: relative;
    width: 100vw;
    height: 600px;
    
  }
  .hero1::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(bg-img/hero1.jpg) no-repeat;
    background-size: cover;
    background-position: center center;
    opacity: 0.2;
  }
  .title {
    opacity: 1;
  }
  .content {
    opacity: 1;
  }
</style>