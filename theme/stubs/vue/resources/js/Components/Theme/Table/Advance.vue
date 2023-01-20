<script setup>

import EasyCard from "@/Components/Theme/Card.vue";
import EasyTable from "@/Components/Theme/Table/Simple.vue";
import EasySimplePagination from "@/Components/Theme/Pagination/Simple.vue";
const props = defineProps({
    head: {
        type: Array,
        required: true,
    },
    data: {
        type: Object,
        required: true,
    },
    showSelect: {
        type: Boolean,
        required: false,
        default() {
            return false;
        },
    },
    selectedData: {
        type: Array,
        default() {
            return [];
        },
    },
    selectedData: {
        type: Array,
        default() {
            return [];
        },
    },
});
</script>

<template>
    <easy-card>
        <template #header>
            <h2>Data table</h2>
        </template>
        <EasyTable :head="props.head" :data="props.data.data" :show-select="props.showSelect"/>
        <template #footer>
            <EasySimplePagination curve="full"
            :previousPageUrl="props.data.prev_page_url" :nextPageUrl="props.data.next_page_url" />
        </template>
    </easy-card>
</template>