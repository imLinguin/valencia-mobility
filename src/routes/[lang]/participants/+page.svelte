<script lang="ts">
	import ParticipantsGroup from '$lib/components/ParticipantsGroup.svelte';
	import { t } from '$lib/utils/translations';
	import { onMount } from 'svelte';

	import participants from '$lib/data/participants';
	import type { Participant, ParticipantGroups } from '$lib/types';
	import InvolvedList from '$lib/components/InvolvedList.svelte';

	const participantsGroups: ParticipantGroups[] = [
		'automation-tech',
		'electronic-tech',
		'it-tech',
		'tutors'
	];
	const randomImages: {
		[key in ParticipantGroups]: string[];
	} = {
		'automation-tech': [],
		'electronic-tech': [],
		'it-tech': [],
		tutors: []
	};

	const companiesTutors = [
		'Baukunst Arquitectura y, Patrimonio Virtual SLU- Las, Naves Centro de Innovación - Adolfo Ibañez',
		'ESMOVIA Training and Mobility - Salvatore De Bonis',
		'Goblue - Ignacio López',
		'IES Districte Marítim - Maria Vincenta Sarrión Gonzáles',
		'Industa - Rafael Tarin',
		'Instituto Inter - Nuria Medrano',
		'MD Equipos Tecnológicos - Marcos Montero / Alberto Aliaga Saez ',
		'Microarea Software - José Miguel Jimenez Zafrilla',
		'OMMVI - Orelsy Castno Gunino/Francisco Arrando Andrade Hernandez ',
		'RELMS - David Rel',
		'Seymeval - Hector Contreras Torres',
		'nadunet  - Adrián Duque Girón'
	];

	const peopleResponsible = [
		`mgr Stanisław Sienko - ${$t('participants.positions.director')} - ZSE`,
		`mgr inż. Zbigniew Niedbała - ${$t('participants.positions.projectCoordinator')} - ZSE`,
		`Mª Angeles Ruiz Gámez - ${$t('participants.positions.director')} - ESMOVIA`,
		`Angelo Vito D’Andrea - ${$t('participants.positions.administrativeDirector')} - ESMOVIA`,
		`Aleksandra Kuciapa - ${$t('participants.positions.projectCoordinator')} - ESMOVIA`,
		`Irene Sapiña Torres - ${$t('participants.positions.workPlacementCoordinator')} - ESMOVIA`
	];

	const preparations = [
		`mgr inż. Mieczysław Czyż - ${$t('participants.positions.bhp')}`,
		`mgr Grzegorz Wójcik - ${$t('participants.positions.english')}`,
		`Karolina Zgłębicka - ${$t('participants.positions.spanish')}`
	];

	// .sort((a, b) =>
	// 	(a.name.split(' ').pop() ?? '').localeCompare(b.name.split(' ').pop() ?? '', [
	// 		'pl-PL',
	// 		'es-ES',
	// 		'en-US'
	// 	])
	// );

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
		Object.keys(participants).forEach((group) => {
			randomImages[group as ParticipantGroups] = pickRandomImages(
				participants[group as ParticipantGroups].map((participant) => participant.image || '')
			);
		});
	});
</script>

<div class="wrapper">
	<h1 class="styled-header">{$t('nav.participants')}</h1>
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
							>{participant.name
								.split(' ')
								.slice(0, participant.name.split(' ').length - 1)
								.join(' ')}

							<span class="participant-lastname">{participant.name.split(' ').pop()}</span>
						</span>
						{#if participant?.class}
							<span class="participant-class">{participant.class}</span>
						{/if}
					</div>
				{/each}
			</div>
		{/each}
	</div>

	<div class="others">
		<InvolvedList title="participants.involved.companies" involved={companiesTutors} />
		<InvolvedList title="participants.involved.responsible" involved={peopleResponsible} />
		<InvolvedList title="participants.involved.preparations" involved={preparations} />
	</div>
</div>

<style>
	.wrapper {
		max-width: 1500px;
		margin: 2em auto;
		background-color: rgba(255, 255, 255);
		padding: 10px;
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
		font-weight: 700;
		margin: 10px 0;
	}

	.participant-details .participant-lastname {
		color: var(--valencia-red);
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
	h1.styled-header {
		margin: 0 auto 2em;
	}

	.others {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		gap: 10px;
	}

	@media screen and (max-width: 800px) {
		.wrapper {
			padding: 16px 0;
		}
		.groups {
			overflow-x: hidden;
			grid-template-columns: 1fr;
			grid-template-rows: 1fr 1fr 1fr 1fr;
		}
	}
</style>
