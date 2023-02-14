<script>
	import Container from '$lib/ui/Container.svelte';
</script>

<form method="POST">
	<div class="wrapper">
		<Container>
			<hgroup>
				<h2>Welcome back.</h2>
				<h2><span>Sign in with your account details</span></h2>
			</hgroup>
			<div class="btm">
				<input type="text" id="username" name="username" placeholder="Username" required />
				<input type="password" id="password" name="password" placeholder="Password" required />
				<button type="submit">Login</button>
			</div>
		</Container>
	</div>
</form>

<style>
	form {
		margin: 3rem 0;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.wrapper {
		width: 400px;
	}
	input {
		background-color: var(--tertiary);
		color: var(--text-primary);
		font-weight: 500;
		border: none;
		border-radius: 6px;
		height: 60px;
		padding: 0 1.5rem;
	}
	hgroup {
		margin-bottom: 1.3rem;
	}
	h2 {
		font-size: 32px;
		line-height: 40px;
		font-weight: 600;
		letter-spacing: -0.02em;
		/* margin-bottom: 36px; */
	}
	h2 span {
		color: var(--text-secondary);
	}
	.btm {
		display: grid;
		gap: 0.7rem;
	}
	button {
		background-color: #ff705b;
		color: var(--text-primary);
		padding: 18px 24px;
		/* height: 60px; */
		border: none;
		border-radius: 6px;
		font-weight: 600;
		white-space: nowrap;
		transition: 0.2s ease;
		cursor: pointer;
	}
	button:hover {
		opacity: 0.8;
	}
</style>
