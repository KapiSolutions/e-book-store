<script>
	import blik from '$lib/assets/images/paymentMethods/blik.svg';
	import p24 from '$lib/assets/images/paymentMethods/p24.svg';
	import klarna from '$lib/assets/images/paymentMethods/klarna.svg';
	import visa from '$lib/assets/images/paymentMethods/visa.svg';
	import mastercard from '$lib/assets/images/paymentMethods/mastercard.svg';
</script>

<div>
	<img src={mastercard} alt="mastercard" />
	<img src={visa} alt="visa" />
	<img src={blik} alt="Blik" />
	<img src={p24} alt="p24" />
	<img src={klarna} alt="klarna" />
</div>

<style>
	div {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 12px;
		width: 100%;
	}
</style>
