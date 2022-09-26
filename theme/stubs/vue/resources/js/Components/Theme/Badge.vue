<script setup>
import { computed, onMounted } from 'vue';
import { useStyle } from "@/Composables/useStyle.js";
const { colorType, isOutlined, setBorder, setBackground } = useStyle();
const props = defineProps({
    align: {
        type: String,
        required: false,
        default: 'left'
    },
    outlined: {
        type: Boolean,
        required: false,
        default() {
            return false;
        },
    },
    color: {
        type: String,
        required: false,
        default() {
            return "";
        },
    },
});

onMounted(() => {
  colorType.value = props.color
  isOutlined.value = props.outlined
})

const alignmentClasses = computed(() => {
    if (props.align === 'left') {
        return 'inset: auto calc(100% - 12px) calc(100% - 12px) auto;';
    } else {
        return 'inset: auto auto calc(100% - 12px) calc(100% - 12px);';
    }
});
</script>

<template>
    <span class="relative inline-block">
        <slot>
            Main Content
        </slot>
        <span class="absolute h-[20px] min-w-[20px] rounded-full inline-flex items-center justify-center"
            :style="alignmentClasses" 
            :class="[
                (isOutlined) ? setBorder : setBackground,
                (isOutlined) ? 'bg-white dark:bg-zinc-900' : '',
                ]">
            <slot name="badgeContent">0</slot>
        </span>
    </span>
</template>