<script lang="ts">
	import Gallery from '$lib/components/Gallery.svelte';

	let images: { thumbnail: string; width: number; height: number; original: string }[] = Array.from(
		Array(10).keys()
	).map((i) => ({
		thumbnail: `/images/main-gallery/thumbnails/${i}.webp`,
		width: 4000,
		height: 3000,
		original: `/images/main-gallery/original/${i}.jpg`
	})).slice(1,-1);
</script>

<div>
	<Gallery galleryId="main-gallery" {images} />
</div>

<style>
	div {
		margin: 2em auto;
		width: 90vw;
		color: rgba(255, 255, 255);
	}
	@media screen and (max-width: 800px) {
		div {
			margin: 0;
			width: 100%;
		}
	}
</style>
