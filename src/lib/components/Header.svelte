<script>
	import landing from '$lib/images/landing.png';
	import Navbar from './Navbar.svelte';
</script>

<header>
	<Navbar />
	<section class="landing">
		<div>
			<h1>Twój E-book</h1>
			<p>
				Poszerz swoje horyzonty z naszymi e-bookami! Unikalna wiedza w zasięgu jednego kliknięcia!
			</p>
			<button>Zobacz E-booki!</button>
		</div>
		<div>
			<span class="landing-image">
				<img src={landing} alt="Welcome" />
			</span>
		</div>
	</section>
</header>

<style>
	header {
		display: flex;
		justify-content: center;
		flex-direction: column;
	}
	.landing{
		display: flex;
		justify-content: space-around;
		width: 100%;
	}

	.landing div{
		display: flex;
		justify-content: center;
		flex-direction: column;
	}
	.landing div p{
		max-width: 300px;
	}
</style>
