<script lang="ts">
	import { t } from '$lib/utils/translations';

	//@ts-ignore
	import PhotoSwipe from 'photoswipe/lightbox';
	import 'photoswipe/style.css';
	import { onMount } from 'svelte';

	export let galleryId: string;
	export let images: { thumbnail: string; width: number; height: number; original: string }[];
	let lightbox: PhotoSwipe;

	onMount(() => {
		lightbox = new PhotoSwipe({
			gallery: `#${galleryId}`,
			children: 'a',
			closeTitle: $t('gallery.closeTitle'),
			zoomTitle: $t('gallery.zoomTitle'),
			arrowPrevTitle: $t('gallery.arrowPrevTitle'),
			arrowNextTitle: $t('gallery.arrowNextTitle'),
			errorMsg: $t('gallery.errorMsg'),
			pswpModule: () => import('photoswipe')
		});

		lightbox.init();
		() => {
			lightbox.destroy();
		};
	});
</script>

<div class="pswp-gallery" id={galleryId}>
	{#each images as image}
		<a
			href={image.original}
			data-pswp-width={image.width}
			data-pswp-height={image.height}
			data-cropped="true"
			target="_blank"
			rel="noreferrer"
			><div><img src={image.thumbnail} alt="Gallery element" loading="lazy" /></div></a
		>
	{/each}
</div>

<style>
	.pswp-gallery {
		display: flex;
		flex-wrap: wrap;
		text-align: center;
		align-items: center;
		justify-content: center;
		background-color: rgba(255, 255, 255);
		padding: 3em;
		border-radius: 20px;
	}

	.pswp-gallery div {
		width: min(400px, 100%);
		height: min(100%, 250px);
		border-radius: 20px;
		margin: 5px;
		overflow: hidden;
	}

	.pswp-gallery img {
		object-fit: cover;
		transition: transform 400ms ease;
	}
	.pswp-gallery img:hover {
		transform: scale(1.02);
	}
</style>
