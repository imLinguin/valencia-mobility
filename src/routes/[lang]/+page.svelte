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
		<img
			src="https://images.unsplash.com/photo-1565969163767-b5139a5a2761?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
			alt=""
		/>
	</div>
	<div class="header">
		<div class="header-content">
			<h1>Erasmus+</h1>
			<h2>{$t('home.subtitle')}</h2>
			<h3>16.04.2023 - 06.05.2023</h3>
		</div>
	</div>

	<div class="content glass" class:docked bind:this={content}>
		<h2>
			{$t('home.about-project')}
		</h2>
		<div class="chips">
			<div class="wrapper">
				<LandingChip title="uczniów" content="22">
					<AccountCircle width={50} height="100%" />
				</LandingChip>

				<LandingChip title="uczniów" content="22">
					<Groups width={50} height="100%" />
				</LandingChip>

				<LandingChip title="uczniów" content="22">
					<Calendar width={50} height="100%" />
				</LandingChip>

				<LandingChip title="uczniów" content="22">
					<OfficeBuilding width={50} height="100%" />
				</LandingChip>
			</div>
		</div>
		<p>
			Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi obcaecati quae necessitatibus
			labore tempore architecto laboriosam doloremque ea, asperiores veritatis ipsum recusandae
			tenetur sunt aut in impedit sint odit? Illo incidunt vel iste odit perferendis sit molestiae
			non animi! Provident deserunt, culpa ut saepe ab dolor? Nemo sed debitis beatae velit
			veritatis corrupti doloribus dolor perferendis consequatur ducimus quod placeat, at voluptatum
			eum error. Voluptas soluta corrupti consectetur error totam, dolor, esse laboriosam
			consequatur quasi pariatur accusamus earum consequuntur nulla. Voluptate, laudantium modi
			provident earum eos cumque ab commodi delectus quasi facere quo consequuntur tempora quod
			nihil quaerat odit adipisci accusamus accusantium quia aliquam eius vero exercitationem
			repellat fuga. Eum sequi, magnam suscipit tenetur maiores est minima ipsa ullam expedita
			labore nam sint id esse distinctio amet inventore rem officiis natus. Reprehenderit,
			perspiciatis quo tenetur et eligendi dolorem nulla velit quis culpa corporis temporibus
			aperiam id libero! Nihil doloribus quibusdam quis vero omnis culpa fugiat facilis ab minima
			consequuntur, numquam modi dolore beatae rerum, maiores, odio quia harum nobis? Deserunt ipsum
			ipsa optio laborum ducimus vel quaerat cumque reprehenderit, inventore quae nesciunt sit aut,
			adipisci culpa voluptatibus officia sed incidunt. Nulla, fuga. Laboriosam nostrum repudiandae,
			illum expedita modi eaque quae quibusdam soluta molestias fuga facilis suscipit esse excepturi
			quo atque animi tempore, corporis, necessitatibus architecto veniam voluptas. Tempore omnis
			necessitatibus a ratione, soluta eos labore quasi porro dignissimos ipsum at voluptatum
			nostrum in maiores qui vel? Maxime architecto quia itaque dolorem, ullam amet quae dolore in
			animi autem harum, voluptates provident modi aperiam libero, eveniet odit facilis. Quia magnam
			nisi harum nulla impedit, doloremque voluptas, laborum quod, explicabo asperiores minus nam
			molestiae! Repellendus eum voluptatem doloribus ad aperiam, molestias inventore repellat
			dignissimos maiores minima nemo nulla magni veniam sit obcaecati omnis, quo non quis ipsum
			illum corporis, sunt neque soluta cum? Cupiditate, ipsum vel earum veritatis nisi facere
			rerum, deleniti recusandae minus expedita tenetur natus sed adipisci, quaerat perferendis
			nesciunt totam id praesentium. Expedita ratione dolorem ab, maiores placeat fugiat distinctio
			vel, numquam molestiae pariatur quia, veniam reiciendis ut? Optio tenetur magnam facere.
			Dolorum blanditiis tempora excepturi laudantium sunt, facilis non ipsum esse maxime sint!
			Harum, perspiciatis, tempora aliquam, earum ratione voluptatibus a commodi voluptatum magni
			veritatis incidunt minima. Repellat eius architecto, expedita itaque reprehenderit ipsum, non
			hic numquam recusandae ducimus officia consectetur ipsam inventore id, nobis doloremque
			debitis consequuntur explicabo totam quis animi! Qui labore officia vel eos voluptatem
			consectetur voluptatum iure aperiam quam magnam? Vel assumenda, consequatur perferendis
			laborum eveniet numquam quas. Sed excepturi cum hic laboriosam dolor, sunt officia nemo error
			praesentium, quam voluptatibus quia voluptate molestias sapiente beatae optio provident,
			accusamus animi harum nostrum perspiciatis doloremque? Cum vel explicabo architecto aperiam
			nisi quibusdam nihil excepturi praesentium magnam ab harum, earum odio nulla aspernatur!
			Doloribus accusamus aspernatur amet earum necessitatibus voluptate molestiae, officiis
			accusantium iusto eligendi et rerum inventore atque ad eveniet maiores temporibus ipsam
			quidem, voluptates odit vero pariatur non rem. Est perferendis sit blanditiis reprehenderit,
			molestiae architecto eos sapiente, suscipit cum ex culpa? Reiciendis, eligendi.
		</p>
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
		height: 100%;
		object-fit: cover;
	}

	.header {
		padding-top: 2.25em;
		height: 70vh;
		color: white;
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: right;
		justify-content: center;
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
		text-align: right;
		margin-right: 3.5rem;
	}

	.chips {
		margin: 50px 0;
	}

	.chips .wrapper {
		margin: 0 auto;
		display: flex;
		max-width: 1300px;
		flex-direction: row;
		align-items: center;
		justify-content: space-evenly;
	}

	div.content {
		padding: 10px 25px;
		transition: all 400ms ease;
		border-top-right-radius: 0px;
		border-top-left-radius: 0px;
		margin: 0;
	}

	div.content h2 {
		position: fixed;
		left: 50%;
		font-size: 2.5em;
		transform: translate(-50%, -50%);
		top: 0;
		color: white;
		text-align: center;
		text-shadow: 0 0 6px black;
	}

	div.content.docked {
		border-top-right-radius: 20px;
		border-top-left-radius: 20px;
		margin: 0 15px;
		padding: 10px;
	}

	@media screen and (max-width: 800px) {
		.header {
			font-size: 0.8em;
		}

		.chips .wrapper {
			flex-direction: column;
		}
	}
</style>
