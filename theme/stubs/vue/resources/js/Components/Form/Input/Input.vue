<script setup>
import { onMounted, ref } from "vue";

import InputLebel from "@/Components/Form/Input/Label.vue";
import InputError from "@/Components/Form/Input/Error.vue";
import InputHint from "@/Components/Form/Input/Hint.vue";
import EasyIcons from "@/Components/Theme/Icons.vue";
import EasyButton from "@/Components/Theme/Button.vue";

// defineProps(["modelValue"]);
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

</script>

<template>
  <fieldset>
    <input-lebel v-if="!props.solo" :for="props.id" :label="props.label" :active="activeInput" />
    <div class="relative mt-1">
      <label v-if="!props.solo && props.icon !== ''" :for="props.id" class="absolute left-2 top-2"
        :class="{'text-blue-600 dark:text-blue-400': activeInput}">
        <easy-icons :icon="props.icon" />
      </label>
      <input :id="props.id" :type="props.type" :required="props.required" :autofocus="props.autofocus"
        :autocomplete="props.autocomplete" :placeholder="props.placeholder" class="
          bg-transparent
          block
          w-full
          border-zinc-400
          dark:border-zinc-600
          hover:border-zinc-900
          dark:hover:border-zinc-500
          focus:border-blue-600
          dark:focus:border-blue-400
          rounded
        " :class="{
          'pl-9': !props.solo && props.icon !== '',
          'pr-12': !props.solo,
        }" :value="modelValue" @input="emitValue($event.target.value)" @focus="activeInput = true"
        @blur="activeInput = false" ref="input" />
      <easy-button v-if="!props.solo && showClearInput" class="absolute right-2 top-2" small color="transparent"
        @click="clear()">
        <easy-icons icon="close" :height="18" :width="18" class="text-orange-600" />
      </easy-button>
    </div>

    <input-hint v-if="!props.solo" class="block mt-1" :hint="props.hint" />
    <input-error v-if="!props.solo" class="block" :message="props.error" />
  </fieldset>
</template>
