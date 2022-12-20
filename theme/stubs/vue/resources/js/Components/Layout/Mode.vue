<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue';
import { usePage } from "@inertiajs/inertia-vue3";
import EasyButton from '@/Components/Theme/Button.vue';

const isDark = ref(false);

onMounted(() => {
    isDark.value = usePage().props.value.dark
})

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
    <EasyButton type="button" curve="full" :icon="(isDark) ? 'dark' : 'light'" @click="toggleTheme()" />
</template>