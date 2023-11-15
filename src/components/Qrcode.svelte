<script>
	import { Html5Qrcode } from 'html5-qrcode';
	import { addElementvalues, isScanning, setScanning } from '../lib/store';
	import { getFromBarcode } from '../pages/api/getProduct';
	import { onMount } from 'svelte';

	let scanning = false;
	let html5Qrcode;

	onMount(init);

	function init() {
		html5Qrcode = new Html5Qrcode('reader');
		start()
	}

	async function submit(value) {
		const response = await getFromBarcode(value)
		if(response.success) {
			const {productInfo, scores} = response
			addElementvalues(productInfo, scores);
			setScanning(false)
		}
	};

	async function start() {
		html5Qrcode.start(
			{ facingMode: 'environment' },
			{
				fps: 10,
				qrbox: { width: 250, height: 250 },
			},
			onScanSuccess,
			onScanFailure,
		);
		scanning = true;
	}

	async function stop() {
		await html5Qrcode.stop();
		scanning = false;
	}

	async function onScanSuccess(decodedText, decodedResult) {
		await submit(decodedText);
		await stop();
	}

	function onScanFailure(error) {
		console.warn(`Code scan error = ${error}`);
	}

</script>

<main>
	<reader id="reader" />
		<!-- {#if scanning}
			<button on:click={stop}>stop</button>
		{:else}
		{/if} -->
		<button on:click={start}>start</button>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 20px;
	}
	reader {
		width: 100%;
		min-height: 500px;
		background-color: black;
	}
</style>
