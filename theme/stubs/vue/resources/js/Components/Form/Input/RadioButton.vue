<script setup>
import { computed } from "vue";

import InputLebel from "@/Components/Form/Input/Label.vue";
import InputError from "@/Components/Form/Input/Error.vue";
import InputHint from "@/Components/Form/Input/Hint.vue";

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
</script>
    
<template>
    <div>
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
          checked:ml-[5px]
          checked:mr-[5px]
          checked:outline-none
          checked:outline-2
          checked:ring-2
          checked:ring-offset-4
          checked:ring-offset-white
          dark:checked:ring-offset-zinc-800
          checked:ring-indigo-500
        "
      />
      <input-lebel v-if="!props.solo" :for="props.id" :label="props.label" />
    </div>
</template>