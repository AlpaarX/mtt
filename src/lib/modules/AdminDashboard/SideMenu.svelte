<script>
	import { page } from '$app/stores';
	export let data;
	console.log(data.user);
</script>

<div class="side-menu">
	<a class="logo" href="/">
		<img src="../logo.png" alt="logo" />
	</a>
	<div class="flex-wrapper">
		<div class="menu">
			<a href="/admin/dashboard">
				<div class:active={$page.url.pathname === '/admin/dashboard'}>
					<img src="" alt="" />
					<p>Dashboard</p>
				</div>
			</a><a href="/admin/analytics">
				<div class:active={$page.url.pathname === '/admin/analytics'}>
					<img src="" alt="" />
					<p>Analytics</p>
				</div>
			</a><a href="/admin/articles">
				<div class:active={$page.url.pathname === '/admin/articles'}>
					<img src="" alt="" />
					<p>Articles</p>
				</div>
			</a><a href="/admin/consultants">
				<div class:active={$page.url.pathname === '/admin/consultants'}>
					<img src="" alt="" />
					<p>Consultants</p>
				</div>
			</a><a href="/admin/vacancies">
				<div class:active={$page.url.pathname === '/admin/vacancies'}>
					<img src="" alt="" />
					<p>Vacancies</p>
				</div>
			</a>
		</div>
		<div class="btm-ctrl">
			<div class="ctrl-top">
				<h3>Hi, {data.user.name}</h3>
				<h5>Administrator</h5>
			</div>
			<form action="" method="post">
				<button formaction="/logout" type="submit"><img src="../logout.svg" alt="" /></button>
			</form>
		</div>
	</div>
</div>

<style>
	.side-menu {
		background-color: var(--secondary);
		width: 218px;
		display: sticky;
		left: 0;
		top: 0;
		height: 100vh;
	}
	.flex-wrapper {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.logo img {
		padding: 1rem;
	}
	a div {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 1.5rem 0;
	}
	a div p {
		color: var(--text-secondary);
		font-weight: 500;
		transition: 0.1s ease;
	}
	.active p {
		color: var(--text-primary);
		font-weight: 400;
	}
	.active {
		background-color: var(--primary);
	}
	.btm-ctrl {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 26rem 1rem 1rem 1rem;
	}
	.btm-ctrl .ctrl-top {
		padding-right: 1rem;
	}
	.btm-ctrl button {
		background-color: transparent;
		border: none;
		border-radius: 6px;
		transition: 0.2s ease;
		cursor: pointer;
	}
	.btm-ctrl button:hover {
		opacity: 0.8;
	}
	.btm-ctrl button img {
		width: 24px;
	}
	.btm-ctrl h3 {
		font-weight: 400;
		font-size: 16px;
	}
	.btm-ctrl h5 {
		color: var(--text-secondary);
		font-weight: 400;
	}
</style>
