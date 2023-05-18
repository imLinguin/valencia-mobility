<script lang="ts">
	import { t } from '$lib/utils/translations';
	import Details from '$lib/components/Details.svelte';
</script>

<div class="wrapper">
	<h1 class="styled-header">{$t('nav.in-companies')}</h1>

	<Details key="title" title={'Title'} />
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
