<script lang="ts">
	export let title = 'Section title';
</script>

<div class="container">
	<span class="decor">✤</span>
	<h1>{title}</h1>
	<span class="decor">✤</span>
</div>

<style>
	.container {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 12px;
		width: 100%;
	}
	.decor {
		font-size: small;
		color: var(--color-theme-1);
	}
	h1 {
		text-transform: uppercase;
	}
</style>
