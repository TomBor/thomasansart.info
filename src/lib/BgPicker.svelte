<script>
	import { browser } from '$app/environment'
	import { colorFromDate } from '$lib/interpolate.js'
	import icon from '$img/noun-sunset.svg'
	import { slide } from 'svelte/transition'
	import { onMount } from 'svelte'

	let jTime = new Date().getTime()
	$: data = colorFromDate(jTime)

	$: localeTime = new Date(jTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
	const tz = Intl.DateTimeFormat().resolvedOptions().timeZone

	const setCSS = (d) => document.documentElement.style.setProperty('--bg-html', d.color)

	$: if (browser) setCSS(data)

	let isOpen = false
	const toggle = () => (isOpen = !isOpen)

	onMount(() => {
		setCSS(data)
	})
</script>

<div>
	<button on:click={toggle}>
		<img src={icon} alt="Icone d'un soleil levant ou couchant" width="36" height="36" />
	</button>
</div>

{#if isOpen}
	<div class="picker" transition:slide>
		<p>{localeTime} ({tz})</p>
		<input
			type="range"
			name="Heure"
			id="time"
			min={data.nadir.getTime() + 1000000}
			max={data.nadir1.getTime()}
			bind:value={jTime}
			list="tickmarks"
		/>
		<datalist id="tickmarks">
			<!-- + ~ 16 minutes pour éviter le bug quand on
			met le slider au minimum -->
			<option value={data.nadir.getTime() + 1000000} />
			<option value={data.sunrise.getTime()} />
			<option value={data.solarNoon.getTime()} />
			<option value={data.sunset.getTime()} />
			<option value={data.nadir1.getTime()} />
		</datalist>
	</div>
{/if}

<style>
	:global(html) {
		background-color: var(--bg-html, initial);
	}
	:global(::selection) {
		background: white;
	}
	div {
		text-align: center;
	}
	.picker {
		background-color: rgb(255 255 255 / 60%);
		padding: 1rem;
	}
	.picker p {
		margin-top: 0;
		margin-bottom: 1rem;
		font-family: var(--mono);
	}
	button {
		background: none;
		border: none;
	}
	button:hover {
		background-color: var(--bg-html);
		mix-blend-mode: multiply;
		border-radius: 1em;
	}
	input[type='range'] {
		width: 250px;
	}
</style>
