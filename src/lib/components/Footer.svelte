<script>
	import emailIcon from '$lib/assets/images/emailIcon.svg';
	import phoneIcon from '$lib/assets/images/phoneIcon.svg';
	import pinIcon from '$lib/assets/images/pinIcon.svg';
	import favIcon from '$lib/assets/images/favIcon.svg';
</script>

<footer id="footer">
	<div class="container">
		<img src={favIcon} alt="Twój E-book logo" class="logo" />

		<div>
			<img src={emailIcon} alt="email" />
			<p><a href="mailto:twojebook10@gmail.com" class="nodecoration">twojebook10@gmail.com</a></p>
		</div>
		<div>
			<img src={phoneIcon} alt="phone" />
			<p><a href="tel:+48572217369" class="nodecoration">+48 572 217 369</a></p>
		</div>
		<div>
			<img src={pinIcon} alt="phone" />
			<p>ul. Krasickiego 48A, 32-600 Oświęcim</p>
		</div>
	</div>
	<p class="noMargin"><small>© 2024 <a href="/#">Twój E-book.</a></small></p>
	<p class="noMargin"><small>WebDesign: <a href="https://www.kapisolutions.pl" target="_blank">Kapisolutions.</a></small></p>
</footer>

<style>
	.container {
		width: 80%;
		display: flex;
		align-items: center;
		flex-direction: column;
		border-top: 1px solid rgba(234, 234, 234, 0.188);
	}
	.container div {
		display: flex;
		align-items: center;
		/* flex-direction: column; */
		text-align: center;
	}
	.container div img {
		display: none;
	}
	.nodecoration {
		text-decoration: none;
		color: var(--color-text);
	}
	.logo {
		font-family: var(--font-decoration);
		margin: 16px;
	}
	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
		background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 100%);
	}
	.noMargin {
		margin: 0;
	}
	a:hover {
		color: var(--color-theme-1);
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
		.container div {
			display: flex;
			align-items: center;
			flex-direction: row;
			text-align: center;
			gap: 6px;
		}
		.container div img {
			display: block;
		}
	}
</style>
