<script lang="ts">
	import { t } from '$lib/utils/translations';
	import LandingChip from '$lib/components/LandingChip.svelte';
	import AccountCircle from 'svelte-material-icons/AccountCircle.svelte';
	import Groups from 'svelte-material-icons/AccountGroup.svelte';
	import Calendar from 'svelte-material-icons/Calendar.svelte';
	import OfficeBuilding from 'svelte-material-icons/OfficeBuilding.svelte';
	import { onMount } from 'svelte';

	let docked = false;
	let background: HTMLElement;
	let content: HTMLElement;
	const updateDocked = () => {
		docked = window.scrollY < 10;
		const force = Math.min(window.scrollY / 30, 7);
		const opacity = Math.max(0.8, window.scrollY / 300);
		if (background) {
			background.style.filter = `blur(${force}px)`;
		}
		if (content) {
			content.style.backgroundColor = `rgba(255, 255, 255, ${opacity})`;
		}
	};
	onMount(updateDocked);
</script>

<svelte:window on:scroll={updateDocked} />
<div>
	<div class="bg" bind:this={background}>
		<img src="/images/background.webp" alt="" />
	</div>
	<div class="header">
		<div class="header-content">
			<h1>Erasmus+</h1>
			<h2>{$t('home.subtitle')}</h2>
			<h3>Zespół Szkół Elektronicznych w Rzeszowie</h3>
			<h3>16.04.2023 - 05.05.2023</h3>
		</div>
	</div>

	<div class="content glass" class:docked bind:this={content}>
		<h2 class="styled-header">
			{$t('home.about-project.title')}
		</h2>
		<div class="chips">
			<div class="wrapper">
				<LandingChip title={$t('home.chips.students')} content="22">
					<AccountCircle width={50} height="100%" />
				</LandingChip>

				<LandingChip title={$t('home.chips.tutors')} content="5">
					<Groups width={50} height="100%" />
				</LandingChip>

				<LandingChip title={$t('home.chips.days')} content="15">
					<Calendar width={50} height="100%" />
				</LandingChip>

				<LandingChip title={$t('home.chips.companies')} content="12">
					<OfficeBuilding width={50} height="100%" />
				</LandingChip>

				<LandingChip title={$t('home.chips.culture-activities')} content="6">
					<OfficeBuilding width={50} height="100%" />
				</LandingChip>
			</div>
		</div>
		<div class="text-content">
			<div class="aside-image-wrapper">
				<div class="image-wrapper">
					<img src="/images/valencia_zie.webp" alt="" />
				</div>
				<div>
					<p>
						{$t('home.about-project.p1')}
					</p>
					<p>
						{$t('home.about-project.p2')}
					</p>
					<p>
						{$t('home.about-project.p3')}
					</p>

					<p>
						{$t('home.about-project.p4')}
					</p>
					<p>
						{$t('home.about-project.p5')}
					</p>
				</div>
			</div>
			<h3 class="styled-header">{$t('home.project-goals.title')}</h3>
			<ol>
				<li>
					{$t('home.project-goals.item1')}
				</li>
				<li>
					{$t('home.project-goals.item2')}
				</li>

				<li>
					{$t('home.project-goals.item3')}
				</li>

				<li>
					{$t('home.project-goals.item4')}
				</li>
				<li>
					{$t('home.project-goals.item5')}
				</li>
				<li>
					{$t('home.project-goals.item6')}
				</li>
				<li>
					{$t('home.project-goals.item7')}
				</li>
			</ol>
		</div>
	</div>
</div>

<style>
	.bg {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: -10;
		overflow: hidden;
		transform: scale(1.1);
	}

	.bg img {
		width: 100%;
		height: max(100vh, 600px);
		object-fit: cover;
	}

	.header {
		padding-top: 2.25em;
		height: 70vh;
		color: white;
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		justify-content: start;
		text-shadow: 0 0 5px black;
		font-size: 1.2rem;
		text-transform: uppercase;
	}

	h1 {
		font-size: 4.5em;
		margin-bottom: -15px;
	}

	h2 {
		font-size: 2em;
	}

	.header-content h2,
	.header-content h3 {
		font-weight: 500;
	}

	.chips {
		margin: 50px 0;
	}

	.chips .wrapper {
		margin: 0 auto;
		display: flex;
		max-width: 1300px;
		flex-direction: row;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-evenly;
	}

	div.content {
		position: relative;
		padding: 10px 25px;
		transition: all 400ms ease;
		border-top-right-radius: 0px;
		border-top-left-radius: 0px;
		margin: 0;
	}

	div.content h2 {
		position: absolute;
		font-size: 2.5em;
		transform: translate(-50%, -50%);
		left: 50%;
		top: -10px;
	}

	div.content h3 {
		margin: 0 auto;
		font-size: 2em;
	}

	ol li {
		padding: 0.2em 0;
	}

	div.text-content {
		max-width: 1440px;
		margin: 3em auto;
		font-size: 1.05em;
		text-align: left;
	}

	div.text-content p {
		margin: 1em 0;
	}

	div.content.docked {
		border-top-right-radius: 20px;
		border-top-left-radius: 20px;
		margin: 0 15px;
		padding: 10px;
	}

	div.text-content div.aside-image-wrapper img {
		object-fit: cover;
		width: 100%;
		transition: transform 400ms ease;
	}

	div.text-content div.image-wrapper {
		border-radius: 20px;
		overflow: hidden;
		height: min(80vw, 400px);
		width: min(80vw, 400px);
		box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.3);
		margin: 20px;
		flex-shrink: 0;
	}
	div.text-content div.aside-image-wrapper img:hover {
		transform: scale(1.05);
	}

	div.text-content div.aside-image-wrapper {
		display: flex;
		align-items: center;
		flex-direction: row;
	}

	@media screen and (max-width: 800px) {
		.header {
			font-size: 0.8em;
		}

		.bg img {
			width: 100%;
			height: max(100vh, 600px);
			object-fit: contain;
		}

		.chips .wrapper {
			flex-direction: column;
		}

		div.content.docked {
			margin: 0;
			padding: 10px;
		}
		div.text-content div.aside-image-wrapper {
			flex-direction: column;
		}
	}
</style>
