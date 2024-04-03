<script lang="ts">
	import landing from '$lib/images/landing.webp';
	import scrollToElement from '$lib/utils/scrollToElement';
	import Button from './Button.svelte';
	import Navbar from './Navbar.svelte';
</script>

<header>
	<Navbar />
	<section class="container">
		<div class="textContainer">
			<h1>Twój E<span class="accent">-</span>book</h1>
			<p>
				Poszerz swoje horyzonty z naszymi e-bookami! Unikalna wiedza w zasięgu jednego kliknięcia!
			</p>
			<Button variant="cta" onClick={() => scrollToElement('sklep')}>Zobacz E-booki!</Button>
		</div>
		<div class="imageContainer">
			<img src={landing} alt="Welcome" class="image" />
		</div>
	</section>
</header>

<style>
	header {
		display: flex;
		justify-content: center;
		flex-direction: column;
	}
	h1 {
		font-family: var(--font-decoration);
		font-size: 42px;
		margin-bottom: 16px;
	}
	.accent {
		color: var(--color-theme-1);
	}
	.container {
		position: relative;
		display: flex;
		justify-content: space-around;
		width: 100%;
		min-height: 80vh;
		padding-top: 100px;
	}

	.textContainer {
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: flex-start;
		padding: 1rem;
	}
	.textContainer p {
		max-width: 300px;
	}

	.imageContainer {
		width: 50%;
		max-height: 70vh;
	}

	.image {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
	}

	@media screen and (max-width: 600px) {
		.container {
			flex-direction: column-reverse;
		}
		.imageContainer {
			position: absolute;
			top: 110px;
			width: 100%;
			height: 100%;
		}
		.textContainer {
			position: relative;
			top: 100px;
			z-index: 1;
		}
	}
</style>
