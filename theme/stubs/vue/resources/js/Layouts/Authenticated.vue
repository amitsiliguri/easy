<script setup>
import ModeSwitcher from '@/Components/Theme/Mode.vue';
import BreezeDropdown from '@/Components/Dropdown.vue';
import BreezeDropdownLink from '@/Components/DropdownLink.vue';
import { useSizes } from "@/Composables/useSizes.js";
const { screen } = useSizes();

const contentHeight = (height) => {
    return (height - 137);
};
</script>

<template>
    <div class="bg-gray-100 dark:bg-zinc-800 overflow-hidden h-screen text-zinc-900 dark:text-zinc-100">
        <div class="h-16 px-4 flex items-center">
            <span>App Bar</span>
            <div class="grow"></div>
            <ModeSwitcher />
            <BreezeDropdown align="right" width="48">
                <template #trigger>
                    <span class="inline-flex rounded-md">
                        <button type="button"
                            class="inline-flex items-center px-3 py-2 ml-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150">
                            {{ $page.props.auth.user.name }}

                            <svg class="ml-2 -mr-0.5 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clip-rule="evenodd" />
                            </svg>
                        </button>
                    </span>
                </template>

                <template #content>
                    <BreezeDropdownLink :href="route('logout')" method="post" as="button">
                        Log Out
                    </BreezeDropdownLink>
                </template>
            </BreezeDropdown>
        </div>

        <div class="flex gap-4">
            <aside class="w-[120rem]">{{screen}}</aside>
            <div class="grow bg-white dark:bg-zinc-900 rounded-tl-xl">
                <header v-if="$slots.header" class="px-10 py-6">
                    <slot name="header" />
                </header>
                <main class="overflow-y-auto px-10" :style="'height:' + contentHeight(screen.height) + 'px'">
                    <slot />
                </main>
            </div>
        </div>
    </div>
</template>
