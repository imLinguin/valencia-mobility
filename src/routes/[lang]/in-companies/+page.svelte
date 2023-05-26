<script lang="ts">
	import { t } from '$lib/utils/translations';
	import Details from '$lib/components/Details.svelte';
	import inCompaniesData from '$lib/data/traineeship/in-companies';

	const companiesNamesMap: { [key: string]: string } = {
		baukunst: 'Baukunst Arquitectura y, Patrimonio Virtual SLU- Las, Naves Centro de Innovación',
		esmovia: 'ESMOVIA Training and Mobility',
		goblue: 'Goblue',
		'ies-districte-maritim': 'IES Districte Marítim',
		industa: 'Industa',
		instituto: 'Instituto Inter',
		'md-equipos': 'MD Equipos Tecnológicos',
		microarea: 'Microarea Software',
		nadunet: 'nadunet',
		ommvi: 'OMMVI',
		relms: "RELMS",
		seymeval: "Seymeval"
	};
</script>

<div class="wrapper">
	<h1 class="styled-header">{$t('nav.in-companies')}</h1>

	{#each Object.values(inCompaniesData) as detail}
		<Details key={detail.title} title={companiesNamesMap[detail.title]} photos={detail.images}>
			<div slot="description">
				{#if detail?.paragraphs?.length}
					{#each detail.paragraphs as paragraph}
						<p>{$t(`in-companies.${detail.title}.${paragraph}`)}</p>
					{/each}
				{:else}
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, amet.</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim perferendis quidem,
						dolorem iusto minima corporis delectus, quaerat animi eum eligendi debitis magnam
						officiis voluptatum maiores voluptatibus ab voluptate accusantium error iste. Autem
						quasi error voluptas! Tenetur hic eligendi maxime sint.
					</p>
				{/if}
			</div>
		</Details>
	{/each}
</div>

<style>
	div.wrapper {
		margin: 2em auto;
		max-width: 1440px;
		background-color: white;
		border-radius: 20px;
		padding: 10px;
	}

	.styled-header {
		margin: 0 auto 20px;
	}
</style>
