<script setup>
const props = defineProps({
  hint: {
    type: String,
    default() {
      return "";
    },
  },
});
</script>

<template>
  <span class="text-sm dark:text-zinc-500 px-2">{{ props.hint }}</span>
</template>