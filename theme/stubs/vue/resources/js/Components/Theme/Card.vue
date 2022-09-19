<script setup>
import { onMounted } from "vue";
import { useColor } from "@/Composables/useColor.js";
const { colorType, isOutlined, setBorder, setBackground } = useColor();

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
  color: {
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
});

// used classes
// outline-blue-500 dark:bg-neutral-900 outline-yellow-500 outline-rose-500 outline-lime-500 outline-transparent outline-zinc-200 dark:outline-slate-900
</script>

<template>
  <div
    class="rounded-md bg-white dark:bg-zinc-800 outline outline-1"
    :class="[props.elevate ? 'material-shadow' : '', setBorder]"
  >
    <div
      v-if="$slots.header"
      class="py-5 px-2 text-lg flex items-center rounded-t-md"
      :class="setBackground"
    >
      <slot name="header"></slot>
    </div>
    <div class="py-5 px-2">
      <slot></slot>
    </div>
    <div
      v-if="$slots.footer"
      class="
        flex
        justify-end
        text-right
        rounded-b-md
        py-5
        px-2
        text-lg
        flex
        items-center
      "
      :class="setBackground"
    >
      <slot name="footer"></slot>
    </div>
  </div>
</template>
