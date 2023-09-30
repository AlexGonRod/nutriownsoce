<script lang="ts">
	export let info = [];
	export let progress: Boolean = false;
	$: value = Object.entries(info);
	// $: console.log(info);
</script>

<div
	class="py-4 flex flex-row gap-2 flex-wrap items-center justify-left w-full mx-auto"
>
	{#each value as val}
		<div
			class="p-4 bg-white shadow-lg rounded-2xl w-36 dark:bg-gray-800 flex-grow"
		>
			<div class="flex items-center">
				<p class="ml-2 text-gray-700 text-md dark:text-gray-50">
					{val[0]}
				</p>
			</div>
			<div class="flex flex-col justify-start">
				<p
					class="my-4 ml-2 text-2xl font-bold text-left text-gray-800 dark:text-white"
				>
					{val[1]}
				</p>
				{#if progress}
					<div class="relative h-2 bg-gray-200 rounded w-28">
						<div
							class="absolute top-0 left-0 w-2/3 h-2 bg-green-500 rounded"
						/>
					</div>
				{/if}
			</div>
		</div>
	{/each}
</div>
