<script lang="ts">
	import HeaderText from './HeaderText.svelte';
	import PaymentMethods from './PaymentMethods.svelte';
	import PdfIcon from './icons/PdfIcon.svelte';
	import SendIcon from './icons/SendIcon.svelte';
	import StripeIcon from './icons/StripeIcon.svelte';
	const color = 'rgba(170, 170, 170, 0.818)';
</script>

<HeaderText title="Jak to działa?" />
<div class="container">
	<div class="item">
		<p class="itemIdx">①</p>
		<PdfIcon fill={color} />
		<p>Nasze E-booki dostarczane są w pięknie opakowanym pliku PDF.</p>
	</div>
	<div class="item">
		<p class="itemIdx">②</p>
		<StripeIcon fill={color} />
		<p>Opłać bezpiecznie zakup za pomocą wybranej metody płatności.</p>
		<PaymentMethods />
	</div>
	<div class="item">
		<p class="itemIdx">③</p>
		<SendIcon fill={color} />
		<p>Twój E-book dostarczymy natychmiast na maila podanego podczas płatności.</p>
	</div>
</div>
<p>Sprawdź jakie to proste i zdobądź unikalną więdzę oraz umiejętności już dziś!</p>

<style>
	.container {
		width: 100%;
		display: flex;
		justify-content: space-around;
		align-items: top;
		flex-direction: row;
		gap: 16px;
		margin-bottom: 16px;
	}
	.item {
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 8px;
		text-align: center;
		width: 30%;
		border-radius: 8px;
		background-color: rgba(33, 33, 33, 0.818);
		border: 1px solid rgba(170, 170, 170, 0.818);
		padding: 16px;
	}
	.item:hover {
		border: 1px solid var(--color-theme-1);
	}

	.itemIdx {
		color: var(--color-theme-1);
		position: absolute;
		top: -28px;
		right: 10px;
		font-weight: bold;
		opacity: 0.8;
		font-size: 24px;
		font-family: var(--font-mono);
		display: none;
	}
	p {
		text-align: center;
	}

	@media screen and (max-width: 600px) {
		.container {
			flex-direction: column;
		}
		.item {
			width: calc(100% - 32px);
		}
	}
</style>
