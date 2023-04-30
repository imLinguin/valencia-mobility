<script lang="ts">
	import { t } from '$lib/utils/translations';
	import InstitutionCard from '$lib/components/InstitutionCard.svelte';

	import institutions from '$lib/data/institutions.json';

	const sortedCompanies = institutions.hostingCompanies.sort((a, b) =>
		a.title < b.title ? -1 : a.title > b.title ? 1 : 0
	);
</script>

<div class="wrapper">
	<h2 class="institutions-header styled-header">{$t('institutions.organizers-header')}</h2>

	<div class="companies-group organizers">
		{#each institutions.organizers as institution}
			<InstitutionCard {...institution} />
		{/each}
	</div>

	<h2 class="institutions-header styled-header">{$t('institutions.companies')}</h2>

	<div class="companies-group hosting-companies">
		{#each sortedCompanies as institution}
			<InstitutionCard {...institution} />
		{/each}
	</div>
</div>

<style>
	.wrapper {
		max-width: 1440px;
		margin: 2em auto;
		background-color: white;
		border-radius: 20px;
		padding: 10px;
	}

	.institutions-header {
		text-align: center;
		margin: 0 auto;
	}

	.companies-group {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		align-items: stretch;
		justify-content: center;
		margin: 20px 0;
	}
</style>
