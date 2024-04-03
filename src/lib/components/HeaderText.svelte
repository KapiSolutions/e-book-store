<script lang="ts">
	export let title = 'Section title';
</script>

<div class="container">
	<h1>{title}</h1>
</div>

<style>
	.container {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
	}

	h1 {
		text-transform: uppercase;
	}
</style>
