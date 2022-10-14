<script setup>
import { computed } from "vue";

import InputLebel from "@/Components/Form/Input/Label.vue";
import InputError from "@/Components/Form/Input/Error.vue";
import InputHint from "@/Components/Form/Input/Hint.vue";
import { useInputStyle } from "@/Composables/useInputStyle.js";
const { setInputTextColor, setCheckedColor } = useInputStyle();
const emit = defineEmits(["update:checked"]);

const props = defineProps({
  checked: {
    type: [String, Boolean],
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
  },
  name: {
    type: String,
    required: false,
    default() {
      return "";
    },
  },
});

const setName = () => {
  return (props.name !== '') ? props.name : props.id
};

const proxyChecked = computed({
  get() {
    return props.checked;
  },

  set(val) {
    emit("update:checked", val);
  },
});

// text-blue-500 text-amber-500 text-rose-500 text-green-500 text-transpanet text-zinc-500
// checked:ring-blue-500 checked:ring-amber-500 checked:ring-rose-500 checked:ring-green-500 checked:ring-transpanet checked:ring-zinc-500
</script>
    
<template>
    <div class="flex">
      <input
        type="radio"
        :id="props.id"
        :value="value"
        :name="setName()"
        v-model="proxyChecked"
        class="
          w-5
          h-5
          border-2
          bg-transparent
          checked:w-2.5
          checked:h-2.5
          checked:mx-[5px]
          checked:mt-[5px]
          checked:outline-none
          checked:outline-2
          checked:ring-2
          checked:ring-offset-4
          checked:ring-offset-white
          dark:checked:ring-offset-zinc-800
        "
        :class="[setInputTextColor, setCheckedColor]"
      />
      <input-lebel v-if="!props.solo" :for="props.id" :label="props.label" class="ml-3 grow" />
    </div>
</template>