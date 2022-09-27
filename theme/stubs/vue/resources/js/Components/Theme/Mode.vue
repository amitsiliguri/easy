<script setup>
import { ref, onUnmounted, watch } from 'vue';
import EasyButton from '@/Components/Theme/Button.vue';

const isDark = ref(false);

onUnmounted(() => {
    if (isDark.value) {
        document.body.classList.remove('dark')
    }
})

const toggleTheme = () => {
    isDark.value = !isDark.value
}

watch(() => isDark.value, () => {
    toggleClass()
})

const toggleClass = () => {
    if (isDark.value) {
        document.body.classList.add('dark')
    } else {
        document.body.classList.remove('dark')
    }
}

</script>
<template>
    <EasyButton type="button" label="Mode Switcher" @click="toggleTheme()" />
</template>