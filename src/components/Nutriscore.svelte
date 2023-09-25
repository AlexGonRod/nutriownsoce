<script>
	import Loader from '@components/Loader.svelte';
	import NutritionCard from '@components/NutritionCard.svelte';
	import NutriscoreLevel from '@components/NutriscoreLevel.svelte';
	import Chart from '@components/Chart.svelte';

	export let scores;
	// $: console.log(scores.product.nutrition_grades);
	$: values = {
		Carbs: scores?.product.nutriments.carbohydrates,
		Eºnergy: scores?.product.nutriments.energy,
		Fats: scores?.product.nutriments.fat,
		Sugars: scores?.product.nutriments.sugars,
		Proteins: scores?.product.nutriments.proteins,
	};
</script>

{#await scores}
	<Loader />
{:then}
	<section class="flex flex-col h-[120px] font-bold bg-white rounded-3xl">
		<div class="scores-container relative h-[72px] rounded-3xl mx-1">
			<div>
				<h2 class="title text-[#7e7e7e] text-xl my-3 mx-4 uppercase">
					{scores.product.product_name}
				</h2>
			</div>
			<section
				class="macro w-100 flex flex-wrap content-between justify-between"
			>
				<Chart score={scores.product.nutrition_grades}/>
				<NutritionCard info={values} />
				<NutriscoreLevel title="Macronutrients"/>
			</section>
		</div>
	</section>
{/await}

