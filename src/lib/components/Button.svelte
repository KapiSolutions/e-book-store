<script lang="ts">
	import type { ButtonProps } from '../types';

	export let onClick: ButtonProps['onClick'] = () => {};
	export let variant: ButtonProps['variant'] = 'primary';
	export let type: ButtonProps['type'] = 'button';
	export let disabled: ButtonProps['disabled'] = false;
	export let loading: ButtonProps['loading'] = false;
</script>

<button {type} on:click={onClick} class={variant} {disabled}>
	{#if loading}
		Loading...
	{:else}
		<slot />
	{/if}
</button>

<style>
	button {
		border: none;
		cursor: pointer;
	}

	.primary {
		color: var(--color-text);
		background-color: var(--color-theme-1);
		padding: 12px 18px;
		border-radius: 12px;
		width: fit-content;
		text-transform: uppercase;
	}

	.secondary {
		border: 1px solid rgb(255, 0, 204);
		padding: 16px 24px;
		border-radius: 24px;
	}

	.cta {
		font-size: large;
		color: var(--color-text);
		background-color: var(--color-theme-1);
		padding: 16px 24px;
		border-radius: 16px;
		width: fit-content;
	}
	button:hover {
		transform: scale(1.03);
		transition: all 0.1s linear;
	}
</style>
