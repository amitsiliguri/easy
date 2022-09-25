<script setup>
import { onMounted } from "vue";
import { useStyle } from "@/Composables/useStyle.js";
const { colorType, isOutlined, radiusType, getSize, setBorder, setBackground, setRadius, setSize } = useStyle();

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
  radius: {
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
    radiusType.value = props.radius
    getSize.value = props.size
});
</script>

<template>
    <div class="inline-block" :class="[props.elevate ? 'material-shadow' : '', (isOutlined) ? setBorder : setBackground, setRadius, setSize ]">
        <slot>Your content</slot>
    </div>
</template>