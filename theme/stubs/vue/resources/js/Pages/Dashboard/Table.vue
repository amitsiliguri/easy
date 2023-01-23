<script setup>
import { reactive } from "vue";
import { Head } from "@inertiajs/inertia-vue3";
import BreezeAuthenticatedLayout from "@/Layouts/Authenticated.vue";
import EasySimpleTable from "@/Components/Theme/Table.vue";
const table = reactive({
    selected: [],
    head: [
        {
            align: "text-left",
            label: "ID",
            column: "id",
            show: true, //column visibility
            searchable: true, //can search data in column
            type: "text" //rearch type
        },
        {
            align: "text-left",
            label: "Name",
            column: "name",
        },
        {
            align: "text-left",
            label: "Email",
            column: "email",
        },
        {
            align: "text-left",
            label: "Phone",
            column: "phone",
        },
        {
            align: "text-right",
            label: "Action",
            column: "action",
        }
    ]
});
</script>

<template>

    <Head title="Dynamic Table" />
    <BreezeAuthenticatedLayout>
        <template #header>
            <h2>
                Dynamic Table
            </h2>
        </template>
        <EasySimpleTable :head="table.head" :data="$page.props.simple" showSelect v-model="table.selected">
            <template #cell-action="{ row }">
                <div class="flex flex-row-reverse">
                    Link
                </div>
            </template>
        </EasySimpleTable>
    </BreezeAuthenticatedLayout>
</template>
