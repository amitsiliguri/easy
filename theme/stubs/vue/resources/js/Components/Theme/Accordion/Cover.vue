<script setup>
import { provide, ref } from 'vue'
import EasyCard from "@/Components/Theme/Card.vue";
import { useStyle } from "@/Composables/useStyle.js";
const {
    setOutline,
} = useStyle();

const props = defineProps({
    activeItemKey: {
        type: [String, Number],
        required: false
    },
    alwaysOpen: {
        type: Boolean,
        default: false
    },
    outlined: {
        type: Boolean,
        required: false,
        default() {
            return false;
        },
    },
    flat: {
        type: Boolean,
        required: false,
        default() {
            return false;
        },
    },
    transparent: {
        type: Boolean,
        required: false,
        default() {
            return false;
        },
    },
});

const activeItemKey = ref(props.activeItemKey)

const setActiveItemKey = (key) => {
    activeItemKey.value = key
};

provide('activeItemKey', activeItemKey)
provide('alwaysOpen', props.alwaysOpen)
provide('setActiveItemKey', setActiveItemKey)

</script>

<template>
    <div class="rounded-md"
        :class="[props.outlined ? setOutline : (props.flat) ? '' : 'material-shadow', props.transparent ? '' : 'bg-white dark:bg-zinc-800']">
        <slot />
    </div>
</template>