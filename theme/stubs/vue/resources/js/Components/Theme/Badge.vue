<script setup>
import { computed} from 'vue';

const props = defineProps({
    align: {
        type: String,
        required: false,
        default: 'left'
    },
    bordered: {
        type: Boolean,
        required: false,
        default() {
            return false
        }
    }
});
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
        <span 
        class="absolute h-[20px] min-w-[20px] rounded-full bg-blue-400 inline-flex items-center justify-center" 
        :style="alignmentClasses"
        :class="{'border-2 border-white': bordered}"
        > 
            <slot name="badgeContent">0</slot>
        </span>
    </span>
</template>