<script lang="ts">
	export let title: string;
	export let photos: string[] = [
		'/images/background.webp',
		'/images/background.webp',
		'/images/background.webp'
	];
</script>

<div class="trip">
	<h2 class="styled-header">{title}</h2>
	<div class="content">
		<div class="description">
			<slot name="description">
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, amet.</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim perferendis quidem, dolorem
					iusto minima corporis delectus, quaerat animi eum eligendi debitis magnam officiis
					voluptatum maiores voluptatibus ab voluptate accusantium error iste. Autem quasi error
					voluptas! Tenetur hic eligendi maxime sint.
				</p>
			</slot>
		</div>
		<div class="photos">
			{#each photos as photo}
				<img src={photo} alt="" />
			{/each}
		</div>
	</div>
</div>

<style>
	.trip {
		display: flex;
		flex-direction: column;
		padding: 10px;
	}

	.styled-header {
		margin: 0 auto 10px;
	}

	.content {
		display: flex;
		flex-direction: row;
	}

	.photos {
		display: grid;
		grid-template-columns: repeat(3, 170px);
		gap: 10px;
		grid-template-areas:
			'first first first'
			'second third forth';
	}

	img {
		border-radius: 10px;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.photos :nth-child(1) {
		grid-area: first;
	}
	.photos :nth-child(2) {
		grid-area: second;
	}
	.photos :nth-child(3) {
		grid-area: third;
	}
	.photos :nth-child(4) {
		grid-area: forth;
	}
</style>
