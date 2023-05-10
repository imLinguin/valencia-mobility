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
			{$t('home.about-project')}
		</h2>
		<div class="chips">
			<div class="wrapper">
				<LandingChip title="uczniów" content="22">
					<AccountCircle width={50} height="100%" />
				</LandingChip>

				<LandingChip title="opiekunów" content="5">
					<Groups width={50} height="100%" />
				</LandingChip>

				<LandingChip title="dni praktyk" content="15">
					<Calendar width={50} height="100%" />
				</LandingChip>

				<LandingChip title="firm" content="12">
					<OfficeBuilding width={50} height="100%" />
				</LandingChip>

				<LandingChip title="aktywności kulturowych" content="6">
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
						Projekt UE Erasmus+ nr 2022-1-PL01-KA121-VET-000061831 ukierunkowany jest na potrzeby
						zwiększenia szans zatrudnienia absolwentów Zespołu Szkół Elektronicznych. Celem projektu
						jest kształtowanie zawodowych i społecznych postaw uczniów ZSE w obszarze europejskim w
						tym dostosowanie szkoleń zawodowych do obecnych wymagań rynku pracy oraz podniesienie
						efektywności szkolenia zawodowego poprzez szkolenia zawodowe nauczycieli przedmiotów
						informatycznych i elektronicznych w zagranicznych instytucjach szkoleniowych i firmach.
					</p>
					<p>
						W ramach projektu 22 uczniów Zespołu Szkół Elektronicznych w Rzeszowie odbędzie 3
						tygodniową praktykę zawodowa w instytucjach szkoleniowych i firmach w sektorze IT,
						elektroniki i automatyki w hiszpańskich zakładach pracy. W ramach projektu zorganizowany
						również zostanie tygodniowy wyjazd 5-ciu nauczycieli Zespołu Szkół Elektronicznych w
						Rzeszowie na szkolenie „job shadowing” do organizacji przyjmującej ESMOVIA w Walencji,
						Hiszpania w celu podniesienia umiejętności i kompetencji zawodowych.
					</p>
					<p>
						Celem projektu jest zapoznanie z hiszpańskim system kształcenia, zapoznanie ze strukturą
						organizacyjną firm zatrudniających specjalistów w branży elektronicznej i
						informatycznej, doskonalenie umiejętności językowych, wymiana doświadczeń z innymi
						trenerami w dziedzinie szkolnictwa zawodowego, zapoznanie z organizacją zewnętrznych
						egzaminów zawodowych, z treścią programową przedmiotów zawodowych, innowacyjnymi
						metodami i technikami prowadzenia szkoleń zawodowych, a także zapoznanie ze środkami
						dydaktycznymi i sposobami ich wykorzystania w procesie kształcenia.
					</p>

					<p>
						Praktyki dla uczniów będą organizowane w firmach i instytucjach, które posiadają już
						doświadczenie w szkoleniu specjalistów z zakresu współczesnych technologii oraz
						przeprowadzaniu wymiany i stażu w ramach projektów UE. 22-osobowej grupie uczniów będzie
						towarzyszyć 2 nauczycieli/opiekunów.
					</p>
					<p>
						Poprzez realizację projektu, analizę i upowszechnianie jego wyników nauczyciele wzbogacą
						się o nowe doświadczenia, które pozwolą ulepszyć metody nauczania młodzieży reagując na
						dynamicznie rozwijający się rynek pracy zatrudniający specjalistów w branży
						elektronicznej i informatycznej.
					</p>
					<p>
						Uczniowie odbywający praktykę zagraniczną w ramach projektu zdobędą wiedzę oraz cenne,
						poszukiwane i wymagane przez pracodawców doświadczenie, które stanie się ważnym atutem w
						znalezieniu pracy w naszym regionie.
					</p>
				</div>
			</div>
			<h3 class="styled-header">{$t('home.project-goals')}</h3>
			<ol>
				<li>
					Zwiększenie mobilności oraz doświadczenia zawodowego uczniów z ZSE poprzez udział w
					3-tygodniowych zagranicznych praktykach zawodowych z elektroniki, informatyki i
					automatyki.
				</li>
				<li>
					Poprawa kompetencji kluczowych i umiejętności ogólnych, w szczególności znajomości języków
					obcych uczniów ZSE w trakcie przygotowania do mobilności i podczas stażu za granicą.
				</li>

				<li>
					Rozwój zawodowy kadry ZSE poprzez przygotowanie organizacyjno-merytoryczne i udział
					nauczycieli przedmiotów zawodowych w zagranicznych szkoleniach.
				</li>

				<li>
					Wzmocnienie kompetencji kluczowych i umiejętności ogólnych, w szczególności znajomości
					języków obcych nauczycieli ZSE poprzez przygotowanie i udział w zagranicznym stażu
					zawodowym.
				</li>
				<li>
					Wspieranie jakości, transparentności i uznawania efektów uczenia się uczniów i nauczycieli
					ZSE w okresach mobilności za granicą przy wykorzystaniu europejskich narzędzi.
				</li>
				<li>
					Kontynuacja i rozwój bezpośredniej współpracy ZSE z europejskimi instytucjami szkolenia
					zawodowego w zakresie realizacji wysokiej jakości projektów mobilności i doskonalenia
					procesu kształcenia.
				</li>
				<li>
					Poprawa wyników egzaminu z przygotowania zawodowego w Zespole Szkół Elektronicznych w
					Rzeszowie.
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
		width: 400px;
		transition: transform 400ms ease;
	}

	div.text-content div.image-wrapper {
		border-radius: 20px;
		overflow: hidden;
		height: 400px;
		min-width: 400px;
		box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.3);
		margin: 20px;
		margin-right: 50px;
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

		.chips .wrapper {
			flex-direction: column;
		}
		div.text-content div.aside-image-wrapper {
			flex-direction: column;
		}
	}
</style>
