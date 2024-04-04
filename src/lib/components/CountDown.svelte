<script lang="ts">
	import { onDestroy } from 'svelte';
	import { countdownStore } from '$lib/stores/countdownStore';

	let countdown: string;
	const unsubscribe = countdownStore.subscribe((value) => {
		countdown = value;
	});

	onDestroy(() => {
		unsubscribe();
	});
</script>

<div>
	<p>Nie zwlekaj! Promocja kończy się za:</p>
	<h1>{countdown}</h1>
</div>

<style>
	div {
		text-align: center;
		margin: 32px 0px;
	}
</style>
