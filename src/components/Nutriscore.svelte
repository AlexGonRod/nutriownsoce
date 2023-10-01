<script>
	import Loader from '@components/Loader.svelte';
	import NutritionCard from '@components/NutritionCard.svelte';
	import NutriscoreLevel from '@components/NutriscoreLevel.svelte';
	import Chart from '@components/Chart.svelte';

	export let scores;
	$: console.log(scores)
	export let data;
	$: values = {
		Carbs: scores?.product.nutriments.carbohydrates,
		Energy: scores?.product.nutriments.energy,
		Fats: scores?.product.nutriments.fat,
		Sugars: scores?.product.nutriments.sugars,
		Proteins: scores?.product.nutriments.proteins,
		Salt: scores?.product.nutriments.salt,
	};
	$: levels =  scores?.product.nutrient_levels;
	$: percentage = {
		Fats: scores?.product.nutriscore_data.saturated_fat_points,
		Sugars: scores?.product.nutriscore_data.sugars_points,
		Salt: scores?.product.nutriscore_data.sodium_points,
		// Energy: scores?.product.nutriscore_data.energy_points,
		// Fiber: scores?.product.nutriscore_data.fiber_points,
		// Proteins: scores?.product.nutriscore_data.proteins_points,
	};
	$: image = data?.product.image_thumb_url
	$: brand = data?.product.brands
	// $: console.log(scores.product.selected_images.front.thumb.en);
</script>

{#await scores}
	<Loader />
{:then}
	<section class="flex flex-col h-[120px] font-bold bg-white rounded-3xl">
		<div class="scores-container relative h-[72px] rounded-3xl mx-1">
			<div class="flex flex-row justify-start gap-4">
				<img
				alt="thumbnail"
				class="block w-[25%] rounded-lg object-cover object-center bg-blend-overlay"
				src={image} />
				<div class="flex flex-col">
					<h2 class="title text-[#7e7e7e] text-xl  uppercase text-left">
						{data.product.product_name}
					</h2>
					<span class="text-sm font-normal ">{brand}</span>
					<Chart score={scores.product.nutrition_grades}/>
				</div>
			</div>
			<section class="macro w-100 flex flex-wrap content-between justify-between">
				<NutritionCard info={values} progress={false}/>
				<NutriscoreLevel title="Macronutrients" {levels} percentage={percentage} />
			</section>
		</div>
	</section>
{/await}

