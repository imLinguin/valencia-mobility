<script lang="ts">
	import { t } from '$lib/utils/translations';

	export let title: string;
	export let involved: string[];
</script>

<div class="involved-list">
	<h3 class="styled-header">{$t(title)}</h3>
	<ul>
		{#each involved as entry}
			<li>{entry}</li>
		{/each}
	</ul>
</div>

<style>
	.involved-list {
		position: relative;
		border-radius: 15px;
		min-height: 300px;
		box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.3);
		padding: 10px;
	}

	.styled-header {
		margin: 0 auto;
	}
</style>
