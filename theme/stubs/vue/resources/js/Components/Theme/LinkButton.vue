<script setup>
import { Link } from '@inertiajs/inertia-vue3';
import { setButtonColor } from "@/Composables/setButtonColor.js";
const { buttonClasses } = setButtonColor();

const props = defineProps({
    href: {
        type: String,
        required: false,
        default() {
            return "#";
        },
    },
    outlined: {
        type: Boolean,
        required: false,
        default() {
            return false;
        },
    },
    rounded: {
        type: Boolean,
        required: false,
        default() {
            return false;
        },
    },
    elevate: {
        type: Boolean,
        required: false,
        default() {
            return false;
        },
    },
    small: {
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
            return 'default';
        },
    },
});
</script>

<template>
    <Link :href="props.href" class="
      inline-flex
      items-center
      uppercase
      font-bold
      text-xs
      tracking-widest
      transition
      ease-in-out
      duration-150
    " :class="[
        props.rounded ? 'rounded-full' : 'rounded',
        props.elevate ? 'shadow-lg' : '',
        props.small ? 'px-2 py-1' : 'px-4 py-3',
        buttonClasses(outlined, color)
    ]">
    <slot />
    </Link>
</template>