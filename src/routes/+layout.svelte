<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { t } from '$lib/utils/translations';
	import '$lib/main.css';
</script>

<svelte:head>
	<title>{$t('meta.title')}</title>
	<meta name="description" content={$t('meta.description')} />
	<meta name="og:title" content={$t('meta.title')}/>
	<meta name="og:type" content="website"/>
	<meta name="og:image" content="/images/background.webp"/>
</svelte:head>
<div>
	<Navbar />
	<main>
		<slot />
	</main>
	<Footer />
</div>

<style>
	main {
		padding-top: 3.5em;
	}
</style>
