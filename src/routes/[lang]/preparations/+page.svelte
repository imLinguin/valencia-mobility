<script lang="ts">
	import Details from '$lib/components/Details.svelte';
	import { t } from '$lib/utils/translations';
	import preparationsData from '$lib/data/traineeship/preparations';
</script>

<div class="wrapper">
	<h1 class="styled-header">{$t('nav.preparations')}</h1>

	{#each Object.values(preparationsData) as detail}
		<Details
			key={detail.title}
			title={$t(`preparations.${detail.title}.title`)}
			photos={detail.images}
		>
			<div slot="description" class="description">
				{#if detail?.paragraphs?.length}
					{#each detail.paragraphs as paragraph}
						<p>{$t(`preparations.${detail.title}.${paragraph}`)}</p>
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

	@media screen and (max-width: 768px) {
		div.wrapper {
			margin: 2em 0;
			padding: 10px 0;
		}
	}
</style>
