<script>
	export let scores;
	$: score = scores?.product.nutriscore_data;

</script>

<section class="flex flex-col  h-[120px] font-bold bg-white rounded-3xl ">
	<div class="scores-container relative h-[72px] rounded-3xl mx-1">
		<div>
		<h2 class="title text-[#7e7e7e] text-xl my-3 mx-4 uppercase">{scores.product.product_name}</h2>
		</div>
		<section class="macro w-100 flex flex-row flex-grow content-between ">
			<div>
			<h3>Energy</h3>
			<span>{score.energy}</span>
			</div>
			<div>
			<h3>Fiber</h3>
			<span>{score.fiber}</span>
			</div>
			<div>
			<h3>Proteins</h3>
			<span>{score.proteins}</span>
			</div>
			<div>
			<h3>Fat</h3>
			<span>{score.sugars}</span>
			</div>
		</section>
		<div id="scores" title="scores" class="scores w-[220px] flex items-center content-stretch h-100">
			<span class="a {score.grade === 'a' ? 'selected' : ''} bg-[#86bd2b] rounded-tl-[20px] rounded-bl-[20px] flex-grow text-center text-gray-200/50 flex items-center justify-center text-[40px] font-bold">
				A</span>
			<span class="b {score.grade === 'b' ? 'selected' : ''}bg-[#facc04] l-[30px] flex-grow text-center text-gray-200/50 flex items-center justify-center text-[40px] font-bold">B</span>
			<span class="c {score.grade === 'c' ? 'selected' : ''} bg-[#86bd2b] l-[81px] flex-grow text-center text-gray-200/50 flex items-center justify-center text-[40px] font-bold">C</span>
			<span class="d {score.grade === 'd' ? 'selected' : ''} bg-[#ef8102] l-[123px] flex-grow text-center text-gray-200/50 flex items-center justify-center text-[40px] font-bold">D</span>
			<span class="e {score.grade === 'e' ? 'selected' : ''} bg-[#e63c07] l-[163px] rounded-tr-[20px] rounded-br-[20px] flex-grow text-center text-gray-200/50 flex items-center justify-center text-[40px] font-bold">E</span>
		</div>
	</div>
</section>

<style>
	.container .scores-container .scores .selected {
		font-size: 70px;
		height: 90px;
		border-radius: 26px;
		color: white;
		border: 4px solid white;
	}
</style>
