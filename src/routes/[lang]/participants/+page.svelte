<script lang="ts">
	import ParticipantsGroup from '$lib/components/ParticipantsGroup.svelte';
	import { t } from '$lib/utils/translations';
	import { afterUpdate, onMount } from 'svelte';

	import participants from '$lib/data/participants.json';

	let displayedGroup = -1;

	type ParticipantsGroups = keyof typeof participants;
	const participantsGroups: ParticipantsGroups[] = [
		'automation-tech',
		'electronic-tech',
		'it-tech',
		'tutors'
	];

	const randomImages: {
		'automation-tech': string[];
		'electronic-tech': string[];
		'it-tech': string[];
		tutors: string[];
	} = {
		'automation-tech': [],
		'electronic-tech': [],
		'it-tech': [],
		tutors: []
	};

	const selectGroup = (n: number) => {
		if (displayedGroup === n) {
			displayedGroup = -1;
			return;
		}
		displayedGroup = n;
	};

	const pickRandomImages = (array: string[]): string[] => {
		const max = 5;
		if (array.length <= max) {
			return array;
		}
		const images: string[] = [];
		let i = 0;
		while (i < max) {
			const randomIndex = Math.floor(Math.random() * array.length);
			const randomImage = array[randomIndex];

			if (!images.includes(randomImage)) {
				images.push(randomImage);
				i++;
			}
		}
		return images;
	};

	onMount(() => {
		participantsGroups.forEach((group) => {
			randomImages[group] = pickRandomImages(
				participants[group].map((participant) => participant.image || '')
			);
		});
	});
	afterUpdate(() => {
		participantsGroups.forEach((group) => {
			participants[group].map((participant) => {
				if (participant.image) new Image().src = participant.image;
			});
		});
	});
</script>

<div class="wrapper">
	<div class="groups">
		{#each participantsGroups as key, index}
			<ParticipantsGroup
				on:click={() => selectGroup(index)}
				title={$t('participants.' + key)}
				images={randomImages[key]}
			/>
		{/each}
	</div>

	<div class="details" />
</div>

<style>
	.wrapper {
		max-width: 1500px;
		margin: 2em auto;
		background-color: rgba(255, 255, 255);
		padding: 3em;
		border-radius: 20px;
	}
	.groups {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr 1fr;
		column-gap: 10px;
		row-gap: 50px;
		place-items: center;
	}

	@media screen and (max-width: 800px) {
		.wrapper {
			padding: 0;
		}
		.groups {
			grid-template-columns: 1fr;
			grid-template-rows: 1fr 1fr 1fr 1fr;
		}
	}
</style>
