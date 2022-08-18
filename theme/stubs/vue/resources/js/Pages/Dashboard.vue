<script setup>
import BreezeAuthenticatedLayout from '@/Layouts/Authenticated.vue';
import InputLebel from '@/Components/Form/Input/Label.vue';
import InputError from '@/Components/Form/Input/Error.vue';
import { Head } from '@inertiajs/inertia-vue3';
</script>

<template>
    <Head title="Dashboard" />

    <BreezeAuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Dashboard
            </h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div class="p-6 bg-white border-b border-gray-200">
                        Form Components
                    </div>
                </div>
                <input-lebel label="Some Input Label"/>
                <input-error message="Some Input Error"/>
            </div>
        </div>
    </BreezeAuthenticatedLayout>
</template>
