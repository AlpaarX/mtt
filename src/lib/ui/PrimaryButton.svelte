<script>
    export let title, href
</script>

<a href={href}><button>{title}</button></a>

<style>

    button {
		background-color: #ff705b;
		color: var(--text-primary);
		padding: 12px 24px;
		border: none;
		border-radius: 6px;
		font-weight: 600;
		white-space: nowrap;
		transition: 0.2s ease;
	}
	button:hover {
		opacity: 0.8;
	}
</style>