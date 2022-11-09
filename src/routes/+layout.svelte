<script>
	import Header from '$lib/Header.svelte'
	import './global.css'
</script>

<Header />

<main data-sveltekit-prefetch>
	<slot />
</main>

<style>
	main {
		margin: 0 2rem 0 2rem;
	}
</style>
