<script>
	import ProjectCard from '$lib/ProjectCard.svelte'
	import data from '$lib/data.js'
</script>

<svelte:head>
	<title
		>Thomas Ansart - Cartographie et datavisualisation à l'Atelier de cartographie de Sciences Po</title
	>
	<meta property="og:title" content="Thomas Ansart" />
	<meta property="og:url" content="https://thomasansart.info/" />
	<link href="https://twitter.com/ThomasAnsart" rel="me" />
	<link href="https://github.com/TomBor" rel="me" />
	<link href="https://thomasansart.info" rel="canonical" />
</svelte:head>

<div class="about">
	<p>
		Cartographie et datavisualisation
		<br />
		à l'Atelier de cartographie de&#8239;Sciences&#8239;Po
	</p>
</div>

<div class="project-grid">
	{#each data as { id, title, tags, thumbnail }}
		<ProjectCard {id} {title} {tags} {thumbnail} />
	{/each}
</div>

<style>
	p {
		font-family: var(--mono);
		text-align: center;
		font-size: 1.9rem;
		margin-top: 0.5rem;
	}
	.project-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
		gap: 1.5rem;
		justify-items: center;
	}
</style>
