<script>
	export let score;
</script>

<article
	id="scores"
	title="scores"
	class="scores w-[220px] flex items-center content-stretch h-100"
>
	<span
		class="a {score === 'a'
			? 'selected'
			: ''} bg-[#86bd2b] rounded-tl-[10px] rounded-bl-[10px] flex-grow text-center text-gray-200/50 flex items-center justify-center text-[24px] font-bold"
	>
		A</span
	>
	<span
		class="b {score === 'b'
			? 'selected'
			: ''}bg-[#facc04] l-[30px] flex-grow text-center text-gray-200/50 flex items-center justify-center text-[24px] font-bold"
		>B</span
	>
	<span
		class="c {score === 'c'
			? 'selected'
			: ''} bg-[#86bd2b] l-[81px] flex-grow text-center text-gray-200/50 flex items-center justify-center text-[24px] font-bold"
		>C</span
	>
	<span
		class="d {score === 'd'
			? 'selected'
			: ''} bg-[#ef8102] l-[123px] flex-grow text-center text-gray-200/50 flex items-center justify-center text-[24px] font-bold"
		>D</span
	>
	<span
		class="e {score === 'e'
			? 'selected'
			: ''} bg-[#e63c07] l-[163px] rounded-tr-[20px] rounded-br-[20px] flex-grow text-center text-gray-200/50 flex items-center justify-center text-[24px] font-bold"
		>E</span
	>
</article>

<style>
	.container .scores-container .scores .selected {
		font-size: 46px;
		height: 66px;
		border-radius: 24px;
		color: white;
		border: 4px solid white;
	}
</style>
