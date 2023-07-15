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

<div class="about fontmono">
	<p>
		Cartographie et datavisualisation
		<br />
		<a class="hide-link" href="https://www.sciencespo.fr/cartographie"
			>à l'Atelier de cartographie de&#8239;Sciences&#8239;Po</a
		>
	</p>
	<p class="contact">
		<a href="https://github.com/TomBor">GitHub</a>
		<a href="https://twitter.com/ThomasAnsart">Twitter</a>
		<a href="https://observablehq.com/@tombor">ObservableHQ</a>
		<a href="https://www.linkedin.com/in/thomas-ansart-82558b16b/">LinkedIn</a>
	</p>
</div>

<div class="project-grid">
	{#each data as { id, title, tags, thumbnail }}
		<ProjectCard {id} {title} {tags} {thumbnail} />
	{/each}
</div>

<style>
	p {
		text-align: center;
		font-size: 1.9rem;
		margin-top: 0.5rem;
	}
	.hide-link,
	.hide-link:visited {
		color: inherit;
		text-decoration: none;
	}

	.contact {
		display: flex;
		justify-content: center;
		gap: 2rem;
	}
	.contact a {
		font-size: 1.6rem;
	}
	.project-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
		gap: 1.5rem;
		justify-items: center;
	}
</style>
