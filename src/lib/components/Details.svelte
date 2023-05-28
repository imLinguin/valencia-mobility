<script lang="ts">
	import type { Image } from '$lib/types';
	import Gallery from './Gallery.svelte';

	export let key: string;
	export let title: string;
	export let photos: Image[] = [
		{
			thumbnail: '/images/background.webp',
			width: 3840,
			height: 2160,
			original: '/images/background.webp'
		},
		{
			thumbnail: '/images/background.webp',
			width: 3840,
			height: 2160,
			original: '/images/background.webp'
		},
		{
			thumbnail: '/images/background.webp',
			width: 3840,
			height: 2160,
			original: '/images/background.webp'
		}
	];
</script>

<div class="card">
	<h2 class="styled-header">{title}</h2>
	<div class="content">
		<slot name="description" />
		<div class="photos">
			<Gallery galleryId={key} images={photos.slice(0, 4)} />
		</div>
	</div>
</div>

<style>
	.card {
		display: flex;
		flex-direction: column;
		padding: 10px;
	}

	.styled-header {
		margin: 0 auto 10px;
	}

	.content {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		margin-top: 2em;
	}

	:global(.card .pswp-gallery) {
		display: grid !important;
		grid-template-columns: repeat(3, 170px);
		grid-template-rows: 300px 100px;
		gap: 10px;
		grid-template-areas:
			'first first first'
			'second third forth';
	}
	:global(.card .pswp-gallery a) {
		width: 100%;
		height: 100%;
	}

	:global(.card .description p) {
		margin-bottom: 1em;
	}

	:global(.card .pswp-gallery > :nth-child(1)) {
		grid-area: first;
	}
	:global(.card .pswp-gallery > :nth-child(2)) {
		grid-area: second;
	}
	:global(.card .pswp-gallery > :nth-child(3)) {
		grid-area: third;
	}
	:global(.card .pswp-gallery > :nth-child(4)) {
		grid-area: forth;
	}

	@media screen and (max-width: 768px) {
		.content {
			flex-direction: column;
		}
		:global(.card .pswp-gallery) {
			display: flex !important;
		}
		:global(.card .pswp-gallery a) {
			height: 200px;
		}
	}
</style>
