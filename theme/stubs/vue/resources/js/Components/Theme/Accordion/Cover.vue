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
    defaultShow: {
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
});

const activeItemKey = ref(props.activeItemKey)

const setActiveItemKey = (key) => {
    activeItemKey.value = key
};

provide('activeItemKey', activeItemKey)
provide('alwaysOpen', props.defaultShow)
provide('setActiveItemKey', setActiveItemKey)

</script>

<template>
    <div class="rounded-md bg-white dark:bg-zinc-800" :class="[props.outlined ? setOutline : 'material-shadow']">
        <slot />
    </div>
</template>