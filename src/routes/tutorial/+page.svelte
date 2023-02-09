<script>
	let src = 'https://cdn.pixabay.com/photo/2022/12/22/02/56/heron-7671357_960_720.jpg';
	let hTest =
		'<h2>This is html insertion!</h2>\n<p>' +
		'Lorem, ipsum dolor sit amet consectetur adipisicing elit. ' +
		'Ratione impedit sint pariatur nisi totam obcaecati eveniet neque aliquam animi modi.</p>';

	let count = 0;
	$: doubled = count * 2; //when referenced variable changes, it updates this line of code
	function incrementCount() {
		count += 1;
	}
	function decrementCount() {
		count -= 1;
	}
	function reset() {
		count = 0;
	}
</script>

<main>
	<h1>Tutorial</h1>
	<img {src} alt="A heron" />
	<p>{@html hTest}</p>

	<h2>Counter</h2>
	<h1>{count} | {doubled}</h1>
	<button on:click={incrementCount}>+</button>
	<button on:click={decrementCount}>-</button>
	<button on:click={reset}>reset</button>
</main>

<style>
	button {
		font-size: 2rem;
		font-weight: 600;
		padding: 0 1rem;
	}
</style>
