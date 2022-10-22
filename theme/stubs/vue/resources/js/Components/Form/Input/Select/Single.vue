<script setup>
import { ref, computed, watch } from "vue";

import EasyDropdown from "@/Components/Theme/Dropdown.vue";
import EasyRadioButtons from "@/Components/Form/Input/RadioButton/Multiple.vue";
import EasyIcons from "@/Components/Theme/Icons.vue";
import InputLebel from "@/Components/Form/Input/Label.vue";
import InputError from "@/Components/Form/Input/Error.vue";
import InputHint from "@/Components/Form/Input/Hint.vue";
import EasyButton from "@/Components/Theme/Button.vue";
import EasyChip from "@/Components/Theme/Chip.vue";
import { useInputStyle } from "@/Composables/useInputStyle.js";
const { setOutlineColor } = useInputStyle();

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
  solo: {
    type: Boolean,
    default() {
      return false;
    },
  },
  placeholder: {
    type: String,
    required: false,
    default() {
      return "Select an option.";
    },
  },
});
const emit = defineEmits(["update:modelValue"]);
const active = ref(false);

const updateActiveStatus = (status) => {
  active.value = status;
};

const proxySelected = computed({
  get() {
    return props.modelValue;
  },

  set(val) {
    emit("update:modelValue", val);
  },
});

const selectedPlaceholder = () => {
  // let label = props.placeholder
  let label = ''
  props.options.forEach(element => {
    if (element.value == props.modelValue) {
      label = element.label
    }
  });
  return label
};

//outline-blue-600 dark:outline-blue-400
//outline-amber-600 dark:outline-amber-400
//outline-rose-600 dark:outline-rose-400
//outline-green-600 dark:outline-green-400
//outline-zinc-600 dark:outline-zinc-400
//outline-zinc-600 dark:outline-zinc-400
</script>

<template>
  <div>
    <input-lebel v-if="!props.solo" :for="props.id" :label="props.label" :active="active" />

    <EasyDropdown :content-classes="['pb-1', 'bg-white', 'dark:bg-zinc-800','mt-1']" :trigger-classes="[
      'bg-transparent',
      'flex',
      'items-center',
      'w-full',
      'outline',
      'p-2',
      'hover:outline-zinc-900',
      'dark:hover:outline-zinc-500',
      'rounded',
      'cursor-pointer',
      'fllex',
    ]" :trigger-active-classes="[
      setOutlineColor,
      'outline-2',
    ]" :trigger-inactive-classes="[
      'outline-zinc-400',
      'dark:outline-zinc-600',
      'outline-1',
    ]" :trigger-open="active" @open-status="updateActiveStatus">
      <template #trigger>
        <template v-if="selectedPlaceholder() === ''">
          {{props.placeholder}}
        </template>
        <EasyChip v-else elevate size="sm" curve="full">
          {{ selectedPlaceholder() }}
        </EasyChip>
        <div class="grow">
          <easy-icons icon="down" class="float-right" />
        </div>
      </template>
      <template #content>
        <EasyRadioButtons :options="props.options" v-model="proxySelected" solo :id="id + 'radio'" :name="name" />
      </template>
    </EasyDropdown>

    <input-hint v-if="!props.solo" class="block mt-1" :hint="props.hint" />
    <input-error v-if="!props.solo" class="block" :message="props.error" />
  </div>
</template>