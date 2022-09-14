<script setup>
import { onMounted, ref } from "vue";

import InputLebel from "@/Components/Form/Input/Label.vue";
import InputError from "@/Components/Form/Input/Error.vue";
import InputHint from "@/Components/Form/Input/Hint.vue";
import EasyIcons from "@/Components/Theme/Icons.vue";
import EasyButton from "@/Components/Theme/Button.vue";

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
</script>
    
<template>
  <fieldset>
    <input-lebel
      :for="props.id"
      :label="props.label"
      :class="{ 'text-blue-600 dark:text-blue-400': activeInput }"
    />
    <div class="relative mt-1">
      <textarea
        class="
          bg-transparent
          block
          pr-10
          w-full
          border-gray-400
          dark:border-zinc-600
          hover:border-gray-900
          dark:hover:border-zinc-500
          focus:border-blue-600
          dark:focus:border-blue-400
          rounded
        "
        :id="id"
        rows="4"
        @input="emitValue($event.target.value)"
        :value="props.modelValue"
        @focus="activeInput = true"
        @blur="activeInput = false"
        ref="inputTextArea"
      />
      <easy-button
        v-if="showClearInput"
        class="absolute right-2 top-2"
        small
        color="transparent"
        @click="clear()"
      >
        <easy-icons
          icon="close"
          :height="18"
          :width="18"
          class="text-orange-600"
        />
      </easy-button>
    </div>

    <input-hint class="block mt-1" :hint="props.hint" />
    <input-error class="block" :message="props.error" />
  </fieldset>
</template>
    