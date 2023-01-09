<script setup>
import { ref } from 'vue';
import ModeSwitcher from '@/Components/Layout/Mode.vue';
import Menu from '@/Components/Layout/Menu.vue';
import Profile from '@/Components/Layout/Profile.vue';
import EasyButton from '@/Components/Theme/Button.vue';
import { useSizes } from "@/Composables/useSizes.js";
const { size } = useSizes();
const show = ref(false);
const contentHeight = (height) => {
    return (size.screen.height - height);
};
</script>

<template>
    <div class="bg-zinc-100 dark:bg-zinc-800 overflow-hidden h-screen text-zinc-900 dark:text-zinc-100">
        <div class="h-16 px-4 flex items-center">
            <EasyButton color="transparent" type="button" curve="full" icon="hamburger" @click="show = !show"
                class="lg:hidden" />
            <span class="ml-16">Easy UI</span>
            <div class="grow"></div>
            <ModeSwitcher />
            <Profile />
        </div>

        <div class="flex gap-4">

            <aside class="w-72 absolute top-0 bottom-0 z-20 duration-200 flex 2xl:w-80 lg:static lg:flex-none" :class="(show) ? 'left-0' : '-left-72'">
                <Menu />
            </aside>
            <div class="z-10 fixed top-0 bottom-0 left-0 right-0 pointer bg-black opacity-50 dark:opacity-80 opacity-25"
                @click="show = false" v-show="show"></div>
            <div class="grow bg-white dark:bg-zinc-900 rounded-tl-xl">
                <header v-if="$slots.header" class="px-10 py-6">
                    <slot name="header" />
                </header>
                <main class="overflow-y-auto px-10 style-scroll"
                    :style="'height:' + contentHeight(137) + 'px'">
                    <slot />
                </main>
            </div>
        </div>
    </div>
</template>
