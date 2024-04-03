<script lang="ts">
	import HeaderText from './HeaderText.svelte';
	import ProductCard from './ProductCard.svelte';
	import products from '../../tmp/products.json';
	import CountDown from './CountDown.svelte';
</script>

<div class="container" id="sklep">
	<HeaderText title="Sklep" />
	<div>
		{#each products as product}
			<ProductCard {...product} />
		{/each}
	</div>
	<CountDown />
</div>

<style>
	.container {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
</style>
