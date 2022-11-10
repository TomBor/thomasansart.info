<script>
	export let id
	export let title
	export let tags
	export let thumbnail
</script>

<a class="project-card" href="/{id}">
	<p>
		<strong>{title}</strong>
		<br />
		<span class="tag">{tags.toLocaleString()}</span>
	</p>
	<picture>
		{#each Object.entries(thumbnail.sources) as [format, images]}
			<source
				srcset={images.map((i) => `${i.src}  ${images.w === 400 ? '1x' : '2x'}`).join(', ')}
				type={'image/' + format}
				alt="Couverture du projet {title}"
				width="400"
				height="250"
			/>
		{/each}
		<img src={thumbnail.fallback.src} alt="Couverture du projet {title}" width="400" height="250" />
	</picture>
</a>

<style>
	a {
		padding: 1rem;
		padding-top: 0;
		border-radius: 1em;
		color: inherit;
		text-decoration: none;
		/* text-align: center; */
		transition: padding 1s;
	}
	a:hover {
		background-color: var(--bg-html);
		mix-blend-mode: luminosity;
		padding: 0 0.5rem 0.5rem 0.8rem;
		opacity: 0.8;
	}
	p {
		margin-bottom: 0.5rem;
		max-width: fit-content;
	}
	.tag {
		font-size: 0.7rem;
		font-family: var(--mono);
	}
	/* Bonne pratique : https://css-tricks.com/barebones-css-for-fluid-images/ */
	img {
		height: auto;
		width: 100%;
		/* max-width: 100%; */
		filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.1));
	}
</style>
