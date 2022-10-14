<script setup>
import { computed } from "vue";
import { useInputStyle } from "@/Composables/useInputStyle.js";
const { setInputBgColor } = useInputStyle();

const props = defineProps({
  checked: {
    type: Boolean,
    default: false,
  },
  value: {
    default: null,
  },
  label: {
    type: String,
    default() {
      return "Switch Input Label";
    },
  },
});

const emit = defineEmits(["update:checked"]);

const proxyChecked = computed({
  get() {
    return props.checked;
  },

  set(val) {
    emit("update:checked", val);
  },
});
</script>
    
<template>
  <label for="toogleTwo" class="flex items-center cursor-pointer select-none">
    <div class="relative mr-2">
      <input
        id="toogleTwo"
        type="checkbox"
        class="sr-only"
        :value="value"
        v-model="proxyChecked"
      />
      <div
        class="w-14 h-5 bg-zinc-200 dark:bg-zinc-700 rounded-full shadow-inner"
      ></div>
      <div
        class="
          dot
          absolute
          w-7
          h-7
          rounded-full
          shadow-switch-1
          left-0
          -top-1
          transition
          shadow-xl
        "
        :class="[
          (props.checked) ? setInputBgColor + ' translate-x-full' : 'bg-white dark:bg-zinc-600'
        ]"
      ></div>
    </div>

    <span>{{ props.label }}</span>
  </label>
</template>
