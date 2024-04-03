<script>
	import SEO from '$lib/components/SEO.svelte';
	import Products from '$lib/components/Products.svelte';
</script>

<SEO />

<section>
	<Products />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}
</style>
