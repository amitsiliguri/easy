<script setup>
import { reactive, onMounted, watch } from "vue";
const props = defineProps({
    modelValue: {
        type: Object,
        required: true,
    },
    min: {
        type: Number,
        required: false,
        default() {
            return 0;
        },
    },
    max: {
        type: Number,
        required: false,
        default() {
            return 100;
        },
    },
    step: {
        type: Number,
        required: false,
        default() {
            return 1;
        },
    }
});

const emit = defineEmits(["update:modelValue"]);

const input = reactive({
    range: {
        min: 0,
        max: 0,
    },
    minthumb: 0,
    maxthumb: 0,
});

onMounted(() => {
    input.range.min = props.modelValue.min;
    input.range.max = props.modelValue.max;

});

const trigger = () => {
    input.range.max = Math.max(input.range.max, input.range.min);
    input.range.min = Math.min(input.range.min, input.range.max);
    input.maxthumb = 100 - ((input.range.max - props.min) / (props.max - props.min)) * 100;
    input.minthumb = ((input.range.min - props.min) / (props.max - props.min)) * 100;
};

const emitValue = () => {
    emit("update:modelValue", input.range);
};

watch(input.range, () => {
    trigger()
    emitValue()
});
</script>
        
   
<template>
    <fieldset class="my-4 flex flex-col ">
        <div class="relative w-full">
            <input type="range"
                class="absolute pointer-events-none appearance-none z-20 h-0.5 w-full opacity-0 cursor-pointer"
                :step="props.step" :min="props.min" :max="props.max" v-model="input.range.min">
            <input type="range"
                class="absolute pointer-events-none appearance-none z-20 h-0.5 w-full opacity-0 cursor-pointer"
                :step="props.step" :min="props.min" :max="props.max" v-model="input.range.max">
            <div class="relative z-10 h-0.5">
                <div class="absolute z-10 left-0 right-0 bottom-0 top-0 rounded-md bg-zinc-300 dark:bg-zinc-700"></div>
                <div class="absolute z-20 top-0 bottom-0 rounded-md bg-blue-500"
                    :style="'right:' + input.maxthumb + '%; left:' + input.minthumb + '%'"></div>
                <div class="absolute z-30  w-4 h-4 top-0 left-0 bg-blue-500 rounded-full -mt-2 -ml-2 shadow"
                    :style="'left: ' + input.minthumb + '%'"></div>
                <div class="absolute z-30 w-4 h-4 top-0 right-0 bg-blue-500 rounded-full -mt-2 -mr-2 shadow"
                    :style="'right: ' + input.maxthumb + '%'"></div>
            </div>
        </div>
        <div class="flex justify-between items-center py-5">
            <input type="number" :min="props.min" :max="input.range.max"
                class="bg-transparent block w-full border-gray-400 hover:border-gray-900 dark:hover:border-gray-100 focus:border-blue-600 dark:focus:border-blue-400 rounded w-24"
                v-model="input.range.min">
            <input type="number" :min="input.range.min" :max="props.max"
                class="bg-transparent block w-full border-gray-400 hover:border-gray-900 dark:hover:border-gray-100 focus:border-blue-600 dark:focus:border-blue-400 rounded w-24"
                v-model="input.range.max">
        </div>
    </fieldset>
</template>


<style scoped>
input[type="range"]::-webkit-slider-thumb {
    pointer-events: all;
    width: 24px;
    height: 24px;
    -webkit-appearance: none;
}
</style> 