<script lang="ts">
    export let placeholder: string = '';
    export let value: string = '';
</script>

<div class=" relative">
	<input
		bind:value
		type="text" name="input"
		id="rounded-email"
		class="rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
		placeholder={placeholder}
	/>
</div>
