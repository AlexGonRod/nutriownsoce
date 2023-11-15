<script lang="ts">
	import Button from '@components/Button.svelte';
	import { addElementvalues, setScanning } from '../lib/store';

	let input = '';

	async function submit(e: SubmitEvent) {
		const formData = new FormData(e.currentTarget as HTMLFormElement);
		const response = await fetch('/api/getProduct', {
			method: 'POST',
			body: formData,
		});
		const { productInfo, scores } = await response.json();
		addElementvalues(productInfo, scores);
		input = '';
	}

</script>

<div class="fixed z-10 bottom-0 left-0 w-full py-4 px-8 bg-gray-50">
	<form on:submit|preventDefault={submit}>
		<div class="flex flex-col justify-center">
			<input
				type="text"
				id="product"
				name="product"
				class="rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
				placeholder="Search"
				bind:value={input}
			/>
		</div>
		<div class="flex flex-row justify-between my-4">
			<Button text="Send" />
		</div>
	</form>
	<div class="flex flex-row justify-center my-4">
		<Button onClick={() => setScanning(true)} text="Read barcode" />
	</div>
</div>
