<script setup>
import { inject, provide, ref, watch, } from 'vue'
import { useStyle } from "@/Composables/useStyle.js";
const {
    setBorderColor
} = useStyle();

const props = defineProps({
    itemKey: {
        type: [Number, String],
        required: false,
        default() {
            return undefined;
        },
    },
    seperated: {
        type: Boolean,
        required: false,
        default() {
            return false;
        },
    },
});

const activeItemKey = inject('activeItemKey')
const alwaysOpen = inject('alwaysOpen')
const setActiveItemKey = inject('setActiveItemKey')

const itemKey = ref(props.itemKey ? props.itemKey : Math.random().toString(36).substring(2, 9))
const visible = ref(activeItemKey.value === itemKey.value)

watch(activeItemKey, () => {
    visible.value = activeItemKey.value === itemKey.value
});

const toggleVisibility = () => {
    visible.value = !visible.value
    !alwaysOpen && visible && setActiveItemKey(itemKey.value)
}

provide('visible', visible)
provide('toggleVisibility', toggleVisibility)

//border-blue-500
//border-amber-500
//"border-rose-500
//border-green-500
//border-transparent
//border-zinc-200
</script>

<template>
    <div :class="[props.seperated ? 'border-b ' + setBorderColor : '']">
        <slot />
    </div>
</template>