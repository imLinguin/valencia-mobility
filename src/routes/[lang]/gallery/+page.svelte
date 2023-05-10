<script lang="ts">
	import Gallery from '$lib/components/Gallery.svelte';
	import { t } from '$lib/utils/translations';

	let images: { thumbnail: string; width: number; height: number; original: string }[] = Array.from(
		Array(10).keys()
	)
		.map((i) => ({
			thumbnail: `/images/main-gallery/thumbnails/${i}.webp`,
			width: 4000,
			height: 3000,
			original: `/images/main-gallery/original/${i}.jpg`
		}))
		.slice(1, -1);
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
