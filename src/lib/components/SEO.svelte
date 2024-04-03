<script lang="ts">
	export let title: string = 'Twój E-book!';
	export let description: string = 'Sklep z e-bookami. Unikalna wiedza w zasięgu jednego kliknięcia!';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
</svelte:head>