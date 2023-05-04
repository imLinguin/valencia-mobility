<script lang="ts">
	import ParticipantsGroup from '$lib/components/ParticipantsGroup.svelte';
	import { t } from '$lib/utils/translations';
	import { afterUpdate, onMount } from 'svelte';

	import participants from '$lib/data/participants.json';

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
				on:click={(e) => {
					document.getElementById(key)?.scrollIntoView({ behavior: 'smooth' });
				}}
				title={$t('participants.' + key)}
				images={randomImages[key]}
			/>
		{/each}
	</div>

	<div class="details">
		{#each participantsGroups as group}
			<h2 class="styled-header" id={group}>{$t('participants.' + group)}</h2>
			<div class="group-details">
				{#each participants[group] as participant (participant.name)}
					<div class="participant-details">
						<div class="image-wrapper">
							<img src={participant.image || '/images/person.jpg'} alt="" />
						</div>
						<span class="participant-name"
							>{participant.name.split(' ')[0]}

							<span class="participant-lastname">{participant.name.split(' ')[1]}</span>
						</span>
						{#if participant?.class}
							<span class="participant-class">{participant.class}</span>
						{/if}
					</div>
				{/each}
			</div>
		{/each}
	</div>
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
		margin-bottom: 200px;
	}

	.group-details {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		align-items: stretch;
		justify-content: center;
	}

	.participant-details {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 10px;
	}

	.participant-details .participant-name {
		margin: 10px 0;
	}

	.participant-details .participant-lastname {
		font-weight: 700;
	}

	.participant-details .image-wrapper {
		width: 300px;
		height: 300px;
		border-radius: 20px;
		overflow: hidden;
	}

	.participant-details img {
		height: 100%;
		width: 100%;

		object-fit: cover;
		transition: transform 400ms ease;
	}

	.participant-details img:hover {
		transform: scale(1.05);
	}

	.styled-header {
		margin: 10px auto;
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
