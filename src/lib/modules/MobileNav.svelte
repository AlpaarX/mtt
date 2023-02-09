<footer>
	<a href="#consultants">
		<!-- <i class="fa-regular fa-circle-user" /> -->
		<span>Consultants</span>
	</a>

	<a href="#services">
		<!-- <i class="fa-regular fa-list" /> -->
		<span>Services</span>
	</a>

	<!-- <a href="/">
		<i class="fa-solid fa-house-blank" />
		<span>Home</span>
	</a> -->

	<a href="#vacancies">
		<!-- <i class="fa-regular fa-user-tie" /> -->
		<span>Vacancies</span>
	</a>

	<!-- <a href="#hrci">
		<i class="fa-regular fa-file-certificate" />
		<span>Certification</span>
	</a> -->

	<!-- <a href="#digitaltools">
		<i class="fa-regular fa-screwdriver-wrench" />
		<span>Digital Tools</span>
	</a> -->

	<a href="#clients">
		<!-- <i class="fa-regular fa-users" /> -->
		<span>Clients</span>
	</a>

	<!-- <a href="#about">About</a> -->
</footer>

<style>
	/* ===== FOOTER ====== */

	footer {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		position: sticky;
		bottom: 0;
		left: 0;
		width: 100%;

		background-color: var(--primary);
		user-select: none;
		visibility: hidden;
	}
	footer a {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		padding: 1.2rem 0;
	}
	footer span {
		color: var(--text-secondary);
	}
	footer span:active {
		color: var(--text-primary);
	}

	@media only screen and (max-width: 1023px) {
		footer {
			visibility: visible;
		}
	}
</style>
