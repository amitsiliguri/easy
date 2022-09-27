<script setup>
import EasyChip from "@/Components/Theme/Chip.vue";
import EasyButton from "@/Components/Theme/Button.vue";
</script>
                
<template>
    <EasyChip elevate size="sm" curve="full" closeable>
        Small Closeable
        <EasyButton curve="full" icon="close" size="sm" class="ml-1"/>
    </EasyChip>

    <EasyChip elevate size="sm" curve="full" class="ml-2">
        Small Chip
    </EasyChip>

    <EasyChip elevate curve="full" class="ml-2" closeable>
        Closable
        <EasyButton curve="full" icon="close" class="ml-1"/>
    </EasyChip>

    <EasyChip elevate size="lg" curve="full" class="ml-2">
        Large Chip
    </EasyChip>
</template>