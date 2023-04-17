<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { t, locale, locales } from '$lib/utils/translations';
	let docked = true;
	$: path = $page.url.pathname;
	const updateDocked = () => {
		docked = window.scrollY < 10;
	};

	const changeLang = (event: any) => {
		goto(`/${event.target.value}`);
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
		<select on:change={changeLang} value={$locale}>
			{#each $locales as value}
				<option {value}>{$t(`lang.${value}`)}</option>
			{/each}
		</select>
	</div>
</nav>

<style>
	nav {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		height: 2.25em;
		font-weight: 700;
		transition: all 200ms ease;

		margin: 0 auto;
		width: min(700px, 100vw);

		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;

		border-bottom-left-radius: 1em;
		border-bottom-right-radius: 1em;
	}

	nav div {
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
		padding: 10px;
	}

	a.active {
		color: var(--valencia-dark-2);
	}
</style>
