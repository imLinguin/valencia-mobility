<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { t, locale, locales } from '$lib/utils/translations';
	import Close from 'svelte-material-icons/Close.svelte';
	import Menu from 'svelte-material-icons/Menu.svelte';

	const routes = [
		{ route: '', name: 'home' },
		{ route: '/participants', name: 'participants' },
		{
			route: null,
			name: 'traineeship',
			subroutes: [
				{ route: '/preparations', name: 'preparations' },
				{ route: '/culture-exploration', name: 'culture-exploration' },
				{ route: '/in-companies', name: 'in-companies' }
			]
		},

		{ route: '/institutions', name: 'institutions' },
		{ route: '/gallery', name: 'gallery' }
	];
	let docked = true;
	let mobileOpen = false;
	$: path = $page.url.pathname;
	const updateDocked = () => {
		docked = window.scrollY < 10;
	};
</script>

<!-- <svelte:window on:scroll={updateDocked} /> -->
<nav class:docked class="glass">
	<img src="/logos/project.webp" alt="" />
	<div class="navigation">
		{#each routes as route}
			{#if route.route !== null}
				<a href={`/${$locale}${route.route}`} class:active={path === `/${$locale}${route.route}`}
					>{$t(`nav.${route.name}`)}</a
				>
			{:else}
				<a
					href={`/${$locale}${route.subroutes[0].route}`}
					class="submenu"
					class:active={route.subroutes.some((subroute) => path === `/${$locale}${subroute.route}`)}
				>
					{$t(`nav.${route.name}`)}
					<ul>
						{#each route.subroutes as subroute}
							<li class:active={path === `/${$locale}${subroute.route}`}>
								<a href={`/${$locale}${subroute.route}`}>
									{$t(`nav.${subroute.name}`)}
								</a>
							</li>
						{/each}
					</ul>
				</a>
			{/if}
		{/each}
	</div>

	<div class="icon-button" on:click={() => (mobileOpen = true)}>
		<Menu size="25" />
	</div>

	<div class="mobile-navigation glass" class:open={mobileOpen}>
		<div class="icon-button" on:click={() => (mobileOpen = false)}>
			<Close size="100%" />
		</div>
		{#each routes as route}
			{#if route.route !== null}
				<a href={`/${$locale}${route.route}`} class:active={path === `/${$locale}${route.route}`}
					>{$t(`nav.${route.name}`)}</a
				>
			{:else}
				<a href={`/${$locale}${route.subroutes[0].route}`} class="submenu">
					{$t(`nav.${route.name}`)}
					<ul>
						{#each route.subroutes as subroute}
							<li class:active={path === `/${$locale}${subroute.route}`}>
								<a href={`/${$locale}${subroute.route}`}>
									{$t(`nav.${subroute.name}`)}
								</a>
							</li>
						{/each}
					</ul>
				</a>
			{/if}
		{/each}
		<div class="lang">
			{#each $locales as value}
				<a
					href="#"
					class="lang-select"
					class:selected={$locale === value}
					on:click|preventDefault={() =>
						goto(`/${value}/${$page.url.pathname.split('/').slice(2).join('/')}`)}
				>
					{$t(`lang.${value}`)}
				</a>
			{/each}
		</div>
	</div>
	<div class="lang">
		{#each $locales as value}
			<a
				href="#"
				class="lang-select"
				class:selected={$locale === value}
				on:click|preventDefault={() =>
					goto(`/${value}/${$page.url.pathname.split('/').slice(2).join('/')}`)}
			>
				{$t(`lang.${value}`)}
			</a>
		{/each}
	</div>
</nav>

<style>
	nav {
		position: fixed;
		top: 0;
		z-index: 1000;
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

	nav > img {
		height: 100%;
	}

	nav.docked {
		margin: 0 auto;
		width: 100%;
		border-bottom-left-radius: unset;
		border-bottom-right-radius: unset;
	}

	.navigation {
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		align-self: center;
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.navigation > a {
		opacity: 0.7;
		transition: opacity 400ms ease;
	}

	.navigation > a:not(.active):hover {
		opacity: 1;
	}

	.navigation > a.submenu {
		position: relative;
	}

	.navigation > a.submenu:hover ul {
		display: block;
	}

	.navigation ul {
		display: none;
		position: absolute;
		top: 2.5em;
		left: 0;
		border-radius: 10px;
		background: white;
		border: 1px solid lightgray;
		padding: 0;
		margin: 0;
		list-style: none;
	}
	.navigation ul li {
		opacity: 0.7;
		padding: 5px;
		transition: opacity 400ms ease;
	}
	.navigation ul li:hover {
		opacity: 1;
	}
	.navigation ul :first-child {
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;
	}
	.navigation ul :last-child {
		border-bottom-left-radius: 10px;
		border-bottom-right-radius: 10px;
	}

	.navigation ul li:not(:last-child) {
		border-bottom: 1px solid grey;
	}

	a {
		text-transform: uppercase;
		text-decoration: none;
		margin: 5px 0;
		border-radius: 10px;
		padding: 10px;
	}

	.navigation .active,
	.mobile-navigation .active {
		color: white;
		opacity: 1;
		background: var(--valencia-dark-2);
		box-shadow: 0 2px 5px 2px rgba(0, 0, 0, 0.3);
	}

	.navigation li.active a,
	.mobile-navigation li.active a {
		color: white;
	}

	.mobile-navigation {
		display: none;
		position: absolute;
		top: 0;
		height: 100vh;
		left: 0;
		right: 0;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
	}
	.mobile-navigation ul {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.mobile-navigation > a,
	.mobile-navigation > a.submenu li {
		border: 1px solid rgba(128, 128, 128, 0.3);
	}
	.mobile-navigation a.submenu ul {
		margin-top: 10px;
		font-size: 0.9em;
	}
	.mobile-navigation a.submenu ul li {
		margin: 5px 0;
		padding: 5px;
		border-radius: 8px;
	}

	.lang-select {
		margin: 0 5px;
		cursor: pointer;
	}

	.lang-select.selected {
		color: var(--valencia-red);
	}

	.icon-button {
		display: none;
	}

	@media screen and (max-width: 1024px) {
		.navigation,
		.lang {
			display: none;
		}
		.icon-button {
			background-color: var(--valencia-dark-2);
			color: white;
			padding: 0;
			width: 40px;
			margin: 0 20px;
			height: 40px;
			display: flex;
			align-items: center;
			justify-content: center;
			border-radius: 10px;
		}
		.mobile-navigation {
			display: flex;
			opacity: 1;
			transform: translateY(-100vh);
			transition: all 400ms ease;
		}
		.mobile-navigation .lang {
			margin-top: 30px;
			display: flex;
		}

		.mobile-navigation .icon-button {
			position: absolute;
			top: 10px;
			right: 0;
		}

		.mobile-navigation.open {
			transform: translateY(0);
			opacity: 1;
		}
	}
</style>
