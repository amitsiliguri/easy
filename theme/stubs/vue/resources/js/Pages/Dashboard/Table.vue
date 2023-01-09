<script setup>
import BreezeAuthenticatedLayout from "@/Layouts/Authenticated.vue";
import { Head } from "@inertiajs/inertia-vue3";
import EasyPagination from "@/Components/Theme/Pagination/Detail.vue";
import EasySimplePagination from "@/Components/Theme/Pagination/Simple.vue";
</script>

<template>

    <Head title="Dynamic Table" />
    <BreezeAuthenticatedLayout>
        <template #header>
            <h2>
                Dynamic Table
            </h2>
        </template>
        <EasyPagination :links="$page.props.detail.links" />
        <EasySimplePagination curve="full"
            :previousPageUrl="$page.props.simple.prev_page_url" :nextPageUrl="$page.props.simple.next_page_url" />

    </BreezeAuthenticatedLayout>
</template>
