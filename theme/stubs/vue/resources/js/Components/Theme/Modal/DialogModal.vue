<script setup>
import Modal from '@/Components/Theme/Modal/BaseModal.vue';
import Card from '@/Components/Theme/Card.vue';
import EasyButton from '@/Components/Theme/Button.vue';
import EasyIcons from "@/Components/Theme/Icons.vue";
const emit = defineEmits(['close']);

const props = defineProps({
    title: {
        type: String,
        required: false,
        default: 'Modal Title'
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
    outlined: {
        type: Boolean,
        required: false,
        default() {
            return false;
        },
    },
    color: {
        type: String,
        required: false,
        default() {
            return "";
        },
    },
});

const close = () => {
    emit('close');
};
</script>

<template>
    <Modal :show="show" :max-width="maxWidth" :closeable="closeable" @close="close">
        <card seperated :outlined="props.outlined" :color="props.color">
            <template #header>
                <span v-if="icon != ''" class="flex-none p-3 dark:bg-zinc-700 bg-zinc-100 rounded-full mr-2 -my-3">
                    <easy-icons :icon="icon" />
                </span>
                <span class="grow">
                    <slot name="title">{{title}}</slot>
                </span>
                <template v-if="closeable">
                    <EasyButton type="button" class="flex-none -my-3" curve="full" :color="props.color" icon="close"
                        @click="close" />
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
