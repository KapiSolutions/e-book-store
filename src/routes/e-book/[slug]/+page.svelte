<script lang="ts">
	import HeaderText from '$lib/components/HeaderText.svelte';
	import SEO from '$lib/components/SEO.svelte';
	import { page } from '$app/stores';
	import { onDestroy } from 'svelte';
	import { productStore } from '$lib/stores/productStore';
	import ProductCard from '$lib/components/ProductCard.svelte';
	import type { Product } from '$lib/types';
	import CountDown from '$lib/components/CountDown.svelte';
	import products from '../../../tmp/products.json';
	import OrderInfo from '$lib/components/OrderInfo.svelte';

	const { slug } = $page.params;
	let product: Product | null;

	const unsubscribe = productStore.subscribe((value) => {
		if (value) {
			product = value;
		} else {
			product = products.find((record) => removeQueryString(record.title) === slug) ?? products[0];
		}
	});

	onDestroy(() => {
		unsubscribe();
	});

	// Title of the product is used as slug for better SEO
	function removeQueryString(inputString: string): string {
		const questionMarkIndex = inputString.indexOf('?');
		if (questionMarkIndex !== -1) {
			// If '?' sign is found, extract substring before it
			return inputString.slice(0, questionMarkIndex);
		}
		return inputString;
	}
</script>

<SEO title={slug} description={`E-book: ${slug}`} />

<div class="text-column">
	{#if product}
		<HeaderText title="E-book" />
		<div class="product">
			<h2>{@html product.title}</h2>
			<div class="imageContainer">
				<img src={product.imageUrl} alt="E-book cover" class="image" />
			</div>
		</div>
		<div class="description">
			{@html product.description}
		</div>

		<ProductCard {...product} buyMode={true} />
		<OrderInfo />
		<CountDown />
	{:else}
		<div style="text-align: center;">
			<h1>Ups!</h1>
			<h2>E-book nie istnieje.</h2>
			<a href="/">Wróć.</a>
		</div>
	{/if}
</div>

<style>
	.product {
		display: flex;
		flex-direction: column;
		gap: 16px;
		text-align: center;
		margin-bottom: 16px;
	}
	.imageContainer {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.image {
		width: 150px;
	}
	.description {
		margin: 12px 0px;
		text-align: justify;
	}
</style>
