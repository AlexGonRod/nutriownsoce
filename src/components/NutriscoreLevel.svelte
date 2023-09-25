<script>
    export let level;
    export let title;
</script>

<div class="relative p-4 overflow-hidden text-gray-700 bg-white shadow-lg rounded-xl w-60 md:w-72 dark:bg-gray-800 dark:text-gray-100">
    <div class="w-full">
        <p class="mb-4 text-2xl font-light text-gray-700 dark:text-white">
            {title}
        </p>
        <div class="flex items-center justify-between text-sm text-gray-400">
            <p>
                Carbohidrates
            </p>
            <p>
                6/10
            </p>
        </div>
        <div class="w-full h-2 mb-4 bg-indigo-100 rounded-full">
            <div class="w-2/3 h-full text-xs text-center text-white bg-indigo-400 rounded-full">
            </div>
        </div>
        <div class="flex items-center justify-between text-sm text-gray-400">
            <p>
                Fats
            </p>
            <p>
                2/8
            </p>
        </div>
        <div class="w-full h-2 mb-4 bg-blue-100 rounded-full">
            <div class="w-1/4 h-full text-xs text-center text-white bg-blue-400 rounded-full">
            </div>
        </div>
        <div class="flex items-center justify-between text-sm text-gray-400">
            <p>
                Proteines
            </p>
            <p>
                8/8
            </p>
        </div>
        <div class="w-full h-2 bg-pink-100 rounded-full">
            <div class="w-full h-full text-xs text-center text-white bg-pink-400 rounded-full">
            </div>
        </div>
    </div>
</div>
