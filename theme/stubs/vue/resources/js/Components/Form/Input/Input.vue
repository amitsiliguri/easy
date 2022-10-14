<script setup>
import { onMounted, ref, computed } from "vue";

import InputLebel from "@/Components/Form/Input/Label.vue";
import InputError from "@/Components/Form/Input/Error.vue";
import InputHint from "@/Components/Form/Input/Hint.vue";
import EasyIcons from "@/Components/Theme/Icons.vue";
import EasyButton from "@/Components/Theme/Button.vue";
import { useInputStyle } from "@/Composables/useInputStyle.js";
const { setInputBorder, setInputHoverBorder, setInputFocusBorder, setLabelActiveColor } = useInputStyle();

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
  type: {
    type: String,
    default() {
      return "text";
    },
  },
  placeholder: {
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
  autofocus: {
    type: Boolean,
    default() {
      return false;
    },
  },
  autocomplete: {
    type: String,
    default() {
      return "off";
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
  icon: {
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

const emit = defineEmits(["update:modelValue"]);

const input = ref(null);
const showClearInput = ref(false);
const activeInput = ref(false);

onMounted(() => {
  if (input.value.hasAttribute("autofocus")) {
    input.value.focus();
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


const rightPadding = computed(() => {
  return !props.solo ? "" : 'pr-12';
});

const leftPadding = computed(() => {
  return (!props.solo && props.icon !== '') ? 'pl-9' : ''
});

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
    <input-lebel v-if="!props.solo" :for="props.id" :label="props.label" :active="activeInput" />
    <div class="relative mt-1">
      <label v-if="!props.solo && props.icon !== ''" :for="props.id" class="absolute left-2 top-2"
        :class="[ activeInput ? setLabelActiveColor : '']">
        <easy-icons :icon="props.icon" />
      </label>
      <input :id="props.id" :type="props.type" :required="props.required" :autofocus="props.autofocus"
        :autocomplete="props.autocomplete" :placeholder="props.placeholder"
        class="bg-transparent block w-full rounded border-0"
        :class="[setInputBorder, setInputHoverBorder, setInputFocusBorder, rightPadding, leftPadding]"
        :value="modelValue" @input="emitValue($event.target.value)" @focus="activeInput = true"
        @blur="activeInput = false" ref="input" />
      <easy-button v-if="!props.solo && showClearInput" class="absolute right-2 top-2" small color="transparent"
        @click="clear()" icon="close" />
    </div>

    <input-hint v-if="!props.solo" class="block mt-1" :hint="props.hint" />
    <input-error v-if="!props.solo" class="block" :message="props.error" />
  </fieldset>
</template>
