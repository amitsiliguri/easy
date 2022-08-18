<script setup>
import { setButtonColor } from "@/Composables/setButtonColor.js";
const {buttonClasses} = setButtonColor();

const props = defineProps({
  type: {
    type: String,
    default() {
      return "submit";
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

// 'bg-blue-500 text-gray-100 hover:text-white hover:bg-blue-600 dark:hover:bg-blue-400 active:bg-blue-700 dark:active:bg-blue-300'
// 'bg-yellow-500 text-gray-100 hover:text-white hover:bg-yellow-600 dark:hover:bg-yellow-400 active:bg-yellow-700 dark:active:bg-yellow-300'
// 'bg-rose-500 text-gray-100 hover:text-white hover:bg-rose-600 dark:hover:bg-rose-400 active:bg-rose-700 dark:active:bg-rose-300'
// 'bg-lime-500 text-gray-100 hover:text-white hover:bg-lime-600 dark:hover:bg-lime-400 active:bg-lime-700 dark:active:bg-lime-300'
// 'text-gray-800 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 active:bg-gray-200 dark:active:bg-gray-700 border border-gray-800 dark:border-gray-100'
// 'text-blue-500 border border-blue-500 hover:bg-blue-500/10 active:bg-blue-500/20'
// 'text-yellow-500 border border-yellow-500 hover:bg-yellow-500/10 active:bg-yellow-500/20'
// 'text-rose-500 border border-rose-500 hover:bg-rose-500/10 active:bg-rose-500/20'
// 'text-lime-500 border border-lime-500 hover:bg-lime-500/10 active:bg-lime-500/20'
// 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 active:bg-gray-300 dark:active:bg-gray-600'     

</script>

<template>
  <button
    :type="props.type"
    class="
      inline-flex
      items-center
      uppercase
      font-bold
      text-xs
      tracking-widest
      transition
      ease-in-out
      duration-150
    "
    :class="[
      props.rounded ? 'rounded-full' : 'rounded',
      props.elevate ? 'shadow-lg' : '',
      props.small ? 'px-2 py-1' : 'px-4 py-3',
      buttonClasses(outlined, color)
    ]"
  >
    <slot />
  </button>
</template>
