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
  <span class="text-sm text-orange-600 px-2">{{ props.message }}</span>
</template>