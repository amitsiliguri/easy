<script setup>
import Modal from '@/Components/Theme/Modal/BaseModal.vue';
import Card from '@/Components/Theme/Card.vue';
import EasyButton from '@/Components/Theme/Button.vue';

const emit = defineEmits(['close']);

defineProps({
    title: {
        type: String,
        required: false,
        default: ''
    },
    icon: {
        type: String,
        required: false,
        default: ''
    },
    show: {
        type: Boolean,
        default: false,
    },
    maxWidth: {
        type: String,
        default: '2xl',
    },
    closeable: {
        type: Boolean,
        default: true,
    },

});

const close = () => {
    emit('close');
};
</script>

<template>
    <Modal :show="show" :max-width="maxWidth" :closeable="closeable" @close="close">
        <card header-class="text-lg flex items-center "
            footer-class="flex flex-row justify-end bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-200 text-right">
            <template #header>
                <span v-if="icon != ''" class="flex-none p-3 dark:bg-zinc-700 bg-zinc-100 rounded-full mr-2 -my-3">
                    <!-- <easy-icons :icon="icon" /> -->
                </span>
                <span class="grow">{{ title }}</span>
                <template v-if="closeable">
                    <EasyButton type="button" class="flex-none -my-3" @click="close">
                        <!-- <easy-icons icon="close" /> -->
                    </EasyButton>
                </template>
            </template>
            <div class="p-2 overflow-y-auto max-h-[70vh] bg-inherit">
                <slot name="content" />
            </div>
            <template #footer>
                <slot name="footer" />
            </template>
        </card>
    </Modal>
</template>