<script lang="ts">
	import type { Image } from '$lib/types';
	import { t } from '$lib/utils/translations';

	//@ts-ignore
	import PhotoSwipe from 'photoswipe/lightbox';
	import PS from 'photoswipe';
	import 'photoswipe/style.css';
	import { onMount } from 'svelte';

	export let galleryId: string;
	export let images: Image[];
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
			pswpModule: PS
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
	}

	.pswp-gallery div {
		height: 100%;
		border-radius: 10px;
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
	}

	.pswp-gallery img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform 400ms ease;
	}
	.pswp-gallery img:hover {
		transform: scale(1.02);
	}
</style>
