<script setup>
import { onMounted } from "vue";
import { useStyle } from "@/Composables/useStyle.js";
import EasyButton from "@/Components/Theme/Button.vue";
const { colorType, isOutlined, radiusType, getSize, setBorder, setBackground, setRadius, setSize, getPadding, setPadding } = useStyle();

const props = defineProps({
  elevate: {
    type: Boolean,
    required: false,
    default() {
      return false;
    },
  },
  outlined: {
    type: Boolean,
    required: false,
    default() {
      return false;
    },
  },
  closable: {
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
      return "default";
    },
  },
  curve: {
    type: String,
    required: false,
    default() {
      return "default";
    },
  },
  size: {
    type: String,
    required: false,
    default() {
      return "default";
    },
  },
});

onMounted(() => {
    colorType.value = props.color
    isOutlined.value = props.outlined
    radiusType.value = props.curve
    getSize.value = props.size
    getPadding.value = "sm-l-padding"
});
// "hover:outline-blue-600 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-600/5"
// "hover:outline-yellow-600 hover:text-yellow-600 dark:hover:text-yellow-400 hover:bg-yellow-600/5"
// "hover:outline-rose-600 hover:text-rose-600 dark:hover:text-rose-200 hover:bg-rose-600/5"
// "hover:outline-lime-600 hover:text-lime-600 dark:hover:text-lime-400 hover:bg-lime-600/5"
// "outline-transparent"
// hover:outline-zinc-600 hover:text-zinc-600 dark:hover:text-zinc-400 hover:bg-zinc-600/5

//outline-blue-500 text-blue-500
//outline-yellow-500 text-yellow-500
//outline-rose-500 text-rose-500
//outline-lime-500 text-lime-500
//outline-zinc-200 dark:outline-zinc-900 text-zinc-200 dark:text-zinc-900
// outline-zinc-500 text-zinc-500

//bg-blue-500 text-gray-200
//bg-yellow-500 text-gray-200
//bg-rose-500 text-white
//bg-lime-500 text-white
//bg-transpanet
//bg-zinc-100 dark:bg-zinc-700 text-zinc-600 dark:text-zinc-400

// hover:bg-blue-600 dark:hover:bg-blue-400 hover:text-white
// hover:bg-yellow-600 dark:hover:bg-yellow-400 hover:text-white
// hover:bg-rose-600 dark:hover:bg-rose-400 hover:text-white
// hover:bg-lime-600 dark:hover:bg-lime-400 hover:text-white
// hover:bg-zinc-900/5 dark:hover:text-white hover:text-gray-600
// hover:bg-zinc-200 hover:text-gray-600 dark:bg-neutral-900 dark:hover:text-white

//rounded-none
//rounded
//rounded-full

// text-xs min-w-[22px] min-h-[22px] px-1
// text-sm min-w-[32px] min-h-[32px] px-2
// text-base min-w-[48px] min-h-[48px] px-3

// p-1 p-2 p-3 px-1 px-2 px-3 pl-1 pl-2 pl-3 pr-1 pr-2 pr-3

</script>

<template>
    <div class="inline-flex items-center justify-center" :class="[props.elevate ? 'material-shadow' : '', (isOutlined) ? setBorder : setBackground, setRadius, setSize, setPadding ]">
        <slot>Your content</slot>
        <EasyButton v-if="props.closable" :color="props.color" :curve="props.curve" :size="props.size" icon="close" padding="sm-x-padding" class="ml-1"/>
    </div>
</template>