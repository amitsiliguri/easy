<script setup>
import { onMounted } from "vue";
import { useStyle } from "@/Composables/useStyle.js";
const {
  getTextType,
  setTextColor,
  getBackgroundType,
  setBackground,
  getOutlineType,
  setOutline,
} = useStyle();

const props = defineProps({
  elevated: {
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
  color: {
    type: String,
    required: false,
    default() {
      return "";
    },
  },
  outlineColor: {
    type: String,
    required: false,
    default() {
      return "";
    },
  },
  seperated: {
    type: Boolean,
    required: false,
    default() {
      return false;
    },
  },
});

onMounted(() => {
  getBackgroundType.value = props.color;
  setOutlineType();
  getTextType.value =
    props.color == "transparent" || props.color == "default" ? "" : "white";
});

const setOutlineType = () => {
  getOutlineType.value = props.outlined
    ? props.outlineColor
      ? props.outlineColor === "transparent"
        ? "default"
        : props.outlineColor
      : props.color === "transparent"
      ? ""
      : props.color
    : "transparent";
};
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
//bg-lime-500 text-white dark:outline-zinc-600
//bg-transpanet
//bg-zinc-100 dark:bg-zinc-700 text-zinc-600 dark:text-zinc-400

//hover:bg-blue-600 dark:hover:bg-blue-400 hover:text-white
//hover:bg-yellow-600 dark:hover:bg-yellow-400 hover:text-white
//hover:bg-rose-600 dark:hover:bg-rose-400 hover:text-white
//hover:bg-lime-600 dark:hover:bg-lime-400 hover:text-white
//hover:bg-transpanet
// hover:bg-zinc-200 hover:text-gray-600 dark:bg-neutral-900 dark:hover:text-white

//rounded-none
//rounded
//rounded-full

// text-xs py-1 px-2
// text-base py-1 px-2
// text-base py-2 px-3
</script>

<template>
  <div
    class="rounded-md bg-white dark:bg-zinc-800"
    :class="[props.outlined ? setOutline : 'material-shadow']"
  >
    <div
      v-if="$slots.header"
      class="py-5 px-2 text-lg flex items-center rounded-t-md"
      :class="[setBackground, setTextColor, props.seperated ? 'border-b border-zinc-200 dark:border-zinc-600' : '']"
    >
      <slot name="header"></slot>
    </div>
    <div class="py-5 px-2">
      <slot></slot>
    </div>
    <div
      v-if="$slots.footer"
      class="flex justify-end text-right rounded-b-md py-5 px-2 text-lg flex items-center"
      :class="[props.seperated ? 'border-t border-zinc-200 dark:border-zinc-600' : '']"
    >
      <slot name="footer"></slot>
    </div>
  </div>
</template>
