<script lang="ts">
	export let hide: boolean = false;
</script>

<p class:hide>
	<small>ZAKUP JEST JEDNOZNACZNY Z AKCEPTACJĄ <a href="/regulamin#main">REGULAMINU.</a></small>
</p>

<style>
	p {
		margin-top: 32px;
        text-align: center;
	}
	.hide {
		display: none;
	}
	@media screen and (max-width: 600px) {
		p {
			margin-top: 16px;
		}
	}
</style>
