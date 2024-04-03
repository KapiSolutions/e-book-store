<script lang="ts">
	// import ebook from '$lib/images/e-book.webp';
	import Button from './Button.svelte';

	const openUrlInNewTab = (url: string) => {
		window.open(url, '_blank');
	};

	export let title: string;
	export let price: number;
	export let priceOld: number;
	export let imageUrl: string;
	export let buyUrl: string;
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
	<Button onClick={() => openUrlInNewTab(buyUrl)}>Kup teraz!</Button>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.imageContainer {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.price{
		text-align: center;
	}
	.activePrice {
		font-size: larger;
		margin-bottom: 12px;
		margin-top:6px;
	}
	.oldPrice {
		text-decoration: line-through;
		opacity: 0.7;
		margin: 0;
	}
	.image {
		width: 150px;
	}
</style>
