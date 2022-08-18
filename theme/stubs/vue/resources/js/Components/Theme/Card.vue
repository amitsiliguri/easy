<script setup>
const props = defineProps({
    elevate: {
        type: Boolean,
        required: false,
        default() {
            return false
        }
    },
    outlined: {
        type: Boolean,
        required: false,
        default() {
            return false
        }
    },
    bgUrl: {
        type: String,
        required: false,
        default() {
            return ''
        }
    },
});
</script>

<template>
    <div class="rounded-md bg-white dark:bg-gray-800"
        :class="[(props.elevate) ? 'shadow-md' : '', (props.outlined) ? 'border border-gray-200 dark:border-gray-900' : '']">
        <div v-if="$slots.header" class="py-5 px-2 border-b border-gray-200 dark:border-gray-900">
            <slot name="header"></slot>
        </div>
        <div class="py-5 px-2">
            <slot></slot>
        </div>
        <div v-if="$slots.footer" class="py-5 px-2 border-t border-gray-200 dark:border-gray-900">
            <slot name="footer"></slot>
        </div>
    </div>
</template>