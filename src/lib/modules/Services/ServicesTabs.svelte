<script>
	import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@rgossiaux/svelte-headlessui';
</script>

<div class="tabs-wrapper">
	<TabGroup vertical class="group">
		<div class="tabs-btn-wrapper">
			<TabList class="tabs">
				<Tab class={({ selected }) => (selected ? 'tab tab-selected' : 'tab tab-unselected')}
					>Recruitment</Tab
				>
				<Tab class={({ selected }) => (selected ? 'tab tab-selected' : 'tab tab-unselected')}
					>Trainings</Tab
				>
				<Tab class={({ selected }) => (selected ? 'tab tab-selected' : 'tab tab-unselected')}
					>Personal Brand</Tab
				>
				<Tab class={({ selected }) => (selected ? 'tab tab-selected' : 'tab tab-unselected')}
					>HR Audit</Tab
				>
				<Tab class={({ selected }) => (selected ? 'tab tab-selected' : 'tab tab-unselected')}
					>Business Consulting</Tab
				>
			</TabList>
		</div>
		<TabPanels class="panels">
			<TabPanel class="panel">
				<span>“Right people on the right places” – old, but gold!</span><br /> We provide professional
				recruitment services (using professional assessment tools of SHL); search for unique specialists
				and head hunting. Just show whom you want and we will bring them on board.</TabPanel
			>
			<TabPanel class="panel">
				<span>Each time you focus on development – you win!</span><br />
				Make your learning activity choices with us. <br />
				<h2>Marketing</h2>
				<ul>
					<li>Strategy</li>
					<li>Analytics</li>
					<li>Digital Marketing</li>
					<li>Communications</li>
				</ul>
				<h2>Sales</h2>
				<ul>
					<li>Retail</li>
					<li>Franchise</li>
					<li>Online sales</li>
					<li>Telesales</li>
					<li>Corporate Sales</li>
				</ul>
				<h2>Human Resources</h2>
				<ul>
					<li>HR as a Business Partner</li>
				</ul>
				<h2>Project Management</h2>
				<ul>
					<li>Scrum/Agile/Kanban</li>
					<li>Project Management</li>
				</ul>
				<h2>Skills</h2>
				<ul>
					<li>Conflict Management</li>
					<li>Excel</li>
					<li>Negotiation Skills</li>
					<li>Leadership</li>
					<li>Presentation Skills</li>
					<li>Coaching skills</li>
				</ul>
				<h2>Happiness</h2>
				<ul>
					<li>The clues of working with generations Y&Z</li>
					<li>Decoding and Incorporating Happiness</li>
					<li>Happiness self-sabotage: How smartness & success come in the way of happiness</li>
					<li>Happiness at work</li>
					<li>
						Developing a leadership style that helps increase team’s happiness and productivity
					</li>
				</ul>
				<h2>Interview</h2>
				<ul>
					<li>Competency Based Interview</li>
				</ul>
				<h2>Standards</h2>
				<ul>
					<li>ISO</li>
				</ul>
				<h2>Writing</h2>
				<ul>
					<li>Business Writing</li>
				</ul>
				<h2>Remote work</h2>
				<ul>
					<li>Remote work – how to manage teams and gain new skills</li>
				</ul>
			</TabPanel>
			<TabPanel class="panel">
				<span>Need help with your personal brand? We got you!</span><br />
				Internal Audit of all HR processes, ready solutions and support in implementation: Performance
				Management Organizational Development Grading system</TabPanel
			>
			<TabPanel class="panel"
				><span>Be the face of your brand!</span><br /> We will support you to create your personal
				brand. <br /><br />
				<ul>
					<li>CV creation</li>
					<li>Techniques of professional preparation for the interview</li>
					<li>Mock Interview</li>
					<li>Personality Tests</li>
					<li>Feedback</li>
					<li>Development Planning</li>
				</ul></TabPanel
			>
			<TabPanel class="panel"
				><span>We got your back!</span><br /> We’re here to ensure that your business needs are fully
				covered and each time supported by Professionals and ready to support you in: Finance and Accounting
				Advanced Analytics Strategy Business development Change management Project management Hotel management
				Information Technology</TabPanel
			>
		</TabPanels>
	</TabGroup>
</div>

<style>
	.tabs-wrapper {
		margin-bottom: 6rem;
	}
	.tabs-wrapper :global(.group) {
		display: grid;
		grid-template-columns: 1fr;
		gap: 1rem;
		border-radius: 12px;
		background-color: var(--secondary);
	}
	.tabs-wrapper :global(.tabs) {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		gap: 0.5rem;
		border-radius: 12px;
		padding: 6px;
		max-height: 450px;
	}
	.tabs-wrapper :global(.tab) {
		background-color: var(--primary);
		cursor: pointer;
		border: none;
		border-radius: 12px;
		padding: 10px 0;
		transition: 0.1s ease;

		font-size: 0.7rem;
		font-weight: 600;
		color: var(--text-primary);
	}
	.tabs-wrapper :global(.panels) {
		padding: 0rem 1rem 2rem 1rem;
	}
	.tabs-wrapper :global(.panel) {
		color: var(--text-secondary);
		font-weight: 400;
	}
	.tabs-wrapper :global(.panel ul) {
		color: var(--text-secondary);
		font-weight: 400;
		padding-left: 1rem;
	}
	.tabs-wrapper :global(.panels h2) {
		color: var(--text-primary);
		font-weight: 600;
	}
	.tabs-wrapper :global(.panels span) {
		color: var(--text-primary);
		font-weight: 600;
	}
	.tabs-wrapper :global(.panels span) {
		font-size: 1.4rem;
	}
	/* DESKTOP QUERY */
	@media (min-width: 40rem) {
		.tabs-wrapper :global(.tabs) {
			grid-template-columns: 1fr;
			gap: 1rem;
		}
		.tabs-wrapper :global(.group) {
			grid-template-columns: 0.5fr 2fr;
		}
		.tabs-wrapper :global(.tab) {
			padding: 1rem 0;
			font-size: 1rem;
		}
		.tabs-wrapper :global(.panels) {
			padding: 2rem 2rem 2rem 1rem;
		}
		.tabs-wrapper :global(.panels span) {
			font-size: 2rem;
		}
	}
	/* SELECTION */

	.tabs-wrapper :global(.tab-selected) {
		background-color: var(--secondary);
		color: var(--text-secondary);

		font-weight: normal;
	}
	.tabs-wrapper :global(.tab-unselected) {
		background-color: var(--primary);
	}
</style>
