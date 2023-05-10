<script lang="ts">
	import TripDetails from '$lib/components/TripDetails.svelte';
	import { t } from '$lib/utils/translations';
</script>

<div class="wrapper">
	<h1 class="styled-header">{$t('nav.culture-exploration')}</h1>

	<TripDetails title={'TEST'} />
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
		text-align: center;
		margin: 0 auto 20px;
	}
</style>
