<script setup>
import EasyButton from "@/Components/Theme/Button.vue";
</script>

<template>

    <span>Theme</span> <br />
    <div class="flex">
        <EasyButton class="m-1" label="Theme" />
    </div>

    <span>Small Solid No curve</span> <br />
    <div class="flex">
        <EasyButton class="m-1" color="primary" curve="sharp" size="sm" label="Primary" />
        <EasyButton class="m-1" color="warning" curve="sharp" size="sm" label="Warning" />
        <EasyButton class="m-1" color="danger" curve="sharp" size="sm" label="Danger" />
        <EasyButton class="m-1" color="success" curve="sharp" size="sm" label="Success" />
        <EasyButton class="m-1" color="transparent" curve="sharp" size="sm" label="Transparent" />
        <EasyButton class="m-1" color="default" curve="full" size="sm" label="Default"/>
    </div>


    <span>Small Solid Elevated No curve</span> <br />
    <div class="flex">
        <EasyButton class="m-1" color="primary" curve="sharp" label="Primary" elevated />
        <EasyButton class="m-1" color="warning" curve="sharp" label="Warning" elevated />
        <EasyButton class="m-1" color="danger" curve="sharp" label="Danger" elevated />
        <EasyButton class="m-1" color="success" curve="sharp" label="Success" elevated />
        <EasyButton class="m-1" color="transparent" curve="sharp" label="Transparent" elevated />
        <EasyButton class="m-1" color="default" curve="sharp" label="Default" elevated />
    </div>
</template>