<script lang="ts">
	import Salt from './Salt.svelte'
	import Sugar from './Sugar.svelte'
	import Fish from './Fish.svelte'
	import Cheese from './Cheese.svelte'
	export let info: [any];
	export let progress: Boolean = false;
	$: value = Object.entries(info);

	function getIcon(value: string) {
		let icon;

		switch (value) {
			case "Carbs":
				icon = Fish
				break;
			case "Sugars":
				icon = Sugar
				break;
			case "Salt":
				icon = Salt
				break;
			default:
				icon = Cheese
				break;
		}
		return icon
	}
</script>

<article
	class="py-4 flex flex-col gap-y-2 items-left justify-start flex-grow w-full mx-auto"
>
	{#each value as val}
		<div
			class="px-4 py-2 flex flex-col h-20 dark:bg-gray-800 bg-white shadow-lg rounded-md"
		>
			<div class="flex flex-row justify-between dark:bg-gray-800 basis-2">
				<div class="flex items-center">
					<div class="icon mr-2">
						<svelte:component this={getIcon(val[0])} />
					</div>
					<p class="text-gray-700 text-lg dark:text-gray-50">
						{val[0]}
					</p>
				</div>
				<div class="flex justify-start">
					<p
						class="my-1 ml-2 text-base font-bold text-left text-gray-800 dark:text-white"
					>
						{val[1]}
					</p>
				</div>
			</div>
			<!-- {#if progress} -->
			<div class="">
			<div class=" my-2 relative bg-gray-200 rounded w-full">
				<div class=" h-2 bg-green-500 rounded" />
			</div>
			</div>
			<!-- {/if} -->
		</div>
	{/each}
</article>
