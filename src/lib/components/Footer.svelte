<script lang="ts">
	import { t, locale } from '$lib/utils/translations';
</script>

<footer>
	<img src={`/images/footer_${$locale}.webp`} alt="" />
	<span>{$t('footer.projectCode')}</span>
</footer>

<style>
	footer {
		border-top: 1px solid lightgray;
		padding: 10px;
		background: rgb(255, 255, 255);
		text-align: center;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	footer img {
		width: min(100%, 500px);
	}
</style>
