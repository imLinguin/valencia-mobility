<script lang="ts">
	export let title = 'Participants Group';
	export let images = [
		'/images/person.jpg',
		'/images/person.jpg',
		'/images/person.jpg',
		'/images/person.jpg',
		'/images/person.jpg'
	];
</script>

<a class="participants-group" on:click>
	<div class="images">
		{#each images as image}
			<img src={image ?? '/images/person.jpg'} alt="" />
		{/each}
	</div>

	<h2>{title}</h2>
</a>

<style>
	img {
		width: 200px;
		height: 200px;
		object-fit: cover;
		position: absolute;
		transition: all 400ms ease;
		padding: 10px 10px 40px 10px;
		background-color: white;
		box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.2);
	}
	.participants-group {
		text-align: center;
		text-decoration: none;
		display: flex;
		width: 100%;
		height: 100%;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.participants-group:hover {
		cursor: pointer;
	}

	.participants-group > .images {
		position: relative;
		width: 400px;
		height: 400px;
	}

	.participants-group > .images :nth-child(1) {
		left: 0;
		top: 40px;
	}

	.participants-group:hover > .images :nth-child(1) {
		left: -20px;
		top: 20px;
		transform: rotate(-5deg);
	}
	.participants-group > .images :nth-child(2) {
		left: 100px;
		top: 0;
	}
	.participants-group:hover > .images :nth-child(2) {
		left: 100px;
		top: -10px;
	}
	.participants-group > .images :nth-child(3) {
		left: 150px;
		top: 150px;
	}
	.participants-group:hover > .images :nth-child(3) {
		left: 160px;
		top: 160px;
		transform: rotate(4deg);
	}
	.participants-group > .images :nth-child(4) {
		left: 220px;
		top: 30px;
	}
	.participants-group:hover > .images :nth-child(4) {
		left: 250px;
		top: -10px;
		transform: rotate(7deg);
	}
	.participants-group > .images :nth-child(5) {
		left: 4px;
		top: 130px;
	}
	.participants-group:hover > .images :nth-child(5) {
		left: -6px;
		top: 140px;
		transform: rotate(-9deg);
	}
</style>
