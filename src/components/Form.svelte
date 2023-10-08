<script>
	import Button from '@components/Button.svelte';
	import Input from '@components/Input.svelte';

</script>

<form action="" class="fixed z-10 bottom-0 left-0 w-full py-4 px-8 bg-gray-50 ">
	<div class="flex flex-col justify-center">
		<Input placeholder="Search"/>
		<div class="flex flex-row justify-between gap-x-2 my-4">
			<Button text="Validate"/>
			<Button text="Read Barcode"/>
		</div>
	</div>


</form>
