<script setup>
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
</script>

<template>
    <label class="text-sm bg-inherit px-2" :class="{ 'text-blue-400': active, '': !active }">
        {{ props.label }}
    </label>
</template>