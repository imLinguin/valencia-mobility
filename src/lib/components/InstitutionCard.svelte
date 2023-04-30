<script lang="ts">
	import { t } from '$lib/utils/translations';

	export let logo: string;
	export let title: string;
	export let url: string = '#';
</script>

<a href={url} target="_blank" rel="" class="institution-card">
	{#if logo}
		<img src={logo} alt="" />
	{/if}
	<h3>{title}</h3>
	<p>{$t('institutions.descriptions.' + title)}</p>
</a>

<style>
	.institution-card {
		box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.3);
		padding: 30px;
		border-radius: 20px;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 0 20px 20px 0;
		max-width: 500px;
		border: 1px solid black;
		transition: transform 400ms ease;
		text-decoration: none;
	}

	.institution-card:hover {
		transform: scale(1.05);
	}
	img {
		max-width: 200px;
		max-height: 150px;
		height: 150px;
		overflow: hidden;
		display: flex;
		justify-content: center;
		object-fit: contain;
		object-fit: contain;
	}

	h3 {
		text-align: center;
		margin: 1em 0;
	}
</style>
