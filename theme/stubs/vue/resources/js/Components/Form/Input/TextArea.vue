<script setup>
import { onMounted, ref } from "vue";

import InputLebel from "@/Components/Form/Input/Label.vue";
import InputError from "@/Components/Form/Input/Error.vue";
import InputHint from "@/Components/Form/Input/Hint.vue";
import EasyIcons from "@/Components/Theme/Icons.vue";
import EasyButton from "@/Components/Theme/Button.vue";
import { useInputStyle } from "@/Composables/useInputStyle.js";
const { setInputBorder, setInputHoverBorder, setInputFocusBorder } = useInputStyle();
const props = defineProps({
  modelValue: {
    type: String,
    default() {
      return "";
    },
  },
  label: {
    type: String,
    default() {
      return "Input Label";
    },
  },
  id: {
    type: String,
    default() {
      return "";
    },
  },
  required: {
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
  },
});

const emit = defineEmits(["update:modelValue"]);

const inputTextArea = ref(null);
const showClearInput = ref(false);
const activeInput = ref(false);

onMounted(() => {
  if (inputTextArea.value.hasAttribute("autofocus")) {
    inputTextArea.value.focus();
  }
});

const emitValue = (value) => {
  showClearInput.value = value != "" ? true : false;
  emit("update:modelValue", value);
};

const highlight = () => {
  input.value.focus();
};

const clear = () => {
  emitValue("");
  highlight();
};

// ring-1 ring-zinc-400 dark:ring-zinc-600 focus:ring-2 
// hover:ring-zinc-900 dark:hover:ring-zinc-500
// focus:ring-blue-600 dark:focus:ring-blue-400
// focus:ring-amber-600 dark:focus:ring-amber-400
// focus:ring-rose-600 dark:focus:ring-rose-400
// focus:ring-green-600 dark:focus:ring-green-400
// focus:ring-zinc-600 dark:focus:ring-zinc-400
// focus:ring-zinc-600 dark:focus:ring-zinc-400
// text-blue-600 dark:text-blue-400 
// text-amber-600 dark:text-amber-400 
// text-rose-600 dark:text-rose-400 
// text-green-600 dark:text-green-400 
// text-zinc-600 dark:text-zinc-400 
// text-zinc-600 dark:text-zinc-400
</script>
    
<template>
  <fieldset>
    <input-lebel :for="props.id" :label="props.label" :active="activeInput" />
    <div class="relative mt-1">
      <textarea class="bg-transparent block w-full rounded border-0"
        :class="[setInputBorder, setInputHoverBorder, setInputFocusBorder, rightPadding, leftPadding]" :id="id" rows="4"
        @input="emitValue($event.target.value)" :value="props.modelValue" @focus="activeInput = true"
        @blur="activeInput = false" ref="inputTextArea" />
      <easy-button v-if="showClearInput" class="absolute right-2 top-2" small color="transparent" icon="close" @click="clear()" />
    </div>

    <input-hint class="block mt-1" :hint="props.hint" />
    <input-error class="block" :message="props.error" />
  </fieldset>
</template>
    