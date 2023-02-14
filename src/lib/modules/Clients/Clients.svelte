<script>
	import { page } from '$app/stores';

	$: ({ articles } = $page.data);
</script>

{#each articles as article}
	<article>
		<header>{article.title}</header>
		<p>
			{article.content}
		</p>
	</article>
{/each}

<style>
	article {
		background-color: var(--secondary);
		margin-bottom: 1rem;
		border-radius: 12px;
		padding: 1rem;
	}
	article header {
		font-weight: 600;
		font-size: 2rem;
	}
	article header {
		color: var(--text-primary);
	}
    article p {
        color: var(--text-secondary);   
    }
</style>
