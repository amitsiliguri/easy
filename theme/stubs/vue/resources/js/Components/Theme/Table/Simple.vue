<script setup>
import EasyCheckBox from "@/Components/Form/Input/Checkbox/Single.vue";
const props = defineProps({
    head: {
        type: Array,
        required: true,
    },
    data: {
        type: Array,
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
});

const emit = defineEmits(["update:selectedData"]);

</script>

<template>
    <table v-if="props.head.length > 0" class="table-auto w-full responsive-table">
        <thead class="hidden md:table-header-group lg:hidden xl:table-header-group">
            <tr>
                <th v-if="props.showSelect" class="py-3 px-6 border-b border-zinc-200 dark:border-zinc-700 text-left">
                    Select</th>
                <th v-for="(header, index) in props.head" :key="index"
                    class="py-3 px-6 border-b border-zinc-200 dark:border-zinc-700" :class="`sm:${header.align}`">
                    {{ header.label }}
                </th>
            </tr>
        </thead>
        <tbody v-if="props.data.length > 0">
            <tr v-for="(rowData, rowIndex) in props.data" :key="rowIndex"
                class="block md:table-row lg:block xl:table-row border-b border-zinc-200 dark:border-zinc-700 ">

                <td v-if="props.showSelect" class="block sm:table-cell py-3 px-6" data-label="Select">
                    <EasyCheckBox :id="`select-${rowIndex}`" solo />
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
</template>