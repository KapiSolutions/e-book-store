<script lang="ts">
	import type { ButtonProps } from '../types';

	export let onClick: ButtonProps['onClick'] = () => {};
	export let variant: ButtonProps['variant'] = 'primary';
	export let type: ButtonProps['type'] = 'button';
	export let disabled: ButtonProps['disabled'] = false;
	export let loading: ButtonProps['loading'] = false;
	export let pulsing: ButtonProps['pulsing'] = false;
</script>

<button {type} on:click={onClick} class={`${variant} ${pulsing && 'pulsing'}`} {disabled}>
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
		padding: 12px 18px;
		border-radius: 12px;
		color: var(--color-theme-1);
		border: 1px solid var(--color-theme-1);
		background-color: var(--color-bg);
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

	.pulsing {
		animation: pulse 2.5s infinite cubic-bezier(0.25, 0.5, 0.9, 2.5);
	}

	@keyframes pulse {
		from {
			box-shadow: 0 0 0 0 var(--color-theme-1);
		}
		to {
			box-shadow: 0 0 0 12px rgba(0, 0, 0, 0);
		}
	}
</style>
