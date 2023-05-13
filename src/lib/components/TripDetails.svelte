<script lang="ts">
	import type { Image } from '$lib/types';
	import Gallery from './Gallery.svelte';

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

<div class="trip">
	<h2 class="styled-header">{title}</h2>
	<div class="content">
		<div class="description">
			<slot name="description">
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, amet.</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim perferendis quidem, dolorem
					iusto minima corporis delectus, quaerat animi eum eligendi debitis magnam officiis
					voluptatum maiores voluptatibus ab voluptate accusantium error iste. Autem quasi error
					voluptas! Tenetur hic eligendi maxime sint.
				</p>
			</slot>
		</div>
		<div class="photos">
			<Gallery galleryId={title} images={photos} />
		</div>
	</div>
</div>

<style>
	.trip {
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
		margin-top: 2em;
	}

	:global(.trip .pswp-gallery) {
		display: grid !important;
		grid-template-columns: repeat(3, 170px);
		gap: 10px;
		grid-template-areas:
			'first first first'
			'second third forth';
	}

	.description p {
		margin-bottom: 1em;
	}

	:global(.trip .pswp-gallery > :nth-child(1)) {
		grid-area: first;
	}
	:global(.trip .pswp-gallery > :nth-child(2)) {
		grid-area: second;
	}
	:global(.trip .pswp-gallery > :nth-child(3)) {
		grid-area: third;
	}
	:global(.trip .pswp-gallery > :nth-child(4)) {
		grid-area: forth;
	}
</style>
