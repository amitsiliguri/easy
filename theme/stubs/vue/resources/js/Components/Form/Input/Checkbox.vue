<script setup>
import { computed } from "vue";

import InputLebel from "@/Components/Form/Input/Label.vue";
import InputError from "@/Components/Form/Input/Error.vue";
import InputHint from "@/Components/Form/Input/Hint.vue";

const emit = defineEmits(["update:checked"]);

const props = defineProps({
  checked: {
    type: [Array, Boolean],
    default: false,
  },
  value: {
    default: null,
  },
  id: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    default() {
      return "CheckBox Input Label";
    },
  },
  solo: {
    type: Boolean,
    default() {
      return false;
    },
  },
  hint: {
    type: String,
    required: false,
    default() {
      return "";
    },
  },
  error: {
    type: String,
    required: false,
    default() {
      return "";
    },
  }
});

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
  <fieldset>
    <div>
      <input
        type="checkbox"
        :id="props.id"
        :value="value"
        v-model="proxyChecked"
        class="
          rounded-sm
          border-2 border-zinc-500
          dark:border-zinc-100 dark:checked:border-indigo-500
          bg-transparent
          focus:border-zinc-500
          w-5
          h-5
        "
      />
      <input-lebel v-if="!props.solo" :for="props.id" :label="props.label" />
    </div>
    <input-hint v-if="!props.solo" class="block mt-1" :hint="props.hint" />
    <input-error v-if="!props.solo" class="block" :message="props.error" />
  </fieldset>
</template>