<script>
	import { marked } from 'marked'
	import Gallery from '$lib/Gallery.svelte'
	export let data

	const html = marked.parse(data.content)
</script>

<svelte:head>
	<title>Thomas Ansart - Projet : {data.title}</title>
	<meta property="og:title" content="Thomas Ansart - Projet : {data.title}" />
	<meta property="og:url" content="https://thomasansart.info/{data.id}" />
	<link href="https://thomasansart.info/{data.id}" rel="canonical" />
</svelte:head>

<h2 class="short">{data.title}</h2>
<p class="tags">{data.tags}</p>

<div class="short">{@html html}</div>

<Gallery data={data.gallery} />

<style>
	.short {
		max-width: 700px;
	}
	.tags {
		font-family: var(--mono);
	}
	h2 {
		margin-bottom: 0;
	}
	p {
		margin-top: 0.5rem;
	}
</style>
