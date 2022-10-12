<script setup>
import { useInputStyle } from "@/Composables/useInputStyle.js";
const { setLabelActiveColor } = useInputStyle();
const props = defineProps({
    label: {
        type: String,
        default() {
            return "";
        },
    },
    active: {
        type: Boolean,
        default() {
            return false;
        },
    },
});

// text-blue-600 dark:text-blue-400 
// text-amber-600 dark:text-amber-400 
// text-rose-600 dark:text-rose-400 
// text-green-600 dark:text-green-400 
// text-zinc-600 dark:text-zinc-400 
// text-zinc-600 dark:text-zinc-400
</script>

<template>
    <label class="text-sm bg-inherit px-2 cursor-pointer" :class="[ active ? setLabelActiveColor : '']">
        {{ props.label }}
    </label>
</template>