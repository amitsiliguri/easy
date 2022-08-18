<script setup>
const props = defineProps({
  message: {
    type: String,
    default() {
      return "";
    },
  },
});
</script>

<template>
  <span class="text-sm text-orange-600">{{ props.message }}</span>
</template>