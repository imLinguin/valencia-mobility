<script lang="ts">
	export let title: string;
	export let content: string;
</script>

<div class="chip">
	<slot />
	<div class="meta">
		<h3>{content}</h3>
		<p>{title}</p>
	</div>
</div>

<style>
	div.chip {
		color: white;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-around;
		padding: 10px;
		margin: 0 0 10px 0;
		border-radius: 15px;
		background: linear-gradient(to bottom left, var(--valencia-red-light), var(--valencia-dark-1));
		height: 100px;
		width: 200px;
		box-shadow: 0 5px 10px 2px rgba(0, 0, 0, 0.3);

		transition: transform 200ms ease;
	}

	div.chip:hover {
		transform: scale(1.05);
		cursor: pointer;
	}

	div.meta {
		margin-left: 20px;
		width: 50%;
		display: flex;
		flex-direction: column;
		align-items: start;
		justify-content: center;
	}
	@media screen and (max-width: 800px) {
		.chip {
			margin-bottom: 10px;
		}
	}
</style>
