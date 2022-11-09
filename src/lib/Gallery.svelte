<script>
	export let data

	let fullScreen = false
	const toggle = () => (fullScreen = !fullScreen)
	const isEscape = (e) => {
		if (fullScreen && e.code === 27) fullScreen = !fullScreen
	}
	$: id = 0
</script>

<div class="gallery">
	{#each data as img, i}
		<picture>
			{#each Object.entries(img.sources) as [format, images]}
				<source
					srcset={images
						.filter((d) => d.w !== 1600)
						.map((d) => `${d.src}  ${d.w === 400 ? '1x' : '2x'}`)
						.join(', ')}
					type={'image/' + format}
					alt="Aperçu visuel du projet {data.title}"
				/>
			{/each}
			<img
				on:click={toggle}
				on:keypress={toggle}
				on:click={() => (id = i)}
				on:keypress={() => (id = i)}
				src={img.fallback.src}
				alt="Aperçu visuel du projet"
			/>
		</picture>
	{/each}
</div>

<svelte:window on:keyup={isEscape} />
{#if fullScreen}
	<div id="fullScreen" on:click={toggle} on:keypress={toggle}>
		<picture class="imgFull">
			{#each Object.entries(data[id].sources) as [format, images], i}
				<source
					srcset={images
						.filter((d) => d.w !== 400)
						.map((d) => `${d.src}  ${d.w === 800 ? '1x' : '2x'}`)
						.join(', ')}
					type={'image/' + format}
					alt="Aperçu visuel du projet"
				/>
			{/each}
			<img class="large" src={data[id].fallback.src} alt="Aperçu visuel du projet" />
		</picture>
	</div>
{/if}

<style>
	/* https://codepen.io/rachelandrew/pen/QWEmPvK */
	.gallery {
		column-count: auto;
		column-width: 250px;
		column-gap: 1.5rem;
	}
	.gallery picture {
		margin: 0;
		display: grid;
		grid-template-rows: 1fr auto;
		margin-bottom: 1.5rem;
		break-inside: avoid;
		justify-items: center;
	}
	img {
		display: block;
		max-width: 100%;
		filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.1));
	}
	img[width] {
		width: auto; /* Defer to max-width */
	}
	img[width][height] {
		height: auto; /* Preserve aspect ratio */
	}
	img:hover {
		cursor: zoom-in;
	}
	img.large:hover {
		cursor: zoom-out;
	}
	#fullScreen {
		position: fixed;
		top: 0px;
		left: 0px;
		height: 100vh;
		width: 100vw;
		z-index: 99;
		background-color: rgba(255, 255, 255, 0.5);
		backdrop-filter: grayscale(0.5) blur(3px);
	}
	.imgFull {
		display: grid;
		justify-items: center;
		padding: 1rem;
	}
	.imgFull img {
		max-height: calc(100vh - 2rem);
	}
</style>
