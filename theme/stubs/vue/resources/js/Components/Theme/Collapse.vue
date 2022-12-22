<script setup>
import { onMounted, onUnmounted, reactive, ref, watch } from "vue";
const props = defineProps({
    show: {
        type: Boolean,
        required: false,
        default() {
            return false;
        },
    },
});

let expansionBodyHeight = 0
let expansionBodyStyle = reactive({})
const innerBody = ref(null)

onMounted(() => {
    detectHeight()
    window.addEventListener("resize", detectHeight);
})

onUnmounted(() => {
    window.removeEventListener("resize", detectHeight);
})

watch(() => props.show, (newValue) => {
    setHeight(newValue)
});

const detectHeight = () => {
    expansionBodyHeight = innerBody.value.clientHeight;
    setHeight(props.show)
}

const setHeight = (isAllowed) => {
    expansionBodyStyle.height = (isAllowed) ? expansionBodyHeight + 'px' : 0 + 'px'
}
</script>

<template>
    <div class="w-full duration-100 relative overflow-hidden" :style="expansionBodyStyle">
        <div ref="innerBody">
            <slot />
        </div>
    </div>
</template>