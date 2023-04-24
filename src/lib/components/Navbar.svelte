<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { t, locale, locales } from '$lib/utils/translations';
	const routes = [
		{ route: '', name: 'home' },
		{ route: '/participants', name: 'participants' },
		{
			route: null,
			name: 'traineeship',
			subroutes: [
				{ route: '/preparations', name: 'preparations' },
				{ route: '/in-companies', name: 'in-companies' }
			]
		},

		{ route: '/institutions', name: 'institutions' },
		{ route: '/gallery', name: 'gallery' }
	];
	let docked = true;
	$: path = $page.url.pathname;
	const updateDocked = () => {
		docked = window.scrollY < 10;
	};
</script>

<!-- <svelte:window on:scroll={updateDocked} /> -->
<nav class:docked class="glass">
	<img src="/logos/project.webp" alt="">
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
									{subroute.name}
								</a>
							</li>
						{/each}
					</ul>
				</a>
			{/if}
		{/each}
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
		position: sticky;
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

	nav > img {
		height: 100%;
	}

	nav.docked {
		margin: 0 auto;
		width: 100%;
		border-bottom-left-radius: unset;
		border-bottom-right-radius: unset;
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
		padding: 0;
		margin: 0;
		list-style: none;
	}
	.navigation ul li {
		opacity: 0.7;
		padding: 5px;
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

	.navigation .active {
		color: white;
		opacity: 1;
		background: var(--valencia-dark-2);
		box-shadow: 0 2px 5px 2px rgba(0, 0, 0, 0.3);
	}

	.navigation li.active a {
		color: white;
	}

	.lang-select {
		margin: 0 5px;
		cursor: pointer;
	}

	.lang-select.selected {
		color: var(--valencia-red);
	}
</style>