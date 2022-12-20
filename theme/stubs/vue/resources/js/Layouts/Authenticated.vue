<script setup>
import ModeSwitcher from '@/Components/Layout/Mode.vue';
import Menu from '@/Components/Layout/Menu.vue';
import Profile from '@/Components/Layout/Profile.vue';
import { useSizes } from "@/Composables/useSizes.js";
const { screen } = useSizes();

const contentHeight = (height) => {
    return (height - 137);
};
</script>

<template>
    <div class="bg-zinc-100 dark:bg-zinc-800 overflow-hidden h-screen text-zinc-900 dark:text-zinc-100">
        <div class="h-16 px-4 flex items-center">
            <span class="ml-16">App Bar</span>
            <div class="grow"></div>
            <ModeSwitcher />
            <Profile />
        </div>

        <div class="flex gap-4">
            <aside class="w-[120rem] flex">
                <Menu />
            </aside>
            <div class="grow bg-white dark:bg-zinc-900 rounded-tl-xl">
                <header v-if="$slots.header" class="px-10 py-6">
                    <slot name="header" />
                </header>
                <main class="overflow-y-auto px-10 style-scroll"
                    :style="'height:' + contentHeight(screen.height) + 'px'">
                    <slot />
                </main>
            </div>
        </div>
    </div>
</template>
