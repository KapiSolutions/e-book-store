<script lang="ts">
	import HeaderText from './HeaderText.svelte';
	import ProductCard from './ProductCard.svelte';
	import products from '../../tmp/products.json';
	import CountDown from './CountDown.svelte';
	import OrderInfo from './OrderInfo.svelte';

	import { useDevice } from '$lib/stores/useDevice';
	import { onDestroy } from 'svelte';

	let isMobile = false;
	const unsubscribe = useDevice('sm').subscribe((value) => {
		isMobile = value;
	});

	onDestroy(() => {
		unsubscribe();
	});
</script>

<div class="container" id="sklep">
	<HeaderText title="Sklep" />
	<div class="products">
		{#each products as product}
			<div>
				<ProductCard {...product} />
				<OrderInfo hide={!isMobile} />
			</div>
		{/each}
	</div>
	<OrderInfo hide={isMobile} />
	<CountDown />
</div>

<style>
	.container {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
	.products {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;
		gap: 82px;
	}
	@media screen and (max-width: 600px) {
		.products {
			display: flex;
			align-items: center;
			justify-content: center;
			flex-wrap: wrap;
			gap: 32px;
		}
	}
</style>
