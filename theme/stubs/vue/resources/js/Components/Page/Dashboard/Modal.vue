<script setup>
import { ref } from "vue";
import EasyDialogModal from "@/Components/Theme/Modal/DialogModal.vue";
import EasyButton from "@/Components/Theme/Button.vue";
const showConfirmModal = ref(false);
const toggleConfirmModal = (status) => {
    showConfirmModal.value = status;
};
</script>
        
<template>

    <easy-button class="my-1" outlined elevated @click="toggleConfirmModal(!showConfirmModal)" label="Open Modal"/>

    <easy-dialog-modal title="Modal Title" :show="showConfirmModal" outlined @close="toggleConfirmModal(false)">
        <template #content>
            <span class="text-justify">The standard chunk of Lorem Ipsum used since the 1500s is
                reproduced below for those interested. Sections 1.10.32 and
                1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
                reproduced in their exact original form, accompanied by English
                versions from the 1914 translation by H. Rackham.</span>
        </template>
        <template #footer> Modal Footer </template>
    </easy-dialog-modal>
</template>