<script setup>
import { reactive } from "vue";
import { Head } from "@inertiajs/inertia-vue3";
import BreezeAuthenticatedLayout from "@/Layouts/Authenticated.vue";
import EasyPagination from "@/Components/Theme/Pagination/Detail.vue";
import EasyAdvanceTable from "@/Components/Theme/Table/Advance.vue";
const head = reactive([
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
    }
]);
</script>

<template>

    <Head title="Dynamic Table" />
    <BreezeAuthenticatedLayout>
        <template #header>
            <h2>
                Dynamic Table
            </h2>
        </template>
        <EasyAdvanceTable :head="head" :data="$page.props.simple" />
        <EasyPagination :links="$page.props.detail.links" class="justify-center my-6"/>
            
    </BreezeAuthenticatedLayout>
</template>
