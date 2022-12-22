<script setup>
import { inject } from 'vue'
const toggleVisibility = inject('toggleVisibility')
const visible = inject('visible')
</script>

<template>
    <div class="p-4">
        <button type="button" @click="toggleVisibility()" :aria-expanded="!visible.value">
            <slot />
        </button>
    </div>
</template>