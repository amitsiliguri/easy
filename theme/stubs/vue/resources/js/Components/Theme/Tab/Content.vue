<script setup>
const props = defineProps({
    active: {
        type: Boolean,
        required: false,
        default() {
            return false;
        },
    }
});
</script>

<template>
    <Transition enter-from-class="translate-x-[150%] opacity-0" leave-to-class="-translate-x-[150%] opacity-0"
        enter-active-class="transition duration-300" leave-active-class="transition duration-300">
        <div v-show="props.active" class="w-full flex-none">
            <slot />
        </div>
    </Transition>
</template>