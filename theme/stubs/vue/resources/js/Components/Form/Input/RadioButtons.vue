<script setup>
import { computed } from "vue";

import InputLebel from "@/Components/Form/Input/Label.vue";
import InputError from "@/Components/Form/Input/Error.vue";
import InputHint from "@/Components/Form/Input/Hint.vue";
import EasyRadioButton from "@/Components/Form/Input/RadioButton.vue";

// const emit = defineEmits(["update:checked"]);
const emit = defineEmits(["update:modelValue"]);

const props = defineProps({
  modelValue: {
    type: String,
    default() {
      return "";
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
  <fieldset>
    <input-lebel :label="props.label" class="block my-2"/>
    <div v-for="(option, index) in options" :key="index" class="block m-2">
      <easy-radio-button
        v-model:checked="proxyChecked"
        :id="props.id + '-' + index"
        :name="props.name"
        :label="option.label"
        :value="option.value"
      />
    </div>
    <input-hint class="block mt-1" :hint="props.hint" />
    <input-error class="block" :message="props.error" />
  </fieldset>
</template>