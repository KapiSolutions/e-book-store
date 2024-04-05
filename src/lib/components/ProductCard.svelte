<script lang="ts">
	import Button from './Button.svelte';
	import { goto } from '$app/navigation';
	import { productStore } from '$lib/stores/productStore';

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
	<h2>{title}</h2>
	<div class="imageContainer">
		<img src={imageUrl} alt="E-book cover" class="image" />
	</div>
	<span class="price">
		<p class="oldPrice">{priceOld}.00 zł</p>
		<p class="activePrice">{price}.00 zł</p>
	</span>
	<div class="buttons">
		{#if buyMode}
			<!-- <Button onClick={() => goto('/#sklep')} variant="secondary">Wróć</Button> -->
			<Button onClick={() => openUrlInNewTab(buyUrl)} pulsing={true}>Kup teraz!</Button>
		{:else}
			<Button onClick={handleProduct} variant="secondary">Pokaż opis</Button>
			<Button onClick={() => openUrlInNewTab(buyUrl)}>Kup teraz!</Button>
		{/if}
	</div>
	<p>
		<small>ZAKUP JEST JEDNOZNACZNY Z AKCEPTACJĄ <a href="/regulamin#main">REGULAMINU.</a></small>
	</p>
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
		gap: 16px;
	}
</style>
