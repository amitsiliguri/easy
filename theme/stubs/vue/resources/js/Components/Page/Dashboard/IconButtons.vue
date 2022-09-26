<script setup>
import EasyButton from "@/Components/Theme/Button.vue";
import EasyIcons from "@/Components/Theme/Icons.vue";
</script>
    
<template>

<span>Icon Small Solid No curve</span> <br />
    <div class="flex">
        <EasyButton class="m-1" color="primary" curve="sharp" size="sm" icon="solid-person" />
        <EasyButton class="m-1" color="warning" curve="sharp" size="sm" icon="solid-person" />
        <EasyButton class="m-1" color="danger" curve="sharp" size="sm" icon="solid-person" />
        <EasyButton class="m-1" color="success" curve="sharp" size="sm" icon="solid-person" />
        <EasyButton class="m-1" color="transparent" curve="sharp" size="sm" icon="solid-person" />
        <EasyButton class="m-1" color="default" curve="sharp" size="sm" icon="solid-person" />
    </div>


    <span>Small Solid Elevated No curve</span> <br />
    <div class="flex">
        <EasyButton class="m-1" color="primary" curve="sharp" size="sm" icon="solid-person" elevated />
        <EasyButton class="m-1" color="warning" curve="sharp" size="sm" icon="solid-person" elevated />
        <EasyButton class="m-1" color="danger" curve="sharp" size="sm" icon="solid-person" elevated />
        <EasyButton class="m-1" color="success" curve="sharp" size="sm" icon="solid-person" elevated />
        <EasyButton class="m-1" color="transparent" curve="sharp" size="sm" icon="solid-person" elevated />
        <EasyButton class="m-1" color="default" curve="sharp" size="sm" icon="solid-person" elevated />
    </div>

    <span>Icon with text</span> <br />
    <div class="flex">
        <EasyButton class="m-1" color="primary" curve="sharp" size="sm" label="text" icon="solid-person" elevated />
        <EasyButton class="m-1" color="warning" curve="sharp" size="sm" label="text"  right-icon="solid-person" elevated />
        <EasyButton class="m-1" color="danger" curve="sharp" size="sm" label="text" icon="solid-person" right-icon="solid-person" elevated />
        <EasyButton class="m-1" color="success" curve="sharp" size="sm" label="text" icon="solid-person" elevated />
        <EasyButton class="m-1" color="transparent" curve="sharp" size="sm" label="text" icon="solid-person" elevated />
        <EasyButton class="m-1" color="default" curve="sharp" size="sm" label="text"  icon="solid-person" elevated />
    </div>

    <div class="flex">
        <EasyButton class="m-1" color="primary" curve="sharp" label="text" icon="solid-person" elevated/>
        <EasyButton class="m-1" color="warning" curve="sharp" label="text"  right-icon="solid-person" elevated />
        <EasyButton class="m-1" color="danger" curve="sharp" label="text" icon="solid-person" right-icon="solid-person" elevated />
        <EasyButton class="m-1" color="success" curve="sharp" label="text" icon="solid-person" elevated />
        <EasyButton class="m-1" color="transparent" curve="sharp" label="text" icon="solid-person" elevated />
        <EasyButton class="m-1" color="default" curve="sharp" label="text"  icon="solid-person" elevated />
    </div>

    <div class="flex">
        <EasyButton class="m-1" color="primary" curve="sharp" size="lg" label="text" icon="solid-person" elevated />
        <EasyButton class="m-1" color="warning" curve="sharp" size="lg" label="text"  right-icon="solid-person" elevated />
        <EasyButton class="m-1" color="danger" curve="sharp" size="lg" label="text" icon="solid-person" right-icon="solid-person" elevated />
        <EasyButton class="m-1" color="success" curve="sharp" size="lg" label="text" icon="solid-person" elevated />
        <EasyButton class="m-1" color="transparent" curve="sharp" size="lg" label="text" icon="solid-person" elevated />
        <EasyButton class="m-1" color="default" curve="sharp" size="lg" label="text"  icon="solid-person" elevated />
    </div>

    <EasyButton class="m-1" color="primary" curve="full" label="text" icon="solid-person" elevated full/>
</template>