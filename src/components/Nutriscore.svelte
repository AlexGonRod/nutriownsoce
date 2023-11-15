<script>
	import Loader from '@components/Loader.svelte';
	import NutritionCard from '@components/NutritionCard.svelte';
	import NutriscoreLevel from '@components/NutriscoreLevel.svelte';
	import Chart from '@components/Chart.svelte';
	import Qrcode from '@components/Qrcode.svelte';
	import { product, scores, isScanning } from '../lib/store';

	$: values = {
		Carbs:
			$scores?.scoresInfo?.nutriments?.carbohydrates +
			$scores?.scoresInfo?.nutriments?.carbohydrates_unit,
		Energy:
			$scores?.scoresInfo?.nutriments?.energy +
			$scores?.scoresInfo?.nutriments?.energy_unit,
		Fats:
			$scores?.scoresInfo?.nutriments?.fat +
			$scores?.scoresInfo?.nutriments?.fat_unit,
		Sugars:
			$scores?.scoresInfo?.nutriments?.sugars +
			$scores?.scoresInfo?.nutriments?.sugars_unit,
		Proteins:
			$scores?.scoresInfo?.nutriments?.proteins +
			$scores?.scoresInfo?.nutriments?.proteins_unit,
		Salt:
			$scores?.scoresInfo?.nutriments?.salt +
			$scores?.scoresInfo?.nutriments?.salt_unit,
	};
	$: levels = $scores?.scoresInfo?.nutrient_levels;
	$: percentage = {
		Fats: $scores?.scoresInfo?.nutriscore_product?.saturated_fat_points,
		Sugars: $scores?.scoresInfo?.nutriscore_product?.sugars_points,
		Salt: $scores?.scoresInfo?.nutriscore_product?.sodium_points,
	};
	$: image = $product?.productInfo?.image_thumb_url;
	$: brand = $product?.productInfo?.brands;
	$: name = $product?.productInfo?.product_name;
</script>


{#if $isScanning}
	<Qrcode />
{/if}
{#if Object.values($product).length && Object.values($scores).length}
	{#await $product}
		<Loader />
	{:then}
		<section
			class="flex flex-col h-[120px] font-bold bg-white rounded-3xl"
		>
			<div
				class="scores-container relative h-[72px] rounded-3xl mx-1"
			>
				<div class="flex flex-row justify-start gap-4">
					<img
						alt="thumbnail"
						class="block max-w-[15%] rounded-lg object-cover object-center bg-blend-overlay"
						width="100%"
						src={image}
					/>
					<header class="flex flex-col">
						<h2
							class="title text-[#7e7e7e] text-xl uppercase text-left"
						>
							{name}
						</h2>
						<h3 class="text-sm font-normal">{brand}</h3>
						<Chart
							score={$scores?.scoresInfo?.nutrition_grades}
						/>
					</header>
				</div>
				<section
					class="macro w-100 flex flex-wrap content-between justify-between"
				>
					<NutritionCard info={values} progress={false} />
					<NutriscoreLevel
						title="Macronutrients"
						{levels}
						{percentage}
					/>
				</section>
			</div>
		</section>
	{/await}
{/if}
