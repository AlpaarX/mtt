<script>
	export let data;
	$: ({ articles } = data);
</script>

<h2>Articles:</h2>
<div class="grid">
	<div>
		{#each articles as article}
			<article>
				<div class="controls">
					<a href="/{article.id}" role="button" class="outline constrast"><button id="edit" /></a>
					<form action="?/deleteArticle&id={article.id}" method="POST">
						<button id="delete" type="submit" class="outline secondary" />
					</form>
				</div>
				<div class="art-content">
                    <header>{article.title}</header>
				<p>
					{article.content}
				</p>
                </div>
			</article>
		{/each}
	</div>
	<form class="new-art" action="?/createArticle" method="POST">
		<h3>New Article</h3>
		<label for="title"> Title </label>
		<input type="text" id="title" name="title" />
		<label for="title"> Title </label>
		<textarea id="content" name="content" rows={5} />
		<button type="submit">Add Article</button>
	</form>
</div>

<style>
	.grid {
		display: grid;
		grid-template-columns: 2fr 1fr;
		gap: 5rem;
		margin-bottom: 6rem;
	}
	.new-art {
		display: flex;
		flex-direction: column;
		background-color: var(--secondary);
		padding: 1rem;
		border-radius: 12px;
	}
	.new-art input,
	.new-art textarea {
		background-color: #383842;
		color: white;
		font-weight: 600;
		border: none;
		border-radius: 12px;
	}
	textarea {
		border: none;
		min-width: 372px;
		max-width: 372px;
	}
	article {
		background-color: #383842;
		margin-bottom: 1rem;
		border-radius: 12px;
	}
	article header {
		font-weight: 600;
		font-size: 2rem;
	}
	article .controls {
		display: flex;
		justify-content: flex-end;
		gap: 1rem;
		padding: 3px 10px 0 0;
		background-color: #4da8a8;
		border-radius: 12px 12px 0 0;
		user-select: none;
	}
    article .art-content {
        padding: 0 1rem 1rem 1rem;
        color: var(--text-secondary);
    }
    article .art-content header {
        color: var(--text-primary);
    }
	.controls button {
		background-color: #ff705b;
		color: var(--text-primary);
		width: 16px;
		height: 16px;
		border: none;
		border-radius: 100%;
		font-weight: 600;
		white-space: nowrap;
		transition: 0.2s ease;
		cursor: pointer;
	}
	#edit {
		background-color: #ffcd1d;
	}
	button:hover {
		opacity: 0.8;
	}
</style>
