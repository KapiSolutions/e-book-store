<script>
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
</script>

<nav>
	<ul>
		<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
			<button on:click={handleHome}>Home</button>
		</li>
		<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
			<button on:click={() => scrollToElement('sklep')}>Sklep</button>
		</li>
		<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
			<button><a href="/about">Kontakt</a></button>
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
		justify-content: flex-end;
		background-color: var(--color-bg);
		z-index: 100;
	}

	ul {
		position: relative;
		padding: 0 12px;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}
	/* Active tab */
	/* li[aria-current='page']::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--color-theme-1);
	} */

	button {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
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
	a {
		text-decoration: none;
		color: var(--color-text);
		transition: color 0.2s linear;
	}
	a:hover {
		text-decoration: none;
		color: var(--color-theme-1);
	}
</style>
