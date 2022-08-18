<script setup>
import BreezeAuthenticatedLayout from '@/Layouts/Authenticated.vue';
import InputLebel from '@/Components/Form/Input/Label.vue';
import InputError from '@/Components/Form/Input/Error.vue';
import InputHint from '@/Components/Form/Input/Hint.vue';
import EasyButton from '@/Components/Theme/Button.vue';
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
                
                <span>Small</span> <br>
                <easy-button class="m-1" small> Small Button </easy-button>
                <easy-button class="m-1" small color="primary"> Small Button </easy-button>
                <easy-button class="m-1" small color="warning"> Small Button </easy-button>
                <easy-button class="m-1" small color="danger"> Small Button </easy-button>
                <easy-button class="m-1" small color="success"> Small Button </easy-button> <br><br>
                <span>Flat solid</span> <br>
                <easy-button class="m-1"> Default Button </easy-button>
                <easy-button class="m-1" color="primary"> Primary Button </easy-button>
                <easy-button class="m-1" color="warning"> Warning Button </easy-button>
                <easy-button class="m-1" color="danger"> Danger Button </easy-button>
                <easy-button class="m-1" color="success"> Success Button </easy-button> <br><br>
                <span>Flat Outlined</span> <br>
                <easy-button class="m-1" outlined> Default Outlined Button </easy-button>
                <easy-button class="m-1" color="primary" outlined> Primary Outlined Button </easy-button>
                <easy-button class="m-1" color="warning" outlined> Warning Outlined Button </easy-button>
                <easy-button class="m-1" color="danger" outlined> Danger Outlined Button </easy-button>
                <easy-button class="m-1" color="success" outlined> Success Outlined Button </easy-button> <br><br>
                <span>Elevated solid</span> <br>
                <easy-button class="m-1" elevate> Default Button </easy-button>
                <easy-button class="m-1" color="primary" elevate> Primary Button </easy-button>
                <easy-button class="m-1" color="warning" elevate> Warning Button </easy-button>
                <easy-button class="m-1" color="danger" elevate> Danger Button </easy-button>
                <easy-button class="m-1" color="success" elevate> Success Button </easy-button> <br><br>
                <span>Elevated Outlined</span> <br>
                <easy-button class="m-1" outlined elevate> Default Outlined Button </easy-button>
                <easy-button class="m-1" color="primary" outlined elevate> Primary Outlined Button </easy-button>
                <easy-button class="m-1" color="warning" outlined elevate> Warning Outlined Button </easy-button>
                <easy-button class="m-1" color="danger" outlined elevate> Danger Outlined Button </easy-button>
                <easy-button class="m-1" color="success" outlined elevate> Success Outlined Button </easy-button> <br><br>

                <span>Flat solid rounded</span> <br>
                <easy-button class="m-1" rounded> Default Button </easy-button>
                <easy-button class="m-1" rounded color="primary"> Primary Button </easy-button>
                <easy-button class="m-1" rounded color="warning"> Warning Button </easy-button>
                <easy-button class="m-1" rounded color="danger"> Danger Button </easy-button>
                <easy-button class="m-1" rounded color="success"> Success Button </easy-button> <br><br>
                <span>Flat outlined rounded</span> <br>
                <easy-button class="m-1" rounded outlined> Default Outlined Button </easy-button>
                <easy-button class="m-1" rounded color="primary" outlined> Primary Outlined Button </easy-button>
                <easy-button class="m-1" rounded color="warning" outlined> Warning Outlined Button </easy-button>
                <easy-button class="m-1" rounded color="danger" outlined> Danger Outlined Button </easy-button>
                <easy-button class="m-1" rounded color="success" outlined> Success Outlined Button </easy-button> <br><br>
                <span>Elevated solid rounded</span> <br>
                <easy-button class="m-1" rounded elevate> Default Button </easy-button>
                <easy-button class="m-1" rounded color="primary" elevate> Primary Button </easy-button>
                <easy-button class="m-1" rounded color="warning" elevate> Warning Button </easy-button>
                <easy-button class="m-1" rounded color="danger" elevate> Danger Button </easy-button>
                <easy-button class="m-1" rounded color="success" elevate> Success Button </easy-button> <br><br>
                <span>Elevated outlined rounded</span> <br>
                <easy-button class="m-1" rounded outlined elevate> Default Outlined Button </easy-button>
                <easy-button class="m-1" rounded color="primary" outlined elevate> Primary Outlined Button </easy-button>
                <easy-button class="m-1" rounded color="warning" outlined elevate> Warning Outlined Button </easy-button>
                <easy-button class="m-1" rounded color="danger" outlined elevate> Danger Outlined Button </easy-button>
                <easy-button class="m-1" rounded color="success" outlined elevate> Success Outlined Button </easy-button> <br>
            </div>
        </div>
    </BreezeAuthenticatedLayout>
</template>
