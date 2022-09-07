<script setup>
import { ref } from "vue";
import EasyDialogModal from "@/Components/Theme/Modal/DialogModal.vue";
import EasyClock from "@/Components/Form/Input/Clock.vue";
import EasyButton from "@/Components/Theme/Button.vue";
import InputLebel from "@/Components/Form/Input/Label.vue";
import InputError from "@/Components/Form/Input/Error.vue";
import InputHint from "@/Components/Form/Input/Hint.vue";
import EasyIcons from "@/Components/Theme/Icons.vue";

const showConfirmModal = ref(false);
const toggleConfirmModal = (status) => {
  showConfirmModal.value = status;
};
</script>

<template>
  <div class="flex flex-col">
    <input-lebel label="Time Input" @click="toggleConfirmModal(!showConfirmModal)"/>
    <div
      class="
        flex
        w-full
        bg-transparent
        border border-zinc-400
        dark:border-zinc-600
        hover:border-zinc-900
        dark:hover:border-zinc-500
        focus:border-blue-600
        dark:focus:border-blue-400
        rounded
      "
    >
    <easy-icons icon="solid-person" class="flex-none m-2"/>
    <button type="button" class="text-left grow py-2" @click="toggleConfirmModal(!showConfirmModal)">Hello</button>
    <easy-button type="button" small color="transparent" class="m-2">
        <easy-icons icon="close" :height="18" :width="18" class="text-orange-600"/>
      </easy-button>
    </div>
    <input-hint class="block mt-1" hint="props hint" />
    <input-error class="block" message="props error" />
  </div>
  <easy-dialog-modal
    title="Modal Title"
    :show="showConfirmModal"
    maxWidth="sm"
    @close="toggleConfirmModal(false)"
  >
    <template #content>
      <EasyClock class="m-auto"/>
    </template>
    <template #footer> Modal Footer </template>
  </easy-dialog-modal>

</template>