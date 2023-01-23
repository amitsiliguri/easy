<script setup>
import { computed } from "vue";
import EasyCard from "@/Components/Theme/Card.vue";
import EasySingleCheckBox from "@/Components/Form/Input/Checkbox/Single.vue";
import EasySimplePagination from "@/Components/Theme/Pagination/Simple.vue";

const emit = defineEmits(["update:modelValue"]);

const props = defineProps({
    head: {
        type: Array,
        required: true,
    },
    data: {
        type: [Array, Object],
        required: true,
    },
    showSelect: {
        type: Boolean,
        required: false,
        default() {
            return false;
        },
    },
    modelValue: {
        type: Array,
        default() {
            return [];
        },
    },

});

const proxyChecked = computed({
    get() {
        return props.modelValue;
    },

    set(val) {
        emit("update:modelValue", val);
    },
});
</script>

<template>
    <easy-card>
        <template #header>
            <h2 class="ml-4">Data table</h2>
        </template>
        <table v-if="props.head.length > 0" class="table-auto w-full responsive-table">
            <thead class="hidden md:table-header-group lg:hidden xl:table-header-group">
                <tr>
                    <th v-if="props.showSelect"
                        class="py-3 px-6 border-b border-zinc-200 dark:border-zinc-700 text-left md:w-8 xl:w-8">
                        Select
                    </th>
                    <th v-for="(header, index) in props.head" :key="index"
                        class="py-3 px-6 border-b border-zinc-200 dark:border-zinc-700" :class="`sm:${header.align}`">
                        {{ header.label }}
                    </th>
                </tr>
            </thead>
            <tbody v-if="props.data.data.length > 0">
                <tr v-for="(rowData, rowIndex) in props.data.data" :key="rowIndex"
                    class="block md:table-row lg:block xl:table-row border-b border-zinc-200 dark:border-zinc-700">
                    <td v-if="props.showSelect" class="block sm:table-cell py-3 px-6 md:w-8 xl:w-8 mb-1"
                        data-label="Select">
                        <EasySingleCheckBox :id="`select-${rowIndex}`" solo :value="rowData"
                            v-model:checked="proxyChecked" class="float-right xl:float-left" />
                    </td>

                    <td v-for="(header, index) in props.head" :key="index" :data-label="header.label"
                        class="py-3 px-6 block md:table-cell lg:block xl:table-cell text-right"
                        :class="`sm:${header.align}`">
                        <slot :name="`cell-${header.column}`" :row="rowData">
                            {{ rowData[header.column] }}
                        </slot>
                    </td>
                </tr>
            </tbody>
        </table>
        <template #footer>
            <span class="ml-4 text-sm">Current page : {{ props.data.current_page }}</span>
            <span class="grow"></span>
            <span class="mr-4 text-sm">{{ props.data.from }} - {{ props.data.to }}</span>
            <EasySimplePagination curve="full" :previousPageUrl="props.data.prev_page_url"
                :nextPageUrl="props.data.next_page_url" />
        </template>
    </easy-card>

</template>
