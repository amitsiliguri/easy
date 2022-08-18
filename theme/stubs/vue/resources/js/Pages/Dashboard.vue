<script setup>
import BreezeAuthenticatedLayout from '@/Layouts/Authenticated.vue';
import InputLebel from '@/Components/Form/Input/Label.vue';
import InputError from '@/Components/Form/Input/Error.vue';
import InputHint from '@/Components/Form/Input/Hint.vue';
import EasyButton from '@/Components/Theme/Button.vue';
import EasyLinkButton from '@/Components/Theme/LinkButton.vue';
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
                <input-lebel label="Some Input Label"/> <br>
                <input-error message="Some Input Error"/> <br>
                <input-hint hint="Some Input Hint"/> <br><br>
                
                <span>Button</span> <br>
                <easy-button class="m-1" small> Small Button </easy-button>
                <easy-button class="m-1" color="primary" rounded> Primary Button </easy-button>
                <easy-button class="m-1" rounded color="danger" outlined elevate> Danger Outlined Button </easy-button><br><br>

                <span>Link</span> <br>
                <easy-link-button class="m-1" small> Small Button </easy-link-button>
                <easy-link-button class="m-1" color="primary" rounded> Primary Button </easy-link-button>
                <easy-link-button class="m-1" rounded color="danger" outlined elevate> Danger Outlined Button </easy-link-button><br><br>
                
            </div>
        </div>
    </BreezeAuthenticatedLayout>
</template>
