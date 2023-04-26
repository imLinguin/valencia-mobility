<script lang="ts">
	import ParticipantsGroup from '$lib/components/ParticipantsGroup.svelte';
	import { t } from '$lib/utils/translations';
	import { onMount } from 'svelte';

	let displayedGroup = -1;

	type ParticipantsGroups = 'automation-tech' | 'electronic-tech' | 'it-tech' | 'tutors';
	interface Participant {
		name: string;
		image: string;
	}
	const participantsGroups: ParticipantsGroups[] = [
		'automation-tech',
		'electronic-tech',
		'it-tech',
		'tutors'
	];

	const participants: {
		'automation-tech': Participant[];
		'electronic-tech': Participant[];
		'it-tech': Participant[];
		tutors: Participant[];
	} = {
		'automation-tech': [
			{ name: 'Jakub Kliś', image: '/images/people/automation-tech/1.webp' },
			{ name: 'Kacper Suski', image: '/images/people/automation-tech/2.webp' },
			{ name: 'Mateusz Draus', image: '/images/people/automation-tech/3.webp' },
			{ name: 'Jakub Bazan', image: '/images/people/automation-tech/4.webp' }
		],
		'electronic-tech': [
			{ name: 'Miłosz Pulit', image: '/images/people/electronic-tech/1.webp' },
			{ name: 'Maksymilian Pasichniuk', image: '/images/people/electronic-tech/2.webp' },
			{ name: 'Jakub Szafran', image: '/images/people/electronic-tech/3.webp' },
			{ name: 'Radosław Szawara', image: '/images/people/electronic-tech/4.webp' },
			{ name: 'Konrad Antosz', image: '/images/people/electronic-tech/5.webp' },
			{ name: 'Kacper Krząstek', image: '/images/people/electronic-tech/6.webp' }
		],
		'it-tech': [
			{ name: 'Tobiasz Kmiotek', image: '/images/people/it/1.webp' },
			{ name: 'Mateusz Nieroda', image: '/images/people/it/2.webp' },
			{ name: 'Paweł Lidwin', image: '/images/people/it/3.webp' },
			{ name: 'Szymon Madycki', image: '/images/people/it/4.webp' },
			{ name: 'Michał Tadla', image: '/images/people/it/5.webp' },
			{ name: 'Aleksandra Świgoń', image: '/images/people/it/6.webp' },
			{ name: 'Krystian Gubernat', image: '/images/people/it/7.webp' },
			{ name: 'Adrian Stawarz', image: '/images/people/it/8.webp' },
			{ name: 'Jan Paśko', image: '/images/people/it/9.webp' },
			{ name: 'Jacek Zimirowicz', image: '/images/people/it/10.webp' },
			{ name: 'Dawid Świerk', image: '/images/people/it/11.webp' },
			{ name: 'Antoni Kłusek', image: '/images/people/it/12.webp' }
		],
		tutors: [
			{
				name: 'Zbigniew Niedbała',
				image: '/images/people/tutors/1.webp'
			},
			{
				name: 'Robert Kasza',
				image: '/images/people/tutors/2.webp'
			}
		]
	};

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
				participants[group].map((participant) => participant.image)
			);
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
