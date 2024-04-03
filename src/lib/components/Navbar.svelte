<script lang="ts">
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import scrollToElement from '$lib/utils/scrollToElement';

	const handleHome = () => {
		if ($page.url.pathname !== '/') {
			goto('/');
		} else {
			scrollToElement('top');
		}
	};
	const handleShop = () => {
		if ($page.url.pathname !== '/') {
			goto('/#main');
		} else {
			scrollToElement('sklep');
		}
	};
</script>

<nav>
	<button on:click={handleHome} class="logo"> Twój e<span class="accent">-</span>book!</button>
	<ul>
		<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
			<button on:click={handleShop}>SKLEP</button>
		</li>
		<li aria-current={$page.url.pathname === '/o-nas' ? 'page' : undefined}>
			<button on:click={() => goto('/o-nas#main')}>O NAS</button>
		</li>
		<li>
			<button on:click={() => scrollToElement('footer')}>KONTAKT</button>
		</li>
	</ul>
</nav>

<style>
	nav {
		position: fixed;
		top: 0px;
		left: 0px;
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: var(--color-bg);
		z-index: 100;
		padding: 0px 6px;
	}

	.logo {
		align-items: center;
		font-family: var(--font-decoration);
		font-size: larger;
		font-weight: 300;
	}

	.accent {
		color: var(--color-theme-1);
	}

	ul {
		position: relative;
		padding: 0px 12px;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
	}

	li {
		position: relative;
		height: 100%;
	}

	/* Active tab */
	li[aria-current='page']::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--color-theme-1);
	}

	button {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 0.8rem;
		/* text-transform: uppercase; */
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
		border: none;
		background: none;
		cursor: pointer;
	}

	button:hover {
		color: var(--color-theme-1);
	}
</style>
