<script setup>
import { ref, computed, watch } from "vue";

import EasyDropdown from "@/Components/Theme/Dropdown.vue";
import EasyRadioButtons from "@/Components/Form/Input/RadioButton/Multiple.vue";
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
  let label = props.placeholder
  props.options.forEach(element => {
    if (element.value == props.modelValue) {
      label = element.label
    }
  });
  return label
};
</script>

<template>
  <div>
    <easy-dropdown
      :content-classes="['pb-1', 'bg-white', 'dark:bg-zinc-800']"
      :trigger-classes="[
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
      ]"
      :trigger-active-classes="[
        'outline-blue-600',
        'dark:outline-blue-400',
        'outline-2',
      ]"
      :trigger-inactive-classes="[
        'outline-zinc-400',
        'dark:outline-zinc-600',
        'outline-1',
      ]"
      
      :trigger-open="active"
      @open-status="updateActiveStatus"
    >
      <template #trigger>
        <div>{{ selectedLabel() }}</div>
        <div class="grow">
          <easy-icons icon="down" class="float-right"/>
        </div>
      </template>
      <template #content>
        <EasyRadioButtons
          :options="props.options"
          v-model="proxySelected"
          solo
          :id="id + 'radio'"
          :name="name"
        />
      </template>
    </easy-dropdown>
  </div>
</template>