<script setup>
import { ref, computed, watch } from "vue";

import EasyDropdown from "@/Components/Theme/Dropdown.vue";
import EasyCheckBoxes from "@/Components/Form/Input/Checkbox/Multiple.vue";
import InputLebel from "@/Components/Form/Input/Label.vue";
import InputError from "@/Components/Form/Input/Error.vue";
import InputHint from "@/Components/Form/Input/Hint.vue";
import EasyButton from "@/Components/Theme/Button.vue";
import EasyIcons from "@/Components/Theme/Icons.vue";
import EasyChip from "@/Components/Theme/Chip.vue";
import { useInputStyle } from "@/Composables/useInputStyle.js";
const { setOutlineColor } = useInputStyle();

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

const selectedLabel = () => {
  let label = [];
  props.options.forEach((element) => {
    if (props.modelValue.includes(element.value)) {
      label.push(element.label);
    }
  });
  return label;
};
</script>

<template>
  <div>
    <input-lebel v-if="!props.solo" :for="props.id" :label="props.label" :active="active" />
    <easy-dropdown :content-classes="['pb-1', 'bg-white', 'dark:bg-zinc-800']" :trigger-classes="[
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
      'flex',
    ]" :trigger-active-classes="[
      setOutlineColor,
      'outline-2',
    ]" :trigger-inactive-classes="[
      'outline-zinc-400',
      'dark:outline-zinc-600',
      'outline-1',
    ]" :trigger-open="active" :close-on-content-click="false" @open-status="updateActiveStatus">
      <template #trigger>
        <template v-if="selectedLabel().length">
          <template v-for="(label, index) in selectedLabel()" :key="index">
            <EasyChip elevate size="sm" curve="full" class="mr-2">
              {{ label }}
            </EasyChip>
          </template>
        </template>
        <template v-else>
          {{props.placeholder}}
        </template>
        <div class="grow">
          <easy-icons icon="down" class="float-right" />
        </div>
      </template>
      <template #content>
        <EasyCheckBoxes :options="props.options" v-model="proxySelected" solo :id="id + 'checkbox'" />
      </template>
    </easy-dropdown>
    <input-hint v-if="!props.solo" class="block mt-1" :hint="props.hint" />
    <input-error v-if="!props.solo" class="block" :message="props.error" />
  </div>
</template>
