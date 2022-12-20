<script setup>
import EasyDropdown from "@/Components/Theme/Dropdown.vue";
import EasyDropdownLink from '@/Components/Theme/DropdownLink.vue';
import EasyButton from '@/Components/Theme/Button.vue';
</script>

<template>
    <EasyDropdown align="right" width="48" :close-on-content-click="false"
        :content-classes="['py-1', 'bg-white', 'dark:bg-zinc-800']" :trigger-classes="['bg-transparent', 'ml-2']">
        <template #trigger>
            <EasyButton type="button" curve="full" color="default" icon="solid-person" />
        </template>

        <template #content>
            <EasyDropdownLink href="#" method="post" as="button" class="border-b dark:border-zinc-700">
                {{$page.props.auth.user.name}}
            </EasyDropdownLink>
            <EasyDropdownLink :href="route('logout')" method="post" as="button">
                Log Out
            </EasyDropdownLink>
        </template>
    </EasyDropdown>
</template>
