<script>
    import PrimaryButton from "../../../ui/PrimaryButton.svelte";
</script>

<div class="card">
	<img src="Nargiz.jpg" alt="" />
	<h1>Nargiz Khanjanbayova</h1>
	<p>
		Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum, modi voluptate iure provident
		autem qui dolorum vero aliquam est tempore dignissimos porro rerum, facere debitis, ad assumenda
		natus quidem laborum.
	</p>
    <PrimaryButton title="Hire me" href=""/>
</div>

<style>
    .card {
        border-radius: 12px;
        background-color: var(--secondary);
        padding: 1.5rem;
        text-align: center;
        max-width: 422px;
    }
    .card img {
        width: 150px;
        border-radius: 100%;
        margin: 0 auto;
    }
    .card h1 {

    }
    .card p {
        color: var(--text-secondary);
        margin-bottom: 1rem;
    }
</style>