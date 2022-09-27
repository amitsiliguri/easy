<script setup>
import EasyBadge from "@/Components/Theme/Badge.vue";
import EasyButton from "@/Components/Theme/Button.vue";
</script>
            
<template>
    <easy-badge align="left" class="my-4" outlined>
        <easy-button outlined elevated label="Button Badge" icon="solid-person" />
        <template #badgeContent>
            <span class="p-1">100</span>
        </template>
    </easy-badge>
</template>