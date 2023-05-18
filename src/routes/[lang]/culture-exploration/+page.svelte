<script lang="ts">
	import Details from '$lib/components/Details.svelte';
	import { t } from '$lib/utils/translations';
	import cultureData from '$lib/data/traineeship/culture';
</script>

<div class="wrapper">
	<h1 class="styled-header">{$t('nav.culture-exploration')}</h1>

	{#each Object.values(cultureData) as detail}
		<Details key={detail.title} title={$t(`culture.${detail.title}.title`)} photos={detail.images}>
			<div slot="description">
				{#if detail?.paragraphs?.length}
					{#each detail.paragraphs as paragraph}
						<p>{$t(`culture.${detail.title}.${paragraph}`)}</p>
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
		text-align: center;
		margin: 0 auto 20px;
	}
</style>
