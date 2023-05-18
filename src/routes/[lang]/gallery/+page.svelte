<script lang="ts">
	import Gallery from '$lib/components/Gallery.svelte';
	import galleryData from '$lib/data/main-gallery';
	import type { Image } from '$lib/types';
	import { t } from '$lib/utils/translations';

	let images: Image[] = galleryData;
</script>

<div>
	<h1 class="styled-header">{$t('nav.gallery')}</h1>
	<Gallery galleryId="main-gallery" {images} />
</div>

<style>
	div {
		background-color: rgba(255, 255, 255);
		margin: 2em auto;
		padding: 10px;
		max-width: 1500px;
		color: rgba(255, 255, 255);
		padding: 10px;
		border-radius: 20px;
	}
	:global(.pswp-gallery#main-gallery div) {
		width: 400px;
		height: 250px;
	}

	.styled-header {
		text-align: center;
		margin: 0 auto;
		margin-bottom: 10px;
	}
	@media screen and (max-width: 800px) {
		div {
			margin: 0;
			width: 100%;
		}
	}
</style>
