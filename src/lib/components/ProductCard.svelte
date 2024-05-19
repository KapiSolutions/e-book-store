<script lang="ts">
	import Button from './Button.svelte';
	import { goto } from '$app/navigation';
	import { productStore } from '$lib/stores/productStore';
	import PaymentMethods from './PaymentMethods.svelte';

	const openUrlInNewTab = (url: string) => {
		window.open(url, '_blank');
	};

	export let title: string;
	export let price: number;
	export let priceOld: number;
	export let imageUrl: string;
	export let buyUrl: string;
	export let description: string;
	export let buyMode: boolean = false;

	const handleProduct = () => {
		productStore.set({ title, price, priceOld, imageUrl, buyUrl, description });
		goto(`/e-book/${title}#main`);
	};
</script>

<div class="container">
	<h2>{@html title}</h2>
	<div class="imageContainer">
		<img src={imageUrl} alt={`E-book ${title}`} class="image" />
	</div>
	<span class="price">
		<p class="oldPrice">{priceOld.toFixed(2)} zł</p>
		<p class="activePrice">{price.toFixed(2)} zł</p>
	</span>
	<div class="buttons">
		{#if buyMode}
			<!-- <Button onClick={() => goto('/#sklep')} variant="secondary">Wróć</Button> -->
			<Button onClick={() => openUrlInNewTab(buyUrl)} pulsing={true}>Kup teraz!</Button>
			<PaymentMethods />
		{:else}
			<Button onClick={handleProduct} variant="secondary">Pokaż opis</Button>
			<Button onClick={() => openUrlInNewTab(buyUrl)} pulsing={true}>Kup teraz!</Button>
		{/if}
	</div>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
	}
	.imageContainer {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 12px;
	}
	.price {
		text-align: center;
	}
	.activePrice {
		font-size: larger;
		margin-top: 6px;
	}
	.oldPrice {
		text-decoration: line-through;
		opacity: 0.7;
		margin: 0;
	}
	.image {
		width: 150px;
	}
	.buttons {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		gap: 16px;
	}
</style>
