<script>
    export let levels;
    export let percentage;
    $: console.log(levels)
    export let title;
    function getColor(level) {
        let color;
        switch (level) {
            case 'high':
                // console.log(level)
                color ='bg-pink-400';
                break;
            case 'low':
                color ='bg-green-400'
                break
            default:
                color = 'bg-indigo-400'
                break;
        }
        return color;
    }
</script>

<div class="relative p-4 overflow-hidden text-gray-700 bg-white shadow-lg rounded-xl w-full md:w-72 dark:bg-gray-800 dark:text-gray-100">
    <div class="w-full">
        <p class="mb-4 text-lg  font-light text-gray-700 dark:text-white">
            {title}
        </p>
            <div class="flex items-center justify-between text-sm text-gray-400">
                <p>
                    Fats
                </p>
                <p>
                    {levels.fat}
                </p>
            </div>
            <div class="w-full h-2 mb-4 bg-white rounded-full">
                <div class="h-full text-xs text-center text-white {getColor(levels.fat)} rounded-full" style="width:{percentage.Fats*10}%">
                </div>
            </div>
        <div class="flex items-center justify-between text-sm text-gray-400">
            <p>
                Salt
            </p>
            <p>
                {levels.salt}
            </p>
        </div>
        <div class="h-2 mb-4 bg-white rounded-full">
            <div class="h-full text-xs text-center text-white {getColor(levels.salt)} rounded-full" style="width:{percentage.Salt*10}%">
            </div>
        </div>
        <div class="flex items-center justify-between text-sm text-gray-400">
            <p>
                Sugars
            </p>
            <p>
                {levels.sugars}
            </p>
        </div>
        <div class="w-full h-2 bg-white rounded-full">
            <div class="h-full text-xs text-center text-white {getColor(levels.sugars)} rounded-full" style="width: {percentage.Sugars*10}%">
            </div>
        </div>
    </div>
</div>
