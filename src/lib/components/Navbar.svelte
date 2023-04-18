<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { t, locale, locales } from '$lib/utils/translations';
	let docked = true;
	$: path = $page.url.pathname;
	const updateDocked = () => {
		docked = window.scrollY < 10;
	};
</script>

<svelte:window on:scroll={updateDocked} />
<nav class:docked class="glass">
	<div class="navigation">
		<a href="/{$locale}" class:active={path === `/${$locale}`}>{$t('nav.home')}</a>
		<a href="/{$locale}/gallery" class:active={path === `/${$locale}/gallery`}
			>{$t('nav.gallery')}</a
		>
	</div>

	<div class="lang">
		{#each $locales as value}
			<span
				class="lang-select"
				class:selected={$locale === value}
				on:click={() => goto(`/${value}`)}
			>
				{$t(`lang.${value}`)}
			</span>
		{/each}
	</div>
</nav>

<style>
	nav {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		height: 3.5em;
		font-weight: 700;
		transition: all 200ms ease;

		margin: 0 auto;
		width: min(1500px, 100%);

		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;

		border-bottom-left-radius: 1em;
		border-bottom-right-radius: 1em;
		box-shadow: 5px 0 10px 2px rgba(0, 0, 0, 0.3);
	}

	nav > * {
		padding: 0 20px;
	}

	nav.docked {
		margin: 0 auto;
		width: 100%;
		border-bottom-left-radius: unset;
		border-bottom-right-radius: unset;
	}

	a {
		text-decoration: none;
		text-transform: uppercase;
		margin: 5px 0;
		padding: 10px;
	}

	a.active {
		color: white;
		background: var(--valencia-dark-2);
		border-radius: 10px;
		box-shadow: 0 2px 5px 2px rgba(0, 0, 0, 0.3);
	}

	.lang-select {
		margin: 0 5px;
		cursor: pointer;
	}

	.lang-select.selected {
		color: var(--valencia-red);
	}
</style>
