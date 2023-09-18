<script>
	import Loader from '@components/Loader.svelte';
	import Button from '@components/Button.svelte';
	import Input from '@components/Input.svelte';
	import Nutriscore from '@components/Nutriscore.svelte';
	import api from '../lib/api';

	let promise = null;

	async function call() {
		const data = await api();

		return data
	}
</script>

<form action="">
	<Input />
    <Button />
	<!-- {#if promise === null}
	{:else} -->
		{#await call()}
			<Loader />
		{:then scores}
			<Nutriscore scores={scores} />
		{/await}
	<!-- {/if} -->
</form>
