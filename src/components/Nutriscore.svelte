<script>
	import Loader from '@components/Loader.svelte';
	import NutritionCard from '@components/NutritionCard.svelte';
	import NutriscoreLevel from '@components/NutriscoreLevel.svelte';
	import Chart from '@components/Chart.svelte';

	export let scores;

	export let data;
	$: values = {
		Carbs: scores?.product.nutriments.carbohydrates + scores?.product.nutriments.carbohydrates_unit,
		Energy: scores?.product.nutriments.energy + scores?.product.nutriments.energy_unit,
		Fats: scores?.product.nutriments.fat + scores?.product.nutriments.fat_unit,
		Sugars: scores?.product.nutriments.sugars + scores?.product.nutriments.sugars_unit,
		Proteins: scores?.product.nutriments.proteins + scores?.product.nutriments.proteins_unit,
		Salt: scores?.product.nutriments.salt + scores?.product.nutriments.salt_unit,
	};
	$: levels = scores?.product.nutrient_levels;
	$: percentage = {
		Fats: scores?.product.nutriscore_data.saturated_fat_points,
		Sugars: scores?.product.nutriscore_data.sugars_points,
		Salt: scores?.product.nutriscore_data.sodium_points,
	};
	$: image = data?.product.image_thumb_url;
	$: brand = data?.product.brands;
</script>

{#await scores}
	<Loader />
{:then}
	<section class="flex flex-col h-[120px] font-bold bg-white rounded-3xl">
		<div class="scores-container relative h-[72px] rounded-3xl mx-1">
			<div class="flex flex-row justify-start gap-4">
				<img
					alt="thumbnail"
					class="block max-w-[15%] rounded-lg object-cover object-center bg-blend-overlay"
					src={image}
				/>
				<div class="flex flex-col">
					<h2
						class="title text-[#7e7e7e] text-xl uppercase text-left"
					>
						{data.product.product_name}
					</h2>
					<span class="text-sm font-normal">{brand}</span>
					<Chart score={scores.product.nutrition_grades} />
				</div>
			</div>
			<section
				class="macro w-100 flex flex-wrap content-between justify-between"
			>
				<NutritionCard info={values} progress={false} />
				<NutriscoreLevel title="Macronutrients" {levels} {percentage} />
			</section>
		</div>
	</section>
{/await}
