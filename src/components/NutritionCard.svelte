<script>
	export let info;
	$: value = Object.entries(info);
	$: console.log(info);
</script>

<div class="py-4 flex flex-row flex-wrap items-center justify-between w-full mx-auto">
	{#each value as val}
		<div class="my-4 p-4 bg-white shadow-lg rounded-2xl w-36 dark:bg-gray-800">
			<div class="flex items-center">
				<p class="ml-2 text-gray-700 text-md dark:text-gray-50">
					{val[0]}
				</p>
			</div>
			<div class="flex flex-col justify-start">
				<p
					class="my-4 text-4xl font-bold text-left text-gray-800 dark:text-white"
				>
					{val[1]}
				</p>
				<div class="relative h-2 bg-gray-200 rounded w-28">
					<div
						class="absolute top-0 left-0 w-2/3 h-2 bg-green-500 rounded"
					/>
				</div>
			</div>
		</div>
	{/each}
</div>
