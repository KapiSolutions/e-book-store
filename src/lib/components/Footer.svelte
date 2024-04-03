<script>
	import emailIcon from '$lib/images/emailIcon.svg';
	import phoneIcon from '$lib/images/phoneIcon.svg';
	import pinIcon from '$lib/images/pinIcon.svg';
</script>

<footer id="footer">
	<div class="container">
		<p><strong>Kontakt</strong></p>
		<div>
			<img src={emailIcon} alt="email" />
			<p><a href="mailto:twojebook10@gmail.com" class="nodecoration">twojebook10@gmail.com</a></p>
		</div>
		<div>
			<img src={phoneIcon} alt="phone" />
			<p>+48 572 217 369</p>
		</div>
		<div>
			<img src={pinIcon} alt="phone" />
			<p>ul. Krasickiego 48A, 32-600 Oświęcim</p>
		</div>
	</div>
	<p>© 2024 <a href="/#">Twój E-book</a></p>
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
		flex-direction: column;
		text-align: center;
	}
	.nodecoration {
		text-decoration: none;
		color: var(--color-text);
	}
	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
		background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 100%);
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
	}
</style>
