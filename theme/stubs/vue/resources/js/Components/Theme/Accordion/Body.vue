<script setup>
import { inject } from 'vue'
import EasyCollapse from "@/Components/Theme/Collapse.vue";
const visible = inject('visible')
</script>

<template>
    <EasyCollapse :show="visible">
        <div class="px-4 py-2">
            <slot />
        </div>
    </EasyCollapse>
</template>