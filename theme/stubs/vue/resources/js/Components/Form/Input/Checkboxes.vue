<script setup>
import { computed } from "vue";

import InputLebel from "@/Components/Form/Input/Label.vue";
import InputError from "@/Components/Form/Input/Error.vue";
import InputHint from "@/Components/Form/Input/Hint.vue";
import EasyCheckbox from "@/Components/Form/Input/Checkbox.vue";

const emit = defineEmits(["update:modelValue"]);

const props = defineProps({
  modelValue: {
    type: Array,
    default() {
      return [];
    },
  },
  options: {
    type: Array,
    required: true,
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
  },
  name: {
    type: String,
    required: false,
    default() {
      return "";
    },
  },
  solo: {
    type: Boolean,
    default() {
      return false;
    },
  },
});

const proxyChecked = computed({
  get() {
    return props.modelValue;
  },

  set(val) {
    emit("update:modelValue", val);
  },
});
</script>
        
<template>
  <div>
    <input-lebel v-if="!props.solo" :label="props.label" class="block my-2"/>
    <div v-for="(option, index) in options" :key="index" class="block mx-2 py-3">
      <easy-checkbox
        v-model:checked="proxyChecked"
        :id="props.id + '-' + index"
        :label="option.label"
        :value="option.value"
      />
    </div>
    <input-hint v-if="!props.solo" class="block mt-1" :hint="props.hint" />
    <input-error v-if="!props.solo" class="block" :message="props.error" />
  </div>
</template>